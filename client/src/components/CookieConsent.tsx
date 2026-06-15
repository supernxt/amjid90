import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("snt_cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.classList.add("cookie-banner-visible");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("cookie-banner-visible");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.classList.remove("cookie-banner-visible");
      document.body.style.overflow = "";
    };
  }, [visible]);

  const accept = () => {
    localStorage.setItem("snt_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("snt_cookie_consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={decline}
          />

          {/* Centered modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/10 to-rose-50 px-6 py-5 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-tight">Cookie Preferences</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Super Next Technologies</p>
                  </div>
                </div>
                <button
                  onClick={decline}
                  aria-label="Close"
                  data-testid="button-cookie-close"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <div className="flex gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We use cookies to improve your experience, analyse site traffic, and personalise content. By clicking <strong>Accept All</strong>, you consent to our use of cookies as described in our{" "}
                    <Link href="/legal/privacy" className="text-primary underline underline-offset-2 hover:no-underline font-medium">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={decline}
                    data-testid="button-cookie-decline"
                    className="border-gray-200 text-gray-600 w-full"
                  >
                    Decline
                  </Button>
                  <Button
                    onClick={accept}
                    data-testid="button-cookie-accept"
                    className="bg-primary text-white w-full"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
