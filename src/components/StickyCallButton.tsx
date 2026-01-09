import { Phone } from "lucide-react";

const StickyCallButton = () => {
  const phoneNumber = "(888) 622-1618";
  const phoneLink = "tel:+18886221618";

  return (
    <a
      href={phoneLink}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow group"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 animate-bounce" />
      <span className="font-bold text-lg hidden sm:inline">Call Now: {phoneNumber}</span>
      <span className="font-bold text-lg sm:hidden">Call</span>
    </a>
  );
};

export default StickyCallButton;
