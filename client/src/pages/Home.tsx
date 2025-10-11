import Background3D from "@/components/Background3D";
import Hero3D from "@/components/Hero3D";
import ValueTiles from "@/components/ValueTiles";
import OfferStrip from "@/components/OfferStrip";
import TrustBar from "@/components/TrustBar";
import VideoSlider from "@/components/VideoSlider";

export default function Home() {
  return (
    <Background3D variant="default">
      <Hero3D />
      <TrustBar />
      <div className="px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-400 to-white bg-clip-text text-transparent">
              Our Solutions in Motion
            </h2>
            <p className="text-xl text-foreground/70">
              Experience our cutting-edge technologies
            </p>
          </div>
          <VideoSlider />
        </div>
      </div>
      <ValueTiles />
      <OfferStrip />
    </Background3D>
  );
}
