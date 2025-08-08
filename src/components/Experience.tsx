import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer & SEO Analyst",
      company: "The Kerala Store UK",
      location: "Remote",
      period: "June 2024 – Present",
      type: "Full-time",
      description: [
        "Developed and deployed responsive, SEO-optimized WordPress websites using custom themes and Elementor.",
        "Conducted keyword research and implemented on-page SEO strategies using Google Search Console.",
        "Created and managed content for blogs and product pages aligned with SEO goals.",
        "Customized PHP-based themes to ensure mobile compatibility and smooth UX."
      ],
      technologies: ["WordPress", "PHP", "Elementor", "Google Search Console", "HTML", "CSS"]
    },
    {
      title: "Full Stack Intern",
      company: "Srishti Innovative",
      location: "Kerala, India",
      period: "Jan 2025 – July 2025",
      type: "Internship",
      description: [
        "Worked on full-stack projects using PHP, JavaScript, and MySQL.",
        "Assisted in developing responsive UIs and backend APIs.",
        "Collaborated with senior developers for bug fixing and testing.",
        "Gained practical experience in performance optimization."
      ],
      technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"]
    },
    {
      title: "Community Lead – IEDC",
      company: "Adnet Web Developer",
      location: "Kerala, India",
      period: "2023 – 2025",
      type: "Part-time",
      description: [
        "Built full-stack applications using React, PHP, and MySQL.",
        "Designed user-friendly interfaces to enhance UX.",
        "Implemented SEO strategies that increased client visibility.",
        "Boosted client sales by 70% via optimized web solutions."
      ],
      technologies: ["React", "PHP", "CodeIgniter", "MySQL", "SEO"]
    }
  ];

  const achievements = [
    {
      title: "13th Rank - MCA State Rank List",
      issuer: "University of Kerala",
      date: "2025",
      icon: Award
    },
    {
      title: "10th Rank - MCA 2nd Semester",
      issuer: "University of Kerala",
      date: "2025",
      icon: Award
    },
    {
      title: "9th Rank - BCA 1st Semester",
      issuer: "University of Kerala",
      date: "2020",
      icon: Award
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A track record of delivering responsive websites, SEO success, and full-stack development solutions across academic and professional environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Building className="w-6 h-6 text-primary" />
              Professional Experience
            </h3>

            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <Badge variant="outline" className="self-start sm:self-center">
                      {exp.type}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Sidebar */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Key Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 animate-slide-up group"
                  style={{ animationDelay: `${(index + 4) * 150}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <achievement.icon className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{achievement.issuer}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Education */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4">
                  <h4 className="font-semibold">Master of Computer Applications (MCA)</h4>
                  <p className="text-sm text-muted-foreground">University of Kerala</p>
                  <p className="text-xs text-muted-foreground">2023 – 2025</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 mt-4">
                <CardContent className="p-4">
                  <h4 className="font-semibold">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-sm text-muted-foreground">University of Kerala</p>
                  <p className="text-xs text-muted-foreground">2020 – 2023</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
