import { ArrowUpRight, Star, Zap, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const hostingProviders = [
  {
    id: 1,
    name: "Hostinger",
    logoText: "hostinger",
    logoColor: "#673DE6",
    rating: 4.9,
    reviews: "12,500+",
    price: "$2.99",
    originalPrice: "$11.99",
    discount: "75% OFF",
    features: ["Free Domain", "Free SSL", "24/7 Support", "100GB SSD"],
    badge: "Best Value",
    badgeColor: "bg-accent text-accent-foreground",
    affiliateUrl: "https://hostinger.com?REFERRALCODE=3OYABDESSJR3"
  },
  {
    id: 2,
    name: "Bluehost",
    logoText: "bluehost",
    logoColor: "#003087",
    rating: 4.7,
    reviews: "8,200+",
    price: "$2.95",
    originalPrice: "$9.99",
    discount: "70% OFF",
    features: ["Free Domain", "Free CDN", "WordPress Recommended", "50GB SSD"],
    badge: "WordPress #1",
    badgeColor: "bg-blue-600 text-white",
    affiliateUrl: "https://bluehost.com/?ref=goodhosters"
  },
  {
    id: 3,
    name: "SiteGround",
    logoText: "SiteGround",
    logoColor: "#6E3FAC",
    rating: 4.8,
    reviews: "9,800+",
    price: "$3.99",
    originalPrice: "$14.99",
    discount: "73% OFF",
    features: ["Free SSL", "Daily Backups", "Free Migration", "Ultrafast PHP"],
    badge: "Best Support",
    badgeColor: "bg-emerald-600 text-white",
    affiliateUrl: "https://siteground.com/?ref=goodhosters"
  },
  {
    id: 4,
    name: "Cloudways",
    logoText: "cloudways",
    logoColor: "#2C39BD",
    rating: 4.8,
    reviews: "6,300+",
    price: "$14.00",
    originalPrice: "$14.00",
    discount: "3 Months Free",
    features: ["Managed Cloud", "5 Cloud Providers", "Free Migration", "24/7 Support"],
    badge: "Best Performance",
    badgeColor: "bg-violet-600 text-white",
    affiliateUrl: "https://cloudways.com/?ref=goodhosters"
  },
  {
    id: 5,
    name: "A2 Hosting",
    logoText: "A2 HOSTING",
    logoColor: "#E8470F",
    rating: 4.6,
    reviews: "5,100+",
    price: "$2.99",
    originalPrice: "$12.99",
    discount: "77% OFF",
    features: ["Turbo Servers", "Free SSL", "Free Migration", "Anytime Refund"],
    badge: "Fastest Shared",
    badgeColor: "bg-orange-600 text-white",
    affiliateUrl: "https://a2hosting.com/?ref=goodhosters"
  },
  {
    id: 6,
    name: "DigitalOcean",
    logoText: "DigitalOcean",
    logoColor: "#0080FF",
    rating: 4.7,
    reviews: "7,400+",
    price: "$4.00",
    originalPrice: "$4.00",
    discount: "$200 Credit",
    features: ["Cloud Droplets", "Kubernetes", "Managed DB", "Global CDN"],
    badge: "Developer Choice",
    badgeColor: "bg-blue-500 text-white",
    affiliateUrl: "https://digitalocean.com/?ref=goodhosters"
  }
];

const HostingProducts = () => {
  return (
    <section id="hosting" className="py-20 lg:py-28 bg-muted/30" aria-labelledby="hosting-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Zap className="w-4 h-4" aria-hidden="true" />
            Top Rated Providers
          </span>
          <h2 id="hosting-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Best Web Hosting of 2026
          </h2>
          <p className="text-muted-foreground text-lg">
            Hand-picked and rigorously tested. These are the hosting providers we trust and recommend.
          </p>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Web hosting providers">
          {hostingProviders.map((provider, index) => (
            <article
              key={provider.id}
              className="group relative bg-card rounded-2xl border border-border hover:border-accent/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
              itemScope
              itemType="https://schema.org/Product"
            >
              {/* Hidden schema data */}
              <meta itemProp="name" content={provider.name} />
              <meta itemProp="description" content={`${provider.name} web hosting - ${provider.features.join(', ')}`} />
              
              {/* Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1.5 ${provider.badgeColor} text-xs font-bold rounded-full shadow-sm`}>
                {provider.badge}
              </div>

              {/* Discount Tag */}
              <div className="absolute top-4 right-4 px-2.5 py-1 bg-accent/10 text-accent text-xs font-bold rounded-md" aria-label={`Discount: ${provider.discount}`}>
                {provider.discount}
              </div>

              <div className="p-6 pt-14">
                {/* Logo Section */}
                <div className="flex items-center justify-center h-20 mb-6 bg-secondary/50 rounded-xl p-4">
                  <span 
                    className="font-display font-bold text-2xl tracking-tight"
                    style={{ color: provider.logoColor }}
                    itemProp="brand"
                  >
                    {provider.logoText}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-4" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                  <meta itemProp="ratingValue" content={provider.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  <meta itemProp="reviewCount" content={provider.reviews.replace(/[^0-9]/g, '')} />
                  <div className="flex items-center gap-1" aria-label={`Rating: ${provider.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(provider.rating) ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{provider.rating}</span>
                  <span className="text-sm text-muted-foreground">({provider.reviews})</span>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6 pb-6 border-b border-border" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="priceCurrency" content="USD" />
                  <meta itemProp="price" content={provider.price.replace('$', '')} />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">from</span>
                    <span className="font-display text-4xl font-bold text-foreground">{provider.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <span className="text-sm text-muted-foreground line-through" aria-label={`Original price ${provider.originalPrice} per month`}>{provider.originalPrice}/mo</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6" aria-label={`${provider.name} features`}>
                  {provider.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center" aria-hidden="true">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={provider.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block"
                  aria-label={`Visit ${provider.name} - opens in new tab`}
                >
                  <Button variant="default" className="w-full h-12 text-base font-semibold group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Visit {provider.name}
                    <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
          <small>Prices and offers are subject to change. We may earn a commission when you sign up through our links at no extra cost to you.</small>
        </p>
      </div>
    </section>
  );
};

export default HostingProducts;
