import { useState } from "react";
import { Gamepad2, Briefcase, Home, Play } from "lucide-react";
import featureGaming from "@/assets/feature-gaming.jpg";
import featureWorkFromHome from "@/assets/feature-workfromhome.jpg";
import featureSmartHome from "@/assets/feature-smarthome.jpg";
import heroEntertainment from "@/assets/hero-entertainment.jpg";

const useCases = [
  {
    id: "gaming",
    icon: Gamepad2,
    title: "Gaming",
    subtitle: "Zero Lag Experience",
    description: "Dominate with ultra-low latency connections. Our fiber network delivers ping rates under 10ms for competitive gaming without interruption.",
    image: featureGaming,
    stats: [
      { label: "Ping", value: "<10ms" },
      { label: "Jitter", value: "Minimal" },
      { label: "Stability", value: "99.9%" }
    ]
  },
  {
    id: "remote-work",
    icon: Briefcase,
    title: "Remote Work",
    subtitle: "Professional Performance",
    description: "Crystal-clear video calls, instant file transfers, and reliable VPN connections. Work from home like you're at the office.",
    image: featureWorkFromHome,
    stats: [
      { label: "Upload", value: "940 Mbps" },
      { label: "Calls", value: "4K Ready" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: "smart-home",
    icon: Home,
    title: "Smart Home",
    subtitle: "Connected Living",
    description: "Power all your IoT devices simultaneously. Smart cameras, thermostats, locks, and more - all connected seamlessly.",
    image: featureSmartHome,
    stats: [
      { label: "Devices", value: "100+" },
      { label: "Coverage", value: "Whole Home" },
      { label: "Security", value: "WPA3" }
    ]
  },
  {
    id: "streaming",
    icon: Play,
    title: "Streaming",
    subtitle: "4K Entertainment",
    description: "Stream in 4K on multiple devices without buffering. Enjoy unlimited entertainment with the whole family at once.",
    image: heroEntertainment,
    stats: [
      { label: "Quality", value: "4K HDR" },
      { label: "Streams", value: "10+" },
      { label: "Buffer", value: "Zero" }
    ]
  }
];

const UseCasesSection = () => {
  const [activeCase, setActiveCase] = useState("gaming");
  const currentCase = useCases.find(uc => uc.id === activeCase) || useCases[0];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Perfect For Every Need
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for How
            <span className="text-gradient-accent"> You Live</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're gaming, working, or streaming, our network delivers exceptional performance.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveCase(useCase.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCase === useCase.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              <useCase.icon className="w-5 h-5" />
              {useCase.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-4">
              {currentCase.stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 px-4 py-3 rounded-xl bg-background/90 backdrop-blur-md border border-border text-center"
                >
                  <p className="text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <currentCase.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">{currentCase.subtitle}</span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {currentCase.title} Performance
              <span className="text-gradient"> Optimized</span>
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {currentCase.description}
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Dedicated bandwidth allocation</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Priority network routing</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">24/7 performance monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
