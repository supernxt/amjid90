import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import EnterprisePromo from "@/components/EnterprisePromo";
import { toolsConfig, toolsHubMeta } from "@/data/toolsConfig";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Network Tools by SuperNXT",
  description: toolsHubMeta.description,
  url: "https://supernxt.com/tools/",
  publisher: { "@id": "https://supernxt.com/#organization" },
  hasPart: toolsConfig.map((t) => ({
    "@type": "WebPage",
    name: t.h1,
    url: `https://supernxt.com/tools/${t.slug}/`,
    description: t.metaDescription,
  })),
};

export default function ToolsHub() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={toolsHubMeta.title}
        description={toolsHubMeta.description}
        keywords="free network tools UAE, internet speed test, DNS benchmark, ping test, network diagnostics Dubai"
        canonical="https://supernxt.com/tools/"
        schema={hubSchema}
      />

      {/* Hero */}
      <section className="bg-gray-900 pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/"><span className="hover:text-gray-300 cursor-pointer">Home</span></Link>
            <span>/</span>
            <span className="text-gray-300">Network Tools</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-4">
              Free · Browser-Based · No Install
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Free Network Tools by SuperNXT
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Professional-grade network diagnostics for UAE and GCC businesses. Test speed, DNS, latency, and more — straight from your browser.
            </p>
            <a href="/analyzer/" data-testid="button-launch-analyzer">
              <Button
                size="lg"
                className="bg-primary hover:opacity-90 text-white font-bold px-8"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Launch Super Network Analyzer
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-4 md:px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All Network Diagnostic Tools</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {toolsConfig.map((tool, i) => (
            <motion.div
              key={tool.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/tools/${tool.slug}/`}>
                <div
                  className="group h-full bg-white border border-gray-200 rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all cursor-pointer"
                  data-testid={`card-tool-${tool.slug}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-3xl" aria-hidden="true">{tool.icon}</span>
                    {tool.isLive ? (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold border border-gray-200">
                        Desktop
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {tool.h1}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{tool.tagline}</p>
                  <div className="mt-3 flex items-center text-primary text-xs font-semibold group-hover:gap-2 gap-1 transition-all">
                    View details <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <EnterprisePromo />
      </section>
    </div>
  );
}
