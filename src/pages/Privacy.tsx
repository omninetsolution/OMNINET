import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <h1 className="font-display text-4xl font-bold text-foreground mb-8">
                Privacy Policy
              </h1>
              
              <p className="text-muted-foreground mb-6">
                Last updated: January 2026
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly, including name, address, email, 
                phone number, and payment information when you sign up for our services.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use your information to provide and improve our services, process transactions, 
                communicate with you, and comply with legal obligations.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share information with service 
                providers who assist in our operations, or as required by law.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate security measures to protect your information from 
                unauthorized access, alteration, or disclosure.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to access, correct, or delete your personal information. 
                Contact us at privacy@omninetsolutions.com to exercise these rights.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For privacy-related questions, contact us at:<br />
                Email: privacy@omninetsolutions.com<br />
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

export default Privacy;
