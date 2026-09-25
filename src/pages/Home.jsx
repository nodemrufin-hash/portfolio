import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection} from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollToTop }   from "../components/ScrollToTop";
import { Footer } from "../components/Footer";


// import{StarBackground} from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effect*/}
      <StarBackground />
      {/*Navbar*/}
      <Navbar />
      {/* main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ScrollToTop />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* footer */}
      <Footer  />
    </div>
  );
};




