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
  { icon: Radio,     title: "Enterprise Wireless Hotspot",   desc: "Managed enterprise Wi-Fi for offices, hotels, malls, and venues across GCC.",          path: "/wireless-hotspot",      color: "bg-blue-500",   tag: "Networking" },
  { icon: Server,    title: "Cloud Infrastructure",          desc: "Cloud servers, VPS hosting, network security, and 24/7 infrastructure management.",     path: "/infrastructure",        color: "bg-sky-500",    tag: "Cloud" },
  { icon: Globe,     title: "Website Development",           desc: "Custom websites, e-commerce, and SEO-optimised web apps for GCC businesses.",          path: "/website-development",   color: "bg-emerald-500",tag: "Digital" },
  { icon: Camera,    title: "CCTV Solutions",                desc: "IP cameras, NVR/DVR, video analytics, and full CCTV installation across UAE & GCC.",   path: "/cctv-solutions",        color: "bg-red-500",    tag: "Security" },
  { icon: Cable,     title: "Structured Cabling",            desc: "TIA/ISO-certified Cat6, Cat6A, and fiber optic cabling for data centres & offices.",   path: "/structured-cabling",    color: "bg-amber-500",  tag: "Infrastructure" },
  { icon: Headphones,title: "Managed IT & AMC",              desc: "24/7 IT support, AMC contracts, helpdesk, server management, and NOC monitoring.",      path: "/managed-it-services",   color: "bg-blue-600",   tag: "IT Services" },
  { icon: Network,   title: "Network Infrastructure",        desc: "Cisco, Juniper & MikroTik — LAN/WAN design, firewalls, VPN, and NOC services.",        path: "/network-infrastructure",color: "bg-indigo-600", tag: "Networking" },
  { icon: Wifi,      title: "Labor Camp & Hotel WiFi",       desc: "High-density managed WiFi for worker camps, hotels, and construction sites.",          path: "/labor-camp-wifi",       color: "bg-emerald-600",tag: "Wireless" },
];

const whyUs = [
  { icon: Shield,  title: "ISO 27001 Certified Security",     desc: "Enterprise-grade security architecture built on internationally certified standards." },
  { icon: Clock,   title: "24/7 Proactive Monitoring",        desc: "Round-the-clock NOC and helpdesk ensures zero downtime for your critical systems." },
  { icon: Award,   title: "Certified Engineers",              desc: "Cisco, Juniper, Microsoft, and vendor-certified engineers for every project." },
  { icon: Users,   title: "500+ Enterprise Clients",          desc: "Trusted by leading enterprises, hotels, hospitals, and government entities across GCC." },
  { icon: Zap,     title: "Single-Vendor Convenience",        desc: "AI, networking, CCTV, cabling, and IT — all from one accountable partner." },
  { icon: Star,    title: "GCC Regional Coverage",            desc: "Offices and field teams operating across UAE, Saudi Arabia, Qatar, and Oman." },
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
  description: "Complete enterprise IT and technology services in UAE, Saudi Arabia, Qatar, and Oman",
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
        description="Super Next Technologies — AI Solutions, Enterprise Wireless, CCTV, Fiber Optic Cabling, Managed IT, Cloud & Website Development in UAE, Saudi Arabia, Qatar & Oman. Based in Dubai."
        keywords="AI solutions Dubai, AI agents UAE, enterprise IT services, CCTV Dubai, structured cabling UAE, managed IT services Dubai, wireless hotspot UAE, cloud infrastructure GCC, website development Saudi Arabia, network infrastructure UAE, Super Next Technologies"
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
              End-to-end enterprise technology across UAE, Saudi Arabia, Qatar, and Oman — all from one partner.
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
              The Trusted IT Partner for GCC
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

      {/* 7. Lead Generation / Consultation CTA */}
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
                    "Serving Dubai, Abu Dhabi, Riyadh, Doha & Muscat",
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
