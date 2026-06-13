import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";
import { Headphones, Shield, Server, RefreshCw, CheckCircle, ArrowRight, Clock, MapPin, Wrench, BarChart3 } from "lucide-react";
import SEO from "@/components/SEO";

const features = [
  { icon: Clock, title: "24/7 Monitoring", desc: "Round-the-clock proactive network and server monitoring", color: "bg-blue-500" },
  { icon: Wrench, title: "IT AMC Services", desc: "Annual maintenance contracts covering all IT infrastructure", color: "bg-emerald-500" },
  { icon: Headphones, title: "Helpdesk Support", desc: "On-site and remote IT support in English and Arabic", color: "bg-violet-500" },
  { icon: BarChart3, title: "Monthly Reporting", desc: "Detailed monthly reports on infrastructure health and tickets", color: "bg-amber-500" },
];

const amcServices = [
  { title: "IT AMC (Annual Maintenance Contract)", desc: "Comprehensive AMC covering servers, networking, workstations, printers, and peripherals with SLA-guaranteed response times." },
  { title: "Proactive Network Monitoring", desc: "24/7 monitoring of routers, switches, firewalls, servers, and internet links. Alerts and auto-remediation before users are affected." },
  { title: "Helpdesk & IT Support", desc: "Multi-tier support desk — remote and on-site — for desktops, laptops, printers, software, and user issues in English and Arabic." },
  { title: "Server Management", desc: "Windows Server, Linux, VMware, and Hyper-V server administration, patching, backup management, and performance tuning." },
  { title: "Network Administration", desc: "Day-to-day management of LAN, WAN, WiFi, VPN, and firewall configurations including change management and documentation." },
  { title: "Cybersecurity Management", desc: "Firewall policy management, endpoint protection, email security, patch management, and monthly vulnerability scans." },
  { title: "Cloud Management", desc: "Management of AWS, Azure, Microsoft 365, and Google Workspace environments — billing optimisation and security hardening." },
  { title: "Backup & Disaster Recovery", desc: "Automated backup monitoring, monthly restore tests, and disaster recovery planning for business continuity." },
];

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "< 4hr", label: "On-Site Response" },
  { value: "24/7", label: "Helpdesk Coverage" },
  { value: "500+", label: "Managed Clients" },
];

const industries = [
  "Offices & SMBs", "Hotels & Hospitality", "Retail & F&B",
  "Healthcare & Clinics", "Education", "Logistics & Warehousing",
  "Real Estate", "Construction & Contracting", "Government & Semi-Government",
];

export default function ManagedIT() {
  return (
    <VideoBackground variant="default">
      <SEO
        title="Managed IT Services & IT AMC Dubai, UAE | Super Next Technologies"
        description="24/7 managed IT services, IT AMC (Annual Maintenance Contracts), helpdesk support, server management and network monitoring in Dubai, UAE, Saudi Arabia, Qatar and Oman. Super Next Technologies."
        keywords="managed IT services Dubai, IT AMC Dubai, IT annual maintenance contract UAE, IT support Dubai, managed IT UAE, helpdesk support Dubai, server management UAE, network monitoring Dubai, IT outsourcing UAE, IT company Dubai, managed services GCC"
        canonical="https://supernxt.com/managed-it-services"
      />

      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">Managed IT & AMC Services</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-6 text-gray-900">
                Managed IT Services <span className="text-blue-600">UAE</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mb-8">
                End-to-end IT AMC, 24/7 monitoring, helpdesk support, and managed IT services for businesses in Dubai, UAE, Saudi Arabia, Qatar, and Oman. One contract, everything covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-blue-500" onClick={openAIChat} data-testid="button-get-quote">
                  Get AMC Quote <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={() => window.location.href = "tel:+97148864215"} data-testid="button-call">
                  Call: +971 4 886 4215
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                  alt="Managed IT Services and IT Support Dubai UAE"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">24/7 IT Support & AMC</p>
                  <p className="text-sm text-white/80">Dubai • Abu Dhabi • Riyadh • Doha • Muscat</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="text-center bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <p className="text-3xl font-bold text-blue-600">{s.value}</p>
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

          {/* AMC Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What's Included in Our IT AMC</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">One annual contract covering your entire IT environment — hardware, software, networking, and cloud</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {amcServices.map((s, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all">
                  <CheckCircle className="h-5 w-5 text-blue-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industries */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-gray-50 rounded-3xl p-10 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Industries We Support</h2>
              <p className="text-gray-600 mt-2">Managed IT services tailored to your sector</p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">IT AMC Coverage Areas</h2>
              <p className="text-gray-600 mt-2">On-site engineers across UAE and GCC</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Riyadh", "Jeddah", "Doha", "Muscat"].map((city, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-4">
                  <MapPin className="h-4 w-4 text-blue-500 shrink-0" />
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for Worry-Free IT?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Get a tailored IT AMC proposal for your business. Our engineers will assess your infrastructure and provide a comprehensive coverage plan.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 border-white hover:bg-blue-50 gap-2" onClick={openAIChat} data-testid="button-cta-chat">
                Chat with AI Assistant <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2" onClick={() => window.location.href = "mailto:hello@supernxt.com?subject=IT%20AMC%20Proposal%20Request"} data-testid="button-cta-email">
                Request AMC Proposal
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </VideoBackground>
  );
}
