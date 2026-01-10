import { Link } from "react-router-dom";
import { MapPin, CheckCircle, ArrowRight, Phone } from "lucide-react";
import coverageMap from "@/assets/coverage-map.jpg";

const topics = [
  "Internet speed guidance", "Cable TV package help", "Provider comparison", "Setup assistance", "Troubleshooting tips",
  "Bundle analysis", "Equipment advice", "Cost optimization", "Service navigation", "Contract guidance",
  "Alternative solutions", "Connection tips"
];

const CoverageSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${coverageMap})` }}
      />
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Nationwide Guidance
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Get Help
              <span className="text-gradient"> Anywhere in the US</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Our independent advisors provide guidance on connectivity services across all 50 states, helping you navigate provider options wherever you are.
            </p>

            {/* Important Notice */}
            <div className="bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Not an ISP.</strong> We provide independent consultation services. We do not provide internet, cable, or streaming services ourselves.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+18886221618" className="btn-hero-primary flex items-center justify-center gap-2 whitespace-nowrap">
                <Phone className="w-5 h-5" />
                Call for Guidance
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-bold text-gradient">50</p>
                <p className="text-sm text-muted-foreground">States Served</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gradient\">24/7</p>
                <p className="text-sm text-muted-foreground\">Availability</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gradient-accent\">100%</p>
                <p className="text-sm text-muted-foreground\">Independent</p>
              </div>
            </div>
          </div>

          {/* Right - Topics Grid */}
          <div className="bg-card/50 backdrop-blur-md rounded-3xl border border-border p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Guidance Topics We Cover
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground text-sm">{topic}</span>
                </div>
              ))}
            </div>

            <a 
              href="tel:+18886221618" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
            >
              Call for Expert Guidance
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
