import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Share2, ShoppingCart, Trash2, Bell, Check, Download, ChevronRight, Star } from 'lucide-react';

interface WishlistItem {
    id: string;
    name: string;
    model: string;
    color: string;
    price: number;
    originalPrice?: number;
    discount?: string;
    image: string;
    rating: number;
    reviews: number;
    addedDate: string;
    stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
    stockText: string;
}

const INITIAL_ITEMS: WishlistItem[] = [
    {
        id: '1',
        name: 'Premium Leather MagSafe Case',
        model: 'iPhone 15 Pro Max',
        color: 'Midnight Black',
        price: 6499,
        originalPrice: 9099,
        discount: '29% OFF',
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop',
        rating: 5,
        reviews: 128,
        addedDate: 'Falgun 10, 2082',
        stockStatus: 'in-stock',
        stockText: 'In Stock',
    },
    {
        id: '2',
        name: 'Silicone Protective Case',
        model: 'iPhone 14 Pro',
        color: 'Deep Purple',
        price: 3899,
        image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop',
        rating: 4,
        reviews: 95,
        addedDate: 'Falgun 12, 2082',
        stockStatus: 'in-stock',
        stockText: 'In Stock',
    },
    {
        id: '3',
        name: 'Crystal Clear MagSafe Case',
        model: 'iPhone 15',
        color: 'Clear',
        price: 5199,
        originalPrice: 7799,
        discount: '33% OFF',
        image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=300&h=300&fit=crop',
        rating: 5,
        reviews: 203,
        addedDate: 'Falgun 15, 2082',
        stockStatus: 'low-stock',
        stockText: 'Only 3 Left',
    },
    {
        id: '4',
        name: 'Magnetic Wallet Case',
        model: 'iPhone 15 Pro',
        color: 'Brown Leather',
        price: 5849,
        originalPrice: 7149,
        discount: '18% OFF',
        image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=300&h=300&fit=crop',
        rating: 4,
        reviews: 67,
        addedDate: 'Magh 28, 2082',
        stockStatus: 'out-of-stock',
        stockText: 'Out of Stock',
    },
];

