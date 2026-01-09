import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <h1 className="font-display text-4xl font-bold text-foreground mb-8">
                Terms & Conditions
              </h1>
              
              <p className="text-muted-foreground mb-6">
                Last updated: January 2026
              </p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Important Disclosure:</strong> OMNINET SOLUTIONS is an independent 
                  third-party service assistance platform launched in 2026. We are not affiliated with, endorsed by, 
                  or sponsored by any cable, internet, or streaming service provider. We provide guidance and assistance 
                  services for a separate fee.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using OMNINET SOLUTIONS assistance services, you agree to be bound by these 
                Terms and Conditions. These terms govern your use of our independent third-party assistance platform.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Service Description</h2>
              <p className="text-muted-foreground mb-4">
                OMNINET SOLUTIONS provides independent guidance, consultation, and assistance services related to 
                internet, cable TV, and streaming connectivity options. We do not sell internet, cable, or streaming 
                services directly. We are not service providers. Our services include educational guidance, setup support, 
                and assistance in navigating connectivity options.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Service Fees and Billing</h2>
              <p className="text-muted-foreground mb-4">
                Our service fees are separate from any provider charges you may incur. We charge fees for our 
                guidance and assistance services only. Provider billing remains completely separate and is governed 
                by provider terms. Fees are clearly disclosed before you engage our services and may vary based on 
                the type of assistance requested.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Refund Policy</h2>
              <p className="text-muted-foreground mb-4">
                Refund requests may be submitted within 7 to 15 days of service purchase, subject to eligibility 
                requirements. Please review our complete Refund Policy page for detailed information about refund 
                windows, eligibility criteria, and the refund request process.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">No Provider Affiliation</h2>
              <p className="text-muted-foreground mb-4">
                OMNINET SOLUTIONS is completely independent from all internet, cable, and streaming service providers. 
                We have no partnership, affiliation, endorsement, or sponsorship agreements with any provider. We may 
                reference provider names for educational purposes only. All provider trademarks belong to their 
                respective owners.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                OMNINET SOLUTIONS provides guidance and assistance services only. We are not liable for provider 
                service quality, availability, pricing, or any issues arising from provider services. Our liability 
                is limited to the fees paid for our assistance services.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these terms, contact us at:<br />
                Email: legal@omninetsolutions.com<br />
                Phone: (888) 622-1618
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
