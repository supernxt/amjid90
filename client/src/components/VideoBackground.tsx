import { motion } from "framer-motion";

interface VideoBackgroundProps {
  variant?: "default" | "ai" | "wireless" | "infrastructure" | "web" | "pricing" | "legal";
  children?: React.ReactNode;
}

export default function VideoBackground({ variant = "default", children }: VideoBackgroundProps) {
  const getGradientConfig = () => {
    const configs = {
      ai: {
        accent1: "bg-primary/5",
        accent2: "bg-blue-500/3",
      },
      wireless: {
        accent1: "bg-blue-500/5",
        accent2: "bg-cyan-500/3",
      },
      infrastructure: {
        accent1: "bg-emerald-500/5",
        accent2: "bg-teal-500/3",
      },
      web: {
        accent1: "bg-violet-500/5",
        accent2: "bg-purple-500/3",
      },
      pricing: {
        accent1: "bg-amber-500/5",
        accent2: "bg-orange-500/3",
      },
      legal: {
        accent1: "bg-slate-500/3",
        accent2: "bg-gray-500/2",
      },
      default: {
        accent1: "bg-primary/5",
        accent2: "bg-blue-500/3",
      }
    };

    return configs[variant] || configs.default;
  };

  const config = getGradientConfig();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Subtle gradient overlay for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"
        aria-hidden="true"
      />

      {/* Subtle accent color orbs for visual interest */}
      <motion.div 
        className={`absolute top-[10%] left-[5%] w-[500px] h-[500px] ${config.accent1} rounded-full blur-[150px]`}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />
      <motion.div 
        className={`absolute bottom-[15%] right-[5%] w-[400px] h-[400px] ${config.accent2} rounded-full blur-[120px]`}
        animate={{
          x: [0, -20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <svg className="w-full h-full">
          <defs>
            <pattern id="light-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gray-900"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#light-grid)" />
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
