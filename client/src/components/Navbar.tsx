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
  { label: "Web Development", path: "/website-development" },
  { label: "Templates", path: "/templates" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-lg shadow-gray-200/50 border-b border-gray-100" 
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Only - No Text */}
          <Link href="/">
            <div className="flex items-center group cursor-pointer shrink-0" data-testid="link-logo">
              <div className="relative">
                <div className="bg-white rounded-xl p-2 shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <img 
                    src={smallLogo} 
                    alt="Super Next Technologies" 
                    className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
                    data-testid="img-logo"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Open layout without grouping */}
          <div className="hidden xl:flex items-center justify-center flex-1 mx-6">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <button
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                      location === item.path
                        ? "text-primary bg-primary/10"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center shrink-0">
            <Button 
              size="default" 
              className="bg-gradient-to-r from-primary to-rose-500 hover:opacity-90 shadow-lg shadow-primary/20"
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
          <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <button
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    location === item.path
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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
