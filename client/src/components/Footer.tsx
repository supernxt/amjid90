import { useState } from "react";
import { Link } from "wouter";
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight, ChevronDown } from "lucide-react";
import { SiWhatsapp, SiLinkedin, SiYoutube, SiFacebook, SiTiktok } from "react-icons/si";
import logoIcon from "@assets/icononly_nobuffer_1760202128142.png";

const footerLinks: Record<string, { label: string; path: string }[]> = {
  "AI & Web": [
    { label: "AI Solutions", path: "/ai-solutions" },
    { label: "Wireless Hotspot", path: "/wireless-hotspot" },
    { label: "Infrastructure", path: "/infrastructure" },
    { label: "Website Development", path: "/website-development" },
  ],
  "IT Services": [
    { label: "CCTV Solutions", path: "/cctv-solutions" },
    { label: "Structured Cabling", path: "/structured-cabling" },
    { label: "Managed IT & AMC", path: "/managed-it-services" },
    { label: "Network Infrastructure", path: "/network-infrastructure" },
    { label: "Labor Camp WiFi", path: "/labor-camp-wifi" },
  ],
  "Locations": [
    { label: "Dubai", path: "/" },
    { label: "Abu Dhabi", path: "/abu-dhabi" },
    { label: "Sharjah", path: "/sharjah" },
    { label: "Ajman", path: "/ajman" },
    { label: "Ras Al Khaimah", path: "/ras-al-khaimah" },
    { label: "Fujairah", path: "/fujairah" },
    { label: "Hotels & Resorts", path: "/hotels" },
    { label: "Hospitals & Clinics", path: "/hospitals" },
    { label: "Warehouses", path: "/warehouses" },
    { label: "Labor Camps", path: "/labor-camp-wifi" },
  ],
  "Company": [
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Free IT Audit", path: "/free-audit" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "Privacy Policy", path: "/legal/privacy" },
    { label: "EULA", path: "/legal/eula" },
  ],
};

const socialLinks = [
  { icon: SiWhatsapp, href: "https://wa.me/971048864215", label: "WhatsApp", color: "hover:text-green-500 hover:bg-green-50" },
  { icon: SiLinkedin, href: "https://linkedin.com/in/amjid-bashir-437390415", label: "LinkedIn", color: "hover:text-blue-600 hover:bg-blue-50" },
  { icon: SiYoutube, href: "https://www.youtube.com/@supernxt-v7p", label: "YouTube", color: "hover:text-red-600 hover:bg-red-50" },
  { icon: SiFacebook, href: "https://www.facebook.com/share/1LbBNHL9Au/", label: "Facebook", color: "hover:text-blue-500 hover:bg-blue-50" },
  { icon: SiTiktok, href: "https://www.tiktok.com/@amjidbashir16", label: "TikTok", color: "hover:text-gray-900 hover:bg-gray-100" },
];

function AccordionColumn({ title, links }: { title: string; links: { label: string; path: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 lg:border-none">
      {/* Header — always clickable on mobile, static label on desktop */}
      <button
        className="w-full flex items-center justify-between py-4 lg:py-0 lg:cursor-default lg:mb-5 group"
        onClick={() => setOpen(o => !o)}
        data-testid={`button-footer-section-${title.toLowerCase().replace(/\s+/g, "-")}`}
        aria-expanded={open}
      >
        <h3 className="font-semibold text-white text-sm">{title}</h3>
        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform duration-300 lg:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Links — always visible on desktop, accordion on mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:overflow-visible lg:max-h-none lg:opacity-100 ${
          open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 lg:pb-0"
        }`}
      >
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.path + link.label}>
              <Link href={link.path}>
                <span
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer flex items-center gap-1 group text-sm"
                  data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-rose-500 to-orange-500" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoIcon}
                alt="Super Next Technologies"
                className="h-12 w-auto"
                data-testid="img-footer-logo"
              />
              <div>
                <span className="font-bold text-white text-xl">Super</span>
                <span className="font-bold text-primary text-xl">NXT</span>
              </div>
            </div>

            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-sm">
              AI-Powered Infrastructure & 3D Web Experiences for the future of enterprise technology in the UAE.
            </p>

            {/* Contact Cards */}
            <div className="space-y-3">
              <a
                href="tel:048864215"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all group"
                data-testid="button-footer-call"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call us</p>
                  <p className="font-semibold text-white">048864215</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/20 to-rose-500/20 border border-primary/30">
                <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">AI Assistant Available</p>
                  <p className="text-xs text-gray-400">Click the widget to chat 24/7</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center transition-all ${social.color}`}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Accordion Link Columns */}
          <div className="lg:col-span-4 grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <AccordionColumn key={category} title={category} links={links} />
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="mailto:hello@supernxt.com"
              className="text-gray-400 hover:text-primary flex items-center gap-2 transition-colors text-sm"
              data-testid="link-footer-email"
            >
              <Mail className="h-4 w-4" />
              hello@supernxt.com
            </a>
            <a
              href="https://maps.app.goo.gl/4xaEugRG8vxcBmWc9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary flex items-center gap-2 transition-colors text-sm"
              data-testid="link-footer-location"
            >
              <MapPin className="h-4 w-4" />
              Production City Dubai UAE
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 Super Next Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
