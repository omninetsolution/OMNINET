import { Link } from "react-router-dom";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import coverageMap from "@/assets/coverage-map.jpg";

const cities = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
  "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
  "Austin", "Jacksonville"
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
              Expanding Fast
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Check If We're in
              <span className="text-gradient"> Your Area</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Our fiber-optic network is rapidly expanding to bring blazing-fast internet to more communities every month.
            </p>

            {/* Address Checker */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter your ZIP code"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button className="btn-hero-primary whitespace-nowrap">
                Check Availability
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-bold text-gradient">50+</p>
                <p className="text-sm text-muted-foreground">Cities Covered</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gradient">10M+</p>
                <p className="text-sm text-muted-foreground">Homes Passed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gradient-accent">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right - Cities Grid */}
          <div className="bg-card/50 backdrop-blur-md rounded-3xl border border-border p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Available Cities
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{city}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
            >
              View All Coverage Areas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
