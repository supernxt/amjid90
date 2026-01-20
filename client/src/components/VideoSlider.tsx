import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, Bot, DollarSign, MessageSquare, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "AI Assistant",
    description: "Intelligent virtual assistant powered by advanced AI to streamline your workflow and boost productivity",
    gradient: "from-primary/30 via-rose-500/20 to-orange-500/30",
    bgColor: "bg-gradient-to-br from-primary/5 to-rose-500/5",
    Icon: Bot,
    iconColor: "text-primary",
  },
  {
    id: 2,
    title: "Accounts AI Agents",
    description: "Automated accounting solutions for Zoho Books and QuickBooks with intelligent data processing",
    gradient: "from-emerald-500/30 via-primary/20 to-teal-500/30",
    bgColor: "bg-gradient-to-br from-emerald-500/5 to-teal-500/5",
    Icon: DollarSign,
    iconColor: "text-emerald-400",
  },
  {
    id: 3,
    title: "WhatsApp Integration",
    description: "Seamless WhatsApp integration with AI-powered chatbots for instant customer engagement",
    gradient: "from-green-500/30 via-primary/20 to-emerald-500/30",
    bgColor: "bg-gradient-to-br from-green-500/5 to-emerald-500/5",
    Icon: MessageSquare,
    iconColor: "text-green-400",
  },
  {
    id: 4,
    title: "Sales Team AI Agents",
    description: "Empower your sales team with AI-driven insights, automation, and intelligent lead management",
    gradient: "from-blue-500/30 via-primary/20 to-cyan-500/30",
    bgColor: "bg-gradient-to-br from-blue-500/5 to-cyan-500/5",
    Icon: Users,
    iconColor: "text-blue-400",
  },
  {
    id: 5,
    title: "Real Estate Marketing AI",
    description: "Revolutionary AI solutions for real estate marketing, property showcasing, and customer engagement",
    gradient: "from-amber-500/30 via-primary/20 to-orange-500/30",
    bgColor: "bg-gradient-to-br from-amber-500/5 to-orange-500/5",
    Icon: Home,
    iconColor: "text-amber-400",
  },
];

export default function VideoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const jumpToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="relative w-full h-[500px] md:h-[550px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl shadow-primary/5" 
      data-testid="container-video-slider"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 ${slides[currentSlide].bgColor}`} />
          
          {/* Animated gradient overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} opacity-50`}
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
              className="mb-8"
              data-testid={`icon-slide-${currentSlide}`}
            >
              <div className={`p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl`}>
                {(() => {
                  const IconComponent = slides[currentSlide].Icon;
                  return <IconComponent className={`w-16 h-16 md:w-20 md:h-20 ${slides[currentSlide].iconColor}`} />;
                })()}
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
              data-testid={`text-slide-title-${currentSlide}`}
            >
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
              data-testid={`text-slide-desc-${currentSlide}`}
            >
              {slides[currentSlide].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <Button
          size="icon"
          variant="ghost"
          onClick={prevSlide}
          className="h-10 w-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20"
          data-testid="button-slide-prev"
        >
          <ChevronLeft className="h-5 w-5 text-white/80" />
        </Button>

        <div className="flex gap-2 px-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => jumpToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              data-testid={`button-slide-indicator-${index}`}
            />
          ))}
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={nextSlide}
          className="h-10 w-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20"
          data-testid="button-slide-next"
        >
          <ChevronRight className="h-5 w-5 text-white/80" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          onClick={() => setIsPlaying(!isPlaying)}
          className="h-10 w-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 ml-2"
          data-testid="button-slide-play"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-primary" />
          ) : (
            <Play className="h-4 w-4 text-white/80" />
          )}
        </Button>
      </div>

      {/* Status indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-primary animate-pulse' : 'bg-white/40'}`} />
          <span className="text-xs font-medium text-white/60">
            {isPlaying ? "Auto-play" : "Paused"}
          </span>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 left-4 z-20">
        <div className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
          <span className="text-xs font-medium text-white/60">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
}
