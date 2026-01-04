import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Wrench, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Core Technologies",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
    color: "text-primary",
  },
  {
    title: "Styling Frameworks",
    icon: Palette,
    skills: ["Tailwind CSS", "Bootstrap"],
    color: "text-secondary",
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: ["VS Code", "API Integration"],
    color: "text-chart-3",
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
    color: "text-chart-4",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 xl:py-24 px-4 xl:px-8 bg-gradient-to-b from-background to-accent/20"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Section Title */}
          <div className="text-center space-y-3 animate-fadeIn">
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground">
              Technical Skills
            </h2>

            <div className="relative w-20 mx-auto">
              <div className="h-1 bg-primary rounded-full animate-width" />
            </div>

            <p className="text-base xl:text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <Card
                  key={category.title}
                  className="border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-slideUp"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`${category.color} bg-accent p-3 rounded-xl`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1 space-y-3">
                        <h3 className="text-lg xl:text-xl font-semibold">
                          {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-sm px-3 py-1 hover:scale-110 transition transform duration-300 cursor-default"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* All Skills */}
          <Card className="bg-primary/5 border-primary/20 animate-fadeIn">
            <CardContent className="p-8">
              <h3 className="text-lg xl:text-xl font-semibold text-center mb-6">
                Complete Skill Set
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {skillCategories
                  .flatMap((cat) => cat.skills)
                  .map((skill) => (
                    <Badge
                      key={skill}
                      className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
