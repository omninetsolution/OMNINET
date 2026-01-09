import { MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! Welcome to OMNINET SOLUTIONS. How can I assist you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickReplies = [
    "Request Assistance",
    "View Services",
    "Call Support",
    "FAQ",
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
    }, 1000);

    setInputValue("");
  };

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("call") || lowerMessage.includes("phone") || lowerMessage.includes("contact")) {
      return "You can reach our assistance team at (888) 622-1618. We're available 24/7 to help you!";
    } else if (lowerMessage.includes("service") || lowerMessage.includes("help") || lowerMessage.includes("assist")) {
      return "We provide independent guidance for internet, cable TV, and streaming services. We charge a separate service fee for our assistance. Would you like to speak with our team?";
    } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("fee")) {
      return "Our service fees vary based on the type of assistance you need. Please call (888) 622-1618 to speak with our team for detailed pricing information.";
    } else if (lowerMessage.includes("refund")) {
      return "We offer refunds within 7-15 days of service purchase, subject to eligibility. Visit our Refund Policy page for details.";
    } else {
      return "Thank you for your message! For personalized assistance, please call us at (888) 622-1618 or email support@omninetsolutions.com. Our team is here to help!";
    }
  };

  const handleQuickReply = (reply: string) => {
    if (reply === "Call Support") {
      window.location.href = "tel:+18886221618";
    } else if (reply === "View Services") {
      window.location.href = "/internet";
    } else if (reply === "Request Assistance") {
      window.location.href = "/contact";
    } else if (reply === "FAQ") {
      window.location.href = "/faq";
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-primary text-primary-foreground rounded-full shadow-lg sm:shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group touch-manipulation"
          aria-label="Open Chat"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 sm:bottom-6 sm:left-6 sm:right-auto z-50 sm:w-96 max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)] h-[calc(100vh-8rem)] sm:h-[500px] bg-card border-2 border-primary/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base">OMNINET Assistant</h3>
                <p className="text-xs text-white/80">Online Now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1.5 sm:p-2 transition-colors touch-manipulation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-muted/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] p-2.5 sm:p-3 rounded-2xl ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-card border border-border rounded-bl-none"
                  }`}
                >
                  <p className="text-xs sm:text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-2 sm:p-3 border-t border-border bg-card flex-shrink-0">
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="px-2.5 sm:px-3 py-1 text-xs bg-primary/10 hover:bg-primary/20 text-primary rounded-full border border-primary/30 transition-colors touch-manipulation"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-border bg-card flex-shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2 rounded-full bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-xs sm:text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors flex-shrink-0 touch-manipulation"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
