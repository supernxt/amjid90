import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, ArrowRight, MapPin, PhoneCall, MessageSquare, CheckCircle } from "lucide-react";

const highlights = [
  "AI Agents & Automation",
  "Enterprise Networking",
  "CCTV & Security",
  "Managed IT & AMC",
];

const stats = [
  { value: "500+", label: "Projects Delivered", color: "text-primary" },
  { value: "99.9%", label: "Uptime SLA", color: "text-emerald-600" },
  { value: "24/7", label: "Support", color: "text-blue-600" },
  { value: "GCC", label: "Region Coverage", color: "text-violet-600" },
];

export default function Hero3D() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-6"
              data-testid="badge-location"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="text-sm font-medium text-gray-600">
                Based in Dubai — Serving UAE, KSA, Qatar & Oman
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-gray-900"
              data-testid="text-hero-headline"
            >
              Enterprise AI &{" "}
              <span className="bg-gradient-to-r from-primary via-rose-500 to-orange-500 bg-clip-text text-transparent">
                Technology
              </span>{" "}
              Solutions for GCC
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed"
              data-testid="text-hero-subtext"
            >
              We help enterprises in UAE and GCC modernise operations with AI automation, 
              robust networking, smart security, and cloud infrastructure.
            </motion.p>

            {/* Feature list */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-2 gap-x-4 gap-y-2 mb-10"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-base px-7 bg-gradient-to-r from-primary to-rose-500 hover:opacity-90 shadow-lg shadow-primary/25"
                  data-testid="button-request-consultation"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Request Free Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-7 border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                  data-testid="button-get-quote"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Quick contact row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-5 text-sm text-gray-500"
            >
              <a
                href="tel:+97148864215"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
                data-testid="link-hero-phone"
              >
                <PhoneCall className="h-4 w-4" />
                +971 4 886 4215
              </a>
              <a
                href="https://wa.me/97148864215"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
                data-testid="link-hero-whatsapp"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/40 border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=560&fit=crop&q=80"
                alt="AI Technology Solutions UAE"
                className="w-full h-[480px] object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Caption badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="text-sm font-semibold text-gray-900">
                    AI-Powered Enterprise Operations
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Trusted by 500+ enterprises across UAE & GCC
                  </p>
                </div>
              </div>
            </div>

            {/* Stats grid below image */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="bg-white border border-gray-100 rounded-2xl p-3 text-center shadow-sm"
                >
                  <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
