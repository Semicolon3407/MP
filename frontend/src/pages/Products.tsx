import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Grid, List as ListIcon, Search, ChevronRight, X, ChevronLeft } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { BEST_SELLERS } from '../data/mockData';
import { cn } from '../utils';

const FilterGroup = ({ title, options, isExpanded = false }: { title: string, options: string[], isExpanded?: boolean }) => {
    const [expanded, setExpanded] = useState(isExpanded);
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (opt: string) => {
        setSelected(prev => prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt]);
    };

    return (
        <div className="mb-8 last:mb-0">
            <div
                className="text-[15px] font-semibold text-white mb-4 flex items-center justify-between cursor-pointer"
                onClick={() => setExpanded(!expanded)}
            >
                <span>{title}</span>
                <ChevronDown size={16} className={cn("text-white/45 transition-transform duration-300", !expanded && "-rotate-90")} />
            </div>
            <div className={cn("flex flex-col gap-3 overflow-hidden transition-all duration-300", expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
                {options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2.5 cursor-pointer group">
                        <input
                            type="checkbox"
                            className="w-[18px] h-[18px] cursor-pointer accent-accent"
                            checked={selected.includes(opt)}
                            onChange={() => toggle(opt)}
                        />
                        <span className="text-sm text-white/75 group-hover:text-white transition-colors">{opt}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

const Products = () => {
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Prevent body scroll when filter is open on mobile
    useEffect(() => {
        if (isFilterOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isFilterOpen]);

    const activeProducts = [...BEST_SELLERS, ...BEST_SELLERS, ...BEST_SELLERS];

    return (
        <div className="min-h-screen bg-bg-primary">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-10">

                {/* --- Products Header --- */}
                <div className="mb-12 bg-white/[0.04] border border-glass-border rounded-xl p-6 md:p-8 relative overflow-hidden backdrop-blur-[20px] bg-gradient-to-br from-accent/15 via-accent-secondary/15 to-accent/15">
                    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-8">

                        <div className="flex-1">
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-2 text-sm text-white/40 mb-4">
                                <Link to="/" className="text-white/50 hover:text-accent transition-colors">Home</Link>
                                <ChevronRight size={16} className="text-white/30" />
                                <span className="text-white/60">Products</span>
                                <ChevronRight size={16} className="text-white/30" />
                                <span className="text-white/60">Mobile Cases</span>
                            </div>

                            <h1 className="text-3xl md:text-[2.25rem] font-bold bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent mb-4 leading-tight">Mobile Cases</h1>

                            {/* Meta items */}
                            <div className="hidden md:flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2 text-sm text-white/75">
                                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-accent fill-none stroke-2">
                                        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                                    </svg>
                                    <span>124 Products</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white/75">
                                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-accent fill-none stroke-2">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <span>4.8 Average Rating</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white/75">
                                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-accent fill-none stroke-2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <span>10k+ Customers</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:max-w-[500px]">
                            <div className="relative w-full">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/45 pointer-events-none stroke-2" />
                                <input
                                    type="text"
                                    placeholder="Search for cases, brands, models..."
                                    className="w-full bg-white/5 border border-glass-border rounded-lg py-4 pl-[3.25rem] pr-4 text-[15px] text-white placeholder:text-white/45 focus:outline-none focus:bg-white/[0.08] focus:border-accent focus:shadow-[0_0_0_3px_rgba(137,92,242,0.1)] transition-all"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* --- Layout Grid --- */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Filters Sidebar */}
                    <div className={cn(
                        "fixed inset-y-0 left-0 w-[280px] md:w-[320px] bg-gradient-to-br from-[#040b3a] to-[#080f52] p-6 !pt-10 z-[100] transform transition-transform duration-300 ease-in-out border-r border-glass-border overflow-y-auto block",
                        "lg:relative lg:transform-none lg:w-[320px] lg:h-auto lg:p-0 lg:bg-none lg:bg-transparent lg:border-none lg:z-auto",
                        isFilterOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    )}>
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-glass-border">
                            <h3 className="text-[1.125rem] font-semibold text-white flex items-center gap-2 m-0">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white stroke-current stroke-2 fill-none">
                                    <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
                                    <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
                                    <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
                                    <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
                                    <line x1="17" y1="16" x2="23" y2="16" />
                                </svg>
                                Filters
                            </h3>
                            <div className="flex items-center gap-3">
                                <button className="text-[0.875rem] text-accent hover:opacity-80 transition-opacity">Clear All</button>
                                <button
                                    className="lg:hidden w-8 h-8 flex items-center justify-center text-white/75 hover:bg-white/10 rounded-full transition-colors"
                                    onClick={() => setIsFilterOpen(false)}
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        <div>
                            <FilterGroup title="Phone Brand" options={["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "OPPO"]} isExpanded={true} />
                            <FilterGroup title="Case Type" options={["MagSafe Compatible", "Clear Cases", "Leather Cases", "Silicone Cases", "Armour Cases"]} isExpanded={true} />
                            <FilterGroup title="Material" options={["Silicone", "Leather", "Polycarbonate", "TPU", "Aramid Fiber"]} isExpanded={true} />
                            <FilterGroup title="Color" options={["Midnight Black", "Ocean Blue", "Forest Green", "Rose Gold", "Clear"]} isExpanded={true} />
                        </div>
                    </div>

                    {/* Filter Overlay for Mobile */}
                    <AnimatePresence>
                        {isFilterOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsFilterOpen(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
                            />
                        )}
                    </AnimatePresence>

                    {/* Main Products Content */}
                    <div className="flex-1 w-full min-w-0">

                        {/* Toolbar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 px-6 bg-white/[0.04] border border-glass-border rounded-xl backdrop-blur-[20px]">
                            <div className="text-[15px] text-white/75">Showing <strong className="text-white font-semibold">24</strong> of <strong className="text-white font-semibold">124</strong> Products</div>

                            <div className="flex items-center gap-4 flex-wrap">
                                <button
                                    className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-glass-border rounded-lg text-white font-medium hover:bg-accent/10 hover:border-accent transition-all active:scale-95 text-sm"
                                    onClick={() => setIsFilterOpen(true)}
                                >
                                    <Filter size={18} /> Filters
                                </button>

                                <div className="flex items-center gap-1">
                                    <button
                                        className={cn("p-[10px] rounded-lg transition-all border", view === 'grid' ? "bg-accent/10 border-accent text-accent" : "border-glass-border text-white/45 bg-transparent hover:text-white")}
                                        onClick={() => setView('grid')}
                                        aria-label="Grid view"
                                    >
                                        <Grid size={18} />
                                    </button>
                                    <button
                                        className={cn("p-[10px] rounded-lg transition-all border", view === 'list' ? "bg-accent/10 border-accent text-accent" : "border-glass-border text-white/45 bg-transparent hover:text-white")}
                                        onClick={() => setView('list')}
                                        aria-label="List view"
                                    >
                                        <ListIcon size={18} />
                                    </button>
                                </div>

                                <div className="relative">
                                    <select className="appearance-none bg-white/[0.04] border border-glass-border rounded-lg py-[10px] pl-4 pr-10 text-[0.875rem] text-white focus:outline-none focus:border-accent transition-all cursor-pointer min-w-[160px]">
                                        <option className="bg-[#080f52]">Featured</option>
                                        <option className="bg-[#080f52]">Price: Low to High</option>
                                        <option className="bg-[#080f52]">Price: High to Low</option>
                                        <option className="bg-[#080f52]">Newest First</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/45 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className={cn(
                            "grid gap-6",
                            view === 'grid'
                                ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                        )}>
                            {activeProducts.map((product, idx) => (
                                <ProductCard key={product.id + '-' + idx} product={product} view={view} />
                            ))}
                        </div>

                        {/* Pagination matching cc-pagination */}
                        <div className="mt-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-glass-border pt-8">
                            <p className="text-white/45 text-sm">Showing 1 to 24 of 124 entries</p>

                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-glass-border text-white/30 bg-transparent cursor-not-allowed">
                                    <ChevronLeft size={20} />
                                </button>

                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-accent bg-accent text-white font-medium text-sm">
                                    1
                                </button>

                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-glass-border text-white hover:border-accent hover:text-accent font-medium text-sm transition-all">
                                    2
                                </button>

                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-glass-border text-white hover:border-accent hover:text-accent font-medium text-sm transition-all">
                                    3
                                </button>

                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-glass-border text-white hover:border-accent hover:text-accent bg-transparent transition-all">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;
