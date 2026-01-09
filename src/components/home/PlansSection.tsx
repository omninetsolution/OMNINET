import { Check, Phone } from "lucide-react";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "49.99",
    features: [
      "100 Mbps download speed",
      "Unlimited data",
      "Free modem rental",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: "79.99",
    features: [
      "500 Mbps download speed",
      "Unlimited data",
      "Free WiFi router",
      "24/7 phone support",
      "Free installation"
    ],
    popular: true
  },
  {
    name: "Ultra",
    speed: "1 Gbps",
    price: "99.99",
    features: [
      "1 Gbps download speed",
      "Unlimited data",
      "Premium mesh WiFi system",
      "Priority 24/7 support",
      "Free installation",
      "Static IP available"
    ],
    popular: false
  }
];

const PlansSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Internet <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the speed that fits your lifestyle. All plans include unlimited data.
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-plan relative ${
                plan.popular 
                  ? "border-primary ring-2 ring-primary/20" 
                  : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-primary font-bold text-lg">{plan.speed}</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-end justify-center gap-1">
                  <span className="text-muted-foreground">$</span>
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <a
                href="tel:+18005550199"
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all text-sm sm:text-base ${
                  plan.popular
                    ? "btn-hero-primary"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Now: (888) 622-1618</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
