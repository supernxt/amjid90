import Background3D from "@/components/Background3D";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <Background3D variant="default">
      <div className="pt-36 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
              Let's start building something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:048864215" className="text-foreground/70 hover:text-primary transition-colors">
                        048864215
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:hello@supernxt.com" className="text-foreground/70 hover:text-primary transition-colors break-all">
                        hello@supernxt.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <a 
                        href="https://maps.app.goo.gl/4xaEugRG8vxcBmWc9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        Production City Dubai UAE
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-primary/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2347827815724!2d55.16928!3d25.0470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d4f9d3e3e3d%3A0x4f4f4f4f4f4f4f4f!2sProduction%20City%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Super Next Technologies Location"
                    data-testid="iframe-map"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 lg:p-8"
            >
              <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" data-testid="input-name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" data-testid="input-email" />
                </div>
                <div>
                  <Input placeholder="Subject" data-testid="input-subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={8} data-testid="input-message" />
                </div>
                <Button size="lg" className="w-full gap-2" data-testid="button-send">
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </Background3D>
  );
}
