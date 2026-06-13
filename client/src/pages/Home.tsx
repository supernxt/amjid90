import VideoBackground from "@/components/VideoBackground";
import Hero3D from "@/components/Hero3D";
import ValueTiles from "@/components/ValueTiles";
import OfferStrip from "@/components/OfferStrip";
import TrustBar from "@/components/TrustBar";
import VideoSlider from "@/components/VideoSlider";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <VideoBackground variant="default">
      <SEO
        title="Super Next Technologies | AI Solutions & Enterprise IT Services in UAE, Saudi Arabia, Qatar, Oman"
        description="Super Next Technologies — Leading AI Solutions, Enterprise Wireless Hotspots, Cloud Infrastructure & Website Development in UAE, Saudi Arabia, Qatar, Oman and worldwide. Based in Dubai. 24/7 support."
        keywords="AI solutions Dubai, AI agents UAE, enterprise IT services, wireless hotspot UAE, cloud infrastructure GCC, website development Saudi Arabia, IT company Qatar, technology Oman, Super Next Technologies"
        canonical="https://supernxt.com/"
      />
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
