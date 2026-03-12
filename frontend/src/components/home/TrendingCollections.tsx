import { motion } from 'framer-motion';
import { TRENDING_COLLECTIONS } from '../../data/mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrendingCollections = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-[#040b3a]" id="trending">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">Trending Collections</h2>
                    </div>
                    <button className="text-accent text-[11px] font-black uppercase tracking-widest hover:translate-x-1 transition-transform">
                        View All →
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {TRENDING_COLLECTIONS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-[#0a0f35] border border-glass-border mb-6 group-hover:border-accent group-hover:shadow-glow transition-all duration-500">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#040b3a]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                            </div>
                            <h3 className="text-center text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary group-hover:text-accent transition-colors">
                                {item.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Carousel Controls (Mock) */}
                <div className="mt-12 flex items-center justify-between">
                    <div className="h-[2px] w-full bg-white/5 relative">
                        <div className="absolute left-0 top-0 h-full w-1/4 bg-accent" />
                    </div>
                    <div className="flex gap-4 ml-8">
                        <button className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-white hover:bg-white/5 transition-all">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-white hover:bg-white/5 transition-all">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingCollections;
