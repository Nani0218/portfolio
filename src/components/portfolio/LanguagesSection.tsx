import { Card, CardContent } from '@/components/ui/card';
import { Languages } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const languages = [
  {
    name: 'Telugu',
    level: 'Fluent',
    proficiency: 100
  },
  {
    name: 'English',
    level: 'Intermediate',
    proficiency: 70
  }
];

export default function LanguagesSection() {
  return (
    <section className="py-16 xl:py-24 px-4 xl:px-8 bg-accent/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Title */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground">
              Languages
            </h2>
            <div className="w-16 xl:w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Languages Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <Card
                key={language.name}
                className="border-2 hover:border-primary transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Languages className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg xl:text-xl font-semibold text-foreground">
                          {language.name}
                        </h3>
                        <span className="text-sm font-medium text-muted-foreground">
                          {language.level}
                        </span>
                      </div>
                      <Progress value={language.proficiency} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
