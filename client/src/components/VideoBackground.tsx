import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  variant?: "default" | "ai" | "wireless" | "infrastructure" | "web" | "pricing" | "legal";
  children?: React.ReactNode;
}

export default function VideoBackground({ variant = "default", children }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Video autoplay was prevented:", error);
        setVideoError(true);
      }
    };

    if (video.paused) {
      playVideo();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [variant]);

  const getVideoSource = () => {
    switch (variant) {
      case "ai":
        return "https://videos.pexels.com/video-files/7579955/7579955-hd_1920_1080_30fps.mp4";
      case "wireless":
        return "https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4";
      case "infrastructure":
        return "https://videos.pexels.com/video-files/3141211/3141211-hd_1920_1080_30fps.mp4";
      case "web":
        return "https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4";
      case "pricing":
        return "https://videos.pexels.com/video-files/7579955/7579955-hd_1920_1080_30fps.mp4";
      case "legal":
        return "https://videos.pexels.com/video-files/3141211/3141211-hd_1920_1080_30fps.mp4";
      default:
        return "https://videos.pexels.com/video-files/7579955/7579955-hd_1920_1080_30fps.mp4";
    }
  };

  const getOverlayGradient = () => {
    return "from-black/70 via-black/50 to-black/70";
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {!videoError ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setVideoError(true)}
            data-testid="background-video"
          >
            <source src={getVideoSource()} type="video/mp4" />
          </video>

          <div className={`absolute inset-0 bg-gradient-to-br ${getOverlayGradient()}`} />

          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-10">
              <defs>
                <pattern id="grid-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-foreground/20"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
        </div>
      )}

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

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
