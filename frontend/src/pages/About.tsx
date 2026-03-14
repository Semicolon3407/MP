import { Link } from 'react-router-dom';
import { Target, Lightbulb, ShieldCheck, Heart, Sparkles, Leaf, Users, Shield, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen bg-[#040b3a] font-inter text-white pb-20">
            {/* Hero Section */}
            <section className="pt-32 pb-20 text-center px-4 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#895cf2]/10 blur-[120px] rounded-full pointer-events-none" />
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-[800px] mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-4 tracking-tight bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] text-transparent bg-clip-text">
                        About CaseCraft
                    </h1>
                    <p className="text-lg md:text-xl text-white/75 font-medium">
                        Crafting premium protection for your devices since 2020
                    </p>
                </motion.div>
            </section>

            {/* Story Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-[1200px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/70 text-transparent bg-clip-text">Our Story</h2>
                            <p className="text-white/75 leading-relaxed text-[1.0625rem]">
                                CaseCraft began with a simple mission: to provide premium, stylish protection for the devices we love. Founded in 2020 in Kathmandu, Nepal, we started as a small team passionate about technology and design.
                            </p>
                            <p className="text-white/75 leading-relaxed text-[1.0625rem]">
                                What started in a small workshop has grown into a trusted brand known for quality craftsmanship and innovative designs. Today, we serve thousands of customers across Nepal, delivering products that combine functionality with style.
                            </p>
                            <p className="text-white/75 leading-relaxed text-[1.0625rem]">
                                Every case we create is designed with attention to detail, using premium materials that protect your devices while expressing your personal style.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-[#895cf2]/10 to-[#EC4899]/10 rounded-3xl border border-[#895cf2]/20 flex items-center justify-center relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#895cf2]/20 to-[#EC4899]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Target size={60} className="text-[#895cf2]/50" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-[1200px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl hover:border-[#895cf2]/30 transition-colors backdrop-blur-sm relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#895cf2]/10 blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500" />
                            <div className="w-14 h-14 bg-gradient-to-br from-[#895cf2] to-[#EC4899] rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-[0_8px_20px_rgba(137,92,242,0.3)]">
                                <Target className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
                            <p className="text-white/75 leading-relaxed relative z-10 text-[1.0625rem]">
                                To provide premium quality tech accessories that combine superior protection with exceptional design, making technology more personal and stylish for everyone.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl hover:border-[#EC4899]/30 transition-colors backdrop-blur-sm relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EC4899]/10 blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500" />
                            <div className="w-14 h-14 bg-gradient-to-br from-[#EC4899] to-[#895cf2] rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-[0_8px_20px_rgba(236,72,153,0.3)]">
                                <Lightbulb className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h3>
                            <p className="text-white/75 leading-relaxed relative z-10 text-[1.0625rem]">
                                To become Nepal's leading tech accessories brand, recognized for innovation, quality, and customer satisfaction, while expanding our reach across South Asia.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-4 relative">
                <div className="container mx-auto max-w-[1200px]">
                    <div className="text-center max-w-[800px] mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-lg text-white/75">The principles that guide everything we do</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Quality First', desc: 'We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards.', Icon: ShieldCheck },
                            { title: 'Customer Delight', desc: 'Your satisfaction is our success. We go above and beyond to ensure every customer has a great experience.', Icon: Heart },
                            { title: 'Innovation', desc: 'We constantly explore new materials, designs, and technologies to bring you the best products.', Icon: Sparkles },
                            { title: 'Sustainability', desc: 'We\'re committed to eco-friendly practices and reducing our environmental impact with every product.', Icon: Leaf },
                            { title: 'Community Focus', desc: 'We believe in giving back to our community and supporting local talent and initiatives.', Icon: Users },
                            { title: 'Trust & Transparency', desc: 'We build lasting relationships through honest communication and reliable service.', Icon: Shield }
                        ].map((v, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 rounded-2xl hover:border-[#895cf2]/30 hover:bg-[#895cf2]/5 transition-all group"
                            >
                                <div className="w-12 h-12 bg-[#895cf2]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <v.Icon size={24} className="text-[#895cf2]" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                                <p className="text-white/60 leading-relaxed text-[0.9375rem]">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-[1200px]">
                    <div className="bg-gradient-to-r from-[#895cf2]/10 via-[#EC4899]/10 to-[#895cf2]/10 border border-[#895cf2]/20 rounded-3xl p-10 md:p-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { number: '10,000+', label: 'Happy Customers' },
                                { number: '500+', label: 'Products' },
                                { number: '4.8/5', label: 'Average Rating' },
                                { number: '24/7', label: 'Customer Support' }
                            ].map((s, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-white to-white/70 text-transparent bg-clip-text mb-2">{s.number}</div>
                                    <div className="text-sm md:text-base text-[#895cf2] font-semibold tracking-wide uppercase">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-[1200px]">
                    <div className="text-center max-w-[800px] mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CaseCraft?</h2>
                        <p className="text-lg text-white/75">What makes us different from the rest</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 border border-white/10 rounded-3xl overflow-hidden bg-white/[0.01]">
                        {[
                            { title: 'Premium Materials', desc: 'We use only the finest materials - from shock-absorbent TPU to premium leather - ensuring durability and style.' },
                            { title: 'Perfect Fit Guarantee', desc: 'Each case is precisely engineered for your specific device model with perfect cutouts for all buttons and ports.' },
                            { title: 'Local Service', desc: 'Based in Kathmandu with fast delivery across Nepal. Support local business while getting premium products.' },
                            { title: 'Affordable Luxury', desc: 'Premium quality doesn\'t have to break the bank. We offer competitive prices without compromising on quality.' },
                            { title: 'Easy Returns', desc: 'Not satisfied? We offer hassle-free 7-day returns with no questions asked. Your satisfaction is guaranteed.' },
                            { title: 'Wide Selection', desc: 'From minimalist designs to bold statements, we have cases for every style and all major phone brands.' }
                        ].map((w, i) => (
                            <div key={i} className="p-8 border-b border-r last:border-b-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 border-white/10 relative group hover:bg-white/[0.03] transition-colors">
                                <div className="text-4xl font-extrabold text-[#895cf2]/10 mb-4 group-hover:text-[#895cf2]/20 transition-colors">0{i + 1}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{w.title}</h3>
                                <p className="text-white/60 text-[0.9375rem] leading-relaxed">{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-10 px-4 mb-10">
                <div className="container mx-auto max-w-[1200px]">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] rounded-[2rem] p-10 md:p-16 text-center shadow-[0_20px_40px_rgba(137,92,242,0.2)]"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Protect Your Device?</h2>
                        <p className="text-white/90 text-lg mb-8 max-w-[600px] mx-auto">
                            Explore our collection and find the perfect case for your style
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/products" className="px-8 py-4 bg-white text-[#895cf2] font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-1 transition-transform shadow-xl">
                                <span>Shop Now</span>
                                <MoveRight size={18} />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-black/20 text-white font-bold rounded-xl flex items-center justify-center border border-white/20 hover:bg-black/30 hover:-translate-y-1 transition-all">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
