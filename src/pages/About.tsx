import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Heart,
  CheckCircle,
  Globe,
  Shield,
  Zap,
  BookOpen,
  Star,
  TrendingUp,
  Lightbulb,
  Handshake
} from "lucide-react";

const teamValues = [
  {
    icon: Shield,
    title: "Unbiased Reviews",
    description: "We never let affiliate relationships influence our recommendations. Our reviews are based purely on performance, features, and value."
  },
  {
    icon: Zap,
    title: "Hands-On Testing",
    description: "Every hosting provider we recommend has been tested by our team. We measure real uptime, speed, and support responsiveness."
  },
  {
    icon: Heart,
    title: "User-First Approach",
    description: "Your success is our priority. We tailor recommendations to your specific needs, budget, and technical expertise."
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description: "Beyond reviews, we create comprehensive guides to help you understand hosting concepts and make informed decisions."
  }
];

const milestones = [
  { year: "2020", title: "Founded", description: "Good Hosters was born from a passion to simplify web hosting decisions." },
  { year: "2021", title: "500+ Reviews", description: "Reached our first major milestone with comprehensive provider coverage." },
  { year: "2022", title: "50K Users", description: "Helped over 50,000 users find their perfect hosting solution." },
  { year: "2023", title: "Industry Recognition", description: "Named a top resource for hosting guidance by industry publications." },
  { year: "2024", title: "Global Reach", description: "Expanded our coverage to include providers across 30+ countries." },
  { year: "2025", title: "AI-Powered Tools", description: "Launched smart recommendation engine for personalized suggestions." }
];

const stats = [
  { value: "500+", label: "Hosts Analyzed", icon: Globe },
  { value: "50K+", label: "Users Helped", icon: Users },
  { value: "99.9%", label: "Satisfaction", icon: Star },
  { value: "5+", label: "Years Experience", icon: TrendingUp }
];

const About = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Good Hosters",
      "url": "https://goodhosters.com",
      "logo": "https://goodhosters.com/android-chrome-512x512.png",
      "description": "Good Hosters is an independent web hosting advisory service providing unbiased reviews, expert recommendations, and educational resources to help users find the perfect hosting solution.",
      "foundingDate": "2020",
      "founder": {
        "@type": "Person",
        "name": "Good Hosters Team"
      },
      "areaServed": "Worldwide",
      "sameAs": [
        "https://twitter.com/goodhosters",
        "https://linkedin.com/company/goodhosters"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Good Hosters | Independent Web Hosting Advisory Since 2020"
        description="Learn about Good Hosters, your trusted independent web hosting advisory. Since 2020, we have helped 50K+ users find perfect hosting with unbiased reviews and expert guidance."
        canonicalUrl="https://goodhosters.com/about"
        breadcrumbs={breadcrumbs}
      >
        <meta name="keywords" content="about good hosters, web hosting advisory, hosting experts, unbiased hosting reviews, hosting consultants" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Good Hosters" />
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
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
                  <li className="text-foreground font-medium">About Us</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6 animate-fade-up">
                <Award className="w-4 h-4" />
                Trusted Since 2020
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Your Trusted Guide to
                <span className="text-gradient block mt-2">Web Hosting Success</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
                We are an independent team of hosting experts dedicated to helping you navigate the complex world of web hosting with confidence and clarity.
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

        {/* Mission Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Making Hosting Decisions <span className="text-gradient">Simple & Clear</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  The web hosting landscape is overwhelming. With hundreds of providers, confusing pricing, and technical jargon, finding the right host feels impossible.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  That is why we created Good Hosters. We cut through the noise with honest, thoroughly-researched reviews and personalized recommendations. No hidden agendas, no paid placements. Just straightforward advice you can trust.
                </p>
                <div className="space-y-4">
                  {[
                    "Independent reviews based on real testing",
                    "Transparent affiliate relationships disclosed",
                    "Personalized recommendations for your needs",
                    "Free educational resources and guides"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-accent/20 via-brand-coral/10 to-accent/5 rounded-3xl p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Lightbulb, label: "Expert Insights" },
                      { icon: Handshake, label: "Trusted Partner" },
                      { icon: Globe, label: "Global Coverage" },
                      { icon: Shield, label: "Unbiased Advice" }
                    ].map((item, index) => (
                      <div key={index} className="bg-card rounded-2xl p-6 text-center border border-border hover:border-accent/50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                          <item.icon className="w-6 h-6 text-accent" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-coral/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                What We Stand For
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Good Hosters
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamValues.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-brand-coral flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Our Journey
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Growing With You
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a simple idea to helping thousands find their perfect hosting solution
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-brand-coral to-accent/30 transform md:-translate-x-1/2" />
                
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className="bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-colors">
                        <span className="text-accent font-bold text-lg">{milestone.year}</span>
                        <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Circle */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background transform -translate-x-1/2 z-10" />
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
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
                <Users className="w-4 h-4" />
                Join 50K+ Happy Users
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Find Your
                <span className="block mt-2">Perfect Hosting Solution?</span>
              </h2>

              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Take our quick survey and get personalized hosting recommendations in under 30 seconds. It is completely free!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="rounded-full" asChild>
                  <Link to="/hosting-finder">
                    Get Your Recommendation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <Link to="/blog">
                    Explore Our Guides
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

export default About;
