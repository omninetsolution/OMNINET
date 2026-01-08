import { Phone } from "lucide-react";
import ctaBanner from "@/assets/cta-banner.jpg";

const CTASection = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaBanner})` }}
    >
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
          Need <span className="text-gradient">Assistance</span>?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10">
          Our independent assistance team is ready to help you navigate your connectivity options. 
          Call us now for personalized guidance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+18005550199" className="btn-hero-primary flex items-center justify-center gap-2 text-sm sm:text-base">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Call Now: 1-800-555-0199</span>
            <span className="sm:hidden">Call: 1-800-555-0199</span>
          </a>
        </div>
        
        <p className="mt-8 text-sm text-muted-foreground">
          *We are an independent third-party assistance platform. Service fees apply.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
