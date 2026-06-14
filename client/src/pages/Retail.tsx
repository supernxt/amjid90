import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { ShoppingBag, Wifi, Camera, Cable, Bot, Server, Headphones, CheckCircle, ArrowRight, Phone, MessageSquare, Shield, BarChart3 } from "lucide-react";

const services = [
  { icon: Wifi, title: "Mall & Retail WiFi", desc: "High-density guest WiFi for shopping malls, supermarkets, and retail chains — branded portal, analytics dashboard, and marketing integration.", color: "bg-blue-50 text-blue-600" },
  { icon: Camera, title: "Retail CCTV & Loss Prevention", desc: "IP surveillance covering store floors, entrances, stockrooms, and car parks. Integrated video analytics for footfall counting and heat mapping.", color: "bg-red-50 text-red-600" },
  { icon: Bot, title: "AI Customer Engagement", desc: "WhatsApp chatbots, loyalty program automation, and AI-powered customer service for retail chains and mall operators.", color: "bg-violet-50 text-violet-600" },
  { icon: Cable, title: "Structured Cabling & POS", desc: "Reliable Cat6A cabling infrastructure for POS terminals, digital signage, kiosks, and back-office systems across all retail units.", color: "bg-amber-50 text-amber-600" },
  { icon: BarChart3, title: "WiFi Analytics & Footfall", desc: "Real-time footfall data, visitor journey analytics, dwell time, and repeat visitor tracking — all via your WiFi infrastructure.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Shield, title: "PCI-DSS Compliant Networks", desc: "Secure payment network segmentation and PCI-DSS compliance for retail stores handling card payments across multiple terminals.", color: "bg-orange-50 text-orange-600" },
  { icon: Server, title: "Digital Signage Infrastructure", desc: "Network and server infrastructure for LED display walls, interactive kiosks, wayfinding systems, and promotional screens.", color: "bg-cyan-50 text-cyan-600" },
  { icon: Headphones, title: "Retail IT AMC", desc: "Rapid-response IT maintenance for retail — same-day on-site for critical issues like POS downtime or WiFi outages.", color: "bg-pink-50 text-pink-600" },
];

const faqs = [
  { q: "Can you deploy WiFi across an entire shopping mall?", a: "Yes. We specialize in high-density WiFi for large retail environments — covering all common areas, food courts, retail units, and car parks. We provide branded captive portals with mall branding, visitor analytics, and dwell-time reporting for mall management." },
  { q: "How does WiFi analytics help retail businesses?", a: "Our WiFi analytics platform tracks footfall (visitor count), heat maps (busiest areas), average dwell time, and repeat visitor rates. This data helps optimize store layouts, staff scheduling, and marketing campaigns. Mall operators use it for lease valuations and tenant reports." },
  { q: "Can you help with loss prevention CCTV for retail?", a: "Yes. We deploy IP camera systems with video analytics that include automated alerts for unusual behaviour, blind-spot coverage, and integration with EAS (electronic article surveillance) systems. High-resolution cameras cover entrances, shop floors, stockrooms, and till areas." },
  { q: "Do you handle PCI-DSS compliance for retail payment networks?", a: "Yes. We configure cardholder data environments (CDE) with proper network segmentation, firewall rules, and documentation to support PCI-DSS compliance audits for retail stores and F&B outlets with multiple POS terminals." },
  { q: "Can you handle multi-store rollouts across the UAE?", a: "Yes. We are experienced in managing multi-site retail IT rollouts — including uniform cabling standards, centralised WiFi management, bulk CCTV deployments, and single-contract AMC support across all UAE locations." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Retail & Mall IT Solutions UAE",
  provider: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
  description: "Enterprise WiFi, CCTV, AI automation, analytics, and managed IT for shopping malls and retail businesses across UAE.",
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
};

export default function Retail() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="IT Solutions for Retail & Shopping Malls UAE | WiFi, CCTV & Analytics | SNT"
        description="Enterprise IT for retail and shopping malls in UAE — guest WiFi with analytics, CCTV loss prevention, AI chatbots, PCI-DSS compliance, and 24/7 managed IT. Free site survey across all UAE."
        canonical="https://supernxt.com/retail"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <ShoppingBag className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Retail & Shopping Malls</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                IT Solutions for{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Retail & Malls</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Super Next Technologies delivers enterprise WiFi with analytics, CCTV loss prevention, AI automation, and managed IT for shopping malls, retail chains, and F&B brands across the UAE.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Branded guest WiFi", "Footfall analytics", "Loss prevention CCTV", "PCI-DSS compliant", "Multi-store rollouts", "Same-day IT support"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-retail-cta">
                    Request Free Site Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-retail-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1519567770579-c2fc5836b54d?w=800&h=500&fit=crop&q=80"
                  alt="Retail and Mall IT Solutions UAE"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Serving UAE retail & mall operators</p>
                    <p className="text-xs text-gray-500 mt-0.5">Shopping Malls · Supermarkets · Retail Chains · F&B Brands</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Retail Technology Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Complete IT solutions for modern retail — from guest WiFi to loss prevention and AI automation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="Retail IT — FAQs" subtitle="Common questions from mall operators and retail IT managers." faqs={faqs} ctaText="Request Retail IT Survey" />

      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Upgrade Your Retail Technology</h2>
          <p className="text-gray-600 mb-6">Our retail IT specialists will visit your store or mall and deliver a complete technology proposal — at no cost.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact"><Button className="bg-primary text-white" data-testid="button-retail-final-cta">Book Free Site Survey</Button></Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-retail-whatsapp"><MessageSquare className="mr-2 h-4 w-4" /> WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
