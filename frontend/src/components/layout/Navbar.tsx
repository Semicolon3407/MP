import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '../../utils';

interface MobileMenuSlide {
    id: string;
    title: string;
    data?: any;
}

const PHONE_CASES_DATA = {
    // ... existing data ...
    brands: [
        {
            id: 'apple',
            name: 'Apple',
            models: [
                {
                    id: 'iphone16',
                    name: 'iPhone 16',
                    series: [
                        { name: 'iPhone 16 Pro Max', href: '/products?model=iphone16-pro-max' },
                        { name: 'iPhone 16 Pro', href: '/products?model=iphone16-pro' },
                        { name: 'iPhone 16 Plus', href: '/products?model=iphone16-plus' },
                        { name: 'iPhone 16', href: '/products?model=iphone16' },
                    ]
                },
                {
                    id: 'iphone15',
                    name: 'iPhone 15',
                    series: [
                        { name: 'iPhone 15 Pro Max', href: '/products?model=iphone15-pro-max' },
                        { name: 'iPhone 15 Pro', href: '/products?model=iphone15-pro' },
                        { name: 'iPhone 15 Plus', href: '/products?model=iphone15-plus' },
                        { name: 'iPhone 15', href: '/products?model=iphone15' },
                    ]
                },
                {
                    id: 'iphone14',
                    name: 'iPhone 14',
                    series: [
                        { name: 'iPhone 14 Pro Max', href: '/products?model=iphone14-pro-max' },
                        { name: 'iPhone 14 Pro', href: '/products?model=iphone14-pro' },
                        { name: 'iPhone 14 Plus', href: '/products?model=iphone14-plus' },
                        { name: 'iPhone 14', href: '/products?model=iphone14' },
                    ]
                }
            ]
        },
        {
            id: 'samsung',
            name: 'Samsung',
            models: [
                {
                    id: 'galaxy-s24',
                    name: 'Galaxy S24',
                    series: [
                        { name: 'Galaxy S24 Ultra', href: '/products?model=s24-ultra' },
                        { name: 'Galaxy S24+', href: '/products?model=s24-plus' },
                        { name: 'Galaxy S24', href: '/products?model=s24' },
                    ]
                },
                {
                    id: 'galaxy-s23',
                    name: 'Galaxy S23',
                    series: [
                        { name: 'Galaxy S23 Ultra', href: '/products?model=s23-ultra' },
                        { name: 'Galaxy S23+', href: '/products?model=s23-plus' },
                        { name: 'Galaxy S23', href: '/products?model=s23' },
                    ]
                },
                {
                    id: 'galaxy-fold',
                    name: 'Galaxy Z Fold',
                    series: [
                        { name: 'Galaxy Z Fold 6', href: '/products?model=z-fold6' },
                        { name: 'Galaxy Z Fold 5', href: '/products?model=z-fold5' },
                        { name: 'Galaxy Z Fold 4', href: '/products?model=z-fold4' },
                    ]
                }
            ]
        },
        {
            id: 'google',
            name: 'Google',
            models: [
                {
                    id: 'pixel9',
                    name: 'Pixel 9',
                    series: [
                        { name: 'Pixel 9 Pro XL', href: '/products?model=pixel9-pro-xl' },
                        { name: 'Pixel 9 Pro', href: '/products?model=pixel9-pro' },
                        { name: 'Pixel 9', href: '/products?model=pixel9' },
                    ]
                },
                {
                    id: 'pixel8',
                    name: 'Pixel 8',
                    series: [
                        { name: 'Pixel 8 Pro', href: '/products?model=pixel8-pro' },
                        { name: 'Pixel 8', href: '/products?model=pixel8' },
                    ]
                }
            ]
        },
        {
            id: 'oneplus',
            name: 'OnePlus',
            models: [
                {
                    id: 'oneplus12',
                    name: 'OnePlus 12',
                    series: [
                        { name: 'OnePlus 12 Pro', href: '/products?model=oneplus12-pro' },
                        { name: 'OnePlus 12', href: '/products?model=oneplus12' },
                        { name: 'OnePlus 12R', href: '/products?model=oneplus12r' },
                    ]
                },
                {
                    id: 'oneplus11',
                    name: 'OnePlus 11',
                    series: [
                        { name: 'OnePlus 11', href: '/products?model=oneplus11' },
                        { name: 'OnePlus 11R', href: '/products?model=oneplus11r' },
                    ]
                }
            ]
        }
    ]
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileMenuStack, setMobileMenuStack] = useState<MobileMenuSlide[]>([{ id: 'main', title: 'Menu' }]);
    const [activeBrand, setActiveBrand] = useState<any>(null);
    const [activeModel, setActiveModel] = useState<any>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const pushMobileMenu = (id: string, title: string, data?: any) => {
        setMobileMenuStack([...mobileMenuStack, { id, title, data }]);
    };

    const popMobileMenu = () => {
        if (mobileMenuStack.length > 1) {
            setMobileMenuStack(mobileMenuStack.slice(0, -1));
        }
    };

    const currentMenu = mobileMenuStack[mobileMenuStack.length - 1];

    return (
        <>
            <nav
                className={cn(
                    "sticky top-0 left-0 right-0 z-[200] transition-all duration-300",
                    isScrolled
                        ? "py-3 bg-[#081052]/95 backdrop-blur-2xl border-b border-glass-border shadow-2xl"
                        : "py-4 bg-[#070e48]/65 backdrop-blur-xl border-b border-glass-border/15"
                )}
            >
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
                    {/* Left: Toggler (Mobile) + Logo */}
                    <div className="flex items-center gap-4">
                        <button
                            className="lg:hidden flex flex-col gap-[5px] p-2.5 bg-white/5 border border-glass-border/30 rounded-lg active:scale-95 transition-transform"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <span className="w-[22px] h-[2px] bg-white rounded-full"></span>
                            <span className="w-[22px] h-[2px] bg-white rounded-full"></span>
                            <span className="w-[22px] h-[2px] bg-white rounded-full"></span>
                        </button>

                        <Link to="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                            CaseCraft
                        </Link>
                    </div>

                    {/* Center: Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link to="/" className="cc-nav-link text-[15px] font-medium text-text-secondary hover:text-white relative py-1 group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-accent-secondary transition-all duration-300 group-hover:w-full" />
                        </Link>

                        {/* 3-Level Dropdown */}
                        <div className="relative group py-1"
                            onMouseLeave={() => { setActiveBrand(null); setActiveModel(null); }}
                        >
                            <button className="flex items-center gap-1.5 text-[15px] font-medium text-text-secondary hover:text-white transition-colors cursor-pointer group-hover:text-white">
                                Phone Cases
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>

                            {/* Level 1: Brands */}
                            <div className="absolute top-[calc(100%+8px)] left-0 w-[220px] bg-gradient-to-br from-[#040b3a]/98 to-[#080f52]/98 backdrop-blur-3xl border border-accent/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[1000] py-2 overflow-visible">
                                {/* Triangle Pointer */}
                                <div className="absolute -top-1.5 left-5 w-3 h-3 bg-[#040b3a] border-l border-t border-accent/30 rotate-45" />

                                {PHONE_CASES_DATA.brands.map((brand) => (
                                    <div
                                        key={brand.id}
                                        className="relative flex items-center justify-between px-5 py-3 text-[15px] font-medium text-white/80 hover:text-white hover:bg-accent/15 cursor-pointer transition-all border-l-4 border-transparent hover:border-accent group/item"
                                        onMouseEnter={() => { setActiveBrand(brand); setActiveModel(null); }}
                                    >
                                        {brand.name}
                                        <ChevronRight size={16} className="opacity-50 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />

                                        {/* Level 2: Models (Shows on Brand Hover) */}
                                        {activeBrand?.id === brand.id && (
                                            <div className="absolute top-0 left-[calc(100%+1px)] w-[220px] bg-gradient-to-br from-[#040b3a]/98 to-[#080f52]/98 backdrop-blur-3xl border border-accent/30 rounded-xl shadow-2xl py-2 z-[1001]">
                                                {brand.models.map((model) => (
                                                    <div
                                                        key={model.id}
                                                        className="relative flex items-center justify-between px-5 py-3 text-[15px] font-medium text-white/80 hover:text-white hover:bg-accent/15 cursor-pointer transition-all border-l-4 border-transparent hover:border-accent group/model"
                                                        onMouseEnter={(e) => { e.stopPropagation(); setActiveModel(model); }}
                                                    >
                                                        {model.name}
                                                        <ChevronRight size={16} className="opacity-50 group-hover/model:opacity-100 group-hover/model:translate-x-1 transition-all" />

                                                        {/* Level 3: Series (Shows on Model Hover) */}
                                                        {activeModel?.id === model.id && (
                                                            <div className="absolute top-0 left-[calc(100%+1px)] w-[220px] bg-gradient-to-br from-[#040b3a]/98 to-[#080f52]/98 backdrop-blur-3xl border border-accent/30 rounded-xl shadow-2xl py-2 z-[1002]">
                                                                {model.series.map((item) => (
                                                                    <Link
                                                                        key={item.name}
                                                                        to={item.href}
                                                                        className="block px-5 py-2.5 text-[15px] font-medium text-white/80 hover:text-white hover:bg-accent/15 transition-all border-l-4 border-transparent hover:border-accent"
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {['Airpod Cases', 'Watch Straps', 'Accessories'].map((link) => (
                            <Link key={link} to={`/#${link.toLowerCase()}`} className="cc-nav-link text-[15px] font-medium text-text-secondary hover:text-white relative py-1 group">
                                {link}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-accent-secondary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <button className="p-2.5 lg:p-3 bg-white/5 border border-glass-border/30 rounded-xl text-text-primary hover:bg-glass-border hover:shadow-glow transition-all active:scale-95 group">
                            <Search size={19} className="group-hover:scale-110 transition-transform" />
                        </button>

                        <Link to="/signin" className="p-2.5 lg:p-3 bg-white/5 border border-glass-border/30 rounded-xl text-text-primary hover:bg-glass-border hover:shadow-glow transition-all active:scale-95 group">
                            <User size={19} className="group-hover:scale-110 transition-transform" />
                        </Link>

                        <Link to="/cart" className="relative p-2.5 lg:p-3 bg-white/5 border border-glass-border/30 rounded-xl text-text-primary hover:bg-glass-border hover:shadow-glow transition-all active:scale-95 group">
                            <ShoppingCart size={19} className="group-hover:scale-110 transition-transform" />
                            <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full text-[10px] font-black flex items-center justify-center text-white shadow-[0_2px_8px_rgba(137,92,242,0.4)] animate-gradient-shift bg-[length:200%_auto]">
                                3
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Drawer (Multi-level slide) */}
                <div
                    className={cn(
                        "fixed inset-0 bg-black/60 backdrop-blur-md z-[300] transition-opacity duration-300 lg:hidden",
                        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div
                        className={cn(
                            "absolute top-0 left-0 w-[300px] h-full bg-gradient-to-b from-[#040b3a] to-[#080f52] border-r border-accent/20 transition-transform duration-500 overflow-hidden flex flex-col",
                            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        )}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Drawer Header */}
                        <div className="p-6 border-b border-accent/15 flex items-center justify-between">
                            <span className="text-xl font-black bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">CaseCraft</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 bg-white/5 border border-glass-border rounded-lg text-text-primary active:scale-90 transition-transform"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>

                        {/* Slide Container */}
                        <div className="flex-1 relative overflow-hidden">
                            {/* Each Level as a Slide */}
                            {/* Main Menu Slide */}
                            <div className={cn(
                                "absolute inset-0 p-6 transition-transform duration-300 flex flex-col gap-1",
                                currentMenu.id === 'main' ? "translate-x-0" : "-translate-x-full"
                            )}>
                                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link text-white/70 hover:text-white font-semibold py-3 px-4 rounded-xl hover:bg-accent/10 flex items-center justify-between">
                                    Home
                                </Link>
                                <button
                                    onClick={() => pushMobileMenu('brands', 'Phone Cases')}
                                    className="mobile-nav-link text-white/70 hover:text-white font-semibold py-3 px-4 rounded-xl hover:bg-accent/10 flex items-center justify-between text-left"
                                >
                                    Phone Cases
                                    <ChevronRight size={18} />
                                </button>
                                {['Airpod Cases', 'Watch Straps', 'Accessories'].map(item => (
                                    <Link key={item} to="/#" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link text-white/70 hover:text-white font-semibold py-3 px-4 rounded-xl hover:bg-accent/10 flex items-center justify-between">
                                        {item}
                                    </Link>
                                ))}
                            </div>

                            {/* Brands Slide */}
                            <div className={cn(
                                "absolute inset-0 p-6 transition-transform duration-300 bg-[#040b3a] z-10",
                                currentMenu.id === 'brands' ? "translate-x-0" : "translate-x-full"
                            )}>
                                <button onClick={popMobileMenu} className="flex items-center gap-2 mb-6 text-accent font-bold">
                                    <ChevronRight size={18} className="rotate-180" /> Back
                                </button>
                                <h3 className="text-white font-bold text-lg mb-4">Select Brand</h3>
                                <div className="flex flex-col gap-1">
                                    {PHONE_CASES_DATA.brands.map(brand => (
                                        <button
                                            key={brand.id}
                                            onClick={() => pushMobileMenu('models', brand.name, brand)}
                                            className="text-white/70 hover:text-white font-semibold py-3 px-4 rounded-xl hover:bg-accent/10 flex items-center justify-between text-left"
                                        >
                                            {brand.name}
                                            <ChevronRight size={18} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Models Slide */}
                            <div className={cn(
                                "absolute inset-0 p-6 transition-transform duration-300 bg-[#040b3a] z-20",
                                currentMenu.id === 'models' ? "translate-x-0" : "translate-x-full"
                            )}>
                                <button onClick={popMobileMenu} className="flex items-center gap-2 mb-6 text-accent font-bold">
                                    <ChevronRight size={18} className="rotate-180" /> Back to Brands
                                </button>
                                <h3 className="text-white font-bold text-lg mb-4">{currentMenu.title}</h3>
                                <div className="flex flex-col gap-1">
                                    {currentMenu.data?.models.map((model: any) => (
                                        <button
                                            key={model.id}
                                            onClick={() => pushMobileMenu('series', model.name, model)}
                                            className="text-white/70 hover:text-white font-semibold py-3 px-4 rounded-xl hover:bg-accent/10 flex items-center justify-between text-left"
                                        >
                                            {model.name}
                                            <ChevronRight size={18} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Series Slide */}
                            <div className={cn(
                                "absolute inset-0 p-6 transition-transform duration-300 bg-[#040b3a] z-30",
                                currentMenu.id === 'series' ? "translate-x-0" : "translate-x-full"
                            )}>
                                <button onClick={popMobileMenu} className="flex items-center gap-2 mb-6 text-accent font-bold">
                                    <ChevronRight size={18} className="rotate-180" /> Back to Models
                                </button>
                                <h3 className="text-white font-bold text-lg mb-4">{currentMenu.title}</h3>
                                <div className="flex flex-col gap-1">
                                    {currentMenu.data?.series.map((item: any) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-white/70 hover:text-white font-semibold py-3 px-4 rounded-xl hover:bg-accent/10 flex items-center justify-between"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Drawer Footer */}
                        <div className="p-6 border-t border-accent/15">
                            <Link
                                to="/signin"
                                className="flex items-center gap-3 p-4 bg-gradient-to-r from-accent to-accent-secondary text-white rounded-xl font-bold active:scale-95 transition-all shadow-lg shadow-accent/20"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <User size={18} />
                                My Account
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

