import { motion } from "framer-motion";
import VideoBackground from "@/components/VideoBackground";
import PricingCard from "@/components/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Mail, Phone, MessageSquare } from "lucide-react";

const WHATSAPP = "https://wa.me/971048864215";

const aiCards = [
  {
    title: "AI Automation",
    description: "Automate repetitive tasks and improve operational efficiency.",
    features: [
      "Business Process Automation",
      "AI-Powered Workflows",
      "Smart Notifications",
      "CRM Integration",
      "Email Automation",
      "Productivity Enhancement",
    ],
    buttonLabel: "Get Started",
    buttonHref: "/contact",
  },
  {
    title: "AI Assistants",
    description: "Custom AI assistants for customer support, operations, and internal teams.",
    features: [
      "Website AI Chatbots",
      "WhatsApp AI Assistant",
      "Knowledge Base Integration",
      "Lead Qualification",
      "Multi-Language Support",
      "Custom Training",
    ],
    isPopular: true,
    buttonLabel: "Book a Demo",
    buttonHref: "/contact",
  },
  {
    title: "AI Transformation",
    description: "Enterprise-grade AI solutions designed around your business goals.",
    features: [
      "Custom AI Development",
      "Department Automation",
      "Enterprise Integrations",
      "Data Intelligence",
      "AI Consulting",
      "Ongoing Support",
    ],
    buttonLabel: "Talk to an AI Expert",
    buttonHref: WHATSAPP,
    buttonExternal: true,
  },
];

const hotspotCards = [
  {
    title: "Managed WiFi",
    description: "Reliable internet access for staff accommodations, camps, hotels, and businesses.",
    features: [
      "Captive Portal Authentication",
      "User & Voucher Management",
      "Network Monitoring",
      "Secure Internet Access",
      "Professional Deployment",
      "Ongoing Technical Support",
    ],
    buttonLabel: "Get a Custom Solution",
    buttonHref: "/contact",
  },
  {
    title: "Smart Connectivity",
    description: "Designed for organizations that require performance, stability, and centralized management.",
    features: [
      "Multi-Site Connectivity",
      "Advanced User Control",
      "Usage Analytics",
      "Bandwidth Management",
      "ISP Integration",
      "Priority Technical Support",
    ],
    isPopular: true,
    buttonLabel: "Request Consultation",
    buttonHref: "/contact",
  },
  {
    title: "Enterprise Networking",
    description: "Tailored networking solutions for large-scale operations and mission-critical environments.",
    features: [
      "Enterprise WiFi Infrastructure",
      "High Availability Design",
      "Network Security Integration",
      "Scalable Architecture",
      "24/7 Monitoring Options",
      "Dedicated Project Management",
    ],
    buttonLabel: "Contact Our Experts",
    buttonHref: WHATSAPP,
    buttonExternal: true,
  },
];

const websiteCards = [
  {
    title: "Business Website",
    description: "Professional websites designed to build trust and generate inquiries.",
    features: [
      "Modern Responsive Design",
      "Mobile Friendly",
      "SEO Ready",
      "Contact Forms",
      "Fast Loading",
      "Domain & Hosting Included",
    ],
    buttonLabel: "Request a Quote",
    buttonHref: "/contact",
  },
  {
    title: "Business Growth Website",
    description: "Designed for companies looking to attract more customers and generate leads.",
    features: [
      "Premium Design",
      "SEO Optimization",
      "Lead Generation Forms",
      "WhatsApp Integration",
      "Content Management",
      "Performance Optimization",
    ],
    isPopular: true,
    buttonLabel: "Get a Proposal",
    buttonHref: "/contact",
  },
  {
    title: "Enterprise Digital Platform",
    description: "Advanced web solutions for organizations requiring custom functionality.",
    features: [
      "Custom Development",
      "Business System Integration",
      "Client Portals",
      "API Connectivity",
      "Enhanced Security",
      "Scalable Architecture",
    ],
    buttonLabel: "Speak With Our Team",
    buttonHref: WHATSAPP,
    buttonExternal: true,
  },
];

export default function Pricing() {
  return (
    <VideoBackground variant="pricing">
      <SEO
        title="Custom Solutions & Pricing | Super Next Technologies UAE"
        description="Tailored AI, networking, and web solutions for every business in UAE. Contact us for a custom quote — no hidden fees, no bloated packages."
        keywords="IT services pricing UAE, enterprise technology quote Dubai, AI solutions quote UAE, managed WiFi pricing Dubai, website development quote UAE, Super Next Technologies"
        canonical="https://supernxt.com/pricing"
      />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Plans & Pricing</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-6 text-gray-900">
              Custom Solutions for Every Business
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every business is unique. We design tailored technology, AI, networking, and web solutions based on your exact requirements, ensuring maximum value, performance, and long-term success.
            </p>
          </motion.div>

          {/* Contact banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a href="mailto:hello@supernxt.com">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 gap-2">
                <Mail className="h-4 w-4" />
                hello@supernxt.com
              </Button>
            </a>
            <a href="tel:048864215">
              <Button variant="outline" className="border-gray-300 text-gray-700 gap-2">
                <Phone className="h-4 w-4" />
                04 886 4215
              </Button>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 gap-2">
                <MessageSquare className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </a>
          </motion.div>

          {/* Plans tabs */}
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="ai" data-testid="tab-pricing-ai">AI Solutions</TabsTrigger>
              <TabsTrigger value="hotspot" data-testid="tab-pricing-hotspot">Hotspot</TabsTrigger>
              <TabsTrigger value="website" data-testid="tab-pricing-website">Websites</TabsTrigger>
            </TabsList>

            <TabsContent value="ai">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aiCards.map((card) => (
                  <PricingCard key={card.title} {...card} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hotspot">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {hotspotCards.map((card) => (
                  <PricingCard key={card.title} {...card} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="website">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {websiteCards.map((card) => (
                  <PricingCard key={card.title} {...card} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-br from-primary/5 to-rose-500/5 border border-primary/20 rounded-3xl p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Not sure where to start?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Our team will assess your requirements and recommend the right solution — then provide a transparent, itemised quote with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-rose-500 shadow-lg shadow-primary/20">
                  Request a Free Consultation
                </Button>
              </Link>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-600 text-green-700 gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </VideoBackground>
  );
}
