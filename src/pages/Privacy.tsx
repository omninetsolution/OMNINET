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
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Independence Notice:</strong> OMNINET SOLUTIONS is a standalone assistance startup, 
                  established in 2026. We maintain complete operational independence from all internet, cable, and streaming providers. 
                  Your data is never shared with service providers without explicit authorization.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly, including name, address, email, 
                phone number, and payment information when you sign up for our services. 
                We do not request or store provider account passwords or sensitive credentials.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use your information exclusively to provide and improve our independent assistance services, 
                process transactions, communicate with you about our services, and comply with legal obligations. 
                Your data is not shared with service providers for marketing purposes.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Sharing & Non-Affiliation</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information to third parties. We maintain independence from all service providers 
                and do not share user data with providers for marketing or service enrollment purposes. We may share information 
                only with service providers who assist in our operations (e.g., payment processors) under strict confidentiality agreements, 
                or as required by law.
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

export default Privacy;
