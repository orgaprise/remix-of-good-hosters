import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Server,
  Cloud,
  Cpu,
  Globe,
  Zap,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Award
} from "lucide-react";

const hostingTypes = [
  {
    icon: Users,
    title: "Shared Hosting",
    description: "Perfect for beginners and small websites. Share server resources with other sites at an affordable price.",
    priceRange: "$2 - $10/mo",
    bestFor: ["Personal blogs", "Portfolio sites", "Small businesses", "Startups"],
    features: ["Easy setup", "Affordable pricing", "Managed environment", "cPanel included"],
    link: "/cloud-vs-shared-hosting",
    color: "from-blue-500 to-blue-600",
    recommended: false
  },
  {
    icon: Cpu,
    title: "VPS Hosting",
    description: "Dedicated virtual resources for growing websites. More power and control than shared hosting.",
    priceRange: "$20 - $80/mo",
    bestFor: ["Growing businesses", "E-commerce sites", "Web applications", "Medium traffic"],
    features: ["Dedicated resources", "Root access", "Scalable", "Better performance"],
    link: "/best-vps-hosting-2026",
    color: "from-accent to-brand-coral",
    recommended: true
  },
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description: "Scalable infrastructure that grows with your traffic. Pay only for what you use.",
    priceRange: "$10 - $100+/mo",
    bestFor: ["High-traffic sites", "SaaS applications", "Variable traffic", "Enterprise"],
    features: ["Auto-scaling", "High availability", "Global CDN", "Pay-as-you-go"],
    link: "/cloud-vs-shared-hosting",
    color: "from-purple-500 to-purple-600",
    recommended: false
  },
  {
    icon: Globe,
    title: "WordPress Hosting",
    description: "Optimized specifically for WordPress sites with one-click installs and automatic updates.",
    priceRange: "$3 - $50/mo",
    bestFor: ["WordPress blogs", "WooCommerce stores", "Agency sites", "Content sites"],
    features: ["One-click install", "Auto updates", "WordPress optimized", "Staging environments"],
    link: "/managed-vs-unmanaged-wordpress-hosting",
    color: "from-green-500 to-green-600",
    recommended: false
  },
  {
    icon: Server,
    title: "Dedicated Hosting",
    description: "An entire physical server dedicated to your website. Maximum performance and control.",
    priceRange: "$80 - $500+/mo",
    bestFor: ["Large enterprises", "High-traffic sites", "Resource-intensive apps", "Compliance needs"],
    features: ["Full server control", "Maximum resources", "Custom configuration", "Enhanced security"],
    link: "/best-vps-hosting-2026",
    color: "from-orange-500 to-orange-600",
    recommended: false
  },
  {
    icon: Zap,
    title: "Managed Hosting",
    description: "Let experts handle the technical details while you focus on your business.",
    priceRange: "$30 - $200+/mo",
    bestFor: ["Busy professionals", "Agencies", "Non-technical users", "Mission-critical sites"],
    features: ["Expert management", "Security included", "Performance optimization", "24/7 monitoring"],
    link: "/managed-vs-unmanaged-wordpress-hosting",
    color: "from-pink-500 to-pink-600",
    recommended: false
  }
];

const comparisonTable = [
  { feature: "Starting Price", shared: "$2/mo", vps: "$20/mo", cloud: "$10/mo", dedicated: "$80/mo" },
  { feature: "Performance", shared: "Basic", vps: "High", cloud: "High", dedicated: "Maximum" },
  { feature: "Scalability", shared: "Limited", vps: "Moderate", cloud: "Excellent", dedicated: "Manual" },
  { feature: "Control", shared: "Limited", vps: "Full", cloud: "Full", dedicated: "Complete" },
  { feature: "Best For", shared: "Beginners", vps: "Growing sites", cloud: "Variable traffic", dedicated: "Enterprise" }
];

const topProviders = [
  { name: "Hostinger", rating: 4.9, specialty: "Best Value", link: "/best-vps-hosting-2026" },
  { name: "SiteGround", rating: 4.8, specialty: "Best Support", link: "/managed-vs-unmanaged-wordpress-hosting" },
  { name: "Cloudways", rating: 4.8, specialty: "Best Cloud", link: "/cloud-vs-shared-hosting" },
  { name: "Bluehost", rating: 4.6, specialty: "Best for WordPress", link: "/managed-vs-unmanaged-wordpress-hosting" }
];

