import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    institution: 'VISWABHARATHI DEGREE COLLEGE',
    degree: 'Bachelor of Science (B.Sc)',
    duration: '2021 - 2024',
    type: 'Undergraduate'
  },
  {
    institution: 'S.A.V N & V.J.R JUNIOR COLLEGE',
    degree: 'Intermediate (MPC)',
    duration: '2019 - 2021',
    type: 'Higher Secondary'
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16 xl:py-24 px-4 xl:px-8">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-8 xl:space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground">
              Education
            </h2>
            <div className="w-16 xl:w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-base xl:text-lg text-muted-foreground mt-4">
              My academic background and qualifications
            </p>
          </div>

          {/* Education Timeline */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={edu.institution}
                className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <CardTitle className="text-lg xl:text-xl text-foreground leading-tight">
                        {edu.institution}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <p className="text-base xl:text-lg font-semibold text-primary">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.type}
                    </p>
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
