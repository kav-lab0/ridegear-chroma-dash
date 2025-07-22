// Import all product images
import silencerImg from "../assets/silencer.png";
import helmetImg from "../assets/helmet.png";
import headlightImg from "../assets/headlight.png";
import gearImg from "../assets/gear.png";
import tireImg from "../assets/tire.png";
import brakeImg from "../assets/brake.png";
import mirrorImg from "../assets/mirror.png";
import chainImg from "../assets/chain.png";
import filterImg from "../assets/filter.png";
import gripImg from "../assets/grip.png";

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
  "RIDEGEAR Pro",
  "Carbon Elite",
  "Velocity",
  "TurboMax",
  "Precision",
  "Aero Dynamics",
  "Performance Plus"
];

export const products: Product[] = [
  // Silencers
  {
    id: "1",
    name: "Carbon Pro Silencer",
    description: "High-performance exhaust silencer with carbon fiber construction for maximum power output and deep sound profile.",
    price: 299,
    originalPrice: 349,
    image: silencerImg,
    category: "Silencers",
    brand: "Carbon Elite",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    featured: true,
    tags: ["carbon fiber", "performance", "lightweight"]
  },
  {
    id: "2",
    name: "Sport Silencer System",
    description: "Complete exhaust system with titanium construction and aggressive sound tuning for racing applications.",
    price: 599,
    originalPrice: 699,
    image: silencerImg,
    category: "Silencers",
    brand: "TurboMax",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: false,
    tags: ["titanium", "racing", "complete system"]
  },
  {
    id: "3",
    name: "Stealth Silencer Pro",
    description: "Ultra-quiet operation with enhanced flow dynamics for street and track use.",
    price: 449,
    image: silencerImg,
    category: "Silencers",
    brand: "RIDEGEAR Pro",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    featured: false,
    tags: ["quiet", "street", "track"]
  },
  
  // Helmets
  {
    id: "4",
    name: "Aero Racing Helmet",
    description: "Professional-grade helmet with advanced aerodynamics, LED safety features, and anti-fog visor technology.",
    price: 449,
    originalPrice: 529,
    image: helmetImg,
    category: "Helmets",
    brand: "Aero Dynamics",
    rating: 4.9,
    reviews: 324,
    inStock: true,
    featured: true,
    tags: ["aerodynamic", "LED", "anti-fog"]
  },
  {
    id: "5",
    name: "Carbon Racing Helmet",
    description: "Lightweight carbon fiber helmet with advanced ventilation system and emergency quick-release mechanism.",
    price: 699,
    originalPrice: 799,
    image: helmetImg,
    category: "Helmets",
    brand: "Carbon Elite",
    rating: 5.0,
    reviews: 187,
    inStock: true,
    featured: true,
    tags: ["carbon fiber", "ventilation", "quick-release"]
  },
  {
    id: "6",
    name: "Street Guardian Helmet",
    description: "DOT/ECE certified helmet with smart HUD display and integrated communication system.",
    price: 829,
    image: helmetImg,
    category: "Helmets",
    brand: "RIDEGEAR Pro",
    rating: 4.8,
    reviews: 156,
    inStock: false,
    featured: false,
    tags: ["DOT", "ECE", "HUD", "communication"]
  },
  {
    id: "7",
    name: "Tour Comfort Helmet",
    description: "Long-distance touring helmet with noise reduction and premium comfort padding.",
    price: 379,
    image: helmetImg,
    category: "Helmets",
    brand: "Performance Plus",
    rating: 4.6,
    reviews: 278,
    inStock: true,
    featured: false,
    tags: ["touring", "comfort", "noise reduction"]
  },

  // Headlights
  {
    id: "8",
    name: "LED Vision Headlight",
    description: "Ultra-bright LED headlight assembly with adaptive beam technology and automatic high-beam switching.",
    price: 189,
    originalPrice: 229,
    image: headlightImg,
    category: "Headlights",
    brand: "Velocity",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    featured: false,
    tags: ["LED", "adaptive", "automatic"]
  },
  {
    id: "9",
    name: "Matrix Pro Headlight",
    description: "Advanced matrix LED technology with cornering assistance and weather adaptation.",
    price: 359,
    image: headlightImg,
    category: "Headlights",
    brand: "RIDEGEAR Pro",
    rating: 4.9,
    reviews: 167,
    inStock: true,
    featured: true,
    tags: ["matrix LED", "cornering", "weather adaptive"]
  },
  {
    id: "10",
    name: "Night Rider Headlight",
    description: "Long-range projection headlight with blue accent lighting and sequential turn signals.",
    price: 279,
    image: headlightImg,
    category: "Headlights",
    brand: "Aero Dynamics",
    rating: 4.8,
    reviews: 145,
    inStock: true,
    featured: false,
    tags: ["long range", "accent lighting", "sequential"]
  },

  // Gears
  {
    id: "11",
    name: "Precision Gear Lever",
    description: "CNC-machined gear lever with adjustable positioning, ergonomic design, and quick-shift capability.",
    price: 129,
    originalPrice: 159,
    image: gearImg,
    category: "Gears",
    brand: "Precision",
    rating: 4.6,
    reviews: 198,
    inStock: true,
    featured: false,
    tags: ["CNC", "adjustable", "quick-shift"]
  },
  {
    id: "12",
    name: "Racing Gear Set",
    description: "Complete gear assembly with carbon fiber components and race-tuned gear ratios.",
    price: 699,
    image: gearImg,
    category: "Gears",
    brand: "Carbon Elite",
    rating: 4.9,
    reviews: 87,
    inStock: true,
    featured: true,
    tags: ["complete set", "carbon fiber", "race tuned"]
  },
  {
    id: "13",
    name: "Quick Shift Pro",
    description: "Electronic quick-shift system with clutchless upshifts and downshift blipping.",
    price: 899,
    image: gearImg,
    category: "Gears",
    brand: "TurboMax",
    rating: 5.0,
    reviews: 124,
    inStock: false,
    featured: true,
    tags: ["electronic", "clutchless", "blipping"]
  },

  // Tires
  {
    id: "14",
    name: "Performance Sport Tire",
    description: "High-grip compound tire with advanced tread pattern for maximum traction and cornering stability.",
    price: 249,
    originalPrice: 289,
    image: tireImg,
    category: "Tires",
    brand: "Performance Plus",
    rating: 4.8,
    reviews: 312,
    inStock: true,
    featured: true,
    tags: ["high grip", "sport", "cornering"]
  },
  {
    id: "15",
    name: "Track Beast Tire",
    description: "Racing compound tire designed for track use with exceptional heat resistance and grip.",
    price: 349,
    image: tireImg,
    category: "Tires",
    brand: "TurboMax",
    rating: 4.9,
    reviews: 156,
    inStock: true,
    featured: false,
    tags: ["racing", "track", "heat resistant"]
  },
  {
    id: "16",
    name: "All-Weather Touring Tire",
    description: "Versatile tire for all conditions with long-lasting tread and excellent wet weather performance.",
    price: 189,
    image: tireImg,
    category: "Tires",
    brand: "Velocity",
    rating: 4.7,
    reviews: 267,
    inStock: true,
    featured: false,
    tags: ["all weather", "touring", "long lasting"]
  },

  // Brakes
  {
    id: "17",
    name: "Carbon Brake Disc Set",
    description: "Lightweight carbon-ceramic brake discs with superior heat dissipation and fade resistance.",
    price: 799,
    originalPrice: 899,
    image: brakeImg,
    category: "Brakes",
    brand: "Carbon Elite",
    rating: 4.9,
    reviews: 134,
    inStock: true,
    featured: true,
    tags: ["carbon ceramic", "lightweight", "heat dissipation"]
  },
  {
    id: "18",
    name: "Racing Brake Pads",
    description: "High-performance brake pads with aggressive bite and consistent performance under extreme conditions.",
    price: 159,
    image: brakeImg,
    category: "Brakes",
    brand: "TurboMax",
    rating: 4.8,
    reviews: 278,
    inStock: true,
    featured: false,
    tags: ["racing", "aggressive bite", "extreme conditions"]
  },
  {
    id: "19",
    name: "Street Performance Brakes",
    description: "Balanced brake system for street use with excellent stopping power and minimal dust.",
    price: 299,
    image: brakeImg,
    category: "Brakes",
    brand: "RIDEGEAR Pro",
    rating: 4.7,
    reviews: 189,
    inStock: true,
    featured: false,
    tags: ["street", "stopping power", "minimal dust"]
  },

  // Mirrors
  {
    id: "20",
    name: "Aero Sport Mirrors",
    description: "Aerodynamic mirrors with integrated LED turn signals and wide-angle visibility enhancement.",
    price: 89,
    originalPrice: 109,
    image: mirrorImg,
    category: "Mirrors",
    brand: "Aero Dynamics",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    featured: false,
    tags: ["aerodynamic", "LED signals", "wide angle"]
  },
  {
    id: "21",
    name: "Carbon Fiber Mirrors",
    description: "Ultra-lightweight carbon fiber mirrors with anti-vibration mounting and premium optics.",
    price: 179,
    image: mirrorImg,
    category: "Mirrors",
    brand: "Carbon Elite",
    rating: 4.8,
    reviews: 89,
    inStock: true,
    featured: false,
    tags: ["carbon fiber", "anti-vibration", "premium optics"]
  },

  // Chains
  {
    id: "22",
    name: "O-Ring Racing Chain",
    description: "High-strength O-ring sealed chain with gold plating and extended service life.",
    price: 129,
    originalPrice: 149,
    image: chainImg,
    category: "Chains",
    brand: "Precision",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    featured: false,
    tags: ["O-ring", "gold plated", "extended life"]
  },
  {
    id: "23",
    name: "X-Ring Performance Chain",
    description: "Advanced X-ring technology for reduced friction and maximum power transfer efficiency.",
    price: 179,
    image: chainImg,
    category: "Chains",
    brand: "Performance Plus",
    rating: 4.8,
    reviews: 167,
    inStock: true,
    featured: false,
    tags: ["X-ring", "reduced friction", "power transfer"]
  },

  // Filters
  {
    id: "24",
    name: "High-Flow Air Filter",
    description: "Performance air filter with multi-layer filtration and increased airflow for enhanced power output.",
    price: 79,
    originalPrice: 99,
    image: filterImg,
    category: "Filters",
    brand: "TurboMax",
    rating: 4.6,
    reviews: 278,
    inStock: true,
    featured: false,
    tags: ["high flow", "multi-layer", "enhanced power"]
  },
  {
    id: "25",
    name: "Carbon Pod Filter",
    description: "Carbon fiber air filter assembly with velocity stacks and optimized intake design.",
    price: 199,
    image: filterImg,
    category: "Filters",
    brand: "Carbon Elite",
    rating: 4.9,
    reviews: 123,
    inStock: true,
    featured: false,
    tags: ["carbon fiber", "velocity stacks", "optimized"]
  },

  // Grips
  {
    id: "26",
    name: "Ergonomic Racing Grips",
    description: "Contoured racing grips with anti-slip surface and vibration dampening technology.",
    price: 59,
    originalPrice: 79,
    image: gripImg,
    category: "Grips",
    brand: "Precision",
    rating: 4.7,
    reviews: 189,
    inStock: true,
    featured: false,
    tags: ["ergonomic", "anti-slip", "vibration dampening"]
  },
  {
    id: "27",
    name: "Heated Comfort Grips",
    description: "Temperature-controlled heated grips with multiple heat settings and weather resistance.",
    price: 149,
    image: gripImg,
    category: "Grips",
    brand: "RIDEGEAR Pro",
    rating: 4.8,
    reviews: 145,
    inStock: true,
    featured: false,
    tags: ["heated", "temperature control", "weather resistant"]
  },
  {
    id: "28",
    name: "Carbon Sport Grips",
    description: "Lightweight carbon fiber grips with precision texture and premium feel.",
    price: 99,
    image: gripImg,
    category: "Grips",
    brand: "Carbon Elite",
    rating: 4.9,
    reviews: 167,
    inStock: false,
    featured: false,
    tags: ["carbon fiber", "precision texture", "premium"]
  }
];

export const featuredProducts = products.filter(product => product.featured);
export const getProductsByCategory = (category: string) => 
  category === "All" ? products : products.filter(product => product.category === category);
export const getProductsByBrand = (brand: string) => 
  brand === "All Brands" ? products : products.filter(product => product.brand === brand);