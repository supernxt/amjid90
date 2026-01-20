import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { openAIChat } from "@/lib/ai-assistant";

interface FlipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  category?: string;
}

export default function FlipCard({ icon: Icon, title, description, features, category }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-80 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      data-testid={`card-flip-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <Card
          className="absolute inset-0 p-6 backface-hidden bg-white border-gray-200 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col h-full">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center mb-4 shadow-lg">
              <Icon className="h-7 w-7 text-white" />
            </div>
            {category && (
              <span className="text-xs font-semibold text-primary mb-2" data-testid={`badge-category-${category}`}>
                {category}
              </span>
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid="text-card-title">{title}</h3>
            <p className="text-gray-600 flex-1" data-testid="text-card-description">{description}</p>
          </div>
        </Card>

        {/* Back of card */}
        <Card
          className="absolute inset-0 p-6 backface-hidden bg-gradient-to-br from-primary/5 to-rose-500/5 border-primary/20 shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2 flex-1 text-sm">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700" data-testid={`text-feature-${index}`}>
                  <span className="text-primary font-bold">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="sm" className="mt-4 bg-gradient-to-r from-primary to-rose-500" onClick={openAIChat} data-testid="button-learn-more">
              Learn More
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
