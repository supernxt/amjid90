import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Mail } from "lucide-react";
import { Link } from "wouter";

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonLabel?: string;
  buttonHref?: string;
  buttonExternal?: boolean;
}

export default function PricingCard({
  title,
  description,
  features,
  isPopular = false,
  buttonLabel = "Get a Custom Quote",
  buttonHref = "/contact",
  buttonExternal = false,
}: PricingCardProps) {
  const buttonEl = (
    <Button
      variant={isPopular ? "default" : "outline"}
      className={`w-full ${isPopular ? "bg-gradient-to-r from-primary to-rose-500" : "border-gray-300 text-gray-700"}`}
      data-testid="button-get-quote"
    >
      {buttonLabel}
    </Button>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-primary to-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
            <Star className="h-4 w-4" />
            Most Popular
          </div>
        </div>
      )}

      <div
        className={`bg-white border-2 rounded-2xl p-8 h-full shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all flex flex-col ${
          isPopular ? "border-primary" : "border-gray-200"
        }`}
        data-testid={`card-pricing-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid="text-plan-title">{title}</h3>
          <p className="text-gray-600 mb-4" data-testid="text-plan-description">{description}</p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Custom Quote</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2" data-testid={`text-feature-${index}`}>
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {buttonExternal ? (
          <a href={buttonHref} target="_blank" rel="noopener noreferrer">
            {buttonEl}
          </a>
        ) : (
          <Link href={buttonHref}>
            {buttonEl}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
