import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Wifi, Camera, Cable, Bot, Server, CheckCircle, ArrowRight, Phone, MapPin, Building2, Star } from "lucide-react";

const projects = [
  {
    title: "180-Room Hotel WiFi Deployment",
    location: "Dubai Marina",
    category: "Enterprise WiFi",
    icon: Wifi,
    color: "bg-blue-50 text-blue-600",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&q=80",
    description: "Complete enterprise WiFi redesign for a 4-star property — 180 rooms, pool, gym, 3 conference halls, restaurant, and lobby. Deployed Cisco Catalyst 9105 access points with Meraki cloud management.",
    stats: [{ label: "Rooms covered", value: "180" }, { label: "APs installed", value: "62" }, { label: "WiFi rating", value: "4.9★" }],
    tags: ["Cisco Meraki", "Captive Portal", "UAE TRA Compliant"],
  },
  {
    title: "AI WhatsApp Bot — Trading Company",
    location: "Deira, Dubai",
    category: "AI Automation",
    icon: Bot,
    color: "bg-violet-50 text-violet-600",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80",
    description: "Built a custom WhatsApp AI bot for a trading company handling 300+ customer queries per day — product availability, pricing, order tracking, and complaint routing. Integrated with their ERP.",
    stats: [{ label: "Daily queries handled", value: "300+" }, { label: "Response time", value: "<5s" }, { label: "Cost saving/month", value: "AED 8,000" }],
    tags: ["GPT-4", "WhatsApp Business API", "ERP Integration"],
  },
  {
    title: "Hospital CCTV & Access Control",
    location: "Sharjah",
    category: "CCTV & Security",
    icon: Camera,
    color: "bg-red-50 text-red-600",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&q=80",
    description: "Full IP camera and access control deployment for a 250-bed hospital — 128 cameras across patient floors, ICU, pharmacy, car park, and entrances. Biometric access for medication rooms.",
    stats: [{ label: "Cameras installed", value: "128" }, { label: "Access doors", value: "24" }, { label: "Project duration", value: "12 days" }],
    tags: ["Hikvision", "Biometric Access", "HAAD Compliant"],
  },
  {
    title: "Industrial Warehouse Cabling",
    location: "Jebel Ali, Dubai",
    category: "Structured Cabling",
    icon: Cable,
    color: "bg-amber-50 text-amber-600",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80",
    description: "Complete structured cabling project for a 25,000 sqm logistics warehouse — 800 Cat6A data points, 3 fiber runs, 4 IDF cabinets, and WiFi for 40 handheld scanners.",
    stats: [{ label: "Data points", value: "800" }, { label: "Floor area", value: "25,000 sqm" }, { label: "Fiber runs", value: "3" }],
    tags: ["Cat6A", "Fiber Optic", "ISO 11801 Certified"],
  },
  {
    title: "Government Office IT Fit-Out",
    location: "Abu Dhabi",
    category: "Full IT Fit-Out",
    icon: Building2,
    color: "bg-emerald-50 text-emerald-600",
    image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=600&h=400&fit=crop&q=80",
    description: "End-to-end IT fit-out for a 3-floor government office — structured cabling, enterprise WiFi, CCTV, biometric access control, server room, and managed IT AMC for 200+ staff.",
    stats: [{ label: "Staff connected", value: "200+" }, { label: "Floors covered", value: "3" }, { label: "Uptime SLA", value: "99.9%" }],
    tags: ["UAE TRA Compliant", "VLAN Security", "24/7 AMC"],
  },
  {
    title: "Labor Camp WiFi — 2,000 Workers",
    location: "Sharjah Industrial Area",
    category: "Labor Camp WiFi",
    icon: Wifi,
    color: "bg-cyan-50 text-cyan-600",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
    description: "Enterprise WiFi across a labor accommodation with 48 blocks housing 2,000+ workers — prepaid WiFi voucher system, bandwidth per room, and NOC monitoring.",
    stats: [{ label: "Workers connected", value: "2,000+" }, { label: "Blocks covered", value: "48" }, { label: "Revenue model", value: "Prepaid voucher" }],
    tags: ["Ruckus WiFi", "Voucher System", "Metered Bandwidth"],
  },
];

const stats = [
  { value: "500+", label: "Projects completed" },
  { value: "UAE", label: "Nationwide coverage" },
  { value: "4.9★", label: "Average client rating" },
  { value: "7+", label: "Years in UAE market" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "IT Project Portfolio — Super Next Technologies",
  description: "Case studies and project portfolio for enterprise WiFi, CCTV, AI automation, structured cabling, and managed IT deployments across UAE.",
  url: "https://supernxt.com/portfolio",
  provider: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="IT Project Portfolio UAE | Enterprise WiFi, CCTV & AI Case Studies | SNT"
        description="Explore Super Next Technologies' project portfolio — enterprise WiFi, CCTV, AI automation, structured cabling, and managed IT deployments across UAE hotels, hospitals, government, and warehouses."
        canonical="https://supernxt.com/portfolio"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Star className="h-3.5 w-3.5 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Project{" "}
              <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Real projects. Real results. See how we've helped hotels, hospitals, government entities, warehouses, and businesses across the UAE transform their IT infrastructure.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-primary">{s.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all group"
                data-testid={`card-project-${i}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm ${p.color}`}>
                      <p.icon className="h-3 w-3" />{p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs">
                    <MapPin className="h-3 w-3" />{p.location}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.description}</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {p.stats.map(s => (
                      <div key={s.label} className="text-center bg-gray-50 rounded-xl p-2.5">
                        <p className="text-sm font-bold text-primary">{s.value}</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 px-4 md:px-8 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Ahmed Al Rashidi", role: "Hotel GM, Dubai Marina", text: "SNT completed our full WiFi upgrade in 5 days with zero disruption to guests. Outstanding quality." },
              { name: "Priya Sharma", role: "IT Director, Abu Dhabi", text: "The government fit-out was delivered exactly on spec, on time, and fully compliant. Highly recommend." },
              { name: "James O'Brien", role: "Operations Manager, Jebel Ali", text: "800 cable points in our warehouse done in 8 days. Clean work, properly tested, full documentation." },
            ].map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-gray-700 mb-3">"{r.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your Project</h2>
          <p className="text-gray-600 mb-6">Tell us about your project and we'll send you a free proposal within 24 hours.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact"><Button className="bg-primary text-white" data-testid="button-portfolio-cta">Request Free Proposal <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:+97148864215">
              <Button variant="outline" className="border-gray-300" data-testid="button-portfolio-call"><Phone className="mr-2 h-4 w-4" /> Call Us</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
