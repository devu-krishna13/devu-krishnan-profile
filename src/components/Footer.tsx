import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-secondary border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand & Quote */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
  Devu Krishnan P
</h3>

            <p className="text-muted-foreground text-sm">
  "Crafting seamless digital experiences with clean code and creativity."
</p>

          </div>

          {/* Social Links */}
<div className="flex justify-center space-x-4">
  {/* GitHub */}
  <a 
    href="https://github.com/devu-krishna13" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group"
  >
    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
  </a>

  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/devu-krishnan-p-/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group"
  >
    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
  </a>

  {/* Email */}
  <a 
    href="mailto:devukrishnanp@gmail.com" 
    className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group"
  >
    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
  </a>
</div>


          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
  © {currentYear} Devu Krishnan P. Made with 
  <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
  and lots of coffee.
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
