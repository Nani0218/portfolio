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
    <section
      id="education"
      className="py-16 xl:py-24 px-4 xl:px-8 bg-gradient-to-br from-indigo-50 via-indigo-100 to-purple-50 animate-in fade-in duration-700"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-8 xl:space-y-12">

          {/* Section Title */}
          <div className="text-center space-y-2 animate-in slide-in-from-top-6 duration-700">
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground">
              Education
            </h2>

            <div className="w-16 xl:w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full animate-pulse" />

            <p className="text-base xl:text-lg text-muted-foreground mt-4">
              My academic background and qualifications
            </p>
          </div>

          {/* Education Timeline */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={edu.institution}
                className="border-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-purple-400 bg-gradient-to-br from-indigo-50 to-purple-50 animate-in slide-in-from-bottom-6"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-indigo-100 rounded-lg transition-all duration-500 group-hover:bg-indigo-200">
                      <GraduationCap className="h-6 w-6 text-indigo-600 transition-all duration-500 group-hover:scale-110" />
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
                    <p className="text-base xl:text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
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
