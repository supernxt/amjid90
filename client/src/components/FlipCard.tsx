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
        <Card
          className="absolute inset-0 p-6 backface-hidden bg-gradient-to-br from-card to-primary/5"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col h-full">
            <Icon className="h-12 w-12 mb-4 text-primary" />
            {category && (
              <span className="text-xs text-primary mb-2" data-testid={`badge-category-${category}`}>
                {category}
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2" data-testid="text-card-title">{title}</h3>
            <p className="text-muted-foreground flex-1" data-testid="text-card-description">{description}</p>
          </div>
        </Card>

        <Card
          className="absolute inset-0 p-6 backface-hidden bg-gradient-to-br from-primary/10 to-card"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 flex-1 text-sm">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2" data-testid={`text-feature-${index}`}>
                  <span className="text-primary">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="sm" variant="default" className="mt-4" onClick={openAIChat} data-testid="button-learn-more">
              Learn More
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
