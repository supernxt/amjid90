import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";
import { useLocation } from "wouter";
import { Sparkles, ArrowRight, Zap, Globe, Shield, Cpu } from "lucide-react";

const floatingIcons = [
  { Icon: Zap, delay: 0, x: "10%", y: "20%" },
  { Icon: Globe, delay: 0.5, x: "85%", y: "25%" },
  { Icon: Shield, delay: 1, x: "15%", y: "70%" },
  { Icon: Cpu, delay: 1.5, x: "80%", y: "65%" },
];

export default function Hero3D() {
  const [, setLocation] = useLocation();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{ 
            delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 backdrop-blur-md"
            data-testid="badge-hero-tag"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI-Powered Infrastructure & 3D Web Experiences
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight"
              data-testid="text-hero-headline"
            >
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                Business
              </span>
              <br />
              <span className="bg-gradient-to-r from-white/80 via-white to-white bg-clip-text text-transparent">
                with AI & Technology
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p 
            className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            data-testid="text-hero-subtext"
          >
            <span className="text-primary font-medium">Agents</span> • 
            <span className="text-foreground/70"> Automations</span> • 
            <span className="text-accent font-medium"> Enterprise Hotspots</span> • 
            <span className="text-foreground/70"> Cloud & Networks</span>
          </motion.p>

          {/* Stats Row */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-16 py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "24/7", label: "AI Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/25 group"
              onClick={openAIChat} 
              data-testid="button-talk-ai"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Talk to AI Assistant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/30 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50"
              onClick={() => setLocation('/ai-solutions')} 
              data-testid="button-explore-ai"
            >
              Explore AI Solutions
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
