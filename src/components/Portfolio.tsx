import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "The Kerala Store UK",
      description: "E-commerce platform for authentic Kerala products with SEO optimization.",
      link: "https://thekeralastore.co.uk/",
      category: "E-Commerce",
      icon: Globe
    },
    {
      title: "Trades Jack",
      description: "Professional services platform with modern design and responsive layout.",
      link: "https://tradesjack.com/",
      category: "Services",
      icon: Globe
    },
    {
      title: "Beauty Fit Fashion",
      description: "Fashion and beauty e-commerce site with elegant UI/UX design.",
      link: "https://beautyfitfashion.co.uk/",
      category: "Fashion",
      icon: Globe
    },
    {
      title: "Xola Heritage Hotel",
      description: "Hotel booking website with modern design and booking functionality.",
      link: "https://xolaheritagehotel.com/",
      category: "Hotel Booking",
      icon: Globe
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Portfolio Websites
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of real-world websites showcasing my ability to build
            production-ready, visually appealing, and performance-optimized solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((site, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <site.icon className="w-5 h-5 text-primary" />
                  {site.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {site.description}
                </p>
              </CardHeader>

              <CardContent className="pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{site.category}</span>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-gradient-primary group"
                    onClick={() => window.open(site.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                    Visit Site
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
