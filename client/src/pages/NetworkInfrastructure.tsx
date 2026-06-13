import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";
import { Network, Shield, Server, Lock, CheckCircle, ArrowRight, MapPin, Wifi, Globe, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import RelatedServices from "@/components/RelatedServices";

const networkSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise Network Infrastructure UAE — Cisco, Juniper, MikroTik",
  "serviceType": "Enterprise Networking and Network Security",
  "provider": {
    "@type": "Organization",
    "name": "Super Next Technologies",
    "url": "https://supernxt.com",
    "telephone": "+971-48864215",
    "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" }
  },
  "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Riyadh", "Jeddah", "Doha", "Muscat"],
  "description": "Enterprise networking solutions: Cisco, Juniper, MikroTik implementation, network security, firewalls, VPN, LAN/WAN design, and 24/7 NOC monitoring in UAE, Saudi Arabia, Qatar, and Oman.",
  "url": "https://supernxt.com/network-infrastructure",
  "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
};

const features = [
  { icon: Network, title: "Cisco Solutions", desc: "Cisco routers, switches, firewalls, and collaboration certified implementations", color: "bg-blue-600" },
  { icon: Shield, title: "Juniper Solutions", desc: "Juniper Networks routing, switching, and security deployments", color: "bg-emerald-600" },
  { icon: Wifi, title: "MikroTik Solutions", desc: "MikroTik RouterOS, switches, and wireless for SMB and enterprise", color: "bg-red-500" },
  { icon: Lock, title: "Network Security", desc: "Firewalls, IPS/IDS, VPN, and zero-trust network architecture", color: "bg-violet-600" },
];

const services = [
  { title: "Cisco Solutions", desc: "Design, supply, configure, and support Cisco Catalyst switches, ASR/ISR routers, ASA/FTD firewalls, and Cisco Meraki cloud networking." },
  { title: "Juniper Solutions", desc: "Juniper EX switches, SRX firewalls, QFX data center switches, and Junos automation for enterprise and service provider environments." },
  { title: "MikroTik Solutions", desc: "MikroTik hEX, CCR, CRS, and RB series routers and switches. RouterOS configuration, MPLS, hotspot, and wireless deployments." },
  { title: "Enterprise Networking", desc: "Full LAN/WAN design and implementation including VLAN segmentation, QoS, redundancy (HSRP/VRRP), and BGP/OSPF routing." },
  { title: "Network Security", desc: "Firewall implementation (Cisco, Fortinet, Palo Alto), IPS/IDS, VPN site-to-site and remote access, network access control (NAC)." },
  { title: "VPN Solutions", desc: "Site-to-site IPSec VPN, SSL VPN, SD-WAN, and MPLS VPN for secure connectivity between offices, remote workers, and cloud." },
  { title: "Data Center Networking", desc: "Spine-leaf architecture, 25/100GbE switching, VXLAN overlay, and top-of-rack switching for modern data center environments." },
  { title: "Network Monitoring & NOC", desc: "24/7 network operations center (NOC) monitoring with SNMP, NetFlow, syslog analysis, and automated alerting and reporting." },
];

const stats = [
  { value: "200+", label: "Network Projects" },
  { value: "Cisco/Juniper", label: "Certified Engineers" },
  { value: "99.99%", label: "Network Uptime" },
  { value: "24/7", label: "NOC Monitoring" },
];

const vendors = ["Cisco", "Juniper", "MikroTik", "Fortinet", "Palo Alto", "Ubiquiti", "HPE Aruba", "Ruckus", "Huawei", "TP-Link Omada"];

export default function NetworkInfrastructure() {
  return (
    <VideoBackground variant="default">
      <SEO
        title="Enterprise Networking, Cisco, Juniper & MikroTik UAE | Super Next Technologies"
        description="Enterprise networking solutions in Dubai UAE: Cisco, Juniper, MikroTik implementation, network security, VPN, firewall, data center networking. Saudi Arabia, Qatar, Oman. Super Next Technologies."
        keywords="enterprise networking Dubai, Cisco solutions UAE, Juniper solutions Dubai, MikroTik solutions UAE, network security Dubai, VPN solutions UAE, firewall installation Dubai, network infrastructure UAE, data center networking Dubai, enterprise networking Saudi Arabia, IT networking Qatar, network design Oman"
        canonical="https://supernxt.com/network-infrastructure"
        schema={networkSchema}
      />

      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-blue-700 text-sm font-semibold tracking-wider uppercase">Enterprise Networking</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-6 text-gray-900">
                Network Infrastructure <span className="text-blue-700">UAE</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mb-8">
                Enterprise-grade Cisco, Juniper, and MikroTik networking solutions for businesses across UAE, Saudi Arabia, Qatar, and Oman. LAN/WAN design, firewalls, VPN, and 24/7 network monitoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-700 to-blue-500" onClick={openAIChat} data-testid="button-get-quote">
                  Get Network Assessment <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={() => window.location.href = "tel:+97148864215"} data-testid="button-call">
                  Call: +971 4 886 4215
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop"
                  alt="Enterprise Network Infrastructure Cisco Juniper UAE"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">Cisco • Juniper • MikroTik</p>
                  <p className="text-sm text-white/80">Enterprise Networking across UAE & GCC</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="text-center bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <p className="text-2xl font-bold text-blue-700">{s.value}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Networking Services</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">From network design to deployment, security, and 24/7 management</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all">
                  <CheckCircle className="h-5 w-5 text-blue-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vendor Partners */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-gray-50 rounded-3xl p-10 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Technology Partners & Vendors</h2>
              <p className="text-gray-600 mt-2">We work with all leading networking brands</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {vendors.map((v, i) => (
                <span key={i} className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-800 shadow-sm">{v}</span>
              ))}
            </div>
          </motion.div>

          {/* Locations */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Service Locations</h2>
              <p className="text-gray-600 mt-2">Network engineers deployed across UAE and GCC</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Riyadh", "Jeddah", "Doha", "Muscat"].map((city, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-4">
                  <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <RelatedServices services={[
            { title: "Structured Cabling", desc: "Fiber optic and Cat6 cabling for your network infrastructure", path: "/structured-cabling", color: "bg-amber-500" },
            { title: "Managed IT & AMC", desc: "24/7 monitoring and management of your network equipment", path: "/managed-it-services", color: "bg-blue-500" },
            { title: "Enterprise Wireless Hotspot", desc: "Managed WiFi running on top of your Cisco/Juniper network", path: "/wireless-hotspot", color: "bg-sky-500" },
          ]} />

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Network?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Get a free network assessment from our certified Cisco and Juniper engineers. We'll design a scalable, secure network architecture for your business.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-700 border-white hover:bg-blue-50 gap-2" onClick={openAIChat} data-testid="button-cta-chat">
                Chat with AI Assistant <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2" onClick={() => window.location.href = "mailto:hello@supernxt.com?subject=Network%20Assessment%20Request"} data-testid="button-cta-email">
                Request Assessment
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </VideoBackground>
  );
}
