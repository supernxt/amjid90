import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Background3DProps {
  variant?: "default" | "ai" | "wireless" | "infrastructure" | "web" | "pricing";
  children?: React.ReactNode;
}

export default function Background3D({ variant = "default", children }: Background3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
    }> = [];

    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: Math.random() * 2 + 1,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z -= particle.vz;

        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        const scale = 1000 / (1000 + particle.z);
        const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = scale * 3;

        const opacity = 1 - particle.z / 1000;

        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 230, 255, ${opacity * 0.8})`;
        ctx.fill();

        ctx.strokeStyle = `rgba(0, 230, 255, ${opacity * 0.3})`;
        ctx.lineWidth = scale;
        ctx.beginPath();
        ctx.moveTo(x2d, y2d);
        ctx.lineTo(
          x2d + particle.vx * scale * 10,
          y2d + particle.vy * scale * 10
        );
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [variant]);

  const getGradientColors = () => {
    switch (variant) {
      case "ai":
        return "from-primary/10 via-cyan-500/10 to-background";
      case "wireless":
        return "from-blue-500/10 via-primary/10 to-background";
      case "infrastructure":
        return "from-purple-500/10 via-primary/10 to-background";
      case "web":
        return "from-green-500/10 via-primary/10 to-background";
      case "pricing":
        return "from-yellow-500/10 via-primary/10 to-background";
      default:
        return "from-background via-primary/5 to-background";
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColors()}`} />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />

      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern id="grid-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/40"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

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
