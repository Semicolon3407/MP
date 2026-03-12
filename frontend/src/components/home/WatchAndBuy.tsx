import { useState } from 'react';
import { WATCH_BUY_DATA } from '../../data/mockData';
import { Play } from 'lucide-react';

const WatchAndBuy = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="py-24 px-4 md:px-8 bg-[#040b3a] overflow-hidden" id="watch-buy">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div className="space-y-4">
                        <span className="text-accent text-[11px] font-black uppercase tracking-[0.3em]">New Arrivals</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">Watch & Buy</h2>
                    </div>
                    <button className="text-accent text-[11px] font-black uppercase tracking-widest hover:translate-x-1 transition-transform">
                        View All →
                    </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {WATCH_BUY_DATA.map((item) => (
                        <div
                            key={item.id}
                            className="group relative"
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-[#0a0f35] border border-glass-border group-hover:border-accent transition-all duration-500">
                                {/* Media Layer */}
                                <div className="absolute inset-0">
                                    {item.video && hoveredId === item.id ? (
                                        <video
                                            src={item.video}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                                        />
                                    )}
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#040b3a] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-8 space-y-4">
                                    {item.badge && (
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${item.type === 'new' ? 'bg-blue-500' : item.type === 'hot' ? 'bg-red-500' : 'bg-accent'
                                            } text-white`}>
                                            {item.badge}
                                        </span>
                                    )}
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-black text-white leading-tight tracking-tight group-hover:text-accent transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-accent text-sm font-black">{item.price}</p>
                                    </div>
                                    <button className="w-full py-3 bg-white/5 border border-white/10 hover:bg-accent text-white font-black uppercase tracking-widest text-[10px] rounded-xl transition-all backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                                        Shop Now
                                    </button>
                                </div>

                                {/* Play Indicator */}
                                {item.video && hoveredId !== item.id && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                                        <Play className="text-white fill-current" size={24} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WatchAndBuy;
