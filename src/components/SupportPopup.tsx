import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

const SupportPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "(888) 622-1618";
  const phoneLink = "tel:+18886221618";

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-in zoom-in duration-300">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-[90vw] sm:w-full relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="text-center space-y-4">
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Internet not working?
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Get instant help for slow internet, outages, setup issues, or cable problems.
            </p>

            {/* CTA Button */}
            <a
              href={phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              CALL SUPPORT NOW
            </a>

            {/* Trust Line */}
            <div className="pt-2 space-y-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                Quick Assistance • No Forms • Talk to Real Agent
              </p>
              <p className="text-sm font-semibold text-primary">
                {phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPopup;
