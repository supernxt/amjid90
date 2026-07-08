import { Link } from "wouter";
import { motion } from "framer-motion";
import VideoBackground from "@/components/VideoBackground";
import Hero3D from "@/components/Hero3D";
import TrustBar from "@/components/TrustBar";
import VideoSlider from "@/components/VideoSlider";
import OfferStrip from "@/components/OfferStrip";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Bot, Radio, Server, Globe, Camera, Cable,
  Headphones, Network, Wifi, CheckCircle, Sparkles,
  Building2, Hotel, Stethoscope, GraduationCap, ShoppingBag,
  Factory, Landmark, Tent, PhoneCall, MessageSquare, Mail,
  Shield, Clock, Award, Users, Zap, Star,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────── */

const allServices = [
  { icon: Bot,       title: "AI Solutions & Automation",     desc: "AI agents, chatbots, n8n automation, WhatsApp bots, and intelligent workflows.",       path: "/ai-solutions",          color: "bg-violet-500", tag: "AI & Digital" },
  { icon: Radio,     title: "Enterprise Wireless Hotspot",   desc: "Managed enterprise Wi-Fi for offices, hotels, malls, and venues across UAE.",          path: "/wireless-hotspot",      color: "bg-blue-500",   tag: "Networking" },
  { icon: Server,    title: "Cloud Infrastructure",          desc: "Cloud servers, VPS hosting, network security, and 24/7 infrastructure management.",     path: "/infrastructure",        color: "bg-sky-500",    tag: "Cloud" },
  { icon: Globe,     title: "Website Development",           desc: "Custom websites, e-commerce, and SEO-optimised web apps for UAE businesses.",          path: "/website-development",   color: "bg-emerald-500",tag: "Digital" },
  { icon: Camera,    title: "CCTV Solutions",                desc: "IP cameras, NVR/DVR, video analytics, and full CCTV installation across UAE.",          path: "/cctv-solutions",        color: "bg-red-500",    tag: "Security" },
  { icon: Cable,     title: "Structured Cabling",            desc: "TIA/ISO-certified Cat6, Cat6A, and fiber optic cabling for data centres & offices.",   path: "/structured-cabling",    color: "bg-amber-500",  tag: "Infrastructure" },
  { icon: Headphones,title: "Managed IT & AMC",              desc: "24/7 IT support, AMC contracts, helpdesk, server management, and NOC monitoring.",      path: "/managed-it-services",   color: "bg-blue-600",   tag: "IT Services" },
  { icon: Network,   title: "Network Infrastructure",        desc: "Cisco, Juniper & MikroTik — LAN/WAN design, firewalls, VPN, and NOC services.",        path: "/network-infrastructure",color: "bg-indigo-600", tag: "Networking" },
  { icon: Wifi,      title: "Labor Camp & Hotel WiFi",       desc: "High-density managed WiFi for worker camps, hotels, and construction sites.",          path: "/labor-camp-wifi",       color: "bg-emerald-600",tag: "Wireless" },
];

const whyUs = [
  { icon: Shield,  title: "ISO 27001 Certified Security",     desc: "Enterprise-grade security architecture built on internationally certified standards." },
  { icon: Clock,   title: "24/7 Proactive Monitoring",        desc: "Round-the-clock NOC and helpdesk ensures zero downtime for your critical systems." },
  { icon: Award,   title: "Certified Engineers",              desc: "Cisco, Juniper, Microsoft, and vendor-certified engineers for every project." },
  { icon: Users,   title: "500+ Enterprise Clients",          desc: "Trusted by leading enterprises, hotels, hospitals, and government entities across UAE." },
  { icon: Zap,     title: "Single-Vendor Convenience",        desc: "AI, networking, CCTV, cabling, and IT — all from one accountable partner." },
  { icon: Star,    title: "UAE-Wide Coverage",                desc: "Field teams operating across all seven UAE emirates — Dubai, Abu Dhabi, Sharjah, and beyond." },
];

const industries = [
  { icon: Building2,    label: "Real Estate" },
  { icon: Hotel,        label: "Hospitality" },
  { icon: Stethoscope,  label: "Healthcare" },
  { icon: GraduationCap,label: "Education" },
  { icon: ShoppingBag,  label: "Retail" },
  { icon: Factory,      label: "Manufacturing" },
  { icon: Landmark,     label: "Government" },
  { icon: Tent,         label: "Labor Camps" },
];

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Super Next Technologies Services",
  description: "Complete enterprise IT and technology services in UAE",
  numberOfItems: 9,
  itemListElement: allServices.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://supernxt.com${s.path}`,
    description: s.desc,
  })),
};

/* ─── Component ─────────────────────────────────────────── */

