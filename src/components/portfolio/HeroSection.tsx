import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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
    alert('Resume download functionality - Please add your resume PDF to the public folder');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 xl:px-8 pt-20 overflow-hidden"
    >
      {/* Soft gradient glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10"
      />

      {/* Floating blur circles */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 blur-3xl rounded-full"
      />

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 xl:space-y-8">

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base xl:text-lg text-muted-foreground font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl xl:text-6xl font-bold text-foreground leading-tight"
          >
            NAGA VEERENDRA KUMAR
            <br />
            <motion.span
              initial={{ backgroundSize: "0% 100%" }}
              animate={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-primary bg-to-r from-primary/40 to-secondary/40 bg-[length:0%_100%] bg-no-repeat"
            >
              KAMBALA
            </motion.span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl xl:text-3xl font-semibold text-secondary"
          >
            Frontend Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-base xl:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating responsive, user-friendly web applications
            with modern technologies and best practices
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col xl:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="w-full xl:w-auto gap-2 shadow-md hover:shadow-primary/30 transition-all"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="w-full xl:w-auto gap-2 border-primary/30 hover:bg-primary/10 transition-all"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
