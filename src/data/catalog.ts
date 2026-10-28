// Demo catalogue for the preview. Prices for packing variants and add-ons are illustrative.
export type Badge = '' | 'sale' | 'best' | 'new';
export interface Product {
  title: string;
  img: string;
  price: string;
  old?: string;
  badge?: Badge;
  soldout?: boolean;
}

const IMG = '/img/products/';
export const img = {
  orange555: IMG + 'orange-roses-555-basket.webp',
  red201: IMG + 'red-roses-201-ribbon.webp',
  pink201: IMG + 'pink-roses-201-ribbon.webp',
  white101: IMG + 'white-roses-101-basket.webp',
  red51: IMG + 'red-roses-51-air.webp',
  lightPink201: IMG + 'light-pink-roses-201.webp',
  red51Large: IMG + 'red-roses-51-air-large.webp',
};

export const PRODUCT_URL = '/products/bouquet-of-51-red-roses/';
export const COLLECTION_URL = '/collections/red-roses/';

export const signature: Product[] = [
  { img: img.orange555, title: 'Bouquet of 555 Orange Roses', price: 'AED 6,590', badge: 'best' },
  { img: img.white101, title: '101 White Rose Basket', price: 'AED 1,990' },
  { img: img.pink201, title: 'Bouquet of 201 Pink Roses', price: 'AED 1,960', badge: 'new' },
  { img: img.red201, title: 'Bouquet of 201 Red Roses', price: 'AED 1,960', badge: 'best' },
];

export const roses: Product[] = [
  { img: img.red51, title: 'Bouquet of 51 Red Roses', price: 'AED 595', old: 'AED 700', badge: 'sale' },
  { img: img.lightPink201, title: 'Bouquet of 201 Light Pink Roses', price: 'AED 1,960', soldout: true },
  { img: img.red201, title: 'Bouquet of 101 Red Roses', price: 'AED 1,095', badge: 'best' },
  { img: img.pink201, title: 'Bouquet of 101 Pink Roses', price: 'AED 1,395' },
];

export const redRoses: Product[] = [
  { img: img.red51, title: 'Bouquet of 51 Red Roses', price: 'AED 595', old: 'AED 700', badge: 'sale' },
  { img: img.red201, title: 'Bouquet of 101 Red Roses', price: 'AED 1,095', badge: 'best' },
  { img: img.red201, title: 'Bouquet of 201 Red Roses', price: 'AED 1,960' },
  { img: img.red51, title: 'Bouquet of 25 Red Roses', price: 'AED 750', badge: 'new' },
  { img: img.red201, title: 'Bouquet of 333 Red Roses', price: 'AED 3,995', soldout: true },
  { img: img.red51, title: 'Bouquet of 15 Red Roses', price: 'AED 345' },
  { img: img.red201, title: 'Bouquet of 555 Red Roses', price: 'AED 6,590', badge: 'best' },
  { img: img.red51, title: 'Red Roses in Jacket', price: 'AED 595' },
];

export const related: Product[] = [
  { img: img.red201, title: 'Bouquet of 101 Red Roses', price: 'AED 1,095', badge: 'best' },
  { img: img.pink201, title: 'Bouquet of 101 Pink Roses', price: 'AED 1,395' },
  { img: img.white101, title: '101 White Rose Basket', price: 'AED 1,990', badge: 'new' },
  { img: img.lightPink201, title: 'Bouquet of 201 Light Pink Roses', price: 'AED 1,960', soldout: true },
];

export const packing = [
  { label: 'Air', price: 595 },
  { label: 'Ribbon', price: 645 },
  { label: 'Jacket', price: 695 },
  { label: 'Sand Clock', price: 795 },
];

export const addons = [
  { label: 'Heart balloon', price: 95, icon: 'balloons' },
  { label: 'Chocolates', price: 120, icon: 'chocolate' },
  { label: 'Glass vase', price: 150, icon: 'flower' },
  { label: 'Gift wrap', price: 40, icon: 'gift' },
];

export const nav = [
  { label: 'Occasions', href: COLLECTION_URL, menu: true },
  { label: 'Gifts & Sweets', href: COLLECTION_URL, menu: true },
  { label: 'Signature Collections', href: COLLECTION_URL, menu: true },
  { label: 'Roses Collections', href: COLLECTION_URL, menu: true },
  { label: 'Special Offer', href: COLLECTION_URL, accent: true },
];

export const contact = {
  phone: '+971 58 505 1213',
  tel: 'tel:+971585051213',
  email: 'coo@floberry.ae',
  whatsapp: 'https://api.whatsapp.com/send?phone=971585051213',
  address: 'Shop 13, Residence Building 7, Bluewaters, Dubai, UAE',
  instagram: 'https://www.instagram.com/floberryboutique',
  telegram: 'https://t.me/floberryboutique',
  tiktok: 'https://www.tiktok.com/@floberry.ae',
};
