import Background3D from "@/components/Background3D";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { openAIChat } from "@/lib/ai-assistant";
import { 
  Headphones, Clock, MessageCircle, BookOpen, 
  Phone, Mail, MapPin, CheckCircle, ArrowRight,
  FileQuestion, Wrench, Shield, Zap
} from "lucide-react";

const supportFeatures = [
  { 
    icon: Headphones, 
    title: "24/7 Support", 
    desc: "Always here to help",
    detail: "Round-the-clock technical assistance across all UAE time zones"
  },
  { 
    icon: Clock, 
    title: "Fast Response", 
    desc: "< 1 hour response time",
    detail: "Average response time of 30 minutes during business hours"
  },
  { 
    icon: MessageCircle, 
    title: "Live Chat", 
    desc: "Instant assistance",
    detail: "Connect with our AI assistant or human expert instantly"
  },
  { 
    icon: BookOpen, 
    title: "Knowledge Base", 
    desc: "Extensive documentation",
    detail: "1000+ articles, tutorials, and troubleshooting guides"
  },
];

const supportChannels = [
  {
    icon: Phone,
    title: "Phone Support",
    detail: "048864215",
    subtext: "Available 24/7 in English & Arabic",
    action: () => window.location.href = "tel:048864215"
  },
  {
    icon: Mail,
    title: "Email Support",
    detail: "support@supernxt.com",
    subtext: "Response within 1 hour",
    action: () => window.location.href = "mailto:support@supernxt.com"
  },
  {
    icon: MessageCircle,
    title: "Live AI Chat",
    detail: "Instant AI Assistant",
    subtext: "Get immediate answers 24/7",
    action: openAIChat
  },
  {
    icon: MapPin,
    title: "Visit Office",
    detail: "Production City, Dubai",
    subtext: "Mon-Fri: 9AM - 6PM GST",
    action: () => window.open("https://maps.app.goo.gl/4xaEugRG8vxcBmWc9", "_blank")
  },
];

const faqCategories = [
  {
    icon: FileQuestion,
    title: "General FAQs",
    count: "150+ articles",
    topics: ["Getting Started", "Account Management", "Billing & Pricing", "Security & Privacy"]
  },
  {
    icon: Wrench,
    title: "Technical Support",
    count: "200+ guides",
    topics: ["Installation Guides", "Troubleshooting", "API Documentation", "Integration Help"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    count: "50+ resources",
    topics: ["Data Protection", "UAE Compliance", "GDPR Guidelines", "Best Practices"]
  },
  {
    icon: Zap,
    title: "Product Updates",
    count: "Weekly updates",
    topics: ["Release Notes", "New Features", "Improvements", "Announcements"]
  },
];

const supportStats = [
  { value: "99.8%", label: "Customer Satisfaction" },
  { value: "< 30min", label: "Avg Response Time" },
  { value: "24/7", label: "Support Availability" },
  { value: "15+", label: "Languages Supported" },
];

export default function Support() {
  return (
    <Background3D variant="default">
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert support when you need it, every step of the way
            </p>
          </motion.div>

          {/* Support Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate" data-testid={`card-feature-${index}`}>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-3">{feature.desc}</p>
                  <p className="text-sm text-foreground/70">{feature.detail}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Support Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Get In Touch
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Choose your preferred support channel
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className="p-6 h-full hover-elevate cursor-pointer active-elevate-2" 
                    onClick={channel.action}
                    data-testid={`card-channel-${index}`}
                  >
                    <channel.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">{channel.title}</h3>
                    <p className="text-primary font-medium mb-1">{channel.detail}</p>
                    <p className="text-sm text-muted-foreground">{channel.subtext}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {supportStats.map((stat, index) => (
                  <div key={index} className="text-center" data-testid={`stat-${index}`}>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Knowledge Base Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Knowledge Base
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Browse our comprehensive help documentation
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faqCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover-elevate" data-testid={`card-kb-${index}`}>
                    <category.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm text-primary font-medium mb-4">{category.count}</p>
                    <ul className="space-y-2">
                      {category.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our support team is ready to assist you with any questions or technical issues
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={openAIChat} data-testid="button-talk-ai">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Talk to AI Assistant
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = "tel:048864215"} data-testid="button-call-support">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Support Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Background3D>
  );
}
