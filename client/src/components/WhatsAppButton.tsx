import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import { X, Send, MessageCircle, Phone } from "lucide-react";
import { useCookieBanner } from "@/hooks/useCookieBanner";

const QUICK_MESSAGES = [
  "I'd like a free IT audit for my business.",
  "I need enterprise WiFi for my hotel/office.",
  "Tell me about your managed IT & AMC plans.",
  "I need n8n automation for my business.",
];

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);
  const cookieBannerVisible = useCookieBanner();

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 1500);
    const t2 = setTimeout(() => setPulse(false), 7000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const sendMessage = (msg: string) => {
    window.open(`https://wa.me/97148864215?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const bottomClass = cookieBannerVisible
    ? "bottom-36 sm:bottom-32 md:bottom-6"
    : "bottom-6";

  return (
    <AnimatePresence>
      {visible && (
        /*
         * Pinned BOTTOM-LEFT so it never touches the ElevenLabs widget
         * which is always anchored at bottom-right by the provider.
         */
        <div className={`fixed left-4 z-50 flex flex-col items-start gap-3 transition-all duration-500 ${bottomClass}`}>

          {/* Chat panel — opens above the buttons, aligned to the left */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 sm:w-80 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-green-500 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <SiWhatsapp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm leading-tight">Super Next Technologies</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-200 animate-pulse" />
                        <p className="text-green-100 text-xs">Typically replies in minutes</p>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Chat bubble */}
                <div className="px-4 py-3 bg-gray-50">
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-gray-100 max-w-[90%]">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Hi! How can we help you today? Pick a topic or type your own message.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">SNT Team</p>
                  </div>
                </div>

                {/* Quick replies */}
                <div className="px-4 pb-4 bg-gray-50 space-y-1.5">
                  {QUICK_MESSAGES.map((msg) => (
                    <button
                      key={msg}
                      onClick={() => sendMessage(msg)}
                      className="w-full text-left text-sm px-3 py-2 rounded-xl border border-green-200 bg-white text-gray-700 hover:bg-green-50 hover:border-green-400 transition-all flex items-center justify-between gap-2 group"
                      data-testid="button-whatsapp-quick"
                    >
                      <span className="leading-snug">{msg}</span>
                      <Send className="w-3.5 h-3.5 text-green-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}

                  <a
                    href="https://wa.me/97148864215"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                    data-testid="link-whatsapp-open"
                  >
                    <SiWhatsapp className="w-4 h-4" />
                    Open WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FAB stack: WhatsApp above, Call below */}
          <div className="flex flex-col items-center gap-2.5">
            {/* WhatsApp FAB */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={() => { setOpen(o => !o); setPulse(false); }}
              data-testid="button-whatsapp-fab"
              aria-label="Chat on WhatsApp"
              className="relative flex items-center justify-center w-[52px] h-[52px] rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition-colors duration-200"
            >
              {pulse && !open && (
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
              )}
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <MessageCircle className="w-5 h-5 relative z-10" />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <SiWhatsapp className="w-6 h-6 relative z-10" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Call FAB */}
            <motion.a
              href="tel:048864215"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.08 }}
              data-testid="button-float-call"
              aria-label="Call us"
              className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white border-2 border-gray-200 text-primary shadow-xl hover:border-primary hover:shadow-2xl transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
            </motion.a>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
