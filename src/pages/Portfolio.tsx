import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import ProfileSection from '@/components/portfolio/ProfileSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import EducationSection from '@/components/portfolio/EducationSection';
import LanguagesSection from '@/components/portfolio/LanguagesSection';
import PersonalitySection from '@/components/portfolio/PersonalitySection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProfileSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <LanguagesSection />
        <PersonalitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
