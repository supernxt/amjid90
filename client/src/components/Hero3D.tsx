import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";
import { useLocation } from "wouter";
import { Sparkles, ArrowRight, Zap, Globe, Shield, Cpu, Play } from "lucide-react";

const floatingIcons = [
  { Icon: Zap, delay: 0, x: "8%", y: "25%", color: "text-amber-500" },
  { Icon: Globe, delay: 0.5, x: "88%", y: "20%", color: "text-blue-500" },
  { Icon: Shield, delay: 1, x: "12%", y: "70%", color: "text-emerald-500" },
  { Icon: Cpu, delay: 1.5, x: "85%", y: "65%", color: "text-violet-500" },
];

export default function Hero3D() {
  const [, setLocation] = useLocation();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y, color }, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1],
            y: [0, -15, 0]
          }}
          transition={{ 
            delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="p-4 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100">
            <Icon className={`w-8 h-8 ${color}`} />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 mb-8"
              data-testid="badge-hero-tag"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-gray-700">
                AI-Powered Enterprise Solutions
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              data-testid="text-hero-headline"
            >
              <span className="text-gray-900">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-rose-500 to-orange-500 bg-clip-text text-transparent">
                Business
              </span>
              <br />
              <span className="text-gray-900">with AI & Technology</span>
            </h1>

            {/* Subtext */}
            <p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
              data-testid="text-hero-subtext"
            >
              <span className="text-primary font-semibold">AI Agents</span> • 
              <span className="text-gray-600"> Automations</span> • 
              <span className="text-blue-600 font-semibold"> Enterprise Hotspots</span> • 
              <span className="text-gray-600"> Cloud & Networks</span>
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mb-10">
              {[
                { value: "500+", label: "Projects", color: "text-primary" },
                { value: "99.9%", label: "Uptime", color: "text-emerald-600" },
                { value: "24/7", label: "AI Support", color: "text-blue-600" },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="text-base px-8 bg-gradient-to-r from-primary to-rose-500 hover:opacity-90 shadow-lg shadow-primary/25"
                onClick={openAIChat} 
                data-testid="button-talk-ai"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Talk to AI Assistant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => setLocation('/ai-solutions')} 
                data-testid="button-explore-ai"
              >
                Explore AI Solutions
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - AI/Tech Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
                  alt="AI Technology"
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center cursor-pointer shadow-xl"
                  >
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </motion.div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Next-Gen AI Solutions</p>
                    <p className="text-xs text-gray-600">Powering enterprise innovation across UAE & GCC</p>
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">AI</p>
                    <p className="text-xs text-gray-500">Powered</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
