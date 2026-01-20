import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, Bot, DollarSign, MessageSquare, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "AI-Powered Solutions",
    description: "Transform your business with intelligent automation and AI assistants that work 24/7",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&q=80",
    Icon: Bot,
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
    gradient: "from-red-600/90 via-rose-500/80 to-orange-500/70",
  },
  {
    id: 2,
    title: "Smart Analytics Dashboard",
    description: "Real-time insights and automated reporting for Zoho Books and QuickBooks integration",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    Icon: DollarSign,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
    gradient: "from-emerald-600/90 via-teal-500/80 to-cyan-500/70",
  },
  {
    id: 3,
    title: "Instant Communication",
    description: "AI-powered chatbots and WhatsApp integration for seamless customer engagement",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=1200&h=800&fit=crop&q=80",
    Icon: MessageSquare,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/20",
    gradient: "from-green-600/90 via-emerald-500/80 to-teal-500/70",
  },
  {
    id: 4,
    title: "Enterprise Team Solutions",
    description: "Empower your sales team with AI-driven automation and intelligent lead management",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80",
    Icon: Users,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
    gradient: "from-blue-600/90 via-indigo-500/80 to-purple-500/70",
  },
  {
    id: 5,
    title: "Digital Property Marketing",
    description: "Revolutionary AI solutions for real estate marketing, virtual tours, and customer engagement",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&q=80",
    Icon: Home,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/20",
    gradient: "from-amber-600/90 via-orange-500/80 to-red-500/70",
  },
];

export default function VideoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentSlide]);

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
      className="relative w-full h-[500px] md:h-[550px] overflow-hidden rounded-3xl border border-gray-200 bg-gray-900 shadow-xl shadow-gray-200/50" 
      data-testid="container-video-slider"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Animated Background Image with Ken Burns effect */}
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              scale: [1, 1.1],
            }}
            transition={{ 
              duration: 8, 
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <img 
              src={currentSlideData.image}
              alt={currentSlideData.title}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-full object-cover"
              data-testid={`image-slide-${currentSlide}`}
            />
          </motion.div>
          
          {/* Gradient overlay for text readability */}
          <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

          {/* Animated particles/dots */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%",
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, "-20%"],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}
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
                <div className={`w-16 h-16 rounded-2xl ${currentSlideData.iconBg} backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20`}>
                  <IconComponent className={`w-8 h-8 ${currentSlideData.iconColor}`} />
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg"
                data-testid={`text-slide-title-${currentSlide}`}
              >
                {currentSlideData.title}
              </motion.h2>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md"
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
                <Button className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Loading indicator */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <Button
          size="icon"
          variant="outline"
          onClick={prevSlide}
          className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white"
          data-testid="button-slide-prev"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2 px-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => jumpToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              data-testid={`button-slide-indicator-${index}`}
            />
          ))}
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={nextSlide}
          className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white"
          data-testid="button-slide-next"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setIsPlaying(!isPlaying)}
          className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white ml-2"
          data-testid="button-slide-play"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Status indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-primary animate-pulse' : 'bg-white/60'}`} />
          <span className="text-xs font-medium text-white">
            {isPlaying ? "Auto-play" : "Paused"}
          </span>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 left-4 z-20">
        <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
          <span className="text-xs font-medium text-white">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
}
