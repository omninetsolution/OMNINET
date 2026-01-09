import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <h1 className="font-display text-4xl font-bold text-foreground mb-8">
                Disclaimer
              </h1>
              
              <p className="text-muted-foreground mb-6">
                Last updated: January 2026
              </p>
              
              <div className="bg-card rounded-xl p-6 border border-primary mb-8">
                <p className="text-foreground font-bold mb-2">Critical Disclaimer</p>
                <p className="text-muted-foreground">
                  OMNINET SOLUTIONS is an independent third-party service assistance platform launched in 2026. 
                  We are NOT a cable, internet, or streaming service provider. We are NOT affiliated with, endorsed by, 
                  or sponsored by any service provider. We provide guidance and assistance services for a separate fee. 
                  All provider billing is separate from our assistance fees.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Independent Platform</h2>
              <p className="text-muted-foreground mb-4">
                OMNINET SOLUTIONS operates as a completely independent assistance service. We have no partnerships, 
                affiliations, or endorsement agreements with any internet, cable, or streaming provider. Our role is 
                to provide educational guidance and support services only.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">No Direct Service Sales</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell internet, cable, or streaming services. We do not activate services on behalf of providers. 
                We do not have access to provider systems, accounts, or billing. Our services are limited to guidance, 
                consultation, and assistance.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Separate Service Fees</h2>
              <p className="text-muted-foreground mb-4">
                Our service fees are separate from and in addition to any provider charges. When you engage our 
                assistance services, you are paying OMNINET SOLUTIONS for our guidance and support. Provider 
                billing remains completely independent and is governed by provider terms.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Provider Information</h2>
              <p className="text-muted-foreground mb-4">
                When we reference specific providers, we do so for educational and informational purposes only. 
                All provider names, logos, and trademarks belong to their respective owners. References do not 
                imply any partnership, affiliation, or endorsement.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Service Availability and Accuracy</h2>
              <p className="text-muted-foreground mb-4">
                Provider services, speeds, pricing, and availability vary by location and are subject to change. 
                While we strive to provide accurate guidance, we cannot guarantee current pricing or availability. 
                All service details should be verified directly with providers.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">No Provider Liability</h2>
              <p className="text-muted-foreground mb-4">
                OMNINET SOLUTIONS is not responsible for provider service quality, performance, reliability, 
                billing issues, customer service, or any other provider-related matters. All provider-related 
                concerns should be directed to the provider directly.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">No Warranty</h2>
              <p className="text-muted-foreground mb-4">
                Our assistance and guidance services are provided "as is" without warranty of any kind. 
                We disclaim all warranties, express or implied, regarding the accuracy, completeness, 
                or usefulness of our guidance.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For questions about this disclaimer:<br />
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

export default Disclaimer;
