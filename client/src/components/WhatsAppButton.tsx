import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import { X, Send, MessageCircle } from "lucide-react";

const QUICK_MESSAGES = [
  "I'd like a free IT audit for my business.",
  "I need enterprise WiFi for my hotel/office.",
  "I'm interested in CCTV installation.",
  "Tell me about your managed IT & AMC plans.",
];

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 1500);
    const t2 = setTimeout(() => setPulse(false), 7000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const sendMessage = (msg: string) => {
    window.open(`https://wa.me/97148864215?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Chat panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-green-500 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                      <SiWhatsapp className="w-5 h-5 text-white" />
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
                <div className="px-4 py-4 bg-gray-50">
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-gray-100 max-w-[90%]">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Hi! How can we help you today? Pick a topic or type your own message.
                    </p>
                    <p className="text-xs text-gray-400 mt-1.5">SNT Team</p>
                  </div>
                </div>

                {/* Quick replies */}
                <div className="px-4 pb-4 bg-gray-50 space-y-2">
                  {QUICK_MESSAGES.map((msg) => (
                    <button
                      key={msg}
                      onClick={() => sendMessage(msg)}
                      className="w-full text-left text-sm px-3.5 py-2.5 rounded-xl border border-green-200 bg-white text-gray-700 hover:bg-green-50 hover:border-green-400 transition-all flex items-center justify-between gap-2 group"
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
                    className="mt-1 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-3 rounded-xl transition-colors"
                    data-testid="link-whatsapp-open"
                  >
                    <SiWhatsapp className="w-4 h-4" />
                    Open WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tooltip when closed */}
          <AnimatePresence>
            {!open && pulse && (
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="bg-white text-gray-800 text-sm font-medium px-3.5 py-2 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap"
              >
                Chat with us on WhatsApp
              </motion.div>
            )}
          </AnimatePresence>

          {/* FAB button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => { setOpen(o => !o); setPulse(false); }}
            data-testid="button-whatsapp-fab"
            aria-label="Chat on WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition-colors duration-200"
          >
            {pulse && !open && (
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
            )}
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <MessageCircle className="w-6 h-6 relative z-10" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <SiWhatsapp className="w-7 h-7 relative z-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
