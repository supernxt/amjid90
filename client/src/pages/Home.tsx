import VideoBackground from "@/components/VideoBackground";
import Hero3D from "@/components/Hero3D";
import ValueTiles from "@/components/ValueTiles";
import OfferStrip from "@/components/OfferStrip";
import TrustBar from "@/components/TrustBar";
import VideoSlider from "@/components/VideoSlider";

export default function Home() {
  return (
    <VideoBackground variant="default">
      <Hero3D />
      <TrustBar />
      <div className="px-4 md:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">AI Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-gray-900">
              Our AI Agent Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our powerful AI-driven automation and intelligent agents
            </p>
          </div>
          <VideoSlider />
        </div>
      </div>
      <ValueTiles />
      <OfferStrip />
    </VideoBackground>
  );
}
