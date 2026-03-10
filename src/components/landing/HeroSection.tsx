import { ArrowRight, Play } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-accent/30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-slide-left">
            <span className="inline-block gradient-citrus text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              🥑 #1 Nutrition App of 2026
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-6">
              Eat Smart,{" "}
              <span className="text-gradient-fresh">Live Better</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              AI-powered personalized nutrition plans, smart meal tracking, and
              expert dietitian support — all in one beautiful app.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="gradient-hero text-primary-foreground px-8 py-4 rounded-full font-semibold text-base flex items-center gap-2 hover:opacity-90 transition-opacity shadow-soft">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-3 px-6 py-4 rounded-full border border-border bg-card text-foreground font-medium hover:shadow-card transition-shadow">
                <div className="gradient-citrus rounded-full p-2">
                  <Play className="h-3 w-3 text-secondary-foreground fill-current" />
                </div>
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-card bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground"
                  >
                    {["S", "M", "A", "K"][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">2M+ Active Users</p>
                <p className="text-xs text-muted-foreground">⭐⭐⭐⭐⭐ 4.9 avg rating</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="animate-slide-right flex justify-center">
            <div className="relative">
              <img
                src={heroPhone}
                alt="NutriLife app on smartphone surrounded by fresh ingredients"
                className="w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
