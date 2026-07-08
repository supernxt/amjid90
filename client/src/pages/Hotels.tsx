import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Wifi, Cable, Headphones, Bot, Star, CheckCircle, ArrowRight, Phone, MessageSquare, Shield, Zap } from "lucide-react";

const services = [
  { icon: Wifi, title: "Hotel Enterprise WiFi", desc: "High-density WiFi covering every room, lobby, pool, and conference hall. Guest portal with branding, bandwidth controls, and usage analytics.", color: "bg-blue-50 text-blue-600" },
  { icon: Bot, title: "AI Concierge & Chatbot", desc: "WhatsApp AI assistant for room service orders, booking enquiries, local recommendations, and complaint logging — 24/7 with zero wait time.", color: "bg-violet-50 text-violet-600" },
  { icon: Cable, title: "Structured Cabling", desc: "Cat6A and fiber backbone for your entire property — linking PMS, POS, IPTV, door access, and WiFi on a single reliable infrastructure.", color: "bg-amber-50 text-amber-600" },
  { icon: Headphones, title: "IT AMC Support", desc: "Monthly/annual maintenance contracts with 24/7 helpdesk, on-site SLA, and a dedicated account manager for your property.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Shield, title: "Network Security", desc: "Firewall configuration, guest/staff VLAN separation, PCI-DSS compliance for payment systems, and regular security audits.", color: "bg-cyan-50 text-cyan-600" },
];

const stats = [
  { value: "500+", label: "Hotel rooms connected" },
  { value: "5★", label: "Property deployments" },
  { value: "24/7", label: "Guest WiFi uptime SLA" },
  { value: "4hr", label: "On-site response" },
];

const faqs = [
  {
    q: "How do you handle WiFi for large hotels with hundreds of rooms?",
    a: "We design high-density WiFi using enterprise access points (Cisco, Ruckus, or Ubiquiti) with proper RF planning, channel separation, and load balancing. Every room, corridor, pool area, gym, and conference hall gets full signal coverage. We guarantee minimum speeds per connected device.",
  },
  {
    q: "Can you set up a branded guest WiFi portal for our hotel?",
    a: "Yes. We deploy captive portal guest WiFi with your hotel's branding, logo, and room-number login. Guests can connect without a password by entering their room number and surname — just like 5-star international chains. Includes usage analytics and bandwidth management per guest.",
  },
  {
    q: "Do you comply with UAE TRA regulations for hotel WiFi?",
    a: "Yes. All our hotel WiFi deployments comply with UAE Telecommunications and Digital Government Regulatory Authority (TDRA) requirements including lawful interception capability, guest identity logging, and data retention policies.",
  },
  {
    q: "Can your AI chatbot integrate with our hotel's PMS system?",
    a: "Yes. Our AI concierge can integrate with major Property Management Systems (Opera, Protel, Cloudbeds, Apaleo) to access reservation data, room status, and guest profiles — enabling personalised responses and automated room service order routing.",
  },
  {
    q: "What is included in your hotel IT AMC contract?",
    a: "Our hotel AMC includes: 24/7 remote helpdesk, preventive maintenance visits (monthly or quarterly), priority on-site response (4-hour SLA), all network equipment health monitoring, firmware updates, and a dedicated account manager. Custom SLAs available for 5-star properties.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hotel IT Solutions UAE",
  provider: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
  description: "Enterprise WiFi, AI concierge, structured cabling, and managed IT services for hotels and resorts across UAE.",
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
};

export default function Hotels() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Hotel IT Solutions UAE | WiFi, AI Concierge & Managed IT | Super Next Technologies"
        description="Enterprise IT for hotels in UAE — guest WiFi with branded portal, AI concierge chatbot, structured cabling, and 24/7 managed IT. Serving Dubai, Abu Dhabi, RAK hotels."
        canonical="https://supernxt.com/hotels"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Star className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Hotel & Hospitality IT</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                IT Solutions for{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Hotels in UAE</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From guest WiFi and AI concierge chatbots to structured cabling and full managed IT — Super Next Technologies is the trusted technology partner for hotels and resorts across the UAE.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Branded guest WiFi portal", "Zero dead zones", "AI WhatsApp concierge", "PMS integration", "UAE TRA compliant", "24/7 AMC support"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-hotels-cta">
                    Get Free Hotel IT Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-hotels-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop&q=80"
                  alt="Hotel IT Solutions UAE"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Serving hotels across UAE</p>
                    <p className="text-xs text-gray-500 mt-0.5">Dubai · Abu Dhabi · Sharjah · RAK · Fujairah</p>
                    <a href="/analyzer" className="text-xs font-semibold text-primary mt-1.5 inline-block" data-testid="link-hotel-speed-test">
                      Check your hotel WiFi speed →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-b border-gray-100 px-4 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Hotel Technology Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Everything your property needs — designed and managed by hospitality IT specialists.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-14 bg-gray-50 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Common Hotel IT Problems We Fix</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { problem: "Guests complaining about slow or no WiFi", fix: "Enterprise high-density WiFi redesign with guaranteed speeds" },
              { problem: "Network downtime affecting PMS and POS systems", fix: "Redundant network design with automatic failover and 24/7 NOC" },
              { problem: "IT issues causing front desk downtime", fix: "24/7 managed IT with 4-hour on-site SLA" },
              { problem: "High cost of WhatsApp/phone customer service", fix: "AI concierge handling 80% of guest requests automatically" },
              { problem: "PMS, POS, and door locks on separate networks", fix: "Unified structured cabling and VLAN network design" },
              { problem: "No visibility into network performance", fix: "24/7 NOC monitoring with real-time dashboard and alerts" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-gray-200"
              >
                <p className="text-sm font-semibold text-red-600 mb-1">Problem: {item.problem}</p>
                <p className="text-sm text-gray-600"><Zap className="h-3.5 w-3.5 inline mr-1 text-primary" />{item.fix}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="Hotel IT — FAQs"
        subtitle="Questions from hotel GMs and IT managers about our hospitality technology services."
        faqs={faqs}
        ctaText="Book Free Hotel IT Audit"
      />

      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Upgrade Your Hotel Technology</h2>
          <p className="text-gray-600 mb-6">Our hospitality IT team will visit your property, assess your current setup, and recommend the most cost-effective upgrades — at no cost.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact">
              <Button className="bg-primary text-white" data-testid="button-hotels-final-cta">Book Free Hotel IT Audit</Button>
            </Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-hotels-whatsapp">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
