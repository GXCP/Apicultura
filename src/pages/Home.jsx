import Navbar from "../components/Navbar";
import AccessibilityBar from "../components/AccessibilityBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ModulesSection from "../components/ModulesSection";
import VehiclesSection from "../components/VehiclesSection";
import ProjectsSection from "../components/ProjectsSection";
import StatsSection from "../components/StatsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-graphite min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ModulesSection />
      <VehiclesSection />
      <ProjectsSection />
      <StatsSection />
      <ContactSection />
      <Footer />
      <AccessibilityBar />
    </div>
  );
}