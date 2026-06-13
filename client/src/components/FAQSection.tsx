import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  ctaText?: string;
  ctaLink?: string;
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  ctaText = "Get Free Consultation",
  ctaLink = "/contact",
}: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
          {subtitle && <p className="text-gray-500 max-w-xl mx-auto">{subtitle}</p>}
        </div>

        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                data-testid={`faq-question-${i}`}
              >
                <span className={`font-semibold text-sm md:text-base pr-4 transition-colors ${open === i ? "text-primary" : "text-gray-900 group-hover:text-primary"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180 text-primary" : "text-gray-400"}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Still have questions? Our UAE-based team is ready to help.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href={ctaLink}>
              <Button className="bg-primary text-white" data-testid="button-faq-cta">
                {ctaText}
              </Button>
            </Link>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300" data-testid="button-faq-whatsapp">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
