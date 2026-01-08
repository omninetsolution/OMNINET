import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Are you an official cable or internet service provider?",
    answer: "No. OMNINET SOLUTIONS operates as an independent startup launched in 2026 with zero affiliation to any cable, internet, or streaming provider. We exist solely to assist customers in navigating their options, not to sell or install services."
  },
  {
    question: "Do you sell internet, cable, or streaming plans?",
    answer: "Absolutely not. We do not sell, activate, or install any connectivity services. Our entire business model centers on providing educational guidance and assistance to help you understand and evaluate your connectivity options independently."
  },
  {
    question: "Do you charge for your services?",
    answer: "Yes. We operate on a service fee model. Your payment to OMNINET SOLUTIONS covers our assistance, consultation, and support services exclusively. This fee is entirely separate from any charges billed by actual service providers."
  },
  {
    question: "Will I still be billed by my service provider?",
    answer: "Yes, provider billing is completely unaffected by our services. Our assistance fee is a separate, standalone charge. You maintain your existing provider relationship and billing with no changes."
  },
  {
    question: "Do you need my account passwords or sensitive information?",
    answer: "Never. We never request provider account credentials, passwords, PINs, or any sensitive personal information. We operate independently and have no need for access to your provider accounts."
  },
  {
    question: "Which providers do you support?",
    answer: "We may reference multiple internet, cable, and streaming providers in our educational content. Our references are informational only, for comparison and guidance purposes. We hold no partnerships with any provider."
  },
  {
    question: "Are your services refundable?",
    answer: "Yes. We offer a 7 to 15-day refund window following your service engagement, contingent on the type of assistance purchased and your individual circumstances. Detailed refund eligibility criteria are available on our dedicated Refund Policy page."
  },
  {
    question: "When I call, who am I speaking with?",
    answer: "You are speaking exclusively with our independent OMNINET SOLUTIONS team. Our phone lines are staffed by our own assistance representatives, not by any service provider."
  },
  {
    question: "Is my data shared with providers or third parties?",
    answer: "No. We maintain strict data independence. Your information is never provided to service providers for marketing, enrollment, or any other purpose without your explicit written consent. We comply fully with privacy regulations."
  },
  {
    question: "What happens after I get assistance from you?",
    answer: "After our assistance, the choice of action is entirely yours. You may contact providers directly, request quotes, or take no action. We never enroll you in services or make changes on your behalf."
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
