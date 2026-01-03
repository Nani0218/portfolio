import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
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

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 xl:px-8 py-8 xl:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              Naga Veerendra Kumar Kambala
            </h3>
            <p className="text-sm text-muted-foreground">
              Frontend Developer passionate about creating beautiful and functional web experiences
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/kambala-naga-veerendra-kumar-35921134a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="mailto:kambalanaga18@gmail.com"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
              <a
                href="tel:+916281825284"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Jaggayyapet, Andhra Pradesh</p>
              <p>India</p>
              <a
                href="mailto:kambalanaga18@gmail.com"
                className="block hover:text-primary transition-colors"
              >
                kambalanaga18@gmail.com
              </a>
              <a
                href="tel:+916281825284"
                className="block hover:text-primary transition-colors"
              >
                +91 6281825284
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Naga Veerendra Kumar Kambala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
