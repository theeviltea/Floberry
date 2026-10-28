// Demo catalogue for the preview. Product names, prices, packing and add-on prices are illustrative.
export type Badge = '' | 'sale' | 'best' | 'new';
export interface Product {
  title: string;
  img: string;
  price: string;
  old?: string;
  badge?: Badge;
  soldout?: boolean;
  /** exhibit number shown on the museum-style label */
  no?: string;
  /** one-line composition, like a gallery wall label */
  materials?: string;
  href?: string;
}

const G = '/img/gallery/';
export type Shot = 'red-51' | 'red-101' | 'lemon-basket' | 'lemon-basket-close' | 'fuchsia-basket' | 'fuchsia-basket-close' | 'winter-candles' | 'golden-noel';
/** card = 4:5 crop (960×1200); 1400 / 2400 = full studio frame (3:2) */
export const photo = (s: Shot, v: 'card' | '1400' | '2400' = 'card') => `${G}${s}-${v}.webp`;
export const cutout = (s: Shot, v: '1400' | '2400' = '2400') => `${G}${s}-cut${v === '1400' ? '-1400' : ''}.webp`;

export const PRODUCT_URL = '/products/bouquet-of-51-red-roses/';
export const COLLECTION_URL = '/collections/signature/';

export const p = {
  red51: { no: '051', img: photo('red-51'), title: 'Bouquet of 51 Red Roses', materials: '51 red roses, 60 cm · satin ribbon', price: 'AED 595', old: 'AED 700', badge: 'sale' },
  red101: { no: '101', img: photo('red-101'), title: 'Bouquet of 101 Red Roses', materials: '101 red roses, 60 cm · satin ribbon', price: 'AED 1,095', badge: 'best' },
  lemon: { no: '024', img: photo('lemon-basket'), title: 'Lemon Garden Basket', materials: 'Spray roses, lisianthus, anthurium · woven basket', price: 'AED 690', badge: 'new' },
  fuchsia: { no: '031', img: photo('fuchsia-basket'), title: 'Fuchsia Plume Basket', materials: 'Garden roses, gerberas, feathers · wicker basket', price: 'AED 750', badge: 'best' },
  winter: { no: '112', img: photo('winter-candles'), title: 'Winter Candle Box', materials: 'White roses, noble fir, two candles · hatbox', price: 'AED 520', badge: 'new' },
  golden: { no: '115', img: photo('golden-noel'), title: 'Golden Noel', materials: 'Noble fir, dried orange, cones · gold bowl', price: 'AED 580' },
} satisfies Record<string, Product>;

export const all: Product[] = [p.red51, p.fuchsia, p.winter, p.red101, p.lemon, p.golden];
export const signature: Product[] = [p.fuchsia, p.red101, p.lemon, p.golden];
export const related: Product[] = [p.red101, p.fuchsia, p.lemon, { ...p.winter, soldout: true }];

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
