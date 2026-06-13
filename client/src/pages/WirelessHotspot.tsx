import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";
import { Wifi, Shield, Zap, Users, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";

const wifiFaqs = [
  { q: "What's the difference between consumer WiFi and enterprise WiFi?", a: "Consumer routers (home routers from Virgin, du, etc.) are designed for 5–10 devices. Enterprise WiFi systems use commercial-grade access points (Cisco, Ruckus, Ubiquiti) designed for 50–500+ simultaneous devices, with centralised management, seamless roaming, VLAN segmentation, and 24/7 uptime guarantees." },
  { q: "How many access points does my building need?", a: "It depends on building size, construction materials (concrete walls absorb signal), number of users, and device density. A rule of thumb for standard offices is one AP per 100–150 sqm, but high-density areas like conference rooms or warehouses need more. We offer free site surveys with RF planning to determine the exact count." },
  { q: "Can you set up separate WiFi for guests and staff?", a: "Yes. We configure multiple SSIDs with VLAN separation — staff get access to internal systems while guests are isolated on a separate internet-only network. Guest portals with UAE TRA-compliant authentication (user login or SMS OTP) are also available." },
  { q: "What brands of enterprise WiFi do you install?", a: "We work with Cisco Meraki, Cisco Catalyst, Ruckus (CommScope), Ubiquiti UniFi, and MikroTik depending on budget and scale. All are enterprise-grade and managed through centralised controllers." },
  { q: "Do you offer ongoing WiFi management?", a: "Yes. Our managed WiFi service includes 24/7 monitoring, remote troubleshooting, firmware updates, and an annual physical inspection. Most issues are resolved remotely within 1–2 hours." },
];

const hotspotSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://supernxt.com/wireless-hotspot#service",
    "name": "Enterprise Wireless Hotspot Solutions UAE",
    "serviceType": "Wireless Networking",
    "description": "Managed enterprise Wi-Fi hotspot solutions for hotels, malls, offices and venues across UAE. Captive portal, user management, analytics.",
    "url": "https://supernxt.com/wireless-hotspot",
    "provider": { "@id": "https://supernxt.com/#organization" },
    "areaServed": [{ "@type": "Country", "name": "United Arab Emirates" }],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wireless Hotspot Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hotel WiFi Solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Hotspot Deployment" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Captive Portal Setup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed Wireless Networks" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://supernxt.com/" },
      { "@type": "ListItem", "position": 2, "name": "Enterprise Wireless Hotspot", "item": "https://supernxt.com/wireless-hotspot" }
    ]
  }
];

export default function WirelessHotspot() {
  return (
    <>
    <VideoBackground variant="wireless">
      <SEO
        title="Enterprise Wireless Hotspots UAE | Super Next Technologies"
        description="Professional enterprise Wi-Fi hotspot solutions for hotels, malls, offices and venues across UAE. Managed wireless infrastructure by Super Next Technologies, Dubai."
        keywords="enterprise wireless hotspot UAE, WiFi hotspot Dubai, managed WiFi UAE, hotel WiFi Dubai, enterprise WiFi UAE, wireless infrastructure UAE, hotspot installation Dubai"
        canonical="https://supernxt.com/wireless-hotspot"
        schema={hotspotSchema}
      />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">Wireless Solutions</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gray-900">
                Enterprise Wireless <span className="text-blue-600">Hotspots</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Secure, scalable, and lightning-fast wireless connectivity for your business
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
                  alt="Wireless Network"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Wifi, title: "High-Speed Connectivity", desc: "Up to 10 Gbps throughput", color: "bg-blue-500" },
              { icon: Shield, title: "Enterprise Security", desc: "WPA3 & advanced encryption", color: "bg-emerald-500" },
              { icon: Zap, title: "Zero Downtime", desc: "99.99% uptime guarantee", color: "bg-amber-500" },
              { icon: Users, title: "Massive Capacity", desc: "1000+ concurrent users", color: "bg-violet-500" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all"
                data-testid={`card-feature-${index}`}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
                <p className="text-gray-600" data-testid={`text-feature-desc-${index}`}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center bg-gray-50 rounded-3xl p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to upgrade your connectivity?</h3>
            <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-500 to-cyan-500" onClick={openAIChat} data-testid="button-get-started">
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </VideoBackground>
    <FAQSection
      title="Enterprise WiFi — FAQs"
      subtitle="Everything UAE businesses ask about enterprise wireless networking."
      faqs={wifiFaqs}
      ctaText="Book a Free WiFi Site Survey"
    />
    </>
  );
}
