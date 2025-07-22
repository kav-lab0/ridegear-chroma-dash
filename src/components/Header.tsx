import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="nav-glass px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl md:text-3xl font-bold text-glow tracking-wider">
            RIDEGEAR
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('catalog')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Catalog
          </button>
          <button
            onClick={() => scrollToSection('buy-now')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Buy Now
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contact Us
          </button>
        </nav>

        {/* Search Bar & Cart */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden sm:flex relative">
            <Input
              placeholder="Search accessories..."
              className="input-glass w-64 pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Cart Button */}
          <Button
            onClick={onCartClick}
            variant="ghost"
            size="sm"
            className="btn-glass relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden btn-glass"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 glass-strong rounded-lg p-4 mx-6">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('catalog')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Catalog
            </button>
            <button
              onClick={() => scrollToSection('buy-now')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Buy Now
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Contact Us
            </button>
            {/* Mobile Search */}
            <div className="relative">
              <Input
                placeholder="Search accessories..."
                className="input-glass pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;