import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SEO from "@/components/SEO";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import HostingProducts from "@/components/HostingProducts";
import Services from "@/components/Services";
import HighlightedTopics from "@/components/HighlightedTopics";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import HostingSurvey from "@/components/HostingSurvey";
import CookieConsent from "@/components/CookieConsent";

// FAQ data for schema
const faqData = [
  {
    question: "What is web hosting and why do I need it?",
    answer: "Web hosting is a service that allows your website to be accessible on the internet. When you create a website, the files need to be stored on a server that's connected to the internet 24/7. A web hosting provider gives you space on their servers, ensuring your site is always available to visitors worldwide."
  },
  {
    question: "What's the difference between shared, VPS, and dedicated hosting?",
    answer: "Shared hosting means your website shares server resources with other sites—it's affordable but has limited resources. VPS (Virtual Private Server) hosting gives you dedicated resources on a shared server, offering better performance and control. Dedicated hosting provides an entire server exclusively for your website, ideal for high-traffic sites requiring maximum performance and security."
  },
  {
    question: "How do I choose the right hosting plan for my website?",
    answer: "Consider your website's purpose, expected traffic, technical requirements, and budget. For a personal blog or small business site, shared hosting works well. Growing businesses with moderate traffic should consider VPS hosting. Large enterprises or high-traffic sites benefit from dedicated or cloud hosting."
  },
  {
    question: "What is uptime and why does it matter?",
    answer: "Uptime refers to the percentage of time your website is accessible online. A 99.9% uptime guarantee means your site may be down for about 8.76 hours per year. High uptime is crucial because downtime means lost visitors, revenue, and can damage your reputation. We recommend hosts offering at least 99.9% uptime guarantees."
  },
  {
    question: "Do I need SSL certification for my website?",
    answer: "Yes, SSL (Secure Sockets Layer) certification is essential. It encrypts data between your visitors and your server, protecting sensitive information. Google also ranks SSL-secured sites higher in search results, and browsers display 'Not Secure' warnings for sites without SSL. Many hosting providers now include free SSL certificates with their plans."
  },
  {
    question: "Can I switch hosting providers later?",
    answer: "Absolutely. Website migration is common and many hosting providers offer free migration services to help you transfer your site. Before switching, ensure you have backups of all files and databases. The process typically involves transferring files, updating DNS settings, and testing everything works correctly on the new server."
  }
];

// Services data for schema
const servicesData = [
  { name: "Hosting Analysis", description: "In-depth analysis of your current hosting setup to identify performance bottlenecks and security vulnerabilities." },
  { name: "Expert Reviews", description: "Comprehensive, unbiased reviews of top web hosting providers to help you make informed decisions." },
  { name: "Migration Support", description: "Seamless migration assistance when switching hosts, ensuring zero downtime for your business." },
  { name: "Performance Optimization", description: "Speed and performance optimization strategies to boost your website's loading times." },
  { name: "Consultation", description: "One-on-one consultations to understand your needs and recommend the perfect hosting solution." },
  { name: "Ongoing Support", description: "Continuous support and monitoring to ensure your hosting environment runs smoothly 24/7." }
];

// Review data for aggregate rating
const reviewStats = {
  ratingValue: 4.9,
  reviewCount: 300,
  bestRating: 5,
  worstRating: 1
};

