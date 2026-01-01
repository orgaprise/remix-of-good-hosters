import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";
import blogDomains from "@/assets/blog-domains.webp";
import blogBackup from "@/assets/blog-backup.webp";
import blogEmail from "@/assets/blog-email.webp";

const blogPosts = [
  {
    id: 1,
    title: "Domain Registration Guide: Everything You Need to Know in 2026",
    excerpt: "From choosing the perfect domain name to understanding TLDs, this complete guide walks you through the entire registration process.",
    category: "Domains",
    author: "Sarah Mitchell",
    date: "Dec 28, 2026",
    readTime: "7 min read",
    image: blogDomains,
    imageAlt: "Domain registration process flowchart showing TLD selection, availability check, registrar comparison, and DNS configuration steps",
    slug: "/domain-registration-guide"
  },
  {
    id: 2,
    title: "Website Backup Strategies: Protect Your Business Data",
    excerpt: "Learn the best practices for backing up your website and how to implement automated backup solutions for peace of mind.",
    category: "Backup",
    author: "James Chen",
    date: "Dec 25, 2026",
    readTime: "6 min read",
    image: blogBackup,
    imageAlt: "Website backup strategy diagram illustrating 3-2-1 backup rule with local storage, cloud backup, and offsite disaster recovery options",
    slug: "/website-backup-strategies"
  },
  {
    id: 3,
    title: "Professional Email Hosting: Setup Your Business Email Today",
    excerpt: "Discover why professional email hosting matters and how to set up custom email addresses that boost your brand credibility.",
    category: "Email",
    author: "Emily Rodriguez",
    date: "Dec 22, 2026",
    readTime: "5 min read",
    image: blogEmail,
    imageAlt: "Professional business email setup interface showing custom domain configuration, mailbox management, and security settings",
    slug: "/professional-email-hosting"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-background" aria-labelledby="blog-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Latest Insights
            </span>
            <h2 id="blog-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Expert Knowledge,
              <span className="text-gradient block">Shared Freely</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Stay ahead with our latest articles, guides, and industry insights on web hosting.
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" size="lg" className="w-fit" aria-label="View all blog articles">
              View All Articles
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" role="list" aria-label="Blog articles">
          {blogPosts.map((post, index) => (
            <Link key={post.id} to={post.slug}>
              <article
                className="group bg-card rounded-2xl overflow-hidden border border-border card-hover cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
                role="listitem"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {/* Hidden schema data */}
                <meta itemProp="headline" content={post.title} />
                <meta itemProp="description" content={post.excerpt} />
                <meta itemProp="datePublished" content="2026-12-28" />
                <meta itemProp="author" content={post.author} />
                
                {/* Image */}
                <figure className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    objectFit="cover"
                  />
                  <figcaption className="sr-only">{post.title}</figcaption>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full" itemProp="articleSection">
                      {post.category}
                    </span>
                  </div>
                </figure>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <footer className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" aria-hidden="true" />
                      <span itemProp="author">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <time dateTime="2026-12-28" itemProp="datePublished">{post.date}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>{post.readTime}</span>
                    </div>
                  </footer>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
