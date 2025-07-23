// Only keep what is needed for types and categories/brands

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  tags: string[];
}

export const categories = [
  "All",
  "Silencers", 
  "Helmets", 
  "Headlights", 
  "Gears",
  "Tires",
  "Brakes",
  "Mirrors",
  "Chains",
  "Filters",
  "Grips"
];

export const brands = [
  "All Brands",
  "Carbon Elite",
  "TurboMax",
  "RIDEGEAR Pro",
  "Aero Dynamics",
  "Precision",
  "Velocity"
];