import { motion } from 'framer-motion';

const VideoCategoryGrid = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-[#040b3a]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Large Video Card */}
                    <div className="md:col-span-2 md:row-span-2 relative aspect-[1/1] md:aspect-[2/1] lg:aspect-square rounded-[3rem] overflow-hidden border border-glass-border">
                        <video
                            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/57a4ef65-0e10-44a0-b06c-77ffbfee868d.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040b3a]/40 to-transparent" />
                    </div>

                    {/* MagSafe Card */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="group relative rounded-[3rem] overflow-hidden bg-[#0a0f35] border border-glass-border hover:border-accent transition-all duration-500"
                    >
                        <div className="aspect-square p-8">
                            <img src="/assets/images/phone-accessories2.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" alt="MagSafe" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-8 space-y-2 bg-gradient-to-t from-[#040b3a] to-transparent">
                            <h3 className="text-xl font-black text-white tracking-tight">MagSafe Cases</h3>
                            <p className="text-text-secondary text-xs font-bold">Magnetic wireless charging</p>
                            <span className="block text-accent text-[10px] font-black uppercase tracking-widest mt-2">200+ Designs</span>
                        </div>
                    </motion.a>

                    {/* Clear Cases Card */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="group relative rounded-[3rem] overflow-hidden bg-[#0a0f35] border border-glass-border hover:border-accent transition-all duration-500"
                    >
                        <div className="aspect-square p-8">
                            <img src="/assets/images/phone-accessories3.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" alt="Clear Cases" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-8 space-y-2 bg-gradient-to-t from-[#040b3a] to-transparent">
                            <h3 className="text-xl font-black text-white tracking-tight">Clear Cases</h3>
                            <p className="text-text-secondary text-xs font-bold">Show off your device</p>
                            <span className="block text-accent text-[10px] font-black uppercase tracking-widest mt-2">150+ Designs</span>
                        </div>
                    </motion.a>

                    {/* AirPods Card */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative rounded-[3rem] overflow-hidden bg-[#0a0f35] border border-glass-border hover:border-accent transition-all duration-500"
                    >
                        <div className="aspect-square p-8">
                            <img src="/assets/images/airpods.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" alt="AirPods" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-8 space-y-2 bg-gradient-to-t from-[#040b3a] to-transparent">
                            <h3 className="text-xl font-black text-white tracking-tight">AirPods Cases</h3>
                            <p className="text-text-secondary text-xs font-bold">Compact protection</p>
                            <span className="block text-accent text-[10px] font-black uppercase tracking-widest mt-2">100+ Designs</span>
                        </div>
                    </motion.a>

                    {/* Watch Bands Card */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="group relative rounded-[3rem] overflow-hidden bg-[#0a0f35] border border-glass-border hover:border-accent transition-all duration-500"
                    >
                        <div className="aspect-square p-8">
                            <img src="/assets/images/watch-straps.png" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" alt="Watch Bands" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-8 space-y-2 bg-gradient-to-t from-[#040b3a] to-transparent">
                            <h3 className="text-xl font-black text-white tracking-tight">Watch Bands</h3>
                            <p className="text-text-secondary text-xs font-bold">Premium straps</p>
                            <span className="block text-accent text-[10px] font-black uppercase tracking-widest mt-2">80+ Designs</span>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default VideoCategoryGrid;
