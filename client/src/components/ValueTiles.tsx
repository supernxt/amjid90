import { motion } from "framer-motion";
import { Bot, Wifi, Cloud, Palette, ArrowRight } from "lucide-react";
import { openAIChat } from "@/lib/ai-assistant";
import { useLocation } from "wouter";

const tiles = [
  {
    icon: Bot,
    title: "AI Agents & Automations",
    description: "24/7 intelligent agents across Web, WhatsApp, Voice, and Email",
    gradient: "from-primary/20 via-rose-500/10 to-orange-500/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    link: "/ai-solutions",
  },
  {
    icon: Wifi,
    title: "Wireless Enterprise Hotspots",
    description: "Multi-WAN, VLAN segmentation, captive portal, and advanced security",
    gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    link: "/wireless-hotspot",
  },
  {
    icon: Cloud,
    title: "Cloud & Networks",
    description: "VPS, K8s, VPN, SD-WAN, and enterprise-grade infrastructure",
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    link: "/infrastructure",
  },
  {
    icon: Palette,
    title: "3D Websites",
    description: "Immersive React Three Fiber experiences with AR-ready components",
    gradient: "from-violet-500/20 via-purple-500/10 to-pink-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    link: "/website-development",
  },
];

export default function ValueTiles() {
  const [, setLocation] = useLocation();

  return (
    <div className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              What We Offer
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Cutting-edge technology solutions designed to transform your business operations
          </p>
        </motion.div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={`group relative p-6 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:border-white/20 hover:bg-slate-900/80 overflow-hidden`}
                data-testid={`card-value-${tile.title.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setLocation(tile.link)}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl ${tile.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <tile.icon className={`h-7 w-7 ${tile.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors" data-testid={`text-tile-title-${index}`}>
                    {tile.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm leading-relaxed mb-4 group-hover:text-white/70 transition-colors" data-testid={`text-tile-desc-${index}`}>
                    {tile.description}
                  </p>
                  
                  <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={openAIChat}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
            data-testid="button-ask-ai"
          >
            <Bot className="w-5 h-5 text-primary" />
            Ask our AI about any service
          </button>
        </motion.div>
      </div>
    </div>
  );
}
