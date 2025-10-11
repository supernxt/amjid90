import Background3D from "@/components/Background3D";
import Hero3D from "@/components/Hero3D";
import ValueTiles from "@/components/ValueTiles";
import OfferStrip from "@/components/OfferStrip";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <Background3D variant="default">
      <Hero3D />
      <TrustBar />
      <ValueTiles />
      <OfferStrip />
    </Background3D>
  );
}
