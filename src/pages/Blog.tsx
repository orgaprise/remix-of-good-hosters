import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/OptimizedImage";

import blogHostingComparison from "@/assets/blog-hosting-comparison.webp";
import blogCloudHosting from "@/assets/blog-cloud-hosting.webp";
import blogSecurity from "@/assets/blog-security.webp";
import blogVps from "@/assets/highlighted-vps-hosting.webp";
import blogWordpress from "@/assets/highlighted-wordpress-hosting.webp";
import blogSpeed from "@/assets/highlighted-speed-optimization.webp";
import blogSsl from "@/assets/highlighted-ssl-certificates.webp";
import blogDomains from "@/assets/blog-domains.webp";
import blogBackup from "@/assets/blog-backup.webp";
import blogEmail from "@/assets/blog-email.webp";

const allArticles = [
  {
    id: 1,
    title: "Top 10 Web Hosting Providers for 2026: A Complete Comparison",
    excerpt: "We've tested and analyzed the leading hosting providers to bring you the most comprehensive comparison guide for making the right choice.",
    category: "Reviews",
    author: "Alex Thompson",
    date: "Dec 28, 2026",
    dateISO: "2026-12-28",
    readTime: "12 min read",
    image: blogHostingComparison,
    slug: "/best-web-hosting-2026",
    featured: true
  },
  {
    id: 2,
    title: "Cloud vs Shared Hosting: Which is Right for Your Business?",
    excerpt: "Understanding the key differences between cloud and shared hosting can save you money and improve your website's performance.",
    category: "Guides",
    author: "Sarah Mitchell",
    date: "Dec 25, 2026",
    dateISO: "2026-12-25",
    readTime: "10 min read",
    image: blogCloudHosting,
    slug: "/cloud-vs-shared-hosting",
    featured: false
  },
  {
    id: 3,
    title: "Web Hosting Security Guide: Protect Your Website in 2026",
    excerpt: "Essential security features and best practices to keep your website safe from cyber threats and data breaches.",
    category: "Security",
    author: "Michael Chen",
    date: "Dec 22, 2026",
    dateISO: "2026-12-22",
    readTime: "11 min read",
    image: blogSecurity,
    slug: "/web-hosting-security-guide",
    featured: false
  },
  {
    id: 4,
    title: "How to Choose the Best VPS Hosting Provider in 2026",
    excerpt: "Compare features, performance, and pricing to find the perfect VPS solution that scales with your growing business needs.",
    category: "VPS",
    author: "David Park",
    date: "Dec 20, 2026",
    dateISO: "2026-12-20",
    readTime: "9 min read",
    image: blogVps,
    slug: "/best-vps-hosting-2026",
    featured: false
  },
  {
    id: 5,
    title: "WordPress Hosting: Managed vs Unmanaged Explained",
    excerpt: "Understand the key differences between managed and unmanaged WordPress hosting and decide which option suits your website best.",
    category: "WordPress",
    author: "Emma Wilson",
    date: "Dec 18, 2026",
    dateISO: "2026-12-18",
    readTime: "8 min read",
    image: blogWordpress,
    slug: "/managed-vs-unmanaged-wordpress-hosting",
    featured: false
  },
  {
    id: 6,
    title: "The Ultimate Guide to Website Speed Optimization",
    excerpt: "Boost your site performance with proven techniques that improve loading times, user experience, and search engine rankings.",
    category: "Performance",
    author: "James Rodriguez",
    date: "Dec 15, 2026",
    dateISO: "2026-12-15",
    readTime: "10 min read",
    image: blogSpeed,
    slug: "/website-speed-optimization-guide",
    featured: false
  },
  {
    id: 7,
    title: "SSL Certificates Guide: Why HTTPS Matters for Your Business",
    excerpt: "Learn how SSL certificates protect your visitors, build trust, and improve your search engine rankings.",
    category: "Security",
    author: "Lisa Chang",
    date: "Dec 12, 2026",
    dateISO: "2026-12-12",
    readTime: "7 min read",
    image: blogSsl,
    slug: "/ssl-certificates-guide",
    featured: false
  },
  {
    id: 8,
    title: "Domain Registration Guide: Everything You Need to Know in 2026",
    excerpt: "From choosing the perfect domain name to understanding TLDs, this complete guide walks you through the entire registration process.",
    category: "Domains",
    author: "Sarah Mitchell",
    date: "Dec 10, 2026",
    dateISO: "2026-12-10",
    readTime: "8 min read",
    image: blogDomains,
    slug: "/domain-registration-guide",
    featured: false
  },
  {
    id: 9,
    title: "Website Backup Strategies: Protect Your Business Data",
    excerpt: "Learn the best practices for backing up your website and how to implement automated backup solutions for complete peace of mind.",
    category: "Backup",
    author: "James Chen",
    date: "Dec 8, 2026",
    dateISO: "2026-12-08",
    readTime: "9 min read",
    image: blogBackup,
    slug: "/website-backup-strategies",
    featured: false
  },
  {
    id: 10,
    title: "Professional Email Hosting: Setup Your Business Email Today",
    excerpt: "Discover why professional email hosting matters and how to set up custom email addresses that boost your brand credibility.",
    category: "Email",
    author: "Emily Rodriguez",
    date: "Dec 5, 2026",
    dateISO: "2026-12-05",
    readTime: "10 min read",
    image: blogEmail,
    slug: "/professional-email-hosting",
    featured: false
  }
];

