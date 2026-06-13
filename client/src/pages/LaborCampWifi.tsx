import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";
import { Wifi, Users, Shield, Zap, CheckCircle, ArrowRight, MapPin, Signal, Clock, DollarSign } from "lucide-react";
import SEO from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

const campWifiSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Labor Camp WiFi & Hotel WiFi Solutions UAE",
  "serviceType": "Labor Camp WiFi and Hotel WiFi Installation",
  "provider": {
    "@type": "Organization",
    "name": "Super Next Technologies",
    "url": "https://supernxt.com",
    "telephone": "+971-48864215",
    "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" }
  },
  "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Al Ain"],
  "description": "High-density managed WiFi for labor camps, worker accommodations, hotels, and construction sites across UAE. Includes MikroTik hotspot billing and 24/7 management.",
  "url": "https://supernxt.com/labor-camp-wifi",
  "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
};

const features = [
  { icon: Users, title: "High-Density Coverage", desc: "Supports hundreds to thousands of simultaneous users per camp", color: "bg-emerald-500" },
  { icon: Shield, title: "Content Filtering", desc: "Optional filtering and access controls for compliance", color: "bg-blue-500" },
  { icon: Signal, title: "Outdoor-Grade Hardware", desc: "Weatherproof APs designed for harsh outdoor environments", color: "bg-amber-500" },
  { icon: DollarSign, title: "Flexible Billing", desc: "Prepaid vouchers, daily/weekly/monthly plans, free-tier options", color: "bg-violet-500" },
];

const services = [
  { title: "Labor Camp WiFi Design", desc: "Complete WiFi network design for worker camps — coverage planning, equipment specification, and capacity analysis for 100–10,000+ users." },
  { title: "Smart Camp Internet Solutions", desc: "End-to-end internet connectivity for construction camps, temporary sites, and remote worker accommodations with 4G/5G or fiber backhaul." },
  { title: "Hotel & Hospitality WiFi", desc: "Managed guest WiFi for hotels, resorts, and serviced apartments — branded splash pages, tiered plans, and analytics dashboard." },
  { title: "Hotspot Billing System", desc: "Mikrotik-based or cloud hotspot billing with prepaid vouchers, room/unit-based accounts, and automated bandwidth management." },
  { title: "Outdoor AP Installation", desc: "Weatherproof outdoor access points (Ubiquiti, MikroTik, Cisco Meraki) for camp perimeters, parking areas, and large open spaces." },
  { title: "Backhaul Connectivity", desc: "Fiber optic, 4G LTE, 5G, and point-to-point microwave backhaul solutions to connect remote camps to the internet." },
  { title: "Network Management Portal", desc: "Centralised dashboard for bandwidth monitoring, user management, usage reports, and real-time network health visibility." },
  { title: "Maintenance & AMC", desc: "Annual maintenance contracts for camp WiFi — hardware replacement, software updates, 24/7 NOC monitoring, and on-site support." },
];

const stats = [
  { value: "100+", label: "Camps Deployed" },
  { value: "50,000+", label: "Users Supported" },
  { value: "99.5%", label: "Uptime SLA" },
  { value: "24/7", label: "Monitoring" },
];

const useCases = [
  "Labor Camps (UAE)", "Construction Site Camps", "Worker Accommodations",
  "Smart Villages", "Hotels & Serviced Apartments", "Resorts & Chalets",
  "Holiday Camps", "Exhibition & Event Sites", "Military & Government Camps",
];

export default function LaborCampWifi() {
  return (
    <VideoBackground variant="default">
      <SEO
        title="Labor Camp WiFi & Hotel WiFi Solutions UAE | Super Next Technologies"
        description="Managed labor camp WiFi, smart camp internet, and hotel WiFi solutions in Dubai and across UAE. High-density wireless for worker camps, hotels, construction sites. MikroTik hotspot, outdoor APs. Super Next Technologies."
        keywords="labor camp WiFi UAE, labor camp internet Dubai, smart camp WiFi, hotel WiFi UAE, hotel internet solution Dubai, worker camp internet UAE, camp WiFi Dubai, hotspot solution UAE, WiFi labor camp UAE, MikroTik hotspot Dubai, managed WiFi camp UAE"
        canonical="https://supernxt.com/labor-camp-wifi"
        schema={campWifiSchema}
      />

      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-emerald-600 text-sm font-semibold tracking-wider uppercase">Labor Camp & Hotel WiFi</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-6 text-gray-900">
                Camp & Hotel WiFi <span className="text-emerald-600">Solutions UAE</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mb-8">
                High-density managed WiFi for labor camps, worker accommodations, construction sites, hotels, and resorts across UAE. Full deployment and 24/7 management included.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500" onClick={openAIChat} data-testid="button-get-quote">
                  Get Camp WiFi Quote <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={() => window.location.href = "tel:+97148864215"} data-testid="button-call">
                  Call: +971 4 886 4215
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                  alt="Labor Camp WiFi and Hotel WiFi Solutions UAE"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">High-Density Camp WiFi</p>
                  <p className="text-sm text-white/80">Dubai • Abu Dhabi • Sharjah • UAE</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="text-center bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                <p className="text-3xl font-bold text-emerald-600">{s.value}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Camp & Hotel WiFi Services</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Everything from network design to installation, billing system setup, and ongoing management</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-emerald-200 hover:shadow-md transition-all">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-gray-50 rounded-3xl p-10 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Where We Deploy Camp WiFi</h2>
              <p className="text-gray-600 mt-2">Trusted across all types of temporary and permanent camp environments</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {useCases.map((u, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">{u}</span>
              ))}
            </div>
          </motion.div>

          {/* Locations */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Deployment Locations</h2>
              <p className="text-gray-600 mt-2">On-site teams across UAE — remote sites welcome</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Al Ain", "Remote Sites"].map((city, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-4">
                  <MapPin className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <RelatedServices services={[
            { title: "Structured Cabling", desc: "Fiber optic and Cat6 backbone for your camp WiFi network", path: "/structured-cabling", color: "bg-amber-500" },
            { title: "CCTV Solutions", desc: "Add surveillance cameras to your camp or hotel network", path: "/cctv-solutions", color: "bg-red-500" },
            { title: "Enterprise Wireless Hotspot", desc: "Enterprise-grade WiFi for offices, malls and corporate venues", path: "/wireless-hotspot", color: "bg-sky-500" },
          ]} />

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Need WiFi for Your Camp or Hotel?</h2>
            <p className="text-emerald-100 mb-8 max-w-xl mx-auto">Get a free site survey and WiFi coverage design. We handle everything from backhaul to the last-metre access point — with full ongoing management.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-emerald-600 border-white hover:bg-emerald-50 gap-2" onClick={openAIChat} data-testid="button-cta-chat">
                Chat with AI Assistant <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2" onClick={() => window.location.href = "mailto:hello@supernxt.com?subject=Camp%20WiFi%20Quote%20Request"} data-testid="button-cta-email">
                Request a Quote
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </VideoBackground>
  );
}
