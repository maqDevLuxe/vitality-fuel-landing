import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Activity, Droplets, Flame, Heart } from "lucide-react";

const metrics = [
  { icon: Flame, label: "Calories", value: "1,847", unit: "kcal", color: "gradient-citrus" },
  { icon: Activity, label: "Steps", value: "8,432", unit: "steps", color: "gradient-hero" },
  { icon: Droplets, label: "Water", value: "2.4", unit: "liters", color: "gradient-hero" },
  { icon: Heart, label: "Heart Rate", value: "72", unit: "bpm", color: "gradient-citrus" },
];

const HealthMetrics = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Health Tracking</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Track Every Metric That Matters
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Monitor calories, macros, water intake, sleep quality, and more with beautiful, intuitive dashboards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`bg-card rounded-3xl p-8 text-center border border-border hover:shadow-card transition-all duration-500 ${
                isVisible ? "animate-pop-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className={`${m.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <m.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="font-display text-3xl font-bold text-foreground">{m.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{m.unit}</p>
              <p className="text-xs font-semibold text-primary mt-2 uppercase tracking-wider">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthMetrics;
