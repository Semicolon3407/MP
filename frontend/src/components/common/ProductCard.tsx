import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import type { Product } from '../../types';
import { cn, formatPrice } from '../../utils';
import { useTilt } from '../../hooks/useTilt';

interface ProductCardProps {
    product: Product;
    className?: string;
    view?: 'grid' | 'list';
}

const ProductCard = ({ product, className, view = 'grid' }: ProductCardProps) => {
    const { ref, handleMouseMove, handleMouseLeave } = useTilt();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "group relative bg-bg-glass backdrop-blur-md rounded-2xl border border-glass-border overflow-hidden transition-all duration-300 hover:shadow-glow hover:border-accent",
                view === 'list' && "flex flex-row md:h-48",
                className
            )}
        >
            <Link to={`/product/${product.id}`} className={cn("block w-full h-full", view === 'list' && "flex flex-row w-full")}>
                {/* Badge */}
                {product.badge && (
                    <div className={cn(
                        "absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg",
                        product.badge === 'Hot' ? "bg-gradient-to-r from-red-500 to-pink-500" :
                            product.badge === 'New' ? "bg-gradient-to-r from-accent to-accent-secondary" :
                                "bg-gradient-to-r from-green-500 to-teal-500"
                    )}>
                        {product.badge}
                    </div>
                )}

                {/* Wishlist Button (Stop propagation to prevent link click) */}
                <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-accent hover:text-white transition-all duration-300"
                >
                    <Heart size={16} />
                </button>

                {/* Image Container */}
                <div className={cn(
                    "relative overflow-hidden bg-gradient-to-b from-[#0a0a2a] to-transparent shrink-0",
                    view === 'grid' ? "aspect-square w-full" : "w-40 md:w-48 h-full border-r border-glass-border"
                )}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Quick Add Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[#040b3a] to-transparent backdrop-blur-sm z-20">
                        <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            className="w-full py-3 bg-white text-bg-primary hover:bg-accent hover:text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.95]"
                        >
                            <ShoppingCart size={16} />
                            Quick Add
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className={cn("p-6 space-y-4 flex-1 flex flex-col justify-center", view === 'list' && "p-6")}>
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">{product.brand}</span>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                            <Star size={11} fill="#FACC15" color="#FACC15" />
                            <span className="text-[11px] font-bold text-white">{product.rating}</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-text-primary text-sm line-clamp-2 mix-blend-plus-lighter min-h-[40px] group-hover:text-accent transition-colors mb-1">
                            {product.name}
                        </h3>
                        <p className="text-[11px] text-text-muted font-bold tracking-wide">{product.model}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <span className="text-xl font-black text-text-primary tracking-tight">{formatPrice(product.price)}</span>
                        {product.oldPrice && (
                            <span className="text-sm text-text-muted line-through font-bold opacity-50">{formatPrice(product.oldPrice)}</span>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
