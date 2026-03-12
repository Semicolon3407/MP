import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "James Wilson",
        role: "Verified Buyer",
        content: "The quality is simply unmatched. I've tried many luxury cases, but CaseCraft's attention to detail and texture is on another level.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=james"
    },
    {
        name: "Sarah Chen",
        role: "Tech Enthusiast",
        content: "Finally a MagSafe case that actually holds! The magnets are incredibly strong and the slim profile is perfect for my iPhone 16 Pro.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Michael Ross",
        role: "Designer",
        content: "Elegant, durable, and sophisticated. It's not just a case, it's a statement piece. Fast shipping and premium packaging too.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=michael"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-[#040b3a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4">
                        <span className="text-accent text-xs font-black uppercase tracking-[0.3em] block">Customer Reviews</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                            Loved by <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">50,000+</span> <br /> Happy Customers
                        </h2>
                    </div>

                    <div className="flex gap-12 bg-white/5 border border-glass-border rounded-3xl p-8 backdrop-blur-xl">
                        <div className="text-center">
                            <div className="text-3xl font-black text-white mb-1 tracking-tighter">4.9</div>
                            <div className="flex gap-0.5 text-yellow-500 mb-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Average Rating</div>
                        </div>
                        <div className="w-px h-12 bg-glass-border my-auto" />
                        <div className="text-center">
                            <div className="text-3xl font-black text-white mb-1 tracking-tighter">50K+</div>
                            <div className="flex gap-0.5 text-accent mb-1 justify-center">
                                <Quote size={14} fill="currentColor" />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Total Reviews</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white/5 border border-glass-border rounded-[2.5rem] relative group hover:border-accent/40 transition-all duration-500 hover:shadow-glow"
                        >
                            <Quote size={40} className="absolute top-8 right-8 text-accent/10 group-hover:text-accent/20 transition-colors" />

                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>

                            <p className="text-text-secondary font-medium leading-relaxed mb-8 italic">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-glass-border/30">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-accent/20" />
                                <div>
                                    <h4 className="text-white font-black text-sm tracking-wide">{t.name}</h4>
                                    <p className="text-text-secondary text-[10px] font-black uppercase tracking-widest opacity-60">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
