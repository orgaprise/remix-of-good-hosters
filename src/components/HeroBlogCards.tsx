import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";
import blogHostingComparison from "@/assets/blog-hosting-comparison.webp";
import blogCloudHosting from "@/assets/blog-cloud-hosting.webp";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Web Hosting Providers for 2026: A Complete Comparison",
    excerpt: "We've tested and analyzed the leading hosting providers to bring you the most comprehensive comparison guide.",
    category: "Reviews",
    date: "Dec 28, 2026",
    readTime: "8 min",
    image: blogHostingComparison,
    featured: true,
    slug: "/best-web-hosting-2026"
  },
  {
    id: 2,
    title: "Cloud vs Shared Hosting: Which is Right?",
    excerpt: "Understanding the key differences can save you money and improve performance.",
    category: "Guides",
    date: "Dec 25, 2026",
    readTime: "6 min",
    image: blogCloudHosting,
    featured: false,
    slug: "/cloud-vs-shared-hosting"
  }
];

const HeroBlogCards = () => {
  const featuredPost = blogPosts[0];
  const sidePosts = blogPosts.slice(1);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      {/* Featured Large Card - Left (Priority loading for LCP) */}
      <Link to={featuredPost.slug} className="lg:col-span-3">
        <article className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-lg card-hover cursor-pointer h-full min-h-[400px] lg:min-h-[440px]">
          <div className="absolute inset-0">
            <OptimizedImage
              src={featuredPost.image}
              alt={`${featuredPost.title} - Featured hosting comparison article`}
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
              priority={true}
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          </div>
          <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
            <span className="inline-block w-fit px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-4">
              {featuredPost.category}
            </span>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-background mb-3 group-hover:text-accent transition-colors duration-200">
              {featuredPost.title}
            </h3>
            <p className="text-background/80 mb-4 line-clamp-2">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-background/70">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <time dateTime="2026-12-28">{featuredPost.date}</time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>

      {/* Single Card - Right (Lazy loaded) */}
      <div className="flex flex-col lg:col-span-2">
        {sidePosts.map((post) => (
          <Link key={post.id} to={post.slug}>
            <article className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-lg card-hover cursor-pointer h-full min-h-[400px] lg:min-h-[440px]">
              {/* Image */}
              <figure className="relative h-48 lg:h-56 flex-shrink-0 overflow-hidden">
                <OptimizedImage
                  src={post.image}
                  alt={`${post.title} - ${post.category} article thumbnail`}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  objectFit="cover"
                />
                <figcaption className="sr-only">{post.title}</figcaption>
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </figure>

              {/* Content */}
              <div className="flex-1 p-5 lg:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <footer className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <time dateTime="2026-12-25">{post.date}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
                </footer>
              </div>
            </article>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBlogCards;
