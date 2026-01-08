import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ServicesSection from "@/components/home/ServicesSection";
import ParallaxSection from "@/components/home/ParallaxSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PlansSection from "@/components/home/PlansSection";
import CoverageSection from "@/components/home/CoverageSection";
import LifestyleSection from "@/components/home/LifestyleSection";
import GallerySection from "@/components/home/GallerySection";
import SupportSection from "@/components/home/SupportSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <ParallaxSection />
        <UseCasesSection />
        <HowItWorksSection />
        <PlansSection />
        <CoverageSection />
        <LifestyleSection />
        <GallerySection />
        <SupportSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
