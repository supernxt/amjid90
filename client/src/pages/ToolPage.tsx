import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { toolsConfig } from "@/data/toolsConfig";
import EnterprisePromo from "@/components/EnterprisePromo";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";
import NotFoundPage from "@/pages/NotFoundPage";

interface Props {
  params: { slug: string };
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-4 text-left text-gray-900 font-semibold text-sm hover:text-primary transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {q}
        <ChevronDown
          className={`h-4 w-4 shrink-0 ml-3 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-4" : "max-h-0"}`}>
        <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function ToolPage({ params }: Props) {
  const slug = params?.slug;
  const tool = toolsConfig.find((t) => t.slug === slug);

  if (!tool) return <NotFoundPage />;

  const canonicalUrl = `https://supernxt.com/tools/${tool.slug}/`;
  const relatedTools = toolsConfig.filter((t) => tool.relatedSlugs.includes(t.slug));

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.h1,
      description: tool.metaDescription,
      url: tool.isLive ? "https://supernxt.com/analyzer/" : canonicalUrl,
      applicationCategory: "NetworkingApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      provider: { "@id": "https://supernxt.com/#organization" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tool.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://supernxt.com/" },
        { "@type": "ListItem", position: 2, name: "Network Tools", item: "https://supernxt.com/tools/" },
        { "@type": "ListItem", position: 3, name: tool.h1, item: canonicalUrl },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={tool.title}
        description={tool.metaDescription}
        keywords={tool.keywords}
        canonical={canonicalUrl}
        schema={schemas}
      />

      {/* Hero */}
      <section className="bg-gray-900 pt-28 pb-14 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/"><span className="hover:text-gray-300 cursor-pointer">Home</span></Link>
            <span>/</span>
            <Link href="/tools/"><span className="hover:text-gray-300 cursor-pointer">Network Tools</span></Link>
            <span>/</span>
            <span className="text-gray-300 truncate">{tool.h1}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl" aria-hidden="true">{tool.icon}</span>
              {tool.isLive ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  Live in Analyzer
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-700 text-gray-400 text-xs font-bold tracking-wider uppercase border border-gray-600">
                  Desktop Suite
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{tool.h1}</h1>
            <p className="text-gray-400 text-lg max-w-2xl mb-8">{tool.tagline}</p>

            {tool.isLive ? (
              <a href="/analyzer/" data-testid={`button-launch-tool-${tool.slug}`}>
                <Button size="lg" className="bg-primary hover:opacity-90 text-white font-bold px-8">
                  <ExternalLink className="mr-2 h-5 w-5" /> Launch Tool
                </Button>
              </a>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/analyzer/" data-testid={`button-launch-web-${tool.slug}`}>
                  <Button size="lg" className="bg-primary hover:opacity-90 text-white font-bold px-8">
                    <ExternalLink className="mr-2 h-5 w-5" /> Launch Web Analyzer
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white" data-testid={`button-contact-desktop-${tool.slug}`}>
                    Contact Us for Desktop Suite <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
            {!tool.isLive && (
              <p className="mt-3 text-xs text-gray-500">
                Full {tool.h1} is available in the SuperNXT desktop suite.{" "}
                <Link href="/contact"><span className="text-primary underline cursor-pointer hover:text-primary/80">Contact us</span></Link>{" "}
                for access.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 md:px-8 py-14 max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-6">About {tool.h1}</h2>
            <div className="space-y-4">
              {tool.content.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-[15px]">{para}</p>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
              <div className="mt-4">
                {tool.faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="bg-gray-900 rounded-xl p-5 text-white">
              <p className="text-xs font-bold tracking-wider uppercase text-primary mb-2">Free Tool</p>
              <p className="font-bold text-base mb-3">{tool.h1}</p>
              <p className="text-gray-400 text-xs mb-4">{tool.tagline}</p>
              <a href="/analyzer/">
                <Button size="sm" className="w-full bg-primary hover:opacity-90 text-white font-bold">
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  {tool.isLive ? "Launch Tool" : "Open Web Analyzer"}
                </Button>
              </a>
            </div>

            {relatedTools.length > 0 && (
              <div className="border border-gray-200 rounded-xl p-5">
                <p className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-3">Related Tools</p>
                <div className="space-y-2">
                  {relatedTools.map((rt) => (
                    <Link key={rt.slug} href={`/tools/${rt.slug}/`}>
                      <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary cursor-pointer py-1 transition-colors" data-testid={`link-related-tool-${rt.slug}`}>
                        <span aria-hidden="true">{rt.icon}</span>
                        {rt.h1}
                        <ArrowRight className="h-3 w-3 ml-auto shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link href="/tools/">
              <div className="flex items-center gap-2 text-sm text-primary font-semibold cursor-pointer hover:underline" data-testid="link-all-tools">
                <ArrowRight className="h-4 w-4" /> All Network Tools
              </div>
            </Link>
          </aside>
        </div>

        <EnterprisePromo />
      </section>
    </div>
  );
}
