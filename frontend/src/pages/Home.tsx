import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import PromoBannerSmall from '../components/home/PromoBannerSmall';
import BestSellers from '../components/home/BestSellers';
import ShopByBrand from '../components/home/ShopByBrand';
import PromoBannersLarge from '../components/home/PromoBannersLarge';
import TrendingCollections from '../components/home/TrendingCollections';
import VideoCategoryGrid from '../components/home/VideoCategoryGrid';
import WatchAndBuy from '../components/home/WatchAndBuy';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

const Home = () => {
    return (
        <div className="bg-[#040b3a]">
            {/* 1. Hero — Bento grid with 5 cards */}
            <HeroSection />

            {/* 2. Product Type Categories (6 icons) */}
            <CategoryGrid />

            {/* 3. Promo Banner — "Love Free Shipping" */}
            <PromoBannerSmall />

            {/* 4. Best Sellers carousel */}
            <BestSellers />

            {/* 5. Shop by Device + All Brands grid */}
            <ShopByBrand />

            {/* 6. Dual Promo Banners (mobile cases / MagSafe) */}
            <PromoBannersLarge />

            {/* 7. Trending Collections */}
            <TrendingCollections />

            {/* 8. Shop by Category – video bento grid */}
            <VideoCategoryGrid />

            {/* 9. Watch & Buy – video hover cards */}
            <WatchAndBuy />

            {/* 10. Testimonials */}
            <TestimonialsSection />

            {/* 11. Newsletter */}
            <NewsletterSection />
        </div>
    );
};

export default Home;
