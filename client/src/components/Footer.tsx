import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight, ChevronDown } from "lucide-react";
import { SiWhatsapp, SiLinkedin, SiYoutube, SiFacebook, SiTiktok } from "react-icons/si";
import logoIcon from "@assets/icononly_nobuffer_1760202128142.png";

const footerSections: {
  title: string;
  primaryPath: string;
  links: { label: string; path: string }[];
}[] = [
  {
    title: "AI & Web",
    primaryPath: "/ai-solutions",
    links: [
      { label: "AI Solutions", path: "/ai-solutions" },
      { label: "Wireless Hotspot", path: "/wireless-hotspot" },
      { label: "Infrastructure", path: "/infrastructure" },
      { label: "Website Development", path: "/website-development" },
    ],
  },
  {
    title: "IT Services",
    primaryPath: "/managed-it-services",
    links: [
      { label: "CCTV Solutions", path: "/cctv-solutions" },
      { label: "Structured Cabling", path: "/structured-cabling" },
      { label: "Managed IT & AMC", path: "/managed-it-services" },
      { label: "Network Infrastructure", path: "/network-infrastructure" },
      { label: "Labor Camp WiFi", path: "/labor-camp-wifi" },
    ],
  },
  {
    title: "Locations",
    primaryPath: "/",
    links: [
      { label: "Dubai", path: "/dubai" },
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
  },
  {
    title: "Network Tools",
    primaryPath: "/tools/",
    links: [
      { label: "Speed Test", path: "/analyzer" },
      { label: "DNS Speed Test", path: "/tools/speed-test/" },
      { label: "DNS Finder", path: "/tools/fastest-dns-finder/" },
      { label: "Ping & Latency", path: "/tools/ping-latency-test/" },
      { label: "Network Health", path: "/tools/network-health-assessment/" },
      { label: "All Tools", path: "/tools/" },
    ],
  },
  {
    title: "Company",
    primaryPath: "/about",
    links: [
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Free IT Audit", path: "/free-audit" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Blog", path: "/blog" },
      { label: "Support", path: "/support" },
      { label: "Templates", path: "/templates" },
      { label: "Privacy Policy", path: "/legal/privacy" },
      { label: "EULA", path: "/legal/eula" },
    ],
  },
];

const socialLinks = [
  { icon: SiWhatsapp, href: "https://wa.me/971048864215", label: "WhatsApp", color: "hover:text-green-500 hover:bg-green-50" },
  { icon: SiLinkedin, href: "https://linkedin.com/in/amjid-bashir-437390415", label: "LinkedIn", color: "hover:text-blue-600 hover:bg-blue-50" },
  { icon: SiYoutube, href: "https://www.youtube.com/@supernxt-v7p", label: "YouTube", color: "hover:text-red-600 hover:bg-red-50" },
  { icon: SiFacebook, href: "https://www.facebook.com/share/1LbBNHL9Au/", label: "Facebook", color: "hover:text-blue-500 hover:bg-blue-50" },
  { icon: SiTiktok, href: "https://www.tiktok.com/@amjidbashir16", label: "TikTok", color: "hover:text-gray-900 hover:bg-gray-100" },
];

function AccordionColumn({
  title,
  primaryPath,
  links,
}: {
  title: string;
  primaryPath: string;
  links: { label: string; path: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [, navigate] = useLocation();

  const handleHeaderClick = () => {
    if (!open) {
      // Navigate to primary page and open accordion
      navigate(primaryPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen((o) => !o);
  };

  return (
    <div className="border-b border-gray-800">
      {/* Header row: title navigates, chevron toggles */}
      <div className="flex items-center justify-between py-3.5">
        <button
          onClick={handleHeaderClick}
          className="text-left font-semibold text-white text-sm hover:text-primary transition-colors"
          data-testid={`button-footer-section-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {title}
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={`Toggle ${title}`}
          className="p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ChevronDown
            className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Drill-down links */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[28rem] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-2.5">
          {links.map((link) => {
            const isExternal = link.path.startsWith("/analyzer");
            const cls = "text-gray-400 hover:text-primary transition-colors cursor-pointer flex items-center gap-1 group text-sm";
            const testId = `link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`;
            const inner = (
              <>
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </>
            );
            return (
              <li key={link.path + link.label}>
                {isExternal ? (
                  <a href={link.path} className={cls} data-testid={testId}>{inner}</a>
                ) : (
                  <Link href={link.path}>
                    <span className={cls} data-testid={testId}>{inner}</span>
                  </Link>
                )}
              </li>
            );
          })}
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

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoIcon}
                alt="Super Next Technologies"
                className="h-10 w-auto"
                data-testid="img-footer-logo"
              />
              <div>
                <span className="font-bold text-white text-lg">Super</span>
                <span className="font-bold text-primary text-lg">NXT</span>
              </div>
            </div>

            <p className="text-gray-400 mb-5 max-w-sm leading-relaxed text-sm">
              AI-Powered Infrastructure & Web Experiences for enterprise technology in the UAE.
            </p>

            {/* Contact Cards */}
            <div className="space-y-2">
              <a
                href="tel:048864215"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all group"
                data-testid="button-footer-call"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call us</p>
                  <p className="font-semibold text-white text-sm">048864215</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-gradient-to-r from-primary/20 to-rose-500/20 border border-primary/30">
                <div className="w-9 h-9 rounded-lg bg-primary/30 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">AI Assistant Available</p>
                  <p className="text-xs text-gray-400">Click the widget to chat 24/7</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2.5 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center transition-all ${social.color}`}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Accordion Columns */}
          <div className="lg:col-span-4">
            {footerSections.map((section) => (
              <AccordionColumn
                key={section.title}
                title={section.title}
                primaryPath={section.primaryPath}
                links={section.links}
              />
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
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
          <p className="text-xs text-gray-500">
            © 2025 Super Next Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
