import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Pricing() {
  return (
    <div className="pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

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
                price="$99"
                period="month"
                description="For small teams getting started"
                features={[
                  "3 AI agent seats",
                  "Email & Web channels",
                  "Basic integrations",
                  "Email support",
                  "500 responses/month"
                ]}
              />
              <PricingCard
                title="AI Pro"
                price="$299"
                period="month"
                description="Perfect for growing teams"
                features={[
                  "10 AI agent seats",
                  "All channels (Email, WhatsApp, Voice)",
                  "Advanced integrations",
                  "Priority support",
                  "5,000 responses/month",
                  "Custom workflows"
                ]}
                isPopular={true}
              />
              <PricingCard
                title="AI Enterprise"
                price="Custom"
                period="month"
                description="For large organizations"
                features={[
                  "Unlimited seats",
                  "All channels + Custom",
                  "Full integration suite",
                  "24/7 dedicated support",
                  "Unlimited responses",
                  "Custom SLA",
                  "White-label options"
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="hotspot" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Hotspot Basic"
                price="$199"
                period="month"
                description="Single location setup"
                features={[
                  "Up to 5 access points",
                  "Basic captive portal",
                  "2 VLANs",
                  "Email support",
                  "Monthly reports"
                ]}
              />
              <PricingCard
                title="Hotspot Pro"
                price="$499"
                period="month"
                description="Multi-location enterprise"
                features={[
                  "Up to 20 access points",
                  "Advanced captive portal",
                  "10 VLANs",
                  "Priority support",
                  "Real-time analytics",
                  "Multi-WAN failover"
                ]}
                isPopular={true}
              />
              <PricingCard
                title="Hotspot Enterprise"
                price="Custom"
                period="month"
                description="Large-scale deployment"
                features={[
                  "Unlimited access points",
                  "Full feature set",
                  "Unlimited VLANs",
                  "24/7 managed support",
                  "Custom analytics",
                  "Dedicated account manager"
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="website" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Static Site"
                price="$999"
                period="one-time"
                description="Fast, SEO-optimized sites"
                features={[
                  "Up to 10 pages",
                  "Responsive design",
                  "SEO optimization",
                  "Free 1-Year Domain Hosting",
                  "Free Domain",
                  "Free Email Hosting"
                ]}
                hasOffer={true}
              />
              <PricingCard
                title="Dynamic Site"
                price="$2,499"
                period="one-time"
                description="Interactive web applications"
                features={[
                  "Custom functionality",
                  "CMS integration",
                  "User authentication",
                  "API integration",
                  "Free 1-Year Domain Hosting",
                  "Free Domain",
                  "Free Email Hosting"
                ]}
                isPopular={true}
                hasOffer={true}
              />
              <PricingCard
                title="3D Immersive"
                price="$4,999"
                period="one-time"
                description="Cutting-edge 3D experiences"
                features={[
                  "React Three Fiber",
                  "Custom 3D scenes",
                  "AR-ready components",
                  "Performance optimized",
                  "Premium support",
                  "Free 1-Year Domain Hosting",
                  "Free Domain",
                  "Free Email Hosting"
                ]}
                hasOffer={true}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
