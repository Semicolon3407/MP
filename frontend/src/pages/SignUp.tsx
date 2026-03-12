import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, MoveRight, Apple, Shield, Truck, Layers, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            Icon: Layers,
            title: 'Premium Quality',
            desc: 'Discover handcrafted mobile cases designed with precision and style for your device',
            features: ['Lifetime Warranty', 'Free Shipping', '30-Day Returns']
        },
        {
            Icon: Truck,
            title: 'Fast Delivery',
            desc: 'Get your premium cases delivered to your doorstep within 2-3 business days',
            features: ['Express Shipping Available', 'Track Your Order', 'Secure Packaging']
        },
        {
            Icon: Shield,
            title: 'Secure Shopping',
            desc: 'Shop with confidence knowing your data is protected with industry-leading security',
            features: ['Encrypted Payments', 'Secure Checkout', 'Privacy Protected']
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#040b3a] flex flex-col lg:flex-row overflow-hidden font-inter">

            {/* LEFT: Form Section */}
            <div className="w-full lg:w-[60%] flex items-center justify-center p-6 md:p-12 lg:p-20 relative bg-[#040b3a]">
                <div className="w-full max-w-[480px] relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-10">
                            <h1 className="text-[2.5rem] font-bold text-white mb-2 tracking-tight">Create Account</h1>
                            <p className="text-[1.0625rem] text-white/70">Join us today and start your shopping journey</p>
                        </div>

                        <form className="space-y-5">
                            <div className="space-y-2.5">
                                <label className="text-[0.9375rem] font-medium text-white block">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3 px-5 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all shadow-sm"
                                />
                            </div>

                            <div className="space-y-2.5">
                                <label className="text-[0.9375rem] font-medium text-white block">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3 px-5 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all shadow-sm"
                                />
                            </div>

                            <div className="space-y-2.5">
                                <label className="text-[0.9375rem] font-medium text-white block">Password</label>
                                <div className="relative group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Create a password"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3 pl-5 pr-12 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-medium shadow-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-white/30 hover:text-white/60 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                <small className="text-[0.8125rem] text-white/40 block mt-1">At least 8 characters</small>
                            </div>

                            <div className="space-y-2.5">
                                <label className="text-[0.9375rem] font-medium text-white block">Confirm Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Confirm your password"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3 px-5 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-medium shadow-sm"
                                />
                            </div>

                            <label className="flex items-start gap-3 cursor-pointer select-none py-2">
                                <div className="relative flex items-center mt-1">
                                    <input
                                        type="checkbox"
                                        className="peer appearance-none w-5 h-5 rounded border border-white/20 bg-white/10 checked:bg-accent checked:border-accent transition-all cursor-pointer"
                                    />
                                    <Check className="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-[0.9375rem] text-white/70 leading-relaxed">
                                    I agree to the <Link to="#" className="text-accent hover:text-accent-secondary transition-colors underline-offset-4 font-bold">Terms & Conditions</Link>
                                </span>
                            </label>

                            <button className="w-full bg-gradient-to-r from-[#9333ea] to-[#ed4899] text-white font-bold text-[1.0625rem] py-4 rounded-xl transition-all hover:brightness-110 active:scale-[0.99] flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20 mt-2">
                                Create Account
                                <MoveRight size={18} />
                            </button>
                        </form>

                        <div className="relative my-10 flex items-center">
                            <div className="flex-grow border-t border-white/10"></div>
                            <span className="flex-shrink mx-4 text-[0.9375rem] text-white/30 font-medium whitespace-nowrap">or continue with</span>
                            <div className="flex-grow border-t border-white/10"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-3 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white font-semibold text-[0.9375rem] hover:bg-white/[0.08] transition-all">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-3 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white font-semibold text-[0.9375rem] hover:bg-white/[0.08] transition-all">
                                <Apple size={20} fill="currentColor" />
                                Apple
                            </button>
                        </div>

                        <div className="mt-10 text-center">
                            <p className="text-[0.9375rem] text-white/60">
                                Already have an account? {' '}
                                <Link to="/signin" className="text-accent font-bold hover:text-accent-secondary transition-colors">Sign In</Link>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* RIGHT: Info Section with Carousel */}
            <div className="hidden lg:flex w-full lg:w-[40%] bg-[#080f52] relative items-center justify-center overflow-hidden min-h-screen">
                {/* Decorative background gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#080f48] via-[#0b135e] to-[#121b7a]" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full animate-float-orb" style={{ '--dur': '20s' } as any} />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-pink-500/10 blur-[100px] rounded-full animate-float-orb" style={{ '--dur': '24s', '--delay': '10s' } as any} />

                <div className="relative z-10 w-full max-w-[480px] px-10">
                    <div className="relative min-h-[500px] flex flex-col items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col items-center text-center space-y-8 h-full"
                            >
                                {/* Premium Icon Box */}
                                <div className="w-[120px] h-[120px] rounded-[32px] bg-gradient-to-br from-[#9333ea] to-[#ed4899] flex items-center justify-center text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] p-0.5">
                                    <div className="w-full h-full rounded-[30px] bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center backdrop-blur-sm">
                                        {(() => {
                                            const Icon = slides[currentSlide].Icon;
                                            return <Icon size={44} strokeWidth={1.5} />;
                                        })()}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-[2rem] font-bold text-white tracking-tight leading-tight">{slides[currentSlide].title}</h2>
                                    <p className="text-[1.0625rem] text-white/50 leading-relaxed font-medium">
                                        {slides[currentSlide].desc}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3.5 w-full pt-4">
                                    {slides[currentSlide].features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-4 py-3.5 px-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm text-left group hover:bg-white/5 transition-all">
                                            <div className="w-5 h-5 flex items-center justify-center text-accent">
                                                <Check size={18} strokeWidth={3} />
                                            </div>
                                            <span className="text-[0.9375rem] text-white/90 font-semibold">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicators matching the image */}
                    <div className="flex justify-center items-center gap-2.5 mt-16">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={cn(
                                    "transition-all duration-500 rounded-full",
                                    currentSlide === i
                                        ? "w-8 h-2.5 bg-gradient-to-r from-[#9333ea] to-[#ed4899]"
                                        : "w-2.5 h-2.5 bg-white/20 hover:bg-white/30"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
