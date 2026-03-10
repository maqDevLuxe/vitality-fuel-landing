import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Apple, Leaf, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const DownloadCTAFooter = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      {/* CTA */}
      <section className="py-24 bg-accent/30" ref={ref}>
        <div className="container mx-auto px-6">
          <div
            className={`gradient-hero rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden ${
              isVisible ? "animate-pop-up" : "opacity-0"
            }`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Start Your Health Journey Today
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
                Download NutriLife for free and get your personalized nutrition plan in under 2 minutes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="flex items-center gap-3 bg-card text-foreground px-7 py-4 rounded-2xl font-semibold hover:shadow-card transition-shadow">
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <p className="text-[10px] text-muted-foreground leading-tight">Download on the</p>
                    <p className="text-sm font-bold leading-tight">App Store</p>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-card text-foreground px-7 py-4 rounded-2xl font-semibold hover:shadow-card transition-shadow">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 1.469L16.8 7.802l-2.302 2.302L5.864 1.469z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-muted-foreground leading-tight">Get it on</p>
                    <p className="text-sm font-bold leading-tight">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="gradient-hero rounded-xl p-2">
                  <Leaf className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-display text-xl font-bold text-primary-foreground">NutriLife</span>
              </div>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                Your AI-powered partner for personalized nutrition and a healthier life.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Recipes", "Blog"] },
              { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
              { title: "Support", links: ["Help Center", "Privacy", "Terms", "API"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-bold text-primary-foreground mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-primary-foreground/50 text-sm hover:text-primary-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/40 text-sm">© 2026 NutriLife. All rights reserved.</p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DownloadCTAFooter;
