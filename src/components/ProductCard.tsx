import { Star, ShoppingCart, Heart, Eye, Package } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { type Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  viewMode?: "grid" | "list";
}

const ProductCard = ({ product, onAddToCart, viewMode = "grid" }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating) 
            ? "fill-accent text-accent" 
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  if (viewMode === "list") {
    return (
      <Card className="card-glass group overflow-hidden">
        <CardContent className="p-0">
          <div className="flex">
            {/* Product Image */}
            <div className="relative w-48 h-48 flex-shrink-0 bg-surface/50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Stock Status */}
              {!product.inStock && (
                <Badge variant="destructive" className="absolute top-2 left-2">
                  Out of Stock
                </Badge>
              )}
              {product.featured && (
                <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                  Featured
                </Badge>
              )}
            </div>

            {/* Product Info */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                      {product.category}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{product.brand}</span>
                  </div>
                  <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Rating and Reviews */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 ml-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="glass rounded-full p-2"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="glass rounded-full p-2"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Price & Purchase */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-glow">
                    ${product.price}
                  </div>
                  {product.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </div>
                  )}
                  {product.originalPrice && (
                    <Badge variant="secondary" className="text-xs bg-accent/20 text-accent">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>
                <Button
                  onClick={() => onAddToCart(product)}
                  disabled={!product.inStock}
                  className={product.inStock ? "btn-glow" : "btn-glass opacity-50"}
                  size="lg"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Grid view (default)
  return (
    <Card className="card-glass group overflow-hidden">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-surface/50 h-56">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {!product.inStock && (
              <Badge variant="destructive">
                Out of Stock
              </Badge>
            )}
            {product.featured && (
              <Badge className="bg-accent text-accent-foreground">
                Featured
              </Badge>
            )}
            {product.originalPrice && (
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                Save ${product.originalPrice - product.price}
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="sm"
              className="glass rounded-full p-2"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="glass rounded-full p-2"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                {product.category}
              </span>
              <span className="text-xs text-muted-foreground">{product.brand}</span>
            </div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {product.description}
            </p>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews})</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {product.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Price & Action */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <div className="text-xl font-bold text-glow">
                  ${product.price}
                </div>
                {product.originalPrice && (
                  <div className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </div>
                )}
              </div>
            </div>
            <Button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className={product.inStock ? "btn-glass hover:btn-glow" : "btn-glass opacity-50"}
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.inStock ? "Add" : "Sold Out"}
            </Button>
          </div>
        </div>
      </CardContent>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-[var(--radius)] border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 pointer-events-none"></div>
    </Card>
  );
};

export default ProductCard;