import { motion } from "framer-motion";
import VideoBackground from "@/components/VideoBackground";
import PricingCard from "@/components/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function Pricing() {
  return (
    <VideoBackground variant="pricing">
      <SEO
        title="Plans & Pricing | Super Next Technologies UAE"
        description="Custom-quoted enterprise IT plans — AI agents, wireless hotspots, CCTV, structured cabling, managed IT and website development across UAE. Contact us for a tailored proposal."
        keywords="IT services pricing UAE, enterprise technology quote Dubai, AI solutions quote UAE, CCTV pricing Dubai, managed IT quote UAE, Super Next Technologies plans"
        canonical="https://supernxt.com/pricing"
      />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Plans & Pricing</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-6 text-gray-900">
              Tailored to Your Business
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every deployment is different. We scope each project individually so you only pay for exactly what you need — no hidden fees, no bloated packages.
            </p>
          </motion.div>

          {/* Contact banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a href="mailto:hello@supernxt.com">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 gap-2">
                <Mail className="h-4 w-4" />
                hello@supernxt.com
              </Button>
            </a>
            <a href="tel:048864215">
              <Button variant="outline" className="border-gray-300 text-gray-700 gap-2">
                <Phone className="h-4 w-4" />
                04 886 4215
              </Button>
            </a>
            <a href="https://wa.me/971048864215" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 gap-2">
                <MessageSquare className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </a>
          </motion.div>

          {/* Plans tabs */}
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="ai" data-testid="tab-pricing-ai">AI Solutions</TabsTrigger>
              <TabsTrigger value="hotspot" data-testid="tab-pricing-hotspot">Hotspot</TabsTrigger>
              <TabsTrigger value="website" data-testid="tab-pricing-website">Websites</TabsTrigger>
            </TabsList>

            <TabsContent value="ai" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="AI Starter"
                  description="For small teams getting started with AI"
                  features={[
                    "3 AI agent seats",
                    "Email & Web channels",
                    "Basic integrations",
                    "Email support",
                    "500 responses/month",
                  ]}
                />
                <PricingCard
                  title="AI Pro"
                  description="For growing teams needing more power"
                  features={[
                    "10 AI agent seats",
                    "All channels (Email, WhatsApp, Voice)",
                    "Advanced integrations",
                    "Priority support",
                    "5,000 responses/month",
                    "Custom workflows",
                  ]}
                  isPopular={true}
                />
                <PricingCard
                  title="AI Enterprise"
                  description="Fully custom for large organisations"
                  features={[
                    "Unlimited seats",
                    "All channels + Custom",
                    "Full integration suite",
                    "24/7 dedicated support",
                    "Unlimited responses",
                    "Custom SLA",
                    "White-label options",
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="hotspot" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="Hotspot Basic"
                  description="Single location setup"
                  features={[
                    "Up to 5 access points",
                    "Basic captive portal",
                    "2 VLANs",
                    "Email support",
                    "Monthly reports",
                  ]}
                />
                <PricingCard
                  title="Hotspot Pro"
                  description="Multi-location enterprise"
                  features={[
                    "Up to 20 access points",
                    "Advanced captive portal",
                    "10 VLANs",
                    "Priority support",
                    "Real-time analytics",
                    "Multi-WAN failover",
                  ]}
                  isPopular={true}
                />
                <PricingCard
                  title="Hotspot Enterprise"
                  description="Large-scale managed deployment"
                  features={[
                    "Unlimited access points",
                    "Full feature set",
                    "Unlimited VLANs",
                    "24/7 managed support",
                    "Custom analytics",
                    "Dedicated account manager",
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="website" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="Static Site"
                  description="Fast, SEO-optimized business sites"
                  features={[
                    "Up to 10 pages",
                    "Responsive design",
                    "SEO optimization",
                    "1-Year Domain & Hosting",
                    "Free Domain",
                    "Free Email Hosting",
                  ]}
                  hasOffer={true}
                />
                <PricingCard
                  title="Dynamic Site"
                  description="Interactive web applications"
                  features={[
                    "Custom functionality",
                    "CMS integration",
                    "User authentication",
                    "API integration",
                    "1-Year Domain & Hosting",
                    "Free Domain",
                    "Free Email Hosting",
                  ]}
                  isPopular={true}
                  hasOffer={true}
                />
                <PricingCard
                  title="3D Immersive"
                  description="Cutting-edge 3D web experiences"
                  features={[
                    "React Three Fiber",
                    "Custom 3D scenes",
                    "AR-ready components",
                    "Performance optimized",
                    "Premium support",
                    "1-Year Domain & Hosting",
                    "Free Domain",
                    "Free Email Hosting",
                  ]}
                  hasOffer={true}
                />
              </div>
            </TabsContent>
          </Tabs>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-br from-primary/5 to-rose-500/5 border border-primary/20 rounded-3xl p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Not sure which plan fits?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Our team will assess your site, team size, and goals — then recommend the right scope and provide a transparent, itemised quote.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-rose-500 shadow-lg shadow-primary/20">
                Request a Free Consultation
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </VideoBackground>
  );
}
