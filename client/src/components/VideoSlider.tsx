import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "AI-Powered Solutions",
    description: "Transform your business with cutting-edge AI agents and automation",
    gradient: "from-primary/20 via-cyan-500/20 to-blue-600/20",
    icon: "🤖",
  },
  {
    id: 2,
    title: "Enterprise Wireless Hotspots",
    description: "Seamless connectivity for modern businesses with advanced security",
    gradient: "from-blue-500/20 via-primary/20 to-purple-600/20",
    icon: "📡",
  },
  {
    id: 3,
    title: "Cloud Infrastructure",
    description: "Scalable, secure infrastructure solutions for growing enterprises",
    gradient: "from-purple-500/20 via-primary/20 to-pink-600/20",
    icon: "☁️",
  },
  {
    id: 4,
    title: "3D Web Development",
    description: "Immersive web experiences with stunning 3D visuals and animations",
    gradient: "from-green-500/20 via-primary/20 to-teal-600/20",
    icon: "🌐",
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

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-8xl mb-6 filter drop-shadow-2xl"
            >
              {slides[currentSlide].icon}
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

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
          
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
              onClick={() => setCurrentSlide(index)}
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
          onClick={() => setIsPlaying(!isPlaying)}
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
