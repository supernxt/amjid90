import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Bot, DollarSign, MessageSquare, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "AI Assistant",
    description: "Intelligent virtual assistant powered by advanced AI to streamline your workflow and boost productivity",
    gradient: "from-primary/20 via-cyan-500/20 to-blue-600/20",
    Icon: Bot,
  },
  {
    id: 2,
    title: "Accounts AI Agents",
    description: "Automated accounting solutions for Zoho Books and QuickBooks with intelligent data processing",
    gradient: "from-blue-500/20 via-primary/20 to-purple-600/20",
    Icon: DollarSign,
  },
  {
    id: 3,
    title: "WhatsApp Chatbot & Integration",
    description: "Seamless WhatsApp integration with AI-powered chatbots for instant customer engagement",
    gradient: "from-purple-500/20 via-primary/20 to-pink-600/20",
    Icon: MessageSquare,
  },
  {
    id: 4,
    title: "Sales Team AI Agents",
    description: "Empower your sales team with AI-driven insights, automation, and intelligent lead management",
    gradient: "from-green-500/20 via-primary/20 to-teal-600/20",
    Icon: Users,
  },
  {
    id: 5,
    title: "Real Estate Marketing AI",
    description: "Revolutionary AI solutions for real estate marketing, property showcasing, and customer engagement",
    gradient: "from-orange-500/20 via-red-500/20 to-pink-600/20",
    Icon: Home,
  },
];

function AnimatedBackground({ gradient }: { gradient: string }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.3) 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 50%, rgba(96, 165, 250, 0.3) 0%, transparent 50%)`,
            `radial-gradient(circle at 50% 80%, rgba(96, 165, 250, 0.3) 0%, transparent 50%)`,
            `radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.3) 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10">
          <defs>
            <pattern id="video-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#video-grid)" />
        </svg>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}

export default function VideoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [autoPlayKey, setAutoPlayKey] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayKey]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlayKey((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlayKey((prev) => prev + 1);
  };

  const jumpToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlayKey((prev) => prev + 1);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm" data-testid="container-video-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Dynamic animated background */}
          <AnimatedBackground gradient={slides[currentSlide].gradient} />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6"
              data-testid={`icon-slide-${currentSlide}`}
            >
              {(() => {
                const IconComponent = slides[currentSlide].Icon;
                return <IconComponent className="w-24 h-24 text-primary drop-shadow-2xl" />;
              })()}
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-primary to-cyan-400 bg-clip-text text-transparent"
              data-testid={`text-slide-title-${currentSlide}`}
            >
              {slides[currentSlide].title}
            </motion.h2>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-foreground/80 max-w-2xl"
              data-testid={`text-slide-desc-${currentSlide}`}
            >
              {slides[currentSlide].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <Button
          size="icon"
          variant="outline"
          onClick={prevSlide}
          className="bg-background/20 backdrop-blur-sm border-primary/40 hover:border-primary"
          data-testid="button-slide-prev"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => jumpToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/30 hover:bg-primary/50"
              }`}
              data-testid={`button-slide-indicator-${index}`}
            />
          ))}
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={nextSlide}
          className="bg-background/20 backdrop-blur-sm border-primary/40 hover:border-primary"
          data-testid="button-slide-next"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={() => {
            setIsPlaying(!isPlaying);
            setAutoPlayKey((prev) => prev + 1);
          }}
          className="bg-background/20 backdrop-blur-sm border-primary/40 hover:border-primary ml-2"
          data-testid="button-slide-play"
        >
          <Play className={`h-5 w-5 ${isPlaying ? "text-primary" : ""}`} />
        </Button>
      </div>

      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm border border-primary/40 rounded-full px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-foreground/80">
            {isPlaying ? "Auto-play ON" : "Paused"}
          </span>
        </div>
      </div>
    </div>
  );
}
