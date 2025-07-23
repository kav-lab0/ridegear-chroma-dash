import { Button } from "./ui/button";
// Use the local asset for the hero bike image
import heroBike from "../assets/hero-bike.png";

interface HeroProps {
  onBrowseCatalog: () => void;
  onBuildKit: () => void;
}

const Hero = ({ onBrowseCatalog, onBuildKit }: HeroProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-glow leading-tight">
              Premium Accessories for{" "}
              <span className="metallic-text font-extrabold">
                Superbike Freaks
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Silencers, Gears, Helmets and more
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={onBrowseCatalog}
              className="btn-glow text-lg px-8 py-4"
            >
              Browse Catalog
            </Button>
            <Button
              onClick={onBuildKit}
              variant="outline"
              className="btn-glass text-lg px-8 py-4"
            >
              Build Your Kit
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Riders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>

        {/* Right Content - Bike Image */}
        <div className="relative">
          <div className="relative">
            {/* Soft red glow behind the bike */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <div className="w-4/5 h-3/5 bg-red-500 opacity-25 rounded-full blur-3xl"></div>
            </div>
            <img
              src={heroBike}
              alt="Sleek Red Sport Motorcycle Design"
              className="w-full h-auto relative z-10"
            />
          </div>
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 glass p-4 rounded-lg" style={{ animationDelay: '1s' }}>
            <div className="text-sm font-semibold text-primary">Premium Quality</div>
            <div className="text-xs text-muted-foreground">Certified Products</div>
          </div>
          <div className="absolute bottom-10 left-10 glass p-4 rounded-lg" style={{ animationDelay: '2s' }}>
            <div className="text-sm font-semibold text-secondary">Fast Delivery</div>
            <div className="text-xs text-muted-foreground">Worldwide Shipping</div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator removed */}
    </section>
  );
};

export default Hero;