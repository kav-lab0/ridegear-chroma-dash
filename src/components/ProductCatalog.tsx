import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { Filter, Grid, List } from "lucide-react";

// Import product images
import silencerImg from "../assets/silencer.png";
import helmetImg from "../assets/helmet.png";
import headlightImg from "../assets/headlight.png";
import gearImg from "../assets/gear.png";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
}

const ProductCatalog = ({ onAddToCart }: ProductCatalogProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sample products - in a real app, this would come from a database
  const products: Product[] = [
    {
      id: "1",
      name: "Carbon Pro Silencer",
      description: "High-performance exhaust silencer with carbon fiber construction for maximum power output.",
      price: 299,
      image: silencerImg,
      category: "Silencers"
    },
    {
      id: "2",
      name: "Aero Racing Helmet",
      description: "Professional-grade helmet with advanced aerodynamics and LED safety features.",
      price: 449,
      image: helmetImg,
      category: "Helmets"
    },
    {
      id: "3",
      name: "LED Vision Headlight",
      description: "Ultra-bright LED headlight assembly with adaptive beam technology.",
      price: 189,
      image: headlightImg,
      category: "Headlights"
    },
    {
      id: "4",
      name: "Precision Gear Lever",
      description: "CNC-machined gear lever with adjustable positioning and ergonomic design.",
      price: 129,
      image: gearImg,
      category: "Gears"
    },
    {
      id: "5",
      name: "Sport Silencer System",
      description: "Complete exhaust system with titanium construction and deep sound profile.",
      price: 599,
      image: silencerImg,
      category: "Silencers"
    },
    {
      id: "6",
      name: "Carbon Racing Helmet",
      description: "Lightweight carbon fiber helmet with advanced ventilation system.",
      price: 699,
      image: helmetImg,
      category: "Helmets"
    }
  ];

  const categories = ["All", "Silencers", "Helmets", "Headlights", "Gears"];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="catalog" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
            Premium Product Catalog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our extensive collection of high-performance superbike accessories
          </p>
        </div>

        {/* Filter Controls */}
        <div className="glass-strong rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  className={
                    selectedCategory === category
                      ? "btn-glow"
                      : "btn-glass hover:text-primary"
                  }
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setViewMode("grid")}
                  variant="ghost"
                  size="sm"
                  className={`btn-glass ${viewMode === "grid" ? "text-primary" : ""}`}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setViewMode("list")}
                  variant="ghost"
                  size="sm"
                  className={`btn-glass ${viewMode === "list" ? "text-primary" : ""}`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="btn-glass">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="btn-glow px-12 py-3">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;