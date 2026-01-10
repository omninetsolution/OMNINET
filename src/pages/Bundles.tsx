import { HelpCircle, Phone, Shield, CheckCircle, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import bundlesBanner from "@/assets/bundles-banner.jpg";

const guidanceAreas = [
  {
    title: "Understanding Bundle Options",
    description: "Learn how combining services works and whether bundling makes sense for you.",
    points: [
      "Internet + TV bundle basics",
      "Triple play packages explained",
      "Contract terms comparison",
      "True cost analysis",
      "Provider bundle differences"
    ]
  },
  {
    title: "Evaluating Savings Claims",
    description: "Get help understanding if advertised bundle savings are actually beneficial.",
    points: [
      "Reading bundle pricing fine print",
      "Promotional period limitations",
      "Hidden fees to watch for",
      "Equipment rental costs",
      "Long-term cost projections"
    ]
  },
  {
    title: "Alternative Solutions",
    description: "Explore modern alternatives to traditional service bundles.",
    points: [
      "Standalone service comparison",
      "Streaming + internet options",
      "Mix-and-match strategies",
      "Cost optimization tips",
      "Flexibility vs savings tradeoffs"
    ]
  }
];

const Bundles = () => {
      "All sports packages",
      "Premium movie channels",
      "Free professional setup",
      "Security suite included"
    ],
    recommended: true
  },
  {
    name: "Ultimate Bundle",
    internet: "1 Gbps",
    tv: "300+ channels",
    price: "179.99",
    savings: "50",
    features: [
      "1 Gbps fiber internet",
      "300+ HD channels",
      "Whole-home mesh system",
      "Unlimited cloud DVR",
      "Every premium package",
      "4K streaming",
      "VIP support",
      "Smart home integration",
      "3 months free"
    ],
    recommended: false
  }
];

const Bundles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageBanner 
          title="Service Bundle Guidance"
          subtitle="Get independent advice on bundled services. Understand if combining internet and TV makes sense for your situation."
          backgroundImage={bundlesBanner}
        />
        
        {/* Disclaimer Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-background border border-border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Independent Bundle Analysis</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>We do NOT sell bundled services.</strong> OMNINET SOLUTIONS provides independent guidance on service bundles. 
                    We are not affiliated with any service provider and do not receive commissions from telecoms. 
                    Our advice is unbiased and focused on helping you understand your options. Service fees apply for consultations.
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
                Bundle Service <span className="text-gradient">Navigation Help</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our independent advisors help you understand if bundling services is right for you
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
                      <Package className="w-6 h-6 text-primary" />
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
        
        {/* What We Do Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                What We <span className="text-gradient">Do & Don't Do</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background border-2 border-primary/20 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    What We DO
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Help you understand service bundle options</li>
                    <li>• Provide practical guidance on connectivity</li>
                    <li>• Explain how to navigate provider processes</li>
                    <li>• Offer independent consultation</li>
                    <li>• Compare different bundle structures</li>
                  </ul>
                </div>
                
                <div className="bg-background border-2 border-destructive/20 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-destructive" />
                    What We DON'T Do
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• We are NOT an internet service provider (ISP)</li>
                    <li>• We are NOT affiliated with any telecom/cable company</li>
                    <li>• We do NOT sell official ISP services</li>
                    <li>• We do NOT provide guaranteed technical fixes</li>
                    <li>• We do NOT represent any brand</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need Help Understanding <span className="text-gradient">Bundle Options</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Talk to an independent advisor about service bundling strategies
              </p>
              <a
                href="tel:+18886221618"
                className="btn-hero-primary inline-flex items-center justify-center gap-2 text-base"
              >
                <Phone className="w-5 h-5" />
                Call for Bundle Guidance
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

export default Bundles;
