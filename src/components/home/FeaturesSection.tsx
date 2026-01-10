import { Zap, Shield, Headphones, Users, BookOpen, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Independent Advisors",
    description: "Get unbiased guidance from advisors who are not affiliated with any internet or cable provider.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "No Brand Affiliation",
    description: "We don't receive commissions from providers. Our only goal is helping you make informed decisions.",
    color: "accent"
  },
  {
    icon: Headphones,
    title: "24/7 Consultation Support",
    description: "Our guidance team is available around the clock to help you navigate connectivity questions.",
    color: "secondary"
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Learn about internet speeds, cable packages, and service options through our comprehensive guides.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Quick Answers",
    description: "Get fast, clear explanations about connectivity issues and service provider processes.",
    color: "accent"
  },
  {
    icon: CheckCircle,
    title: "Practical Guidance",
    description: "Receive actionable advice on setup, troubleshooting, and navigating service options.",
    color: "secondary"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6">
            Independent Guidance You Can
            <span className="text-gradient"> Trust</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4">
            We provide unbiased assistance to help you navigate connectivity service options.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground italic">
            <strong>Not an ISP.</strong> We don't sell services - we help you understand them.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform group-hover:scale-110 ${
                feature.color === 'primary' ? 'bg-primary/10' : 
                feature.color === 'accent' ? 'bg-accent/10' : 'bg-secondary/10'
              }`}>
                <feature.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${
                  feature.color === 'primary' ? 'text-primary' : 
                  feature.color === 'accent' ? 'text-accent' : 'text-secondary'
                }`} />
              </div>
              
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
