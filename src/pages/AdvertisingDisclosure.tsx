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
                <p className="text-foreground font-bold mb-2">Important Independence Notice</p>
                <p className="text-muted-foreground">
                  OMNINET SOLUTIONS is an independent third-party assistance startup, not affiliated with any internet, cable, or streaming service provider. 
                  We provide guidance and assistance services only. We may receive referral compensation when customers choose to contact providers through our assistance services.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Compensation Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                OMNINET SOLUTIONS may receive referral compensation from service providers when customers engage with providers 
                through our assistance services. This referral model allows us to offer our guidance services. All compensation is received 
                from providers, not from customers. Our assistance fee structure remains transparent and separate from any provider compensation.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Independence</h2>
              <p className="text-muted-foreground mb-4">
                Despite receiving referral compensation, we maintain complete editorial independence. Our guidance is based on educational 
                information and customer needs, not on provider compensation. We serve the customer's interests in finding appropriate connectivity solutions.
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

export default AdvertisingDisclosure;
