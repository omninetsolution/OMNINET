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
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Internet <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Choose the speed that fits your lifestyle. All plans include unlimited data.
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
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
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-primary font-bold text-base sm:text-lg">{plan.speed}</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex items-end justify-center gap-1">
                  <span className="text-muted-foreground text-sm sm:text-base">$</span>
                  <span className="text-4xl sm:text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm sm:text-base">/mo</span>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <a
                href="tel:+18886221618"
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg sm:rounded-xl font-bold transition-all text-sm sm:text-base touch-manipulation ${
                  plan.popular
                    ? "btn-hero-primary"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
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
