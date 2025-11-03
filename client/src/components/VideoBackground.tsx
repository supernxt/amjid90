import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  variant?: "default" | "ai" | "wireless" | "infrastructure" | "web" | "pricing" | "legal";
  children?: React.ReactNode;
}

export default function VideoBackground({ variant = "default", children }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (error) {
        setVideoError(true);
      }
    };

    if (video.paused && !videoError) {
      playVideo();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (!prefersReducedMotion && !videoError) {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [variant, prefersReducedMotion, videoError]);

  const getVideoConfig = () => {
    const configs = {
      ai: {
        src: "https://videos.pexels.com/video-files/7579955/7579955-hd_1920_1080_30fps.mp4",
        poster: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920",
        overlay: "from-black/75 via-black/60 to-black/75"
      },
      wireless: {
        src: "https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4",
        poster: "https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&w=1920",
        overlay: "from-black/72 via-black/58 to-black/72"
      },
      infrastructure: {
        src: "https://videos.pexels.com/video-files/3141211/3141211-hd_1920_1080_30fps.mp4",
        poster: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920",
        overlay: "from-black/70 via-black/55 to-black/70"
      },
      web: {
        src: "https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4",
        poster: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920",
        overlay: "from-black/68 via-black/53 to-black/68"
      },
      pricing: {
        src: "https://videos.pexels.com/video-files/3130182/3130182-hd_1920_1080_30fps.mp4",
        poster: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1920",
        overlay: "from-black/73 via-black/57 to-black/73"
      },
      legal: {
        src: "https://videos.pexels.com/video-files/4439425/4439425-hd_1920_1080_25fps.mp4",
        poster: "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&w=1920",
        overlay: "from-black/65 via-black/50 to-black/65"
      },
      default: {
        src: "https://videos.pexels.com/video-files/6774281/6774281-hd_1920_1080_30fps.mp4",
        poster: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920",
        overlay: "from-black/71 via-black/56 to-black/71"
      }
    };

    return configs[variant] || configs.default;
  };

  const config = getVideoConfig();
  const showVideo = !videoError && !prefersReducedMotion;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {showVideo ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={config.poster}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setVideoError(true)}
            data-testid="background-video"
            aria-label={`${variant} background video`}
          >
            <source src={config.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div 
            className={`absolute inset-0 bg-gradient-to-br ${config.overlay}`} 
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-black/5 backdrop-blur-[0.5px]" aria-hidden="true" />
        </>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${config.poster})` }}
          role="img"
          aria-label={`${variant} background image`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${config.overlay}`} aria-hidden="true" />
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-5" aria-hidden="true">
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

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} aria-hidden="true" />

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
