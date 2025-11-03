import { motion } from "framer-motion";

interface VideoBackgroundProps {
  variant?: "default" | "ai" | "wireless" | "infrastructure" | "web" | "pricing" | "legal";
  children?: React.ReactNode;
}

export default function VideoBackground({ variant = "default", children }: VideoBackgroundProps) {
  const getGradientConfig = () => {
    const configs = {
      ai: {
        gradient: "from-slate-950 via-red-950/40 to-slate-950",
        accent: "bg-red-500/5"
      },
      wireless: {
        gradient: "from-slate-950 via-slate-900 to-red-950/30",
        accent: "bg-red-500/4"
      },
      infrastructure: {
        gradient: "from-red-950/30 via-slate-950 to-slate-900",
        accent: "bg-red-500/6"
      },
      web: {
        gradient: "from-slate-900 via-slate-950 to-red-950/35",
        accent: "bg-red-500/5"
      },
      pricing: {
        gradient: "from-slate-950 via-red-950/25 to-slate-950",
        accent: "bg-red-500/4"
      },
      legal: {
        gradient: "from-slate-900 via-slate-950 to-slate-950",
        accent: "bg-red-500/3"
      },
      default: {
        gradient: "from-slate-950 via-slate-900 to-red-950/30",
        accent: "bg-red-500/5"
      }
    };

    return configs[variant] || configs.default;
  };

  const config = getGradientConfig();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Main gradient background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`}
        aria-hidden="true"
      />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-red-500"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Ambient glow orbs */}
      <div 
        className={`absolute top-1/4 left-1/4 w-96 h-96 ${config.accent} rounded-full blur-3xl animate-pulse`}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-500/4 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-red-500/3 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
