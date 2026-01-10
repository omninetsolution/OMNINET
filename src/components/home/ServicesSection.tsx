import { Link } from "react-router-dom";
import { Wifi, Tv } from "lucide-react";
import serviceInternet from "@/assets/service-internet.jpg";
import serviceCable from "@/assets/service-cable.jpg";

const services = [
  {
    title: "Internet Service Guidance",
    description: "Get help understanding internet speed requirements, provider options, and setup processes. Independent advice for your connectivity needs.",
    icon: Wifi,
    image: serviceInternet,
    link: "/internet",
    color: "primary"
  },
  {
    title: "Cable TV Assistance",
    description: "Navigate cable TV packages, equipment options, and streaming alternatives. Unbiased guidance to help you make informed decisions.",
    icon: Tv,
    image: serviceCable,
    link: "/cable-tv",
    color: "accent"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Guidance Services</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            We help you navigate connectivity service options with independent, unbiased guidance
          </p>
          <div className="bg-muted/50 border border-border rounded-lg p-4 mt-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Not an ISP.</strong> We provide education and assistance only. We do not sell, install, or represent any internet, cable, or streaming service.
            </p>
          </div>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="card-service group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-image w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center ${
                  service.color === "primary" ? "bg-primary" : 
                  service.color === "accent" ? "bg-accent" : "bg-secondary"
                }`}>
                  <service.icon className={`w-6 h-6 ${
                    service.color === "primary" ? "text-primary-foreground" :
                    service.color === "accent" ? "text-accent-foreground" : "text-secondary-foreground"
                  }`} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
