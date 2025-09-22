// import { Navigation } from "@/components/layout/navbar";
import { Navigation } from "@/components/layout/nav2";
import { AboutSection } from "@/features/home/pages/about-section";
import { ContactSection } from "@/features/home/pages/contact-section";
import { HeroSection } from "@/features/home/pages/hero-section";
import { ProjectsSection } from "@/features/home/pages/project-section";
import { Footer } from "react-day-picker";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
