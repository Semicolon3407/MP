import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const banners = [
    {
        eyebrow: 'Best Sellers',
        title: 'Mobile Cases',
        titleLine2: 'for Every Style',
        desc: 'From slim clear covers to rugged armor — our mobile cases are designed to protect your phone without hiding its beauty. Available for 100+ models across all major brands.',
        cta: 'Shop Mobile Cases',
        link: '/cases',
        image: '/assets/images/Personalized Customized.jpeg',
        imageRight: false,
        accentClass: 'text-accent',
    },
    {
        eyebrow: 'New Drop — 2025',
        title: 'MagSafe Cases',
        titleLine2: 'for iPhone 16 Series',
        desc: 'Shop premium MagSafe cases for iPhone 16, 16 Plus, 16 Pro, and 16 Pro Max. Designed for strong magnetic alignment, smooth wireless charging, and everyday protection.',
        cta: 'Shop Now',
        link: '/cases',
        image: '/assets/images/Frosted MagSafe Phone Case - Dark Blue _ iPhone 15.jpeg',
        imageRight: true,
        accentClass: 'text-accent-secondary',
    },
];

const PromoBannersLarge = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-[#040b3a] space-y-20">
            <div className="max-w-7xl mx-auto space-y-20">
                {banners.map((banner, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex flex-col ${banner.imageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                    >
                        {/* Image */}
                        <div className="w-full lg:w-1/2 rounded-[3rem] overflow-hidden aspect-[4/3] relative group border border-glass-border">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040b3a]/40 to-transparent" />
                        </div>
                        {/* Content */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <span className={`text-[11px] font-black uppercase tracking-[0.3em] ${banner.accentClass}`}>
                                {banner.eyebrow}
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                                {banner.title}<br />{banner.titleLine2}
                            </h2>
                            <p className="text-text-secondary text-base font-medium leading-relaxed max-w-lg">
                                {banner.desc}
                            </p>
                            <Link
                                to={banner.link}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-glass-border hover:border-accent hover:bg-accent text-white font-black uppercase tracking-widest text-[11px] rounded-2xl transition-all group/btn"
                            >
                                {banner.cta}
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PromoBannersLarge;
