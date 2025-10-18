import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Bot, Wifi, Cloud, Palette } from "lucide-react";
import { openAIChat } from "@/lib/ai-assistant";

const tiles = [
  {
    icon: Bot,
    title: "AI Agents & Automations",
    description: "24/7 intelligent agents across Web, WhatsApp, Voice, and Email",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Wifi,
    title: "Wireless Enterprise Hotspots",
    description: "Multi-WAN, VLAN segmentation, captive portal, and advanced security",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud & Networks",
    description: "VPS, K8s, VPN, SD-WAN, and enterprise-grade infrastructure",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Palette,
    title: "3D Websites",
    description: "Immersive React Three Fiber experiences with AR-ready components",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export default function ValueTiles() {
  return (
    <div className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card 
                className={`p-6 hover-elevate active-elevate-2 cursor-pointer transition-all bg-gradient-to-br ${tile.gradient}`}
                data-testid={`card-value-${tile.title.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={openAIChat}
              >
                <tile.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-tile-title-${index}`}>
                  {tile.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-tile-desc-${index}`}>
                  {tile.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
