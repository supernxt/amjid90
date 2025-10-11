import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import AIVoiceWidget from "@/components/AIVoiceWidget";
import Home from "@/pages/Home";
import AISolutions from "@/pages/AISolutions";
import Pricing from "@/pages/Pricing";
import NotFoundPage from "@/pages/NotFoundPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ai-solutions" component={AISolutions} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/wireless-hotspot" component={NotFoundPage} />
      <Route path="/infrastructure" component={NotFoundPage} />
      <Route path="/website-development" component={NotFoundPage} />
      <Route path="/templates" component={NotFoundPage} />
      <Route path="/case-studies" component={NotFoundPage} />
      <Route path="/support" component={NotFoundPage} />
      <Route path="/about" component={NotFoundPage} />
      <Route path="/contact" component={NotFoundPage} />
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
          {/* <AIVoiceWidget /> */}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
