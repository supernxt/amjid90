import Background3D from "@/components/Background3D";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { openAIChat } from "@/lib/ai-assistant";
import { 
  Users, Globe, Lightbulb, Heart, 
  Award, TrendingUp, Target, Building2,
  CheckCircle, ArrowRight, MapPin, Phone
} from "lucide-react";

const coreValues = [
  { 
    icon: Users, 
    title: "Expert Team", 
    desc: "100+ technology specialists",
    detail: "Certified engineers, designers, and consultants based in UAE"
  },
  { 
    icon: Globe, 
    title: "Global Reach", 
    desc: "Serving 50+ countries",
    detail: "Headquartered in Dubai with clients across the GCC and beyond"
  },
  { 
    icon: Lightbulb, 
    title: "Innovation First", 
    desc: "Cutting-edge solutions",
    detail: "Leading AI, cloud, and infrastructure innovation in the region"
  },
  { 
    icon: Heart, 
    title: "Client Focused", 
    desc: "Your success is our mission",
    detail: "Dedicated to delivering measurable results and long-term partnerships"
  },
];

const milestones = [
  {
    year: "2018",
    title: "Founded in Dubai",
    description: "Established Super Next Technologies in Production City, Dubai with a vision to transform businesses through technology"
  },
  {
    year: "2020",
    title: "GCC Expansion",
    description: "Expanded operations across UAE, Saudi Arabia, Qatar, and Bahrain, serving 100+ enterprise clients"
  },
  {
    year: "2022",
    title: "AI Innovation Hub",
    description: "Launched dedicated AI research center, becoming a leading AI solutions provider in the Middle East"
  },
  {
    year: "2024",
    title: "Global Recognition",
    description: "Awarded 'Best Technology Solutions Provider UAE' and serving 500+ clients across 50+ countries"
  },
];

const achievements = [
  { icon: Award, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "100+", label: "Expert Team Members" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: TrendingUp, value: "350%", label: "Average Client ROI" },
];

const expertise = [
  {
    icon: Lightbulb,
    title: "AI & Automation",
    points: ["Custom AI Agents", "Process Automation", "Intelligent Analytics", "Machine Learning Models"]
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    points: ["Cloud Infrastructure", "Wireless Networks", "Security Systems", "IT Consulting"]
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    points: ["Website Development", "E-Commerce Platforms", "Mobile Applications", "Custom Software"]
  },
  {
    icon: Target,
    title: "Business Growth",
    points: ["Market Strategy", "Tech Implementation", "Performance Optimization", "24/7 Support"]
  },
];

export default function About() {
  return (
    <Background3D variant="default">
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering technology solutions that empower businesses globally
            </p>
          </motion.div>

          {/* Core Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate" data-testid={`card-value-${index}`}>
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground mb-3">{value.desc}</p>
                  <p className="text-sm text-foreground/70">{value.detail}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Our Story
              </h2>
              <div className="max-w-4xl mx-auto space-y-4 text-lg text-foreground/80">
                <p>
                  Founded in 2018 in the heart of Dubai's Production City, Super Next Technologies was born from a vision to revolutionize how businesses leverage technology. What started as a small team of passionate engineers has grown into a leading technology solutions provider serving clients across the UAE and beyond.
                </p>
                <p>
                  Today, we're proud to be at the forefront of AI innovation, enterprise infrastructure, and digital transformation in the Middle East. Our team of 100+ specialists combines deep technical expertise with a genuine commitment to client success, delivering solutions that drive real business results.
                </p>
                <p>
                  From AI-powered automation to enterprise wireless networks and custom web development, we've helped over 500 businesses transform their operations and achieve an average ROI of 350%. Our success is measured by the success of our clients.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover-elevate" data-testid={`card-achievement-${index}`}>
                    <achievement.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Our Journey
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="p-6 hover-elevate" data-testid={`card-milestone-${index}`}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="text-2xl font-bold text-primary bg-primary/10 rounded-lg px-3 py-2 border border-primary/20">
                          {milestone.year}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              What We Do Best
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover-elevate" data-testid={`card-expertise-${index}`}>
                    <area.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-4">{area.title}</h3>
                    <ul className="space-y-2">
                      {area.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Location & Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of successful businesses that have partnered with us for their digital transformation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Production City, Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>048864215</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={openAIChat} data-testid="button-get-started">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = "/contact"} data-testid="button-contact-us">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Background3D>
  );
}
