import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, MessageCircleQuestion, CreditCard, Globe, PenTool, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        orderNumber: '',
        message: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'message' && value.length > 500) return;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you within 24 hours.');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            orderNumber: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-[#040b3a] font-inter text-white pb-20 pt-24 md:pt-32">
            <div className="container mx-auto px-4 max-w-[1200px]">
                {/* Page Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 max-w-[800px] mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] text-transparent bg-clip-text pb-1">
                        Get in Touch
                    </h1>
                    <p className="text-lg md:text-[1.125rem] text-white/75">
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 xl:gap-12 mb-20">
                    {/* Contact Form Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-md"
                    >
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">Send us a Message</h2>
                            <p className="text-white/75 text-[0.9375rem]">Fill out the form below and our team will get back to you within 24 hours</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="block text-[0.9375rem] font-medium text-white/90">
                                        First Name <span className="text-[#EC4899]">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="firstName" 
                                        placeholder="John" 
                                        required 
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] transition-all text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="block text-[0.9375rem] font-medium text-white/90">
                                        Last Name <span className="text-[#EC4899]">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName" 
                                        placeholder="Doe" 
                                        required 
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] transition-all text-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-[0.9375rem] font-medium text-white/90">
                                        Email Address <span className="text-[#EC4899]">*</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder="john.doe@email.com" 
                                        required 
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] transition-all text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-[0.9375rem] font-medium text-white/90">
                                        Phone Number
                                    </label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        placeholder="+977 9841234567" 
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] transition-all text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="block text-[0.9375rem] font-medium text-white/90">
                                    Subject <span className="text-[#EC4899]">*</span>
                                </label>
                                <select 
                                    id="subject" 
                                    name="subject" 
                                    required 
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] transition-all [&>option]:bg-[#080f52]"
                                >
                                    <option value="" disabled>Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="order">Order Support</option>
                                    <option value="product">Product Question</option>
                                    <option value="shipping">Shipping & Delivery</option>
                                    <option value="returns">Returns & Refunds</option>
                                    <option value="technical">Technical Issue</option>
                                    <option value="partnership">Partnership Opportunity</option>
                                    <option value="feedback">Feedback & Suggestions</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="orderNumber" className="block text-[0.9375rem] font-medium text-white/90">
                                    Order Number (Optional)
                                </label>
                                <input 
                                    type="text" 
                                    id="orderNumber" 
                                    name="orderNumber" 
                                    placeholder="e.g., CC-2026-001234" 
                                    value={formData.orderNumber}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] transition-all text-white mb-1"
                                />
                                <span className="text-xs text-white/50 block">If your inquiry is related to an order, please provide the order number</span>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-[0.9375rem] font-medium text-white/90">
                                    Message <span className="text-[#EC4899]">*</span>
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={6} 
                                    placeholder="Tell us more about your inquiry..." 
                                    required 
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] transition-all text-white resize-y"
                                ></textarea>
                                <div className="text-right text-xs text-white/50">
                                    <span className={formData.message.length >= 500 ? 'text-[#EC4899]' : ''}>{formData.message.length}</span> / 500 characters
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="w-[200px] h-[50px] bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(137,92,242,0.4)]"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info Sidebar */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        {/* Info Cards */}
                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex gap-4 hover:border-white/20 hover:bg-white/[0.04] transition-all">
                            <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-[#895cf2]/10 to-[#EC4899]/10 border border-[#895cf2]/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center flex-shrink-0">
                                <MapPin size={24} className="text-[#895cf2]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Visit Our Store</h3>
                                <p className="text-[0.9375rem] text-white/75 leading-relaxed mb-1">Thamel, Kathmandu<br/>Nepal 44600</p>
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#895cf2] font-semibold flex items-center gap-1 hover:underline">
                                    Get Directions &rarr;
                                </a>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex gap-4 hover:border-white/20 hover:bg-white/[0.04] transition-all">
                            <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-[#895cf2]/10 to-[#EC4899]/10 border border-[#895cf2]/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center flex-shrink-0">
                                <Phone size={24} className="text-[#895cf2]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                                <p className="text-[0.9375rem] text-white/75 leading-relaxed mb-0.5"><a href="tel:+9779841234567" className="hover:text-[#895cf2]">+977 984-1234567</a></p>
                                <p className="text-[0.9375rem] text-white/75 leading-relaxed mb-2"><a href="tel:+9771234567" className="hover:text-[#895cf2]">+977 1-234567</a></p>
                                <span className="text-xs font-semibold text-[#895cf2] bg-[#895cf2]/10 px-2.5 py-1 rounded-full border border-[#895cf2]/20">Mon-Sat: 9:00 AM - 6:00 PM</span>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex gap-4 hover:border-white/20 hover:bg-white/[0.04] transition-all">
                            <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-[#895cf2]/10 to-[#EC4899]/10 border border-[#895cf2]/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center flex-shrink-0">
                                <Mail size={24} className="text-[#895cf2]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                                <p className="text-[0.9375rem] text-white/75 leading-relaxed mb-0.5"><a href="mailto:support@casecraft.com" className="hover:text-[#895cf2]">support@casecraft.com</a></p>
                                <p className="text-[0.9375rem] text-white/75 leading-relaxed mb-2"><a href="mailto:info@casecraft.com" className="hover:text-[#895cf2]">info@casecraft.com</a></p>
                                <span className="text-[0.8125rem] text-emerald-400 font-medium bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">We reply within 24 hours</span>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex gap-4 hover:border-white/20 hover:bg-white/[0.04] transition-all">
                            <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-[#895cf2]/10 to-[#EC4899]/10 border border-[#895cf2]/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center flex-shrink-0">
                                <Clock size={24} className="text-[#895cf2]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                                <div className="text-[0.9375rem] text-white/75 space-y-1">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#895cf2]/10 to-[#EC4899]/10 border border-[#895cf2]/20 rounded-2xl p-6 text-center shadow-[0_8px_32px_rgba(137,92,242,0.15)] flex flex-col items-center">
                            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                            <p className="text-[0.875rem] text-white/75 mb-6 max-w-[280px]">Follow us on social media for updates, new products, and exclusive offers</p>
                            <div className="flex justify-center gap-3">
                                {[
                                    { icon: Facebook, href: '#' },
                                    { icon: Instagram, href: '#' },
                                    { icon: Twitter, href: '#' }
                                ].map((s, idx) => (
                                    <a key={idx} href={s.href} className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/80 hover:bg-[#895cf2] hover:text-white hover:border-[#895cf2] hover:shadow-[0_4px_12px_rgba(137,92,242,0.4)] hover:-translate-y-1 transition-all">
                                        <s.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
                        <p className="text-lg text-white/75">Quick answers to common questions</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'How long does shipping take?', desc: 'Within Kathmandu Valley: 1-2 business days\nOutside Valley: 3-5 business days', icon: MessageCircleQuestion },
                            { title: 'What\'s your return policy?', desc: 'We offer a 7-day return policy for unused items in original packaging with receipt.', icon: Clock },
                            { title: 'What payment methods do you accept?', desc: 'We accept cash on delivery, bank transfer, eSewa, Khalti, and all major credit/debit cards.', icon: CreditCard },
                            { title: 'Do you ship outside Nepal?', desc: 'Currently, we only ship within Nepal. International shipping will be available soon.', icon: Globe },
                            { title: 'Can I customize my phone case?', desc: 'Yes! We offer custom design services. Contact us with your design requirements.', icon: PenTool },
                            { title: 'How can I track my order?', desc: 'Use our order tracking page with your order number and phone number.', icon: Search }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl hover:border-white/20 hover:bg-white/[0.04] transition-colors group">
                                <div className="w-[45px] h-[45px] bg-[#895cf2]/10 text-[#895cf2] rounded-[10px] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#895cf2]/20 transition-all">
                                    <faq.icon size={22} />
                                </div>
                                <h3 className="text-[1.0625rem] font-semibold mb-2 leading-tight">{faq.title}</h3>
                                <p className="text-[0.9375rem] text-white/70 leading-relaxed whitespace-pre-line">{faq.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
