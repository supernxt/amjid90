import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { ArrowRight, Clock, Tag, ChevronRight, Home } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

function renderBody(body: string) {
  return body.split("\n\n").map((block, i) => {
    if (block.startsWith("**") && block.endsWith("**") && !block.includes("\n")) {
      return <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{block.replace(/\*\*/g, "")}</h2>;
    }
    if (/^\|.+\|/.test(block)) {
      const rows = block.split("\n").filter(r => r.trim() && !/^\|[-| ]+\|$/.test(r));
      const headerRow = rows[0];
      const dataRows = rows.slice(1);
      const headerCells = headerRow.split("|").filter(Boolean).map(c => c.trim());
      return (
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {headerCells.map((cell, ci) => (
                  <th key={ci} className="px-4 py-2 text-left font-semibold text-gray-900 border border-gray-200">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, ri) => {
                const cells = row.split("|").filter(Boolean).map(c => c.trim());
                return (
                  <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {cells.map((cell, ci) => (
                      <td key={ci} className="px-4 py-2 text-gray-700 border border-gray-200">{cell}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    if (block.startsWith("1. ") || block.startsWith("- ")) {
      const items = block.split("\n").filter(Boolean);
      const isOrdered = block.startsWith("1. ");
      const El = isOrdered ? "ol" : "ul";
      return (
        <El key={i} className={`my-4 space-y-2 ${isOrdered ? "list-decimal" : "list-disc"} pl-5`}>
          {items.map((item, j) => (
            <li key={j} className="text-gray-700 text-sm leading-relaxed">
              {item.replace(/^\d+\.\s|^-\s/, "").split(/\*\*(.*?)\*\*/).map((part, k) =>
                k % 2 === 1 ? <strong key={k} className="font-semibold text-gray-900">{part}</strong> : part
              )}
            </li>
          ))}
        </El>
      );
    }
    return (
      <p key={i} className="text-gray-700 leading-relaxed mb-4">
        {block.split(/\*\*(.*?)\*\*/).map((part, j) =>
          j % 2 === 1 ? <strong key={j} className="font-semibold text-gray-900">{part}</strong> : part
        )}
      </p>
    );
  });
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <Link href="/blog"><Button variant="outline">Back to Blog</Button></Link>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://supernxt.com/blog/${post.slug}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
    publisher: {
      "@type": "Organization",
      name: "Super Next Technologies",
      logo: { "@type": "ImageObject", url: "https://supernxt.com/favicon-512.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://supernxt.com/blog/${post.slug}` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://supernxt.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://supernxt.com/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: `https://supernxt.com/blog/${post.slug}` },
      ],
    },
  };

  const others = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | SNT Blog`}
        description={post.excerpt}
        canonical={`https://supernxt.com/blog/${post.slug}`}
        schema={schema}
      />

      <div className="bg-gray-50 border-b border-gray-100 px-4 md:px-8 pt-20 pb-8">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/"><span className="hover:text-primary flex items-center gap-1"><Home className="h-3 w-3" />Home</span></Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog"><span className="hover:text-primary">Blog</span></Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gray-600 line-clamp-1">{post.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white ${post.color}`}>
              <Tag className="h-3 w-3" /> {post.category}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
            <span className="text-xs text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <div className="prose prose-gray max-w-none">
          {renderBody(post.body)}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 bg-gray-50 rounded-2xl p-6">
          <p className="text-sm font-semibold text-gray-900 mb-1">Need help with {post.category}?</p>
          <p className="text-sm text-gray-600 mb-4">Talk to our UAE-based experts — free consultation, no commitment.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact">
              <Button size="sm" className="bg-primary text-white" data-testid="button-post-cta">
                Get Free Consultation <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
            <a href="https://wa.me/971048864215" target="_blank" rel="noreferrer">
              <Button size="sm" variant="outline" data-testid="button-post-whatsapp">WhatsApp Us</Button>
            </a>
            <Link href="/free-audit">
              <Button size="sm" variant="outline" data-testid="button-post-audit">Free IT Audit</Button>
            </Link>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {others.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group" data-testid={`card-related-${p.slug}`}>
                    <div className={`w-full h-1 rounded-full mb-3 ${p.color}`} />
                    <span className="text-xs text-gray-400">{p.readTime}</span>
                    <p className="text-sm font-semibold text-gray-900 mt-1 leading-snug group-hover:text-primary transition-colors line-clamp-2">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/blog">
            <Button variant="outline" className="border-gray-300" data-testid="button-back-blog">← Back to All Articles</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
