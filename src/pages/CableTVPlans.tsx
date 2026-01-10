import { Link } from "react-router-dom";
import { HelpCircle, Phone, Shield, CheckCircle, Tv } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import cableBanner from "@/assets/cable-plans-banner.jpg";

const guidanceAreas = [
  {
    title: "Understanding Package Options",
    description: "Learn about different cable TV packages and what channels you actually need.",
    points: [
      "Basic vs premium channel tiers",
      "Sports package options",
      "Movie channel bundles",
      "Local channel availability",
      "International programming"
    ]
  },
  {
    title: "Equipment & Setup Guidance",
    description: "Navigate DVR options, cable box types, and installation processes.",
    points: [
      "Cable box vs streaming options",
      "DVR capabilities explained",
      "Whole-home setup guidance",
      "Self-installation tips",
      "Equipment rental vs purchase"
    ]
  },
  {
    title: "Cutting Cable Alternatives",
    description: "Explore streaming services and cord-cutting options that might work for you.",
    points: [
      "Streaming service comparison",
      "Live TV streaming options",
      "Antenna setup for local channels",
      "Cost comparison analysis",
      "Internet speed requirements"
    ]
  }
];

const CableTVPlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageBanner 
          title="Cable TV Service Guidance"
          subtitle="Get independent help understanding cable TV options, packages, and alternatives. We provide unbiased guidance for your viewing needs."
          backgroundImage={cableBanner}
        />
        
        {/* Disclaimer Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-background border border-border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Not Affiliated with Any Provider</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>We do NOT sell cable TV services.</strong> OMNINET SOLUTIONS is an independent third-party guidance platform. 
                    We are not affiliated with, authorized by, or endorsed by any cable, satellite, or streaming provider. 
                    All provider mentions are for educational purposes only. We provide guidance and assistance for a service fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Guidance Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Cable TV Service <span className="text-gradient">Assistance</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our independent advisors help you navigate cable TV packages, equipment options, and alternative solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {guidanceAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="card-plan"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Tv className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {area.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {area.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Call for <span className="text-gradient">Cable TV Service Guidance</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get independent cable TV assistance from third-party advisors
              </p>
              <a
                href="tel:+18886221618"
                className="bg-accent text-accent-foreground hover:opacity-90 inline-flex items-center justify-center gap-2 text-base px-8 py-4 rounded-xl font-bold transition-all"
              >
                <Phone className="w-5 h-5" />
                Get Independent Cable TV Assistance
              </a>
              <p className="text-sm text-muted-foreground mt-6">
                <strong>Not affiliated with cable providers.</strong> Independent third-party guidance service.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CableTVPlans;
