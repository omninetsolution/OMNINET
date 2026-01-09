import { Phone } from "lucide-react";

const StickyCallButton = () => {
  const phoneNumber = "(888) 622-1618";
  const phoneLink = "tel:+18886221618";

  return (
    <a
      href={phoneLink}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full shadow-lg sm:shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow group touch-manipulation"
      aria-label="Call Now"
    >
      <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
      <span className="font-bold text-sm sm:text-lg hidden sm:inline">Call Now: {phoneNumber}</span>
      <span className="font-bold text-sm sm:hidden">Call</span>
    </a>
  );
};

export default StickyCallButton;
