import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Elbert',
    website: 'https://elberttech.com/',
    role: 'INTERN',
    duration: 'FEB 2025 - PRESENT',
    current: true,
    responsibilities: [
      'Developed and maintained responsive user interfaces using HTML5, CSS3, and Bootstrap',
      'Collaborated with UI/UX designers to translate design mockups into interactive web pages',
      'Implemented dynamic content using JavaScript and React (JSX, props, state management)',
      'Assisted in debugging, optimizing page performance, and ensuring web accessibility standards',
      'Participated in code reviews and agile sprint meetings',
      'Gained exposure to Git version control and deployment practices'
    ]
  },
  {
    company: 'Anurag-ERP',
    role: 'Front-End Developer',
    duration: 'Previous Experience',
    current: false,
    responsibilities: [
      'Oversaw content creation for various platforms',
      'Collaborated with internal teams and external agencies for brand consistency',
      'Developed and maintained frontend components for ERP system',
      'Ensured responsive design across multiple devices'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 xl:py-24 px-4 xl:px-8 bg-accent/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-8 xl:space-y-12">

          {/* Title Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground">
              Work Experience
            </h2>

            {/* Animated Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-primary mx-auto rounded-full"
            />

            <p className="text-base xl:text-lg text-muted-foreground mt-4">
              My professional journey and achievements
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white/80 backdrop-blur-md">

                  <CardHeader>
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">

                          <CardTitle className="text-xl xl:text-2xl text-foreground">
                            {exp.company}
                          </CardTitle>

                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-secondary transition-colors"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}

                          {exp.current && (
                            <Badge className="bg-primary text-primary-foreground animate-pulse">
                              Current
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-lg font-semibold text-secondary">
                          <Briefcase className="h-5 w-5" />
                          {exp.role}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-5 w-5" />
                        <span className="text-sm xl:text-base font-medium">{exp.duration}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((r, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-foreground/90"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-sm xl:text-base">{r}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>

                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
