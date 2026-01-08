import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AdvertisingDisclosure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <h1 className="font-display text-4xl font-bold text-foreground mb-8">
                Advertising Disclosure
              </h1>
              
              <p className="text-muted-foreground mb-6">
                Last updated: January 2026
              </p>
              
              <div className="bg-card rounded-xl p-6 border border-border mb-8">
                <p className="text-foreground font-bold mb-2">Important Notice</p>
                <p className="text-muted-foreground">
                  We are an independent authorized dealer and not the service provider. 
                  We may receive compensation for connecting customers with service providers.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Compensation Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                OMNINET SOLUTIONS may receive compensation from service providers when you sign up 
                for services through our website or by calling our phone numbers.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Pricing Information</h2>
              <p className="text-muted-foreground mb-4">
                Prices displayed are for new customers and may vary by location. Actual prices 
                may be higher after promotional periods end. Taxes, fees, and equipment costs 
                may apply.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Trademarks</h2>
              <p className="text-muted-foreground mb-4">
                All trademarks, service marks, and trade names are the property of their 
                respective owners. We are not affiliated with or endorsed by any service provider.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For questions about our advertising practices:<br />
                Email: advertising@omninetsolutions.com<br />
                Phone: 1-800-555-0199
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdvertisingDisclosure;
