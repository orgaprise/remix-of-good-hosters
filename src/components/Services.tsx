import { Server, Search, FileText, Users, HeadphonesIcon, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Hosting Analysis",
    description: "In-depth analysis of your current hosting setup to identify performance bottlenecks and security vulnerabilities."
  },
  {
    icon: FileText,
    title: "Expert Reviews",
    description: "Comprehensive, unbiased reviews of top web hosting providers to help you make informed decisions."
  },
  {
    icon: Server,
    title: "Migration Support",
    description: "Seamless migration assistance when switching hosts, ensuring zero downtime for your business."
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Speed and performance optimization strategies to boost your website's loading times and user experience."
  },
  {
    icon: Users,
    title: "Consultation",
    description: "One-on-one consultations to understand your needs and recommend the perfect hosting solution."
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Continuous support and monitoring to ensure your hosting environment runs smoothly 24/7."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/50" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 id="services-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="text-gradient block">Hosting Success</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From initial consultation to ongoing support, we provide comprehensive services to ensure your website performs at its best.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list" aria-label="Our services">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 border border-border overflow-hidden cursor-pointer transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Background Decorative Elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              </div>
              
              {/* Grid Pattern Background */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500" aria-hidden="true">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }} />
              </div>

              {/* Gradient Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-primary/20" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="relative w-16 h-16 mb-6" aria-hidden="true">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 flex items-center justify-center group-hover:from-accent group-hover:to-accent/80 group-hover:border-accent transition-all duration-500">
                    <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                </div>

                {/* Title with underline effect */}
                <div className="relative inline-block mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground" itemProp="name">
                    {service.title}
                  </h3>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-500" aria-hidden="true" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300" itemProp="description">
                  {service.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-100 scale-0" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-100 scale-0" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
