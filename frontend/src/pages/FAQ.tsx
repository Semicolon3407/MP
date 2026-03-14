import { useState } from 'react';
import { Search, ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../utils';

type Category = 'all' | 'orders' | 'products' | 'returns' | 'payment' | 'account';

const FAQ = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<Category>('all');
    const [openItem, setOpenItem] = useState<string | null>(null);

    const categories = [
        { id: 'all', label: 'All Questions' },
        { id: 'orders', label: 'Orders & Shipping' },
        { id: 'products', label: 'Products' },
        { id: 'returns', label: 'Returns & Refunds' },
        { id: 'payment', label: 'Payment' },
        { id: 'account', label: 'Account' }
    ];

    const faqData = [
        {
            id: 'orders-1',
            category: 'orders',
            question: 'How long does shipping take?',
            answer: (
                <>
                    <p className="text-[0.9375rem] leading-[1.7] text-white/75 mb-4">Shipping times vary based on your location:</p>
                    <ul className="list-disc pl-6 text-[0.9375rem] leading-[1.7] text-white/75 mb-4 space-y-2">
                        <li><strong className="text-white font-semibold">Within Kathmandu Valley:</strong> 1-2 business days</li>
                        <li><strong className="text-white font-semibold">Outside Valley (major cities):</strong> 3-5 business days</li>
                        <li><strong className="text-white font-semibold">Remote areas:</strong> 5-7 business days</li>
                    </ul>
                    <p className="text-[0.9375rem] leading-[1.7] text-white/75">Orders placed before 2 PM are usually processed the same day. You'll receive a tracking number once your order ships.</p>
                </>
            )
        },
        {
            id: 'orders-2',
            category: 'orders',
            question: 'Do you offer free shipping?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    Yes! We offer free shipping on orders over Rs. 2,000 within Kathmandu Valley. For orders below Rs. 2,000, a flat shipping fee of Rs. 100 applies. Outside the valley, shipping costs are calculated based on your location and order weight.
                </p>
            )
        },
        {
            id: 'orders-3',
            category: 'orders',
            question: 'How can I track my order?',
            answer: (
                <>
                    <p className="text-[0.9375rem] leading-[1.7] text-white/75 mb-4">You can track your order in two ways:</p>
                    <ol className="list-decimal pl-6 text-[0.9375rem] leading-[1.7] text-white/75 mb-4 space-y-2">
                        <li>Visit our <Link to="/order-tracking" className="text-[#895cf2] font-medium hover:underline">Order Tracking</Link> page and enter your order number and phone number</li>
                        <li>Check your email for the tracking link sent when your order ships</li>
                    </ol>
                    <p className="text-[0.9375rem] leading-[1.7] text-white/75">If you have an account, you can also view all your orders in the <Link to="/my-account" className="text-[#895cf2] font-medium hover:underline">My Account</Link> section.</p>
                </>
            )
        },
        {
            id: 'orders-4',
            category: 'orders',
            question: 'Can I change my shipping address after placing an order?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    Yes, but only if your order hasn't been shipped yet. Please contact us immediately at <a href="tel:+97715123456" className="text-[#895cf2] font-medium hover:underline">+977 (01) 5123456</a> or email <a href="mailto:support@casecraft.com" className="text-[#895cf2] font-medium hover:underline">support@casecraft.com</a> with your order number and new address. Once shipped, the address cannot be changed.
                </p>
            )
        },
        {
            id: 'products-1',
            category: 'products',
            question: 'What materials are your cases made from?',
            answer: (
                <>
                    <p className="text-[0.9375rem] leading-[1.7] text-white/75 mb-4">We use premium materials for all our products:</p>
                    <ul className="list-disc pl-6 text-[0.9375rem] leading-[1.7] text-white/75 mb-4 space-y-2">
                        <li><strong className="text-white font-semibold">TPU (Thermoplastic Polyurethane):</strong> Flexible, shock-absorbent, and durable</li>
                        <li><strong className="text-white font-semibold">Polycarbonate:</strong> Hard shell protection with scratch resistance</li>
                        <li><strong className="text-white font-semibold">Silicone:</strong> Soft-touch, anti-slip grip</li>
                        <li><strong className="text-white font-semibold">Genuine Leather:</strong> Premium leather cases for a luxurious feel</li>
                        <li><strong className="text-white font-semibold">Tempered Glass:</strong> For screen protectors with 9H hardness</li>
                    </ul>
                    <p className="text-[0.9375rem] leading-[1.7] text-white/75">All materials are tested for quality and safety standards.</p>
                </>
            )
        },
        {
            id: 'products-2',
            category: 'products',
            question: 'How do I know which case fits my phone?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    Each product page clearly states which phone models the case is compatible with. When browsing, use our filters to select your specific phone model. If you're unsure, check your phone's exact model in Settings &gt; About Phone, or contact our support team for assistance.
                </p>
            )
        },
        {
            id: 'products-3',
            category: 'products',
            question: 'Do your cases support wireless charging?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    Yes! Most of our cases are wireless charging compatible. This information is clearly mentioned on each product page. Look for the "Wireless Charging" badge or check the product specifications. Cases thicker than 3mm may affect wireless charging efficiency.
                </p>
            )
        },
        {
            id: 'products-4',
            category: 'products',
            question: 'Can I customize a phone case with my own design?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    Yes! We offer custom design services for bulk orders (minimum 10 pieces). Contact us at <a href="mailto:custom@casecraft.com" className="text-[#895cf2] font-medium hover:underline">custom@casecraft.com</a> with your design requirements, phone model, and quantity. Our team will provide a quote and timeline within 24 hours.
                </p>
            )
        },
        {
            id: 'returns-1',
            category: 'returns',
            question: 'What is your return policy?',
            answer: (
                <>
                    <p className="text-[0.9375rem] leading-[1.7] text-white/75 mb-4">We offer a 7-day return policy from the date of delivery. To be eligible for a return:</p>
                    <ul className="list-disc pl-6 text-[0.9375rem] leading-[1.7] text-white/75 mb-4 space-y-2">
                        <li>Item must be unused and in original packaging</li>
                        <li>Include all accessories and documentation</li>
                        <li>Provide proof of purchase (order number or invoice)</li>
                        <li>Item must not be damaged or show signs of use</li>
                    </ul>
                    <p className="text-[0.9375rem] leading-[1.7] text-white/75">Contact our support team to initiate a return. Some items may not be eligible for return due to hygiene reasons.</p>
                </>
            )
        },
        {
            id: 'returns-2',
            category: 'returns',
            question: 'How long does it take to receive a refund?',
            answer: (
                <>
                    <p className="text-[0.9375rem] leading-[1.7] text-white/75 mb-4">Once we receive and inspect your returned item, refunds are processed within 3-5 business days. The refund will be credited to your original payment method:</p>
                    <ul className="list-disc pl-6 text-[0.9375rem] leading-[1.7] text-white/75 space-y-2">
                        <li><strong className="text-white font-semibold">Cash on Delivery:</strong> Bank transfer (provide account details)</li>
                        <li><strong className="text-white font-semibold">Online Payment:</strong> Original payment method</li>
                        <li><strong className="text-white font-semibold">Card Payment:</strong> Refund to card (may take 7-10 business days to reflect)</li>
                    </ul>
                </>
            )
        },
        {
            id: 'returns-3',
            category: 'returns',
            question: 'Can I exchange an item instead of returning it?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    Yes! We offer exchanges for different sizes, colors, or models within 7 days of delivery. The exchange process is faster than return and refund. Contact our support team with your order number and desired exchange details. Exchanges are subject to product availability.
                </p>
            )
        },
        {
            id: 'returns-4',
            category: 'returns',
            question: 'What if I receive a damaged or defective product?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    We're sorry if this happens! Contact us immediately (within 48 hours of delivery) with photos of the damaged item and packaging. We'll arrange a free replacement or full refund with free return pickup. Quality is our priority, and defective items are rare.
                </p>
            )
        },
        {
            id: 'payment-1',
            category: 'payment',
            question: 'What payment methods do you accept?',
            answer: (
                <>
                    <p className="text-[0.9375rem] leading-[1.7] text-white/75 mb-4">We accept multiple payment methods for your convenience:</p>
                    <ul className="list-disc pl-6 text-[0.9375rem] leading-[1.7] text-white/75 space-y-2">
                        <li><strong className="text-white font-semibold">Cash on Delivery (COD):</strong> Pay when you receive your order</li>
                        <li><strong className="text-white font-semibold">eSewa:</strong> Digital wallet payment</li>
                        <li><strong className="text-white font-semibold">Khalti:</strong> Digital wallet payment</li>
                        <li><strong className="text-white font-semibold">Bank Transfer:</strong> Direct bank deposit</li>
                        <li><strong className="text-white font-semibold">Credit/Debit Cards:</strong> Visa, Mastercard</li>
                        <li><strong className="text-white font-semibold">Connect IPS:</strong> Internet banking payment</li>
                    </ul>
                </>
            )
        },
        {
            id: 'payment-2',
            category: 'payment',
            question: 'Is it safe to use my credit card on your site?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    Absolutely! We use industry-standard SSL encryption to protect your payment information. All card transactions are processed through secure payment gateways that comply with PCI-DSS standards. We never store your complete card details on our servers.
                </p>
            )
        },
        {
            id: 'payment-3',
            category: 'payment',
            question: 'Can I use multiple payment methods for one order?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    Currently, we only support one payment method per order. However, if you'd like to split your payment, please contact our support team before placing your order, and we'll try to accommodate your request for larger purchases.
                </p>
            )
        },
        {
            id: 'payment-4',
            category: 'payment',
            question: 'Do you offer EMI or installment options?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    Currently, EMI options are not available directly on our site. However, you may be able to convert your purchase to EMI through your credit card bank's portal after the transaction. Check with your bank for available EMI schemes.
                </p>
            )
        },
        {
            id: 'account-1',
            category: 'account',
            question: 'Do I need an account to place an order?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    No, you can checkout as a guest. However, creating an account offers benefits like order tracking, saved addresses, wishlist, faster checkout, and exclusive member offers. It only takes a minute to <Link to="/signup" className="text-[#895cf2] font-medium hover:underline">sign up</Link>!
                </p>
            )
        },
        {
            id: 'account-2',
            category: 'account',
            question: 'How do I reset my password?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    Visit the <Link to="/forgot-password" className="text-[#895cf2] font-medium hover:underline">Forgot Password</Link> page and enter your registered email. You'll receive a password reset link via email within a few minutes. Click the link and set your new password. If you don't receive the email, check your spam folder or contact support.
                </p>
            )
        },
        {
            id: 'account-3',
            category: 'account',
            question: 'Can I change my registered email address?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    Yes, you can update your email address in the <Link to="/my-account" className="text-[#895cf2] font-medium hover:underline">My Account</Link> section under Profile Settings. For security reasons, you'll need to verify both your old and new email addresses through verification links.
                </p>
            )
        },
        {
            id: 'account-4',
            category: 'account',
            question: 'How do I delete my account?',
            answer: (
                <p className="text-[0.9375rem] leading-[1.7] text-white/75">
                    We're sad to see you go! To delete your account, please contact our support team at <a href="mailto:support@casecraft.com" className="text-[#895cf2] font-medium hover:underline">support@casecraft.com</a> with your registered email. We'll process your request within 24-48 hours. Note that this action is permanent and cannot be undone.
                </p>
            )
        }
    ];

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    const filteredFaqs = faqData.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categoryGroups = {
        orders: 'Orders & Shipping',
        products: 'Products',
        returns: 'Returns & Refunds',
        payment: 'Payment',
        account: 'Account'
    } as Record<string, string>;

    return (
        <div className="min-h-screen bg-[#040b3a] pb-[4rem] font-inter">
            <div className="container-fluid max-w-[1200px] mx-auto px-6">
                
                {/* Page Header */}
                <section className="text-center pt-[6rem] pb-[2rem] md:pt-[7rem] md:pb-[3rem] max-w-[800px] mx-auto">
                    <h1 className="text-[clamp(2.5rem,5vw,3rem)] font-bold bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] text-transparent bg-clip-text mb-4 tracking-[-0.02em]">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-[clamp(1rem,2vw,1.125rem)] text-white/75 leading-[1.6] mb-8">
                        Find answers to common questions about our products and services
                    </p>

                    {/* Search Box */}
                    <div className="relative max-w-[600px] mx-auto">
                        <Search className="absolute left-[1.25rem] top-1/2 -translate-y-1/2 w-5 h-5 text-white/75 pointer-events-none" />
                        <input 
                            type="text" 
                            placeholder="Search for answers..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full py-4 pl-[3.5rem] pr-[1.25rem] text-base text-white bg-white/[0.03] border border-white/10 rounded-xl transition-all focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(137,92,242,0.1)] placeholder:text-white/30"
                        />
                    </div>
                </section>

                {/* Quick Links */}
                <section className="pb-[2.5rem]">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id as Category)}
                                className={cn(
                                    "px-5 py-2.5 text-[0.9375rem] font-medium rounded-lg transition-all",
                                    activeCategory === cat.id
                                        ? "bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] text-white font-semibold border border-transparent"
                                        : "text-white/75 bg-white/[0.03] border border-white/10 hover:bg-[#895cf2]/10 hover:border-[#895cf2]/30 hover:text-white"
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="max-w-[900px] mx-auto pb-10">
                    {filteredFaqs.length === 0 ? (
                        <div className="text-center py-10">
                            <p className="text-white/60 text-lg">No questions found matching your search.</p>
                        </div>
                    ) : (
                        Object.keys(categoryGroups).map(catKey => {
                            const catFaqs = filteredFaqs.filter(f => f.category === catKey);
                            if (catFaqs.length === 0) return null;
                            
                            return (
                                <div key={catKey} className="mb-12">
                                    {(activeCategory === 'all' || activeCategory === catKey) && (
                                        <h2 className="text-[1.75rem] font-bold text-white mb-6 pb-3 border-b-2 border-[#895cf2]/20">
                                            {categoryGroups[catKey]}
                                        </h2>
                                    )}
                                    <div className="space-y-4">
                                        {catFaqs.map(faq => {
                                            const isOpen = openItem === faq.id;
                                            return (
                                                <div 
                                                    key={faq.id}
                                                    className={cn(
                                                        "bg-gradient-to-br from-[#895cf2]/[0.03] to-[#EC4899]/[0.02] border rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300",
                                                        isOpen 
                                                            ? "border-[#895cf2]/30 shadow-[0_4px_16px_rgba(137,92,242,0.1)]" 
                                                            : "border-[#895cf2]/25 hover:border-[#895cf2]/20"
                                                    )}
                                                >
                                                    <button 
                                                        onClick={() => toggleItem(faq.id)}
                                                        className="w-full flex items-center justify-between gap-4 p-5 text-[1.0625rem] font-medium text-left transition-colors hover:text-[#895cf2]"
                                                    >
                                                        <span className={cn("flex-1", isOpen ? "text-white font-semibold" : "text-white")}>
                                                            {faq.question}
                                                        </span>
                                                        <ChevronDown 
                                                            className={cn("w-5 h-5 flex-shrink-0 transition-transform duration-300", isOpen ? "rotate-180 text-[#895cf2]" : "text-white/75")}
                                                        />
                                                    </button>
                                                    
                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <div className="px-5 pb-6">
                                                                    {faq.answer}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </section>

                {/* Still Have Questions CTA */}
                <section className="max-w-[800px] mx-auto mt-16 md:mt-24">
                    <div className="bg-gradient-to-br from-[#895cf2]/10 to-[#EC4899]/[0.08] border border-[#895cf2]/20 rounded-2xl p-8 md:p-12 text-center backdrop-blur-md">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] rounded-2xl flex items-center justify-center">
                            <MessageCircleQuestion className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-white mb-3">Still have questions?</h2>
                        <p className="text-[1.0625rem] text-white/75 leading-[1.6] mb-8">
                            Can't find the answer you're looking for? Our customer support team is here to help.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="px-8 py-3.5 bg-gradient-to-r from-[#895cf2] via-[#EC4899] to-[#895cf2] text-white font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(137,92,242,0.3)] transition-all">
                                Contact Support
                            </Link>
                            <a href="tel:+97715123456" className="px-8 py-3.5 bg-white/[0.03] border border-white/10 text-white font-semibold rounded-lg hover:bg-white/[0.05] hover:border-[#895cf2]/30 hover:-translate-y-0.5 transition-all">
                                Call Us
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FAQ;
