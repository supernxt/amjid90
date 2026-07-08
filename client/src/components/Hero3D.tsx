import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, ArrowRight, MapPin, PhoneCall, MessageSquare, CheckCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const highlights = [
  { en: "AI Agents & Automation", ar: "وكلاء الذكاء الاصطناعي والأتمتة" },
  { en: "Enterprise Networking", ar: "الشبكات المؤسسية" },
  { en: "Structured Cabling & Fiber", ar: "الكابلات المنظمة والألياف الضوئية" },
  { en: "Managed IT & AMC", ar: "خدمات تقنية المعلومات المُدارة" },
];

const stats = [
  { value: "500+", label: "Projects Delivered", color: "text-primary" },
  { value: "99.9%", label: "Uptime SLA", color: "text-emerald-400" },
  { value: "24/7", label: "Support", color: "text-blue-400" },
  { value: "UAE", label: "Region Coverage", color: "text-violet-400" },
];

export default function Hero3D() {
  const { t, isAr } = useLang();

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* ── Full-screen video background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Dark gradient overlay for text readability ── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(135deg, rgba(2,6,23,0.80) 0%, rgba(15,23,42,0.65) 50%, rgba(2,6,23,0.55) 100%)",
        }}
      />

      {/* ── Red accent glow (brand colour) ── */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          zIndex: 1,
          background: "radial-gradient(circle, rgba(255,51,51,0.15) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24" style={{ zIndex: 2 }}>
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6"
              data-testid="badge-location"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="text-sm font-medium text-white/90">
                {t("Based in Dubai, UAE", "مقرنا في دبي، الإمارات")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white"
              data-testid="text-hero-headline"
            >
              {isAr ? (
                <>
                  حلول{" "}
                  <span className="bg-gradient-to-r from-primary via-rose-400 to-orange-400 bg-clip-text text-transparent">
                    الذكاء الاصطناعي
                  </span>{" "}
                  والتقنية المؤسسية للإمارات
                </>
              ) : (
                <>
                  Enterprise AI &{" "}
                  <span className="bg-gradient-to-r from-primary via-rose-400 to-orange-400 bg-clip-text text-transparent">
                    Technology
                  </span>{" "}
                  Solutions for UAE
                </>
              )}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed"
              data-testid="text-hero-subtext"
            >
              {t(
                "We help enterprises across UAE modernise operations with AI automation, robust networking, smart security, and cloud infrastructure.",
                "نساعد المؤسسات في الإمارات على تحديث عملياتها بالذكاء الاصطناعي والشبكات المتقدمة والأمان الذكي والبنية السحابية."
              )}
            </motion.p>

            {/* Feature list */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-2 gap-x-4 gap-y-2 mb-10"
            >
              {highlights.map((item) => (
                <li key={item.en} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  {isAr ? item.ar : item.en}
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
                  className="text-base px-7 bg-gradient-to-r from-primary to-rose-500 hover:opacity-90 shadow-lg shadow-primary/40 text-white"
                  data-testid="button-request-consultation"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  {t("Request Free Consultation", "طلب استشارة مجانية")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-7 border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-white/5 backdrop-blur-sm"
                  data-testid="button-get-quote"
                >
                  {t("Get a Quote", "احصل على عرض سعر")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Quick contact row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-5 text-sm text-white/60"
            >
              <a
                href="tel:+97148864215"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                data-testid="link-hero-phone"
              >
                <PhoneCall className="h-4 w-4" />
                +971 4 886 4215
              </a>
              <a
                href="https://wa.me/97148864215"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                data-testid="link-hero-whatsapp"
              >
                <MessageSquare className="h-4 w-4" />
                {t("WhatsApp Us", "تواصل عبر واتساب")}
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Column — stats panel (replaces static image) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-center"
                >
                  <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-sm text-white/60 mt-1 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5"
            >
              <p className="text-white font-semibold text-sm mb-1">
                AI-Powered Enterprise Operations
              </p>
              <p className="text-white/55 text-xs leading-relaxed">
                Trusted by 500+ enterprises across UAE — Dubai, Abu Dhabi, Sharjah, and all seven emirates.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{ zIndex: 2 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
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
