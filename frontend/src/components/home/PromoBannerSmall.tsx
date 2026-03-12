const PromoBannerSmall = () => {
    return (
        <section className="py-8 px-4 md:px-8 bg-[#040b3a]">
            <div className="max-w-7xl mx-auto">
                <div className="relative w-full h-[220px] md:h-[260px] rounded-2xl overflow-hidden">
                    {/* Full-cover background image */}
                    <img
                        src="/assets/images/banner-9.jpg"
                        alt="Free Shipping Promo"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Left dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0520]/90 via-[#0a0520]/60 to-transparent" />
                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 space-y-3" style={{ maxWidth: '420px' }}>
                        <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                            Love Your Device,{' '}
                            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Love</span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Free Shipping</span>
                        </h3>
                        <p className="text-white/70 text-sm font-medium leading-snug">
                            Unlock free delivery on orders NPR 5,000+ • Because your phone deserves the best
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center w-fit px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoBannerSmall;
