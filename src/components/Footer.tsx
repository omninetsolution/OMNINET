import { Link } from "react-router-dom";
import { Network, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Internet Plans", path: "/internet" },
    { name: "Cable TV Plans", path: "/cable-tv" },
    { name: "Bundle Deals", path: "/bundles" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Refund Policy", path: "/refund-policy" },
    { name: "Advertising Disclosure", path: "/advertising-disclosure" },
    { name: "Do Not Sell My Info", path: "/do-not-sell" },
    { name: "Disclaimer", path: "/disclaimer" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary via-accent to-primary opacity-90"></div>
                <div className="absolute inset-[2px] rounded-lg bg-card flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="2" className="fill-primary" />
                    <circle cx="6" cy="6" r="1.5" className="fill-primary" opacity="0.8" />
                    <circle cx="18" cy="6" r="1.5" className="fill-accent" opacity="0.8" />
                    <circle cx="6" cy="18" r="1.5" className="fill-accent" opacity="0.8" />
                    <circle cx="18" cy="18" r="1.5" className="fill-primary" opacity="0.8" />
                    <line x1="12" y1="12" x2="6" y2="6" className="stroke-primary" strokeWidth="1.5" opacity="0.6" />
                    <line x1="12" y1="12" x2="18" y2="6" className="stroke-accent" strokeWidth="1.5" opacity="0.6" />
                    <line x1="12" y1="12" x2="6" y2="18" className="stroke-accent" strokeWidth="1.5" opacity="0.6" />
                    <line x1="12" y1="12" x2="18" y2="18" className="stroke-primary" strokeWidth="1.5" opacity="0.6" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-sm font-bold text-foreground tracking-wider">
                  OMNINET
                </span>
                <span className="font-display text-xs font-semibold text-primary tracking-wide">
                  SOLUTIONS
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6">
              Your trusted partner for high-speed internet and premium cable TV services. 
              Experience seamless connectivity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">(888) 622-1618</p>
                  <p className="text-muted-foreground text-sm">24/7 Support Available</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">support@omninetsolutions.com</p>
                  <p className="text-muted-foreground text-sm">Email us anytime</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">123 Tech Boulevard</p>
                  <p className="text-muted-foreground text-sm">San Francisco, CA 94105</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Independent Service Disclosure */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed">
            <strong>Important Disclosure:</strong> OMNINET SOLUTIONS is an independent third-party service assistance platform, launched in 2026. 
            We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. 
            We do not sell internet, cable, or streaming plans directly. Our platform provides guidance and assistance services 
            for a separate service fee. All trademarks and service marks belong to their respective owners.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} OMNINET SOLUTIONS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
