import { motion } from 'framer-motion';
import { CATEGORIES } from '../../data/mockData';

const CategoryGrid = () => {
    return (
        <section className="py-14 px-4 md:px-8 bg-[#040b3a]" id="product-types">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {CATEGORIES.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer flex flex-col items-center"
                        >
                            <div className="relative w-full max-w-[130px] mx-auto aspect-square rounded-[1.25rem] overflow-hidden bg-[#0a0f35] border border-glass-border mb-3 group-hover:border-accent group-hover:shadow-glow transition-all duration-500">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#040b3a]/50 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity" />
                            </div>
                            <h3 className="text-center text-[9px] font-black uppercase tracking-[0.15em] text-text-secondary group-hover:text-accent transition-colors">
                                {category.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
