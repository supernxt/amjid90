import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "ISO Certified", value: "Security" },
  { icon: Clock, label: "99.9%", value: "Uptime SLA" },
  { icon: Award, label: "Enterprise", value: "Grade Solutions" },
];

export default function TrustBar() {
  return (
    <div className="py-12 border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center gap-4"
              data-testid={`trust-item-${index}`}
            >
              <item.icon className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
