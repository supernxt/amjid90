import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import smallLogo from "@assets/icononly_transparent_nobuffer_1760207932143.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "AI Solutions", path: "/ai-solutions" },
  { label: "Wireless Hotspot", path: "/wireless-hotspot" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Website Development", path: "/website-development" },
  { label: "Templates & Use Cases", path: "/templates" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Support", path: "/support" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer" data-testid="link-logo">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                <div className="relative bg-white rounded-xl p-1.5 shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <img 
                    src={smallLogo} 
                    alt="Super Next Technologies" 
                    className="h-8 w-8 md:h-9 md:w-9 object-contain"
                    data-testid="img-logo"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-white text-lg">Super</span>
                <span className="font-bold text-primary text-lg">NXT</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <button
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    location === item.path
                      ? "bg-primary/20 text-primary"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/25"
              data-testid="button-get-started"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <button
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    location === item.path
                      ? "bg-primary/20 text-primary"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent"
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
