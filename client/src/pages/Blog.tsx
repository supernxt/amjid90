import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Tag, ChevronRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogPosts";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Super Next Technologies Blog",
  description: "Enterprise IT insights, AI automation guides, and technology news for UAE businesses.",
  url: "https://supernxt.com/blog",
  publisher: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
  blogPost: blogPosts.map(p => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    url: `https://supernxt.com/blog/${p.slug}`,
    datePublished: p.date,
  })),
};

export default function Blog() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? blogPosts : blogPosts.filter(p => p.category === active);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Blog | Enterprise IT Insights for UAE Businesses | SNT"
        description="Expert guides on AI automation, enterprise WiFi, structured cabling, IT AMC costs, and managed IT services for UAE businesses. Written by the team at Super Next Technologies."
        canonical="https://supernxt.com/blog"
        schema={blogSchema}
      />

      <section className="bg-gray-50 border-b border-gray-100 px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Knowledge Base</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-900">SNT Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Expert guides on AI automation, enterprise networking, structured cabling, and managed IT — written for UAE business owners and IT managers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-100 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
          {blogCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-testid={`button-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                active === cat ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              data-testid={`card-blog-${i}`}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg hover:border-primary/30 transition-all group h-full">
                  <div className={`h-2 ${post.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-white ${post.color}`}>
                        <Tag className="h-3 w-3" /> {post.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <span className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        Read <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Have a project in mind?</h2>
          <p className="text-gray-600 mb-6">Get a free technology consultation from our UAE-based engineers.</p>
          <Link href="/contact">
            <Button className="bg-primary text-white" data-testid="button-blog-footer-cta">
              Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
