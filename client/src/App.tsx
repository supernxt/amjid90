import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIVoiceWidget from "@/components/AIVoiceWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";

const Home                = lazy(() => import("@/pages/Home"));
const AISolutions         = lazy(() => import("@/pages/AISolutions"));
const WirelessHotspot     = lazy(() => import("@/pages/WirelessHotspot"));
const Infrastructure      = lazy(() => import("@/pages/Infrastructure"));
const WebsiteDevelopment  = lazy(() => import("@/pages/WebsiteDevelopment"));
const Templates           = lazy(() => import("@/pages/Templates"));
const CaseStudies         = lazy(() => import("@/pages/CaseStudies"));
const Support             = lazy(() => import("@/pages/Support"));
const About               = lazy(() => import("@/pages/About"));
const Contact             = lazy(() => import("@/pages/Contact"));
const EULA                = lazy(() => import("@/pages/EULA"));
const PrivacyPolicy       = lazy(() => import("@/pages/PrivacyPolicy"));
const CCTVSolutions       = lazy(() => import("@/pages/CCTVSolutions"));
const StructuredCabling   = lazy(() => import("@/pages/StructuredCabling"));
const ManagedIT           = lazy(() => import("@/pages/ManagedIT"));
const NetworkInfrastructure = lazy(() => import("@/pages/NetworkInfrastructure"));
const LaborCampWifi       = lazy(() => import("@/pages/LaborCampWifi"));
const Pricing             = lazy(() => import("@/pages/Pricing"));
const Blog                = lazy(() => import("@/pages/Blog"));
const NotFoundPage        = lazy(() => import("@/pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/ai-solutions" component={AISolutions} />
        <Route path="/wireless-hotspot" component={WirelessHotspot} />
        <Route path="/infrastructure" component={Infrastructure} />
        <Route path="/website-development" component={WebsiteDevelopment} />
        <Route path="/templates" component={Templates} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/support" component={Support} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/legal/eula" component={EULA} />
        <Route path="/legal/privacy" component={PrivacyPolicy} />
        <Route path="/cctv-solutions" component={CCTVSolutions} />
        <Route path="/structured-cabling" component={StructuredCabling} />
        <Route path="/managed-it-services" component={ManagedIT} />
        <Route path="/network-infrastructure" component={NetworkInfrastructure} />
        <Route path="/labor-camp-wifi" component={LaborCampWifi} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Router />
            <Footer />
            <AIVoiceWidget />
            <WhatsAppButton />
            <ScrollToTop />
            <CookieConsent />
          </div>
          <Toaster />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
