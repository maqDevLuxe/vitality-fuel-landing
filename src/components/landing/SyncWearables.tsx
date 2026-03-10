import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Watch, Smartphone, Wifi } from "lucide-react";
import wearableImg from "@/assets/wearable.jpg";

const SyncWearables = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <img src={wearableImg} alt="Smartwatch showing health metrics" className="rounded-3xl shadow-card w-full" />
          </div>
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Wearable Sync</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Sync with Your Favorite Devices
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Seamlessly integrate with Apple Watch, Fitbit, Garmin, Samsung Health, and more for real-time health insights.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Watch, label: "Apple Watch" },
                { icon: Smartphone, label: "Fitbit" },
                { icon: Wifi, label: "Garmin" },
              ].map((d, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border">
                  <d.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyncWearables;
