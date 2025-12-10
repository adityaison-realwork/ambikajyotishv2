
export type Language = 'EN' | 'HI' | 'SA';

// Legacy Types (kept for existing pages until fully migrated)
export interface ServiceItem {
  name: string;
  description: string;
  duration?: string;
  price?: string;
}

export interface PujaCategory {
  title: string;
  description: string;
  items: PujaItem[];
}

export interface PujaItem {
  name: string;
  whoNeedsIt: string;
  vidhi: string;
  priceStandard?: string;
  pricePremium?: string;
  priceExtra?: string;
}

export interface VastuItem {
  service: string;
  scope: string;
  deliverables: string;
  price: string;
}

// Database Types for Admin Panel
export interface DBItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string; // Keeping as string to allow "₹500" or "Starts from..."
}

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service: string;
  image?: string;
}

export interface Mantra {
  sanskrit: string;
  english: string;
  meaning: string;
}

export interface TranslationStructure {
  nav: { [key: string]: string };
  hero: { [key: string]: string };
  headings: { [key: string]: string };
  home: { [key: string]: string };
  aboutPage: any;
  contactPage: any;
  footer: any;
  servicesData: ServiceItem[];
  pujasData: PujaCategory[];
  vastuData: VastuItem[];
  epujaData: any;
  reviewsData: Review[];
}