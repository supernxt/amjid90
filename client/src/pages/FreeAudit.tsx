import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { CheckCircle, Wifi, Cable, Shield, Bot, Headphones, Download, ArrowRight, Phone, MessageSquare, Clock, Star } from "lucide-react";

const included = [
  { icon: Wifi,       title: "WiFi & Connectivity Audit",     desc: "Speed tests, dead zone mapping, access point placement review, and bandwidth bottleneck analysis." },
  { icon: Cable,      title: "Cabling & Infrastructure Check", desc: "Patch panel inspection, cable labelling, fiber condition, and future capacity planning." },
  { icon: Shield,     title: "Cyber Security Snapshot",       desc: "Firewall config review, open ports scan, weak password policies, and network segmentation gaps." },
  { icon: Bot,        title: "AI Readiness Assessment",       desc: "Which of your processes can be automated — with an estimated ROI for each opportunity." },
  { icon: Headphones, title: "IT Support & Cost Analysis",    desc: "Review of current IT spend vs. market benchmarks — identify where you're overpaying." },
];

const steps = [
  { step: "1", title: "Submit this form", desc: "Takes 60 seconds" },
  { step: "2", title: "We call you back", desc: "Within 4 business hours" },
  { step: "3", title: "Site visit scheduled", desc: "At your convenience" },
  { step: "4", title: "Written report delivered", desc: "Within 48 hours of visit" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Free IT Infrastructure Audit UAE",
  provider: { "@type": "Organization", name: "Super Next Technologies", url: "https://supernxt.com" },
  description: "Free IT infrastructure audit for UAE businesses — WiFi, network, cabling, security, and AI readiness assessment worth AED 2,500.",
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "AED" },
};

export default function FreeAudit() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", size: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) { setError("Please fill in name, email, and phone."); return; }
    setStatus("loading"); setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: "Free IT Audit Request",
          message: `Free IT Infrastructure Audit request.\n\nCompany: ${form.company || "Not provided"}\nTeam size: ${form.size || "Not provided"}\nPhone: ${form.phone}`,
        }),
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); }
      else { setStatus("error"); setError(data.error || "Something went wrong."); }
    } catch {
      setStatus("error"); setError("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free IT Infrastructure Audit UAE | Worth AED 2,500 | Super Next Technologies"
        description="Claim your free IT infrastructure audit — WiFi, network, cabling, security, and AI readiness assessment for UAE businesses. Worth AED 2,500. No commitment required."
        canonical="https://supernxt.com/free-audit"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
                <Download className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Free — Worth AED 2,500</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Free IT Infrastructure{" "}
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">Audit for Your Business</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our certified engineers visit your site, assess your entire IT setup — WiFi, networking, cabling, security, and AI readiness — and deliver a written report within 48 hours. Zero cost. Zero commitment.
              </p>

              {/* Social proof */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-amber-50 border border-amber-100 rounded-2xl">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-gray-700"><span className="font-bold">4.9/5</span> from 120+ audited businesses across UAE</p>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-2 gap-3">
                {steps.map((s) => (
                  <div key={s.step} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-200">
                    <div className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">{s.step}</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{s.title}</p>
                      <p className="text-xs text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-gray-200/50">
                {status === "success" ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">You're Booked!</h2>
                    <p className="text-gray-600 mb-6">Our team will call you within 4 business hours to schedule your free IT audit.</p>
                    <div className="flex flex-col gap-3">
                      <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
                        <Button className="w-full bg-green-500 text-white" data-testid="button-audit-success-wa">
                          <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp us directly
                        </Button>
                      </a>
                      <a href="tel:+97148864215">
                        <Button variant="outline" className="w-full border-gray-300" data-testid="button-audit-success-call">
                          <Phone className="mr-2 h-4 w-4" /> Call +971 4 886 4215
                        </Button>
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Claim Your Free Audit</h2>
                    <p className="text-sm text-gray-500 mb-6">For UAE businesses only. Our engineer contacts you within 4 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Full Name *</label>
                          <input
                            type="text"
                            placeholder="Your name"
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                            data-testid="input-audit-name"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Phone / WhatsApp *</label>
                          <input
                            type="tel"
                            placeholder="+971 50 000 0000"
                            value={form.phone}
                            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                            data-testid="input-audit-phone"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Business Email *</label>
                        <input
                          type="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          data-testid="input-audit-email"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Company Name</label>
                        <input
                          type="text"
                          placeholder="Your company"
                          value={form.company}
                          onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          data-testid="input-audit-company"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Team / Office Size</label>
                        <select
                          value={form.size}
                          onChange={e => setForm(f => ({ ...f, size: e.target.value }))}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white text-gray-700"
                          data-testid="select-audit-size"
                        >
                          <option value="">Select size</option>
                          <option value="1-10">1–10 staff</option>
                          <option value="11-50">11–50 staff</option>
                          <option value="51-200">51–200 staff</option>
                          <option value="200+">200+ staff</option>
                        </select>
                      </div>

                      {error && <p className="text-sm text-red-500">{error}</p>}

                      <Button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-gradient-to-r from-primary to-rose-500 text-white py-3 text-base font-semibold"
                        data-testid="button-audit-submit"
                      >
                        {status === "loading" ? "Submitting..." : (
                          <><Download className="mr-2 h-4 w-4" /> Claim My Free IT Audit</>
                        )}
                      </Button>

                      <p className="text-xs text-gray-400 text-center">
                        <Clock className="h-3 w-3 inline mr-1" />
                        We respond within 4 business hours. No spam. No obligation.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What's Included in Your Free Audit</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A certified SNT engineer conducts a full assessment of your IT environment — covering all 6 areas below.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 px-4 md:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Prefer to talk first?</h2>
          <p className="text-gray-600 mb-6">Call or WhatsApp us directly — our team is available 9am–7pm GST, Monday to Saturday.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="tel:+97148864215">
              <Button className="bg-primary text-white" data-testid="button-audit-cta-call">
                <Phone className="mr-2 h-4 w-4" /> Call +971 4 886 4215
              </Button>
            </a>
            <a href="https://wa.me/97148864215" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gray-300 bg-white" data-testid="button-audit-cta-wa">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
