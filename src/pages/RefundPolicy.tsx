import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, AlertCircle } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Refund <span className="text-gradient">Policy</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Effective Date: January 2026
                </p>
              </div>

              {/* Independent Disclosure */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Important Disclosure</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      OMNINET SOLUTIONS is an independent third-party service assistance platform launched in 2026. 
                      We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. 
                      This refund policy applies only to our separate service assistance fees. Provider refunds are governed 
                      by their own policies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-card border border-border rounded-xl p-8 mb-6">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Refund Eligibility Window
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Refund requests for OMNINET SOLUTIONS assistance services can be submitted within <strong className="text-foreground">7 to 15 days</strong> of 
                    service purchase, depending on the type of assistance provided.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Initial Consultation Services:</strong> 15-day refund window
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Ongoing Support Services:</strong> 7-day refund window from initial service date
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Completed Setup Assistance:</strong> 7-day refund window
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-8 mb-6">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Eligibility Criteria
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    To be eligible for a refund, the following conditions must be met:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Refund request must be submitted within the applicable time window</li>
                    <li>• Service must not have been fully delivered or completed</li>
                    <li>• Request must include original transaction details</li>
                    <li>• Reason for refund must be clearly stated</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-8 mb-6">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Non-Refundable Services
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    The following are not eligible for refunds:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Services that have been fully delivered and completed</li>
                    <li>• Requests submitted after the applicable refund window</li>
                    <li>• Third-party provider charges (these are governed by provider policies)</li>
                    <li>• Services where detailed assistance has already been provided</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-8 mb-6">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    How to Request a Refund
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    To request a refund, please contact us:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Email: <a href="mailto:support@omninetsolutions.com" className="text-primary hover:underline">support@omninetsolutions.com</a></li>
                    <li>• Phone: (888) 622-1618</li>
                    <li>• Subject Line: "Refund Request - [Order Number]"</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Please include your order number, date of purchase, and reason for the refund request.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-8 mb-6">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Processing Time
                  </h2>
                  <p className="text-muted-foreground">
                    Once approved, refunds will be processed within 5-10 business days. Refunds will be issued 
                    to the original payment method used for the purchase.
                  </p>
                </div>

                <div className="bg-muted/50 border border-border rounded-xl p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-3">
                    Important Reminders
                  </h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• This policy covers only OMNINET SOLUTIONS service fees</li>
                    <li>• Provider charges are subject to provider refund policies</li>
                    <li>• Refund eligibility is determined on a case-by-case basis</li>
                    <li>• We reserve the right to modify this policy with notice</li>
                  </ul>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    Last Updated: January 8, 2026<br />
                    Questions? Contact us at support@omninetsolutions.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
