import { Zap, Shield, Headphones, Download, Wifi, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Speeds",
    description: "Experience blazing-fast downloads up to 1 Gbps with our fiber-optic network.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced threat protection and encrypted connections keep your data safe.",
    color: "accent"
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Our dedicated team is always available to help you with any issues.",
    color: "secondary"
  },
  {
    icon: Download,
    title: "Unlimited Data",
    description: "No data caps or throttling. Stream, download, and browse without limits.",
    color: "primary"
  },
  {
    icon: Wifi,
    title: "Whole-Home WiFi",
    description: "Mesh networking ensures strong coverage in every room of your home.",
    color: "accent"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Reliable connectivity whether you're at home or on the go.",
    color: "secondary"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Everything You Need for
            <span className="text-gradient"> Seamless Connectivity</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            We provide industry-leading features that make your internet experience exceptional.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                feature.color === 'primary' ? 'bg-primary/10' : 
                feature.color === 'accent' ? 'bg-accent/10' : 'bg-secondary/10'
              }`}>
                <feature.icon className={`w-7 h-7 ${
                  feature.color === 'primary' ? 'text-primary' : 
                  feature.color === 'accent' ? 'text-accent' : 'text-secondary'
                }`} />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
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
