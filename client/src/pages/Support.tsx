import Background3D from "@/components/Background3D";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeadphonesIcon, Clock, MessageCircle, BookOpen, ArrowRight } from "lucide-react";

export default function Support() {
  return (
    <Background3D variant="default">
      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
              Expert support when you need it, every step of the way
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: HeadphonesIcon, title: "24/7 Support", desc: "Always here to help" },
              { icon: Clock, title: "Fast Response", desc: "< 1 hour response time" },
              { icon: MessageCircle, title: "Live Chat", desc: "Instant assistance" },
              { icon: BookOpen, title: "Knowledge Base", desc: "Extensive documentation" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover-elevate"
                data-testid={`card-feature-${index}`}
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
                <p className="text-foreground/70" data-testid={`text-feature-desc-${index}`}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Button size="lg" className="gap-2" data-testid="button-contact">
              Contact Support <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </Background3D>
  );
}
