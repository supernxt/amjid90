import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "AI Solutions", path: "/ai-solutions" },
  { label: "Wireless Hotspot", path: "/wireless-hotspot" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Website Development", path: "/website-development" },
  { label: "Templates & Use Cases", path: "/templates" },
  { label: "Pricing", path: "/pricing" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Support", path: "/support" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/attached_assets/fulllogo_transparent_1760191386496.png" 
              alt="Super Next Technologies" 
              className="h-16 md:h-20 w-auto transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]"
              data-testid="img-logo"
              style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 15px rgba(96, 165, 250, 0.8))' }}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center max-w-5xl mx-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-sm font-medium transition-all duration-300 ${
                    location === item.path
                      ? "bg-primary/20 text-primary border border-primary/40 shadow-md shadow-primary/20"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/10 hover:border-primary/30 border border-transparent"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block w-32"></div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-primary/20 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start font-medium transition-all duration-300 ${
                    location === item.path
                      ? "bg-primary/20 text-primary border border-primary/40"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/10 border border-transparent"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
