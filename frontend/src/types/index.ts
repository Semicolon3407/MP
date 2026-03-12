export interface Product {
    id: string;
    name: string;
    model: string;
    brand: string;
    price: number;
    oldPrice?: number;
    image: string;
    category: string;
    badge?: 'Hot' | 'New' | 'Sale';
    rating: number;
    reviews: number;
}

export interface Category {
    id: string;
    name: string;
    image: string;
}

export interface Brand {
    id: string;
    name: string;
    logo: string;
}
