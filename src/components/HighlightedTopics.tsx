import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import highlightedVps from "@/assets/highlighted-vps-hosting.webp";
import highlightedWordpress from "@/assets/highlighted-wordpress-hosting.webp";
import highlightedSpeed from "@/assets/highlighted-speed-optimization.webp";
import highlightedSsl from "@/assets/highlighted-ssl-certificates.webp";

const highlightedPosts = [
  {
    id: 1,
    title: "How to Choose the Best VPS Hosting Provider in 2026",
    description: "Compare features, performance, and pricing to find the perfect VPS solution for your needs.",
    category: "VPS",
    image: highlightedVps,
    slug: "/best-vps-hosting-2026"
  },
  {
    id: 2,
    title: "WordPress Hosting: Managed vs Unmanaged Explained",
    description: "Understand the key differences and decide which option suits your website best.",
    category: "WordPress",
    image: highlightedWordpress,
    slug: "/managed-vs-unmanaged-wordpress-hosting"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Website Speed Optimization",
    description: "Boost your site performance with proven techniques that improve loading times.",
    category: "Performance",
    image: highlightedSpeed,
    slug: "/website-speed-optimization-guide"
  },
  {
    id: 4,
    title: "SSL Certificates: Why HTTPS Matters for Your Business",
    description: "Learn how SSL protects your visitors and improves your search engine rankings.",
    category: "Security",
    image: highlightedSsl,
    slug: "/ssl-certificates-guide"
  }
];

const HighlightedTopics = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-16">
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-2">
              Most Read
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Highlighted <span className="text-gradient">Topics</span>
            </h2>
          </div>
          <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-border via-accent/30 to-transparent" />
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightedPosts.map((post, index) => (
            <Link key={post.id} to={post.slug}>
              <article
                className="group relative bg-card rounded-2xl overflow-hidden border border-border cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-foreground line-clamp-2 group-hover:text-accent transition-colors duration-200 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all duration-200">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedTopics;
