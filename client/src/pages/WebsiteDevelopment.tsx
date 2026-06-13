import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";
import { Code, Palette, Rocket, Smartphone, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function WebsiteDevelopment() {
  return (
    <VideoBackground variant="web">
      <SEO
        title="Website Development Dubai & UAE | Super Next Technologies"
        description="Professional website design and development across UAE. Custom, responsive, SEO-optimized websites for businesses. Super Next Technologies based in Dubai."
        keywords="website development Dubai, web design UAE, website company Dubai, web development Abu Dhabi, website Sharjah, custom website UAE, e-commerce UAE, web application Dubai, SEO website UAE"
        canonical="https://supernxt.com/website-development"
      />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-violet-600 text-sm font-semibold tracking-wider uppercase">Web Development</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gray-900">
                Website <span className="text-violet-600">Development</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Modern, responsive websites that captivate and convert your audience
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
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop"
                  alt="Web Development"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Code, title: "Custom Development", desc: "Tailored solutions for your needs", color: "bg-violet-500" },
              { icon: Palette, title: "Stunning Design", desc: "Beautiful UI/UX experiences", color: "bg-purple-500" },
              { icon: Rocket, title: "Fast Performance", desc: "Optimized for speed", color: "bg-pink-500" },
              { icon: Smartphone, title: "Mobile First", desc: "Responsive on all devices", color: "bg-fuchsia-500" },
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to build your dream website?</h3>
            <Button size="lg" className="gap-2 bg-gradient-to-r from-violet-500 to-purple-500" onClick={openAIChat} data-testid="button-get-started">
              Start Your Project <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </VideoBackground>
  );
}
