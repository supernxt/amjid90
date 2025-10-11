import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero3D() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            data-testid="badge-hero-tag"
          >
            <Sparkles className="h-4 w-4" />
            AI-Powered Infrastructure & 3D Web Experiences
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight" data-testid="text-hero-headline">
            Transform Your Business
            <br />
            with AI & Technology
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-subtext">
            Agents • Automations • Enterprise Hotspots • Cloud & Networks
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="default" className="text-lg px-8" data-testid="button-talk-ai">
              Talk to AI Assistant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-explore-ai">
              Explore AI Solutions
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
