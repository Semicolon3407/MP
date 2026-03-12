import { Send, CheckCircle2, User, Lock } from 'lucide-react';

const NewsletterSection = () => {
    return (
        <section className="relative py-24 px-4 md:px-8 bg-[#040b3a] border-t border-glass-border overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #895cf2 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full -ml-40 pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-accent-secondary/10 blur-[120px] rounded-full -mr-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
                <div className="flex-1 space-y-8">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full w-fit">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                        <span className="text-accent text-[10px] font-black uppercase tracking-widest">Join Our Community</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[1.1]">
                        Get Exclusive <br />
                        <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">Drops & Deals</span>
                    </h2>

                    <p className="text-text-secondary text-lg font-medium leading-relaxed max-w-xl">
                        Subscribe to receive early access to new collections, exclusive discounts, and insider updates delivered to your inbox weekly.
                    </p>

                    <div className="space-y-6 pt-4">
                        {[
                            { icon: CheckCircle2, title: 'Early Access', desc: 'Be first to shop new releases' },
                            { icon: User, title: 'VIP Discounts', desc: 'Members-only special pricing' },
                            { icon: Lock, title: 'Limited Drops', desc: 'Exclusive limited edition cases' }
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-5 group">
                                <div className="p-3 bg-white/5 border border-glass-border rounded-xl text-accent group-hover:border-accent group-hover:shadow-glow transition-all">
                                    <feature.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm tracking-wide">{feature.title}</h4>
                                    <p className="text-text-secondary text-xs uppercase tracking-widest font-bold opacity-60 mt-0.5">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 w-full max-w-lg">
                    <div className="bg-[#080f52]/50 backdrop-blur-2xl border border-glass-border rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative">
                        <div className="text-center mb-10">
                            <div className="w-20 h-20 bg-accent/20 border border-accent/30 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                                <Send className="text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Subscribe Now</h3>
                            <p className="text-text-secondary text-sm font-bold opacity-60">Join 15,000+ happy subscribers</p>
                        </div>

                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full bg-white/5 border border-glass-border rounded-2xl py-4 px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all font-medium"
                                />
                            </div>
                            <button className="w-full py-4 bg-accent hover:bg-accent-secondary text-white font-black uppercase tracking-widest text-sm rounded-2xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 group/btn">
                                Subscribe
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            <div className="flex items-center justify-center gap-2 text-[10px] text-text-secondary font-bold opacity-60 pt-4 uppercase tracking-tighter">
                                <Lock size={12} />
                                We respect your privacy. Unsubscribe anytime.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
