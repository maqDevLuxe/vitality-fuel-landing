import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShoppingCart, ListChecks, Truck, Tag } from "lucide-react";
import groceryImg from "@/assets/grocery.jpg";

const items = [
  { icon: ListChecks, text: "Auto-generated shopping lists from your meal plan" },
  { icon: Tag, text: "Smart budget optimization with price comparisons" },
  { icon: Truck, text: "Same-day delivery integration with major grocers" },
  { icon: ShoppingCart, text: "Barcode scanner for instant nutrition data" },
];

const SmartGrocery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <img src={groceryImg} alt="Grocery cart with fresh vegetables" className="rounded-3xl shadow-card w-full" />
          </div>
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Smart Grocery</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              From Meal Plan to Cart in Seconds
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Seamlessly turn your weekly meal plan into an optimized grocery list.
            </p>
            <div className="space-y-5">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${400 + i * 150}ms` }}
                >
                  <div className="gradient-hero w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartGrocery;
