import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Headphones, Server, Network, Shield, Clock, CheckCircle, ArrowRight, Phone, MessageSquare, BarChart3, Wrench, AlertCircle } from "lucide-react";

const services = [
  { icon: Headphones, title: "24/7 Helpdesk Support", desc: "Round-the-clock IT helpdesk via phone, email, and WhatsApp. Remote and on-site support for all hardware and software issues.", color: "bg-blue-50 text-blue-600" },
  { icon: Server, title: "Server & Infrastructure Management", desc: "Proactive server monitoring, patch management, backup verification, and performance optimisation for Windows Server and Linux.", color: "bg-violet-50 text-violet-600" },
  { icon: Network, title: "Network Monitoring & Management", desc: "24/7 NOC monitoring of routers, switches, firewalls, and wireless access points. Instant alerts and rapid response to network events.", color: "bg-cyan-50 text-cyan-600" },
  { icon: Shield, title: "Cybersecurity & Patch Management", desc: "Regular OS and software patching, antivirus management, firewall rule reviews, and security incident response.", color: "bg-red-50 text-red-600" },
  { icon: Wrench, title: "Preventive Maintenance Visits", desc: "Scheduled on-site engineer visits to inspect hardware, clean equipment, test UPS, check cabling, and document your IT asset register.", color: "bg-amber-50 text-amber-600" },
  { icon: BarChart3, title: "Reporting & Asset Management", desc: "Monthly SLA performance reports, asset inventory updates, software licence tracking, and IT budget planning support.", color: "bg-emerald-50 text-emerald-600" },
  { icon: AlertCircle, title: "Incident & Change Management", desc: "Structured incident tracking, root cause analysis, change request management, and IT documentation using ITIL best practices.", color: "bg-orange-50 text-orange-600" },
  { icon: Clock, title: "4-Hour On-Site SLA", desc: "Guaranteed 4-hour on-site response for critical issues. Most remote issues resolved within 1–2 hours under our managed IT AMC.", color: "bg-teal-50 text-teal-600" },
];

const plans = [
  {
    name: "Basic AMC",
    desc: "Small offices up to 10 users",
    features: ["Business hours helpdesk", "Monthly preventive visit", "Remote monitoring", "8-hour on-site SLA", "Quarterly report"],
  },
  {
    name: "Business AMC",
    desc: "Growing businesses 10–50 users",
    features: ["12/7 helpdesk support", "Bi-monthly site visits", "24/7 NOC monitoring", "4-hour on-site SLA", "Monthly SLA report", "Server management"],
    highlighted: true,
  },
  {
    name: "Enterprise AMC",
    desc: "Large organisations 50+ users",
    features: ["24/7 helpdesk & NOC", "Monthly preventive visits", "Dedicated account manager", "2-hour on-site SLA", "Weekly reports & reviews", "Full cybersecurity cover", "Asset & licence management"],
  },
];

const faqs = [
  {
    q: "What is an IT AMC (Annual Maintenance Contract)?",
    a: "An IT AMC is an annual agreement where a managed IT provider like Super Next Technologies takes full responsibility for your IT infrastructure's upkeep. It covers helpdesk support, hardware and software maintenance, network monitoring, security patching, and scheduled on-site visits — all under a fixed annual cost, eliminating unpredictable IT expenses.",
  },
  {
    q: "Why is an IT AMC better than ad-hoc IT support in Dubai?",
    a: "Ad-hoc IT support in Dubai means you pay high per-call rates and wait hours for a technician. An IT AMC gives you priority access to certified engineers, predictable costs, proactive monitoring that prevents issues before they cause downtime, and a dedicated account manager who understands your systems.",
  },
  {
    q: "What is included in a standard IT AMC from Super Next Technologies?",
    a: "Our standard IT AMC includes 24/7 helpdesk support, remote monitoring, scheduled preventive maintenance visits, server and network management, security patch deployment, hardware fault resolution, monthly SLA reports, and IT asset management. Enterprise plans also include a dedicated account manager and 2-hour on-site SLA.",
  },
  {
    q: "Do you offer IT AMC for small businesses in Dubai?",
    a: "Yes. We offer IT AMC plans for businesses of all sizes — from startups and SMEs with 5 users to large enterprises with 500+ users. Our Basic AMC is designed specifically for small Dubai offices that need reliable IT support without the cost of in-house staff.",
  },
  {
    q: "Do you cover hardware repair and replacement under the AMC?",
    a: "Yes. Hardware fault diagnosis and repair labour is included. Replacement parts are charged at cost, or can be included under an enhanced AMC with a spare parts budget. We maintain a stock of common spares in Dubai for fast replacement.",
  },
  {
    q: "Can I add network infrastructure or structured cabling to my IT AMC?",
    a: "Yes. We offer combined AMC packages covering IT, networking, and structured cabling under one contract and one point of contact. This simplifies vendor management and often reduces the overall annual cost compared to separate contracts.",
  },
  {
    q: "What is your response time for IT emergencies in Dubai?",
    a: "For critical system failures, our NOC team responds remotely within 15 minutes around the clock. For issues requiring on-site attendance in Dubai, our standard SLA is 4 hours, with a 2-hour SLA available under our Enterprise AMC.",
  },
];

const amcSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IT AMC (Annual Maintenance Contract) Dubai, UAE",
    serviceType: "Managed IT Services",
    description: "Comprehensive IT Annual Maintenance Contracts for UAE businesses. 24/7 helpdesk, NOC monitoring, server management, network maintenance, and 4-hour on-site SLA across Dubai.",
    url: "https://supernxt.com/it-amc",
    provider: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://supernxt.com/" },
      { "@type": "ListItem", position: 2, name: "Managed IT Services", item: "https://supernxt.com/managed-it-services" },
      { "@type": "ListItem", position: 3, name: "IT AMC", item: "https://supernxt.com/it-amc" },
    ],
  },
];

export default function ItAmc() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="IT AMC Dubai & UAE | Annual IT Maintenance Contract | Super Next"
        description="IT AMC (Annual Maintenance Contract) for Dubai & UAE businesses. 24/7 helpdesk, NOC monitoring, 4-hr on-site SLA, server & network management. Fixed annual cost."
        canonical="https://supernxt.com/it-amc"
        keywords="IT AMC Dubai, IT annual maintenance contract UAE, managed IT AMC, IT maintenance contract Dubai, IT AMC services UAE, IT support contract Dubai, annual IT contract UAE, helpdesk AMC Dubai, server maintenance UAE, network AMC Dubai"
        schema={amcSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
                <Headphones className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">IT AMC Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                IT AMC Dubai &amp; UAE —{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Annual IT Maintenance</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                One fixed annual cost. Complete IT coverage. Super Next Technologies provides comprehensive IT Annual Maintenance Contracts for businesses across Dubai and the UAE — with 24/7 support, proactive monitoring, and guaranteed response times.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["24/7 helpdesk support", "4-hour on-site SLA", "NOC monitoring", "Server management", "Security patching", "Monthly SLA reports"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white" data-testid="button-itamc-cta">
                    Get AMC Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-itamc-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "AMC Clients", sub: "across UAE" },
                { value: "4-hr", label: "On-Site SLA", sub: "guaranteed" },
                { value: "15min", label: "Remote Response", sub: "for critical issues" },
                { value: "99.5%", label: "Uptime SLA", sub: "network & servers" },
              ].map(s => (
                <div key={s.label} className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm">
                  <p className="text-3xl font-bold text-emerald-600">{s.value}</p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What's Included in Our IT AMC</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A comprehensive IT maintenance contract covering every layer of your technology stack.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-200 transition-all"
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

      {/* Plans */}
      <section className="py-14 bg-gray-50 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">IT AMC Plans</h2>
            <p className="text-gray-500">Choose the plan that matches your business size. All plans are customisable.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-6 border ${plan.highlighted ? "border-emerald-500 bg-gradient-to-b from-emerald-50 to-white shadow-lg" : "border-gray-200 bg-white"}`}
              >
                {plan.highlighted && (
                  <span className="inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Most Popular</span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-5">{plan.desc}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className={`h-4 w-4 shrink-0 ${plan.highlighted ? "text-emerald-600" : "text-gray-400"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className={`w-full ${plan.highlighted ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""}`} variant={plan.highlighted ? "default" : "outline"} data-testid={`button-itamc-plan-${i}`}>
                    Get a Quote
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">All plans include a free IT infrastructure audit before contract commencement. Custom enterprise plans available.</p>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related IT Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Managed IT Services", path: "/managed-it-services" },
              { label: "Network Infrastructure", path: "/network-infrastructure" },
              { label: "Structured Cabling", path: "/structured-cabling" },
              { label: "IT Solutions Dubai", path: "/dubai" },
              { label: "Free IT Audit", path: "/free-audit" },
            ].map(({ label, path }) => (
              <Link key={path} href={path}>
                <Button variant="outline" className="border-gray-300" data-testid={`link-itamc-${label.toLowerCase().replace(/\s+/g, "-")}`}>
                  {label} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="IT AMC Dubai — FAQs"
        subtitle="Everything UAE businesses ask about annual IT maintenance contracts."
        faqs={faqs}
        ctaText="Get Your IT AMC Quote"
      />

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-emerald-50 to-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Get a Custom IT AMC Quote Today</h2>
          <p className="text-gray-600 mb-6">Send us your requirements and we'll deliver a detailed IT AMC proposal within 24 hours. Free infrastructure audit included with every new contract.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact">
              <Button className="bg-emerald-600 text-white" data-testid="button-itamc-final-cta">
                Request AMC Proposal
              </Button>
            </Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-itamc-whatsapp">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
