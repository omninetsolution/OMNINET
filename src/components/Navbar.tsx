import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Network, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Internet", path: "/internet" },
    { name: "Cable TV", path: "/cable-tv" },
    { name: "Bundles", path: "/bundles" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary via-accent to-primary opacity-90"></div>
              <div className="absolute inset-[2px] rounded-lg bg-background flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[24px] sm:h-[24px]">
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
              <span className="font-display text-xs sm:text-sm font-bold text-foreground tracking-wider">
                OMNINET
              </span>
              <span className="font-display text-[10px] sm:text-xs font-semibold text-primary tracking-wide">
                SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+18886221618" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(888) 622-1618</span>
            </a>
            <a href="tel:+18886221618" className="btn-hero-primary text-sm px-6 py-3 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+18005550199"
                onClick={() => setIsOpen(false)}
                className="btn-hero-primary text-center mt-4 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now: (888) 622-1618
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
