import Background3D from "@/components/Background3D";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Database, Share2, Lock, UserCheck, FileText, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <Background3D variant="default">
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-6" data-testid="button-back-home">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 2025
              </p>
            </div>

            <Card className="p-8 md:p-12 space-y-8">
              <section>
                <p className="text-foreground/80 leading-relaxed">
                  Super Next Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
                </p>
              </section>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Database className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold">Data We Collect</h2>
                </div>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary font-bold">•</span>
                    <span>Contact details you provide (e.g., name, email)</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary font-bold">•</span>
                    <span>Usage data for diagnostics and analytics</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary font-bold">•</span>
                    <span>Payment and transaction details (if applicable)</span>
                  </li>
                </ul>
              </section>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold">How We Use Your Data</h2>
                </div>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary font-bold">•</span>
                    <span>To provide and improve our services</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary font-bold">•</span>
                    <span>To communicate with you about your account or support issues</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary font-bold">•</span>
                    <span>To comply with legal obligations</span>
                  </li>
                </ul>
              </section>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Share2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold">Sharing of Data</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  We do not sell or rent your personal information. We may share data with trusted third-party providers solely for the purpose of operating the application.
                </p>
              </section>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Lock className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold">Security</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  We implement industry-standard measures to protect your information from unauthorized access, disclosure, alteration, and destruction.
                </p>
              </section>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <UserCheck className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold">User Rights</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  You may request access to your data, corrections, or deletion at any time by contacting us. We will respond to your request within a reasonable timeframe in accordance with applicable data protection laws.
                </p>
              </section>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold">Changes to This Policy</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. Continued use of the application after changes means you accept the new terms. We will notify you of any material changes by posting a notice on our website.
                </p>
              </section>

              <section className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  For questions about this Privacy Policy, contact us at:
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <a 
                    href="mailto:support@supernxt.com" 
                    className="text-primary hover:underline font-medium"
                    data-testid="link-support-email"
                  >
                    support@supernxt.com
                  </a>
                </div>
              </section>
            </Card>

            <div className="text-center mt-8">
              <Link href="/legal/eula">
                <Button variant="outline" data-testid="button-view-eula">
                  View End-User License Agreement
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Background3D>
  );
}
