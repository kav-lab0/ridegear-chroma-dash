import { Button } from "./ui/button";
import { Star, Zap, Shield, Truck } from "lucide-react";

// Import product images
import silencerImg from "../assets/silencer.png";
import helmetImg from "../assets/helmet.png";
import headlightImg from "../assets/headlight.png";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  badge?: string;
}

interface BuyNowProps {
  onAddToCart: (product: any) => void;
}

const BuyNow = ({ onAddToCart }: BuyNowProps) => {
  const featuredProducts: Product[] = [
    {
      id: "featured-1",
      name: "Elite Performance Kit",
      description: "Complete upgrade package with premium silencer, LED headlight, and racing gear lever.",
      price: 899,
      originalPrice: 1299,
      image: silencerImg,
      rating: 4.9,
      badge: "BESTSELLER"
    },
    {
      id: "featured-2", 
      name: "Safety Champion Helmet",
      description: "Award-winning helmet with 5-star safety rating and cutting-edge technology.",
      price: 549,
      originalPrice: 699,
      image: helmetImg,
      rating: 4.8,
      badge: "AWARD WINNER"
    },
    {
      id: "featured-3",
      name: "Night Vision Pro Light",
      description: "Advanced LED system with adaptive brightness and weather resistance.",
      price: 299,
      originalPrice: 399,
      image: headlightImg,
      rating: 4.7,
      badge: "HOT DEAL"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "All products tested and certified"
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Free express delivery worldwide"
    },
    {
      icon: Zap,
      title: "Performance Boost",
      description: "Guaranteed improvement or refund"
    }
  ];

  return (
    <section id="buy-now" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
            Featured <span className="text-glow-secondary">Hot Deals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Limited-time offers on our top-rated products. Don't miss out on these amazing deals!
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass rounded-xl p-6 text-center">
              <div className="glass rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="card-glass relative overflow-hidden group">
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-accent to-primary text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 bg-surface/50 p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.rating})</span>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-glow">
                    ${product.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-bold">
                    SAVE ${product.originalPrice - product.price}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => onAddToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                  })}
                  className="btn-glow w-full py-3 text-lg"
                >
                  Buy Now - Limited Time!
                </Button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[var(--radius)] border-2 border-transparent group-hover:border-accent/40 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-strong rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-glow">
              Still Not Sure? Talk to Our Experts!
            </h3>
            <p className="text-muted-foreground mb-6">
              Get personalized recommendations based on your bike model and riding style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow">
                Get Expert Consultation
              </Button>
              <Button variant="outline" className="btn-glass">
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;