export default function Home() {
  return (
    <VideoBackground variant="default">
      <SEO
        title="Super Next Technologies | AI Solutions & Enterprise IT Services UAE"
        description="AI agents, enterprise WiFi, CCTV, managed IT & structured cabling for UAE businesses. 500+ clients. Free site survey. 24/7 support. Super Next Technologies, Dubai."
        keywords="AI solutions Dubai, AI agents UAE, enterprise IT services UAE, CCTV Dubai, structured cabling UAE, managed IT services Dubai, wireless hotspot UAE, cloud infrastructure UAE, website development UAE, network infrastructure UAE, Super Next Technologies"
        canonical="https://supernxt.com/"
        schema={homeSchema}
      />

      {/* 1. Hero */}
      <Hero3D />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. AI Solutions Showcase */}
      <section className="px-4 md:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">AI-First Innovation</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-900">
              Our AI Agent Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Intelligent automation, 24/7 AI assistants, and smart workflows that cut costs and boost productivity.
            </p>
          </motion.div>
          <VideoSlider />
          <div className="text-center mt-8">
            <Link href="/ai-solutions">
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:border-primary hover:text-primary" data-testid="button-explore-ai">
                Explore AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. All Services Grid */}
      <section className="px-4 md:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Complete Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-900">
              All Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end enterprise technology across all UAE emirates — all from one partner.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allServices.map((service, i) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={service.path}>
                  <div
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group h-full"
                    data-testid={`card-service-${i}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-11 h-11 ${service.color} rounded-xl flex items-center justify-center shrink-0`}>
                        <service.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">{service.tag}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                      Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose SNT */}
      <section className="px-4 md:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why Super Next Technologies</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-900">
              The Trusted IT Partner for UAE
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From AI to physical infrastructure — we deliver, monitor, and maintain everything under one contract.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-primary/20 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="px-4 md:px-8 py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3 text-gray-900">
              Serving Every Sector
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Specialised technology solutions built for the unique compliance, scale, and operational demands of each industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ind.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials */}
      <section className="px-4 md:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Client Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-900">
              Trusted by UAE Enterprises
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From hospitality to healthcare — here's what our clients say about working with SNT.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "SNT deployed our entire hotel Wi-Fi across 312 rooms in under a week. Zero downtime since go-live. Exceptional team.",
                name: "Mohammed Al Rashid",
                role: "IT Director",
                company: "Luxury Hotel Group, Dubai",
                rating: 5,
                initial: "M",
                color: "bg-blue-500",
              },
              {
                quote: "Their AI automation cut our manual invoicing time by 80%. The WhatsApp bot alone handles 200+ customer queries a day without any human intervention.",
                name: "Priya Nair",
                role: "Operations Manager",
                company: "Retail Chain, Abu Dhabi",
                rating: 5,
                initial: "P",
                color: "bg-violet-500",
              },
              {
                quote: "We needed CCTV, structured cabling, and managed IT — all from one vendor. SNT delivered on time, on budget, across all our UAE branches.",
                name: "Ahmed Hassan",
                role: "CEO",
                company: "Real Estate Developer, Sharjah",
                rating: 5,
                initial: "A",
                color: "bg-emerald-500",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col gap-5 hover:shadow-md hover:border-primary/20 transition-all"
                data-testid={`card-testimonial-${i}`}
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Google Reviews */}
      <section className="px-4 md:px-8 py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <svg viewBox="0 0 24 24" className="w-7 h-7" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-xl font-bold text-gray-900">Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <span className="text-gray-500 text-sm">/ 5 · 87 reviews</span>
              </div>
            </div>
            <a
              href="https://g.page/r/supernxt/review"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
              data-testid="link-google-review"
            >
              <Button variant="outline" className="border-gray-300 text-gray-700 gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Write a Review
              </Button>
            </a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Khalid Al Mansoori", role: "Hotel GM, Dubai", time: "2 weeks ago", text: "SNT installed enterprise WiFi across all 180 rooms. The team was professional, fast, and the signal quality is outstanding. Zero complaints from guests since go-live.", rating: 5 },
              { name: "Sarah Thompson", role: "Operations Director, Sharjah", time: "1 month ago", text: "Their AI WhatsApp bot has transformed our customer service. It handles 300+ queries per day automatically. The ROI was visible within the first month.", rating: 5 },
              { name: "Ravi Menon", role: "IT Manager, Abu Dhabi", time: "3 weeks ago", text: "Structured cabling and CCTV done across 3 floors. Very neat work, properly labelled, documented. Their AMC team is responsive — issues get fixed same day.", rating: 5 },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all"
                data-testid={`card-review-${i}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.role}</p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">"{review.text}"</p>
                <p className="text-xs text-gray-400">{review.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Lead Generation / Consultation CTA */}
      <section className="px-4 md:px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-5">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Free Consultation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Talk to our experts — get a free technology assessment, tailored proposal, and transparent pricing within 24 hours.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Free site survey & technology audit",
                    "Custom proposal within 24 hours",
                    "No-commitment consultation",
                    "Serving Dubai, Abu Dhabi, Sharjah, Ajman & Ras Al Khaimah",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30"
                      data-testid="button-cta-consultation"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Request a Consultation
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white bg-white/10 hover:bg-white/20"
                      data-testid="button-cta-quote"
                    >
                      Get a Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Contact options */}
              <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[220px]">
                <a
                  href="tel:+97148864215"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-4 border border-white/10"
                  data-testid="link-cta-phone"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <PhoneCall className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Call us</p>
                    <p className="font-semibold text-white text-sm">+971 4 886 4215</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/97148864215"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-4 border border-white/10"
                  data-testid="link-cta-whatsapp"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">WhatsApp</p>
                    <p className="font-semibold text-white text-sm">Chat with us now</p>
                  </div>
                </a>
                <a
                  href="mailto:hello@supernxt.com"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-4 border border-white/10"
                  data-testid="link-cta-email"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Email</p>
                    <p className="font-semibold text-white text-sm">hello@supernxt.com</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Offer Strip */}
      <OfferStrip />
    </VideoBackground>
  );
}
