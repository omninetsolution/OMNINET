import { Link } from "react-router-dom";
import lifestyleFamily from "@/assets/lifestyle-family.jpg";
import { CheckCircle } from "lucide-react";

const features = [
  "Stream 4K content on multiple devices simultaneously",
  "Crystal-clear video calls for remote work",
  "Lag-free gaming for the whole family",
  "Smart home devices connected seamlessly",
  "Reliable connection in every room"
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
              Entertainment <span className="text-gradient-accent">Redefined</span> for Modern Living
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your home into an entertainment hub. With our high-speed internet 
              and premium cable TV, experience movies, shows, and games like never before.
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/bundles" className="btn-hero-primary inline-block">
              Explore Bundle Deals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
