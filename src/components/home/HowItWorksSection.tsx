import stepOrder from "@/assets/step-order.jpg";
import stepInstall from "@/assets/step-install.jpg";
import stepSupport from "@/assets/step-support.jpg";

const steps = [
  {
    number: "01",
    title: "Call for Guidance",
    description: "Reach out to our independent advisors to discuss your internet, cable TV, or connectivity questions.",
    image: stepOrder
  },
  {
    number: "02",
    title: "Get Expert Advice",
    description: "Receive unbiased guidance on service options, provider comparisons, and practical setup tips.",
    image: stepInstall
  },
  {
    number: "03",
    title: "Make Informed Decisions",
    description: "Armed with knowledge, navigate the service provider process confidently with our ongoing support.",
    image: stepSupport
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We <span className="text-gradient">Help You</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Getting expert guidance is easy. Follow these simple steps to get started.
          </p>
          <p className="text-sm text-muted-foreground italic">
            <strong>Not an ISP.</strong> We provide independent consultation services only.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" 
                     style={{ width: "calc(100% - 2rem)" }} />
              )}
              
              {/* Card */}
              <div className="relative bg-background rounded-2xl overflow-hidden border border-border group-hover:border-primary transition-colors duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  
                  {/* Step Number */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{step.number}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
