import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, Clock, Star, ArrowRight } from "lucide-react";
import supportTeam from "@/assets/support-team.jpg";

const supportChannels = [
  {
    icon: Phone,
    title: "Call for Guidance",
    description: "Speak with our independent advisors about connectivity options",
    action: "(888) 622-1618",
    available: "24/7"
  },
  {
    icon: MessageCircle,
    title: "Chat Assistance",
    description: "Get quick answers about service options and processes",
    action: "Start Chat",
    available: "24/7"
  },
  {
    icon: Mail,
    title: "Email Consultation",
    description: "Send your connectivity questions for detailed guidance",
    action: "support@omninetsolutions.com",
    available: "Response in 2hrs"
  }
];

const SupportSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={supportTeam}
                alt="Customer support team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Rating Badge */}
            <div className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl bg-card border border-border shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-foreground">4.9/5</p>
                  <p className="text-xs text-muted-foreground">Support Rating</p>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="absolute -top-4 left-8 px-4 py-3 rounded-xl bg-primary text-primary-foreground shadow-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-bold">{"<2 min"}</span>
                <span className="text-sm opacity-80">avg response</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
              Award-Winning Support
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Help When You
              <span className="text-gradient"> Need It Most</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Our dedicated support team is available around the clock to ensure you stay connected. We're here to help with installations, troubleshooting, and any questions.
            </p>

            {/* Support Channels */}
            <div className="space-y-4">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <channel.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {channel.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{channel.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-primary">{channel.action}</p>
                    <p className="text-xs text-muted-foreground">{channel.available}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
            >
              Visit Help Center
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
