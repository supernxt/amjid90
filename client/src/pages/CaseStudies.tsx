import Background3D from "@/components/Background3D";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Target, CheckCircle, ArrowRight } from "lucide-react";

export default function CaseStudies() {
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
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
              Real results from real clients transforming their businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Award, title: "Industry Leaders", desc: "Fortune 500 partnerships" },
              { icon: TrendingUp, title: "Proven Growth", desc: "300% average ROI" },
              { icon: Target, title: "Success Stories", desc: "500+ satisfied clients" },
              { icon: CheckCircle, title: "Delivered Results", desc: "99% project success rate" },
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
            <Button size="lg" className="gap-2" data-testid="button-view">
              View All Case Studies <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </Background3D>
  );
}
