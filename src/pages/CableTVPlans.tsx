import { Link } from "react-router-dom";
import { Check, Tv, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import cableBanner from "@/assets/cable-plans-banner.jpg";

const plans = [
  {
    name: "Basic",
    channels: "100+",
    price: "39.99",
    features: [
      "100+ HD channels",
      "Local broadcast channels",
      "Basic news & sports",
      "1 DVR included",
      "7-day catch-up TV"
    ],
    recommended: false
  },
  {
    name: "Plus",
    channels: "175+",
    price: "59.99",
    features: [
      "175+ HD channels",
      "Regional sports networks",
      "Premium news channels",
      "2 DVRs included",
      "14-day catch-up TV",
      "On-demand library access"
    ],
    recommended: false
  },
  {
    name: "Premium",
    channels: "250+",
    price: "79.99",
    features: [
      "250+ HD channels",
      "All sports packages",
      "Premium movie channels",
      "3 DVRs included",
      "30-day catch-up TV",
      "Full on-demand library",
      "4K content available"
    ],
    recommended: true
  },
  {
    name: "Ultimate",
    channels: "300+",
    price: "99.99",
    features: [
      "300+ HD channels",
      "All premium packages",
      "International channels",
      "Whole-home DVR system",
      "Unlimited cloud DVR",
      "All streaming apps included",
      "4K & HDR content",
      "Multiview feature"
    ],
    recommended: false
  }
];

const CableTVPlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageBanner 
          title="Cable TV Plans"
          subtitle="Premium entertainment with 300+ HD channels. Movies, sports, news & more."
          backgroundImage={cableBanner}
        />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`card-plan ${
                    plan.recommended ? "border-accent ring-2 ring-accent/20" : ""
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground text-sm font-bold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-accent">
                      <Tv className="w-5 h-5" />
                      <span className="font-bold text-lg">{plan.channels} Channels</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-muted-foreground">$</span>
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="tel:+18005550199"
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all text-sm sm:text-base ${
                      plan.recommended
                        ? "bg-accent text-accent-foreground hover:opacity-90"
                        : "bg-muted text-foreground hover:bg-accent hover:text-accent-foreground"
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

export default CableTVPlans;
