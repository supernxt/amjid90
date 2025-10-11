import Hero3D from "@/components/Hero3D";
import ValueTiles from "@/components/ValueTiles";
import OfferStrip from "@/components/OfferStrip";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <div>
      <Hero3D />
      <TrustBar />
      <ValueTiles />
      <OfferStrip />
    </div>
  );
}
