import { motion } from "framer-motion";

interface VideoBackgroundProps {
  variant?: "default" | "ai" | "wireless" | "infrastructure" | "web" | "pricing" | "legal";
  children?: React.ReactNode;
}

export default function VideoBackground({ variant = "default", children }: VideoBackgroundProps) {
  const getGradientConfig = () => {
    const configs = {
      ai: {
        gradient: "from-slate-950 via-slate-900 to-slate-950",
        accent1: "bg-primary/10",
        accent2: "bg-accent/8",
        accent3: "bg-primary/6"
      },
      wireless: {
        gradient: "from-slate-950 via-slate-900/95 to-slate-950",
        accent1: "bg-blue-500/10",
        accent2: "bg-primary/8",
        accent3: "bg-cyan-500/6"
      },
      infrastructure: {
        gradient: "from-slate-950 via-slate-900 to-slate-950",
        accent1: "bg-emerald-500/10",
        accent2: "bg-primary/8",
        accent3: "bg-teal-500/6"
      },
      web: {
        gradient: "from-slate-950 via-slate-900/95 to-slate-950",
        accent1: "bg-violet-500/10",
        accent2: "bg-primary/8",
        accent3: "bg-purple-500/6"
      },
      pricing: {
        gradient: "from-slate-950 via-slate-900 to-slate-950",
        accent1: "bg-amber-500/10",
        accent2: "bg-primary/8",
        accent3: "bg-orange-500/6"
      },
      legal: {
        gradient: "from-slate-950 via-slate-900/98 to-slate-950",
        accent1: "bg-slate-500/10",
        accent2: "bg-primary/5",
        accent3: "bg-slate-400/4"
      },
      default: {
        gradient: "from-slate-950 via-slate-900 to-slate-950",
        accent1: "bg-primary/10",
        accent2: "bg-accent/8",
        accent3: "bg-primary/6"
      }
    };

    return configs[variant] || configs.default;
  };

  const config = getGradientConfig();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Base gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${config.gradient}`}
        aria-hidden="true"
      />

      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, rgba(255, 51, 51, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(255, 100, 50, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(255, 51, 51, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(255, 80, 80, 0.08) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(255, 51, 51, 0.12) 0px, transparent 50%),
            radial-gradient(at 80% 100%, rgba(255, 100, 50, 0.08) 0px, transparent 50%),
            radial-gradient(at 0% 0%, rgba(255, 51, 51, 0.1) 0px, transparent 50%)
          `
        }}
        aria-hidden="true"
      />

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
        aria-hidden="true"
      />

      {/* Animated gradient orbs */}
      <motion.div 
        className={`absolute top-[15%] left-[10%] w-[600px] h-[600px] ${config.accent1} rounded-full blur-[120px]`}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />
      <motion.div 
        className={`absolute bottom-[20%] right-[10%] w-[500px] h-[500px] ${config.accent2} rounded-full blur-[100px]`}
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        aria-hidden="true"
      />
      <motion.div 
        className={`absolute top-[50%] right-[30%] w-[400px] h-[400px] ${config.accent3} rounded-full blur-[80px]`}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <svg className="w-full h-full">
          <defs>
            <pattern id="modern-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#modern-grid)" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
