import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, Zap, Globe } from "lucide-react";

const trustItems = [
  { icon: Shield, value: "ISO 27001", label: "Certified Security", color: "text-primary", bg: "bg-primary/10" },
  { icon: Clock, value: "99.9%", label: "Uptime SLA", color: "text-emerald-600", bg: "bg-emerald-500/10" },
  { icon: Award, value: "Enterprise", label: "Grade Solutions", color: "text-blue-600", bg: "bg-blue-500/10" },
  { icon: Users, value: "500+", label: "Happy Clients", color: "text-violet-600", bg: "bg-violet-500/10" },
  { icon: Zap, value: "24/7", label: "AI Support", color: "text-amber-600", bg: "bg-amber-500/10" },
  { icon: Globe, value: "GCC", label: "Coverage", color: "text-cyan-600", bg: "bg-cyan-500/10" },
];

export default function TrustBar() {
  return (
    <div className="py-12 md:py-16 bg-white border-y border-gray-100">
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
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                <item.icon className={`h-7 w-7 ${item.color}`} />
              </div>
              <div className={`text-xl md:text-2xl font-bold ${item.color}`}>{item.value}</div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
