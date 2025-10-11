import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  hasOffer?: boolean;
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  hasOffer = false,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="h-4 w-4" />
            Most Popular
          </div>
        </div>
      )}
      
      <Card
        className={`p-8 h-full hover-elevate active-elevate-2 ${
          isPopular ? "border-primary border-2" : ""
        }`}
        data-testid={`card-pricing-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2" data-testid="text-plan-title">{title}</h3>
          <p className="text-muted-foreground mb-4" data-testid="text-plan-description">{description}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold" data-testid="text-plan-price">{price}</span>
            <span className="text-muted-foreground" data-testid="text-plan-period">/ {period}</span>
          </div>
          {hasOffer && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              🎁 Free Domain + Hosting
            </div>
          )}
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2" data-testid={`text-feature-${index}`}>
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={isPopular ? "default" : "outline"}
          className="w-full"
          data-testid="button-select-plan"
        >
          Get Started
        </Button>
      </Card>
    </motion.div>
  );
}
