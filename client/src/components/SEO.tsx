import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schema?: object | object[];
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://supernxt.com/og-image.png",
  schema,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProp = false) => {
      const attr = isProp ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:image", ogImage, true);
    setMeta("twitter:title", ogTitle || title, true);
    setMeta("twitter:description", ogDescription || description, true);
    setMeta("twitter:image", ogImage, true);

    const canonicalUrl = canonical || `https://supernxt.com${window.location.pathname}`;
    setLink("canonical", canonicalUrl);

    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      const existing = document.querySelectorAll('script[type="application/ld+json"][data-page]');
      existing.forEach((s) => s.remove());
      schemas.forEach((s, i) => {
        const el = document.createElement("script");
        el.type = "application/ld+json";
        el.setAttribute("data-page", String(i));
        el.textContent = JSON.stringify(s);
        document.head.appendChild(el);
      });
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, schema]);

  return null;
}
