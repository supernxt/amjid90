import { useState } from "react";
import { motion } from "framer-motion";
import VideoBackground from "@/components/VideoBackground";
import SEO from "@/components/SEO";
import FlipCard from "@/components/FlipCard";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";
import FAQSection from "@/components/FAQSection";
import { 
  Mail, Edit, TrendingUp, Search, RefreshCw, FileText, 
  Globe, Users, MessageSquare, DollarSign, Clock, Bell,
  CheckSquare, FileCode, Phone, UserPlus, Target, 
  Briefcase, Bot, Headphones, MessageCircle, Book
} from "lucide-react";

const aiFaqs = [
  { q: "What is an AI agent and how can it help my UAE business?", a: "An AI agent is a software system that uses artificial intelligence to perform tasks autonomously — answering customer enquiries on WhatsApp, qualifying leads, processing documents, monitoring systems, or running marketing sequences. Unlike basic chatbots, AI agents can reason, take actions, and integrate with your existing tools (CRM, ERP, email, WhatsApp)." },
  { q: "How long does it take to implement AI automation?", a: "Simple automations (WhatsApp reply bot, invoice processing, email sequences) typically take 1–2 weeks. Complex multi-system integrations (AI SDR, full customer service replacement, ERP automation) take 4–8 weeks. We start with a discovery call to scope requirements and provide a fixed timeline." },
  { q: "What is the ROI on AI automation for UAE businesses?", a: "ROI varies by use case. Typical outcomes our clients report: 40–60% reduction in customer support staff costs, 3x increase in sales outreach volume (AI SDR), 70% faster document processing, and 24/7 coverage without overtime. Most clients see ROI within 3–6 months." },
  { q: "Do I need technical staff to manage AI agents?", a: "No. We build and maintain AI agents for you under our managed AI service. The AI systems are designed to be monitored through simple dashboards. We handle all technical maintenance, updates, and improvements. Your team just uses the output." },
  { q: "What tools and platforms do you use for AI automation?", a: "We build on n8n, Make (formerly Integromat), OpenAI (GPT-4o), Anthropic Claude, ElevenLabs, Twilio, and WhatsApp Business API — integrated with your existing tools like Zoho, HubSpot, Salesforce, Microsoft 365, QuickBooks, and more." },
];

const aiSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://supernxt.com/ai-solutions#service",
    "name": "AI Agents & Automation Solutions UAE",
    "serviceType": "AI Automation",
    "description": "Custom AI agents for marketing, sales, operations and support. Intelligent automation workflows, WhatsApp bots, n8n workflows, and AI chatbots for businesses across UAE.",
    "url": "https://supernxt.com/ai-solutions",
    "provider": { "@id": "https://supernxt.com/#organization" },
    "areaServed": [{ "@type": "Country", "name": "United Arab Emirates" }],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Marketing Automation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Sales & SDR Automation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Customer Support Agents" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp AI Bots" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "n8n Workflow Automation" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://supernxt.com/" },
      { "@type": "ListItem", "position": 2, "name": "AI Solutions", "item": "https://supernxt.com/ai-solutions" }
    ]
  }
];

const categories = ["All", "Marketing", "Operations", "Product", "Sales", "Support"];

