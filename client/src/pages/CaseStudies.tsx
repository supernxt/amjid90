import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { openAIChat } from "@/lib/ai-assistant";
import { 
  Building2, ShoppingBag, Stethoscope, GraduationCap, 
  Hotel, TrendingUp, Users, DollarSign, ArrowRight,
  CheckCircle, Star, Award
} from "lucide-react";
import SEO from "@/components/SEO";

const caseStudies = [
  {
    icon: Building2,
    company: "Emirates Real Estate Group",
    location: "Dubai Marina, UAE",
    industry: "Real Estate",
    challenge: "Managing 500+ property listings across Dubai with outdated systems",
    solution: "Implemented AI-powered property management platform with virtual tours and automated lead qualification",
    results: [
      "65% increase in qualified leads",
      "40% reduction in response time",
      "300+ properties sold in 6 months",
      "4.8/5 client satisfaction rating"
    ],
    color: "from-blue-500 to-cyan-500",
    stats: { metric: "65%", label: "Lead Increase" }
  },
  {
    icon: ShoppingBag,
    company: "Dubai Mall Retail Chain",
    location: "Dubai Mall, UAE",
    industry: "Retail & E-Commerce",
    challenge: "Low online conversion rates and high cart abandonment",
    solution: "Developed 3D immersive shopping experience with AI chatbot for customer support",
    results: [
      "180% increase in online sales",
      "50% reduction in cart abandonment",
      "24/7 AI customer support",
      "Expanded to 15 UAE locations"
    ],
    color: "from-purple-500 to-pink-500",
    stats: { metric: "180%", label: "Sales Growth" }
  },
  {
    icon: Stethoscope,
    company: "Abu Dhabi Medical Center",
    location: "Abu Dhabi, UAE",
    industry: "Healthcare",
    challenge: "Manual appointment scheduling causing long wait times",
    solution: "Deployed AI appointment system with telemedicine integration and automated patient records",
    results: [
      "70% faster appointment booking",
      "5,000+ patients served monthly",
      "90% reduction in no-shows",
      "HIPAA compliant platform"
    ],
    color: "from-green-500 to-emerald-500",
    stats: { metric: "70%", label: "Faster Booking" }
  },
  {
    icon: Hotel,
    company: "Jumeirah Hospitality Group",
    location: "Palm Jumeirah, UAE",
    industry: "Hospitality",
    challenge: "Managing guest services across 12 luxury properties",
    solution: "Integrated AI concierge system with multilingual support and automated guest preferences",
    results: [
      "95% guest satisfaction score",
      "40% increase in repeat bookings",
      "Support for 15+ languages",
      "Reduced operational costs by 30%"
    ],
    color: "from-orange-500 to-amber-500",
    stats: { metric: "95%", label: "Satisfaction" }
  },
  {
    icon: GraduationCap,
    company: "UAE National University",
    location: "Sharjah, UAE",
    industry: "Education",
    challenge: "Remote learning platform for 15,000+ students",
    solution: "Built comprehensive LMS with AI tutoring, virtual labs, and automated grading",
    results: [
      "15,000+ students enrolled",
      "85% course completion rate",
      "AI-powered personalized learning",
      "50% reduction in grading time"
    ],
    color: "from-indigo-500 to-purple-500",
    stats: { metric: "15K+", label: "Students" }
  },
  {
    icon: Users,
    company: "Al Fahim Business Services",
    location: "Abu Dhabi, UAE",
    industry: "Enterprise Services",
    challenge: "Inefficient enterprise wireless infrastructure across 8 offices",
    solution: "Deployed enterprise-grade wireless hotspots with centralized management and security",
    results: [
      "99.9% network uptime",
      "1,000+ concurrent users",
      "Zero security breaches",
      "60% cost reduction"
    ],
    color: "from-cyan-500 to-blue-500",
    stats: { metric: "99.9%", label: "Uptime" }
  }
];

const stats = [
  { icon: Award, value: "200+", label: "Projects Delivered in UAE" },
  { icon: TrendingUp, value: "350%", label: "Average ROI" },
  { icon: Users, value: "500K+", label: "End Users Served" },
  { icon: Star, value: "4.9/5", label: "Client Satisfaction" },
];

export default function CaseStudies() {
  return (
    <VideoBackground variant="default">
      <SEO
        title="Case Studies — AI & IT Solutions UAE | Super Next Technologies"
        description="Real-world case studies from Super Next Technologies. AI automation, enterprise WiFi, cloud infrastructure and web development projects across UAE."
        keywords="AI case studies UAE, technology success stories Dubai, enterprise IT results UAE, AI automation case study, wireless hotspot project UAE, cloud infrastructure case study"
        canonical="https://supernxt.com/case-studies"
      />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Success Stories</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-6 text-gray-900">
              UAE Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming businesses across the Emirates with cutting-edge technology solutions
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50"
                data-testid={`card-stat-${index}`}
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1 text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 md:p-8 hover-elevate" data-testid={`card-case-study-${index}`}>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Column - Company Info */}
                    <div className="md:col-span-1">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${study.color} mb-4`}>
                        <study.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{study.location}</p>
                      <p className="text-sm font-medium text-primary">{study.industry}</p>
                      
                      <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <div className="text-3xl font-bold text-primary mb-1">{study.stats.metric}</div>
                        <div className="text-sm text-muted-foreground">{study.stats.label}</div>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Challenge</h4>
                        <p className="text-foreground/90">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Solution</h4>
                        <p className="text-foreground/90">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful UAE businesses that have revolutionized their operations with our solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-rose-500" onClick={() => window.location.href = "tel:048864215"} data-testid="button-call-us">
                  Call Us: 048864215
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700" onClick={openAIChat} data-testid="button-get-started">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </VideoBackground>
  );
}
