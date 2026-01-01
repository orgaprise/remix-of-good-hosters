import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import CloudVsSharedHosting from "./pages/CloudVsSharedHosting";
import WebHostingSecurityGuide from "./pages/WebHostingSecurityGuide";
import BestVPSHosting from "./pages/BestVPSHosting";
import ManagedVsUnmanagedWordPress from "./pages/ManagedVsUnmanagedWordPress";
import WebsiteSpeedOptimization from "./pages/WebsiteSpeedOptimization";
import SSLCertificatesGuide from "./pages/SSLCertificatesGuide";
import DomainRegistrationGuide from "./pages/DomainRegistrationGuide";
import WebsiteBackupStrategies from "./pages/WebsiteBackupStrategies";
import ProfessionalEmailHosting from "./pages/ProfessionalEmailHosting";
import Contact from "./pages/Contact";
import HostingFinder from "./pages/HostingFinder";
import Services from "./pages/Services";
import About from "./pages/About";
import Help from "./pages/Help";
import Hosting from "./pages/Hosting";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Disclosure from "./pages/Disclosure";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/best-web-hosting-2026" element={<BlogArticle />} />
          <Route path="/cloud-vs-shared-hosting" element={<CloudVsSharedHosting />} />
          <Route path="/web-hosting-security-guide" element={<WebHostingSecurityGuide />} />
          <Route path="/best-vps-hosting-2026" element={<BestVPSHosting />} />
          <Route path="/managed-vs-unmanaged-wordpress-hosting" element={<ManagedVsUnmanagedWordPress />} />
          <Route path="/website-speed-optimization-guide" element={<WebsiteSpeedOptimization />} />
          <Route path="/ssl-certificates-guide" element={<SSLCertificatesGuide />} />
          <Route path="/domain-registration-guide" element={<DomainRegistrationGuide />} />
          <Route path="/website-backup-strategies" element={<WebsiteBackupStrategies />} />
          <Route path="/professional-email-hosting" element={<ProfessionalEmailHosting />} />
          <Route path="/hosting-finder" element={<HostingFinder />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclosure" element={<Disclosure />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
