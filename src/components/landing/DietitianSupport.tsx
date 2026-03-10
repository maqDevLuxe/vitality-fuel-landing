import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageSquare, Video, CalendarCheck, Shield } from "lucide-react";
import dietitianImg from "@/assets/dietitian.png";

const DietitianSupport = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Expert Support</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Certified Dietitians at Your Fingertips
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Get personalized guidance from registered dietitians who understand your unique health journey.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MessageSquare, text: "Live Chat Support" },
                { icon: Video, text: "Video Consultations" },
                { icon: CalendarCheck, text: "Scheduled Check-ins" },
                { icon: Shield, text: "HIPAA Compliant" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-accent/50">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`flex justify-center transition-all duration-700 delay-200 ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-3xl opacity-10 scale-105 blur-xl" />
              <img
                src={dietitianImg}
                alt="Certified dietitian smiling with green apple"
                className="relative rounded-3xl w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DietitianSupport;
