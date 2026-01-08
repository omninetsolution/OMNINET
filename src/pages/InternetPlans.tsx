import { Link } from "react-router-dom";
import { Check, Zap, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import internetBanner from "@/assets/internet-plans-banner.jpg";

const plans = [
  {
    name: "Starter",
    speed: "100",
    price: "49.99",
    features: [
      "100 Mbps download speed",
      "10 Mbps upload speed",
      "Unlimited data",
      "Free modem rental",
      "Email support",
      "Basic parental controls"
    ],
    recommended: false
  },
  {
    name: "Performance",
    speed: "300",
    price: "69.99",
    features: [
      "300 Mbps download speed",
      "30 Mbps upload speed",
      "Unlimited data",
      "Free WiFi router",
      "24/7 phone support",
      "Advanced parental controls",
      "Free installation"
    ],
    recommended: false
  },
  {
    name: "Pro",
    speed: "500",
    price: "79.99",
    features: [
      "500 Mbps download speed",
      "50 Mbps upload speed",
      "Unlimited data",
      "Premium WiFi router",
      "Priority 24/7 support",
      "Advanced security suite",
      "Free installation",
      "1 month free"
    ],
    recommended: true
  },
  {
    name: "Ultra",
    speed: "1000",
    price: "99.99",
    features: [
      "1 Gbps download speed",
      "100 Mbps upload speed",
      "Unlimited data",
      "Mesh WiFi system (3 units)",
      "VIP priority support",
      "Full security suite",
      "Free professional setup",
      "2 months free",
      "Static IP included"
    ],
    recommended: false
  }
];

const InternetPlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageBanner 
          title="Internet Plans"
          subtitle="Lightning-fast fiber internet for every need. Choose the speed that powers your lifestyle."
          backgroundImage={internetBanner}
        />
        
        {/* Plans Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`card-plan ${
                    plan.recommended ? "border-primary ring-2 ring-primary/20" : ""
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                        Best Value
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <Zap className="w-5 h-5" />
                      <span className="font-bold text-lg">{plan.speed} Mbps</span>
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
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="tel:+18005550199"
                    className={`flex items-center justify-center gap-2 text-center py-3 px-4 rounded-xl font-bold transition-all text-sm sm:text-base ${
                      plan.recommended
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
            
            <p className="text-center text-sm text-muted-foreground mt-8">
              *Prices shown are for new customers. Taxes and fees may apply. 
              Availability varies by location.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InternetPlans;
