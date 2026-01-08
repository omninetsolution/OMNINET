import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCallButton from "@/components/StickyCallButton";
import Chatbot from "@/components/Chatbot";
import Index from "./pages/Index";
import InternetPlans from "./pages/InternetPlans";
import CableTVPlans from "./pages/CableTVPlans";
import Bundles from "./pages/Bundles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import AdvertisingDisclosure from "./pages/AdvertisingDisclosure";
import DoNotSell from "./pages/DoNotSell";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <StickyCallButton />
        <Chatbot />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/internet" element={<InternetPlans />} />
          <Route path="/cable-tv" element={<CableTVPlans />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/advertising-disclosure" element={<AdvertisingDisclosure />} />
          <Route path="/do-not-sell" element={<DoNotSell />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
