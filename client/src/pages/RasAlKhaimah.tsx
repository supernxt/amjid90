import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { MapPin, Bot, Wifi, Camera, Cable, Headphones, Server, CheckCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Automation", desc: "Custom AI agents, WhatsApp bots, and intelligent automation workflows for RAK businesses.", color: "bg-violet-50 text-violet-600" },
  { icon: Wifi, title: "Enterprise WiFi", desc: "Professional wireless deployments for RAK's hotels, resorts, and industrial facilities.", color: "bg-blue-50 text-blue-600" },
  { icon: Camera, title: "CCTV & Security", desc: "Full HD IP camera systems with video analytics and remote monitoring across Ras Al Khaimah.", color: "bg-red-50 text-red-600" },
  { icon: Cable, title: "Structured Cabling", desc: "TIA/ISO-certified Cat6A and fiber optic cabling for RAK commercial and industrial projects.", color: "bg-amber-50 text-amber-600" },
  { icon: Headphones, title: "Managed IT & AMC", desc: "Annual maintenance contracts with 24/7 NOC monitoring and on-site SLA across RAK.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Server, title: "Cloud Infrastructure", desc: "Cloud migration and hosted servers for RAK businesses and RAKEZ free zone companies.", color: "bg-cyan-50 text-cyan-600" },
];

const faqs = [
  {
    q: "Do you provide IT services across all of Ras Al Khaimah?",
    a: "Yes. We serve clients across RAK City, Al Nakheel, Al Hamra, Al Jazeera Al Hamra, Mina Al Arab, Khuzam, Al Qawasim Corniche, Dafan Al Nakheel, and the RAK Economic Zone (RAKEZ).",
  },
  {
    q: "Do you serve hotels and resorts in RAK?",
    a: "Yes. Ras Al Khaimah's growing hospitality sector is a key market for us. We install enterprise WiFi, CCTV, structured cabling, and provide IT AMC services for hotels and beach resorts throughout RAK.",
  },
  {
    q: "What is your response time for on-site support in RAK?",
    a: "For AMC clients in RAK, our SLA targets are 4 hours for critical issues. We have the ability to dispatch engineers from Dubai and Sharjah for same-day or next-day on-site visits.",
  },
  {
    q: "Do you work with RAKEZ free zone companies?",
    a: "Yes. We work with RAKEZ (Ras Al Khaimah Economic Zone) businesses providing IT infrastructure, structured cabling, enterprise WiFi, CCTV, and managed IT services compliant with free zone standards.",
  },
  {
    q: "Do you offer free site surveys in Ras Al Khaimah?",
    a: "Yes. We offer complimentary on-site surveys across Ras Al Khaimah for IT, CCTV, WiFi, and cabling projects. Our engineer will assess your site and provide a detailed proposal at no cost.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Super Next Technologies - Ras Al Khaimah",
  description: "Enterprise IT solutions in Ras Al Khaimah — AI automation, enterprise WiFi, CCTV, structured cabling, and managed IT services.",
  url: "https://supernxt.com/ras-al-khaimah",
  areaServed: { "@type": "City", name: "Ras Al Khaimah" },
  telephone: "+97148864215",
  email: "hello@supernxt.com",
};

export default function RasAlKhaimah() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="IT Solutions Ras Al Khaimah | AI, WiFi, CCTV & Managed IT | Super Next Technologies"
        description="Enterprise IT services in Ras Al Khaimah — AI automation, enterprise WiFi, CCTV systems, structured cabling, and 24/7 managed IT. Free site survey across RAK and RAKEZ."
        canonical="https://supernxt.com/ras-al-khaimah"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Serving Ras Al Khaimah</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Enterprise IT Solutions in{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Ras Al Khaimah</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Super Next Technologies delivers AI automation, enterprise networking, CCTV, structured cabling, and managed IT services to businesses across RAK — with a free site survey and proposals within 24 hours.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Free site survey", "Same-day response", "Certified engineers", "24/7 NOC monitoring", "RAKEZ compliant", "Hotel & resort specialists"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-rak-cta">
                    Request Free Site Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-rak-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=500&fit=crop&q=80"
                  alt="Ras Al Khaimah IT Solutions"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Trusted across Ras Al Khaimah</p>
                    <p className="text-xs text-gray-500 mt-0.5">RAK City · Al Hamra · Mina Al Arab · RAKEZ · Al Nakheel</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">IT Services in Ras Al Khaimah</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Complete technology solutions for RAK businesses, hotels, and free zone companies.</p>
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

      <section className="py-12 bg-gray-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas We Cover in Ras Al Khaimah</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["RAK City", "Al Nakheel", "Al Hamra Village", "Mina Al Arab", "Al Qawasim Corniche", "Khuzam", "Dafan Al Nakheel", "RAKEZ", "Al Jazeera Al Hamra", "Seih Al Uraibi", "Al Dhait", "Wadi Shah"].map(area => (
              <span key={area} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                <MapPin className="h-3 w-3 inline mr-1 text-primary" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="IT Services RAK — FAQs"
        subtitle="Common questions from Ras Al Khaimah businesses about our services."
        faqs={faqs}
        ctaText="Request RAK Site Survey"
      />

      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your RAK IT Project</h2>
          <p className="text-gray-600 mb-6">Get a free consultation from our certified engineers — we'll visit your RAK site and deliver a proposal within 24 hours.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact">
              <Button className="bg-primary text-white" data-testid="button-rak-final-cta">Book Free Consultation</Button>
            </Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-rak-whatsapp">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
