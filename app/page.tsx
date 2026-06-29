import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CeoSection from "@/components/CeoSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CeoSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
}
