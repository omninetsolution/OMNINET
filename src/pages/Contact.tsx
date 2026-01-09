import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import contactBanner from "@/assets/contact-team.jpg";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "internet",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageBanner 
          title="Contact Us"
          subtitle="Need help navigating your connectivity options? Our independent assistance team is here to guide you."
          backgroundImage={contactBanner}
        />
        
        {/* Independent Disclosure */}
        <section className="py-6 sm:py-8 bg-primary/10 border-y border-primary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <strong className="text-foreground">Important:</strong> OMNINET SOLUTIONS is an independent third-party service assistance platform. 
              We are not affiliated with any internet, cable, or streaming provider. Our team provides guidance services for a separate fee. 
              When you call, you will speak with our independent assistance team, not a service provider.
            </p>
          </div>
        </section>
        
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                  Request <span className="text-gradient">Assistance</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">(888) 622-1618</p>
                      <p className="text-sm text-muted-foreground">Independent Assistance Team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">support@omninetsolutions.com</p>
                      <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">123 Tech Boulevard</p>
                      <p className="text-muted-foreground">San Francisco, CA 94105</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Hours</h3>
                      <p className="text-muted-foreground">Assistance: 8AM - 10PM (All Days)</p>
                      <p className="text-muted-foreground">Support: 24/7</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 border border-border rounded-lg p-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Call Disclosure:</strong> When you call (888) 622-1618, 
                    you are reaching OMNINET SOLUTIONS, an independent third-party assistance platform. 
                    Our team will help guide you through connectivity options. We charge a separate service fee for our assistance.
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Request Assistance
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                      placeholder="123 Main St, City, State ZIP"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Interested In</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                    >
                      <option value="internet">Internet Plans</option>
                      <option value="tv">Cable TV Plans</option>
                      <option value="bundle">Bundle Deals</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground resize-none"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>
                  
                  <button type="submit" className="btn-hero-primary w-full">
                    Submit Request
                  </button>
                  
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground\">Privacy & Independence Notice:</strong> Your information is secure and confidential. 
                      We maintain complete independence from service providers and never share your data for enrollment or marketing purposes. 
                      We never request provider account passwords. Your data is used only for OMNINET SOLUTIONS assistance services.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
