import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Search, HelpCircle } from 'lucide-react';

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

export const OrderTracking = () => {
    const [isTracking, setIsTracking] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleTrackOrder = (e: FormEvent) => {
        e.preventDefault();
        if (orderNumber && phoneNumber) {
            setIsTracking(true);
            setTimeout(() => {
                document.getElementById('orderDetails')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <div className="min-h-[100vh] bg-[#040b3a] py-[3rem] pb-[4rem] px-0 md:py-[2rem] md:pb-[3rem]">
            <div className="w-full px-4 mx-auto max-w-none lg:max-w-[1400px]">
                
                {/* ── Page Header ── */}
                <div className="text-center mb-[3rem] md:mb-[2rem]">
                    <h1 className="text-[2.5rem] md:text-[2rem] sm:text-[1.75rem] font-bold text-white mb-[0.75rem]" style={{ background: 'linear-gradient(to right, #895cf2 0%, #EC4899 50%, #895cf2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Track Your Order
                    </h1>
                    <p className="text-[1.125rem] sm:text-[1rem] text-white/75">
                        Enter your order number to track your delivery status
                    </p>
                </div>

                {/* ── Track Form Array ── */}
                <AnimatePresence mode="wait">
                    {!isTracking && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                            className="max-w-[600px] mx-auto mb-[3rem] md:mb-[2rem]"
                        >
                            <div className="border border-[#895cf2]/25 rounded-[16px] md:rounded-[12px] sm:p-[1.5rem] p-[2.5rem] md:p-[2rem] backdrop-blur-[10px]" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.03) 0%, rgba(236, 72, 153, 0.02) 100%)' }}>
                                <form onSubmit={handleTrackOrder} className="flex flex-col">
                                    <div className="mb-[1.5rem]">
                                        <label htmlFor="orderNumber" className="block text-[0.875rem] font-semibold text-white mb-[0.5rem]">Order Number</label>
                                        <input 
                                            type="text" 
                                            id="orderNumber" 
                                            placeholder="e.g., CC-2026-001234" 
                                            required 
                                            value={orderNumber}
                                            onChange={(e) => setOrderNumber(e.target.value)}
                                            className="w-full p-[0.875rem_1rem] text-[1rem] text-white bg-white/[0.03] border border-white/10 rounded-[8px] focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(137,92,242,0.1)] transition-all placeholder:text-white/30"
                                        />
                                        <span className="block text-[0.75rem] text-white/75 mt-[0.5rem]">You can find this in your confirmation email</span>
                                    </div>
                                    <div className="mb-[2rem]">
                                        <label htmlFor="phoneNumber" className="block text-[0.875rem] font-semibold text-white mb-[0.5rem]">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            id="phoneNumber" 
                                            placeholder="+977 9841234567" 
                                            required 
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            className="w-full p-[0.875rem_1rem] text-[1rem] text-white bg-white/[0.03] border border-white/10 rounded-[8px] focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(137,92,242,0.1)] transition-all placeholder:text-white/30"
                                        />
                                        <span className="block text-[0.75rem] text-white/75 mt-[0.5rem]">Enter the phone number used during checkout</span>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="w-full p-[1rem] text-[1rem] font-semibold text-white border-none rounded-[8px] cursor-pointer flex items-center justify-center gap-[0.5rem] hover:-translate-y-[2px] active:translate-y-0 hover:shadow-[0_8px_20px_rgba(137,92,242,0.4)] transition-all"
                                        style={{ background: 'linear-gradient(to right, #895cf2 0%, #EC4899 50%, #895cf2 100%)', backgroundSize: '200% auto', animation: 'gradientShift 3s ease infinite' }}
                                    >
                                        <Search size={20} />
                                        Track Order
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Order Details (Hidden by default) ── */}
                <AnimatePresence>
                    {isTracking && (
                        <motion.div 
                            id="orderDetails" 
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-[3rem]"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-[2rem]">
                                {/* ── Left Column: Events ── */}
                                <div className="flex flex-col gap-[1.5rem]">
                                    {/* Order Header */}
                                    <div className="flex justify-between items-center flex-wrap gap-[1rem] p-[1.5rem_2rem] md:p-[1.25rem_1.5rem] sm:flex-col sm:items-start border border-[#895cf2]/25 rounded-[16px] md:rounded-[12px] backdrop-blur-[10px]" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.03) 0%, rgba(236, 72, 153, 0.02) 100%)' }}>
                                        <div className="flex flex-col">
                                            <h2 className="text-[1.5rem] md:text-[1.25rem] font-semibold text-white mb-[0.5rem]">Order Details</h2>
                                            <div className="flex flex-col gap-[0.25rem]">
                                                <span className="font-mono font-semibold text-[#895cf2] text-[0.875rem]">Order #{orderNumber || 'CC-2026-001234'}</span>
                                                <span className="text-[0.875rem] text-white/75">Placed on Falgun 16, 2082 (Feb 28, 2026)</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-[0.5rem] p-[0.625rem_1.25rem] rounded-[8px] text-[0.875rem] font-semibold bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                            </svg>
                                            In Transit
                                        </div>
                                    </div>

                                    {/* Tracking Timeline */}
                                    <div className="border border-[#895cf2]/25 rounded-[16px] md:rounded-[12px] p-[2rem] md:p-[1.5rem] backdrop-blur-[10px]" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.03) 0%, rgba(236, 72, 153, 0.02) 100%)' }}>
                                        <h3 className="text-[1.25rem] md:text-[1.125rem] font-semibold text-white mb-[1.5rem]">Order Status</h3>
                                        
                                        <div className="relative pl-[2rem] sm:pl-[1.5rem] before:content-[''] before:absolute before:left-[15px] sm:before:left-[11px] before:top-[8px] before:bottom-[8px] before:w-[2px] before:bg-gradient-to-b before:from-[#895cf2] before:via-[#895cf2]/30 before:to-[#895cf2]/30">
                                            
                                            {/* Step 1: Completed */}
                                            <div className="relative mb-[2rem]">
                                                <div className="absolute left-[calc(-2rem-16px)] sm:left-[calc(-1.5rem-12px)] top-0 w-[32px] sm:w-[24px] h-[32px] sm:h-[24px] rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-[#895cf2] to-[#EC4899] border-2 border-[#895cf2]">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px] sm:w-[12px] sm:h-[12px] stroke-white">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <div className="pl-[0.5rem]">
                                                    <h4 className="text-[1rem] sm:text-[0.9375rem] font-semibold text-white mb-[0.25rem]">Order Confirmed</h4>
                                                    <span className="block text-[0.8125rem] text-[#895cf2] font-medium mb-[0.5rem]">Falgun 16, 10:30 AM</span>
                                                    <p className="text-[0.875rem] sm:text-[0.8125rem] text-white/75 leading-[1.5] m-0">Your order has been placed successfully</p>
                                                </div>
                                            </div>

                                            {/* Step 2: Completed */}
                                            <div className="relative mb-[2rem]">
                                                <div className="absolute left-[calc(-2rem-16px)] sm:left-[calc(-1.5rem-12px)] top-0 w-[32px] sm:w-[24px] h-[32px] sm:h-[24px] rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-[#895cf2] to-[#EC4899] border-2 border-[#895cf2]">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px] sm:w-[12px] sm:h-[12px] stroke-white">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <div className="pl-[0.5rem]">
                                                    <h4 className="text-[1rem] sm:text-[0.9375rem] font-semibold text-white mb-[0.25rem]">Order Packed</h4>
                                                    <span className="block text-[0.8125rem] text-[#895cf2] font-medium mb-[0.5rem]">Falgun 16, 2:45 PM</span>
                                                    <p className="text-[0.875rem] sm:text-[0.8125rem] text-white/75 leading-[1.5] m-0">Your items have been carefully packed</p>
                                                </div>
                                            </div>

                                            {/* Step 3: Completed */}
                                            <div className="relative mb-[2rem]">
                                                <div className="absolute left-[calc(-2rem-16px)] sm:left-[calc(-1.5rem-12px)] top-0 w-[32px] sm:w-[24px] h-[32px] sm:h-[24px] rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-[#895cf2] to-[#EC4899] border-2 border-[#895cf2]">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px] sm:w-[12px] sm:h-[12px] stroke-white">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <div className="pl-[0.5rem]">
                                                    <h4 className="text-[1rem] sm:text-[0.9375rem] font-semibold text-white mb-[0.25rem]">Shipped</h4>
                                                    <span className="block text-[0.8125rem] text-[#895cf2] font-medium mb-[0.5rem]">Falgun 17, 9:00 AM</span>
                                                    <p className="text-[0.875rem] sm:text-[0.8125rem] text-white/75 leading-[1.5] m-0">Package handed to courier partner</p>
                                                </div>
                                            </div>

                                            {/* Step 4: Active */}
                                            <div className="relative mb-[2rem]">
                                                <div className="absolute left-[calc(-2rem-16px)] sm:left-[calc(-1.5rem-12px)] top-0 w-[32px] sm:w-[24px] h-[32px] sm:h-[24px] rounded-full flex items-center justify-center z-10 bg-[#3b82f6]/10 border-[3px] border-[#3b82f6] shadow-[0_0_0_0_rgba(59,130,246,0.7)]" style={{ animation: 'pulse 2s infinite' }}>
                                                    <div className="w-full h-full rounded-full bg-[#3b82f6]"></div>
                                                </div>
                                                <div className="pl-[0.5rem]">
                                                    <h4 className="text-[1rem] sm:text-[0.9375rem] font-semibold text-white mb-[0.25rem]">In Transit</h4>
                                                    <span className="block text-[0.8125rem] text-[#895cf2] font-medium mb-[0.5rem]">Expected: Falgun 20, 2082</span>
                                                    <p className="text-[0.875rem] sm:text-[0.8125rem] text-white/75 leading-[1.5] m-0">Your package is on the way to Kathmandu</p>
                                                    <div className="mt-[0.75rem] p-[0.625rem_1rem] bg-[#895cf2]/5 border border-[#895cf2]/15 rounded-[6px] inline-flex items-center gap-[0.5rem]">
                                                        <span className="text-[0.75rem] text-white/75">Courier:</span>
                                                        <span className="text-[0.875rem] font-semibold text-white">Pathao Delivery</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Step 5: Pending */}
                                            <div className="relative mb-[2rem]">
                                                <div className="absolute left-[calc(-2rem-16px)] sm:left-[calc(-1.5rem-12px)] top-0 w-[32px] sm:w-[24px] h-[32px] sm:h-[24px] rounded-full flex items-center justify-center z-10 bg-white/[0.03] border-[2px] border-white/20">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px] sm:w-[12px] sm:h-[12px] stroke-white/30">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                    </svg>
                                                </div>
                                                <div className="pl-[0.5rem]">
                                                    <h4 className="text-[1rem] sm:text-[0.9375rem] font-semibold text-white mb-[0.25rem]">Out for Delivery</h4>
                                                    <span className="block text-[0.8125rem] text-[#895cf2] font-medium mb-[0.5rem]">Estimated: Falgun 20</span>
                                                    <p className="text-[0.875rem] sm:text-[0.8125rem] text-white/75 leading-[1.5] m-0">Package will be out for delivery</p>
                                                </div>
                                            </div>

                                            {/* Step 6: Pending */}
                                            <div className="relative">
                                                <div className="absolute left-[calc(-2rem-16px)] sm:left-[calc(-1.5rem-12px)] top-0 w-[32px] sm:w-[24px] h-[32px] sm:h-[24px] rounded-full flex items-center justify-center z-10 bg-white/[0.03] border-[2px] border-white/20">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px] sm:w-[12px] sm:h-[12px] stroke-white/30">
                                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                                    </svg>
                                                </div>
                                                <div className="pl-[0.5rem]">
                                                    <h4 className="text-[1rem] sm:text-[0.9375rem] font-semibold text-white mb-[0.25rem]">Delivered</h4>
                                                    <span className="block text-[0.8125rem] text-[#895cf2] font-medium mb-[0.5rem]">Expected: Falgun 20-21</span>
                                                    <p className="text-[0.875rem] sm:text-[0.8125rem] text-white/75 leading-[1.5] m-0">Package will be delivered to your address</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Delivery Information */}
                                    <div className="border border-[#895cf2]/25 rounded-[16px] md:rounded-[12px] p-[2rem] md:p-[1.5rem] backdrop-blur-[10px]" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.03) 0%, rgba(236, 72, 153, 0.02) 100%)' }}>
                                        <h3 className="text-[1.25rem] md:text-[1.125rem] font-semibold text-white mb-[1.5rem]">Delivery Information</h3>
                                        <div className="flex flex-col gap-[1.25rem]">
                                            <div className="flex items-start gap-[1rem]">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="#895cf2" strokeWidth="2" className="w-[20px] h-[20px] sm:w-[18px] sm:h-[18px] flex-shrink-0 mt-[2px]">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <div className="flex flex-col gap-[0.25rem] flex-1">
                                                    <span className="text-[0.75rem] font-semibold text-white/75 uppercase tracking-[0.5px]">Delivery Address</span>
                                                    <span className="text-[0.9375rem] sm:text-[0.875rem] text-white leading-[1.5]">Thamel, Kathmandu-29, Bagmati Province, Nepal</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-[1rem]">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="#895cf2" strokeWidth="2" className="w-[20px] h-[20px] sm:w-[18px] sm:h-[18px] flex-shrink-0 mt-[2px]">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                                </svg>
                                                <div className="flex flex-col gap-[0.25rem] flex-1">
                                                    <span className="text-[0.75rem] font-semibold text-white/75 uppercase tracking-[0.5px]">Contact Number</span>
                                                    <span className="text-[0.9375rem] sm:text-[0.875rem] text-white leading-[1.5]">{phoneNumber || '+977 9841234567'}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-[1rem]">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="#895cf2" strokeWidth="2" className="w-[20px] h-[20px] sm:w-[18px] sm:h-[18px] flex-shrink-0 mt-[2px]">
                                                    <circle cx="12" cy="12" r="10"/>
                                                    <polyline points="12 6 12 12 16 14"/>
                                                </svg>
                                                <div className="flex flex-col gap-[0.25rem] flex-1">
                                                    <span className="text-[0.75rem] font-semibold text-white/75 uppercase tracking-[0.5px]">Estimated Delivery</span>
                                                    <span className="text-[0.9375rem] sm:text-[0.875rem] text-white leading-[1.5]">3-5 Working Days (Falgun 20-21, 2082)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Right Column: Summary ── */}
                                <div className="flex flex-col gap-[1.5rem] lg:sticky lg:top-[2rem] h-fit">
                                    {/* Order Items */}
                                    <div className="border border-[#895cf2]/25 rounded-[16px] md:rounded-[12px] p-[2rem] md:p-[1.5rem] backdrop-blur-[10px]" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.03) 0%, rgba(236, 72, 153, 0.02) 100%)' }}>
                                        <h3 className="text-[1.25rem] md:text-[1.125rem] font-semibold text-white mb-[1.5rem]">Order Items (3)</h3>

                                        <div className="flex flex-col gap-[1rem]">
                                            {ORDER_ITEMS.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-[1rem] p-[1rem] bg-white/[0.02] border border-white/[0.05] rounded-[8px] hover:bg-white/[0.04] hover:border-[#895cf2]/20 transition-all">
                                                    <img src={item.image} alt={item.name} className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] rounded-[8px] object-cover flex-shrink-0" />
                                                    <div className="flex-1">
                                                        <h4 className="text-[0.9375rem] sm:text-[0.875rem] font-semibold text-white mb-[0.25rem]">{item.name}</h4>
                                                        <p className="text-[0.8125rem] sm:text-[0.75rem] text-white/75 mb-[0.25rem]">{item.model} • {item.color}</p>
                                                        <p className="text-[0.75rem] text-white/75 m-0">Qty: {item.quantity}</p>
                                                    </div>
                                                    <div className="text-[1rem] sm:text-[0.9375rem] font-semibold text-white">
                                                        NPR {item.price.toLocaleString()}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Order Summary */}
                                    <div className="border border-[#895cf2]/25 rounded-[16px] md:rounded-[12px] p-[2rem] md:p-[1.5rem] backdrop-blur-[10px]" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.03) 0%, rgba(236, 72, 153, 0.02) 100%)' }}>
                                        <h3 className="text-[1.25rem] md:text-[1.125rem] font-semibold text-white mb-[1.5rem]">Order Summary</h3>

                                        <div className="flex flex-col gap-[0.875rem] mb-[1.5rem]">
                                            <div className="flex justify-between items-center text-[0.9375rem]">
                                                <span className="text-white/75">Subtotal (3 items)</span>
                                                <span className="font-semibold text-white">NPR 22,099</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[0.9375rem]">
                                                <span className="text-white/75">Delivery Charge</span>
                                                <span className="text-[#22c55e] font-semibold">Free</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[0.9375rem]">
                                                <span className="text-white/75">VAT (13%)</span>
                                                <span className="font-semibold text-white">NPR 2,873</span>
                                            </div>
                                            
                                            <div className="h-[1px] bg-white/10 my-[0.5rem]" />
                                            
                                            <div className="flex justify-between items-center text-[1.125rem] pt-[1rem]">
                                                <span className="font-semibold text-white">Total Amount</span>
                                                <span className="font-bold text-[#895cf2]">NPR 24,972</span>
                                            </div>
                                        </div>

                                        <div className="p-[1rem] bg-[#895cf2]/5 border border-[#895cf2]/15 rounded-[8px] flex justify-between items-center">
                                            <span className="text-[0.875rem] text-white/75">Payment Method</span>
                                            <span className="text-[0.9375rem] font-semibold text-white">Cash on Delivery</span>
                                        </div>
                                    </div>

                                    {/* Help Section */}
                                    <div className="border border-[#895cf2]/20 rounded-[16px] md:rounded-[12px] p-[1.5rem] text-center" style={{ background: 'linear-gradient(135deg, rgba(137, 92, 242, 0.1) 0%, rgba(236, 72, 153, 0.08) 100%)' }}>
                                        <h3 className="text-[1.125rem] font-semibold text-white mb-[0.5rem]">Need Help?</h3>
                                        <p className="text-[0.875rem] text-white/75 mb-[1rem]">If you have any questions about your order, feel free to contact us.</p>
                                        <div className="flex flex-col gap-[0.5rem]">
                                            <Link to="/contact" className="inline-flex justify-center items-center gap-[0.5rem] font-semibold text-[0.875rem] text-[#895cf2] p-[0.75rem_1.5rem] bg-[#895cf2]/10 border border-[#895cf2]/20 rounded-[8px] no-underline hover:-translate-y-[2px] hover:bg-[#895cf2]/15 transition-all">
                                                <HelpCircle size={18} /> Contact Support
                                            </Link>
                                            <button onClick={() => setIsTracking(false)} className="inline-flex justify-center items-center gap-[0.5rem] font-semibold text-[0.875rem] text-white/75 p-[0.75rem_1.5rem] border border-transparent rounded-[8px] bg-transparent no-underline hover:text-white hover:bg-white/5 transition-all cursor-pointer">
                                                <ChevronLeft size={18} /> Track Another Order
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};
