import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import recipesUi from "@/assets/recipes-ui.png";

const RecipeDatabase = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="recipes" className="py-24 bg-accent/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Recipe Database</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            50,000+ Curated Recipes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Filter by diet type, cuisine, prep time, allergens, and nutritional goals. Every recipe comes with step-by-step video guides.
          </p>
        </div>
        <div className={`flex justify-center transition-all duration-700 ${isVisible ? "animate-pop-up" : "opacity-0"}`}>
          <img
            src={recipesUi}
            alt="Recipe database app interface on tablet and phone"
            className="w-full max-w-3xl drop-shadow-xl"
          />
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {[
            { num: "50K+", label: "Recipes" },
            { num: "120+", label: "Cuisines" },
            { num: "15+", label: "Diet Types" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl bg-card border border-border ${isVisible ? "animate-pop-up" : "opacity-0"}`}
              style={{ animationDelay: `${300 + i * 150}ms` }}
            >
              <p className="font-display text-3xl font-bold text-gradient-fresh">{stat.num}</p>
              <p className="text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeDatabase;
