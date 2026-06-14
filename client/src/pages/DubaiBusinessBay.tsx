import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { MapPin, Bot, Wifi, Camera, Cable, Headphones, Server, CheckCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";

const services = [
  { icon: Wifi, title: "Enterprise WiFi", desc: "High-density WiFi for Business Bay towers and commercial offices — seamless roaming, guest VLANs, and usage analytics.", color: "bg-blue-50 text-blue-600" },
  { icon: Bot, title: "AI & Automation", desc: "AI receptionist, WhatsApp bots, CRM integration, and intelligent workflow automation for Business Bay companies.", color: "bg-violet-50 text-violet-600" },
  { icon: Camera, title: "CCTV & Access Control", desc: "IP surveillance, smart access control, and video analytics for Business Bay offices and co-working spaces.", color: "bg-red-50 text-red-600" },
  { icon: Cable, title: "Structured Cabling", desc: "ISO-certified Cat6A and fiber optic cabling for Business Bay towers — full documentation and rack installation.", color: "bg-amber-50 text-amber-600" },
  { icon: Headphones, title: "Managed IT & AMC", desc: "Proactive IT management with 24/7 NOC, dedicated account manager, and guaranteed SLA for Business Bay tenants.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Server, title: "Cloud & Server Setup", desc: "Azure, AWS, and on-premise server infrastructure for Business Bay businesses requiring enterprise-grade IT.", color: "bg-cyan-50 text-cyan-600" },
];

const faqs = [
  { q: "Do you cover all towers in Business Bay?", a: "Yes. We serve all commercial towers and offices across Business Bay, including The Binary, Executive Towers, Westburry Tower, Bay Square, Opus, Ubora Tower, and all surrounding buildings." },
  { q: "Do you work with Business Bay building management for cabling approvals?", a: "Yes. We handle all required NOC approvals and building management coordination for IT installations in Business Bay towers. Our team is experienced with standard tower requirements in this area." },
  { q: "Can you set up a complete office IT fit-out in Business Bay?", a: "Absolutely. We provide end-to-end office fit-out IT services — structured cabling, WiFi, server room setup, CCTV, access control, and ongoing AMC. Ideal for new office setups or expansions." },
  { q: "How fast can you respond to IT emergencies in Business Bay?", a: "For AMC clients in Business Bay, our average on-site arrival time is under 2 hours due to our Dubai operations base. Critical system failures are escalated to priority response immediately." },
  { q: "Do you offer free surveys for Business Bay offices?", a: "Yes. We provide a complimentary site survey and IT assessment for any Business Bay project. Our engineer visits your office and delivers a full proposal within 24 hours at no cost." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Super Next Technologies - Business Bay Dubai",
  description: "Enterprise IT solutions in Business Bay, Dubai — WiFi, CCTV, AI automation, structured cabling, and managed IT services.",
  url: "https://supernxt.com/dubai/business-bay",
  areaServed: { "@type": "Place", name: "Business Bay, Dubai" },
  telephone: "+97148864215",
  email: "hello@supernxt.com",
};

export default function DubaiBusinessBay() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="IT Solutions Business Bay Dubai | WiFi, CCTV & AI | Super Next Technologies"
        description="Enterprise IT services in Business Bay Dubai — AI automation, enterprise WiFi, CCTV, structured cabling, and 24/7 managed IT support. Free site survey for all Business Bay towers and offices."
        canonical="https://supernxt.com/dubai/business-bay"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Serving Business Bay, Dubai</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Enterprise IT Solutions in{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Business Bay</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Super Next Technologies delivers enterprise-grade IT infrastructure, AI automation, and managed services to companies across Business Bay — Dubai's premier commercial district.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Free site survey", "NOC approvals handled", "Office fit-out ready", "Certified engineers", "All towers covered", "24/7 managed IT"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-bb-cta">
                    Request Free Site Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-bb-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop&q=80"
                  alt="Business Bay Dubai IT Solutions"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Trusted by Business Bay companies</p>
                    <p className="text-xs text-gray-500 mt-0.5">Executive Towers · Bay Square · The Binary · Ubora · Opus</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">IT Services in Business Bay Dubai</h2>
            <p className="text-gray-500 max-w-xl mx-auto">End-to-end technology solutions for Business Bay offices — from cabling to cloud.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all">
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

      <FAQSection title="IT Services Business Bay — FAQs" subtitle="Common questions from Business Bay offices and companies." faqs={faqs} ctaText="Request Business Bay Survey" />

      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your Business Bay IT Project</h2>
          <p className="text-gray-600 mb-6">Free site survey — our engineers visit your office and deliver a complete IT proposal within 24 hours.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact"><Button className="bg-primary text-white" data-testid="button-bb-final-cta">Book Free Consultation</Button></Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-bb-whatsapp"><MessageSquare className="mr-2 h-4 w-4" /> WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
