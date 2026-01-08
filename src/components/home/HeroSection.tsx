import { Link } from "react-router-dom";
import { Zap, Shield, Clock, Play, ArrowRight, Wifi, Tv, CheckCircle, Phone } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";
import heroFiber from "@/assets/hero-fiber.jpg";
import heroEntertainment from "@/assets/hero-entertainment.jpg";
import heroVideo from "@/assets/video1.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Dark overlay for video */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(188_100%_50%_/_0.15)_0%,_transparent_50%)] z-[2]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(32_100%_55%_/_0.1)_0%,_transparent_50%)] z-[2]" />

      <div className="relative container mx-auto px-4 pt-24 pb-12 z-[3]">
        {/* Main Hero Grid - Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[85vh]">
          
          {/* Left Content Column */}
          <div className="lg:col-span-5 space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-primary/30 bg-primary/10 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-primary">Independent Service Assistance Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Get Expert
              <span className="block text-gradient">Connectivity</span>
              <span className="block">Assistance</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-md animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              We help you navigate internet, cable TV, and streaming options. 
              Get personalized guidance to find the right connectivity solutions for your needs.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
                <Wifi className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Plan Guidance</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
                <Tv className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Setup Support</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Expert Help</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a href="tel:+18005550199" className="btn-hero-primary group flex items-center justify-center gap-2 text-sm sm:text-base px-4 sm:px-6">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Call Now: 1-800-555-0199</span>
                <span className="sm:hidden">Call: 1-800-555-0199</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Independent Disclosure */}
            <div className="bg-muted/50 border border-border rounded-lg p-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important:</strong> OMNINET SOLUTIONS is an independent third-party assistance service launched in 2026. 
                We are not affiliated with any internet, cable, or streaming provider. We charge a separate service fee for our guidance and support services.
              </p>
            </div>
          </div>

          {/* Right Visual Column - Creative Image Collage */}
          <div className="lg:col-span-7 relative hidden lg:block">
            <div className="relative h-[500px] lg:h-[650px]">
              
              {/* Main Hero Image - Large */}
              <div className="absolute top-0 right-0 w-[85%] h-[70%] rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up z-10" style={{ animationDelay: "0.2s" }}>
                <img 
                  src={heroMain} 
                  alt="Smart home with fiber internet" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                
                {/* Floating Speed Badge */}
                <div className="absolute bottom-6 left-6 px-4 py-3 rounded-xl bg-background/90 backdrop-blur-md border border-primary/30 glow-primary">
                  <div className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">1 Gbps</p>
                      <p className="text-xs text-muted-foreground">Download Speed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Image - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-xl animate-fade-in-up z-20" style={{ animationDelay: "0.4s" }}>
                <img 
                  src={heroEntertainment} 
                  alt="Family entertainment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              {/* Fiber Accent Image - Top Right Corner */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl overflow-hidden animate-float z-30">
                <img 
                  src={heroFiber} 
                  alt="Fiber optic technology" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl" />
              </div>

              {/* Floating Stats Cards */}

              {/* Decorative Elements */}
              <div className="absolute top-20 left-1/4 w-20 h-20 rounded-full bg-primary/10 blur-2xl animate-pulse-glow" />
              <div className="absolute bottom-20 right-1/4 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
