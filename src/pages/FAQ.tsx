import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Are you an official cable or internet service provider?",
    answer: "No. OMNINET SOLUTIONS is an independent third-party assistance platform. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider."
  },
  {
    question: "Do you sell internet, cable, or streaming plans?",
    answer: "No. We do not sell internet, cable, or streaming plans directly. We provide guidance and assistance services to help you understand and navigate your connectivity options."
  },
  {
    question: "Do you charge for your services?",
    answer: "Yes. Our service fees are separate from any provider charges. We charge a fee for our guidance, assistance, and support services. Provider billing remains completely separate."
  },
  {
    question: "Will I still be billed by my service provider?",
    answer: "Yes. Provider billing remains unchanged. Our assistance fees are separate from any charges you may incur from service providers."
  },
  {
    question: "Do you need my account passwords or sensitive information?",
    answer: "No. We never request provider account passwords or sensitive credentials. We only gather basic information needed to assist you with general guidance."
  },
  {
    question: "Which providers do you support?",
    answer: "We may reference multiple internet, cable, and streaming providers for educational and guidance purposes only. We have no affiliation with any provider."
  },
  {
    question: "Are your services refundable?",
    answer: "Yes. Refund requests may be submitted within 7 to 15 days of service purchase, subject to eligibility. Please review our Refund Policy page for complete details."
  },
  {
    question: "When I call, who am I speaking with?",
    answer: "You are speaking with our independent assistance team at OMNINET SOLUTIONS. You are not speaking with any internet, cable, or streaming service provider."
  },
  {
    question: "How can I contact your support team?",
    answer: "Our support team is available 24/7 at 1-800-555-0199. You can also email us at support@omninetsolutions.com or use our online chat."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Frequently Asked <span className="text-gradient">Questions</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Important answers about our independent assistance services
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-sm text-muted-foreground text-left">
                  <strong className="text-foreground">Disclosure:</strong> OMNINET SOLUTIONS is an independent third-party service assistance platform. 
                  We are not affiliated with any service providers. We provide guidance services for a separate fee.
                </div>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-bold text-foreground pr-4">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
