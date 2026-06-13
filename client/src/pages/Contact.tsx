import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setStatusMsg('Message sent! We\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Network error. Please call or WhatsApp us directly.');
    }
  };

  return (
    <VideoBackground variant="default">
      <SEO
        title="Contact Super Next Technologies | Dubai, UAE"
        description="Contact Super Next Technologies in Dubai, UAE. Phone: +971-48864215. Email: hello@supernxt.com. Enterprise AI, wireless hotspot, cloud infrastructure and web development services across UAE."
        keywords="contact Super Next Technologies, Super Next Technologies Dubai, SNT UAE contact, enterprise IT services contact, AI company Dubai phone, technology company UAE email"
        canonical="https://supernxt.com/contact"
      />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gray-900">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's start building something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <a href="tel:048864215" className="flex items-start gap-4 group" data-testid="link-contact-phone">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600 group-hover:text-primary transition-colors">048864215</p>
                    </div>
                  </a>
                  <a href="mailto:hello@supernxt.com" className="flex items-start gap-4 group" data-testid="link-contact-email">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 group-hover:text-blue-600 transition-colors break-all">hello@supernxt.com</p>
                    </div>
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/4xaEugRG8vxcBmWc9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                    data-testid="link-contact-location"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600 group-hover:text-emerald-600 transition-colors">Production City Dubai UAE</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* AI Assistant Card */}
              <div className="bg-gradient-to-br from-primary/5 to-rose-500/5 rounded-3xl p-8 border border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center shadow-lg">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">AI Assistant</h3>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Have a quick question? Our AI assistant is available around the clock to help you with any inquiries.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-gray-300 focus:border-primary"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-gray-300 focus:border-primary"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <Input
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="border-gray-300 focus:border-primary"
                    data-testid="input-subject"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-gray-300 focus:border-primary resize-none"
                    required
                    data-testid="input-message"
                  />
                </div>
                
                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">{statusMsg}</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">{statusMsg}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-rose-500"
                  disabled={status === 'sending'}
                  data-testid="button-submit"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </VideoBackground>
  );
}
