import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { MapPin, Bot, Wifi, Camera, Cable, Headphones, Server, CheckCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";

const services = [
  { icon: Wifi, title: "Enterprise WiFi", desc: "High-coverage wireless networks for Deira's dense commercial buildings, souks, and retail outlets — with UAE TRA compliance.", color: "bg-blue-50 text-blue-600" },
  { icon: Camera, title: "CCTV & Security", desc: "IP surveillance for Deira shops, warehouses, hotels, and offices. Remote viewing with 30-day recording.", color: "bg-red-50 text-red-600" },
  { icon: Bot, title: "AI Automation & Chatbots", desc: "WhatsApp AI bots and automation for Deira businesses — handle customer queries, bookings, and follow-ups automatically.", color: "bg-violet-50 text-violet-600" },
  { icon: Cable, title: "Structured Cabling", desc: "Cat6A and fiber optic cabling for Deira commercial buildings, old and new — neat, labelled, and ISO certified.", color: "bg-amber-50 text-amber-600" },
  { icon: Headphones, title: "IT AMC Support", desc: "Annual maintenance contracts with fast on-site response for Deira businesses — from small shops to full trading floors.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Server, title: "Cloud & Server Infrastructure", desc: "On-premise server setup, cloud migration, and IT infrastructure for Deira trading and retail businesses.", color: "bg-cyan-50 text-cyan-600" },
];

const faqs = [
  { q: "Do you serve old buildings in Deira with limited cable access?", a: "Yes. We specialize in retrofitting IT infrastructure in older Deira buildings — including structured cabling upgrades, WiFi via wireless mesh, and CCTV installations with minimal civil works required." },
  { q: "Can you install CCTV in a Deira retail shop quickly?", a: "Yes. A standard retail CCTV installation (4–8 cameras) can typically be completed in one day. We stock common camera models for fast deployment across Deira and surrounding areas." },
  { q: "Do you cover Deira Free Zone and Gold Souk area?", a: "Yes. We serve all of Deira including Deira Islands, Gold Souk, Spice Souk, Al Rigga, Al Muraqqabat, Al Muteena, Port Saeed, and the surrounding commercial areas." },
  { q: "What IT support options do you offer for small Deira businesses?", a: "We offer flexible AMC plans starting from basic helpdesk support up to full managed IT with on-site SLA. We tailor contracts to suit small, medium, and large businesses across Deira." },
  { q: "Do you offer free site surveys in Deira?", a: "Yes. We provide complimentary site surveys for all projects in Deira. Our engineer will assess your premises and provide a detailed proposal within 24 hours." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Super Next Technologies - Deira Dubai",
  description: "Enterprise IT solutions in Deira, Dubai — WiFi, CCTV, AI automation, structured cabling, and managed IT services.",
  url: "https://supernxt.com/dubai/deira",
  areaServed: { "@type": "Place", name: "Deira, Dubai" },
  telephone: "+97148864215",
  email: "hello@supernxt.com",
};

export default function DubaiDeira() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="IT Solutions Deira Dubai | WiFi, CCTV & AI Automation | Super Next Technologies"
        description="Enterprise IT services in Deira, Dubai — AI automation, enterprise WiFi, CCTV, structured cabling, and managed IT support. Free site survey covering Gold Souk, Al Rigga, Port Saeed, and all Deira areas."
        canonical="https://supernxt.com/dubai/deira"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Serving Deira, Dubai</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Enterprise IT Solutions in{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Deira, Dubai</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Super Next Technologies provides AI automation, enterprise networking, CCTV, and managed IT to businesses across Deira — including retail shops, hotels, trading companies, and free zone offices.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Free site survey", "Retrofit-friendly", "Fast deployment", "Certified engineers", "Old & new buildings", "24/7 AMC support"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-deira-cta">
                    Request Free Site Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-deira-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&h=500&fit=crop&q=80"
                  alt="Deira Dubai IT Solutions"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Covering all of Deira</p>
                    <p className="text-xs text-gray-500 mt-0.5">Gold Souk · Al Rigga · Port Saeed · Al Muteena · Deira Islands</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">IT Services in Deira, Dubai</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Complete technology solutions for Deira businesses — retail, hospitality, trading, and commercial.</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas We Cover in Deira</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Al Rigga", "Al Muraqqabat", "Al Muteena", "Gold Souk", "Spice Souk", "Port Saeed", "Deira Islands", "Al Mamzar", "Al Baraha", "Naif", "Al Sabkha", "Corniche Deira", "Al Qusais", "Al Twar"].map(area => (
              <span key={area} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                <MapPin className="h-3 w-3 inline mr-1 text-primary" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="IT Services Deira — FAQs" subtitle="Common questions from Deira businesses about our IT solutions." faqs={faqs} ctaText="Request Deira Site Survey" />

      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your Deira IT Project</h2>
          <p className="text-gray-600 mb-6">Free site survey — our engineer visits your Deira premises and delivers a full proposal within 24 hours.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact"><Button className="bg-primary text-white" data-testid="button-deira-final-cta">Book Free Consultation</Button></Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-deira-whatsapp"><MessageSquare className="mr-2 h-4 w-4" /> WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
