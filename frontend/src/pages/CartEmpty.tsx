import { Link } from 'react-router-dom';
import { ShoppingCart, MoveRight, LayoutGrid, Headphones, Watch, PcCase, ShieldCheck, Truck, RotateCcw, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const CartEmpty = () => {
    const categories = [
        {
            title: 'Phone Cases',
            desc: 'Premium protection for your device',
            icon: LayoutGrid,
            link: '/products'
        },
        {
            title: 'AirPods Cases',
            desc: 'Stylish covers for your AirPods',
            icon: Headphones,
            link: '/products?category=airpods'
        },
        {
            title: 'Watch Straps',
            desc: 'Upgrade your smartwatch style',
            icon: Watch,
            link: '/products?category=watch'
        },
        {
            title: 'Accessories',
            desc: 'Complete your tech collection',
            icon: PcCase,
            link: '/products?category=accessories'
        }
    ];

    const features = [
        {
            title: 'Premium Quality',
            desc: 'Military-grade protection for all products',
            icon: ShieldCheck
        },
        {
            title: 'Free Delivery',
            desc: 'On all orders over NPR 5,000',
            icon: Truck
        },
        {
            title: 'Easy Returns',
            desc: '7-day return policy',
            icon: RotateCcw
        },
        {
            title: 'Fast Delivery',
            desc: 'Ships within 24 hours',
            icon: Zap
        }
    ];

    return (
        <div className="min-h-screen bg-[#040b3a] pt-24 pb-12 font-inter text-white">
            <div className="container mx-auto px-4 max-w-[900px]">

                {/* Main Empty Cart Message */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12 md:py-16"
                >
                    <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] mx-auto mb-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20 rounded-full flex items-center justify-center">
                        <ShoppingCart size={50} className="text-purple-500/60 md:w-[60px] md:h-[60px]" />
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Your Cart is Empty</h1>
                    <p className="text-lg md:text-[1.125rem] text-white/75 mb-12 max-w-[500px] mx-auto">
                        Looks like you haven't added anything to your cart yet.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <Link 
                            to="/products"
                            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] text-white font-semibold rounded-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(137,92,242,0.4)]"
                        >
                            <MoveRight size={18} />
                            Start Shopping
                        </Link>
                        <Link 
                            to="/"
                            className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-purple-500/25 text-white/75 font-semibold rounded-xl flex items-center justify-center transition-all hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-[#895cf2]"
                        >
                            Back to Home
                        </Link>
                    </div>

                    {/* Popular Categories */}
                    <div className="mb-20">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left">Popular Categories</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {categories.map((cat, idx) => (
                                <Link 
                                    key={idx} 
                                    to={cat.link}
                                    className="block p-6 md:p-8 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/25 rounded-2xl transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 hover:shadow-[0_8px_20px_rgba(137,92,242,0.15)] group text-left"
                                >
                                    <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mx-auto mb-5 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                        <cat.icon size={26} className="text-[#895cf2] md:w-[30px] md:h-[30px]" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-center">{cat.title}</h3>
                                    <p className="text-sm text-white/75 text-center leading-relaxed">{cat.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Why Shop With Us */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left">Why Shop With Us?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 text-center">
                            {features.map((feat, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] mb-4 bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] rounded-xl flex items-center justify-center">
                                        <feat.icon size={22} className="text-white md:w-[24px] md:h-[24px]" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-[0.9375rem] md:text-base font-semibold mb-2">{feat.title}</h3>
                                    <p className="text-[0.8125rem] md:text-sm text-white/75 leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default CartEmpty;
