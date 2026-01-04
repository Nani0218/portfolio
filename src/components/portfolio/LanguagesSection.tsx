import { Card, CardContent } from '@/components/ui/card'
import { Languages } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

const languages = [
  { name: 'Telugu', level: 'Fluent', proficiency: 100 },
  { name: 'English', level: 'Intermediate', proficiency: 70 }
]

export default function LanguagesSection() {
  return (
    <section id="languages" className="py-16 xl:py-24 px-4 xl:px-8 bg-gradient-to-r from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Title */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl xl:text-4xl font-bold text-foreground animate-fade-in">
              Languages
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {languages.map((lang, i) => (
              <Card
                key={lang.name}
                className="border-2 hover:border-primary transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-primary/10 rounded-xl animate-pulse">
                      <Languages className="w-6 h-6 text-primary" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between">
                        <h3 className="text-xl font-semibold">{lang.name}</h3>
                        <span className="text-sm text-muted-foreground">{lang.level}</span>
                      </div>

                      <Progress value={lang.proficiency} className="h-2" />

                      <p className="text-sm font-medium text-primary">
                        {lang.proficiency}% Proficiency
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
