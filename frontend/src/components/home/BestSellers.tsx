import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BEST_SELLERS } from '../../data/mockData';

const badgeColors: Record<string, string> = {
    Hot: 'bg-gradient-to-r from-orange-500 to-red-500',
    New: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    Sale: 'bg-gradient-to-r from-accent to-accent-secondary',
};

const BestSellers = () => {
    const [wishlisted, setWishlisted] = useState<Record<string, boolean>>({});
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleWishlist = (id: string) => {
        setWishlisted(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const visibleCount = 4;
    const maxIndex = Math.max(0, BEST_SELLERS.length - visibleCount);

    const handlePrev = () => setActiveIndex(i => Math.max(0, i - 1));
    const handleNext = () => setActiveIndex(i => Math.min(maxIndex, i + 1));

    const progress = BEST_SELLERS.length > 0
        ? ((activeIndex + 1) / BEST_SELLERS.length) * 100
        : 0;

    return (
        <section className="py-24 px-4 md:px-8 bg-[#040b3a]" id="mobile-case-best-selling">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">Best Sellers</h2>
                    <Link to="/cases" className="text-[11px] font-black uppercase tracking-widest text-accent hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                        View All →
                    </Link>
                </div>

                {/* Product Grid — scrollable on mobile, 4-col grid on lg */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {BEST_SELLERS.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="group relative flex flex-col"
                        >
                            {/* Image Box */}
                            <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#0a0f35] border border-glass-border group-hover:border-accent group-hover:shadow-glow transition-all duration-500 mb-5">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                {/* Badge */}
                                {product.badge && (
                                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white ${badgeColors[product.badge] ?? 'bg-accent'}`}>
                                        {product.badge}
                                    </span>
                                )}
                                {/* Wishlist */}
                                <button
                                    onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20"
                                    aria-label="Add to wishlist"
                                >
                                    <Heart
                                        size={15}
                                        className={wishlisted[product.id] ? 'fill-red-500 text-red-500' : 'text-white'}
                                    />
                                </button>
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#040b3a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            {/* Info */}
                            <Link to={`/product/${product.id}`} className="space-y-1.5">
                                <span className="text-accent text-[10px] font-black uppercase tracking-widest">{product.brand}</span>
                                <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-text-secondary text-[11px] font-bold">{product.model}</p>
                                <div className="flex items-center gap-3 pt-1">
                                    {product.oldPrice && (
                                        <span className="text-text-secondary text-xs line-through">NPR {Math.round(product.oldPrice * 135).toLocaleString()}</span>
                                    )}
                                    <span className="text-white font-black text-sm">NPR {Math.round(product.price * 135).toLocaleString()}</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Progress + Controls */}
                <div className="mt-14 flex items-center gap-8">
                    <div className="h-[2px] flex-1 bg-white/5 relative">
                        <div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent to-accent-secondary transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={activeIndex === 0}
                            className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={activeIndex >= maxIndex}
                            className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
