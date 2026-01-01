import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import authorMalloryKeegan from '@/assets/author-mallory-keegan.webp';

// All articles by Mallory Keegan
const authorArticles = [
  {
    title: "Top 10 Web Hosting Providers for 2026: A Complete Comparison",
    excerpt: "We've tested and analyzed the leading hosting providers to bring you the most comprehensive comparison guide.",
    category: "Reviews",
    date: "Dec 28, 2026",
    dateISO: "2026-12-28",
    readTime: "12 min",
    slug: "/best-web-hosting-2026"
  },
  {
    title: "Cloud vs Shared Hosting: Which is Right for Your Business?",
    excerpt: "Understanding the key differences between cloud and shared hosting can save you money and improve performance.",
    category: "Guides",
    date: "Dec 25, 2026",
    dateISO: "2026-12-25",
    readTime: "10 min",
    slug: "/cloud-vs-shared-hosting"
  },
  {
    title: "Web Hosting Security Guide: Protect Your Website in 2026",
    excerpt: "Essential security features and best practices to keep your website safe from cyber threats.",
    category: "Security",
    date: "Dec 22, 2026",
    dateISO: "2026-12-22",
    readTime: "11 min",
    slug: "/web-hosting-security-guide"
  },
  {
    title: "How to Choose the Best VPS Hosting Provider in 2026",
    excerpt: "Compare features, performance, and pricing to find the perfect VPS solution for your needs.",
    category: "VPS",
    date: "Dec 20, 2026",
    dateISO: "2026-12-20",
    readTime: "9 min",
    slug: "/best-vps-hosting-2026"
  },
  {
    title: "WordPress Hosting: Managed vs Unmanaged Explained",
    excerpt: "Understand the key differences and decide which option suits your website best.",
    category: "WordPress",
    date: "Dec 18, 2026",
    dateISO: "2026-12-18",
    readTime: "8 min",
    slug: "/managed-vs-unmanaged-wordpress-hosting"
  },
  {
    title: "The Ultimate Guide to Website Speed Optimization",
    excerpt: "Boost your site performance with proven techniques that improve loading times.",
    category: "Performance",
    date: "Dec 15, 2026",
    dateISO: "2026-12-15",
    readTime: "10 min",
    slug: "/website-speed-optimization-guide"
  },
  {
    title: "SSL Certificates Guide: Why HTTPS Matters for Your Business",
    excerpt: "Learn how SSL certificates protect your visitors and improve your search rankings.",
    category: "Security",
    date: "Dec 12, 2026",
    dateISO: "2026-12-12",
    readTime: "7 min",
    slug: "/ssl-certificates-guide"
  },
  {
    title: "Domain Registration Guide: Everything You Need to Know in 2026",
    excerpt: "From choosing the perfect domain name to understanding TLDs, this complete guide walks you through the process.",
    category: "Domains",
    date: "Dec 10, 2026",
    dateISO: "2026-12-10",
    readTime: "8 min",
    slug: "/domain-registration-guide"
  },
  {
    title: "Website Backup Strategies: Protect Your Business Data",
    excerpt: "Learn the best practices for backing up your website and implementing automated backup solutions.",
    category: "Backup",
    date: "Dec 8, 2026",
    dateISO: "2026-12-08",
    readTime: "9 min",
    slug: "/website-backup-strategies"
  },
  {
    title: "Professional Email Hosting: Setup Your Business Email Today",
    excerpt: "Discover why professional email hosting matters and how to set up custom email addresses.",
    category: "Email",
    date: "Dec 5, 2026",
    dateISO: "2026-12-05",
    readTime: "10 min",
    slug: "/professional-email-hosting"
  }
];

const AuthorProfile = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mallory Keegan",
    "url": "https://goodhosters.com/authors/mallory-keegan",
    "image": "https://goodhosters.com/assets/author-mallory-keegan.webp",
    "jobTitle": "Web Hosting Reviewer",
    "worksFor": {
      "@type": "Organization",
      "name": "Good Hosters",
      "url": "https://goodhosters.com"
    },
    "description": "Web hosting expert and technical writer specializing in hosting reviews, performance analysis, and security best practices. Has tested 50+ hosting providers.",
    "sameAs": []
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://goodhosters.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Authors",
        "item": "https://goodhosters.com/authors"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Mallory Keegan",
        "item": "https://goodhosters.com/authors/mallory-keegan"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Mallory Keegan - Web Hosting Expert & Reviewer | Good Hosters</title>
        <meta name="description" content="Mallory Keegan is a web hosting expert and technical writer at Good Hosters. Read her in-depth hosting reviews, comparisons, and expert guides on VPS, WordPress, cloud hosting, and more." />
        <meta name="keywords" content="Mallory Keegan, web hosting expert, hosting reviewer, Good Hosters author, hosting guides" />
        <link rel="canonical" href="https://goodhosters.com/authors/mallory-keegan" />
        <meta property="og:title" content="Mallory Keegan - Web Hosting Expert | Good Hosters" />
        <meta property="og:description" content="Web hosting expert and technical writer specializing in hosting reviews and security best practices." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://goodhosters.com/authors/mallory-keegan" />
        <meta property="og:image" content="https://goodhosters.com/assets/author-mallory-keegan.webp" />
        <meta property="profile:first_name" content="Mallory" />
        <meta property="profile:last_name" content="Keegan" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mallory Keegan - Web Hosting Expert" />
        <meta name="twitter:description" content="Web hosting expert and technical writer at Good Hosters." />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-accent transition-colors">Authors</Link></li>
                <li>/</li>
                <li className="text-foreground font-medium">Mallory Keegan</li>
              </ol>
            </nav>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Author Image */}
              <div className="flex-shrink-0">
                <img 
                  src={authorMalloryKeegan} 
                  alt="Mallory Keegan - Web Hosting Expert and Technical Writer at Good Hosters"
                  width={200}
                  height={200}
                  className="w-40 h-40 lg:w-48 lg:h-48 rounded-2xl object-cover border-4 border-accent/20 shadow-xl"
                />
              </div>

              {/* Author Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                    Expert Author
                  </span>
                </div>
                <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
                  Mallory Keegan
                </h1>
                <p className="text-xl text-accent font-medium mb-4">
                  Web Hosting Reviewer & Technical Writer
                </p>
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl leading-relaxed">
                  Web hosting enthusiast who tests providers and breaks down features, pricing, and real-world speed. 
                  With over 5 years of experience in the hosting industry, Mallory has tested 50+ hosting providers 
                  and written comprehensive guides to help website owners make informed decisions.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-foreground">10</span>
                    <span className="text-sm text-muted-foreground">Articles</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-foreground">50+</span>
                    <span className="text-sm text-muted-foreground">Hosts Tested</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-foreground">5+</span>
                    <span className="text-sm text-muted-foreground">Years Experience</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {['VPS Hosting', 'WordPress Hosting', 'Cloud Hosting', 'Web Security', 'SSL Certificates', 'Performance Optimization', 'Domain Management', 'Email Hosting', 'Backup Solutions', 'Hosting Comparisons'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Articles by Mallory
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {authorArticles.map((article) => (
                <Link key={article.slug} to={article.slug}>
                  <article className="group p-6 bg-card rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <time dateTime={article.dateISO}>{article.date}</time>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Need Hosting Advice?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto">
              Get personalized hosting recommendations based on your specific needs.
            </p>
            <Button variant="accent" size="lg" className="rounded-full" asChild>
              <Link to="/hosting-finder">
                Find Your Perfect Host
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default AuthorProfile;