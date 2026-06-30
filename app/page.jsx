import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ValueProofSection } from "@/components/sections/ValueProofSection";
import { WhatsAppCTASection } from "@/components/sections/WhatsAppCTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ConceptSection />
        <ProcessSection />
        <ValueProofSection />
        <WhatsAppCTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
