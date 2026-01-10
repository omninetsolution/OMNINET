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
          Talk to a <span className="text-gradient">Third-Party Internet Advisor</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10">
          Get independent service guidance from advisors who are not affiliated with any provider. 
          We help you understand your options and navigate connectivity decisions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+18886221618" className="btn-hero-primary flex items-center justify-center gap-2 text-sm sm:text-base">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Call for Independent Service Guidance</span>
            <span className="sm:hidden">Call: (888) 622-1618</span>
          </a>
        </div>
        
        <div className="mt-8 max-w-xl mx-auto bg-muted/50 border border-border rounded-lg p-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Not an ISP. No brand affiliation.</strong><br />
            We are an independent third-party service. We do not sell, install, or represent any internet, cable, or streaming provider. 
            Service fees apply for our guidance and consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
