import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";
import transformationImg from "@/assets/transformation.jpg";

const reviews = [
  {
    name: "Sarah M.",
    text: "Lost 30 lbs in 4 months! The AI meal plans made it so easy to stay on track.",
    rating: 5,
    result: "-30 lbs",
  },
  {
    name: "James K.",
    text: "Finally found an app that understands my dietary restrictions. Game changer!",
    rating: 5,
    result: "-22 lbs",
  },
  {
    name: "Emily R.",
    text: "The dietitian support is incredible. I've never felt healthier or more energized.",
    rating: 5,
    result: "+15 lbs muscle",
  },
];

const TransformationReviews = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Transformations</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Real People, Real Results
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <img src={transformationImg} alt="Fitness transformation journey" className="rounded-3xl shadow-card w-full" />
          </div>
          <div className="space-y-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-500 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${200 + i * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-display font-bold text-foreground">{review.name}</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  <span className="gradient-citrus text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full">
                    {review.result}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationReviews;