const categories = ["All", "Reviews", "Guides", "Security", "VPS", "WordPress", "Performance", "Domains", "Backup", "Email"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = allArticles[0];
  const regularArticles = filteredArticles.filter(a => a.id !== 1 || activeCategory !== "All" || searchQuery);

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Web Hosting Blog - Expert Guides & Reviews",
    "description": "Expert articles, guides, and reviews on web hosting, security, performance, and more.",
    "url": "https://yourdomain.com/blog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allArticles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://yourdomain.com${article.slug}`,
        "name": article.title
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yourdomain.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://yourdomain.com/blog"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Web Hosting Blog - Expert Guides, Reviews & Tutorials | 2026</title>
        <meta name="description" content="Explore our comprehensive library of web hosting articles. Expert guides on hosting providers, security, performance optimization, WordPress, VPS, and more." />
        <meta name="keywords" content="web hosting blog, hosting guides, hosting reviews, website security, VPS hosting, WordPress hosting, SSL certificates" />
        <link rel="canonical" href="https://yourdomain.com/blog" />
        <meta property="og:title" content="Web Hosting Blog - Expert Guides & Reviews" />
        <meta property="og:description" content="Explore our comprehensive library of web hosting articles covering providers, security, performance, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Hosting Blog - Expert Guides & Reviews" />
        <meta name="twitter:description" content="Expert articles on web hosting, security, performance optimization, and more." />
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Knowledge Hub
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Web Hosting <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
                Expert guides, in-depth reviews, and actionable tutorials to help you make informed hosting decisions.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-base rounded-full border-border bg-card shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article (only when not filtering) */}
        {activeCategory === "All" && !searchQuery && (
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  Featured
                </Badge>
                <div className="flex-1 h-px bg-border" />
              </div>
              
              <Link to={featuredArticle.slug}>
                <article className="group relative bg-card rounded-3xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-[400px] overflow-hidden">
                      <OptimizedImage
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                        objectFit="cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:bg-gradient-to-l lg:from-card lg:to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <Badge className="w-fit mb-4 bg-accent text-accent-foreground">
                        {featuredArticle.category}
                      </Badge>
                      <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-muted-foreground text-lg mb-6 line-clamp-3">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{featuredArticle.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={featuredArticle.dateISO}>{featuredArticle.date}</time>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredArticle.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300">
                        <span>Read Full Article</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {activeCategory === "All" && !searchQuery && (
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground">All Articles</h2>
                <div className="flex-1 h-px bg-border" />
                <span className="text-muted-foreground text-sm">{allArticles.length - 1} articles</span>
              </div>
            )}

            {filteredArticles.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(activeCategory === "All" && !searchQuery ? regularArticles.slice(0, 9) : filteredArticles).map((article, index) => (
                  <Link key={article.id} to={article.slug}>
                    <article
                      className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <OptimizedImage
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                          objectFit="cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-accent text-accent-foreground">
                            {article.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-display text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-200">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                          {article.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              <time dateTime={article.dateISO}>{article.date}</time>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Stay Updated with Hosting Insights
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest articles, guides, and exclusive tips delivered to your inbox.
              </p>
              <Link
                to="/#newsletter"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-colors duration-200"
              >
                Subscribe to Newsletter
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
