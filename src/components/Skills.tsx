import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Database, Cloud, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 88 },
        { name: "Bootstrap/Elementor", level: 92 }
      ]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "PHP (Custom & CodeIgniter)", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "MySQL / MongoDB", level: 88 }
      ]
    },
    {
      icon: Cloud,
      title: "Tools & Platforms",
      skills: [
        { name: "WordPress", level: 95 },
        { name: "Git / GitHub", level: 90 },
        { name: "Google Search Console", level: 85 },
        { name: "VS Code / Eclipse / Sublime", level: 80 }
      ]
    },
    {
      icon: Palette,
      title: "UI/UX & SEO",
      skills: [
        { name: "Elementor & Custom Themes", level: 90 },
        { name: "On-Page SEO", level: 88 },
        { name: "Responsive Design", level: 92 },
        { name: "Performance Optimization", level: 85 }
      ]
    },
    {
      icon: Wrench,
      title: "Tech Stacks & Frameworks",
      skills: [
        { name: "MERN Stack", level: 85 },
        { name: "Laravel (Learning)", level: 70 },
        { name: "Python ML (Basic)", level: 65 },
        { name: "CodeIgniter", level: 80 }
      ]
    },
    {
      icon: Users,
      title: "Professional Skills",
      skills: [
        { name: "Client Collaboration", level: 90 },
        { name: "Content Management", level: 88 },
        { name: "Problem Solving", level: 92 },
        { name: "Team Communication", level: 89 }
      ]
    }
  ];

  const technologies = [
    "React.js", "PHP", "JavaScript", "Node.js", "MongoDB", "MySQL", "WordPress",
    "Elementor", "Bootstrap", "CodeIgniter", "Google Search Console", "VS Code",
    "Python", "Laravel", "Git", "SEO", "HTML", "CSS"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Practical knowledge and hands-on experience gained from full-stack development, SEO analysis, and building user-friendly, high-performance web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <category.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="animate-fade-in delay-500">
          <h3 className="text-2xl font-semibold text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
