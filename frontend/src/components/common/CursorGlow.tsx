import { useEffect, useState } from 'react';

const CursorGlow = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (['BUTTON', 'A', 'INPUT'].includes(target.tagName) || target.closest('.product-card') || target.closest('.category-card')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

    return (
        <div
            className="cursor-glow"
            style={{
                left: `${position.x - 60}px`,
                top: `${position.y - 60}px`,
                background: isHovering
                    ? 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(137, 92, 242, 0.15) 0%, transparent 70%)'
            }}
        />
    );
};

export default CursorGlow;
