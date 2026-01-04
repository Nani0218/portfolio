import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems.map(s => s.href.substring(1));

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (!element) return;

    const offset = 90;
    const position =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: position, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex items-center justify-between h-16 xl:h-20">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="text-xl xl:text-2xl font-extrabold tracking-wide text-primary hover:scale-110 transition-transform duration-300"
          >
            NVK
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-10">
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.name}

                {/* Underline animation */}
                <span
                  className={`absolute left-0 right-0 -bottom-2 mx-auto h-0.5 rounded-full bg-primary transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'w-full opacity-100'
                      : 'w-0 opacity-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-64 animate-slide-left bg-background/95 backdrop-blur"
            >
              <div className="flex flex-col gap-4 mt-12">
                {navItems.map(item => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-lg text-left px-2 py-2 rounded-md transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary bg-primary/10 font-semibold'
                        : 'text-foreground/70 hover:bg-accent hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
