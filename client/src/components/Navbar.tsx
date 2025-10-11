import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/attached_assets/fulllogo_transparent_1760191386496.png" 
              alt="Super Next Technologies" 
              className="h-10 w-auto"
              data-testid="img-logo"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center max-w-4xl mx-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-sm ${
                    location === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a href="tel:048864215">
              <Button variant="outline" size="sm" data-testid="button-call">
                <Phone className="h-4 w-4 mr-2" />
                048864215
              </Button>
            </a>
            <a href="https://wa.me/048864215" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" data-testid="button-whatsapp">
                <SiWhatsapp className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>

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
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    location === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <a href="tel:048864215" className="block">
                <Button variant="outline" className="w-full" data-testid="button-mobile-call">
                  <Phone className="h-4 w-4 mr-2" />
                  048864215
                </Button>
              </a>
              <a href="https://wa.me/048864215" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="default" className="w-full" data-testid="button-mobile-whatsapp">
                  <SiWhatsapp className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
