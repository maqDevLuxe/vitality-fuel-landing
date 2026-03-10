import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import lifestyleImg from "@/assets/lifestyle-promo.jpg";

const LifestylePromo = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className={`relative h-[60vh] md:h-[70vh] overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={lifestyleImg}
        alt="Woman preparing a fresh salad in a bright kitchen"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-lg">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              A Healthier You Starts Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join millions who have transformed their lives with personalized nutrition.
            </p>
            <button className="gradient-citrus text-secondary-foreground px-8 py-4 rounded-full font-semibold shadow-citrus hover:opacity-90 transition-opacity">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestylePromo;
