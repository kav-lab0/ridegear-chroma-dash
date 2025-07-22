import { Button } from "./ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="card-glass group">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 bg-surface/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div>
          <span className="text-xs text-primary font-semibold uppercase tracking-wide">
            {product.category}
          </span>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-2xl font-bold text-glow">
            ${product.price}
          </div>
          <Button
            onClick={() => onAddToCart(product)}
            className="btn-glass hover:btn-glow group"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-[var(--radius)] border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProductCard;