import type { Product, Category, Brand } from '../types';

export const CATEGORIES: Category[] = [
    { id: 'phone-cases', name: 'Phone Cases', image: '/assets/images/phone-cases2a.png' },
    { id: 'airpods-cases', name: 'AirPods Cases', image: '/assets/images/airpods-cases2a.jpeg' },
    { id: 'charger-cases', name: 'Charger Case', image: '/assets/images/charger-cases2a.jpg' },
    { id: 'watch-straps', name: 'Watch Straps', image: '/assets/images/watch-straps2a.png' },
    { id: 'stands', name: 'Stands', image: '/assets/images/stands2a.jpg' },
    { id: 'iwatch-protection', name: 'IWatch Protection', image: '/assets/images/iwatch-protection2a.png' },
];

export const BEST_SELLERS: Product[] = [
    {
        id: '1',
        name: 'Premium Leather MagSafe Case with Card Holder',
        model: 'iPhone 15 Pro / Pro Max',
        brand: 'CaseCraft',
        price: 49.99,
        oldPrice: 69.99,
        image: '/assets/images/Leather Phone Case For iPhones.jpeg',
        category: 'phone-cases',
        badge: 'Hot',
        rating: 4.8,
        reviews: 1248
    },
    {
        id: '2',
        name: 'Crystal Clear MagSafe Case – Ultra-Thin Protection',
        model: 'All iPhone Models',
        brand: 'CaseCraft',
        price: 29.99,
        oldPrice: 39.99,
        image: '/assets/images/clear-case1.jpeg',
        category: 'phone-cases',
        badge: 'New',
        rating: 4.9,
        reviews: 86
    },
    {
        id: '3',
        name: 'MagLine XT – Premium Carbon Fiber Texture MagSafe Case',
        model: 'iPhone 14 Series',
        brand: 'CaseCraft',
        price: 44.99,
        oldPrice: 54.99,
        image: '/assets/images/MagSafeSilicone.jpeg',
        category: 'phone-cases',
        badge: 'Sale',
        rating: 4.7,
        reviews: 210
    },
    {
        id: '4',
        name: 'Rugged Armor Pro Case – Military Grade Protection',
        model: 'Samsung S24 Ultra',
        brand: 'CaseCraft',
        price: 39.99,
        oldPrice: 59.99,
        image: '/assets/images/RuggedShockproof.jpg',
        category: 'phone-cases',
        badge: 'Hot',
        rating: 4.6,
        reviews: 450
    },
    {
        id: '5',
        name: 'CoreArmour – Designer Case with Metal Bezel',
        model: 'AirPods Pro 2',
        brand: 'CaseCraft',
        price: 24.99,
        oldPrice: 34.99,
        image: '/assets/images/airpod-case2.png',
        category: 'airpods-cases',
        badge: 'New',
        rating: 4.8,
        reviews: 124
    },
    {
        id: '6',
        name: 'Elite Silicone Series – Soft Touch Protection',
        model: 'iPhone 15 Series',
        brand: 'CaseCraft',
        price: 19.99,
        oldPrice: 29.99,
        image: '/assets/images/mobile-case3.png',
        category: 'phone-cases',
        rating: 4.5,
        reviews: 890
    }
];

export const BRANDS: Brand[] = [
    { id: 'oppo', name: 'OPPO', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/OPPO_LOGO_2019.svg/960px-OPPO_LOGO_2019.svg.png' },
    { id: 'vivo', name: 'Vivo', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Vivo_logo_2019.svg' },
    { id: 'xiaomi', name: 'Xiaomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg' },
    { id: 'iqoo', name: 'iQOO', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Iqoo.svg' },
    { id: 'realme', name: 'Realme', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Realme_logo.svg' },
    { id: 'poco', name: 'POCO', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/POCO_logo.svg' },
    { id: 'asus', name: 'ASUS', logo: 'https://upload.wikimedia.org/wikipedia/commons/archive/2/2e/20230825085748%21ASUS_Logo.svg' },
    { id: 'coolpad', name: 'Coolpad', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Coolpad_logo.svg' },
    { id: 'htc', name: 'HTC', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTC_Logo_1997.svg' },
    { id: 'huawei', name: 'Huawei', logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/Huawei_Standard_logo.svg' },
    { id: 'lenovo', name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
    { id: 'nokia', name: 'Nokia', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg' },
    { id: 'nothing', name: 'Nothing', logo: '/assets/images/Nothing-phone-logo.png' },
    { id: 'motorola', name: 'Motorola', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Motorola_logo.svg' },
    { id: 'sony', name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Sony_logos.JPG' },
    { id: 'apple', name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg' },
    { id: 'oneplus', name: 'OnePlus', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/OnePlus_logo.png' },
    { id: 'samsung', name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png' },
];

export const TRENDING_COLLECTIONS = [
    { id: 'clear-cases', name: 'Clear Cases', image: '/assets/images/clear-case1.jpeg' },
    { id: 'leather-cases', name: 'Leather Cases', image: '/assets/images/Leather Phone Case For iPhones.jpeg' },
    { id: 'magsafe-cases', name: 'MagSafe Cases', image: '/assets/images/MagSafeSilicone.jpeg' },
    { id: 'rugged-cases', name: 'Rugged Cases', image: '/assets/images/RuggedShockproof.jpg' },
    { id: 'wallet-cases', name: 'Wallet Cases', image: '/assets/images/walletPhoneCase.jpeg' },
    { id: 'designer-cases', name: 'Designer Cases', image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=400&fit=crop&q=80' },
];

export const WATCH_BUY_DATA = [
    {
        id: '1',
        name: 'Sport Loop Band',
        model: 'Apple Watch 45mm',
        price: 'NPR 3,249',
        badge: 'New',
        type: 'new',
        image: '/assets/images/watch-straps.png',
        video: '/assets/images/iphone-case-reel.mp4',
        desc: "Lightweight and breathable sport loop band crafted for all-day comfort. Features a double-layer nylon weave that's soft against skin and built to handle sweat and splashes."
    },
    {
        id: '2',
        name: 'Leather Link Strap',
        model: 'Apple Watch 41mm / 45mm',
        price: 'NPR 4,549',
        badge: 'Hot',
        type: 'hot',
        image: '/assets/images/watch-strap2.png',
        video: '/assets/images/watch-buy2.mp4',
        desc: "Premium full-grain leather strap with a modern modular link design. Adjustable to any wrist size with a secure magnetic closure — elegant enough for formal wear."
    },
    {
        id: '3',
        name: 'Milanese Mesh Band',
        model: 'Universal 42 / 44 / 45mm',
        price: 'NPR 3,899',
        image: '/assets/images/watch-strap3.png',
        desc: "Stainless steel mesh band with an infinitely adjustable magnetic clasp. Sleek, breathable, and corrosion-resistant — the perfect balance of style and durability."
    },
    {
        id: '4',
        name: 'Woven Nylon Strap',
        model: 'Apple Watch 40mm / 44mm',
        price: 'NPR 2,599',
        badge: 'Sale',
        type: 'sale',
        image: '/assets/images/watch-straps.png',
        desc: "Durable woven nylon with vibrant color options. Water-resistant and lightweight, this band keeps you active from morning workouts to evening outings."
    }
];
