import { motion } from 'framer-motion';
import { ArrowRight, Sparkle } from 'lucide-react';
import { useTilt } from '../../hooks/useTilt';
import HeroCardSlider from './HeroCardSlider';
import { cn } from '../../utils';

const HeroSection = () => {
    const brandTilt = useTilt();
    const card1Tilt = useTilt();
    const card2Tilt = useTilt();
    const card3Tilt = useTilt();
    const card4Tilt = useTilt();

    const particles = [
        { id: 1, top: '10%', left: '10%', type: 'dot', color: 'accent', delay: 0 },
        { id: 2, top: '7%', right: '14%', type: 'dot', color: 'secondary', delay: -1.5 },
        { id: 3, top: '38%', left: '6%', type: 'dot', color: 'accent', delay: -2.8, sm: true },
        { id: 4, top: '20%', right: '8%', type: 'dot', color: 'accent', delay: -0.6, sm: true },
        { id: 5, top: '60%', left: '14%', type: 'dot', color: 'accent', delay: -3.5, lg: true },
        { id: 6, top: '14%', left: '42%', type: 'sparkle', color: 'accent', delay: -1 },
        { id: 7, top: '68%', right: '10%', type: 'sparkle', color: 'secondary', delay: -4, sm: true },
        { id: 8, top: '45%', right: '22%', type: 'sparkle', color: 'secondary', delay: -2.2, sm: true },
        { id: 9, top: '25%', left: '22%', type: 'ring', color: 'accent', delay: 0 },
        { id: 10, top: '55%', right: '16%', type: 'ring', color: 'secondary', delay: -1.2, sm: true },
        { id: 11, top: '30%', left: '70%', type: 'dot', color: 'accent', delay: -0.8, xs: true },
        { id: 12, top: '75%', left: '35%', type: 'dot', color: 'accent', delay: -3, xs: true },
    ];

    return (
        <section className="relative min-h-[85vh] pt-6 pb-20 overflow-hidden flex items-center bg-[#040b3a]">
            {/* ── Floating Background Orbs ── */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-accent/20 blur-[110px] rounded-full animate-float-orb" style={{ '--dur': '28s' } as any} />
                <div className="absolute bottom-[-15%] left-[-12%] w-[550px] h-[550px] bg-accent-secondary/20 blur-[110px] rounded-full animate-float-orb" style={{ '--dur': '28s', '--delay': '9s' } as any} />
                <div className="absolute top-[40%] left-[40%] w-[500px] h-[500px] bg-accent/15 blur-[110px] rounded-full animate-float-orb" style={{ '--dur': '28s', '--delay': '18s' } as any} />

                {/* AI Grid Background */}
                <div className="absolute inset-0 z-0 opacity-40"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(137, 92, 242, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(137, 92, 242, 0.08) 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                        maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)'
                    }}
                >
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="animate-scan absolute w-[2px] h-[120px] bg-gradient-to-b from-transparent via-accent to-transparent"
                            style={{
                                left: `${(i + 1) * 12}%`,
                                '--dur': `${3 + Math.random() * 2}s`,
                                '--delay': `${-Math.random() * 5}s`
                            } as any}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
                <div className="grid grid-cols-12 grid-rows-2 gap-5 md:h-[520px]">

                    {/* ── Brand Cell (col 1-3, row 1-2) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 28, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        ref={brandTilt.ref}
                        onMouseMove={brandTilt.handleMouseMove}
                        onMouseLeave={brandTilt.handleMouseLeave}
                        className="col-span-12 md:col-span-3 row-span-2 rounded-[20px] p-8 flex flex-col justify-end gap-6 shadow-2xl border border-accent/30 relative overflow-hidden group/brand"
                        style={{
                            background: 'linear-gradient(160deg, rgba(137, 92, 242, 0.2) 0%, rgba(236, 72, 153, 0.07) 60%, transparent 100%), linear-gradient(135deg, #040b3a 0%, #080f52 50%, #06093d 100%)'
                        }}
                    >
                        {/* Diagonal accent streak */}
                        <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(236,72,153,0.3)_0%,rgba(137,92,242,0.12)_40%,transparent_70%)] pointer-events-none z-[1]" />

                        {/* AI Glow bloom */}
                        <div className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 w-[260px] h-[260px] bg-[radial-gradient(circle_at_center,#895cf2_0%,#EC4899_100%)] blur-[120px] opacity-25 group-hover/brand:opacity-50 transition-opacity duration-400 pointer-events-none z-[1]" />

                        {/* Particles */}
                        <div className="absolute inset-0 pointer-events-none z-[1]">
                            {particles.map((p) => (
                                <motion.div
                                    key={p.id}
                                    className="absolute flex items-center justify-center"
                                    initial={{ opacity: 0.5 }}
                                    animate={p.type === 'sparkle' ? {
                                        rotate: [0, 180, 360],
                                        scale: [1, 1.3, 1],
                                        opacity: [0.6, 1, 0.6]
                                    } : p.type === 'ring' ? {
                                        scale: [0.8, 1.6, 0.8],
                                        opacity: [0.8, 0.2, 0.8]
                                    } : {
                                        y: [0, -15, 0],
                                        x: [0, 5, 0],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: p.type === 'sparkle' ? 8 : p.type === 'ring' ? 3 : 7,
                                        repeat: Infinity,
                                        delay: p.delay
                                    }}
                                    style={{
                                        top: p.top,
                                        left: p.left,
                                        right: p.right,
                                    }}
                                >
                                    {p.type === 'sparkle' ? (
                                        <Sparkle
                                            size={p.sm ? 10 : 16}
                                            className={cn("blur-[0.5px]", p.color === 'accent' ? 'text-accent drop-shadow-[0_0_8px_rgba(137,92,242,0.8)]' : 'text-accent-secondary drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]')}
                                            strokeWidth={3}
                                            fill="currentColor"
                                        />
                                    ) : p.type === 'ring' ? (
                                        <div className={cn("rounded-full border-[1.5px] shadow-lg",
                                            p.sm ? "w-[18px] h-[18px] border-accent-secondary/60 shadow-accent-secondary/30" : "w-[28px] h-[28px] border-accent/60 shadow-accent/30"
                                        )} />
                                    ) : (
                                        <div className={cn("rounded-full shadow-lg",
                                            p.xs ? "w-[3px] h-[3px] bg-[#b48bf5] shadow-[#b48bf5]/70" :
                                                p.sm ? "w-[5px] h-[5px] bg-accent-secondary shadow-accent-secondary/60" :
                                                    p.lg ? "w-[11px] h-[11px] bg-accent shadow-accent/50" :
                                                        "w-[8px] h-[8px] bg-accent shadow-accent/60"
                                        )} />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative z-10 space-y-8">
                            <span className="text-[0.75rem] font-medium uppercase tracking-[0.12em] block bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent bg-[size:200%_auto] hover:bg-right transition-all duration-500">
                                New Collection
                            </span>
                            <h1 className="text-3xl md:text-[2.75rem] font-bold tracking-tighter leading-[1.1] text-white">
                                The Perfect Case <br />
                                for Every Phone, <br />
                                <span className="text-white">Every Personality.</span>
                            </h1>
                            <a href="#shop" className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 text-white font-medium text-[0.9rem] rounded-full backdrop-blur-[10px] transition-all hover:translate-x-1 group/btn">
                                Explore Collection
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* ── Card Tall (col 4-6, row 1-2) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 28, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        ref={card1Tilt.ref}
                        onMouseMove={card1Tilt.handleMouseMove}
                        onMouseLeave={card1Tilt.handleMouseLeave}
                        className="col-span-12 md:col-span-3 row-span-2 group relative rounded-[20px] bg-[#050930] border border-accent/30 hover:border-accent/55 transition-all duration-400 overflow-visible"
                    >
                        <HeroCardSlider images={['/assets/images/phone-accessories1.png', '/assets/images/phone-accessories2.png', '/assets/images/phone-accessories3.png']} />
                        <div className="absolute inset-x-0 bottom-0 p-8 z-[2] bg-gradient-to-t from-black/80 to-transparent rounded-b-[20px]">
                            <h3 className="text-sm font-semibold text-white tracking-tight">Phone Accessories</h3>
                        </div>
                    </motion.div>

                    {/* ── Card Wide (col 7-12, row 1-1) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 28, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        ref={card2Tilt.ref}
                        onMouseMove={card2Tilt.handleMouseMove}
                        onMouseLeave={card2Tilt.handleMouseLeave}
                        className="col-span-12 md:col-span-6 row-span-1 group relative rounded-[20px] bg-[#050930] border border-accent/20 hover:border-accent/55 transition-all duration-400 overflow-visible"
                    >
                        <HeroCardSlider images={['/assets/images/all-mobile-cases1.png', '/assets/images/mobile-case2.png', '/assets/images/mobile-case3.png']} />
                        <div className="absolute inset-x-0 bottom-0 p-8 z-[2] bg-gradient-to-t from-black/80 to-transparent rounded-b-[20px]">
                            <h3 className="text-sm font-semibold text-white tracking-tight">Mobile Case</h3>
                        </div>
                    </motion.div>

                    {/* ── Card Square 3 (col 7-9, row 2-2) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 28, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        ref={card3Tilt.ref}
                        onMouseMove={card3Tilt.handleMouseMove}
                        onMouseLeave={card3Tilt.handleMouseLeave}
                        className="col-span-6 md:col-span-3 row-span-1 group relative rounded-[20px] bg-[#050930] border border-accent/20 hover:border-accent/55 transition-all duration-400 overflow-visible"
                    >
                        <HeroCardSlider images={['/assets/images/airpods.png', '/assets/images/airpod-case2.png', '/assets/images/airpod-case3.png']} />
                        <div className="absolute inset-x-0 bottom-0 p-8 z-[2] bg-gradient-to-t from-black/80 to-transparent rounded-b-[20px]">
                            <h3 className="text-sm font-semibold text-white tracking-tight">AirPods</h3>
                        </div>
                    </motion.div>

                    {/* ── Card Square 4 (col 10-12, row 2-2) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 28, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.40, ease: [0.22, 1, 0.36, 1] }}
                        ref={card4Tilt.ref}
                        onMouseMove={card4Tilt.handleMouseMove}
                        onMouseLeave={card4Tilt.handleMouseLeave}
                        className="col-span-6 md:col-span-3 row-span-1 group relative rounded-[20px] bg-[#050930] border border-accent/20 hover:border-accent/55 transition-all duration-400 overflow-visible"
                    >
                        <HeroCardSlider images={['/assets/images/watch-straps.png', '/assets/images/watch-strap2.png', '/assets/images/watch-strap3.png']} />
                        <div className="absolute inset-x-0 bottom-0 p-8 z-[2] bg-gradient-to-t from-black/80 to-transparent rounded-b-[20px]">
                            <h3 className="text-sm font-semibold text-white tracking-tight">Watch Straps</h3>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
