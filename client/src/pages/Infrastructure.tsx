import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";
import { Server, Database, Cloud, Lock, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function Infrastructure() {
  return (
    <VideoBackground variant="infrastructure">
      <SEO
        title="Cloud Infrastructure Services UAE | Super Next Technologies"
        description="Managed cloud infrastructure, server management, cloud migration and enterprise networking across UAE. 99.9% uptime SLA. 24/7 monitoring. Super Next Technologies, Dubai."
        keywords="cloud infrastructure UAE, server management Dubai, cloud services UAE, managed IT Dubai, cloud migration UAE, enterprise networking UAE, VPS hosting Dubai, IT infrastructure UAE"
        canonical="https://supernxt.com/infrastructure"
      />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-emerald-600 text-sm font-semibold tracking-wider uppercase">Cloud & Networks</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gray-900">
                Infrastructure <span className="text-emerald-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Build resilient, scalable infrastructure that grows with your business
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                  alt="Cloud Infrastructure"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Server, title: "Cloud Infrastructure", desc: "Scalable cloud solutions", color: "bg-emerald-500" },
              { icon: Database, title: "Data Management", desc: "Secure data storage & backup", color: "bg-teal-500" },
              { icon: Cloud, title: "Hybrid Cloud", desc: "On-premise & cloud integration", color: "bg-cyan-500" },
              { icon: Lock, title: "Security First", desc: "Enterprise-grade protection", color: "bg-green-500" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all"
                data-testid={`card-feature-${index}`}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
                <p className="text-gray-600" data-testid={`text-feature-desc-${index}`}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center bg-gray-50 rounded-3xl p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to scale your infrastructure?</h3>
            <Button size="lg" className="gap-2 bg-gradient-to-r from-emerald-500 to-teal-500" onClick={openAIChat} data-testid="button-get-started">
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </VideoBackground>
  );
}
