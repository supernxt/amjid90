import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, Bot, DollarSign, MessageSquare, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "AI Assistant",
    description: "Intelligent virtual assistant powered by advanced AI to streamline your workflow and boost productivity",
    gradient: "from-primary/10 via-rose-500/5 to-orange-500/10",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    Icon: Bot,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    id: 2,
    title: "Accounts AI Agents",
    description: "Automated accounting solutions for Zoho Books and QuickBooks with intelligent data processing",
    gradient: "from-emerald-500/10 via-teal-500/5 to-green-500/10",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    Icon: DollarSign,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-500/10",
  },
  {
    id: 3,
    title: "WhatsApp Integration",
    description: "Seamless WhatsApp integration with AI-powered chatbots for instant customer engagement",
    gradient: "from-green-500/10 via-emerald-500/5 to-teal-500/10",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
    Icon: MessageSquare,
    iconColor: "text-green-600",
    iconBg: "bg-green-500/10",
  },
  {
    id: 4,
    title: "Sales Team AI Agents",
    description: "Empower your sales team with AI-driven insights, automation, and intelligent lead management",
    gradient: "from-blue-500/10 via-cyan-500/5 to-sky-500/10",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    Icon: Users,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-500/10",
  },
  {
    id: 5,
    title: "Real Estate Marketing AI",
    description: "Revolutionary AI solutions for real estate marketing, property showcasing, and customer engagement",
    gradient: "from-amber-500/10 via-orange-500/5 to-yellow-500/10",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    Icon: Home,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-500/10",
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

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.Icon;

  return (
    <div 
      className="relative w-full h-[500px] md:h-[550px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50" 
      data-testid="container-video-slider"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={currentSlideData.image}
              alt={currentSlideData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center p-8 md:p-12">
            <div className="max-w-xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="mb-6"
                data-testid={`icon-slide-${currentSlide}`}
              >
                <div className={`w-16 h-16 rounded-2xl ${currentSlideData.iconBg} flex items-center justify-center shadow-lg`}>
                  <IconComponent className={`w-8 h-8 ${currentSlideData.iconColor}`} />
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
                data-testid={`text-slide-title-${currentSlide}`}
              >
                {currentSlideData.title}
              </motion.h2>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                data-testid={`text-slide-desc-${currentSlide}`}
              >
                {currentSlideData.description}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8"
              >
                <Button className="bg-gradient-to-r from-primary to-rose-500 hover:opacity-90 shadow-lg shadow-primary/20">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <Button
          size="icon"
          variant="outline"
          onClick={prevSlide}
          className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-md"
          data-testid="button-slide-prev"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </Button>

        <div className="flex gap-2 px-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => jumpToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              data-testid={`button-slide-indicator-${index}`}
            />
          ))}
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={nextSlide}
          className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-md"
          data-testid="button-slide-next"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setIsPlaying(!isPlaying)}
          className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-md ml-2"
          data-testid="button-slide-play"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-primary" />
          ) : (
            <Play className="h-4 w-4 text-gray-700" />
          )}
        </Button>
      </div>

      {/* Status indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm">
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-primary animate-pulse' : 'bg-gray-400'}`} />
          <span className="text-xs font-medium text-gray-600">
            {isPlaying ? "Auto-play" : "Paused"}
          </span>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 left-4 z-20">
        <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm">
          <span className="text-xs font-medium text-gray-600">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
}
