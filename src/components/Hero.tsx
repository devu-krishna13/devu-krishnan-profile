import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-glow-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            DEVU KRISHNAN P
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-foreground/90 mb-4 font-light">
            Full Stack Developer | SEO Analyst
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer skilled in WordPress, React, and SEO tools, with a focus on building fast, responsive, and scalable web solutions using MERN stack and PHP
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            onClick={() => window.location.href = "mailto:devukrishnanp@gmail.com"}
          >
            <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Get In Touch
          </Button>
         <Button 
  variant="outline" 
  size="lg" 
  className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
  onClick={() => window.open("https://drive.google.com/uc?export=download&id=1w6u2kaD52tVY3S923xABHD6QarzC3CVE", "_blank")}
>
  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
  Download CV
</Button>

        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-slide-up delay-200">
          <a 
            href="https://github.com/devu-krishna13" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://www.linkedin.com/in/devu-krishnan-p-/" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          {/* <a 
            href="https://thekeralastore.co.uk/" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group"
          >
            <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
