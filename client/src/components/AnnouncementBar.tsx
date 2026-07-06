import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const MESSAGES = [
  "Test Your Office Network Speed",
  "Test Your Hotel Internet Speed",
  "Test Your Accommodation Wi-Fi Speed",
  "Check Your Internet Performance",
  "Find the Fastest DNS for Your Network",
  "Analyse Your Network Latency",
  "Diagnose Your Internet Connection",
];

const SESSION_KEY = "snt_bar_dismissed";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(() =>
    typeof sessionStorage !== "undefined" && !!sessionStorage.getItem(SESSION_KEY)
  );
  const [msgIdx, setMsgIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setMsgIdx(i => (i + 1) % MESSAGES.length);
        setFading(false);
      }, 350);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div
      className="w-full bg-slate-900 border-b border-slate-700/60"
      role="banner"
      aria-label="Site announcements"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-center gap-2 sm:gap-5 flex-wrap">

        {/* ── Network Tool banner ── */}
        <a
          href="/analyzer"
          className="flex items-center gap-1.5 sm:gap-2 group min-w-0"
          aria-label="Free network analyser tool"
        >
          <span
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 shrink-0"
            style={{ animation: "sntPulse 1.6s ease-in-out infinite" }}
            aria-hidden="true"
          />
          <span className="text-red-400 font-bold text-[10px] sm:text-[11px] uppercase tracking-widest shrink-0 whitespace-nowrap">
            Free Network Tool
          </span>
          <span
            className="text-white font-semibold text-xs sm:text-sm truncate max-w-[140px] sm:max-w-none"
            style={{ opacity: fading ? 0 : 1, transition: "opacity 0.35s ease" }}
          >
            {MESSAGES[msgIdx]}
          </span>
          <span className="text-slate-400 text-xs group-hover:text-white transition-colors shrink-0">
            →
          </span>
        </a>

        {/* ── Divider (desktop only) ── */}
        <div className="hidden sm:block w-px h-4 bg-slate-600 shrink-0" aria-hidden="true" />

        {/* ── Need Help / WhatsApp banner ── */}
        <a
          href="https://wa.me/97148864215"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 sm:gap-2 group shrink-0"
          aria-label="Chat with us on WhatsApp"
        >
          <SiWhatsapp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-400 shrink-0" aria-hidden="true" />
          <span className="text-slate-300 font-medium text-xs sm:text-sm whitespace-nowrap">Need Help?</span>
          <span className="text-green-400 font-semibold text-xs sm:text-sm group-hover:text-green-300 transition-colors whitespace-nowrap">
            Chat on WhatsApp →
          </span>
        </a>

        {/* ── Dismiss ── */}
        <button
          onClick={dismiss}
          aria-label="Dismiss announcements"
          className="ml-1 sm:ml-2 shrink-0 text-slate-500 hover:text-white transition-colors rounded p-0.5"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Keyframe defined inline so the bar is self-contained */}
      <style>{`@keyframes sntPulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
    </div>
  );
}
