import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { MapPin, Bot, Wifi, Cable, Headphones, Server, CheckCircle, ArrowRight, Phone, MessageSquare, Zap, Network } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Agents & Automation", desc: "Custom AI agents, WhatsApp bots, n8n workflows and business process automation for Dubai enterprises.", color: "bg-violet-50 text-violet-600" },
  { icon: Wifi, title: "Enterprise WiFi", desc: "Cisco Meraki, Ruckus & Ubiquiti deployments for hotels, offices, malls, and campuses across Dubai.", color: "bg-blue-50 text-blue-600" },
  { icon: Cable, title: "Structured Cabling & Fiber Optic", desc: "TIA/ISO-certified Cat6A, fiber optic, and data center cabling for Dubai commercial and free zone projects.", color: "bg-amber-50 text-amber-600" },
  { icon: Headphones, title: "Managed IT & AMC", desc: "Annual IT maintenance contracts with 24/7 NOC monitoring, helpdesk, and 4-hour on-site SLA across Dubai.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Server, title: "Cloud & Network Infrastructure", desc: "Cloud migration, VPN setup, server management and enterprise networking for Dubai businesses.", color: "bg-cyan-50 text-cyan-600" },
  { icon: Zap, title: "n8n & Business Automation", desc: "Workflow automation, CRM integration, WhatsApp automation, and API-driven process automation for Dubai teams.", color: "bg-orange-50 text-orange-600" },
  { icon: Network, title: "Network Infrastructure", desc: "Core switching, routing, firewall, SD-WAN and enterprise-grade LAN/WAN deployments for Dubai offices.", color: "bg-indigo-50 text-indigo-600" },
];

const faqs = [
  {
    q: "Do you provide IT services across all of Dubai?",
    a: "Yes. We serve clients across all Dubai areas including Business Bay, DIFC, Downtown Dubai, Dubai Marina, JLT, Al Quoz, Deira, Bur Dubai, Dubai Silicon Oasis, JAFZA, DAFZA, DIP, DWC, Knowledge Village, Internet City, Media City, Meydan, and all Dubai free zones.",
  },
  {
    q: "What is your response time for on-site IT support in Dubai?",
    a: "For AMC clients in Dubai, our standard SLA is 4 hours for critical issues and next business day for non-critical requests. Our engineers are based in Dubai Production City, allowing rapid deployment across the emirate.",
  },
  {
    q: "Do you handle JAFZA, DAFZA, and Dubai free zone IT projects?",
    a: "Yes. We are experienced in working within Dubai free zones including JAFZA, DAFZA, DMCC, Dubai Silicon Oasis, Dubai Internet City, and Dubai Media City. We understand the unique compliance and access requirements of each zone.",
  },
  {
    q: "Can you install enterprise WiFi for a hotel in Dubai?",
    a: "Absolutely. We have delivered enterprise guest WiFi, branded captive portals, in-room connectivity, and back-of-house IT infrastructure for hotels across Dubai — from boutique properties to large resort complexes.",
  },
  {
    q: "Do you offer IT AMC (Annual Maintenance Contracts) in Dubai?",
    a: "Yes. Our Dubai IT AMC covers hardware and software maintenance, 24/7 NOC monitoring, helpdesk support, server management, network monitoring, and scheduled preventive maintenance visits — all under a single fixed-cost annual contract.",
  },
  {
    q: "Do you offer free site surveys for Dubai IT projects?",
    a: "Yes. We offer complimentary on-site surveys for IT infrastructure, WiFi, structured cabling, and automation projects across Dubai. A certified engineer will assess your requirements and deliver a detailed proposal within 24 hours.",
  },
];

const dubaiSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TechCompany"],
    name: "Super Next Technologies - Dubai",
    description: "Enterprise IT solutions in Dubai — AI automation, enterprise WiFi, structured cabling, managed IT & AMC services for Dubai businesses.",
    url: "https://supernxt.com/dubai",
    areaServed: { "@type": "City", name: "Dubai" },
    telephone: "+97148864215",
    email: "hello@supernxt.com",
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://supernxt.com/" },
      { "@type": "ListItem", position: 2, name: "Dubai", item: "https://supernxt.com/dubai" },
    ],
  },
];