const Index = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  // Breadcrumbs for homepage
  const breadcrumbs = [
    { name: "Home", url: "/" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Best Web Hosting 2026: Expert Reviews & Comparison | Good Hosters"
        description="Compare the best web hosting providers of 2026. Unbiased reviews, expert recommendations, and personalized hosting solutions for WordPress, e-commerce, VPS & cloud hosting. Find your perfect host today!"
        canonicalUrl="https://goodhosters.com"
        breadcrumbs={breadcrumbs}
      >
        {/* Enhanced meta tags for 2026 SEO */}
        <meta name="keywords" content="best web hosting 2026, web hosting comparison, WordPress hosting, VPS hosting, cloud hosting, cheap web hosting, hosting reviews, Hostinger review, Bluehost review, SiteGround review" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Good Hosters" />
        <meta name="publisher" content="Good Hosters" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Good Hosters" />
        <meta property="article:publisher" content="https://goodhosters.com" />
        <meta name="twitter:site" content="@goodhosters" />
        <meta name="twitter:creator" content="@goodhosters" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Organization Schema - Enhanced */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://goodhosters.com/#organization",
            "name": "Good Hosters",
            "url": "https://goodhosters.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://goodhosters.com/android-chrome-512x512.png",
              "width": 512,
              "height": 512
            },
            "description": "Expert web hosting advisory services providing unbiased reviews, comparisons, and tailored hosting solutions since 2020.",
            "foundingDate": "2020",
            "sameAs": [
              "https://twitter.com/goodhosters",
              "https://facebook.com/goodhosters",
              "https://linkedin.com/company/goodhosters"
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+1-800-HOSTING",
              "contactType": "customer service",
              "availableLanguage": ["English", "Spanish"],
              "areaServed": "Worldwide"
            }],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": reviewStats.ratingValue,
              "reviewCount": reviewStats.reviewCount,
              "bestRating": reviewStats.bestRating,
              "worstRating": reviewStats.worstRating
            }
          })}
        </script>
        
        {/* WebSite Schema - Enhanced with SearchAction */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://goodhosters.com/#website",
            "name": "Good Hosters",
            "url": "https://goodhosters.com",
            "description": "Compare the best web hosting providers. Expert reviews, unbiased recommendations, and personalized hosting solutions.",
            "publisher": {
              "@id": "https://goodhosters.com/#organization"
            },
            "potentialAction": [{
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://goodhosters.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }],
            "inLanguage": "en-US"
          })}
        </script>

        {/* WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://goodhosters.com/#webpage",
            "url": "https://goodhosters.com",
            "name": "Best Web Hosting 2026: Expert Reviews & Comparison | Good Hosters",
            "description": "Compare the best web hosting providers of 2026. Unbiased reviews, expert recommendations, and personalized hosting solutions.",
            "isPartOf": {
              "@id": "https://goodhosters.com/#website"
            },
            "about": {
              "@id": "https://goodhosters.com/#organization"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://goodhosters.com/og-image.png"
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
            "inLanguage": "en-US"
          })}
        </script>
        
        {/* ProfessionalService Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://goodhosters.com/#service",
            "name": "Good Hosters - Web Hosting Advisory",
            "image": "https://goodhosters.com/android-chrome-512x512.png",
            "url": "https://goodhosters.com",
            "description": "Expert web hosting advisory services providing unbiased reviews and tailored hosting solutions.",
            "priceRange": "Free",
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Hosting Advisory Services",
              "itemListElement": servicesData.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.name,
                  "description": service.description
                },
                "position": index + 1
              }))
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": reviewStats.ratingValue,
              "reviewCount": reviewStats.reviewCount,
              "bestRating": reviewStats.bestRating,
              "worstRating": reviewStats.worstRating
            }
          })}
        </script>

        {/* ItemList Schema for Hosting Providers */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Best Web Hosting Providers 2026",
            "description": "Top-rated web hosting providers compared and reviewed by experts",
            "itemListOrder": "https://schema.org/ItemListOrderDescending",
            "numberOfItems": 6,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Hostinger", "url": "https://goodhosters.com/reviews/hostinger" },
              { "@type": "ListItem", "position": 2, "name": "Bluehost", "url": "https://goodhosters.com/reviews/bluehost" },
              { "@type": "ListItem", "position": 3, "name": "SiteGround", "url": "https://goodhosters.com/reviews/siteground" },
              { "@type": "ListItem", "position": 4, "name": "Cloudways", "url": "https://goodhosters.com/reviews/cloudways" },
              { "@type": "ListItem", "position": 5, "name": "A2 Hosting", "url": "https://goodhosters.com/reviews/a2-hosting" },
              { "@type": "ListItem", "position": 6, "name": "DigitalOcean", "url": "https://goodhosters.com/reviews/digitalocean" }
            ]
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* Review Schema for Social Proof */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Good Hosters Advisory Service",
            "description": "Expert web hosting advisory and comparison service",
            "brand": {
              "@type": "Brand",
              "name": "Good Hosters"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": reviewStats.ratingValue,
              "reviewCount": reviewStats.reviewCount,
              "bestRating": reviewStats.bestRating,
              "worstRating": reviewStats.worstRating
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": { "@type": "Rating", "ratingValue": 5 },
                "author": { "@type": "Person", "name": "Jessica Martinez" },
                "reviewBody": "Absolutely fantastic service! They helped me find the perfect hosting solution for my e-commerce business."
              },
              {
                "@type": "Review",
                "reviewRating": { "@type": "Rating", "ratingValue": 5 },
                "author": { "@type": "Person", "name": "Robert Kim" },
                "reviewBody": "Great comparison tools and honest reviews. I was able to migrate my sites to a better host and cut my costs by 40%."
              }
            ]
          })}
        </script>

        {/* HowTo Schema for the Survey */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Find the Best Web Hosting Provider",
            "description": "Use our quick survey to get personalized hosting recommendations in under 30 seconds",
            "totalTime": "PT30S",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Answer Quick Questions", "text": "Tell us about your website needs, traffic expectations, and budget." },
              { "@type": "HowToStep", "position": 2, "name": "Get Recommendations", "text": "Receive personalized hosting provider recommendations based on your requirements." },
              { "@type": "HowToStep", "position": 3, "name": "Compare & Choose", "text": "Compare features, pricing, and reviews to make the best decision." }
            ]
          })}
        </script>
      </SEO>

      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      <TopBar />
      <Header onFindHostClick={() => setShowSurvey(true)} />
      
      <main id="main-content" role="main">
        <Hero onFindHostClick={() => setShowSurvey(true)} />
        <LogoSlider />
        <HostingProducts />
        <Services />
        <HighlightedTopics />
        <Testimonials />
        <CTABanner onFindHostClick={() => setShowSurvey(true)} />
        <FAQ />
        <BlogSection />
        <Newsletter />
      </main>

      <Footer />

      {/* Survey Modal */}
      <Dialog open={showSurvey} onOpenChange={setShowSurvey}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Find Your Perfect Host</DialogTitle>
          </DialogHeader>
          <HostingSurvey onComplete={() => setShowSurvey(false)} />
        </DialogContent>
      </Dialog>

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  );
};

export default Index;
