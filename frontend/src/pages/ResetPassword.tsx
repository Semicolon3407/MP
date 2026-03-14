import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Key, ShieldCheck, CheckCircle, Eye, EyeOff, Check, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils';

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            Icon: Key,
            title: 'Strong Password',
            desc: 'Create a secure password to protect your account',
            features: ['At least 8 characters', 'Mix of letters & numbers', 'Include special characters']
        },
        {
            Icon: ShieldCheck,
            title: 'Your Security Matters',
            desc: 'We take your account security seriously and protect your data',
            features: ['End-to-End Encryption', 'Two-Factor Authentication', 'Regular Security Audits']
        },
        {
            Icon: CheckCircle,
            title: 'Almost Done!',
            desc: "You're one step away from securing your account",
            features: ['Instant Access After Reset', 'All Data Stays Safe', 'Continue Shopping']
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="min-h-screen bg-[#040b3a] flex flex-col lg:flex-row overflow-hidden font-inter">

            {/* LEFT: Form Section */}
            <div className="w-full lg:w-[60%] flex items-center justify-center p-6 md:p-12 lg:p-20 relative bg-[#040b3a]">
                <div className="w-full max-w-[440px] relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-12">
                            <h1 className="text-[2.5rem] font-bold text-white mb-2 tracking-tight">Reset Password</h1>
                            <p className="text-[1.0625rem] text-white/70">Create a new secure password for your account</p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-[0.9375rem] font-medium text-white block">New Password</label>
                                <div className="relative group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter new password"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3.5 pl-5 pr-12 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-inter"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 p-3.5 text-white/30 hover:text-white/60 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                <span className="block text-[0.875rem] text-white/40 mt-1">At least 8 characters with letters and numbers</span>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[0.9375rem] font-medium text-white block">Confirm Password</label>
                                <div className="relative group">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="Confirm new password"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3.5 pl-5 pr-12 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all font-inter"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 p-3.5 text-white/30 hover:text-white/60 transition-colors"
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#9333ea] to-[#ed4899] text-white font-bold text-[1.0625rem] py-4 rounded-xl transition-all hover:brightness-110 active:scale-[0.99] flex items-center justify-center gap-2 mt-4 shadow-lg shadow-purple-900/20">
                                <span>Reset Password</span>
                                <MoveRight size={18} />
                            </button>
                        </form>

                        <div className="mt-12 text-center">
                            <p className="text-[0.9375rem] text-white/60">
                                Remember your password? {' '}
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
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full animate-float-orb" style={{ '--dur': '20s' } as React.CSSProperties} />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-pink-500/10 blur-[100px] rounded-full animate-float-orb" style={{ '--dur': '24s', '--delay': '2s' } as React.CSSProperties} />

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
                                    <h2 className="text-[2rem] font-bold text-white tracking-tight">{slides[currentSlide].title}</h2>
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

export default ResetPassword;
