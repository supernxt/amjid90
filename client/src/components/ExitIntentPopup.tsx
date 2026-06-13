import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "snt_lead_dismissed";
const RESHOW_DAYS = 7;

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shouldShow = useCallback(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return true;
      const ts = parseInt(raw, 10);
      const daysPassed = (Date.now() - ts) / (1000 * 60 * 60 * 24);
      return daysPassed >= RESHOW_DAYS;
    } catch {
      return true;
    }
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())); } catch {}
  }, []);

  useEffect(() => {
    if (!shouldShow()) return;

    // Exit-intent: mouse leaves viewport from top
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setVisible(true);
        document.removeEventListener("mouseleave", onMouseLeave);
      }
    };

    // Fallback: show after 45 seconds if user hasn't left
    const timer = setTimeout(() => {
      if (!visible) setVisible(true);
    }, 45000);

    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(timer);
    };
  }, [shouldShow, visible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) { setError("Please enter your name and email."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject: "Free IT Audit Request",
          message: `Free IT Audit request from popup.\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        try { localStorage.setItem(STORAGE_KEY, String(Date.now())); } catch {}
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-[9998] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-rose-500 p-6 relative">
                <button
                  onClick={dismiss}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                  data-testid="button-popup-close"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-white" />
                  <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">Limited Offer</span>
                </div>
                <h2 className="text-2xl font-bold text-white leading-tight">
                  Get Your Free IT Infrastructure Audit
                </h2>
                <p className="text-white/80 text-sm mt-1">
                  Worth AED 2,500 — free for UAE businesses this month
                </p>
              </div>

              {/* Body */}
              <div className="p-6">
                {submitted ? (
                  <div className="text-center py-4">
                    <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Request Received!</h3>
                    <p className="text-gray-600 text-sm">Our team will contact you within 24 hours to schedule your free IT audit.</p>
                    <Button className="mt-4 bg-primary text-white" onClick={dismiss} data-testid="button-popup-done">
                      Got it
                    </Button>
                  </div>
                ) : (
                  <>
                    <ul className="space-y-2 mb-5">
                      {[
                        "Network & WiFi performance review",
                        "Security vulnerabilities assessment",
                        "IT cost optimisation recommendations",
                        "Written report delivered within 48h",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your name *"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        data-testid="input-popup-name"
                      />
                      <input
                        type="email"
                        placeholder="Business email *"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        data-testid="input-popup-email"
                      />
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp (optional)"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        data-testid="input-popup-phone"
                      />
                      {error && <p className="text-sm text-red-500">{error}</p>}
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-primary to-rose-500 text-white"
                        data-testid="button-popup-submit"
                      >
                        {loading ? "Sending..." : "Claim Free IT Audit →"}
                      </Button>
                      <p className="text-xs text-gray-400 text-center">No spam. No commitment. UAE businesses only.</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
