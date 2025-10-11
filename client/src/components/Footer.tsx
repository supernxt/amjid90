import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import logoIcon from "@assets/icononly_nobuffer_1760202128142.png";

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
              src={logoIcon} 
              alt="Super Next Technologies" 
              className="h-16 w-auto mb-4 drop-shadow-[0_0_25px_rgba(96,165,250,0.6)] brightness-125"
              data-testid="img-footer-logo"
            />
            <p className="text-muted-foreground mb-6 max-w-sm">
              AI-Powered Infrastructure & 3D Web Experiences for the future of enterprise technology.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:048864215">
                <Button size="sm" variant="outline" className="w-full justify-start" data-testid="button-footer-call">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 048864215
                </Button>
              </a>
              <div className="flex items-center gap-2 p-3 bg-primary/10 border border-primary/20 rounded-md">
                <MessageSquare className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">AI Assistant Available</p>
                  <p className="text-xs text-muted-foreground">Click the widget to chat</p>
                </div>
              </div>
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

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-3 text-sm">
            <a href="mailto:hello@supernxt.com" className="hover:text-primary flex items-center gap-2 transition-colors font-medium text-foreground" data-testid="link-footer-email">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-base">hello@supernxt.com</span>
            </a>
            <a 
              href="https://maps.app.goo.gl/4xaEugRG8vxcBmWc9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary flex items-center gap-2 transition-colors font-medium text-foreground"
              data-testid="link-footer-location"
            >
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-base">Production City Dubai UAE</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Super Next Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