const Hosting = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Hosting", url: "/hosting" }
  ];

  const hostingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Web Hosting Types Comparison",
    "description": "Compare different types of web hosting: shared, VPS, cloud, dedicated, and managed hosting.",
    "itemListElement": hostingTypes.map((type, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": type.title,
      "description": type.description
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Web Hosting Types Compared: Shared, VPS, Cloud & More | Good Hosters"
        description="Compare web hosting types: shared, VPS, cloud, dedicated, and managed hosting. Find the perfect hosting solution for your website with our comprehensive guide."
        canonicalUrl="https://goodhosters.com/hosting"
        breadcrumbs={breadcrumbs}
      >
        <meta name="keywords" content="web hosting types, shared hosting, VPS hosting, cloud hosting, dedicated hosting, managed hosting, hosting comparison, best web hosting" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Good Hosters" />
        <script type="application/ld+json">
          {JSON.stringify(hostingSchema)}
        </script>
      </SEO>

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
          <div className="absolute bottom-20 -right-32 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center justify-center gap-2 text-sm">
                  <li>
                    <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                      Home
                    </Link>
                  </li>
                  <span className="text-muted-foreground">/</span>
                  <li className="text-foreground font-medium">Hosting</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6 animate-fade-up">
                <Server className="w-4 h-4" />
                Find Your Perfect Hosting
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Web Hosting Types
                <span className="text-gradient block mt-2">Compared & Explained</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
                From shared hosting to dedicated servers, understand the differences and find the hosting solution that matches your needs and budget.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Button variant="accent" size="xl" asChild>
                  <Link to="/hosting-finder">
                    Get Personalized Recommendation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="#compare">
                    Compare Hosting Types
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Hosting Types Grid */}
        <section className="py-20 lg:py-28" id="types">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Choose Your Hosting Type
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each hosting type serves different needs. Find the one that fits your website requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hostingTypes.map((type, index) => (
                <div 
                  key={index}
                  className={`relative group bg-card rounded-2xl p-8 border ${type.recommended ? 'border-accent shadow-lg shadow-accent/10' : 'border-border'} hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  {type.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {type.title}
                  </h3>
                  
                  <p className="text-2xl font-bold text-accent mb-3">
                    {type.priceRange}
                  </p>
                  
                  <p className="text-muted-foreground mb-4">
                    {type.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Best for:</p>
                    <div className="flex flex-wrap gap-2">
                      {type.bestFor.map((item, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant={type.recommended ? "accent" : "outline"} className="w-full rounded-full" asChild>
                    <Link to={type.link}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 lg:py-28 bg-muted/30" id="compare">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Quick Comparison
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how different hosting types stack up against each other
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-card rounded-2xl border border-border overflow-hidden">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center p-4 font-semibold text-foreground">Shared</th>
                    <th className="text-center p-4 font-semibold text-foreground bg-accent/10 border-x border-accent/20">
                      <div className="flex items-center justify-center gap-1">
                        VPS
                        <Star className="w-4 h-4 text-accent" />
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold text-foreground">Cloud</th>
                    <th className="text-center p-4 font-semibold text-foreground">Dedicated</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">{row.feature}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.shared}</td>
                      <td className="p-4 text-center text-foreground font-medium bg-accent/5 border-x border-accent/20">{row.vps}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.cloud}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.dedicated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Providers */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Editor's Picks
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Top-Rated Hosting Providers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Based on our hands-on testing and user reviews
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {topProviders.map((provider, index) => (
                <Link
                  key={index}
                  to={provider.link}
                  className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-accent/10 rounded-full text-accent text-xs font-medium mb-3">
                    {provider.specialty}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {provider.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold text-foreground">{provider.rating}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <Link to="/blog">
                  View All Reviews
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
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
                <TrendingUp className="w-4 h-4" />
                Find Your Perfect Match
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Not Sure Which Hosting
                <span className="block mt-2">Type You Need?</span>
              </h2>

              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Take our 30-second quiz and get personalized hosting recommendations based on your specific needs and budget.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="rounded-full" asChild>
                  <Link to="/hosting-finder">
                    Take the Quiz
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact">
                    Talk to an Expert
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

export default Hosting;
