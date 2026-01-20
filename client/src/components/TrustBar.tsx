import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, Zap, Globe } from "lucide-react";

const trustItems = [
  { icon: Shield, value: "ISO 27001", label: "Certified Security" },
  { icon: Clock, value: "99.9%", label: "Uptime SLA" },
  { icon: Award, value: "Enterprise", label: "Grade Solutions" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Zap, value: "24/7", label: "AI Support" },
  { icon: Globe, value: "GCC", label: "Coverage" },
];

export default function TrustBar() {
  return (
    <div className="py-8 md:py-12 border-y border-white/10 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center group"
              data-testid={`trust-item-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">{item.value}</div>
              <div className="text-xs md:text-sm text-white/50">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
