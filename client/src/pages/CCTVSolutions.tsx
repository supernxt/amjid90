import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";
import { Camera, Shield, Eye, Monitor, CheckCircle, ArrowRight, Wifi, Lock, Zap, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

const features = [
  { icon: Camera, title: "IP & Analog CCTV", desc: "Full HD, 4K and megapixel cameras for any environment", color: "bg-red-500" },
  { icon: Eye, title: "24/7 Remote Monitoring", desc: "Live view and alerts from anywhere via mobile app", color: "bg-blue-500" },
  { icon: Shield, title: "Vandal-Proof Systems", desc: "Ruggedised cameras for harsh outdoor environments", color: "bg-emerald-500" },
  { icon: Monitor, title: "NVR / DVR Storage", desc: "Scalable recording with cloud backup options", color: "bg-amber-500" },
];

const services = [
  { title: "IP Camera Systems", desc: "High-definition IP cameras with PoE — offices, warehouses, hotels, factories, and outdoor perimeters." },
  { title: "Analog CCTV Upgrade", desc: "Upgrade legacy analog systems to HD-over-coax or full IP infrastructure without rewiring." },
  { title: "PTZ & Thermal Cameras", desc: "Pan-Tilt-Zoom cameras and thermal imaging for large perimeters, gates, and critical assets." },
  { title: "NVR / DVR Installation", desc: "Centralised recording units with smart motion detection, scheduling, and remote playback." },
  { title: "Video Analytics & AI", desc: "AI-powered detection: people counting, face recognition, license plate reading, intrusion alerts." },
  { title: "Remote Monitoring Setup", desc: "Mobile and desktop apps for live viewing, alerts, and playback from anywhere in the world." },
  { title: "Access Control Integration", desc: "Integrate CCTV with door access, biometrics, and alarm systems for a unified security platform." },
  { title: "Maintenance & AMC", desc: "Annual maintenance contracts for CCTV systems — preventive servicing, emergency repairs, upgrades." },
];

const industries = [
  "Hotels & Resorts", "Labor Camps & Worker Accommodations", "Offices & Commercial Buildings",
  "Warehouses & Logistics", "Retail & Shopping Malls", "Schools & Universities",
  "Hospitals & Clinics", "Factories & Industrial", "Data Centers", "Villas & Residential",
];

const stats = [
  { value: "500+", label: "CCTV Projects" },
  { value: "10,000+", label: "Cameras Installed" },
  { value: "24/7", label: "Support & Monitoring" },
  { value: "5yr", label: "Warranty Available" },
];

export default function CCTVSolutions() {
  return (
    <VideoBackground variant="default">
      <SEO
        title="CCTV Solutions & Installation Dubai, UAE | Super Next Technologies"
        description="Professional CCTV installation, IP camera systems, video surveillance and security solutions in Dubai, UAE, Saudi Arabia, Qatar and Oman. 24/7 remote monitoring, NVR/DVR, AI video analytics. Super Next Technologies."
        keywords="CCTV solutions Dubai, CCTV installation UAE, IP camera system Dubai, video surveillance UAE, security cameras Saudi Arabia, CCTV Qatar, surveillance system Oman, NVR installation Dubai, PTZ camera UAE, CCTV AMC Dubai, CCTV company GCC"
        canonical="https://supernxt.com/cctv-solutions"
      />

      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-red-600 text-sm font-semibold tracking-wider uppercase">CCTV & Surveillance</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-6 text-gray-900">
                CCTV Solutions <span className="text-red-600">UAE</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mb-8">
                Complete CCTV design, supply, installation, and maintenance for businesses across UAE, Saudi Arabia, Qatar, and Oman. IP cameras, analog, PTZ, NVR/DVR, and AI video analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-red-600 to-red-500" onClick={openAIChat} data-testid="button-get-quote">
                  Get Free Quote <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={() => window.location.href = "tel:+97148864215"} data-testid="button-call-now">
                  Call Now: +971 4 886 4215
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop"
                  alt="CCTV Security Camera System UAE"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">Enterprise CCTV Systems</p>
                  <p className="text-sm text-white/80">Dubai • Abu Dhabi • Doha • Riyadh • Muscat</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="text-center bg-red-50 border border-red-100 rounded-2xl p-6">
                <p className="text-3xl font-bold text-red-600">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Feature Cards */}
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

          {/* Services Grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our CCTV Services</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">End-to-end security solutions from design to installation to ongoing maintenance</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-red-200 hover:shadow-md transition-all">
                  <CheckCircle className="h-5 w-5 text-red-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industries */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-gray-50 rounded-3xl p-10 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Industries We Serve</h2>
              <p className="text-gray-600 mt-2">CCTV solutions tailored to every sector across UAE and GCC</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((ind, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  {ind}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Locations */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">CCTV Installation Locations</h2>
              <p className="text-gray-600 mt-2">On-site installation and support across the GCC</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Riyadh", "Jeddah", "Doha", "Muscat"].map((city, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-4">
                  <MapPin className="h-4 w-4 text-red-500 shrink-0" />
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Need CCTV Installation in UAE?</h2>
            <p className="text-red-100 mb-8 max-w-xl mx-auto">Get a free site survey and quote from our certified security engineers. Available across Dubai, Abu Dhabi, and the wider UAE.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-red-600 border-white hover:bg-red-50 gap-2" onClick={openAIChat} data-testid="button-cta-chat">
                Chat with AI Assistant <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2" onClick={() => window.location.href = "mailto:hello@supernxt.com?subject=CCTV%20Quote%20Request"} data-testid="button-cta-email">
                Email Us a Quote Request
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </VideoBackground>
  );
}
