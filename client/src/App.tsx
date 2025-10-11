import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIVoiceWidget from "@/components/AIVoiceWidget";
import Home from "@/pages/Home";
import AISolutions from "@/pages/AISolutions";
import WirelessHotspot from "@/pages/WirelessHotspot";
import Infrastructure from "@/pages/Infrastructure";
import WebsiteDevelopment from "@/pages/WebsiteDevelopment";
import Templates from "@/pages/Templates";
import CaseStudies from "@/pages/CaseStudies";
import Support from "@/pages/Support";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Pricing from "@/pages/Pricing";
import NotFoundPage from "@/pages/NotFoundPage";

function Router() {
  return (
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
      <Route path="/pricing" component={Pricing} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Router />
          <Footer />
          <AIVoiceWidget />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
