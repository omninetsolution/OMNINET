import { Link } from "react-router-dom";
import { HelpCircle, Phone, Shield, Users, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import internetBanner from "@/assets/internet-plans-banner.jpg";

const guidanceAreas = [
  {
    title: "Understanding Speed Requirements",
    description: "Learn what internet speeds you actually need for your household activities.",
    points: [
      "Streaming video requirements",
      "Work-from-home bandwidth needs",
      "Gaming and large downloads",
      "Multiple device usage",
      "Future-proofing your connection"
    ]
  },
  {
    title: "Comparing Service Options",
    description: "Get help understanding different internet service types and providers in your area.",
    points: [
      "Fiber vs Cable vs DSL",
      "Provider availability research",
      "Contract terms guidance",
      "Equipment requirements",
      "Hidden fees to watch for"
    ]
  },
  {
    title: "Setup & Troubleshooting",
    description: "Navigate the process of getting connected and resolving common issues.",
    points: [
      "Installation process guidance",
      "Self-installation tips",
      "Router placement advice",
      "Connection optimization",
      "When to contact your ISP"
    ]
  }
];

const InternetPlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageBanner 
          title="Internet Service Guidance"
          subtitle="Get independent help understanding internet service options. We guide you through speed requirements, provider comparison, and setup assistance."
          backgroundImage={internetBanner}
        />
        
        {/* Disclaimer Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-background border border-border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Important Disclosure</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>We are NOT an Internet Service Provider (ISP).</strong> OMNINET SOLUTIONS is an independent third-party guidance service. 
                    We are not affiliated with, authorized by, or endorsed by any telecom or cable company. We do not sell official ISP services or provide guaranteed technical fixes. 
                    All provider mentions are for informational purposes only. Service fees apply for our consultation services.
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
                How We <span className="text-gradient">Help You</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our independent advisors help you navigate the complex world of internet service selection and setup
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {guidanceAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="card-plan"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <HelpCircle className="w-6 h-6 text-primary" />
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
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
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
                Ready to Get <span className="text-gradient">Expert Guidance</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Talk to our independent advisors about your internet service needs
              </p>
              <a
                href="tel:+18886221618"
                className="btn-hero-primary inline-flex items-center justify-center gap-2 text-base"
              >
                <Phone className="w-5 h-5" />
                Call for Independent Service Guidance
              </a>
              <p className="text-sm text-muted-foreground mt-6">
                <strong>Not an ISP. No brand affiliation.</strong> Independent third-party guidance service.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InternetPlans;
