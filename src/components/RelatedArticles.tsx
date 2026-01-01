import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export interface RelatedArticle {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
}

const RelatedArticles = ({ articles, title = "Related Articles" }: RelatedArticlesProps) => {
  if (!articles || articles.length === 0) return null;

  return (
    <aside className="my-12 p-6 lg:p-8 bg-muted/30 rounded-2xl border border-border" aria-label="Related articles">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-accent" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
      </div>
      
      <div className="grid gap-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={article.slug}
            className="group flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-md transition-all duration-200"
          >
            <div className="flex-1">
              <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-2">
                {article.category}
              </span>
              <h4 className="font-display font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                {article.title}
              </h4>
              <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                {article.excerpt}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default RelatedArticles;

// Pre-defined related article data for easy reuse
export const allArticles: Record<string, RelatedArticle> = {
  bestWebHosting: {
    title: "Top 10 Web Hosting Providers for 2026",
    slug: "/best-web-hosting-2026",
    category: "Reviews",
    excerpt: "Complete comparison of the best hosting providers with performance benchmarks."
  },
  cloudVsShared: {
    title: "Cloud vs Shared Hosting: Which Is Right for You?",
    slug: "/cloud-vs-shared-hosting",
    category: "Comparison",
    excerpt: "Performance benchmarks and pricing analysis to help you choose."
  },
  securityGuide: {
    title: "Web Hosting Security Guide: Protect Your Website",
    slug: "/web-hosting-security-guide",
    category: "Security",
    excerpt: "Essential security features and best practices for 2026."
  },
  vpsHosting: {
    title: "How to Choose the Best VPS Hosting Provider",
    slug: "/best-vps-hosting-2026",
    category: "VPS",
    excerpt: "Compare VPS features, performance, and pricing."
  },
  wordpressHosting: {
    title: "WordPress Hosting: Managed vs Unmanaged",
    slug: "/managed-vs-unmanaged-wordpress-hosting",
    category: "WordPress",
    excerpt: "Understand the differences and choose the right option."
  },
  speedOptimization: {
    title: "Website Speed Optimization Guide",
    slug: "/website-speed-optimization-guide",
    category: "Performance",
    excerpt: "Proven techniques to boost your site loading times."
  },
  sslCertificates: {
    title: "SSL Certificates Guide: Why HTTPS Matters",
    slug: "/ssl-certificates-guide",
    category: "Security",
    excerpt: "Learn how SSL protects visitors and improves SEO."
  },
  domainRegistration: {
    title: "Domain Registration Guide for 2026",
    slug: "/domain-registration-guide",
    category: "Domains",
    excerpt: "Everything you need to know about choosing and registering domains."
  },
  backupStrategies: {
    title: "Website Backup Strategies: Protect Your Data",
    slug: "/website-backup-strategies",
    category: "Backup",
    excerpt: "Best practices for automated backup solutions."
  },
  emailHosting: {
    title: "Professional Email Hosting Setup Guide",
    slug: "/professional-email-hosting",
    category: "Email",
    excerpt: "Set up custom business email addresses today."
  }
};
