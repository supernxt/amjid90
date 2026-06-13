import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, ChevronDown, Camera, Cable, Headphones, Network, Wifi, Bot, Radio, Server, Globe, ChevronRight } from "lucide-react";
import smallLogo from "@assets/icononly_transparent_nobuffer_1760207932143.png";

const services = [
  {
    category: "AI & Digital",
    items: [
      { label: "AI Solutions", path: "/ai-solutions", icon: Bot, desc: "AI agents & automation" },
      { label: "Website Development", path: "/website-development", icon: Globe, desc: "Custom web design" },
      { label: "Infrastructure", path: "/infrastructure", icon: Server, desc: "Cloud & hosting" },
    ],
  },
  {
    category: "Networking & Wireless",
    items: [
      { label: "Wireless Hotspot", path: "/wireless-hotspot", icon: Radio, desc: "Enterprise WiFi" },
      { label: "Network Infrastructure", path: "/network-infrastructure", icon: Network, desc: "Cisco, Juniper, MikroTik" },
      { label: "Labor Camp WiFi", path: "/labor-camp-wifi", icon: Wifi, desc: "Camp & hotel WiFi" },
    ],
  },
  {
    category: "IT & Security",
    items: [
      { label: "CCTV Solutions", path: "/cctv-solutions", icon: Camera, desc: "Surveillance systems" },
      { label: "Structured Cabling", path: "/structured-cabling", icon: Cable, desc: "Fiber optic & cabling" },
      { label: "Managed IT & AMC", path: "/managed-it-services", icon: Headphones, desc: "24/7 IT support" },
    ],
  },
];

const mainNavItems = [
  { label: "Case Studies", path: "/case-studies" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServiceActive = services.some(cat => cat.items.some(i => i.path === location));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg shadow-gray-200/50 border-b border-gray-100" : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/">
            <div className="flex items-center group cursor-pointer shrink-0" data-testid="link-logo">
              <div className="bg-white rounded-xl p-2 shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-200">
                <img
                  src={smallLogo}
                  alt="Super Next Technologies"
                  className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
                  data-testid="img-logo"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center justify-center flex-1 mx-6">
            <div className="flex items-center gap-1">

              {/* Home */}
              <Link href="/">
                <button
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                    location === "/" ? "text-primary bg-primary/10" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  data-testid="link-nav-home"
                >
                  Home
                </button>
              </Link>

              {/* Services Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                    isServiceActive || servicesOpen ? "text-primary bg-primary/10" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  data-testid="button-nav-services"
                >
                  Services
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-100 p-5 grid grid-cols-3 gap-5 z-50">
                    {services.map((cat) => (
                      <div key={cat.category}>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{cat.category}</p>
                        <div className="space-y-1">
                          {cat.items.map((item) => (
                            <Link key={item.path} href={item.path}>
                              <button
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group ${
                                  location === item.path ? "bg-primary/10 text-primary" : "hover:bg-gray-50 text-gray-700 hover:text-gray-900"
                                }`}
                                onClick={() => setServicesOpen(false)}
                                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                  location === item.path ? "bg-primary/20" : "bg-gray-100 group-hover:bg-primary/10"
                                }`}>
                                  <item.icon className={`h-4 w-4 ${location === item.path ? "text-primary" : "text-gray-500 group-hover:text-primary"}`} />
                                </div>
                                <div>
                                  <p className="text-sm font-medium leading-tight">{item.label}</p>
                                  <p className="text-xs text-gray-400 leading-tight">{item.desc}</p>
                                </div>
                              </button>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Main nav items */}
              {mainNavItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <button
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                      location === item.path ? "text-primary bg-primary/10" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Link href="/contact">
              <Button
                variant="outline"
                size="default"
                className="border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                data-testid="button-get-quote"
              >
                Get a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="default"
                className="bg-gradient-to-r from-primary to-rose-500 hover:opacity-90 shadow-lg shadow-primary/20"
                data-testid="button-get-started"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">

            <Link href="/">
              <button
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  location === "/" ? "bg-primary/10 text-primary border border-primary/20" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-home"
              >
                Home
              </button>
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isServiceActive ? "bg-primary/10 text-primary border border-primary/20" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                data-testid="button-mobile-services"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  {services.map((cat) => (
                    <div key={cat.category}>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-2">{cat.category}</p>
                      {cat.items.map((item) => (
                        <Link key={item.path} href={item.path}>
                          <button
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 ${
                              location === item.path ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                            onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                            data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <item.icon className="h-4 w-4 shrink-0" />
                            <span className="text-sm font-medium">{item.label}</span>
                          </button>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {mainNavItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <button
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    location === item.path ? "bg-primary/10 text-primary border border-primary/20" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </button>
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-100">
              <Button
                className="w-full bg-gradient-to-r from-primary to-rose-500"
                data-testid="button-mobile-get-started"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
