import { Check, Phone, HelpCircle, Shield, Users } from "lucide-react";

const guidanceServices = [
  {
    name: "Internet Service",
    category: "Guidance",
    features: [
      "Understanding speed requirements",
      "Comparing available providers",
      "Setup assistance guidance",
      "Independent consultation"
    ],
    popular: false
  },
  {
    name: "Cable TV Service",
    category: "Guidance",
    features: [
      "Channel package information",
      "Equipment setup guidance",
      "Provider comparison help",
      "Independent advice",
      "Practical navigation tips"
    ],
    popular: true
  },
  {
    name: "Complete Assistance",
    category: "Guidance",
    features: [
      "Comprehensive service review",
      "Multi-service navigation",
      "Provider process guidance",
      "Priority consultation",
      "Ongoing support access",
      "Technical guidance"
    ],
    popular: false
  }
];

const PlansSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our <span className="text-gradient">Guidance Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-4">
            We help you understand and navigate connectivity service options. Get independent guidance from third-party advisors.
          </p>
          <p className="text-sm text-muted-foreground italic">
            <strong>Not an ISP.</strong> We are not affiliated with any internet, cable, or streaming provider.
          </p>
        </div>
        
        {/* Guidance Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {guidanceServices.map((service) => (
            <div
              key={service.name}
              className={`card-plan relative ${
                service.popular 
                  ? "border-primary ring-2 ring-primary/20" 
                  : ""
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 rounded-full whitespace-nowrap">
                    Most Requested
                  </span>
                </div>
              )}
              
              {/* Service Header */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-primary font-bold text-base sm:text-lg">{service.category}</p>
              </div>
              
              {/* Service Type */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <span className="text-lg font-semibold text-foreground">Independent Advice</span>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {service.features.map((feature) => (
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
                  service.popular
                    ? "btn-hero-primary"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Call for Guidance</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          ))}
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 sm:mt-12 text-center max-w-3xl mx-auto">
          <div className="bg-muted/50 border border-border rounded-lg p-4 sm:p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Important Disclosure:</strong> OMNINET SOLUTIONS provides independent third-party guidance and assistance. 
              We are NOT an internet service provider (ISP) and are NOT affiliated, authorized, or endorsed by any telecom or cable company. 
              We do not provide official service, ISP support, or represent any brand. Service fees apply for our consultation services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
