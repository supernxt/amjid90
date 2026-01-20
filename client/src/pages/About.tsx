import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
    detail: "Certified engineers, designers, and consultants based in UAE",
    color: "bg-primary"
  },
  { 
    icon: Globe, 
    title: "Global Reach", 
    desc: "Serving 50+ countries",
    detail: "Headquartered in Dubai with clients across the GCC and beyond",
    color: "bg-blue-500"
  },
  { 
    icon: Lightbulb, 
    title: "Innovation First", 
    desc: "Cutting-edge solutions",
    detail: "Leading AI, cloud, and infrastructure innovation in the region",
    color: "bg-amber-500"
  },
  { 
    icon: Heart, 
    title: "Client Focused", 
    desc: "Your success is our mission",
    detail: "Dedicated to delivering measurable results and long-term partnerships",
    color: "bg-emerald-500"
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
  { icon: Award, value: "500+", label: "Projects Completed", color: "text-primary" },
  { icon: Users, value: "100+", label: "Expert Team Members", color: "text-blue-600" },
  { icon: Globe, value: "50+", label: "Countries Served", color: "text-emerald-600" },
  { icon: TrendingUp, value: "350%", label: "Average Client ROI", color: "text-violet-600" },
];

const expertise = [
  {
    icon: Lightbulb,
    title: "AI & Automation",
    points: ["Custom AI Agents", "Process Automation", "Intelligent Analytics", "Machine Learning Models"],
    color: "bg-primary"
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    points: ["Cloud Infrastructure", "Wireless Networks", "Security Systems", "IT Consulting"],
    color: "bg-blue-500"
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    points: ["Website Development", "E-Commerce Platforms", "Mobile Applications", "Custom Software"],
    color: "bg-emerald-500"
  },
  {
    icon: Target,
    title: "Business Growth",
    points: ["Market Strategy", "Tech Implementation", "Performance Optimization", "24/7 Support"],
    color: "bg-violet-500"
  },
];

export default function About() {
  return (
    <VideoBackground variant="default">
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Company</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-6 text-gray-900">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all" data-testid={`card-value-${index}`}>
                  <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 mb-3">{value.desc}</p>
                  <p className="text-sm text-gray-500">{value.detail}</p>
                </div>
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
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
                Our Story
              </h2>
              <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-600">
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
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
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50" data-testid={`card-achievement-${index}`}>
                    <achievement.icon className={`h-10 w-10 ${achievement.color} mx-auto mb-3`} />
                    <div className={`text-3xl md:text-4xl font-bold ${achievement.color} mb-2`}>
                      {achievement.value}
                    </div>
                    <div className="text-sm text-gray-500">{achievement.label}</div>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
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
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg shadow-gray-200/50" data-testid={`card-milestone-${index}`}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="text-2xl font-bold text-primary bg-primary/10 rounded-lg px-3 py-2 border border-primary/20">
                          {milestone.year}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
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
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full shadow-lg shadow-gray-200/50" data-testid={`card-expertise-${index}`}>
                    <div className={`w-10 h-10 ${area.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                      <area.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{area.title}</h3>
                    <ul className="space-y-2">
                      {area.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Join hundreds of successful businesses that have partnered with us for their digital transformation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Production City, Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>048864215</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-rose-500" onClick={openAIChat} data-testid="button-get-started">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700" onClick={() => window.location.href = "mailto:hello@supernxt.com?subject=Contact%20Request&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."} data-testid="button-contact-us">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </VideoBackground>
  );
}