const areas = [
  "Business Bay", "DIFC", "Downtown Dubai", "Dubai Marina", "JLT", "Al Quoz",
  "JAFZA", "DAFZA", "Dubai Silicon Oasis", "DIP", "DWC", "Knowledge Village",
  "Internet City", "Media City", "Deira", "Bur Dubai", "Jumeirah", "Meydan",
  "Dubai Creek Harbour", "Dubai South", "DMCC", "Motor City",
];

export default function Dubai() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="IT Solutions Dubai | AI, WiFi, Managed IT & AMC | Super Next"
        description="Enterprise IT services in Dubai — AI agents, enterprise WiFi, structured cabling, managed IT & AMC. Free site survey. Serving DIFC, Business Bay, JAFZA & all Dubai."
        canonical="https://supernxt.com/dubai"
        keywords="IT solutions Dubai, managed IT Dubai, IT AMC Dubai, enterprise WiFi Dubai, structured cabling Dubai, AI automation Dubai, n8n automation Dubai, IT support Dubai, network infrastructure Dubai, fiber optic Dubai"
        schema={dubaiSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Serving Dubai</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Enterprise IT Solutions in{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Dubai</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Super Next Technologies delivers AI automation, enterprise WiFi, structured cabling, and managed IT services to businesses across Dubai — with a free site survey and same-day proposals.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Free site survey", "4-hour on-site SLA", "Certified engineers", "24/7 NOC monitoring", "Dubai free zone compliant", "ISO-certified cabling"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-dubai-cta">
                    Request Free Site Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-dubai-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop&q=80"
                  alt="Dubai IT Solutions — Enterprise Technology for Dubai Businesses"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Trusted across Dubai</p>
                    <p className="text-xs text-gray-500 mt-0.5">DIFC · Business Bay · JAFZA · Dubai Marina · Silicon Oasis</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-b border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Dubai Clients Served" },
              { value: "4-hr", label: "On-Site SLA" },
              { value: "24/7", label: "NOC Monitoring" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">IT Services in Dubai</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Complete technology solutions for Dubai businesses — from consultation to installation and 24/7 managed support.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Areas We Cover in Dubai</h2>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">Our certified engineers operate across all Dubai districts, free zones, and business communities.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map(area => (
              <span key={area} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                <MapPin className="h-3 w-3 inline mr-1 text-primary" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links to related services */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Explore Our Dubai Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "AI Agents & Automation", path: "/ai-solutions", desc: "WhatsApp bots, AI agents, n8n workflows" },
              { label: "Enterprise WiFi", path: "/wireless-hotspot", desc: "Cisco, Ruckus, Ubiquiti for Dubai offices & hotels" },
              { label: "Structured Cabling", path: "/structured-cabling", desc: "Cat6A, fiber optic, data center cabling" },
              { label: "Managed IT & AMC", path: "/managed-it-services", desc: "24/7 helpdesk, NOC, server management" },
              { label: "Network Infrastructure", path: "/network-infrastructure", desc: "Core switching, firewall, SD-WAN" },
              { label: "n8n Automation", path: "/n8n-automation", desc: "Workflow automation & CRM integration" },
              { label: "IT AMC", path: "/it-amc", desc: "Annual maintenance contracts for Dubai businesses" },
              { label: "Hotel WiFi & IT", path: "/hotels", desc: "Guest WiFi, managed IT & AI concierge for Dubai hotels" },
            ].map(({ label, path, desc }) => (
              <Link key={path} href={path}>
                <div className="border border-gray-200 rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group">
                  <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors flex items-center gap-1">
                    {label} <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="IT Services Dubai — FAQs"
        subtitle="Common questions from Dubai businesses about our technology services."
        faqs={faqs}
        ctaText="Request Dubai Site Survey"
      />

      {/* Final CTA */}
      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your Dubai IT Project Today</h2>
          <p className="text-gray-600 mb-6">Get a free consultation from our certified engineers — we'll visit your Dubai site and deliver a proposal within 24 hours.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact">
              <Button className="bg-primary text-white" data-testid="button-dubai-final-cta">
                Book Free Consultation
              </Button>
            </Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-dubai-whatsapp">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
