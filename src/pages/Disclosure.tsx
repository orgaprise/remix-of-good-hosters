import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclosure = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hostingadvice.pro"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Affiliate Disclosure",
        "item": "https://hostingadvice.pro/disclosure"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Affiliate Disclosure | HostingAdvice.pro</title>
        <meta 
          name="description" 
          content="Learn about our affiliate relationships and how we maintain transparency in our hosting reviews and recommendations." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hostingadvice.pro/disclosure" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium">Affiliate Disclosure</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Affiliate Disclosure
            </h1>
            <p className="text-muted-foreground">
              Last updated: December 31, 2025
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment to Transparency</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At HostingAdvice.pro, we believe in complete transparency with our readers. This disclosure page 
                explains how we earn revenue and how our affiliate relationships work, ensuring you can make 
                informed decisions about the recommendations we provide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to providing honest, unbiased reviews and recommendations. Our editorial 
                integrity is paramount, and our affiliate relationships never influence the accuracy or 
                objectivity of our content.
              </p>
            </section>

            {/* What Are Affiliate Links */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Affiliate Links?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Affiliate links are special URLs that track referrals from our website to a hosting provider 
                or service. When you click on one of these links and make a purchase, we may earn a commission 
                at no additional cost to you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These commissions help us maintain our website, conduct thorough testing of hosting services, 
                and continue providing free, valuable content to our readers.
              </p>
            </section>

            {/* How We Make Money */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Make Money</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HostingAdvice.pro generates revenue through the following methods:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong className="text-foreground">Affiliate Commissions:</strong> We earn commissions when 
                  you purchase hosting services through our affiliate links.
                </li>
                <li>
                  <strong className="text-foreground">Sponsored Content:</strong> Occasionally, we may publish 
                  sponsored articles, which are always clearly labeled.
                </li>
                <li>
                  <strong className="text-foreground">Display Advertising:</strong> We may display relevant 
                  advertisements on our website.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Regardless of our revenue sources, our reviews and recommendations are based solely on our 
                hands-on testing and professional expertise.
              </p>
            </section>

            {/* Our Review Process */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Review Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team of software engineers and DevOps professionals conducts thorough, hands-on testing 
                of each hosting provider we review. Our evaluation criteria include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Server performance and uptime monitoring</li>
                <li>Security features and SSL implementation</li>
                <li>Customer support responsiveness and quality</li>
                <li>Pricing transparency and value for money</li>
                <li>Ease of use and control panel functionality</li>
                <li>Scalability and upgrade options</li>
                <li>Backup and disaster recovery capabilities</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We maintain our testing accounts and regularly update our reviews to ensure accuracy. 
                Commission rates do not influence our rankings or recommendations.
              </p>
            </section>

            {/* Editorial Independence */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Editorial Independence</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our editorial team operates independently from our business relationships. This means:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>We review and recommend services based on merit, not commission rates</li>
                <li>We include services in our comparisons even if they don't offer affiliate programs</li>
                <li>We highlight both pros and cons of each service honestly</li>
                <li>We update our content when services improve or decline in quality</li>
                <li>We never accept payment for positive reviews</li>
              </ul>
            </section>

            {/* Affiliate Partners */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Affiliate Partners</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We maintain affiliate relationships with various hosting providers and web service companies. 
                Some of our partners include (but are not limited to):
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Web hosting providers (shared, VPS, dedicated, cloud)</li>
                <li>Domain registrars</li>
                <li>SSL certificate providers</li>
                <li>Website builders and CMS platforms</li>
                <li>Email hosting services</li>
                <li>CDN and security services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The presence or absence of an affiliate relationship does not affect whether we review a 
                service or how we rate it.
              </p>
            </section>

            {/* FTC Compliance */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">FTC Compliance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In accordance with the Federal Trade Commission's guidelines on endorsements and testimonials, 
                we disclose our affiliate relationships in the following ways:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>This dedicated disclosure page</li>
                <li>Disclosure statements within our articles</li>
                <li>Clear labeling of sponsored content</li>
                <li>Affiliate relationship mentions in our footer</li>
              </ul>
            </section>

            {/* Price Guarantee */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">No Extra Cost to You</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you use our affiliate links, you pay the same price (and often receive exclusive 
                discounts) as you would by going directly to the provider. Our commission comes from the 
                service provider, not from you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In many cases, we negotiate special deals and discounts exclusively for our readers, 
                providing you with better value than you'd find elsewhere.
              </p>
            </section>

            {/* Your Trust */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Trust Matters</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We understand that trust is earned. Our business model depends on providing accurate, 
                helpful information that leads to good decisions. If we recommended poor services, 
                we would lose your trust—and our business.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That's why we're committed to maintaining the highest standards of honesty and transparency 
                in everything we publish.
              </p>
            </section>

            {/* Questions */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Questions About This Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about our affiliate relationships or this disclosure, 
                please don't hesitate to contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a 
                    href="mailto:contact@goodhosters.com" 
                    className="text-primary hover:underline"
                  >
                    contact@goodhosters.com
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Contact Page:</strong>{" "}
                  <a 
                    href="/contact" 
                    className="text-primary hover:underline"
                  >
                    Visit our contact page
                  </a>
                </li>
              </ul>
            </section>

            {/* Related Pages */}
            <section className="mt-12 pt-8 border-t border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">Related Legal Pages</h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/privacy-policy" 
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms-of-service" 
                  className="text-primary hover:underline"
                >
                  Terms of Service
                </a>
                <a 
                  href="/cookie-policy" 
                  className="text-primary hover:underline"
                >
                  Cookie Policy
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Disclosure;
