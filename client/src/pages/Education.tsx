import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { GraduationCap, Wifi, Camera, Cable, Bot, Server, Headphones, CheckCircle, ArrowRight, Phone, MessageSquare, Shield, Monitor } from "lucide-react";

const services = [
  { icon: Wifi, title: "Campus WiFi", desc: "High-density wireless covering classrooms, labs, libraries, canteens, and outdoor areas — with student/staff VLAN separation and usage controls.", color: "bg-blue-50 text-blue-600" },
  { icon: Camera, title: "CCTV & Campus Security", desc: "Comprehensive IP camera coverage for entrances, corridors, car parks, and playgrounds — with centralized monitoring and remote app access.", color: "bg-red-50 text-red-600" },
  { icon: Cable, title: "Structured Cabling", desc: "Cat6A and fiber optic backbone for classrooms, labs, server rooms, and admin blocks — certified and fully documented.", color: "bg-amber-50 text-amber-600" },
  { icon: Bot, title: "AI & Digital Learning Tools", desc: "AI-powered communication tools, automated notifications, and digital transformation solutions for modern education institutions.", color: "bg-violet-50 text-violet-600" },
  { icon: Monitor, title: "Interactive Display & AV", desc: "Smart classroom AV setup — interactive displays, projectors, audio systems, and video conferencing for lecture halls and meeting rooms.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Shield, title: "Content Filtering & Security", desc: "Child-safe internet with CIPA-compliant content filtering, firewall policies, and UAE cybersecurity standards for student networks.", color: "bg-orange-50 text-orange-600" },
  { icon: Server, title: "School Server & Cloud", desc: "On-premise server setup, Microsoft 365/Google Workspace deployment, and cloud backup for school administrative systems.", color: "bg-cyan-50 text-cyan-600" },
  { icon: Headphones, title: "IT AMC & Support", desc: "Annual maintenance contracts with priority response for schools and universities — including helpdesk, preventive maintenance, and SLA guarantees.", color: "bg-pink-50 text-pink-600" },
];

const faqs = [
  { q: "Can you provide WiFi coverage across an entire school campus?", a: "Yes. We design and deploy high-density campus WiFi using enterprise access points (Cisco, Ruckus, or Ubiquiti) with full coverage across all buildings and outdoor areas. We provide RF planning, load balancing, and separate networks for students, staff, and administration." },
  { q: "Do you offer content filtering for student internet access?", a: "Yes. We implement content filtering solutions that block inappropriate content, enforce UAE TDRA regulations, and provide activity reporting for school IT administrators. Student and staff networks are separated with different access policies." },
  { q: "Can you integrate CCTV with an existing school access control system?", a: "Yes. We can integrate new IP cameras with existing VMS (Video Management Software) and access control systems. We work with all major brands including Hikvision, Dahua, Axis, and Genetec." },
  { q: "Do you handle ministry-compliant cabling for government schools?", a: "Yes. Our structured cabling installations comply with UAE Ministry of Education IT infrastructure standards. We provide full documentation, test reports, and as-built drawings required for ministry submissions." },
  { q: "What ongoing support do you provide after installation?", a: "We offer annual maintenance contracts (AMC) that include helpdesk support, quarterly preventive maintenance visits, firmware updates, emergency on-site response, and a dedicated account manager for your institution." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Education IT Solutions UAE",
  provider: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
  description: "Campus WiFi, CCTV, structured cabling, content filtering, and managed IT for schools and universities across UAE.",
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
};

export default function Education() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="IT Solutions for Schools & Universities UAE | WiFi, CCTV & Managed IT | SNT"
        description="Enterprise IT for schools and universities in UAE — campus WiFi, CCTV, content filtering, structured cabling, AV setup, and 24/7 managed IT support. Ministry compliant. Free site survey."
        canonical="https://supernxt.com/education"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <GraduationCap className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary">Schools & Universities</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                IT Solutions for{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Schools & Universities</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Super Next Technologies delivers campus WiFi, CCTV, content filtering, AV systems, and managed IT for schools, colleges, and universities across the UAE — ministry compliant and student safe.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Campus-wide WiFi", "Content filtering", "Ministry compliant cabling", "Smart classroom AV", "Free site survey", "AMC support"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-rose-500 text-white" data-testid="button-edu-cta">
                    Request Free Campus Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+97148864215">
                  <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-edu-call">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop&q=80"
                  alt="School and University IT Solutions UAE"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">Serving UAE educational institutions</p>
                    <p className="text-xs text-gray-500 mt-0.5">Schools · Colleges · Universities · Training Centers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Education Technology Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Complete IT infrastructure for modern learning environments — from campus WiFi to smart classrooms.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="Education IT — FAQs" subtitle="Common questions from school principals, IT coordinators, and procurement teams." faqs={faqs} ctaText="Request Campus IT Survey" />

      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Upgrade Your Campus Technology</h2>
          <p className="text-gray-600 mb-6">Our education IT team will visit your campus, assess your infrastructure, and deliver a full proposal — at no cost.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact"><Button className="bg-primary text-white" data-testid="button-edu-final-cta">Book Free Campus Survey</Button></Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-edu-whatsapp"><MessageSquare className="mr-2 h-4 w-4" /> WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
