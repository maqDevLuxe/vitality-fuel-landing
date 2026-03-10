import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, ArrowRight } from "lucide-react";
import blogFood from "@/assets/blog-food.jpg";

const posts = [
  { title: "10 Superfoods You Should Eat Every Day", category: "Nutrition", readTime: "5 min" },
  { title: "How to Meal Prep Like a Pro on Sunday", category: "Meal Prep", readTime: "7 min" },
  { title: "Understanding Macros: The Complete Guide", category: "Education", readTime: "10 min" },
];

const NutritionBlog = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Nutrition Blog</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Latest Health Insights
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className={`group bg-card rounded-3xl border border-border overflow-hidden hover:shadow-card transition-all duration-500 cursor-pointer ${
                isVisible ? "animate-pop-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={blogFood}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionBlog;
