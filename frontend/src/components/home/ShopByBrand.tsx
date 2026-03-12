import { motion } from 'framer-motion';
import { BRANDS } from '../../data/mockData';

const ShopByBrand = () => {
    const devices = [
        { name: 'Iphone Cases', image: '/assets/images/iphone-cases-2sec.webp' },
        { name: 'Samsung Cases', image: '/assets/images/samsung-case-sec2.webp' },
        { name: 'Google Pixel Cases', image: '/assets/images/google-pixel.webp' },
        { name: 'OnePlus Cases', image: '/assets/images/oneplus-case-sec2.webp' },
    ];

    return (
        <section className="py-24 px-4 md:px-8 bg-[#040b3a]" id="shop-device">
            <div className="max-w-7xl mx-auto space-y-24">
                {/* Device Categories */}
                <div className="space-y-12">
                    <div className="flex justify-between items-end">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">Find Your Perfect Case by Brand</h2>
                        <button className="text-accent text-[11px] font-black uppercase tracking-widest hover:translate-x-1 transition-transform">
                            View All →
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {devices.map((device, i) => (
                            <motion.a
                                key={device.name}
                                href="#"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative aspect-[3/2] rounded-[2.5rem] overflow-hidden border border-glass-border hover:border-accent transition-all duration-500"
                            >
                                <img src={device.image} alt={device.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#040b3a] via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-8 left-8">
                                    <h3 className="text-xl font-black text-white tracking-tight">{device.name}</h3>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {BRANDS.map((brand, i) => (
                        <motion.div
                            key={brand.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#0a0f35] border border-glass-border flex items-center justify-center p-8 group-hover:border-accent group-hover:bg-[#080f52] transition-all duration-500">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="max-w-full max-h-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100" />
                            </div>
                            <span className="mt-4 block text-center text-[10px] font-black uppercase tracking-widest text-text-secondary group-hover:text-accent transition-colors">
                                {brand.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByBrand;
