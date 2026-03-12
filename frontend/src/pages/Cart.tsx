import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Trash2, Shield, Package, Clock, RotateCcw, ChevronRight } from 'lucide-react';

interface CartItem {
    id: string;
    name: string;
    model: string;
    color: string;
    price: number;
    unitPrice: number;
    qty: number;
    image: string;
}

const INITIAL_ITEMS: CartItem[] = [
    {
        id: '1',
        name: 'Premium Leather MagSafe Case',
        model: 'iPhone 15 Pro Max',
        color: 'Midnight Black',
        price: 12998,
        unitPrice: 6499,
        qty: 2,
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop',
    },
    {
        id: '2',
        name: 'Silicone Protective Case',
        model: 'iPhone 14 Pro',
        color: 'Ocean Blue',
        price: 3899,
        unitPrice: 3899,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=200&h=200&fit=crop',
    },
    {
        id: '3',
        name: 'Crystal Clear MagSafe Case',
        model: 'iPhone 15',
        color: 'Clear',
        price: 5202,
        unitPrice: 5202,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=200&h=200&fit=crop',
    },
];

const DELIVERY_CHARGE = 100;
const VAT_RATE = 0.13;

const CITIES = [
    'Kathmandu', 'Pokhara', 'Lalitpur', 'Bhaktapur', 'Biratnagar',
    'Birgunj', 'Dharan', 'Hetauda', 'Janakpur', 'Butwal', 'Other City',
];

const features = [
    { icon: Shield, title: 'Drop Protection', desc: 'Military-grade certified protection for your device' },
    { icon: Package, title: 'Free Delivery', desc: 'Free delivery on all orders over NPR 5,000' },
    { icon: RotateCcw, title: 'Easy Returns', desc: 'Hassle-free 7-day return policy' },
    { icon: Clock, title: 'Fast Delivery', desc: 'Ships within 24 hours of order placement' },
];

