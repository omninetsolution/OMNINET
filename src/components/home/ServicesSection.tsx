import { Link } from "react-router-dom";
import { Wifi, Tv, Package } from "lucide-react";
import serviceInternet from "@/assets/service-internet.jpg";
import serviceCable from "@/assets/service-cable.jpg";
import serviceBundle from "@/assets/service-bundle.jpg";

const services = [
  {
    title: "High-Speed Internet",
    description: "Lightning-fast fiber internet with speeds up to 1 Gbps. Stream, game, and work without limits.",
    icon: Wifi,
    image: serviceInternet,
    link: "/internet",
    color: "primary"
  },
  {
    title: "Premium Cable TV",
    description: "250+ HD channels including sports, movies, and premium networks. Never miss a moment.",
    icon: Tv,
    image: serviceCable,
    link: "/cable-tv",
    color: "accent"
  },
  {
    title: "Bundle & Save",
    description: "Combine internet and TV for maximum savings. Get the best of both worlds at unbeatable prices.",
    icon: Package,
    image: serviceBundle,
    link: "/bundles",
    color: "secondary"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our range of premium connectivity solutions designed for modern homes
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
