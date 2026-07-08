import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Wifi, Cable, Headphones, Bot, Shield, CheckCircle, ArrowRight, Phone, MessageSquare, Activity } from "lucide-react";

const services = [
  { icon: Wifi, title: "Healthcare WiFi", desc: "High-density clinical WiFi supporting medical devices, EMR systems, VoIP, and patient WiFi — all on separate, secure VLANs.", color: "bg-blue-50 text-blue-600" },
  { icon: Cable, title: "Structured Cabling", desc: "Cat6A and fiber optic backbone connecting nursing stations, labs, imaging equipment, and admin offices on a single certified infrastructure.", color: "bg-amber-50 text-amber-600" },
  { icon: Headphones, title: "IT AMC & Helpdesk", desc: "Dedicated healthcare IT support with priority response, 24/7 remote helpdesk, and on-site engineers familiar with clinical environments.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Shield, title: "Network Security", desc: "Firewall, VLAN segmentation, medical device isolation, and cyber security policies aligned with UAE health data regulations.", color: "bg-violet-50 text-violet-600" },
  { icon: Bot, title: "AI Patient Engagement", desc: "WhatsApp AI assistant for appointment confirmations, prescription reminders, patient queries, and feedback collection — 24/7.", color: "bg-cyan-50 text-cyan-600" },
];

const faqs = [
  {
    q: "How do you handle WiFi for medical devices alongside patient WiFi?",
    a: "We design separate VLANs for clinical systems (medical devices, EMR, imaging), staff systems, and patient guest WiFi. This ensures medical equipment gets guaranteed bandwidth with zero interference from general traffic, while maintaining full isolation for security compliance.",
  },
  {
    q: "Are your solutions compliant with UAE health data regulations?",
    a: "Yes. We design all healthcare IT infrastructure with compliance in mind — including data segmentation, access controls, and network policies aligned with UAE Ministry of Health and DHA (Dubai Health Authority) guidelines for healthcare data security.",
  },
  {
    q: "What is your response time for critical IT issues in hospitals?",
    a: "For healthcare AMC clients, we offer 2-hour critical response SLA for network and system outages affecting patient care. We maintain an on-call engineer roster specifically for healthcare clients to ensure rapid response at any hour.",
  },
  {
    q: "Do you work with clinics and medical centres as well as hospitals?",
    a: "Yes. We serve the full spectrum of healthcare facilities — from single-specialty clinics and polyclinics to large hospitals and medical cities across the UAE. Our solutions scale from a 10-point clinic to a 2,000+ point hospital campus.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hospital & Healthcare IT Solutions UAE",
  provider: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
  description: "Enterprise WiFi, structured cabling, and managed IT services for hospitals and healthcare facilities across UAE.",
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
};

export default function Hospitals() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Hospital & Healthcare IT Solutions UAE | WiFi, AI & Managed IT | Super Next Technologies"
        description="Enterprise IT for hospitals and clinics in UAE — clinical WiFi, structured cabling, healthcare data security, AI patient engagement, and 24/7 managed IT. Serving Dubai, Abu Dhabi, Sharjah."
        canonical="https://supernxt.com/hospitals"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Activity className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Healthcare IT Specialists</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                IT Solutions for{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Hospitals & Clinics</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Super Next Technologies delivers secure, compliant IT infrastructure for hospitals, clinics, and medical centres across the UAE — including clinical WiFi, structured cabling, AI patient engagement, and 24/7 managed IT support.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Clinical WiFi design", "Medical device isolation", "DHA/MOH compliant", "24/7 critical response", "Network security", "AI patient engagement"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-hospitals-cta">
                    Request Free IT Assessment <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-hospitals-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop&q=80"
                  alt="Hospital IT Solutions UAE"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Trusted by UAE healthcare facilities</p>
                    <p className="text-xs text-gray-500 mt-0.5">Hospitals · Polyclinics · Specialist Centres · Medical Cities</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Healthcare IT Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Secure, compliant technology solutions built for the unique demands of healthcare environments.</p>
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

      <FAQSection
        title="Healthcare IT — FAQs"
        subtitle="Questions from hospital IT managers and clinic administrators about our services."
        faqs={faqs}
        ctaText="Book Free Healthcare IT Assessment"
      />

      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Secure Your Healthcare IT Infrastructure</h2>
          <p className="text-gray-600 mb-6">Our healthcare IT specialists will assess your facility and recommend compliant, reliable solutions — free of charge.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact">
              <Button className="bg-primary text-white" data-testid="button-hospitals-final-cta">Book Free IT Assessment</Button>
            </Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-hospitals-whatsapp">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
