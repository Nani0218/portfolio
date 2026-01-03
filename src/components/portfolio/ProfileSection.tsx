import { Card, CardContent } from '@/components/ui/card';

export default function ProfileSection() {
  return (
    <section id="about" className="py-16 xl:py-24 px-4 xl:px-8 bg-accent/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Title */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground">
              About Me
            </h2>
            <div className="w-16 xl:w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Profile Summary */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 xl:p-8">
              <p className="text-base xl:text-lg text-foreground/90 leading-relaxed">
                I am a <span className="font-semibold text-primary">self-motivated</span> and{' '}
                <span className="font-semibold text-primary">enthusiastic Frontend Developer</span>{' '}
                with a strong foundation in building responsive and interactive web applications.
                I specialize in <span className="font-semibold">HTML5, CSS3, JavaScript, and React.js</span>,
                with expertise in modern frameworks like{' '}
                <span className="font-semibold">Tailwind CSS and Bootstrap</span>.
              </p>
              <p className="text-base xl:text-lg text-foreground/90 leading-relaxed mt-4">
                I am passionate about creating seamless user experiences and continuously learning
                new technologies to stay ahead in the ever-evolving web development landscape.
                My attention to detail and problem-solving skills enable me to deliver high-quality
                solutions that meet both user needs and business objectives.
              </p>
              <p className="text-base xl:text-lg text-foreground/90 leading-relaxed mt-4">
                I thrive in collaborative environments and enjoy working with cross-functional teams
                to bring innovative ideas to life. Whether it's translating design mockups into
                pixel-perfect interfaces or optimizing application performance, I am committed to
                excellence in every project I undertake.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
