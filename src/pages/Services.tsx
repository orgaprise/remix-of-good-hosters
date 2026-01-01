import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  BarChart3,
  Shield,
  Zap,
  HeadphonesIcon,
  RefreshCcw,
  Globe,
  Server,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  Target,
  Lightbulb
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Hosting Analysis",
    description: "Comprehensive analysis of your current hosting setup to identify performance bottlenecks, security vulnerabilities, and cost optimization opportunities.",
    features: [
      "Full infrastructure audit",
      "Performance benchmarking",
      "Security assessment",
      "Cost analysis report"
    ],
    color: "from-accent to-accent/70"
  },
  {
    icon: BarChart3,
    title: "Expert Reviews",
    description: "In-depth, unbiased reviews of top web hosting providers based on real-world testing, helping you make informed decisions.",
    features: [
      "Hands-on testing",
      "Performance metrics",
      "Feature comparisons",
      "Pricing analysis"
    ],
    color: "from-violet-light to-violet-light/70"
  },
  {
    icon: RefreshCcw,
    title: "Migration Support",
    description: "Seamless website migration assistance ensuring zero downtime when switching hosts. We handle the technical complexity for you.",
    features: [
      "Zero-downtime migration",
      "DNS management",
      "Database transfer",
      "Post-migration testing"
    ],
    color: "from-brand-coral to-brand-coral/70"
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description: "Boost your website's performance with our speed optimization strategies. Faster sites mean better user experience and higher rankings.",
    features: [
      "Cache configuration",
      "Image optimization",
      "CDN setup",
      "Core Web Vitals tuning"
    ],
    color: "from-yellow-500 to-yellow-500/70"
  },
  {
    icon: Shield,
    title: "Security Hardening",
    description: "Protect your website with enterprise-grade security measures. We implement best practices to keep your data and visitors safe.",
    features: [
      "SSL configuration",
      "Firewall setup",
      "Malware scanning",
      "Security monitoring"
    ],
    color: "from-green-500 to-green-500/70"
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Continuous support and monitoring to ensure your hosting environment runs smoothly 24/7. We're here when you need us.",
    features: [
      "24/7 monitoring",
      "Priority support",
      "Regular maintenance",
      "Performance reports"
    ],
    color: "from-blue-500 to-blue-500/70"
  }
];

const stats = [
  { value: "500+", label: "Hosts Analyzed", icon: Server },
  { value: "50K+", label: "Users Helped", icon: Users },
  { value: "99.9%", label: "Satisfaction Rate", icon: Star },
  { value: "24/7", label: "Expert Support", icon: Clock }
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your specific needs, current challenges, and goals for your web presence.",
    icon: Target
  },
  {
    step: "02",
    title: "Analysis",
    description: "Our experts analyze your requirements and research the best solutions tailored to your situation.",
    icon: Search
  },
  {
    step: "03",
    title: "Recommendation",
    description: "We provide detailed, actionable recommendations with clear reasoning and comparisons.",
    icon: Lightbulb
  },
  {
    step: "04",
    title: "Implementation",
    description: "We guide you through implementation or handle it entirely, ensuring a smooth transition.",
    icon: Zap
  }
];

const Services = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Services | Expert Web Hosting Advisory | Good Hosters"
        description="Professional web hosting services including hosting analysis, migration support, speed optimization, security hardening, and expert consulting. Get personalized recommendations today."
        canonicalUrl="https://goodhosters.com/services"
        breadcrumbs={breadcrumbs}
      />

      <TopBar />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-accent/5 py-20 lg:py-28">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent) / 0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 -right-32 w-96 h-96 bg-violet-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6 animate-fade-up">
                <Globe className="w-4 h-4" />
                Professional Hosting Services
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Expert Hosting
                <span className="text-gradient block mt-2">Solutions & Support</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
                From hosting analysis to migration support, we provide comprehensive services to ensure your website performs at its best.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Button variant="accent" size="xl" asChild>
                  <Link to="/hosting-finder">
                    Find Your Perfect Host
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-3">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive hosting services designed to help your website succeed
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven approach to finding and implementing the perfect hosting solution
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                  )}
                  
                  <div className="bg-card rounded-2xl p-6 border border-border relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-4xl font-bold text-accent/20">{item.step}</span>
                    </div>
                    
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-brand-coral to-accent" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Get Started Today
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Optimize Your
                <span className="block mt-2">Hosting Experience?</span>
              </h2>

              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Take our quick survey and get personalized hosting recommendations, or contact our team for a detailed consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="rounded-full" asChild>
                  <Link to="/hosting-finder">
                    Find Your Host
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;