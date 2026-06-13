import { Link } from "wouter";
import VideoBackground from "@/components/VideoBackground";
import Hero3D from "@/components/Hero3D";
import ValueTiles from "@/components/ValueTiles";
import OfferStrip from "@/components/OfferStrip";
import TrustBar from "@/components/TrustBar";
import VideoSlider from "@/components/VideoSlider";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Radio, Server, Globe, Camera, Cable, Headphones, Network, Wifi } from "lucide-react";

const allServices = [
  {
    icon: Bot,
    title: "AI Solutions & Automation",
    desc: "AI agents, chatbots, n8n automation, WhatsApp bots, and intelligent workflows for UAE businesses.",
    path: "/ai-solutions",
    color: "bg-violet-500",
    tag: "AI & Digital",
  },
  {
    icon: Radio,
    title: "Enterprise Wireless Hotspot",
    desc: "Managed enterprise Wi-Fi for offices, hotels, malls, and venues across UAE and GCC.",
    path: "/wireless-hotspot",
    color: "bg-blue-500",
    tag: "Networking",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    desc: "Cloud servers, VPS hosting, network security, and 24/7 infrastructure management.",
    path: "/infrastructure",
    color: "bg-sky-500",
    tag: "Cloud",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom websites, e-commerce, SEO-optimised web apps for businesses in UAE and GCC.",
    path: "/website-development",
    color: "bg-emerald-500",
    tag: "Digital",
  },
  {
    icon: Camera,
    title: "CCTV Solutions",
    desc: "IP cameras, NVR/DVR, video analytics, and full CCTV installation across UAE, KSA, Qatar, Oman.",
    path: "/cctv-solutions",
    color: "bg-red-500",
    tag: "Security",
  },
  {
    icon: Cable,
    title: "Structured Cabling",
    desc: "TIA/ISO-certified Cat6, Cat6A, fiber optic cabling for offices, data centers, and hotels.",
    path: "/structured-cabling",
    color: "bg-amber-500",
    tag: "Infrastructure",
  },
  {
    icon: Headphones,
    title: "Managed IT & AMC",
    desc: "24/7 IT support, IT AMC contracts, helpdesk, server management, and network monitoring.",
    path: "/managed-it-services",
    color: "bg-blue-600",
    tag: "IT Services",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    desc: "Cisco, Juniper, and MikroTik networking — LAN/WAN design, firewalls, VPN, and NOC monitoring.",
    path: "/network-infrastructure",
    color: "bg-indigo-600",
    tag: "Networking",
  },
  {
    icon: Wifi,
    title: "Labor Camp & Hotel WiFi",
    desc: "High-density managed WiFi for worker camps, hotels, resorts, and construction sites in GCC.",
    path: "/labor-camp-wifi",
    color: "bg-emerald-600",
    tag: "Wireless",
  },
];

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Super Next Technologies Services",
  "description": "Complete enterprise IT and technology services in UAE, Saudi Arabia, Qatar, and Oman",
  "numberOfItems": 9,
  "itemListElement": allServices.map((s, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": s.title,
    "url": `https://supernxt.com${s.path}`,
    "description": s.desc,
  })),
};

export default function Home() {
  return (
    <VideoBackground variant="default">
      <SEO
        title="Super Next Technologies | AI Solutions & Enterprise IT Services UAE"
        description="Super Next Technologies — AI Solutions, Enterprise Wireless, CCTV, Fiber Optic, Structured Cabling, Managed IT, Cloud & Website Development in UAE, Saudi Arabia, Qatar, Oman. Based in Dubai."
        keywords="AI solutions Dubai, AI agents UAE, enterprise IT services, CCTV Dubai, structured cabling UAE, managed IT services Dubai, wireless hotspot UAE, cloud infrastructure GCC, website development Saudi Arabia, IT company Qatar, network infrastructure UAE, labor camp WiFi, Super Next Technologies"
        canonical="https://supernxt.com/"
        schema={homeSchema}
      />
      <Hero3D />
      <TrustBar />

      {/* AI Solutions Slider */}
      <div className="px-4 md:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">AI Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-gray-900">
              Our AI Agent Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our powerful AI-driven automation and intelligent agents
            </p>
          </div>
          <VideoSlider />
        </div>
      </div>

      {/* All Services Grid */}
      <div className="px-4 md:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Complete Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-gray-900">
              All Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end enterprise technology across UAE, Saudi Arabia, Qatar, and Oman
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link href={service.path}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group h-full"
                    data-testid={`card-service-${i}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center shrink-0`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">{service.tag}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                      Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ValueTiles />
      <OfferStrip />
    </VideoBackground>
  );
}
