import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { MapPin, Bot, Wifi, Camera, Cable, Headphones, Server, CheckCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";

const services = [
  { icon: Wifi, title: "Enterprise WiFi", desc: "High-density wireless for JLT towers and commercial offices — zero dead zones, branded guest portals, and VLAN security.", color: "bg-blue-50 text-blue-600" },
  { icon: Bot, title: "AI Automation", desc: "WhatsApp bots, AI receptionist, and workflow automation tailored for JLT businesses and free zone companies.", color: "bg-violet-50 text-violet-600" },
  { icon: Camera, title: "CCTV & Access Control", desc: "IP camera systems for offices, retail units, lobbies, and car parks across JLT — with remote app access.", color: "bg-red-50 text-red-600" },
  { icon: Cable, title: "Structured Cabling", desc: "Cat6A and fiber installations for JLT offices and commercial towers. TIA/ISO certified, neatly documented.", color: "bg-amber-50 text-amber-600" },
  { icon: Headphones, title: "Managed IT & AMC", desc: "Annual IT maintenance with 24/7 helpdesk, dedicated account manager, and 4-hour on-site SLA for JLT clients.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Server, title: "Cloud & Server Setup", desc: "Cloud migration, NAS/server setup, and virtual infrastructure for JLT businesses scaling their IT.", color: "bg-cyan-50 text-cyan-600" },
];

const faqs = [
  { q: "Do you serve all towers in JLT?", a: "Yes. We cover all clusters and towers across Jumeirah Lake Towers — Cluster A through Z including the Goldcrest, Bonnington, Almas Tower, HDS Tower, Saba Towers, and all surrounding commercial units." },
  { q: "What is your response time for JLT offices?", a: "For AMC clients in JLT, we offer a 4-hour on-site SLA for critical issues. Our Dubai operations team can typically reach JLT within 1–2 hours for emergency callouts." },
  { q: "Can you work within JLT free zone regulations?", a: "Yes. We are experienced with DMCC free zone compliance requirements for IT infrastructure. All our installations meet DMCC building guidelines and UAE TRA regulations." },
  { q: "Do you handle WiFi for co-working spaces in JLT?", a: "Absolutely. Co-working spaces require high-density WiFi with multiple VLANs for tenant isolation, bandwidth management, and a branded portal. We specialize in exactly this setup." },
  { q: "Do you offer free site surveys in JLT?", a: "Yes. We offer complimentary on-site surveys for all IT projects in JLT. Our engineer will visit, assess your current setup, and provide a proposal within 24 hours." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Super Next Technologies - JLT Dubai",
  description: "Enterprise IT solutions in Jumeirah Lake Towers (JLT) Dubai — AI automation, enterprise WiFi, CCTV, structured cabling, and managed IT services.",
  url: "https://supernxt.com/dubai/jlt",
  areaServed: { "@type": "Place", name: "Jumeirah Lake Towers, Dubai" },
  telephone: "+97148864215",
  email: "hello@supernxt.com",
};

export default function DubaiJLT() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="IT Solutions JLT Dubai | WiFi, CCTV & AI Automation | Super Next Technologies"
        description="Enterprise IT services in Jumeirah Lake Towers (JLT) Dubai — AI automation, enterprise WiFi, CCTV, structured cabling, and 24/7 managed IT. Free site survey for all JLT towers and DMCC free zone offices."
        canonical="https://supernxt.com/dubai/jlt"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Serving JLT, Dubai</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Enterprise IT Solutions in{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">JLT Dubai</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Super Next Technologies delivers AI automation, enterprise WiFi, CCTV, and managed IT to businesses across Jumeirah Lake Towers — with same-day proposals and DMCC-compliant installations.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Free site survey", "DMCC compliant", "4-hour SLA", "Certified engineers", "All JLT towers covered", "24/7 NOC monitoring"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-jlt-cta">
                    Request Free Site Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-jlt-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop&q=80"
                  alt="JLT Dubai IT Solutions"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Covering all JLT clusters</p>
                    <p className="text-xs text-gray-500 mt-0.5">Cluster A–Z · Almas Tower · DMCC Free Zone · Marina Gate</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">IT Services in JLT Dubai</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Complete technology solutions for JLT offices and businesses — from first consultation to ongoing support.</p>
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

      <section className="py-12 bg-gray-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas We Cover in JLT</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Cluster A", "Cluster B", "Cluster C", "Cluster D", "Cluster E", "Cluster F", "Cluster G", "Cluster H", "Cluster I", "Cluster J", "Cluster K", "Cluster L", "Cluster M", "Cluster N", "Cluster O", "Cluster P", "Cluster Q", "Cluster R", "Cluster S", "Cluster T", "Almas Tower", "DMCC HQ", "Goldcrest Views", "Bonnington Tower", "HDS Tower", "Saba Towers"].map(area => (
              <span key={area} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                <MapPin className="h-3 w-3 inline mr-1 text-primary" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="IT Services JLT — FAQs" subtitle="Common questions from JLT businesses and DMCC free zone companies." faqs={faqs} ctaText="Request JLT Site Survey" />

      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your JLT IT Project</h2>
          <p className="text-gray-600 mb-6">Get a free consultation — our engineers visit your JLT office and deliver a full proposal within 24 hours.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact"><Button className="bg-primary text-white" data-testid="button-jlt-final-cta">Book Free Consultation</Button></Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-jlt-whatsapp"><MessageSquare className="mr-2 h-4 w-4" /> WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
