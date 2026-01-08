import { Check, Package, Sparkles, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import bundlesBanner from "@/assets/bundles-banner.jpg";

const bundles = [
  {
    name: "Essentials Bundle",
    internet: "100 Mbps",
    tv: "100+ channels",
    price: "79.99",
    savings: "10",
    features: [
      "100 Mbps high-speed internet",
      "100+ HD channels",
      "Free modem & DVR",
      "Unlimited data",
      "24/7 support"
    ],
    recommended: false
  },
  {
    name: "Family Bundle",
    internet: "300 Mbps",
    tv: "175+ channels",
    price: "109.99",
    savings: "20",
    features: [
      "300 Mbps high-speed internet",
      "175+ HD channels",
      "Premium WiFi router",
      "2 DVRs included",
      "Sports package",
      "Parental controls",
      "Free installation"
    ],
    recommended: false
  },
  {
    name: "Pro Bundle",
    internet: "500 Mbps",
    tv: "250+ channels",
    price: "139.99",
    savings: "30",
    features: [
      "500 Mbps high-speed internet",
      "250+ HD channels",
      "Mesh WiFi system",
      "3 DVRs included",
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
          title="Bundle & Save"
          subtitle="Combine internet and TV for maximum value. Save up to $50/month!"
          backgroundImage={bundlesBanner}
        />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {bundles.map((bundle) => (
                <div
                  key={bundle.name}
                  className={`card-plan ${
                    bundle.recommended ? "border-primary ring-2 ring-primary/20" : ""
                  }`}
                >
                  {bundle.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full flex items-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        Best Value
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {bundle.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-primary mb-1">
                      <Package className="w-5 h-5" />
                      <span className="font-medium text-sm">{bundle.internet} + {bundle.tv}</span>
                    </div>
                    <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-2 py-1 rounded-full">
                      Save ${bundle.savings}/mo
                    </span>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-muted-foreground">$</span>
                      <span className="text-4xl font-bold text-foreground">{bundle.price}</span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-8">
                    {bundle.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="tel:+18005550199"
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all text-sm sm:text-base ${
                      bundle.recommended
                        ? "btn-hero-primary"
                        : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">Call Now: 1-800-555-0199</span>
                    <span className="sm:hidden">Call Now</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Bundles;
