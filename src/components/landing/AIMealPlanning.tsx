import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Calendar, Sparkles, Target } from "lucide-react";
import mealPrep from "@/assets/meal-prep.jpg";

const features = [
  { icon: Brain, title: "AI-Powered Plans", desc: "Smart algorithms analyze your goals, preferences, and dietary restrictions." },
  { icon: Calendar, title: "Weekly Schedules", desc: "Automated weekly meal plans with balanced macro and micro nutrients." },
  { icon: Sparkles, title: "Adaptive Learning", desc: "Plans evolve based on your feedback, cravings, and progress." },
  { icon: Target, title: "Goal-Specific", desc: "Weight loss, muscle gain, or maintenance — tailored just for you." },
];

const AIMealPlanning = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">AI Meal Planning</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Personal AI Chef & Nutritionist
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our AI analyzes over 50 health data points to create the perfect meal plan for your body.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`p-5 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300 ${
                    isVisible ? "animate-pop-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="gradient-hero w-10 h-10 rounded-xl flex items-center justify-center mb-3">
                    <f.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <img
              src={mealPrep}
              alt="Colorful meal prep containers with healthy food"
              className="rounded-3xl shadow-card w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMealPlanning;
