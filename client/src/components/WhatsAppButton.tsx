import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const pulseTimer = setTimeout(() => setPulse(false), 6000);
    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          <AnimatePresence>
            {pulse && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                className="bg-white text-gray-800 text-sm font-medium px-3 py-2 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap"
              >
                Chat with us on WhatsApp
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href="https://wa.me/971048864215?text=Hello%20SNT%2C%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-whatsapp-float"
            aria-label="Chat on WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-200"
          >
            {pulse && (
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
            )}
            <SiWhatsapp className="w-7 h-7 relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
