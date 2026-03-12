import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroCardSliderProps {
    images: string[];
    interval?: number;
}

const HeroCardSlider = ({ images, interval = 3000 }: HeroCardSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[20px]">
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-full h-full"
                    >
                        <motion.img
                            src={images[currentIndex]}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.1]"
                            alt="Hero Product"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 right-4 flex gap-1.5 z-10 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(i);
                        }}
                        className="relative h-[6px] rounded-[3px] bg-white/35 transition-all duration-300 group/dot"
                        style={{ width: currentIndex === i ? '18px' : '6px' }}
                    >
                        {currentIndex === i && (
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: interval / 1000, ease: "linear" }}
                                className="absolute inset-0 bg-white rounded-[3px]"
                            />
                        )}
                        <span className="sr-only">Slide {i + 1}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HeroCardSlider;
