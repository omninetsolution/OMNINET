import lifestyleFamily from "@/assets/lifestyle-family.jpg";
import { CheckCircle } from "lucide-react";

const features = [
  "Understand speed requirements for 4K streaming",
  "Learn about bandwidth needs for remote work",
  "Get guidance on gaming internet requirements",
  "Discover smart home connectivity tips",
  "Navigate whole-home coverage solutions"
];

const LifestyleSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={lifestyleFamily}
                alt="Family enjoying entertainment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 stat-card glow-primary">
              <p className="text-3xl font-bold text-gradient">4K</p>
              <p className="text-sm text-muted-foreground">Streaming Quality</p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Understanding Your <span className="text-gradient-accent">Connectivity Needs</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get expert guidance on what internet speeds and service options make sense for your lifestyle. 
              We help you understand the technology so you can make informed decisions.
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-muted/50 border border-border rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Not an ISP.</strong> We provide educational guidance, not internet service.
              </p>
            </div>
            
            <a href="tel:+18886221618" className="btn-hero-primary inline-block">
              Call for Expert Guidance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
