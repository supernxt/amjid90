import { useState } from "react";
import VideoBackground from "@/components/VideoBackground";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ShoppingCart, Building2, Stethoscope, GraduationCap, 
  Plane, Utensils, DollarSign, Home, Car, Briefcase,
  Code, Palette, Rocket, Smartphone, ArrowRight,
  MessageSquare, Mail, Phone, Globe
} from "lucide-react";

// Helper function to contact via email
const contactViaEmail = () => {
  window.location.href = "mailto:hello@supernxt.com?subject=Template%20Inquiry&body=Hello,%20I'm%20interested%20in%20using%20a%20template%20for%20my%20project.";
};

// Helper function to call
const contactViaCall = () => {
  window.location.href = "tel:048864215";
};

const categories = ["All", "E-Commerce", "Enterprise", "Healthcare", "Education", "Other"];

const templates = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Store",
    description: "Complete online shopping platform with payment integration",
    features: ["Product catalog", "Shopping cart", "Payment gateway", "Order tracking"],
    category: "E-Commerce",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Building2,
    title: "Corporate Website",
    description: "Professional business website with modern design",
    features: ["Company profile", "Services showcase", "Team directory", "Contact forms"],
    category: "Enterprise",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Stethoscope,
    title: "Healthcare Portal",
    description: "Patient management and appointment booking system",
    features: ["Appointment booking", "Patient records", "Prescription tracking", "Telemedicine"],
    category: "Healthcare",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: GraduationCap,
    title: "Learning Management",
    description: "Online education platform with course management",
    features: ["Course catalog", "Video lessons", "Quiz system", "Student progress"],
    category: "Education",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Plane,
    title: "Travel Booking",
    description: "Flight and hotel reservation platform",
    features: ["Search & filter", "Booking engine", "Payment integration", "Itinerary management"],
    category: "Other",
    color: "from-sky-500 to-blue-500"
  },
  {
    icon: Utensils,
    title: "Restaurant Management",
    description: "Online ordering and table reservation system",
    features: ["Menu management", "Online ordering", "Table booking", "Delivery tracking"],
    category: "Other",
    color: "from-red-500 to-rose-500"
  },
  {
    icon: DollarSign,
    title: "Financial Dashboard",
    description: "Investment and portfolio tracking platform",
    features: ["Portfolio tracking", "Market analysis", "Trading tools", "Reports & analytics"],
    category: "Enterprise",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Home,
    title: "Real Estate Portal",
    description: "Property listing and management platform",
    features: ["Property listings", "Virtual tours", "Search filters", "Agent dashboard"],
    category: "Other",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Car,
    title: "Vehicle Marketplace",
    description: "Buy and sell vehicles online platform",
    features: ["Vehicle listings", "Advanced search", "Price comparison", "Financing options"],
    category: "E-Commerce",
    color: "from-gray-500 to-slate-500"
  },
  {
    icon: Briefcase,
    title: "Job Board Portal",
    description: "Job posting and recruitment platform",
    features: ["Job listings", "Resume builder", "Application tracking", "Employer dashboard"],
    category: "Enterprise",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: MessageSquare,
    title: "Social Network",
    description: "Community and social engagement platform",
    features: ["User profiles", "Posts & feeds", "Messaging", "Groups & events"],
    category: "Other",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Globe,
    title: "SaaS Platform",
    description: "Multi-tenant software as a service application",
    features: ["User management", "Subscription billing", "API integration", "Analytics dashboard"],
    category: "Enterprise",
    color: "from-cyan-500 to-blue-500"
  }
];

const websiteFeatures = [
  { icon: Code, title: "Custom Development", desc: "Tailored solutions for your needs" },
  { icon: Palette, title: "Stunning Design", desc: "Beautiful UI/UX experiences" },
  { icon: Rocket, title: "Fast Performance", desc: "Optimized for speed" },
  { icon: Smartphone, title: "Mobile First", desc: "Responsive on all devices" },
];

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates = selectedCategory === "All" 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <VideoBackground variant="default">
      <SEO
        title="Website Templates UAE | Super Next Technologies"
        description="Professional website templates for businesses in UAE, Saudi Arabia, Qatar and Oman. E-commerce, healthcare, hospitality, education and more. Ready-to-launch designs by Super Next Technologies, Dubai."
        keywords="website templates UAE, web templates Dubai, business website templates GCC, e-commerce template Saudi Arabia, professional templates Qatar, website design Oman"
        canonical="https://supernxt.com/templates"
      />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Ready to Deploy</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-6 text-gray-900">
              Templates & Use Cases
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-deploy solutions for every industry. Choose a template and customize it to your needs.
            </p>
          </motion.div>

          {/* Website Development Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Website Development
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {websiteFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all"
                  data-testid={`card-web-feature-${index}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-rose-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-rose-500" onClick={contactViaEmail} data-testid="button-start-project">
                Start Your Project <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-16" />

          {/* Templates Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              Industry Templates
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Browse our collection of pre-built templates designed for specific industries and use cases
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Template Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className="h-full p-6 hover-elevate active-elevate-2 cursor-pointer"
                    data-testid={`card-template-${template.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${template.color}`}>
                        <template.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{template.title}</h3>
                        <p className="text-sm text-muted-foreground">{template.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {template.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="outline" 
                      className="w-full gap-2"
                      onClick={contactViaEmail}
                      data-testid={`button-use-template-${index}`}
                    >
                      Use Template <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Can't find the perfect template? Let's build something custom for your unique requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-rose-500" onClick={contactViaCall} data-testid="button-talk-expert">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700" onClick={contactViaEmail} data-testid="button-request-quote">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </VideoBackground>
  );
}