const agents = [
  { icon: TrendingUp, title: "Brand Monitor", description: "Monitor brand mentions across platforms", features: ["Real-time tracking", "Sentiment analysis", "Alert system", "Multi-platform"], category: "Marketing" },
  { icon: Edit, title: "Newsletter Writer", description: "AI-powered newsletter content creation", features: ["Auto-generation", "Template library", "Personalization", "Analytics"], category: "Marketing" },
  { icon: Search, title: "Competition Tracker", description: "Track competitor activities and trends", features: ["Price monitoring", "Feature tracking", "Market analysis", "Reports"], category: "Marketing" },
  { icon: FileText, title: "SEO Blog Writer", description: "Create SEO-optimized blog content", features: ["Keyword research", "Content optimization", "Meta tags", "Publishing"], category: "Marketing" },
  { icon: DollarSign, title: "Invoice Tracker", description: "Vendor invoice and payment tracking", features: ["Auto-capture", "Payment reminders", "Reconciliation", "Reports"], category: "Operations" },
  { icon: FileCode, title: "Weekly Reports", description: "Compile automated weekly reports", features: ["Data aggregation", "Visualization", "Distribution", "Scheduling"], category: "Operations" },
  { icon: Bell, title: "Email Alerts", description: "Time-sensitive email monitoring", features: ["Smart filtering", "Priority detection", "Auto-response", "Escalation"], category: "Operations" },
  { icon: CheckSquare, title: "Project Updater", description: "Auto-update project status in Notion", features: ["Task sync", "Status tracking", "Notifications", "Integration"], category: "Operations" },
  { icon: Book, title: "Product Docs", description: "Create comprehensive product documentation", features: ["Auto-generation", "Version control", "Collaboration", "Publishing"], category: "Product" },
  { icon: Bot, title: "Bug Reporter", description: "Bug tracking and resolution agent", features: ["Auto-detection", "Categorization", "Assignment", "Resolution tracking"], category: "Product" },
  { icon: Phone, title: "Meeting Recorder", description: "Record and transcribe meetings", features: ["Auto-recording", "Transcription", "Summary", "Action items"], category: "Sales" },
  { icon: UserPlus, title: "Recruiting Agent", description: "Automated recruitment assistant", features: ["Candidate screening", "Interview scheduling", "Follow-ups", "Analytics"], category: "Sales" },
  { icon: Target, title: "Lead Generator", description: "Generate and qualify leads", features: ["Prospecting", "Enrichment", "Scoring", "CRM sync"], category: "Sales" },
  { icon: Briefcase, title: "AI SDR", description: "AI-powered sales development", features: ["Outreach", "Follow-ups", "Qualification", "Handoff"], category: "Sales" },
  { icon: Mail, title: "Email Support", description: "Customer support email responder", features: ["Auto-response", "Ticket creation", "Categorization", "Escalation"], category: "Support" },
  { icon: MessageSquare, title: "WhatsApp Bot", description: "WhatsApp customer support agent", features: ["24/7 availability", "Multi-language", "Rich media", "Handoff"], category: "Support" },
  { icon: MessageCircle, title: "SMS Support", description: "SMS-based support automation", features: ["Auto-replies", "Status updates", "Alerts", "Two-way chat"], category: "Support" },
  { icon: Headphones, title: "Phone Support", description: "Voice-based AI support agent", features: ["Natural language", "Call routing", "Recording", "Analytics"], category: "Support" },
];

export default function AISolutions() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAgents = selectedCategory === "All" 
    ? agents 
    : agents.filter(agent => agent.category === selectedCategory);

  return (
    <>
    <VideoBackground variant="ai">
      <SEO
        title="AI Agents & Automation UAE | WhatsApp Bots, n8n, ChatGPT | Super Next"
        description="Custom AI agents, WhatsApp bots & n8n workflow automation for UAE businesses. Cut costs 40–60%, automate lead follow-up, support & reporting. Free demo. Dubai-based."
        keywords="AI agents UAE, AI automation Dubai, chatbot development UAE, WhatsApp AI bot, voice AI assistant, n8n automation UAE, AI SDR Dubai, marketing automation UAE, AI solutions Dubai, intelligent automation UAE"
        canonical="https://supernxt.com/ai-solutions"
        schema={aiSchema}
      />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with AI Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">AI Solutions</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-6 text-gray-900">
                Intelligent AI Agents
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Multichannel AI agents across Web, WhatsApp, Voice, and Email with 24/7 autonomy and seamless CRM/ERP integration
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
                  alt="AI Technology"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-primary to-rose-500" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Agent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredAgents.map((agent, index) => (
              <FlipCard
                key={agent.title}
                icon={agent.icon}
                title={agent.title}
                description={agent.description}
                features={agent.features}
                category={agent.category}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 bg-gray-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900">Ready to automate?</h3>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary">
              <span className="font-semibold">Integrations:</span>
              <span className="text-sm">WhatsApp • Twilio • Zoho • HubSpot • GitHub • Notion • QuickBooks • Airtable</span>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-primary to-rose-500" onClick={openAIChat} data-testid="button-book-demo">Book an AI Demo</Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700" onClick={openAIChat} data-testid="button-talk-ai-assistant">Talk to AI Assistant</Button>
            </div>
          </div>

          {/* Internal links to related automation pages */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <a href="/n8n-automation" className="group flex items-start gap-4 border border-gray-200 rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all bg-white">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900 group-hover:text-primary transition-colors">n8n Workflow Automation</p>
                <p className="text-sm text-gray-500 mt-1">Self-hosted business process automation, CRM integration & WhatsApp bots for UAE businesses.</p>
              </div>
            </a>
            <a href="/it-amc" className="group flex items-start gap-4 border border-gray-200 rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all bg-white">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900 group-hover:text-primary transition-colors">IT AMC & Managed IT</p>
                <p className="text-sm text-gray-500 mt-1">Annual IT maintenance contracts with 24/7 helpdesk, NOC monitoring and 4-hour on-site SLA.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </VideoBackground>
    <FAQSection
      title="AI Automation — FAQs"
      subtitle="Common questions from UAE businesses exploring AI agents and automation."
      faqs={aiFaqs}
      ctaText="Book an AI Demo"
    />
    </>
  );
}
