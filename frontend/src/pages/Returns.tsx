import { Link } from 'react-router-dom';
import { Clock, CheckSquare, CreditCard, XCircle, Headphones, Package, Truck, ArrowLeftRight, Check, AlertCircle, AlertTriangle, ShieldCheck, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Returns = () => {
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
                    <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-4 bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] text-transparent bg-clip-text pb-1 tracking-tight">
                        Returns & Refunds Policy
                    </h1>
                    <p className="text-lg md:text-[1.125rem] text-white/75 leading-relaxed">
                        Your satisfaction is our priority. Learn about our hassle-free return and refund process.
                    </p>
                </motion.div>

                {/* Quick Summary */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
                >
                    {[
                        { title: '7-Day Return', desc: 'Return products within 7 days of delivery', icon: Clock },
                        { title: 'Easy Process', desc: 'Simple return request via email or phone', icon: CheckSquare },
                        { title: 'Quick Refund', desc: 'Refunds processed within 3-5 business days', icon: CreditCard }
                    ].map((s, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all text-center group">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#895cf2]/10 to-[#EC4899]/10 border border-[#895cf2]/20 rounded-xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <s.icon size={28} className="text-[#895cf2]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                            <p className="text-white/75">{s.desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Return Eligibility */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-3">Return Eligibility</h2>
                        <p className="text-white/75">To be eligible for a return, your item must meet the following conditions:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1000px] mx-auto">
                        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] -mr-10 -mt-10" />
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                                    <Check className="text-emerald-400" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-400">Eligible for Return</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    'Returned within 7 days of delivery',
                                    'Item unused and in original condition',
                                    'Original packaging intact with all tags',
                                    'Proof of purchase (order number/invoice)',
                                    'No visible signs of wear or damage',
                                    'All accessories and documentation included'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-white/80">
                                        <Check size={20} className="text-emerald-500/70 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-red-500/30 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] -mr-10 -mt-10" />
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                                    <XCircle className="text-red-400" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-red-400">Not Eligible for Return</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    'More than 7 days since delivery',
                                    'Item shows signs of use or wear',
                                    'Packaging damaged or missing',
                                    'Tags or labels removed',
                                    'Customized or personalized items',
                                    'Hygiene-sensitive products (opened screen protectors)'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-white/80">
                                        <XCircle size={20} className="text-red-500/70 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Return Process */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-3">How to Return an Item</h2>
                        <p className="text-white/75">Follow these simple steps to initiate your return</p>
                    </div>

                    <div className="max-w-[800px] mx-auto relative before:content-[''] before:absolute before:left-[24px] md:before:left-[39px] before:top-4 before:bottom-4 before:w-[2px] before:bg-white/[0.05]">
                        {[
                            { title: 'Contact Us', desc: 'Email us at returns@casecraft.com or call +977 (01) 5123456 with your order number and reason for return.', icon: Headphones },
                            { title: 'Get Approval', desc: 'Our team will review your request within 24 hours and send you return instructions and a return authorization number.', icon: ShieldCheck },
                            { title: 'Pack the Item', desc: 'Carefully pack the item in its original packaging with all accessories, tags, and documentation. Include the return authorization number.', icon: Package },
                            { title: 'Ship or Pickup', desc: 'Either ship the item to our address or schedule a free pickup (available in Kathmandu Valley). We\'ll provide shipping instructions.', icon: Truck },
                            { title: 'Inspection & Refund', desc: 'Once we receive and inspect your return, we\'ll process your refund within 3-5 business days to your original payment method.', icon: CreditCard }
                        ].map((step, index) => (
                            <div key={index} className="relative pl-16 md:pl-24 py-6 group">
                                <div className="absolute left-0 md:left-4 top-6 w-12 h-12 bg-[#040b3a] border-2 border-[#895cf2]/30 rounded-full flex items-center justify-center font-bold text-lg text-[#895cf2] group-hover:bg-[#895cf2] group-hover:text-white transition-all shadow-[0_0_0_4px_#040b3a] z-10">
                                    {index + 1}
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                        <step.icon size={20} className="text-[#895cf2]" />
                                        {step.title}
                                    </h3>
                                    <p className="text-white/75 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Refund Information */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-10">Refund Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Refund Timeline', items: [{ label: 'Inspection:', val: '1-2 business days after receipt' }, { label: 'Processing:', val: '3-5 business days after approval' }, { label: 'Bank Transfer:', val: 'Additional 7-10 days depending on bank' }], icon: Clock },
                            { title: 'Refund Methods', items: [{ label: 'Online Payment:', val: 'Refunded to original method' }, { label: 'Card Payment:', val: 'Refunded to the same card' }, { label: 'Cash on Delivery:', val: 'Bank transfer (provide details)' }], icon: CreditCard },
                            { title: 'Refund Amount', items: [{ label: 'Product Price:', val: 'Full refund of item price' }, { label: 'Shipping:', val: 'Free shipping orders - full refund; Paid - cost deducted' }, { label: 'Return Shipping:', val: 'Customer responsibility unless defective' }], icon: AlertCircle }
                        ].map((info, i) => (
                            <div key={i} className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                                    <info.icon size={24} className="text-[#EC4899]" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                                <div className="space-y-3">
                                    {info.items.map((item, idx) => (
                                        <p key={idx} className="text-[0.9375rem] text-white/70">
                                            <strong className="text-white font-medium">{item.label}</strong> {item.val}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Exchange Policy */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-20 bg-gradient-to-r from-[#895cf2]/10 via-[#EC4899]/10 to-[#895cf2]/10 border border-[#895cf2]/20 rounded-3xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-3">Exchange Policy</h2>
                            <p className="text-lg text-white/80 mb-8">Prefer to exchange instead of return? We make it easy!</p>
                            
                            <h3 className="text-xl font-bold mb-4">How Exchanges Work</h3>
                            <p className="text-white/75 mb-6 leading-relaxed">
                                If you'd like to exchange an item for a different color, size, or model, contact us with your order details. Exchanges are faster than returns and refunds!
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    'Faster processing than return + new order',
                                    'No additional shipping charges for defective items',
                                    'Subject to availability of the new item',
                                    'Same 7-day eligibility window'
                                ].map((b, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                                        <span className="text-white/80">{b}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-start">
                                <AlertCircle className="text-blue-400 flex-shrink-0 mt-0.5" size={20} />
                                <p className="text-[0.9375rem] text-white/70">
                                    <strong className="text-white">Note:</strong> If the new item costs more, you'll need to pay the difference. If it costs less, we'll refund the difference.
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                            <div className="w-[200px] h-[200px] bg-gradient-to-br from-[#895cf2]/20 to-[#EC4899]/20 rounded-full flex items-center justify-center border-4 border-white/5 relative">
                                <ArrowLeftRight size={64} className="text-white/50" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Damaged Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px]" />
                        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <AlertTriangle className="text-amber-500" size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Received a Damaged or Defective Product?</h2>
                                <p className="text-lg text-white/80 mb-8">
                                    We sincerely apologize if you received a damaged or defective item. This is rare, but we're here to make it right immediately.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { t: '1. Contact us within 48 hours', d: 'of receiving the item' },
                                        { t: '2. Provide photos', d: 'of the damaged item and packaging' },
                                        { t: '3. Get instant approval', d: 'for free replacement or full refund' },
                                        { t: '4. Free return pickup', d: 'arranged at your convenience' }
                                    ].map((s, i) => (
                                        <div key={i} className="bg-black/20 rounded-xl p-4 border border-white/5">
                                            <strong className="block text-amber-400 mb-1">{s.t}</strong>
                                            <span className="text-[0.9375rem] text-white/70">{s.d}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[0.9375rem] font-medium text-white/90">
                                    For damaged or defective items, we cover all return shipping costs and prioritize your replacement order.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Important Notes */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-10">Important Notes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Return Shipping Costs', desc: 'Customers are responsible for return shipping costs unless the item is damaged, defective, or we sent the wrong item. We recommend using trackable shipping for returns.' },
                            { title: 'Non-Returnable Items', desc: 'Customized products, items with removed hygiene seals (screen protectors once opened), and sale items marked as "Final Sale" cannot be returned.' },
                            { title: 'Inspection Process', desc: 'All returned items are inspected upon arrival. Items not meeting return criteria may be sent back to you at your expense.' },
                            { title: 'Partial Refunds', desc: 'Partial refunds may be issued for items returned with signs of use, missing components, or damaged packaging not due to our error.' }
                        ].map((n, i) => (
                            <div key={i} className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
                                <h3 className="text-[1.0625rem] font-bold mb-3">{n.title}</h3>
                                <p className="text-[0.9375rem] text-white/70 leading-relaxed">{n.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center bg-gradient-to-br from-[#895cf2]/10 to-[#EC4899]/[0.08] border border-[#895cf2]/20 rounded-3xl p-10 md:p-16 backdrop-blur-md"
                >
                    <h2 className="text-3xl font-bold mb-4">Need Help with a Return?</h2>
                    <p className="text-lg text-white/75 mb-8 max-w-[600px] mx-auto">
                        Our customer support team is here to assist you with any questions about returns and refunds.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="mailto:returns@casecraft.com" className="px-8 py-3.5 bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(137,92,242,0.3)] transition-all">
                            <Mail size={18} />
                            Email Returns Team
                        </a>
                        <Link to="/contact" className="px-8 py-3.5 bg-white/[0.03] border border-white/10 text-white font-semibold rounded-xl flex items-center justify-center hover:bg-white/[0.05] hover:border-[#895cf2]/30 hover:-translate-y-1 transition-all">
                            Contact Support
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Returns;
