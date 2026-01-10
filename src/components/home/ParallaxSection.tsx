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
          Helping <span className="text-gradient">Thousands</span> Navigate Connectivity
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Our independent advisors provide unbiased guidance across the nation, helping people 
          understand and navigate internet, cable TV, and streaming service options.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold text-gradient mb-2">24/7</p>
            <p className="text-muted-foreground">Support Available</p>
          </div>
          <div className="hidden sm:block w-px bg-border" />
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold text-gradient-accent mb-2">50</p>
            <p className="text-muted-foreground">States Served</p>
          </div>
          <div className="hidden sm:block w-px bg-border" />
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold text-gradient mb-2">100%</p>
            <p className="text-muted-foreground">Independent</p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto bg-muted/50 border border-border rounded-lg p-4 mb-8">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Not an ISP.</strong> We provide independent third-party guidance services.
          </p>
        </div>
        
        <a href="tel:+18886221618" className="btn-hero-primary">
          Call for Guidance
        </a>
      </div>
    </section>
  );
};

export default ParallaxSection;
