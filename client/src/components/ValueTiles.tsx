import { motion } from "framer-motion";
import { Bot, Wifi, Cloud, Palette, ArrowRight } from "lucide-react";
import { openAIChat } from "@/lib/ai-assistant";
import { useLocation } from "wouter";

const tiles = [
  {
    icon: Bot,
    title: "AI Agents & Automations",
    description: "24/7 intelligent agents across Web, WhatsApp, Voice, and Email",
    gradient: "from-primary/5 to-rose-500/5",
    iconBg: "bg-gradient-to-br from-primary to-rose-500",
    borderColor: "border-primary/20 hover:border-primary/40",
    link: "/ai-solutions",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
  },
  {
    icon: Wifi,
    title: "Wireless Enterprise Hotspots",
    description: "Multi-WAN, VLAN segmentation, captive portal, and advanced security",
    gradient: "from-blue-500/5 to-cyan-500/5",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    link: "/wireless-hotspot",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
  },
  {
    icon: Cloud,
    title: "Cloud & Networks",
    description: "VPS, K8s, VPN, SD-WAN, and enterprise-grade infrastructure",
    gradient: "from-emerald-500/5 to-teal-500/5",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
    link: "/infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
  },
  {
    icon: Palette,
    title: "3D Websites",
    description: "Immersive React Three Fiber experiences with AR-ready components",
    gradient: "from-violet-500/5 to-purple-500/5",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
    borderColor: "border-violet-500/20 hover:border-violet-500/40",
    link: "/website-development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
  },
];

export default function ValueTiles() {
  const [, setLocation] = useLocation();

  return (
    <div className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technology solutions designed to transform your business operations
          </p>
        </motion.div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={`group relative rounded-3xl border-2 bg-white overflow-hidden cursor-pointer transition-all duration-500 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 ${tile.borderColor}`}
                data-testid={`card-value-${tile.title.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setLocation(tile.link)}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tile.image}
                    alt={tile.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tile.gradient} from-white via-transparent to-transparent`} />
                </div>
                
                {/* Content */}
                <div className="relative p-6">
                  <div className={`w-14 h-14 rounded-xl ${tile.iconBg} flex items-center justify-center mb-5 shadow-lg -mt-12 relative z-10`}>
                    <tile.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors" data-testid={`text-tile-title-${index}`}>
                    {tile.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4" data-testid={`text-tile-desc-${index}`}>
                    {tile.description}
                  </p>
                  
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg"
            data-testid="button-ask-ai"
          >
            <Bot className="w-5 h-5" />
            Ask our AI about any service
          </button>
        </motion.div>
      </div>
    </div>
  );
}
