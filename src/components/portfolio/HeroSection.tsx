import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    // Create a simple resume download (in production, this would link to an actual PDF)
    alert('Resume download functionality - Please add your resume PDF to the public folder');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 xl:px-8 pt-16"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6 xl:space-y-8 animate-fade-in">
          {/* Greeting */}
          <p className="text-base xl:text-lg text-muted-foreground font-medium">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-3xl xl:text-6xl font-bold text-foreground leading-tight">
            NAGA VEERENDRA KUMAR
            <br />
            <span className="text-primary">KAMBALA</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl xl:text-3xl font-semibold text-secondary">
            Frontend Developer
          </h2>

          {/* Tagline */}
          <p className="text-base xl:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating responsive, user-friendly web applications
            with modern technologies and best practices
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full xl:w-auto gap-2"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              className="w-full xl:w-auto gap-2"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
