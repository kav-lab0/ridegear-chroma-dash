import { Button } from "./ui/button";
import { Zap, Shield, Truck } from "lucide-react";

const BuyNow = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality Parts",
      description: "All accessories and components are certified and rigorously tested for performance and safety."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Lightning-fast shipping on all orders, worldwide."
    },
    {
      icon: Zap,
      title: "Expert Support",
      description: "Get advice and help from real riders and mechanics—before and after your purchase."
    }
  ];

  return (
    <section id="buy-now" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
            Why Shop With Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The best place for superbike silencers, helmets, headlights, and more—delivered fast, with expert support.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass rounded-xl p-6 text-center">
              <div className="glass rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">{feature.title}</h3>
              <p className="text-muted-foreground text-sm text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-strong rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-glow">
              Still Not Sure? Talk to Our Experts!
            </h3>
            <p className="text-muted-foreground mb-6 text-gray-200">
              Get personalized recommendations for your next superbike upgrade—silencers, helmets, headlights, and more.
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