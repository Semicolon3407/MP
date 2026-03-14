import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Copy, CreditCard, ExternalLink, MapPin, Package, Printer, Truck } from 'lucide-react';
import { useState } from 'react';

// Order Info Types
interface OrderItem {
    id: string;
    name: string;
    model: string;
    color: string;
    price: number;
    quantity: number;
    image: string;
}

const ORDER_ITEMS: OrderItem[] = [
    {
        id: '1',
        name: 'Premium Leather MagSafe Case',
        model: 'iPhone 15 Pro Max',
        color: 'Midnight Black',
        price: 12998,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=80&h=80&fit=crop',
    },
    {
        id: '2',
        name: 'Silicone Protective Case',
        model: 'iPhone 14 Pro',
        color: 'Deep Purple',
        price: 3899,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=80&h=80&fit=crop',
    },
    {
        id: '3',
        name: 'Crystal Clear MagSafe Case',
        model: 'iPhone 15',
        color: 'Clear',
        price: 5202,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=80&h=80&fit=crop',
    }
];

export const OrderConfirmation = () => {
    const [copied, setCopied] = useState(false);
    
    const handleCopyToken = () => {
        navigator.clipboard.writeText("CC-2026-001234");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-[100vh] bg-[#040b3a] py-[3rem] pb-[4rem] px-0 md:py-[2rem] md:pb-[3rem]">
            <div className="w-full px-4 mx-auto max-w-none lg:max-w-[1400px]">
                
                {/* ── Success Header ── */}
                <div className="text-center mb-[3rem] py-[2rem]">
                    <div className="w-[80px] h-[80px] mx-auto mb-[1.5rem] bg-gradient-to-br from-[#22c55e]/15 to-[#10b981]/10 border-2 border-[#22c55e]/30 rounded-full flex items-center justify-center relative">
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 10px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0)"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-full"
                        />
                        <Check className="w-[40px] h-[40px] text-[#22c55e] z-10" strokeWidth={2.5} />
                    </div>
                    
                    <h1 className="text-[2.5rem] md:text-[2rem] font-bold text-white mb-[1rem] tracking-tight">
                        Order Confirmed!
                    </h1>
                    
                    <p className="text-[1.125rem] text-white/75 max-w-[600px] mx-auto mb-[1.5rem] leading-relaxed">
                        Thank you for your purchase. We've sent a confirmation email to <strong className="text-white font-semibold">customer@email.com</strong>
                    </p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 font-mono text-[1.125rem] font-bold text-[#895cf2] p-[0.875rem_1.75rem] rounded-[12px] border-[2px] border-[#895cf2]/30 tracking-[0.5px] cursor-pointer hover:bg-[#895cf2]/20 transition-colors"
                        style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.15) 0%, rgba(236, 72, 153, 0.1) 100%)' }}
                        onClick={handleCopyToken}
                        title="Click to copy"
                    >
                        <span>Order #CC-2026-001234</span>
                        {copied ? <Check size={18} className="text-[#22c55e]" /> : <Copy size={18} />}
                    </motion.div>
                </div>

                {/* ── Order Details Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-[2.5rem] items-start">
                    
                    {/* ── Left Column ── */}
                    <div className="flex flex-col gap-[1.5rem]">
                        
                        {/* Order Information */}
                        <div className="border border-[#895cf2]/25 rounded-[16px] md:rounded-[12px] p-[2rem] md:p-[1.5rem] backdrop-blur-[10px]" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.03) 0%, rgba(236, 72, 153, 0.02) 100%)' }}>
                            <div className="flex justify-between items-center mb-[1.5rem] flex-wrap gap-[1rem]">
                                <h2 className="text-[1.25rem] md:text-[1.125rem] font-semibold text-white m-0 flex items-center gap-[0.75rem]">
                                    <Package className="text-[#895cf2]" />
                                    Order Information
                                </h2>
                                <span className="font-mono text-[1rem] font-semibold text-[#895cf2] bg-[#895cf2]/10 p-[0.5rem_1rem] rounded-[8px] border border-[#895cf2]/20">
                                    #CC-2026-001234
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
                                <div className="flex flex-col gap-[0.5rem]">
                                    <span className="text-[0.875rem] text-white/75 uppercase tracking-[0.5px] font-medium">Order Date</span>
                                    <span className="text-[1rem] text-white font-medium flex items-center gap-[0.5rem]">
                                        Falgun 16, 2082 (Feb 28, 2026)
                                    </span>
                                </div>
                                <div className="flex flex-col gap-[0.5rem]">
                                    <span className="text-[0.875rem] text-white/75 uppercase tracking-[0.5px] font-medium">Order Status</span>
                                    <span className="inline-flex items-center gap-[0.5rem] p-[0.5rem_1rem] border rounded-[8px] text-[0.875rem] font-semibold w-fit bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/20">
                                        <Truck size={16} /> Processing
                                    </span>
                                </div>
                                <div className="flex flex-col gap-[0.5rem]">
                                    <span className="text-[0.875rem] text-white/75 uppercase tracking-[0.5px] font-medium">Payment Method</span>
                                    <span className="text-[1rem] text-white font-medium flex items-center gap-[0.625rem]">
                                        <CreditCard size={20} className="text-[#895cf2] flex-shrink-0" />
                                        Cash on Delivery
                                    </span>
                                </div>
                                <div className="flex flex-col gap-[0.5rem]">
                                    <span className="text-[0.875rem] text-white/75 uppercase tracking-[0.5px] font-medium">Delivery Location</span>
                                    <span className="text-[1rem] text-white font-medium flex items-center gap-[0.5rem]">
                                        <MapPin size={16} className="text-[#895cf2]" /> Kathmandu Valley
                                    </span>
                                </div>
                                <div className="flex flex-col gap-[0.5rem] md:col-span-2">
                                    <span className="text-[0.875rem] text-white/75 uppercase tracking-[0.5px] font-medium">Estimated Delivery</span>
                                    <span className="text-[1rem] text-[#895cf2] font-semibold flex items-center gap-[0.5rem]">
                                        3-5 Working Days
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="border border-[#895cf2]/25 rounded-[16px] md:rounded-[12px] p-[2rem] md:p-[1.5rem] backdrop-blur-[10px]" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.03) 0%, rgba(236, 72, 153, 0.02) 100%)' }}>
                            <h2 className="text-[1.25rem] md:text-[1.125rem] font-semibold text-white mb-[1.5rem] flex items-center gap-[0.75rem]">
                                <ShoppingCartIcon className="text-[#895cf2]" />
                                Order Items
                            </h2>

                            <div className="flex flex-col gap-[1.5rem]">
                                {ORDER_ITEMS.map((item, idx) => (
                                    <div key={idx} className="grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr_auto] gap-[1rem] sm:gap-[1.25rem] items-center p-[1rem] bg-white/[0.02] border border-white/[0.05] rounded-[12px]">
                                        <img src={item.image} alt={item.name} className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover rounded-[8px] border border-[#895cf2]/25" />
                                        
                                        <div className="flex flex-col">
                                            <h3 className="text-[1rem] font-semibold text-white mb-[0.5rem]">{item.name}</h3>
                                            <div className="flex items-center gap-[0.5rem] flex-wrap text-[0.875rem] text-white/75">
                                                <span>{item.model}</span>
                                                <span className="text-white/20">•</span>
                                                <span>{item.color}</span>
                                                <span className="text-white/20">•</span>
                                                <span className="font-medium text-white/90">Qty: {item.quantity}</span>
                                            </div>
                                            {/* Mobile price row */}
                                            <div className="text-[1.125rem] font-semibold text-white mt-[0.5rem] sm:hidden">
                                                NPR {item.price.toLocaleString()}
                                            </div>
                                        </div>

                                        <div className="text-[1.125rem] font-semibold text-white hidden sm:block justify-self-end">
                                            NPR {item.price.toLocaleString()}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Delivery Address */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
                            <div className="border border-[#895cf2]/25 rounded-[16px] md:rounded-[12px] p-[2rem] md:p-[1.5rem] backdrop-blur-[10px]" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.03) 0%, rgba(236, 72, 153, 0.02) 100%)' }}>
                                <h2 className="text-[1.25rem] md:text-[1.125rem] font-semibold text-white mb-[1.5rem] flex items-center gap-[0.75rem]">
                                    <MapPin className="text-[#895cf2]" />
                                    Delivery Address
                                </h2>
                                <div className="text-white/75 leading-[1.6]">
                                    <p className="font-semibold text-white mb-[0.75rem]">Ram Kumar Sharma</p>
                                    <p>Thamel, Kathmandu-29</p>
                                    <p>Bagmati Province</p>
                                    <p>Nepal</p>
                                    <p className="mt-[0.75rem] text-white font-medium">+977 9841234567</p>
                                </div>
                            </div>

                            <div className="border border-[#895cf2]/25 rounded-[16px] md:rounded-[12px] p-[2rem] md:p-[1.5rem] backdrop-blur-[10px]" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.03) 0%, rgba(236, 72, 153, 0.02) 100%)' }}>
                                <h2 className="text-[1.25rem] md:text-[1.125rem] font-semibold text-white mb-[1.5rem] flex items-center gap-[0.75rem]">
                                    <CreditCard className="text-[#895cf2]" />
                                    Billing Information
                                </h2>
                                <div className="text-white/75 leading-[1.6]">
                                    <p className="font-semibold text-white mb-[0.75rem]">Ram Kumar Sharma</p>
                                    <p>Thamel, Kathmandu-29</p>
                                    <p>Bagmati Province</p>
                                    <p>Nepal</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ── Right Column ── */}
                    <div className="lg:sticky lg:top-[2rem] flex flex-col gap-[1.5rem] w-full">
                        
                        {/* Order Summary */}
                        <div className="border border-[#895cf2]/25 rounded-[16px] p-[2rem] backdrop-blur-[10px] bg-white/[0.04]">
                            <h2 className="text-[1.25rem] font-semibold text-white mb-[1.5rem]">
                                Order Summary
                            </h2>

                            <div className="flex flex-col gap-[1rem]">
                                <div className="flex justify-between items-center text-[1rem] text-white/75">
                                    <span>Subtotal (3 items)</span>
                                    <span>NPR 22,099</span>
                                </div>
                                <div className="flex justify-between items-center text-[1rem] text-white/75">
                                    <span>Delivery Charge</span>
                                    <span className="text-[#22c55e] font-semibold">Free</span>
                                </div>
                                <div className="flex justify-between items-center text-[1rem] text-white/75">
                                    <span>VAT (13%)</span>
                                    <span>NPR 2,873</span>
                                </div>
                                
                                <div className="h-[1px] bg-[#895cf2]/25 my-[0.5rem]" />
                                
                                <div className="flex justify-between items-center text-[1.25rem] font-semibold text-white">
                                    <span>Total Amount</span>
                                    <span>NPR 24,972</span>
                                </div>
                            </div>

                            <button className="w-full mt-[1.5rem] p-[1rem] flex items-center justify-center gap-[0.75rem] border-none rounded-[12px] text-white text-[1rem] font-semibold cursor-pointer hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(137,92,242,0.3)] transition-all" style={{ background: 'linear-gradient(135deg, #895cf2 0%, #EC4899 100%)' }}>
                                <Truck size={20} />
                                Track Your Order
                            </button>

                            <div className="flex flex-col gap-[0.75rem] mt-[1.5rem] pt-[1.5rem] border-t border-[#895cf2]/25">
                                <Link to="/cases" className="text-center text-white/75 text-[0.875rem] no-underline hover:text-[#895cf2] transition-colors">
                                    Continue Shopping
                                </Link>
                                <button className="bg-transparent border-none text-center text-white/75 text-[0.875rem] cursor-pointer hover:text-[#895cf2] transition-colors flex items-center justify-center gap-2" onClick={() => window.print()}>
                                    <Printer size={16} /> Print Receipt
                                </button>
                            </div>
                        </div>

                        {/* What's Next */}
                        <div className="border border-[#895cf2]/25 rounded-[16px] p-[2rem] backdrop-blur-[10px] bg-white/[0.04]">
                            <h2 className="text-[1.25rem] font-semibold text-white mb-[1.5rem]">
                                What's Next?
                            </h2>

                            <div className="flex flex-col gap-[1.5rem]">
                                <div className="grid grid-cols-[40px_1fr] gap-[1rem] items-start">
                                    <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[#895cf2] text-[1.125rem] bg-[#895cf2]/10 border-[2px] border-[#895cf2]/30">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="text-[1rem] font-semibold text-white mb-[0.25rem]">Order Confirmation</h4>
                                        <p className="text-[0.875rem] text-white/75 m-0 leading-[1.5]">We've received your order and processing it</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[40px_1fr] gap-[1rem] items-start">
                                    <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-white/20 text-[1.125rem] bg-white/[0.02] border-[2px] border-white/10">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="text-[1rem] font-semibold text-white/50 mb-[0.25rem]">Packing & Quality Check</h4>
                                        <p className="text-[0.875rem] text-white/30 m-0 leading-[1.5]">Items are being carefully packed for delivery</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[40px_1fr] gap-[1rem] items-start">
                                    <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-white/20 text-[1.125rem] bg-white/[0.02] border-[2px] border-white/10">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="text-[1rem] font-semibold text-white/50 mb-[0.25rem]">Out for Delivery</h4>
                                        <p className="text-[0.875rem] text-white/30 m-0 leading-[1.5]">Your order will be delivered within 3-5 working days</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Support Info */}
                        <div className="border border-[#895cf2]/20 rounded-[16px] p-[1.5rem] text-center" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.1) 0%, rgba(236, 72, 153, 0.08) 100%)' }}>
                            <h3 className="text-[1.125rem] font-semibold text-white mb-[0.5rem]">
                                Need Help?
                            </h3>
                            <p className="text-[0.875rem] text-white/75 mb-[1rem]">
                                Our customer support team is here to assist you.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-[0.5rem] font-semibold text-[0.875rem] text-[#895cf2] p-[0.75rem_1.5rem] bg-[#895cf2]/10 border border-[#895cf2]/20 rounded-[8px] no-underline hover:-translate-y-[2px] hover:bg-[#895cf2]/15 transition-all">
                                <ExternalLink size={18} />
                                Contact Support
                            </Link>
                            <p className="mt-[1rem] pt-[1rem] border-t border-[#895cf2]/15 text-white font-medium mb-0 flex items-center justify-center gap-2">
                                Phone: +977 (01) 5123456
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper component
const ShoppingCartIcon = ({ className }: { className?: string }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
);
