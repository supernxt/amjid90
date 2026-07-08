import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Wifi, Network, Server, Cable, Headphones } from "lucide-react";

const services = [
  { icon: Wifi,       label: "Managed Enterprise Wi-Fi",      desc: "Hotels, camps, offices across UAE" },
  { icon: Server,     label: "Cloud & Network Infrastructure", desc: "Cisco, Juniper, SD-WAN, MPLS" },
  { icon: Bot,        label: "AI Automation & Agents",         desc: "n8n, WhatsApp bots, AI workflows" },
  { icon: Network,    label: "Network Infrastructure",         desc: "Core switching, routing, SD-WAN, VPN" },
  { icon: Cable,      label: "Structured Cabling & Fiber",     desc: "TIA/ISO-certified, Cat6A, OM4" },
  { icon: Headphones, label: "Managed IT & AMC",               desc: "24/7 NOC, helpdesk, server management" },
];

export default function EnterprisePromo() {
  return (
    <section className="mt-16 bg-gray-900 rounded-2xl overflow-hidden">
      <div className="px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Enterprise Solutions by SuperNXT
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              Need a Faster, More Reliable Network?
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl text-sm leading-relaxed">
              Our engineers design, deploy, and manage enterprise networks across UAE — Dubai, Abu Dhabi, Sharjah, and beyond. 500+ enterprise clients trust SuperNXT.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:opacity-90 text-white font-semibold w-full md:w-auto"
                data-testid="button-enterprise-contact"
              >
                Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/free-audit">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white w-full md:w-auto"
                data-testid="button-free-audit"
              >
                Request Free IT Audit
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {services.map((svc) => (
            <div
              key={svc.label}
              className="flex items-start gap-3 bg-gray-800 rounded-xl p-3"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <svc.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-white font-semibold text-xs leading-tight">{svc.label}</p>
                <p className="text-gray-400 text-xs mt-0.5">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Serving enterprises across all 7 UAE emirates · ISO 27001 · Cisco & Juniper Certified · 24/7 Support
        </p>
      </div>
    </section>
  );
}
