import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Wrench, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Technologies',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    color: 'text-primary'
  },
  {
    title: 'Styling Frameworks',
    icon: Palette,
    skills: ['Tailwind CSS', 'Bootstrap'],
    color: 'text-secondary'
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    skills: ['VS Code', 'API Integration'],
    color: 'text-chart-3'
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub'],
    color: 'text-chart-4'
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 xl:py-24 px-4 xl:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-8 xl:space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground">
              Technical Skills
            </h2>
            <div className="w-16 xl:w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-base xl:text-lg text-muted-foreground mt-4">
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
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`${category.color} p-3 bg-accent rounded-lg`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-lg xl:text-xl font-semibold text-foreground">
                          {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-sm px-3 py-1"
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

          {/* All Skills List */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 xl:p-8">
              <h3 className="text-lg xl:text-xl font-semibold text-foreground mb-4 text-center">
                Complete Skill Set
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillCategories.flatMap(cat => cat.skills).map((skill) => (
                  <Badge
                    key={skill}
                    className="text-sm xl:text-base px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
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
