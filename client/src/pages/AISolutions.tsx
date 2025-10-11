import { useState } from "react";
import { motion } from "framer-motion";
import FlipCard from "@/components/FlipCard";
import { Button } from "@/components/ui/button";
import { 
  Mail, Edit, TrendingUp, Search, RefreshCw, FileText, 
  Globe, Users, MessageSquare, DollarSign, Clock, Bell,
  CheckSquare, FileCode, Phone, UserPlus, Target, 
  Briefcase, Bot, Headphones, MessageCircle, Book
} from "lucide-react";

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
    <div className="pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            AI Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multichannel AI agents across Web, WhatsApp, Voice, and Email with 24/7 autonomy and seamless CRM/ERP integration
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

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

        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary">
            <span className="font-semibold">Integrations:</span>
            <span className="text-sm">WhatsApp • Twilio • Zoho • HubSpot • GitHub • Notion • QuickBooks • Airtable</span>
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" data-testid="button-book-demo">Book an AI Demo</Button>
            <Button size="lg" variant="outline" data-testid="button-talk-ai-assistant">Talk to AI Assistant</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
