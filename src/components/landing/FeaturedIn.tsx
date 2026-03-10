import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logos = [
  "Health Magazine",
  "FitLife Daily",
  "Wellness Weekly",
  "NutriScience",
  "Shape Today",
  "MindBody",
];

const FeaturedIn = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">
          As Featured In
        </p>
        <div
          className={`flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {logos.map((name) => (
            <span
              key={name}
              className="font-display text-lg md:text-xl font-bold text-muted-foreground/40 hover:text-primary transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
