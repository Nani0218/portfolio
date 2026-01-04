import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, BookOpen, Target } from 'lucide-react';

const traits = [
  {
    title: 'Self-Motivator',
    description:
      'Driven by passion and commitment to continuous improvement and excellence in every project.',
    icon: Target,
    color: 'from-primary/10 to-primary',
  },
  {
    title: 'Continuous Learner',
    description:
      'Always exploring new technologies and best practices to stay current in the evolving tech landscape.',
    icon: BookOpen,
    color: 'from-secondary/70 to-secondary',
  },
  {
    title: 'Problem Solving & Attention to Detail',
    description:
      'Analytical mindset with keen eye for detail, ensuring high-quality, bug-free solutions.',
    icon: Lightbulb,
    color: 'from-emerald-400/70 to-emerald-500',
  },
];

export default function PersonalitySection() {
  return (
    <section className="py-16 xl:py-24 px-4 xl:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-8 xl:space-y-12">

          {/* Title */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground">
              Personality Traits
            </h2>
            <div className="w-16 xl:w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-base xl:text-lg text-muted-foreground mt-4">
              What makes me unique as a developer
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {traits.map((trait, index) => {
              const Icon = trait.icon;
              return (
                <Card
                  key={trait.title}
                  className="group relative border-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-background/80 backdrop-blur"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Gradient glow border */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl bg-gradient-to-br ${trait.color} blur-lg`}
                  />

                  <CardContent className="relative p-6 space-y-4 text-center z-10">

                    {/* Icon */}
                    <div className="mx-auto p-4 bg-accent rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:animate-pulse" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg xl:text-xl font-semibold text-foreground">
                      {trait.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">
                      {trait.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
