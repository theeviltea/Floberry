// Demo search index for the preview. On Shopify this comes from the Search & Predictive Search APIs.
import { p, PRODUCT_URL, COLLECTION_URL, type Product } from './catalog';

export type Kind = 'Bouquets' | 'Baskets' | 'Arrangements';
export const pieces: (Product & { kind: Kind; keys: string })[] = [
  { ...p.red51, kind: 'Bouquets', keys: 'red roses rose bouquet love romance anniversary valentine' },
  { ...p.red101, kind: 'Bouquets', keys: 'red roses rose bouquet love romance anniversary' },
  { ...p.fuchsia, kind: 'Baskets', keys: 'garden roses rose gerbera pink feathers basket birthday' },
  { ...p.lemon, kind: 'Baskets', keys: 'spray roses rose lisianthus anthurium yellow basket thank you' },
  { ...p.winter, kind: 'Arrangements', keys: 'white roses rose fir candles hatbox box christmas winter new year' },
  { ...p.golden, kind: 'Arrangements', keys: 'fir orange cones gold christmas winter new year noel' },
];
export const collections = [
  { title: 'Roses Collection', sub: '24 pieces · from AED 345', img: p.red101.img, href: COLLECTION_URL, keys: 'roses rose red bouquets' },
  { title: 'Signature Collection', sub: 'Bestsellers and new arrivals', img: p.fuchsia.img, href: COLLECTION_URL, keys: 'signature roses baskets bestsellers' },
  { title: 'Winter Collection', sub: 'Fir, candles and gold', img: p.golden.img, href: COLLECTION_URL, keys: 'winter christmas new year fir candles' },
];
export const pages = [
  { title: 'Flower care', text: 'Trim the stems of your roses at an angle and change the water every day. Keep the bouquet away from direct sun and air conditioning.', href: '/pages/delivery/', keys: 'care roses water stems fresh' },
  { title: 'Delivery information', text: 'Same-day delivery across Dubai, Turbo Delivery in 40–80 minutes, free over AED 400.', href: '/pages/delivery/', keys: 'delivery turbo dubai same day free' },
];
export const suggestions = ['roses', 'red roses', 'rose basket', 'baskets', 'birthday', 'hatbox', 'winter', 'anniversary', 'white roses', 'turbo delivery'];
export const popular = ['Red roses', 'Birthday', 'Baskets', 'Same day', 'Under AED 600', 'Hatbox', 'Anniversary'];

/** compact payload for the client-side search */
export const searchIndex = {
  pieces: pieces.map(({ no, title, img, price, old, materials, kind, keys, badge, soldout }) => ({ no, title, img, price, old, materials, kind, keys, badge, soldout, href: PRODUCT_URL })),
  collections, pages, suggestions,
};
