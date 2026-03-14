import { useState } from 'react';
import { User, ShoppingBag, Heart, MapPin, CreditCard, Shield, LogOut, ChevronRight, Edit3, Trash2, Package, Map, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Section = 'profile' | 'orders' | 'wishlist' | 'addresses' | 'payment' | 'security';

const MyAccount = () => {
    const [activeSection, setActiveSection] = useState<Section>('profile');
    const [isEditingProfile, setIsEditingProfile] = useState(false);

    const navItems: { id: Section; label: string; icon: React.ElementType }[] = [
        { id: 'profile', label: 'Profile Information', icon: User },
        { id: 'orders', label: 'My Orders', icon: Package },
        { id: 'wishlist', label: 'My Wishlist', icon: Heart },
        { id: 'addresses', label: 'Addresses', icon: MapPin },
        { id: 'payment', label: 'Payment Methods', icon: CreditCard },
        { id: 'security', label: 'Security', icon: Shield },
    ];

    const renderProfile = () => (
        <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8"
        >
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">Profile Information</h3>
                <button 
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                    <Edit3 size={16} />
                    <span className="text-sm font-medium">{isEditingProfile ? 'Cancel' : 'Edit Profile'}</span>
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">First Name</label>
                    <input type="text" defaultValue="Ram Kumar" disabled={!isEditingProfile} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] transition-all text-white disabled:opacity-70 disabled:cursor-not-allowed" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Last Name</label>
                    <input type="text" defaultValue="Sharma" disabled={!isEditingProfile} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] transition-all text-white disabled:opacity-70 disabled:cursor-not-allowed" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Email Address</label>
                    <input type="email" defaultValue="ram.sharma@email.com" disabled={!isEditingProfile} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] transition-all text-white disabled:opacity-70 disabled:cursor-not-allowed" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Phone Number</label>
                    <input type="tel" defaultValue="+977 9841234567" disabled={!isEditingProfile} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#895cf2] focus:bg-white/[0.05] transition-all text-white disabled:opacity-70 disabled:cursor-not-allowed" />
                </div>
            </div>

            {isEditingProfile && (
                <div className="mt-8 flex justify-end">
                    <button className="px-6 py-3 bg-gradient-to-r from-[#895cf2] to-[#EC4899] text-white font-semibold rounded-xl hover:shadow-[0_8px_20px_rgba(137,92,242,0.3)] transition-all">
                        Save Changes
                    </button>
                </div>
            )}
        </motion.div>
    );

    const renderOrders = () => (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">My Orders</h3>
            {[
                { id: 'CC-2026-001234', date: 'Feb 28, 2026', status: 'In Transit', items: '3 items', total: 'NPR 24,972', statusColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
                { id: 'CC-2026-001189', date: 'Feb 20, 2026', status: 'Delivered', items: '2 items', total: 'NPR 11,498', statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' }
            ].map((order, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.04] transition-colors">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 mb-6">
                        <div>
                            <h4 className="text-lg font-bold">Order #{order.id}</h4>
                            <p className="text-sm text-white/60 mt-1">Placed on {order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${order.statusColor}`}>
                            {order.status}
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <p className="font-semibold text-[1.0625rem]">{order.items} • {order.total}</p>
                            <p className="text-sm text-white/60 mt-1">Estimated delivery: Mar 5, 2026</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium">Track Order</button>
                            <button className="px-4 py-2 bg-[#895cf2]/10 border border-[#895cf2]/20 text-[#895cf2] rounded-xl hover:bg-[#895cf2]/20 transition-colors text-sm font-medium">View Details</button>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );

    const renderWishlist = () => (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">My Wishlist</h3>
                <span className="text-white/60 font-medium">4 items</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { title: 'Premium Leather MagSafe Case', price: 'NPR 6,499', oldPrice: 'NPR 9,099', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop', stock: 'In Stock' },
                    { title: 'Silicone Protective Case', price: 'NPR 3,899', oldPrice: '', img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop', stock: 'In Stock' },
                ].map((item, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/10 rounded-3xl p-4 flex gap-4 relative group">
                        <button className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/20 hover:text-red-400">
                            <Trash2 size={14} />
                        </button>
                        <div className="w-24 h-24 rounded-2xl bg-white/5 overflow-hidden flex-shrink-0 relative">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-semibold text-[0.9375rem] leading-tight mb-2 pr-6 line-clamp-2">{item.title}</h4>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="font-bold text-[#EC4899]">{item.price}</span>
                                {item.oldPrice && <span className="text-xs text-white/40 line-through">{item.oldPrice}</span>}
                            </div>
                            <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors">
                                <ShoppingBag size={14} /> Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );

    const renderAddresses = () => (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Saved Addresses</h3>
                <button className="px-4 py-2 bg-gradient-to-r from-[#895cf2] to-[#EC4899] rounded-xl text-sm font-semibold hover:shadow-[0_4px_16px_rgba(137,92,242,0.3)] transition-all flex items-center gap-2">
                    <MapPin size={16} /> Add New
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/[0.02] border border-[#895cf2]/30 rounded-3xl p-6 relative">
                    <div className="absolute top-6 right-6 px-2 py-1 bg-[#895cf2]/10 border border-[#895cf2]/20 text-[#895cf2] text-xs font-bold rounded-lg uppercase tracking-wider">Default</div>
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4">
                        <Map size={24} className="text-white/70" />
                    </div>
                    <h4 className="text-xl font-bold mb-1">Home</h4>
                    <p className="font-medium text-white/90 mb-2">Ram Kumar Sharma</p>
                    <div className="text-sm text-white/60 space-y-1 mb-6">
                        <p>Thamel, Kathmandu-29</p>
                        <p>Bagmati Province, Nepal</p>
                        <p>+977 9841234567</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex-1 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors">Edit</button>
                        <button className="flex-1 py-2 bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 rounded-xl text-sm font-medium transition-colors">Remove</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const renderPayment = () => (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Payment Methods</h3>
                <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">Add Method</button>
            </div>
            <div className="space-y-4 max-w-[600px]">
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-10 bg-white rounded-lg flex items-center justify-center p-2">
                             <div className="text-[#41A124] font-bold italic tracking-tight text-lg">eSewa</div>
                        </div>
                        <div>
                            <h4 className="font-semibold">eSewa</h4>
                            <p className="text-sm text-white/60">9841234567</p>
                        </div>
                    </div>
                    <button className="text-sm text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity">Remove</button>
                </div>
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-10 bg-white rounded-lg flex items-center justify-center p-2">
                             <div className="text-[#5C2D91] font-bold text-sm tracking-tighter">KHALTI</div>
                        </div>
                        <div>
                            <h4 className="font-semibold">Khalti</h4>
                            <p className="text-sm text-white/60">9841234567</p>
                        </div>
                    </div>
                    <button className="text-sm text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity">Remove</button>
                </div>
                <div className="bg-white/[0.02] border border-emerald-500/20 rounded-2xl p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-10 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center text-emerald-400">
                            <CreditCard size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold">Cash on Delivery</h4>
                            <p className="text-sm text-white/60">Pay when you receive</p>
                        </div>
                    </div>
                    <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">Default</span>
                </div>
            </div>
        </motion.div>
    );

    const renderSecurity = () => (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <h3 className="text-2xl font-bold mb-6">Security Settings</h3>
            
            <div className="space-y-4 mb-10">
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Lock size={24} className="text-white/70" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold">Password</h4>
                            <p className="text-sm text-white/60">Last changed: Feb 15, 2026</p>
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap">Change Password</button>
                </div>
                
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Shield size={24} className="text-white/70" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold">Two-Factor Authentication</h4>
                            <p className="text-sm text-white/60">Add an extra layer of security</p>
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm font-medium hover:bg-emerald-500/20 transition-colors whitespace-nowrap">Enable 2FA</button>
                </div>
            </div>

            <div className="pt-6 border-t border-red-500/20">
                <h4 className="text-lg font-bold text-red-500 mb-2">Danger Zone</h4>
                <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h4 className="font-bold">Delete Account</h4>
                        <p className="text-sm text-white/60 mt-1 max-w-sm">Once you delete your account, there is no going back. Please be certain.</p>
                    </div>
                    <button className="px-5 py-2.5 bg-red-500/20 text-red-500 hover:bg-red-500 text-white font-medium rounded-xl transition-all whitespace-nowrap">
                        Delete Account
                    </button>
                </div>
            </div>
        </motion.div>
    );

    const renderContent = () => {
        switch (activeSection) {
            case 'profile': return renderProfile();
            case 'orders': return renderOrders();
            case 'wishlist': return renderWishlist();
            case 'addresses': return renderAddresses();
            case 'payment': return renderPayment();
            case 'security': return renderSecurity();
            default: return renderProfile();
        }
    };

    return (
        <div className="min-h-screen bg-[#040b3a] font-inter text-white pb-20 pt-24 md:pt-32">
            <div className="container mx-auto px-4 max-w-[1200px]">
                
                {/* Header */}
                <div className="mb-10 pl-2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">My Account</h1>
                    <p className="text-white/60">Manage your account information and orders</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-[280px] flex-shrink-0">
                        {/* User Card */}
                        <div className="mb-8 p-6 bg-white/[0.02] border border-white/10 rounded-3xl flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#895cf2] to-[#EC4899] p-1 mb-4 shadow-[0_4px_16px_rgba(137,92,242,0.4)]">
                                <div className="w-full h-full rounded-full border-2 border-[#040b3a] bg-[#080f52] flex items-center justify-center">
                                    <span className="text-xl font-bold tracking-wider">RS</span>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold mb-1">Ram K. Sharma</h2>
                            <p className="text-sm text-white/50 mb-1">ram.sharma@email.com</p>
                            <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-white/70 mt-2">+977 9841234567</span>
                        </div>

                        {/* Navigation */}
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 font-medium ${
                                        activeSection === item.id 
                                        ? 'bg-gradient-to-r from-[#895cf2]/20 to-transparent border border-[#895cf2]/30 text-white' 
                                        : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                                    }`}
                                >
                                    <item.icon size={20} className={activeSection === item.id ? 'text-[#895cf2]' : ''} />
                                    {item.label}
                                    {activeSection === item.id && <ChevronRight size={16} className="ml-auto text-[#895cf2]" />}
                                </button>
                            ))}
                            <div className="my-2 border-t border-white/5"></div>
                            <button className="w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors font-medium">
                                <LogOut size={20} />
                                Logout
                            </button>
                        </nav>
                    </aside>

                    {/* Content Area */}
                    <main className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            <div key={activeSection}>
                                {renderContent()}
                            </div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
