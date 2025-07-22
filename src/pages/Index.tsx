import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCatalog from "../components/ProductCatalog";
import BuyNow from "../components/BuyNow";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";
import { useToast } from "@/hooks/use-toast";
import { type Product } from "../data/products";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Header 
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <Hero 
        onBrowseCatalog={() => scrollToSection('catalog')}
        onBuildKit={() => scrollToSection('contact')}
      />
      
      <ProductCatalog onAddToCart={addToCart} />
      
      <BuyNow onAddToCart={addToCart} />
      
      <ContactForm />
      
      <Footer />

      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
};

export default Index;
