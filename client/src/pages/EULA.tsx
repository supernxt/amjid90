import Background3D from "@/components/Background3D";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Shield, AlertCircle, Scale, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function EULA() {
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
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                End-User License Agreement
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 2025
              </p>
            </div>

            <Card className="p-8 md:p-12 space-y-8">
              <section>
                <p className="text-foreground/80 leading-relaxed">
                  This End-User License Agreement ("Agreement") is a legal agreement between you and Super Next Technologies. By using our application, you agree to be bound by the terms of this Agreement. If you do not agree, do not install or use the application.
                </p>
              </section>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold">License Grant</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Super Next Technologies grants you a revocable, non-exclusive, non-transferable, limited license to use the application in accordance with the terms of this Agreement.
                </p>
              </section>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold">Restrictions</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary font-bold">•</span>
                    <span>Modify, reverse-engineer, or decompile the application</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary font-bold">•</span>
                    <span>Use the application in any way that violates any applicable law or regulation</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary font-bold">•</span>
                    <span>Resell or sublicense the application to third parties</span>
                  </li>
                </ul>
              </section>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold">Updates and Maintenance</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Super Next Technologies may provide updates, bug fixes, and enhancements. Such updates are subject to the same terms as this Agreement.
                </p>
              </section>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Scale className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold">Termination</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  This Agreement is effective until terminated. Your rights under this Agreement will terminate automatically without notice if you fail to comply with any term.
                </p>
              </section>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  In no event shall Super Next Technologies be liable for any incidental, special, indirect or consequential damages arising out of the use or inability to use the application.
                </p>
              </section>

              <section className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  For questions about this Agreement, contact us at:
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
              <Link href="/legal/privacy">
                <Button variant="outline" data-testid="button-view-privacy">
                  View Privacy Policy
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Background3D>
  );
}
