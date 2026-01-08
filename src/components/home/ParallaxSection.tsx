import { Link } from "react-router-dom";
import parallaxCity from "@/assets/parallax-city.jpg";

const ParallaxSection = () => {
  return (
    <section 
      className="parallax-section min-h-[600px] flex items-center justify-center"
      style={{ backgroundImage: `url(${parallaxCity})` }}
    >
      <div className="parallax-overlay" />
      
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Connecting <span className="text-gradient">Millions</span> of Homes
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Our expansive network reaches coast to coast, delivering reliable high-speed 
          connectivity to communities everywhere. Join the network that never stops growing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold text-gradient mb-2">50M+</p>
            <p className="text-muted-foreground">Customers Served</p>
          </div>
          <div className="hidden sm:block w-px bg-border" />
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold text-gradient-accent mb-2">41</p>
            <p className="text-muted-foreground">States Covered</p>
          </div>
          <div className="hidden sm:block w-px bg-border" />
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold text-gradient mb-2">99.9%</p>
            <p className="text-muted-foreground">Network Uptime</p>
          </div>
        </div>
        
        <Link to="/contact" className="btn-hero-primary">
          Check Availability in Your Area
        </Link>
      </div>
    </section>
  );
};

export default ParallaxSection;
