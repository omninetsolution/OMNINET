import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DoNotSell = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <h1 className="font-display text-4xl font-bold text-foreground mb-8">
                Do Not Sell My Personal Information
              </h1>
              
              <p className="text-muted-foreground mb-6">
                Last updated: January 2026
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Your Rights Under CCPA</h2>
              <p className="text-muted-foreground mb-4">
                Under the California Consumer Privacy Act (CCPA), California residents have 
                the right to opt-out of the sale of their personal information.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Policy</h2>
              <p className="text-muted-foreground mb-4">
                OMNINET SOLUTIONS does not sell personal information to third parties. We may share 
                information with service providers who help us deliver our services, but this 
                is not considered a sale under CCPA.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How to Exercise Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                If you wish to exercise your privacy rights or have questions about how we 
                handle your data, you can:
              </p>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Email us at: privacy@omninetsolutions.com</li>
                <li>Call us at: 1-800-555-0199</li>
                <li>Submit a request through our Contact page</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Verification</h2>
              <p className="text-muted-foreground mb-4">
                We may need to verify your identity before processing your request. This helps 
                protect your personal information from unauthorized access.
              </p>
              
              <div className="mt-8">
                <Link to="/contact" className="btn-hero-primary inline-block">
                  Submit a Request
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DoNotSell;
