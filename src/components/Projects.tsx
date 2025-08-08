import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Book My Turf",
      description:
        "A web-based turf booking system that allows users to reserve sports facilities in real-time with an admin panel to manage bookings and availability.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTbolx7PYdasP9fLYzVJlL4U5VntQzRt7HA&s",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: ["Real-time availability", "User booking system", "Admin panel", "Responsive UI"],
      category: "Web App",
      icon: Globe,
      github: "#",
      demo: "#"
    },
    {
      title: "AGRO-WIZ – Leaf Disease Detection",
      description:
        "A machine learning-based solution using CNN to detect plant leaf diseases through image classification, aimed at helping farmers improve crop health.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rFg_HzGcKs6HQgaQj_e_TF74mGIv6T50Bg&s",
      technologies: ["Python", "CNN", "MySQL", "HTML", "CSS", "JavaScript"],
      features: ["Leaf disease detection", "Image classification", "Machine learning", "Farmer dashboard"],
      category: "AI/ML",
      icon: Database,
      github: "#",
      demo: "#"
    },
    {
      title: "Blood Donor Availability System",
      description:
        "A full-stack blood donation platform that allows users to search for donors based on location and blood group, featuring real-time updates, email alerts, and ML integration.",
      image: "https://media.istockphoto.com/id/1415405974/photo/blood-donor-at-donation-with-bouncy-ball-holding-in-hand.jpg?s=612x612&w=0&k=20&c=j0nkmkJxIP6U6TsI3yTq8iuc0Ufhq6xoW4FSMlKaG6A=",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Python (ML)", "Node Mailer"],
      features: ["Donor search", "Real-time alerts", "Admin dashboard", "Machine Learning"],
      category: "Full Stack",
      icon: Code,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of real-world projects built using full-stack technologies and machine learning, solving practical problems across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <project.icon className="w-6 h-6 text-primary bg-background/90 backdrop-blur-sm rounded-full p-1" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="group-hover:text-primary transition-colors">{project.title}</span>
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {/* <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn hover:bg-primary/10 hover:border-primary/30"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-glow group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Demo
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in delay-500">
         <a
  href="https://github.com/devu-krishna13"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="lg"
    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
  >
    <Github className="w-5 h-5 mr-2" />
    View All Projects on GitHub
  </Button>
</a>

        </div>
      </div>
    </section>
  );
};

export default Projects;
