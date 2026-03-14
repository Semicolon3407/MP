import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const POPULAR_SEARCHES = [
    'iPhone 15 Pro Cases',
    'MagSafe Cases',
    'Clear Cases',
    'Leather Cases',
    'AirPods Cases',
    'Wireless Chargers'
];

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setSearchQuery(''); // Reset on open
            // Focus input after modal is fully mounted and animation starts
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Handle escape key
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape') onClose();
            };
            window.addEventListener('keydown', handleEsc);
            return () => {
                window.removeEventListener('keydown', handleEsc);
                document.body.style.overflow = '';
            };
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#040b3a]/85 backdrop-blur-[8px] z-[10000] cursor-pointer"
                    />

                    {/* Modal Content */}
                    <div className="fixed top-0 left-0 right-0 z-[10001] flex justify-center pointer-events-none">
                        <motion.div
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="w-full max-w-[680px] bg-gradient-to-br from-[#080f52] to-[#040b3a] rounded-b-[16px] md:rounded-b-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.3),_0_0_0_1px_rgba(255,255,255,0.1)] pointer-events-auto"
                        >
                            {/* Header / Input Area */}
                            <div className="px-4 md:px-6 pt-4 md:pt-6 pb-3 md:pb-4 border-b border-white/10">
                                <div className="flex items-center gap-[10px] md:gap-3">
                                    <Search className="w-[18px] h-[18px] md:w-5 md:h-5 text-white/50 shrink-0" />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search for products, categories..."
                                        className="flex-1 bg-transparent border-none outline-none text-[15px] md:text-base text-white placeholder:text-white/40 p-0"
                                        autoComplete="off"
                                    />
                                    {searchQuery && (
                                        <button 
                                            onClick={() => setSearchQuery('')}
                                            className="text-white/40 hover:text-white transition-colors"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                    <button
                                        onClick={onClose}
                                        aria-label="Close search"
                                        className="w-[28px] h-[28px] md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center transition-colors shrink-0 text-white/70"
                                    >
                                        <X className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                                    </button>
                                </div>
                            </div>

                            {/* Results Area */}
                            <div className="p-4 md:p-6 max-h-[calc(100vh-160px)] md:max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                                {!searchQuery ? (
                                    <div className="mb-6">
                                        <h3 className="text-[13px] md:text-sm font-semibold text-white/50 mb-4 uppercase tracking-[0.5px]">
                                            Popular Searches
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {POPULAR_SEARCHES.map((search) => (
                                                <button
                                                    key={search}
                                                    onClick={() => setSearchQuery(search)}
                                                    className="px-[14px] md:px-4 py-[7px] md:py-2 bg-white/5 border border-white/10 rounded-full text-[13px] md:text-sm text-white/90 hover:bg-accent hover:border-accent hover:text-white transition-all text-left"
                                                >
                                                    {search}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="py-8 text-center">
                                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                                            <Search className="w-6 h-6 text-white/20" />
                                        </div>
                                        <p className="text-white/50 text-[15px]">
                                            No results found for "<span className="text-white">{searchQuery}</span>"
                                        </p>
                                        <p className="text-white/30 text-sm mt-1">
                                            Try searching for something else or check your spelling.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SearchModal;
