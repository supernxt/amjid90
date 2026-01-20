import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";

export default function OfferStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden py-6 bg-gradient-to-r from-primary via-rose-500 to-orange-500"
    >
      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-white/20">
              <Gift className="h-5 w-5 text-white" />
            </div>
            <Sparkles className="h-4 w-4 text-white/80 animate-pulse" />
          </div>
          <p className="text-base md:text-lg font-semibold text-center text-white" data-testid="text-offer-strip">
            <span className="font-bold">Special Offer:</span>
            <span className="opacity-90"> Free 1-Year Domain Hosting</span>
            <span className="opacity-60 mx-2">•</span>
            <span className="opacity-90">Free Domain</span>
            <span className="opacity-60 mx-2">•</span>
            <span className="opacity-90">Free Email Hosting</span>
            <span className="opacity-60 hidden md:inline mx-2">•</span>
            <span className="hidden md:inline font-bold">with new website plans</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
