import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const footerLinks = {
  Solutions: [
    { label: "AI Solutions", path: "/ai-solutions" },
    { label: "Wireless Hotspot", path: "/wireless-hotspot" },
    { label: "Infrastructure", path: "/infrastructure" },
    { label: "Website Development", path: "/website-development" },
  ],
  Resources: [
    { label: "Templates & Use Cases", path: "/templates" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Pricing", path: "/pricing" },
    { label: "Support", path: "/support" },
  ],
  Company: [
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <img 
              src="/attached_assets/fulllogo_transparent_1760191386496.png" 
              alt="Super Next Technologies" 
              className="h-12 w-auto mb-4"
              data-testid="img-footer-logo"
            />
            <p className="text-muted-foreground mb-6 max-w-sm">
              AI-Powered Infrastructure & 3D Web Experiences for the future of enterprise technology.
            </p>
            <div className="flex gap-3">
              <a href="tel:048864215">
                <Button size="sm" variant="outline" data-testid="button-footer-call">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
              </a>
              <a href="https://wa.me/048864215" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="default" data-testid="button-footer-whatsapp">
                  <SiWhatsapp className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path}>
                      <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-foreground" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                        {link.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Super Next Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:info@supernext.tech" className="hover:text-foreground flex items-center gap-2">
              <Mail className="h-4 w-4" />
              info@supernext.tech
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              UAE/GCC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
