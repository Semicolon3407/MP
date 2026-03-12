import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Send, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#02051a] relative pt-24 pb-12 border-t border-glass-border overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">

                {/* Brand Column */}
                <div className="space-y-8">
                    <Link to="/" className="text-3xl font-black tracking-tighter bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                        Case<span className="text-white">Craft</span>
                    </Link>
                    <p className="text-text-secondary text-sm leading-relaxed font-medium">
                        Premium tech accessories designed for the modern lifestyle. Quality you can trust, style you can feel.
                    </p>
                    <div className="flex gap-4">
                        {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-11 h-11 rounded-xl bg-white/5 border border-glass-border flex items-center justify-center text-text-secondary hover:text-white hover:border-accent hover:shadow-glow transition-all duration-300"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Column */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs">Shop</h4>
                    <ul className="space-y-4">
                        {['Mobile Cases', 'AirPods Cases', 'Phone Accessories', 'Laptop Accessories'].map((item) => (
                            <li key={item}>
                                <Link to="#" className="text-text-secondary text-sm font-medium hover:text-accent transition-colors flex items-center gap-2 group">
                                    <span className="w-0 h-px bg-accent group-hover:w-3 transition-all duration-300" />
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs">Support</h4>
                    <ul className="space-y-5">
                        {[
                            { Icon: MapPin, text: '221B Baker Street, London' },
                            { Icon: Phone, text: '+1 (555) 123-4567' },
                            { Icon: Mail, text: 'support@casecraft.com' }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-text-secondary text-sm font-medium">
                                <item.Icon size={18} className="text-accent shrink-0 mt-0.5" />
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs">Insider Access</h4>
                    <p className="text-text-secondary text-sm mb-6 leading-relaxed font-medium">
                        Join 50k+ enthusiasts and get early access to drops.
                    </p>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-[#080f52]/50 border border-glass-border rounded-xl py-4 px-5 text-sm text-white focus:outline-none focus:border-accent group-hover:border-accent/50 transition-all font-medium backdrop-blur-md"
                        />
                        <button className="absolute right-2 top-2 bottom-2 aspect-square bg-accent hover:bg-accent-secondary text-white rounded-lg flex items-center justify-center transition-all active:scale-[0.9]">
                            <Send size={16} />
                        </button>
                    </div>
                    <p className="mt-4 text-[10px] text-text-muted font-medium">By subscribing, you agree to our Privacy Policy.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-glass-border/30 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 px-4 md:px-8">
                <p className="text-[11px] text-text-muted font-bold uppercase tracking-widest">
                    © 2025 CASECRAFT PREMIUM INC. ALL RIGHTS RESERVED.
                </p>
                <div className="flex gap-10">
                    {['TOS', 'PRIVACY', 'COOKIES'].map(item => (
                        <Link key={item} to="#" className="text-[10px] text-text-muted font-black hover:text-white transition-colors tracking-widest uppercase">{item}</Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
