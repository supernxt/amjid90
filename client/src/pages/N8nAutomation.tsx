import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Zap, Bot, MessageSquare, GitBranch, Database, Globe, ArrowRight, CheckCircle, Phone, BarChart3, RefreshCw, Lock } from "lucide-react";

const useCases = [
  { icon: MessageSquare, title: "WhatsApp Business Automation", desc: "Auto-reply to customer enquiries, send appointment reminders, process orders and route leads — all through WhatsApp via n8n.", color: "bg-green-50 text-green-600" },
  { icon: Bot, title: "AI-Powered Lead Management", desc: "Connect your website forms, CRM, and AI agents to automatically qualify leads, create records, and trigger personalised follow-ups.", color: "bg-violet-50 text-violet-600" },
  { icon: Database, title: "CRM & ERP Integration", desc: "Sync data between Salesforce, HubSpot, Zoho, SAP and your other business tools without manual data entry or expensive middleware.", color: "bg-blue-50 text-blue-600" },
  { icon: GitBranch, title: "Multi-Step Workflow Automation", desc: "Automate complex business processes across approval chains, document generation, notifications, and reporting in a single workflow.", color: "bg-amber-50 text-amber-600" },
  { icon: Globe, title: "API & Third-Party Integrations", desc: "Connect any system via REST APIs, webhooks, or pre-built n8n connectors — over 400 integrations available out of the box.", color: "bg-cyan-50 text-cyan-600" },
  { icon: BarChart3, title: "Reporting & Dashboard Automation", desc: "Automatically generate weekly reports, pull data from multiple sources, and deliver formatted dashboards to stakeholders via email or Slack.", color: "bg-rose-50 text-rose-600" },
  { icon: RefreshCw, title: "Recurring Business Processes", desc: "Automate invoicing, payroll reminders, inventory checks, data backups, and any scheduled business task with zero manual effort.", color: "bg-orange-50 text-orange-600" },
  { icon: Lock, title: "Self-Hosted & Secure", desc: "n8n can be hosted on your own server or private cloud — keeping your business data fully under your control, never on third-party servers.", color: "bg-indigo-50 text-indigo-600" },
];

const process = [
  { step: "01", title: "Discovery & Mapping", desc: "We analyse your current business processes, identify manual bottlenecks, and map which workflows will deliver the highest ROI when automated." },
  { step: "02", title: "Workflow Design", desc: "Our engineers design the automation logic in n8n, including conditional branches, error handling, retries, and notification rules." },
  { step: "03", title: "Build & Integrate", desc: "We build the workflows, connect all your systems via APIs and webhooks, and test thoroughly with real data before go-live." },
  { step: "04", title: "Deployment & Training", desc: "We deploy to your chosen environment (cloud or on-premise), train your team, and document every workflow for future reference." },
  { step: "05", title: "Monitor & Optimise", desc: "We monitor automation performance, handle errors, and continuously optimise workflows as your business processes evolve." },
];

const faqs = [
  {
    q: "What is n8n and how is it different from Zapier or Make?",
    a: "n8n is an open-source workflow automation tool that can be self-hosted on your own server, giving you full data privacy and control. Unlike Zapier or Make (Integromat), n8n has no per-task pricing — you pay a flat fee or host it yourself, making it far more cost-effective for high-volume UAE businesses.",
  },
  {
    q: "What business processes can be automated with n8n in the UAE?",
    a: "Virtually any repetitive digital process. Common UAE use cases include: WhatsApp lead response, rental contract workflows, HR onboarding, invoice generation, CRM updates, government portal data entry, ERP sync, and multi-channel customer support routing.",
  },
  {
    q: "Do I need technical knowledge to use n8n after setup?",
    a: "No. We build and deploy the automation for you, then provide training on how to monitor and make basic edits. For ongoing changes, our managed automation service means you simply tell us what you need and we handle the rest.",
  },
  {
    q: "Can n8n connect to UAE government and local portals?",
    a: "Where APIs or data export options are available, yes. We have experience integrating with local business systems and can build custom connectors using browser automation (Puppeteer/Playwright) for portals that don't have public APIs.",
  },
  {
    q: "How long does it take to set up n8n automation for my business?",
    a: "Simple automations (e.g. lead to CRM + WhatsApp notification) take 1–3 days. Complex multi-system workflows typically take 1–3 weeks depending on the number of integrations and approval logic required.",
  },
  {
    q: "Is my business data secure with n8n automation?",
    a: "Yes. We recommend self-hosting n8n on your own VPS or private cloud, meaning your data never leaves your infrastructure. All API credentials are stored encrypted, and we implement role-based access control so only authorised team members can view or edit workflows.",
  },
];

