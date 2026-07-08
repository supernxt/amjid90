import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";
import { Cable, Zap, Shield, Server, CheckCircle, ArrowRight, MapPin, Network } from "lucide-react";
import SEO from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

const cablingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Structured Cabling & Fiber Optic Infrastructure UAE",
  "serviceType": "Structured Cabling and Fiber Optic Installation",
  "provider": {
    "@type": "Organization",
    "name": "Super Next Technologies",
    "url": "https://supernxt.com",
    "telephone": "+971-48864215",
    "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" }
  },
  "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Al Ain"],
  "description": "TIA/ISO-certified structured cabling (Cat6, Cat6A, Cat7) and fiber optic infrastructure installation, splicing, and testing across UAE.",
  "url": "https://supernxt.com/structured-cabling",
  "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
};

const features = [
  { icon: Cable, title: "Fiber Optic Cabling", desc: "Single-mode & multi-mode fiber for high-speed backbone networks", color: "bg-amber-500" },
  { icon: Network, title: "Structured Cabling", desc: "Cat6, Cat6A, Cat7 certified installations for data and voice", color: "bg-blue-500" },
  { icon: Server, title: "Data Center Cabling", desc: "Rack-to-rack, top-of-rack and spine-leaf structured cabling", color: "bg-emerald-500" },
  { icon: Shield, title: "TIA/ISO Certified", desc: "All installations comply with TIA-568 and ISO/IEC 11801 standards", color: "bg-violet-500" },
];

const services = [
  { title: "Cat6 / Cat6A Cabling", desc: "High-performance copper structured cabling for office, campus, hotels, labor camps — fully certified with test reports." },
  { title: "Fiber Optic Installation", desc: "Single-mode and multi-mode fiber optic cable laying, splicing, termination, and OTDR testing for campus and building backbones." },
  { title: "Fiber Splicing & Testing", desc: "Fusion splicing, mechanical splicing, and OTDR/light source testing for fault diagnosis and quality assurance." },
  { title: "Data Center Cabling", desc: "Structured cabling design and installation inside data centers including fiber patch panels, copper trunks, and labeling." },
  { title: "Trunking & Conduit", desc: "Cable management with surface trunking, metal conduit, cable trays, ladder racks, and flush floor boxes." },
  { title: "Patch Panel & Cabinet", desc: "Network cabinet installation, patch panel termination, and cable management for tidy, scalable network rooms." },
  { title: "AV & Signage Cabling", desc: "HDMI, DisplayPort, and AV cabling for digital signage, conference rooms, and audio-visual installations." },
  { title: "Cabling Audit & Certification", desc: "Full audit of existing cabling infrastructure with cable testing, labeling, and certification reports." },
];

const stats = [
  { value: "1M+", label: "Metres of Cable Installed" },
  { value: "300+", label: "Cabling Projects" },
  { value: "TIA/ISO", label: "Certified Installations" },
  { value: "24/7", label: "Project Support" },
];

const industries = [
  "Offices & Corporate", "Data Centers", "Hotels & Hospitality", "Labor Camps",
  "Schools & Universities", "Hospitals", "Warehouses & Logistics", "Government Buildings",
  "Shopping Malls", "Residential Towers", "Factories & Industrial",
];

export default function StructuredCabling() {
  return (
    <VideoBackground variant="default">
      <SEO
        title="Structured Cabling & Fiber Optic Infrastructure UAE | Super Next Technologies"
        description="Professional structured cabling (Cat6, Cat6A, Cat7) and fiber optic installation in Dubai and across UAE. TIA/ISO certified. Data center cabling, fiber splicing, OTDR testing. Super Next Technologies."
        keywords="structured cabling Dubai, fiber optic installation UAE, Cat6 cabling Dubai, fiber optic UAE, network cabling Abu Dhabi, structured cabling Sharjah, fiber optic UAE, data center cabling Dubai, TIA certified cabling UAE, cabling contractor Dubai, network infrastructure UAE"
        canonical="https://supernxt.com/structured-cabling"
        schema={cablingSchema}
      />

      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">Fiber Optic & Structured Cabling</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-6 text-gray-900">
                Structured Cabling <span className="text-amber-600">UAE</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mb-8">
                TIA/ISO-certified structured cabling and fiber optic infrastructure for offices, data centers, hotels, labor camps, and buildings across UAE.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-amber-500 to-orange-500" onClick={openAIChat} data-testid="button-get-quote">
                  Get Free Quote <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={() => window.location.href = "tel:+97148864215"} data-testid="button-call-now">
                  Call: +971 4 886 4215
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
                  alt="Structured Cabling and Fiber Optic Installation UAE"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">TIA/ISO Certified Installations</p>
                  <p className="text-sm text-white/80">Dubai • Abu Dhabi • Sharjah • Ajman</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="text-center bg-amber-50 border border-amber-100 rounded-2xl p-6">
                <p className="text-3xl font-bold text-amber-600">{s.value}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className={`w-12 h-12 ${f.color} rounded-xl flex items-center justify-center mb-4`}>
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cabling & Fiber Services</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Complete infrastructure cabling from first fix to final certification and handover documentation</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-amber-200 hover:shadow-md transition-all">
                  <CheckCircle className="h-5 w-5 text-amber-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industries */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-gray-50 rounded-3xl p-10 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Industries We Cable</h2>
              <p className="text-gray-600 mt-2">Trusted by leading businesses across UAE</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((ind, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">{ind}</span>
              ))}
            </div>
          </motion.div>

          {/* Locations */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Service Locations</h2>
              <p className="text-gray-600 mt-2">On-site cabling teams across UAE</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Al Ain", "Umm Al Quwain"].map((city, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-4">
                  <MapPin className="h-4 w-4 text-amber-500 shrink-0" />
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <RelatedServices services={[
            { title: "Network Infrastructure", desc: "Cisco, Juniper & MikroTik networking on your new cabling infrastructure", path: "/network-infrastructure", color: "bg-indigo-600" },
            { title: "Enterprise Wireless Hotspot", desc: "Access points and controllers installed over your cabling backbone", path: "/wireless-hotspot", color: "bg-sky-500" },
            { title: "Labor Camp WiFi", desc: "Wireless access points connected via your structured cabling", path: "/labor-camp-wifi", color: "bg-emerald-600" },
          ]} />

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Need Structured Cabling in UAE?</h2>
            <p className="text-amber-100 mb-8 max-w-xl mx-auto">Get a free site assessment and cabling design from our certified engineers. We provide full test reports and TIA/ISO certification on completion.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-amber-600 border-white hover:bg-amber-50 gap-2" onClick={openAIChat} data-testid="button-cta-chat">
                Chat with AI Assistant <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2" onClick={() => window.location.href = "mailto:hello@supernxt.com?subject=Structured%20Cabling%20Quote"} data-testid="button-cta-email">
                Request a Quote
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </VideoBackground>
  );
}
