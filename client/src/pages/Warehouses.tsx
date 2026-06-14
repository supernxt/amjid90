import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Wifi, Camera, Cable, Headphones, Bot, Shield, CheckCircle, ArrowRight, Phone, MessageSquare, Package } from "lucide-react";

const services = [
  { icon: Camera, title: "Warehouse CCTV", desc: "Wide-angle HD cameras covering loading docks, storage aisles, entry/exit gates, and perimeter — with motion alerts and remote viewing.", color: "bg-red-50 text-red-600" },
  { icon: Wifi, title: "Industrial WiFi", desc: "Ruggedised enterprise WiFi for large warehouse floors supporting barcode scanners, forklifts, handheld terminals, and WMS systems.", color: "bg-blue-50 text-blue-600" },
  { icon: Cable, title: "Structured Cabling", desc: "Heavy-duty Cat6A and fiber backbone installations built for warehouse environments — temperature fluctuations, dust, and high-traffic cable routes.", color: "bg-amber-50 text-amber-600" },
  { icon: Shield, title: "Access Control", desc: "IP-based door access control for restricted zones, high-value storage areas, and staff entry — integrated with your CCTV and HR systems.", color: "bg-violet-50 text-violet-600" },
  { icon: Headphones, title: "IT AMC Support", desc: "Maintenance contracts covering all network, CCTV, and access control equipment with fast on-site response and 24/7 remote monitoring.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Bot, title: "AI Operations", desc: "AI workflow automation for inventory notifications, supplier communication, shipment tracking alerts, and operations reporting via WhatsApp.", color: "bg-cyan-50 text-cyan-600" },
];

const faqs = [
  {
    q: "Can you install WiFi in large warehouses with metal shelving?",
    a: "Yes. Metal racking and high ceilings are standard challenges in warehouse WiFi — we address them with ruggedised industrial-grade access points, directional antennas, and RF survey planning. Our deployments support barcode scanners, handheld terminals, and WMS systems without dead zones.",
  },
  {
    q: "How many CCTV cameras does a typical warehouse need?",
    a: "It depends on the size and layout. For a typical 5,000–10,000 sqm warehouse, we recommend 20–40 cameras covering loading bays, all aisle entry points, high-value stock areas, perimeter fence lines, and staff entry/exit. We'll conduct a free site survey and recommend the exact quantity.",
  },
  {
    q: "Can CCTV footage be accessed remotely by management?",
    a: "Yes. All our warehouse CCTV systems include mobile app access so managers can view live or recorded footage from anywhere. We also offer cloud-based recording with 30–90 day retention and motion-triggered alerts sent to your phone.",
  },
  {
    q: "Do you work in free zone warehouses like Jebel Ali or DAFZA?",
    a: "Yes. We have experience installing IT infrastructure, CCTV, and WiFi in JAFZA, DAFZA, RAKEZ, and other UAE free zone warehouses. We handle all approvals and work within free zone contractor requirements.",
  },
  {
    q: "Do you offer a maintenance contract for warehouse IT systems?",
    a: "Yes. Our warehouse IT AMC covers all installed systems — CCTV, WiFi, structured cabling, and access control. Includes quarterly preventive maintenance, 24/7 remote monitoring, and fast on-site response for faults affecting operations.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Warehouse & Logistics IT Solutions UAE",
  provider: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
  description: "CCTV, industrial WiFi, structured cabling, access control, and managed IT for warehouses and logistics facilities across UAE.",
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
};

export default function Warehouses() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Warehouse IT Solutions UAE | CCTV, WiFi & Access Control | Super Next Technologies"
        description="IT solutions for warehouses and logistics facilities in UAE — industrial WiFi, CCTV surveillance, access control, structured cabling, and managed IT. Serving JAFZA, DAFZA, and all UAE free zones."
        canonical="https://supernxt.com/warehouses"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Package className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Warehouse & Logistics IT</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                IT Solutions for{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Warehouses in UAE</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Super Next Technologies provides industrial WiFi, CCTV, access control, structured cabling, and managed IT for warehouses, logistics hubs, and distribution centres across the UAE.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Industrial WiFi coverage", "HD CCTV perimeter", "Access control systems", "Free zone experience", "24/7 monitoring", "Fast on-site response"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-warehouses-cta">
                    Get Free Warehouse Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-warehouses-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop&q=80"
                  alt="Warehouse IT Solutions UAE"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Trusted by UAE warehouses & logistics</p>
                    <p className="text-xs text-gray-500 mt-0.5">JAFZA · DAFZA · RAKEZ · DIP · Industrial Areas across UAE</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Warehouse Technology Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Industrial-grade IT solutions designed for the demands of warehouse and logistics environments.</p>
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
        title="Warehouse IT — FAQs"
        subtitle="Questions from warehouse managers and logistics directors about our IT solutions."
        faqs={faqs}
        ctaText="Book Free Warehouse Survey"
      />

      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Secure & Connect Your Warehouse</h2>
          <p className="text-gray-600 mb-6">Our engineers will visit your warehouse, survey the space, and deliver a complete proposal for CCTV, WiFi, cabling, and access control — free of charge.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact">
              <Button className="bg-primary text-white" data-testid="button-warehouses-final-cta">Book Free Warehouse Survey</Button>
            </Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-warehouses-whatsapp">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
