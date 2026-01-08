import { Link } from "react-router-dom";
import { Users, HeartHandshake, Target, Shield, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import aboutBanner from "@/assets/about-datacenter.jpg";

const stats = [
  { number: "2026", label: "Founded This Year", icon: Target },
  { number: "100%", label: "Independent Platform", icon: HeartHandshake },
  { number: "24/7", label: "Support Available", icon: Users },
  { number: "Secure", label: "Data Protection", icon: Shield },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageBanner 
          title="About OMNINET SOLUTIONS"
          subtitle="Your trusted independent third-party service assistance platform, helping customers navigate connectivity options since 2026."
          backgroundImage={aboutBanner}
        />
        
        {/* Stats */}
        <section className="py-12 sm:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</p>
                  <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-gradient">Purpose</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                At OMNINET SOLUTIONS, we understand that navigating internet, cable TV, and streaming 
                options can be overwhelming. Founded in 2026, we are an independent third-party assistance 
                platform dedicated to helping customers like you make informed decisions about connectivity services.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We provide personalized guidance, setup support, and educational resources to help you 
                find and understand the connectivity solutions that best fit your needs. Our team is here 
                to assist you through every step of the process, answering questions and providing clarity 
                in an often-confusing marketplace.
              </p>
              <a href="tel:+18005550199" className="btn-hero-primary inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: 1-800-555-0199
              </a>
            </div>
          </div>
        </section>
        
        {/* Independent Disclosure */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important Disclosure:</strong> OMNINET SOLUTIONS is an independent 
                third-party service assistance platform launched in 2026. We are not affiliated with, endorsed by, 
                or sponsored by any cable, internet, or streaming service provider. We do not sell internet, cable, 
                or streaming plans directly. Our platform provides guidance and assistance services for a separate 
                service fee. Provider billing remains completely separate from our assistance fees. All trademarks 
                and service marks belong to their respective owners.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