const n8nSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "n8n Automation & Business Process Automation UAE",
    serviceType: "Business Process Automation",
    description: "Custom n8n workflow automation, WhatsApp bots, CRM integration, and AI-powered business automation for UAE companies. Self-hosted, secure, and cost-effective.",
    url: "https://supernxt.com/n8n-automation",
    provider: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
    areaServed: [{ "@type": "Country", name: "United Arab Emirates" }],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://supernxt.com/" },
      { "@type": "ListItem", position: 2, name: "AI Solutions", item: "https://supernxt.com/ai-solutions" },
      { "@type": "ListItem", position: 3, name: "n8n Automation", item: "https://supernxt.com/n8n-automation" },
    ],
  },
];

export default function N8nAutomation() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="n8n Automation UAE | Business Process Automation Dubai | Super Next"
        description="Custom n8n workflow automation, WhatsApp bots, CRM integration & AI business automation for UAE companies. Self-hosted, secure. Dubai-based team. Free demo."
        canonical="https://supernxt.com/n8n-automation"
        keywords="n8n automation UAE, n8n Dubai, business process automation UAE, workflow automation Dubai, WhatsApp automation UAE, CRM integration Dubai, AI automation UAE, n8n development UAE, process automation Dubai"
        schema={n8nSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6">
                <Zap className="h-3.5 w-3.5 text-violet-600" />
                <span className="text-sm font-semibold text-violet-700">Business Automation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                n8n Workflow Automation{" "}
                <span className="bg-gradient-to-r from-violet-600 to-primary bg-clip-text text-transparent">for UAE Businesses</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Automate repetitive business processes, connect your apps and CRM, and deploy AI-powered workflows — using n8n, the secure, self-hosted automation platform trusted by enterprises across the UAE and GCC.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["WhatsApp automation", "CRM & ERP integration", "AI agent workflows", "Self-hosted & private", "400+ app connectors", "Free consultation"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-violet-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-violet-600 to-primary text-white" data-testid="button-n8n-cta">
                    Get Free Automation Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-n8n-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block">
              <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-3 text-gray-400 text-xs font-mono">n8n workflow</span>
                </div>
                {["Lead received via WhatsApp", "AI qualifies & scores lead", "CRM record created (Zoho)", "Manager notified via Slack", "Follow-up email scheduled", "Deal pipeline updated"].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-violet-600/20 border border-violet-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-400 text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-gray-300 text-sm">{step}</span>
                    {i < 5 && <div className="absolute ml-3 mt-6 w-px h-3 bg-violet-800" />}
                  </div>
                ))}
                <div className="mt-4 px-3 py-2 bg-green-900/30 border border-green-700 rounded-lg">
                  <span className="text-green-400 text-xs font-mono">✓ Workflow completed in 2.3s — 0 manual steps</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Automate for UAE Businesses</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From simple task automation to complex multi-system integrations — we build n8n workflows tailored to your operations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-violet-200 transition-all"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${u.color}`}>
                  <u.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-gray-50 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Automation Implementation Process</h2>
            <p className="text-gray-500">A structured approach to building reliable, production-ready automations for your business.</p>
          </div>
          <div className="space-y-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 bg-white border border-gray-200 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {p.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related AI & Automation Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "AI Agents & Solutions", path: "/ai-solutions" },
              { label: "Managed IT Services", path: "/managed-it-services" },
              { label: "IT AMC Dubai", path: "/it-amc" },
              { label: "IT Solutions Dubai", path: "/dubai" },
              { label: "Free IT Audit", path: "/free-audit" },
            ].map(({ label, path }) => (
              <Link key={path} href={path}>
                <Button variant="outline" className="border-gray-300" data-testid={`link-n8n-${label.toLowerCase().replace(/\s+/g, "-")}`}>
                  {label} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="n8n Automation — FAQs"
        subtitle="Common questions from UAE businesses about n8n workflow automation."
        faqs={faqs}
        ctaText="Book a Free Automation Demo"
      />

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-violet-50 to-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Automate Your Business?</h2>
          <p className="text-gray-600 mb-6">Book a free 30-minute consultation — we'll map your top 3 automation opportunities and show you exactly what n8n can do for your business.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-violet-600 to-primary text-white" data-testid="button-n8n-final-cta">
                Book Free Consultation
              </Button>
            </Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-n8n-whatsapp">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
