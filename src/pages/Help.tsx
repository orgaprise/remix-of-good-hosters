import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  HelpCircle,
  MessageCircle,
  Mail,
  BookOpen,
  Search,
  Server,
  Shield,
  Zap,
  CreditCard,
  RefreshCw,
  Globe,
  FileText,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const helpCategories = [
  {
    icon: Server,
    title: "Getting Started",
    description: "New to web hosting? Start here for the basics.",
    link: "/blog",
    articles: ["What is web hosting?", "How to choose a host", "Domain basics"]
  },
  {
    icon: Search,
    title: "Finding the Right Host",
    description: "Tools and guides to find your perfect hosting match.",
    link: "/hosting-finder",
    articles: ["Use our hosting finder", "Compare providers", "Read reviews"]
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimize your website speed and performance.",
    link: "/website-speed-optimization-guide",
    articles: ["Speed optimization", "CDN setup", "Caching strategies"]
  },
  {
    icon: Shield,
    title: "Security",
    description: "Protect your website and data from threats.",
    link: "/web-hosting-security-guide",
    articles: ["SSL certificates", "Backup strategies", "Security hardening"]
  },
  {
    icon: RefreshCw,
    title: "Migration",
    description: "Moving your website to a new hosting provider.",
    link: "/contact",
    articles: ["Migration checklist", "Zero-downtime migration", "DNS transfer"]
  },
  {
    icon: CreditCard,
    title: "Pricing & Plans",
    description: "Understanding hosting costs and value.",
    link: "/cloud-vs-shared-hosting",
    articles: ["Shared vs VPS pricing", "Hidden fees to avoid", "Best value hosts"]
  }
];

const faqs = [
  {
    question: "How do I know which hosting type is right for me?",
    answer: "The best hosting type depends on your website's needs. For personal blogs or small sites, shared hosting is usually sufficient and affordable. Growing businesses should consider VPS hosting for better performance. High-traffic sites or applications need dedicated or cloud hosting. Use our Hosting Finder tool for personalized recommendations based on your specific requirements."
  },
  {
    question: "Are your reviews really unbiased?",
    answer: "Yes, absolutely. While we do earn affiliate commissions from some providers, this never influences our ratings or recommendations. We test every host ourselves, measuring real uptime, speed, and support quality. We clearly disclose all affiliate relationships on our Disclosure page. Our reputation depends on honest recommendations."
  },
  {
    question: "How often do you update your reviews?",
    answer: "We continuously monitor hosting providers and update our reviews at least quarterly. Major changes like price updates, feature additions, or service issues are reflected immediately. Our team also re-tests top providers annually to ensure our recommendations remain accurate."
  },
  {
    question: "Can you help me migrate my website?",
    answer: "While we don't offer hands-on migration services, we provide comprehensive migration guides and can recommend hosts that offer free migration assistance. Many top providers include professional migration as part of their onboarding. Contact us for specific migration advice for your situation."
  },
  {
    question: "What if I choose a host and I'm not happy?",
    answer: "Most reputable hosts offer 30-day money-back guarantees, so you can try them risk-free. If you're unhappy after the guarantee period, we can help you evaluate alternatives and plan a migration. Always check the refund policy before signing up."
  },
  {
    question: "Do you offer personal consultations?",
    answer: "Yes! For complex hosting needs or enterprise requirements, we offer personalized consultations. Contact us through our Contact page to discuss your specific situation. We'll analyze your needs and provide tailored recommendations."
  },
  {
    question: "How do I contact Good Hosters for support?",
    answer: "You can reach us through our Contact page, email us at support@goodhosters.com, or use the contact form. We typically respond within 24 hours on business days. For urgent matters, email is the fastest way to reach our team."
  },
  {
    question: "Is your content free to access?",
    answer: "Yes, all our reviews, guides, and tools are completely free. We're funded through affiliate partnerships with hosting providers, which allows us to offer unbiased advice at no cost to you. You never pay extra when using our affiliate links."
  }
];

const quickLinks = [
  { icon: BookOpen, label: "Blog & Guides", href: "/blog", description: "In-depth articles and tutorials" },
  { icon: Search, label: "Hosting Finder", href: "/hosting-finder", description: "Get personalized recommendations" },
  { icon: MessageCircle, label: "Contact Us", href: "/contact", description: "Reach our support team" },
  { icon: FileText, label: "Disclosure", href: "/disclosure", description: "Our affiliate relationships" }
];

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Help Center", url: "/help" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Help Center | Good Hosters Support & Resources"
        description="Get help with web hosting decisions. Find answers to common questions, explore our guides, or contact our expert team for personalized support."
        canonicalUrl="https://goodhosters.com/help"
        breadcrumbs={breadcrumbs}
      >
        <meta name="keywords" content="web hosting help, hosting support, hosting FAQ, hosting questions, Good Hosters support" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Good Hosters" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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
            <div className="max-w-3xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center justify-center gap-2 text-sm">
                  <li>
                    <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                      Home
                    </Link>
                  </li>
                  <span className="text-muted-foreground">/</span>
                  <li className="text-foreground font-medium">Help Center</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6 animate-fade-up">
                <HelpCircle className="w-4 h-4" />
                We are Here to Help
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Help <span className="text-gradient">Center</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Find answers, explore guides, and get the support you need to make confident hosting decisions.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-base rounded-full border-border bg-card shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="group bg-card rounded-xl p-5 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <link.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{link.label}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{link.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Browse by Topic
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our resources organized by common hosting topics
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <Link
                  key={index}
                  to={category.link}
                  className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-brand-coral flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {category.articles.map((article, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                        {article}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-1 text-accent font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Quick answers to common questions about our services
                </p>
              </div>

              {filteredFaqs.length === 0 ? (
                <div className="text-center py-12 bg-card rounded-2xl border border-border">
                  <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                  <Button variant="link" onClick={() => setSearchQuery("")} className="mt-2">
                    Clear search
                  </Button>
                </div>
              ) : (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-accent/50 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-brand-coral to-accent" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4" />
                Still Need Help?
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Cannot Find What You Are
                <span className="block mt-2">Looking For?</span>
              </h2>

              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Our team is ready to help with your specific hosting questions. Reach out and we will get back to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="rounded-full" asChild>
                  <Link to="/contact">
                    Contact Our Team
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <a href="mailto:support@goodhosters.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
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

export default Help;
