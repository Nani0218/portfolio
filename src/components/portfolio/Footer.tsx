import { Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <footer className="bg-card/70 backdrop-blur-xl border-t border-border relative overflow-hidden">

      {/* Soft animated gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent pointer-events-none"
      />

      <div className="container mx-auto px-4 xl:px-8 py-10 xl:py-14 relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 xl:grid-cols-3 gap-8"
        >

          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              Naga Veerendra Kumar Kambala
            </h3>

            <p className="text-sm text-muted-foreground">
              Frontend Developer passionate about creating beautiful and functional web experiences
            </p>

            <div className="flex items-center gap-4">

              {/* Icon Buttons Animated */}
              {[
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/kambala-naga-veerendra-kumar-35921134a",
                  label: "LinkedIn Profile"
                },
                {
                  Icon: Mail,
                  href: "mailto:kambalanaga18@gmail.com",
                  label: "Email"
                },
                {
                  Icon: Phone,
                  href: "tel:+916281825284",
                  label: "Phone"
                }
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-primary/10 rounded-xl border border-primary/20 hover:bg-primary/20 hover:shadow-lg transition-all"
                >
                  <Icon className="h-5 w-5 text-primary" />
                </motion.a>
              ))}

            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>

            <div className="grid grid-cols-2 gap-2">

              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
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

        </motion.div>

        {/* Divider + Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-10 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Naga Veerendra Kumar Kambala. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