const Wishlist = () => {
    const [items, setItems] = useState<WishlistItem[]>(INITIAL_ITEMS);
    const [addedToCart, setAddedToCart] = useState<string[]>([]);
    const [notified, setNotified] = useState<string[]>([]);

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleAddToCart = (id: string) => {
        setAddedToCart((prev) => [...prev, id]);
        setTimeout(() => {
            removeItem(id);
            setAddedToCart((prev) => prev.filter((itemId) => itemId !== id));
        }, 1500);
    };

    const handleNotifyMe = (id: string) => {
        setNotified((prev) => [...prev, id]);
    };

    const inStockCount = items.filter(
        (i) => i.stockStatus === 'in-stock' || i.stockStatus === 'low-stock'
    ).length;
    const outOfStockCount = items.filter((i) => i.stockStatus === 'out-of-stock').length;
    
    const totalValue = items
        .filter((i) => i.stockStatus !== 'out-of-stock')
        .reduce((acc, item) => acc + item.price, 0);

    const totalSavings = items
        .filter((i) => i.stockStatus !== 'out-of-stock' && i.originalPrice)
        .reduce((acc, item) => acc + (item.originalPrice! - item.price), 0);

    const getStockBadgeClasses = (status: string) => {
        switch (status) {
            case 'in-stock':
                return 'bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30';
            case 'low-stock':
                return 'bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/30';
            case 'out-of-stock':
                return 'bg-[#ef4444]/15 text-[#ef4444] border border-[#ef4444]/30';
            default:
                return 'bg-white/10 text-white border border-white/20';
        }
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-[#040b3a] flex items-center justify-center p-4">
                <div className="text-center space-y-6 max-w-md w-full">
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-glass-border">
                        <Heart size={40} className="text-white/20" />
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-tighter" style={{ background: 'linear-gradient(135deg, #895cf2 0%, #EC4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Your wishlist is empty</h2>
                    <p className="text-text-secondary leading-relaxed">
                        Keep track of your favorite items by adding them to your wishlist.
                    </p>
                    <Link
                        to="/cases"
                        className="inline-flex items-center gap-3 px-[1.5rem] py-[0.875rem] text-white font-semibold text-[0.9375rem] rounded-xl transition-all border-none"
                        style={{ background: 'linear-gradient(135deg, #895cf2 0%, #EC4899 100%)' }}
                    >
                        Browse Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[100vh] py-[2rem] pb-[4rem] px-0 md:py-[1.5rem] md:pb-[3rem]" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.03) 0%, rgba(236, 72, 153, 0.02) 100%)' }}>
            <div className="w-full px-4 mx-auto max-w-none">
                {/* ── Page Header ── */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-[1.5rem] border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-4">
                        <h1 className="text-[2rem] md:text-[2.5rem] font-bold m-0" style={{ background: 'linear-gradient(135deg, #895cf2 0%, #EC4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>My Wishlist</h1>
                        <span className="text-white/75 text-[1.125rem] font-medium">({items.length} items)</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-[1rem] w-full lg:w-auto">
                        <button className="flex items-center justify-center gap-[0.625rem] px-[1.5rem] py-[0.875rem] bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:-translate-y-[2px] rounded-xl text-white text-[0.9375rem] font-semibold transition-all w-full sm:w-auto">
                            <Share2 size={18} />
                            <span>Share Wishlist</span>
                        </button>
                        <button className="flex items-center justify-center gap-[0.625rem] px-[1.5rem] py-[0.875rem] rounded-xl text-white text-[0.9375rem] font-semibold hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(137,92,242,0.3)] transition-all w-full sm:w-auto border-none" style={{ background: 'linear-gradient(135deg, #895cf2 0%, #EC4899 100%)' }} onClick={() => {
                            const inStockItems = items.filter(i => i.stockStatus === 'in-stock');
                            alert(`${inStockItems.length} items added to cart!`);
                        }}>
                            <ShoppingCart size={18} />
                            <span>Add All to Cart</span>
                        </button>
                    </div>
                </div>

                {/* ── Main Layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_380px] gap-[2rem] items-start">
                    
                    {/* ── Left: Items ── */}
                    <div className="flex flex-col gap-[1.5rem] w-full">
                        <AnimatePresence>
                            {items.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                                    className="relative grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-[1.5rem] p-[1.25rem] md:p-[1.5rem] bg-white/[0.03] hover:bg-white/5 border border-white/[0.08] hover:border-[#895cf2]/30 rounded-2xl hover:-translate-y-[2px] transition-all group overflow-hidden"
                                >
                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="absolute top-[1rem] right-[1rem] w-[32px] h-[32px] rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-500 hover:scale-110 flex items-center justify-center transition-all z-10"
                                        aria-label="Remove from wishlist"
                                    >
                                        <Trash2 size={16} />
                                    </button>

                                    {/* Image */}
                                    <div className="relative w-full h-[200px] md:w-[160px] md:h-[160px] rounded-xl overflow-hidden flex-shrink-0">
                                        <Link to={`/product/${item.id}`} className="block w-full h-full">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        </Link>
                                        {/* Stock Badge Overlay */}
                                        <div className={`absolute top-[0.75rem] left-[0.75rem] px-[0.875rem] py-[0.375rem] rounded-[6px] text-[0.75rem] font-bold uppercase tracking-[0.5px] ${getStockBadgeClasses(item.stockStatus)}`}>
                                            {item.stockText}
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="flex flex-col flex-1 pr-0 md:pr-0">
                                        <Link to={`/product/${item.id}`} className="block mb-[0.5rem] w-fit">
                                            <h3 className="text-[1.125rem] md:text-[1.25rem] font-bold text-white hover:text-[#895cf2] transition-colors leading-tight pr-[2rem]">
                                                {item.name}
                                            </h3>
                                        </Link>
                                        
                                        <div className="text-white/75 text-[0.9375rem] mb-[0.75rem]">
                                            <span>{item.model}</span>
                                            <span className="mx-[0.5rem]">•</span>
                                            <span>{item.color}</span>
                                        </div>
                                        
                                        {/* Rating */}
                                        <div className="flex items-center gap-[0.5rem] mb-[0.75rem]">
                                            <div className="flex gap-[0.25rem]">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className={i < item.rating ? "text-[#fbbf24] fill-[#fbbf24]" : "text-white/20 fill-white/10"}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-[0.875rem] text-white/75">({item.reviews} reviews)</span>
                                        </div>

                                        {/* Price block */}
                                        <div className="flex items-center gap-[0.75rem] mb-[0.75rem] flex-wrap">
                                            <span className="text-[1.5rem] font-bold text-white">
                                                NPR {item.price.toLocaleString()}
                                            </span>
                                            {item.originalPrice && (
                                                <span className="text-[1.125rem] text-white/75 line-through">
                                                    NPR {item.originalPrice.toLocaleString()}
                                                </span>
                                            )}
                                            {item.discount && (
                                                <span className="text-[0.875rem] font-bold text-[#22c55e] border border-[#22c55e]/30 px-[0.75rem] py-[0.25rem] rounded-[6px]" style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)' }}>
                                                    {item.discount}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-[0.875rem] text-white/45 m-0">
                                            Added on {item.addedDate}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-row md:flex-col justify-center gap-[0.75rem] flex-shrink-0 mt-[1rem] md:mt-0 w-full md:w-auto">
                                        {item.stockStatus === 'out-of-stock' ? (
                                            <button
                                                onClick={() => handleNotifyMe(item.id)}
                                                disabled={notified.includes(item.id)}
                                                className={`flex-1 md:flex-none flex items-center justify-center gap-[0.5rem] px-[1.5rem] py-[0.875rem] rounded-xl font-semibold text-[0.9375rem] whitespace-nowrap transition-all border-none ${
                                                    notified.includes(item.id)
                                                        ? 'bg-green-500text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)]'
                                                        : 'bg-[#3b82f6]/15 hover:bg-[#3b82f6]/25 border border-[#3b82f6]/30 text-[#3b82f6] hover:-translate-y-[2px]'
                                                }`} style={notified.includes(item.id) ? {background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', color: 'white'} : {}}
                                            >
                                                {notified.includes(item.id) ? (
                                                    <><Check size={18} /> Notification Set</>
                                                ) : (
                                                    <><Bell size={18} /> Notify Me</>
                                                )}
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleAddToCart(item.id)}
                                                disabled={addedToCart.includes(item.id)}
                                                className={`flex-1 md:flex-none flex items-center justify-center gap-[0.5rem] px-[1.5rem] py-[0.875rem] rounded-xl font-semibold text-[0.9375rem] whitespace-nowrap transition-all border-none ${
                                                    addedToCart.includes(item.id)
                                                        ? 'shadow-[0_8px_20px_rgba(34,197,94,0.3)] text-white hover:-translate-y-[2px]'
                                                        : 'text-white hover:-translate-y-[2px] shadow-[0_8px_20px_rgba(137,92,242,0.3)]'
                                                }`}
                                                style={addedToCart.includes(item.id) ? {background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'} : {background: 'linear-gradient(135deg, #895cf2 0%, #EC4899 100%)'}}
                                            >
                                                {addedToCart.includes(item.id) ? (
                                                    <><Check size={18} /> Added</>
                                                ) : (
                                                    <><ShoppingCart size={18} /> Add to Cart</>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* ── Right: Sidebar ── */}
                    <div className="flex flex-col gap-[1.5rem] w-full mt-4 lg:mt-0">
                        
                        {/* Summary Card */}
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-[16px] p-[1.5rem] backdrop-blur-[10px]">
                            <h2 className="text-[1.25rem] font-bold text-white m-0 mb-[1.25rem]">Wishlist Summary</h2>
                            
                            <div className="flex justify-between items-center py-[0.75rem] text-[0.9375rem] text-white/75">
                                <span>Total Items</span>
                                <span className="font-semibold text-white">{items.length}</span>
                            </div>
                            <div className="flex justify-between items-center py-[0.75rem] text-[0.9375rem] text-white/75">
                                <span>In Stock</span>
                                <span className="font-semibold text-[#22c55e]">{inStockCount}</span>
                            </div>
                            <div className="flex justify-between items-center py-[0.75rem] text-[0.9375rem] text-white/75">
                                <span>Out of Stock</span>
                                <span className="font-semibold text-[#ef4444]">{outOfStockCount}</span>
                            </div>

                            <div className="h-[1px] bg-white/[0.08] my-[0.75rem]" />

                            <div className="flex justify-between items-center pt-[1rem] text-[1.125rem] font-bold text-white pb-0 gap-2">
                                <span>Total Value</span>
                                <span className="text-[1.5rem]" style={{ background: 'linear-gradient(135deg, #895cf2 0%, #EC4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>NPR {totalValue.toLocaleString()}</span>
                            </div>
                            
                            {totalSavings > 0 && (
                                <p className="text-[#22c55e] text-[0.875rem] font-semibold mt-[0.75rem] mb-0 text-right w-full block">
                                    Total savings: NPR {totalSavings.toLocaleString()}
                                </p>
                            )}
                        </div>

                        {/* Quick Actions Card */}
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-[16px] p-[1.5rem] backdrop-blur-[10px]">
                            <h3 className="text-[1.125rem] font-bold text-white m-0 mb-[1rem]">Quick Actions</h3>
                            
                            <button className="flex items-center gap-[0.75rem] w-full p-[0.875rem_1rem] bg-white/[0.03] hover:bg-[#895cf2]/10 border border-white/[0.08] hover:border-[#895cf2]/30 rounded-[12px] text-white/75 hover:text-[#895cf2] hover:translate-x-[4px] text-[0.9375rem] font-medium transition-all mb-[0.75rem]">
                                <ShoppingCart size={18} className="flex-shrink-0" />
                                Move All to Cart
                            </button>
                            <button 
                                onClick={() => setItems([])}
                                className="flex items-center gap-[0.75rem] w-full p-[0.875rem_1rem] bg-white/[0.03] hover:bg-[#895cf2]/10 border border-white/[0.08] hover:border-[#895cf2]/30 rounded-[12px] text-white/75 hover:text-[#895cf2] hover:translate-x-[4px] text-[0.9375rem] font-medium transition-all mb-[0.75rem]"
                            >
                                <Trash2 size={18} className="flex-shrink-0" />
                                Clear Wishlist
                            </button>
                            <button className="flex items-center gap-[0.75rem] w-full p-[0.875rem_1rem] bg-white/[0.03] hover:bg-[#895cf2]/10 border border-white/[0.08] hover:border-[#895cf2]/30 rounded-[12px] text-white/75 hover:text-[#895cf2] hover:translate-x-[4px] text-[0.9375rem] font-medium transition-all m-0">
                                <Download size={18} className="flex-shrink-0" />
                                Download List
                            </button>
                        </div>

                        {/* Continue Shopping Card */}
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-[16px] p-[1.5rem] backdrop-blur-[10px]">
                            <h3 className="text-[1.125rem] font-bold text-white m-0 mb-[0.5rem]">Continue Shopping</h3>
                            <p className="text-white/75 text-[0.9375rem] m-0 mb-[1.25rem]">
                                Discover more premium cases and accessories
                            </p>
                            <Link to="/cases" className="flex items-center justify-center gap-[0.625rem] w-full p-[0.875rem_1.5rem] text-white font-semibold text-[0.9375rem] rounded-[12px] hover:-translate-y-[2px] transition-all no-underline border-none hover:shadow-[0_8px_20px_rgba(137,92,242,0.3)]" style={{ background: 'linear-gradient(135deg, #895cf2 0%, #EC4899 100%)' }}>
                                Browse Products 
                                <ChevronRight size={18} />
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
