import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";

export default function OfferStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden py-5 md:py-6"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/15 to-primary/5" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/20">
              <Gift className="h-5 w-5 text-primary" />
            </div>
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          </div>
          <p className="text-base md:text-lg font-semibold text-center" data-testid="text-offer-strip">
            <span className="text-primary font-bold">Special Offer:</span>
            <span className="text-white/90"> Free 1-Year Domain Hosting</span>
            <span className="text-white/50 mx-2">•</span>
            <span className="text-white/90">Free Domain</span>
            <span className="text-white/50 mx-2">•</span>
            <span className="text-white/90">Free Email Hosting</span>
            <span className="text-white/50 hidden md:inline mx-2">•</span>
            <span className="text-primary hidden md:inline">with new website plans</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
