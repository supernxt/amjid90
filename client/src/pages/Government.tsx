import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Building2, Bot, Wifi, Camera, Cable, Headphones, Server, CheckCircle, ArrowRight, Phone, MessageSquare, Shield, Lock } from "lucide-react";

const services = [
  { icon: Shield, title: "Cybersecurity & Compliance", desc: "ISO 27001-aligned security frameworks, firewall configuration, and audit-ready documentation for UAE government and semi-government entities.", color: "bg-red-50 text-red-600" },
  { icon: Wifi, title: "Secure Government WiFi", desc: "Segregated enterprise wireless with staff/visitor VLANs, UAE TRA compliance, and lawful interception capability.", color: "bg-blue-50 text-blue-600" },
  { icon: Camera, title: "Surveillance & CCTV", desc: "Integrated IP camera systems with centralised management, access control, and compliance with UAE security standards.", color: "bg-amber-50 text-amber-600" },
  { icon: Cable, title: "Structured Cabling", desc: "Government-grade Cat6A and fiber backbone installations — fully documented, labelled, and certified to international standards.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Bot, title: "AI & Digital Transformation", desc: "Custom AI solutions, RPA (Robotic Process Automation), and digital workflow tools to modernise government operations.", color: "bg-violet-50 text-violet-600" },
  { icon: Server, title: "Private Cloud & Data Centers", desc: "On-premise private cloud, hyper-converged infrastructure, and secure data center design for government IT requirements.", color: "bg-cyan-50 text-cyan-600" },
  { icon: Lock, title: "Access Control Systems", desc: "Biometric and card-based access control integrated with HR systems — for offices, server rooms, and restricted zones.", color: "bg-orange-50 text-orange-600" },
  { icon: Headphones, title: "Managed IT & NOC", desc: "24/7 NOC monitoring, helpdesk, and dedicated IT support for government departments with strict SLA commitments.", color: "bg-pink-50 text-pink-600" },
];

const stats = [
  { value: "ISO 27001", label: "Security certified" },
  { value: "UAE TRA", label: "Compliant" },
  { value: "24/7", label: "NOC monitoring" },
  { value: "4hr", label: "On-site SLA" },
];

const faqs = [
  { q: "Are you compliant with UAE government IT standards?", a: "Yes. Our solutions comply with UAE Telecommunications and Digital Government Regulatory Authority (TDRA) standards, UAE National Cybersecurity Strategy requirements, and ISO 27001 security framework. We have experience delivering IT infrastructure for UAE government and semi-government entities." },
  { q: "Can you implement IT infrastructure across multiple government buildings?", a: "Yes. We handle multi-site government IT projects across UAE — including structured cabling, WiFi, CCTV, server rooms, and managed services across multiple locations simultaneously. We provide a single point of contact and unified support contract." },
  { q: "Do you provide secure WiFi with lawful interception capability?", a: "Yes. All our government WiFi deployments include UAE-mandated lawful interception capability, user identity logging, data retention policies, and VLAN-based network segmentation between staff, visitors, and management networks." },
  { q: "Can you handle biometric access control integration?", a: "Yes. We integrate biometric fingerprint and facial recognition access control with door controllers, CCTV, and HR management systems for government offices and restricted areas." },
  { q: "What certifications do your engineers hold?", a: "Our engineers hold Cisco CCNA/CCNP, Ubiquiti, Ruckus, Hikvision, Dahua, and structured cabling (BICSI) certifications. We can provide full engineer CV and certification documentation for government procurement processes." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Government IT Solutions UAE",
  provider: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
  description: "Secure IT infrastructure, cybersecurity, enterprise WiFi, CCTV, and managed IT services for UAE government and semi-government entities.",
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
};

export default function Government() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Government IT Solutions UAE | Secure WiFi, CCTV & Managed IT | Super Next Technologies"
        description="Enterprise IT for UAE government entities — cybersecurity, secure WiFi, CCTV, structured cabling, access control, and 24/7 managed IT. ISO 27001 aligned. UAE TRA compliant. Free consultation."
        canonical="https://supernxt.com/government"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Building2 className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Government & Public Sector</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Secure IT Solutions for{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">UAE Government</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Super Next Technologies delivers UAE TRA-compliant, ISO 27001-aligned IT infrastructure for government departments, municipalities, and semi-government entities across the UAE.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["UAE TRA compliant", "ISO 27001 aligned", "Lawful interception", "Government procurement ready", "Certified engineers", "Multi-site projects"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-gov-cta">
                    Request Government IT Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-gov-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&h=500&fit=crop&q=80"
                  alt="Government IT Solutions UAE"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Trusted by UAE government entities</p>
                    <p className="text-xs text-gray-500 mt-0.5">Municipalities · Free Zones · Public Authorities · Semi-Government</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 border-b border-gray-100 px-4 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Government IT Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Secure, compliant technology infrastructure built to UAE government standards.</p>
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

      <FAQSection title="Government IT — FAQs" subtitle="Common questions from government procurement and IT departments." faqs={faqs} ctaText="Request Government IT Consultation" />

      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Discuss Your Government IT Requirements</h2>
          <p className="text-gray-600 mb-6">Our government IT team will assess your requirements, provide full technical documentation, and support your procurement process.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact"><Button className="bg-primary text-white" data-testid="button-gov-final-cta">Request Consultation</Button></Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-gov-whatsapp"><MessageSquare className="mr-2 h-4 w-4" /> WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
