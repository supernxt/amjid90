import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function OfferStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 border-y border-primary/30 py-6"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Gift className="h-6 w-6 text-primary" />
          <p className="text-lg md:text-xl font-semibold text-center" data-testid="text-offer-strip">
            <span className="text-primary">Special Offer:</span> Free 1-Year Domain Hosting • Free Domain • Free Email Hosting with new website plans
          </p>
        </div>
      </div>
    </motion.div>
  );
}
