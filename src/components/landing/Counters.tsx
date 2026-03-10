import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const counters = [
  { end: 12, suffix: "M+", label: "Meals Planned" },
  { end: 850, suffix: "K+", label: "Pounds Lost" },
  { end: 2, suffix: "M+", label: "Happy Users" },
  { end: 98, suffix: "%", label: "Satisfaction Rate" },
];

const Counters = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 gradient-hero" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {counters.map((c) => (
            <CounterItem key={c.label} {...c} started={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

function CounterItem({ end, suffix, label, started }: { end: number; suffix: string; label: string; started: boolean }) {
  const count = useCountUp(end, 2000, started);
  return (
    <div className="text-center">
      <p className="font-display text-5xl font-bold text-primary-foreground">
        {count}
        {suffix}
      </p>
      <p className="text-primary-foreground/70 mt-2 font-medium">{label}</p>
    </div>
  );
}

export default Counters;
