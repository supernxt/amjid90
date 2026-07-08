import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { MapPin, Bot, Wifi, Cable, Headphones, Server, CheckCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Automation", desc: "Custom AI agents, WhatsApp bots, and workflow automation for Abu Dhabi enterprises.", color: "bg-violet-50 text-violet-600" },
  { icon: Wifi, title: "Enterprise WiFi", desc: "Cisco, Ruckus & Ubiquiti deployments for hotels, offices, and campuses across Abu Dhabi.", color: "bg-blue-50 text-blue-600" },
  { icon: Cable, title: "Structured Cabling", desc: "TIA/ISO-certified Cat6A and fiber optic installations for Abu Dhabi commercial projects.", color: "bg-amber-50 text-amber-600" },
  { icon: Headphones, title: "Managed IT & AMC", desc: "Annual maintenance contracts with 24/7 NOC monitoring and 4-hour on-site SLA in Abu Dhabi.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Server, title: "Cloud Infrastructure", desc: "Cloud migration, hosted servers, and IT infrastructure for Abu Dhabi government and private sector.", color: "bg-cyan-50 text-cyan-600" },
];

const faqs = [
  {
    q: "Do you provide IT services across all of Abu Dhabi?",
    a: "Yes. We serve clients across Abu Dhabi city, Khalifa City, Al Reem Island, Al Maryah Island, Yas Island, Mussafah, and the wider Abu Dhabi emirate including Al Ain and Al Dhafra region.",
  },
  {
    q: "What is your response time for on-site support in Abu Dhabi?",
    a: "For AMC clients in Abu Dhabi, our standard SLA is 4 hours for critical issues and next business day for non-critical requests. We have engineers based in Abu Dhabi for faster response.",
  },
  {
    q: "Do you work with Abu Dhabi government entities?",
    a: "Yes. We have experience working with semi-government and private sector entities in Abu Dhabi, complying with Abu Dhabi Digital Authority (ADDA) guidelines for IT procurement and data handling.",
  },
  {
    q: "Can you handle large-scale projects in Abu Dhabi?",
    a: "Absolutely. We have delivered structured cabling, enterprise WiFi, and network infrastructure projects for hotels, commercial towers, warehouses, and campuses in Abu Dhabi. We can handle projects from 50 to 5,000+ points.",
  },
  {
    q: "Do you offer free site surveys in Abu Dhabi?",
    a: "Yes. We offer complimentary on-site surveys for IT infrastructure, WiFi, and cabling projects in Abu Dhabi. A certified engineer will visit your site, assess requirements, and provide a detailed proposal.",
  },
];

const abuDhabiSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Super Next Technologies - Abu Dhabi",
  description: "Enterprise IT solutions in Abu Dhabi — AI automation, enterprise WiFi, structured cabling, and managed IT services.",
  url: "https://supernxt.com/abu-dhabi",
  areaServed: { "@type": "City", name: "Abu Dhabi" },
  telephone: "+97148864215",
  email: "hello@supernxt.com",
};

export default function AbuDhabi() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="IT Solutions Abu Dhabi | AI, WiFi & Managed IT | Super Next Technologies"
        description="Enterprise IT services in Abu Dhabi — AI automation, enterprise WiFi, structured cabling, and 24/7 managed IT support. Free site survey across Abu Dhabi."
        canonical="https://supernxt.com/abu-dhabi"
        schema={abuDhabiSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Serving Abu Dhabi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Enterprise IT Solutions in{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Abu Dhabi</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Super Next Technologies delivers AI automation, enterprise networking, structured cabling, and managed IT services to businesses across Abu Dhabi — with a free site survey and same-day proposals.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Free site survey", "4-hour on-site SLA", "Certified engineers", "24/7 NOC monitoring", "Government compliant", "ISO-certified cabling"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-abudhabi-cta">
                    Request Free Site Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-abudhabi-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop&q=80"
                  alt="Abu Dhabi IT Solutions"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Trusted across Abu Dhabi</p>
                    <p className="text-xs text-gray-500 mt-0.5">Khalifa City · Al Reem Island · Yas Island · Mussafah · Al Ain</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">IT Services in Abu Dhabi</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Complete technology solutions for Abu Dhabi businesses — from consultation to installation and ongoing support.</p>
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

      {/* Areas covered */}
      <section className="py-12 bg-gray-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas We Cover in Abu Dhabi</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Abu Dhabi City", "Khalifa City", "Al Reem Island", "Al Maryah Island", "Yas Island", "Saadiyat Island", "Mussafah", "ICAD", "Al Ain", "Al Dhafra", "Madinat Zayed", "Ruwais"].map(area => (
              <span key={area} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                <MapPin className="h-3 w-3 inline mr-1 text-primary" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="IT Services Abu Dhabi — FAQs"
        subtitle="Common questions from Abu Dhabi businesses about our services."
        faqs={faqs}
        ctaText="Request Abu Dhabi Site Survey"
      />

      {/* Final CTA */}
      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your Abu Dhabi IT Project</h2>
          <p className="text-gray-600 mb-6">Get a free consultation from our certified engineers — we'll visit your Abu Dhabi site and deliver a proposal within 24 hours.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact">
              <Button className="bg-primary text-white" data-testid="button-abudhabi-final-cta">
                Book Free Consultation
              </Button>
            </Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-abudhabi-whatsapp">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