const Cart = () => {
    const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);
    const [city, setCity] = useState('kathmandu');
    const [promoCode, setPromoCode] = useState('');

    const updateQty = (id: string, delta: number) => {
        setItems(prev => prev.map(item =>
            item.id === id
                ? {
                    ...item,
                    qty: Math.min(10, Math.max(1, item.qty + delta)),
                    price: item.unitPrice * Math.min(10, Math.max(1, item.qty + delta)),
                }
                : item
        ));
    };

    const removeItem = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = items.reduce((acc, item) => acc + item.price, 0);
    const vat = Math.round(subtotal * VAT_RATE);
    const total = subtotal + DELIVERY_CHARGE + vat;

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-[#040b3a] flex items-center justify-center">
                <div className="text-center space-y-6">
                    <ShoppingBag size={80} className="text-white/20 mx-auto" />
                    <h2 className="text-3xl font-black text-white tracking-tighter">Your cart is empty</h2>
                    <p className="text-text-secondary">Looks like you haven't added anything yet.</p>
                    <Link
                        to="/cases"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-accent-secondary transition-all"
                    >
                        <ShoppingBag size={18} />
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#040b3a]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">

                {/* ── Page Header ── */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                    <div className="flex items-baseline gap-3">
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter">Shopping Cart</h1>
                        <span className="text-text-secondary text-sm font-semibold">({items.length} items)</span>
                    </div>
                    <Link
                        to="/cases"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-white text-sm font-semibold transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Continue Shopping
                    </Link>
                </div>

                {/* ── Main 2-column layout ── */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* ── Left: Cart Items ── */}
                    <div className="flex-1 space-y-4">
                        {items.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ delay: i * 0.05 }}
                                layout
                                className="flex gap-5 p-5 bg-white/[0.04] border border-glass-border rounded-2xl hover:border-accent/40 transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-[#0a0f35] border border-glass-border flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0 space-y-1.5">
                                    <h3 className="text-white font-semibold text-sm leading-snug">{item.name}</h3>
                                    <p className="text-text-secondary text-xs">
                                        <span className="font-semibold text-white/50">Model:</span> {item.model}
                                    </p>
                                    <p className="text-text-secondary text-xs">
                                        <span className="font-semibold text-white/50">Color:</span> {item.color}
                                    </p>

                                    {/* Mobile: qty + price row */}
                                    <div className="flex items-center justify-between pt-2 flex-wrap gap-3">
                                        {/* Quantity stepper */}
                                        <div className="flex items-center gap-0 border border-glass-border rounded-xl overflow-hidden">
                                            <button
                                                onClick={() => updateQty(item.id, -1)}
                                                className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/10 transition-colors text-lg font-bold"
                                            >
                                                −
                                            </button>
                                            <input
                                                type="number"
                                                value={item.qty}
                                                min={1}
                                                max={10}
                                                readOnly
                                                className="w-10 h-9 text-center bg-transparent text-white text-sm font-bold border-0 outline-none"
                                            />
                                            <button
                                                onClick={() => updateQty(item.id, 1)}
                                                className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/10 transition-colors text-lg font-bold"
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div className="text-right">
                                            <p className="text-white font-black text-base">
                                                NPR {item.price.toLocaleString()}
                                            </p>
                                            {item.qty > 1 && (
                                                <p className="text-text-secondary text-xs">
                                                    NPR {item.unitPrice.toLocaleString()} each
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Remove button */}
                                <button
                                    onClick={() => removeItem(item.id)}
                                    aria-label="Remove item"
                                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white/30 hover:text-red-400 hover:bg-red-500/10 border border-glass-border hover:border-red-500/30 transition-all self-start"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* ── Right: Order Summary ── */}
                    <div className="w-full lg:w-[360px] flex-shrink-0">
                        <div className="bg-white/[0.04] border border-glass-border rounded-2xl p-6 space-y-5 sticky top-24">
                            <h2 className="text-xl font-black text-white tracking-tight">Order Summary</h2>

                            {/* Deliver to */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">
                                    Deliver to
                                </label>
                                <select
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                    className="w-full bg-white/5 border border-glass-border rounded-xl py-3 px-4 text-white text-sm font-medium focus:outline-none focus:border-accent transition-all appearance-none"
                                >
                                    {CITIES.map(c => (
                                        <option key={c} value={c.toLowerCase().replace(' ', '-')} className="bg-[#080f52]">
                                            {c}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="h-px bg-glass-border" />

                            {/* Promo code */}
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter promo code"
                                        value={promoCode}
                                        onChange={e => setPromoCode(e.target.value)}
                                        className="flex-1 bg-white/5 border border-glass-border rounded-xl py-3 px-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-accent transition-all"
                                    />
                                    <button className="px-4 py-3 bg-accent/20 border border-accent/30 hover:bg-accent text-accent hover:text-white text-sm font-black uppercase tracking-wider rounded-xl transition-all">
                                        Apply
                                    </button>
                                </div>
                                <p className="text-text-secondary text-xs">Have a promo code? Enter it here for discount</p>
                            </div>

                            <div className="h-px bg-glass-border" />

                            {/* Cost breakdown */}
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-text-secondary">Subtotal ({items.length} items)</span>
                                    <span className="text-white font-semibold">NPR {subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-text-secondary">Delivery Charge</span>
                                    <span className="text-white font-semibold">NPR {DELIVERY_CHARGE}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-text-secondary">VAT (13%)</span>
                                    <span className="text-white font-semibold">NPR {vat.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="h-px bg-glass-border" />

                            <div className="flex justify-between items-center">
                                <span className="text-white font-black text-base">Total Amount</span>
                                <span className="text-accent font-black text-xl">NPR {total.toLocaleString()}</span>
                            </div>

                            {/* Checkout CTA */}
                            <Link
                                to="/checkout"
                                className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-accent to-accent-secondary text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-accent/20 group"
                            >
                                <span>Proceed to Checkout</span>
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                to="/cases"
                                className="w-full flex items-center justify-center py-3.5 bg-white/5 border border-glass-border hover:border-accent text-white/70 hover:text-white font-semibold text-sm rounded-2xl transition-all"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Feature Cards ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-start gap-4 p-5 bg-white/[0.04] border border-glass-border rounded-2xl hover:border-accent/40 transition-all"
                        >
                            <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0">
                                <f.icon size={20} className="text-accent" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm mb-1">{f.title}</h3>
                                <p className="text-text-secondary text-xs leading-snug">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Cart;
