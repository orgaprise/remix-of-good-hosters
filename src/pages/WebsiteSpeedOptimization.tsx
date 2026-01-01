import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Calendar, Clock, ArrowRight, CheckCircle, AlertTriangle, Zap, Gauge, Image, Database, Globe, Server, FileCode, Timer, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import OptimizedImage from "@/components/OptimizedImage";
import blogSpeed from "@/assets/highlighted-speed-optimization.webp";
import imageOptimizationWorkflow from "@/assets/image-optimization-workflow.webp";
import cachingArchitecture from "@/assets/caching-architecture.webp";
import authorMalloryKeegan from "@/assets/author-mallory-keegan.webp";

const WebsiteSpeedOptimization = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Ultimate Guide to Website Speed Optimization (2026)",
    "description": "Complete guide to website speed optimization covering Core Web Vitals, image optimization, caching strategies, CDN setup, and proven techniques to dramatically improve your site's loading speed.",
    "image": "https://goodhosters.com/images/website-speed-optimization-guide.webp",
    "author": {
      "@type": "Person",
      "name": "Mallory Keegan",
      "jobTitle": "Web Hosting Reviewer",
      "url": "https://goodhosters.com/authors/mallory-keegan"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GoodHosters",
      "logo": {
        "@type": "ImageObject",
        "url": "https://goodhosters.com/logo.png"
      }
    },
    "datePublished": "2025-12-24",
    "dateModified": "2025-12-30",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://goodhosters.com/website-speed-optimization-guide"
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Speed Up Your Website",
    "description": "Step-by-step guide to optimize website speed and improve Core Web Vitals scores",
    "totalTime": "PT2H",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Audit Current Performance",
        "text": "Run your site through Google PageSpeed Insights, GTmetrix, and WebPageTest to establish baseline metrics and identify issues."
      },
      {
        "@type": "HowToStep",
        "name": "Optimize Images",
        "text": "Convert images to WebP format, implement lazy loading, and use responsive srcset for different screen sizes."
      },
      {
        "@type": "HowToStep",
        "name": "Implement Caching",
        "text": "Set up browser caching, enable server-side caching, and consider a CDN for global content delivery."
      },
      {
        "@type": "HowToStep",
        "name": "Minify Code",
        "text": "Minify CSS, JavaScript, and HTML files to reduce file sizes and improve parsing speed."
      },
      {
        "@type": "HowToStep",
        "name": "Optimize Core Web Vitals",
        "text": "Focus on LCP, FID/INP, and CLS metrics with targeted improvements for each vital."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a good website loading speed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good website should load in under 2.5 seconds, with the Largest Contentful Paint (LCP) occurring within 2.5 seconds of page load. Google considers pages loading in under 1 second as excellent, while anything over 4 seconds significantly hurts user experience and SEO."
        }
      },
      {
        "@type": "Question",
        "name": "How does website speed affect SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website speed directly impacts SEO rankings. Google uses Core Web Vitals (LCP, FID/INP, CLS) as ranking factors. Slow sites experience higher bounce rates, lower engagement, and reduced crawl efficiency—all of which negatively affect search visibility."
        }
      },
      {
        "@type": "Question",
        "name": "What are Core Web Vitals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Core Web Vitals are Google's metrics for user experience: LCP (Largest Contentful Paint) measures loading speed, INP (Interaction to Next Paint) measures interactivity, and CLS (Cumulative Layout Shift) measures visual stability. All three should meet Google's 'good' thresholds for optimal SEO."
        }
      },
      {
        "@type": "Question",
        "name": "Does hosting affect website speed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, hosting significantly affects website speed. Server response time (TTFB) depends on your host's hardware, location, and optimization. Premium hosts typically deliver TTFB under 200ms, while cheap shared hosting can exceed 800ms—directly impacting your LCP scores."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fastest way to improve website speed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fastest wins are usually image optimization (converting to WebP, lazy loading), enabling caching, and using a CDN. These three changes alone can reduce load times by 40-60% without touching your code."
        }
      }
    ]
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
        "name": "Performance",
        "item": "https://goodhosters.com/performance"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Website Speed Optimization Guide",
        "item": "https://goodhosters.com/website-speed-optimization-guide"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Website Speed Optimization: Complete 2026 Guide | GoodHosters</title>
        <meta name="description" content="Master website speed optimization with our 2026 guide. Improve Core Web Vitals (LCP, INP, CLS), optimize images, implement caching, use CDNs, and achieve sub-2-second load times." />
        <meta name="keywords" content="website speed optimization, Core Web Vitals optimization, improve page speed, LCP optimization, image optimization, caching strategies, CDN setup, WordPress speed, website performance 2026" />
        <link rel="canonical" href="https://goodhosters.com/website-speed-optimization-guide" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="Website Speed Optimization: The Ultimate 2026 Guide" />
        <meta property="og:description" content="Complete guide to website speed. Core Web Vitals, image optimization, caching, and CDN setup." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://goodhosters.com/website-speed-optimization-guide" />
        <meta property="og:image" content="https://goodhosters.com/og-image.png" />
        <meta property="og:site_name" content="GoodHosters" />
        <meta property="article:published_time" content="2025-12-24" />
        <meta property="article:modified_time" content="2025-12-30" />
        <meta property="article:author" content="Mallory Keegan" />
        <meta property="article:section" content="Performance" />
        <meta property="article:tag" content="page speed" />
        <meta property="article:tag" content="Core Web Vitals" />
        <meta property="article:tag" content="performance" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Speed Optimization: Complete Guide" />
        <meta name="twitter:description" content="Achieve blazing fast load times and perfect Core Web Vitals scores." />
        <meta name="twitter:image" content="https://goodhosters.com/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="pt-24 lg:pt-32">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-foreground">Website Speed Optimization</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                Performance
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Complete Guide
              </span>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              The Ultimate Guide to Website Speed Optimization
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Speed isn't a nice-to-have anymore—it's survival. This guide covers everything from quick wins that take 10 minutes to advanced optimizations that'll put you ahead of 95% of websites. No fluff, just actionable techniques that actually work.
            </p>

            <div className="flex items-center gap-4 pb-6 border-b border-border">
              <img 
                src={authorMalloryKeegan} 
                alt="Mallory Keegan - Web hosting expert and technical writer specializing in hosting reviews and guides" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground" itemProp="author">Mallory Keegan</p>
                <p className="text-sm text-muted-foreground">Web hosting enthusiast who tests providers and breaks down features, pricing, and real world speed</p>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="mb-12">
            <div className="rounded-2xl overflow-hidden">
              <OptimizedImage 
                src={blogSpeed}
                alt="Website Speed Optimization - Performance dashboard and optimization guide"
                className="w-full"
                objectFit="contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-muted-foreground mt-3">
              Complete guide to optimizing your website speed and performance
            </figcaption>
          </figure>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Here's a number that should keep you up at night: <strong>53% of mobile users abandon sites that take longer than 3 seconds to load</strong>. That's more than half your potential visitors gone before they see a single word of your content.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                I've spent years optimizing websites—from small blogs to enterprise platforms handling millions of requests. The patterns are remarkably consistent: the same issues cause the same problems, and the same fixes deliver the same dramatic improvements.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                This guide covers website speed optimization from the ground up. Whether you're trying to improve website loading speed by a few hundred milliseconds or completely transform a sluggish site, you'll find actionable techniques here. Let's get into it.
              </p>
            </section>

            {/* Why Speed Matters */}
            <section className="mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-accent" />
                Why Website Speed Actually Matters (The Real Numbers)
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Before we dive into how to speed up a website, let's establish why this effort is worth your time. The business case for website performance optimization is overwhelming:
              </p>

              <div className="bg-muted/50 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Speed Impact Statistics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="text-3xl font-bold text-accent mb-2">7%</div>
                    <p className="text-sm text-muted-foreground">Conversion loss per 100ms delay</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="text-3xl font-bold text-accent mb-2">40%</div>
                    <p className="text-sm text-muted-foreground">Users abandon sites loading 3+ seconds</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="text-3xl font-bold text-accent mb-2">2x</div>
                    <p className="text-sm text-muted-foreground">Bounce rate increase from 1s to 3s load</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="text-3xl font-bold text-accent mb-2">$2.6B</div>
                    <p className="text-sm text-muted-foreground">Annual revenue lost by slow e-commerce sites</p>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Google has also made speed a direct ranking factor. Core Web Vitals—Google's metrics for user experience—now influence where you appear in search results. Poor performance means lower rankings, which means less traffic, which means less revenue. It's a vicious cycle.
              </p>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">The Compound Effect</h4>
                    <p className="text-muted-foreground">
                      A 1-second improvement doesn't just help one metric. Faster sites get more organic traffic, higher engagement, better conversions, and more return visitors. These effects compound—making speed one of the highest-ROI investments you can make.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Web Vitals Deep Dive */}
            <section className="mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-accent" />
                Core Web Vitals: The Metrics That Matter Most
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Core Web Vitals optimization is now essential for SEO. Google measures three specific aspects of user experience, and each requires a different approach to improve.
              </p>

              {/* LCP */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Timer className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">LCP (Largest Contentful Paint)</h3>
                    <p className="text-muted-foreground">Measures loading performance</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm mb-2">
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span> Good: ≤2.5s</span>
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500"></span> Needs Work: 2.5-4s</span>
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500"></span> Poor: &gt;4s</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  LCP measures when the largest visible content element (usually a hero image or heading block) finishes rendering. It's the metric users "feel" most directly.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">How to Improve LCP:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Optimize and preload your hero image</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Reduce server response time (TTFB)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Eliminate render-blocking resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use a CDN for faster delivery</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* INP */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">INP (Interaction to Next Paint)</h3>
                    <p className="text-muted-foreground">Measures interactivity (replaced FID in 2024)</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm mb-2">
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span> Good: ≤200ms</span>
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500"></span> Needs Work: 200-500ms</span>
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500"></span> Poor: &gt;500ms</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  INP measures responsiveness throughout the entire page lifecycle, not just the first interaction. It captures how quickly your page responds to clicks, taps, and keyboard input.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">How to Improve INP:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Break up long JavaScript tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Defer non-critical JavaScript</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Reduce JavaScript bundle size</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use web workers for heavy processing</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CLS */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">CLS (Cumulative Layout Shift)</h3>
                    <p className="text-muted-foreground">Measures visual stability</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm mb-2">
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span> Good: ≤0.1</span>
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500"></span> Needs Work: 0.1-0.25</span>
                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500"></span> Poor: &gt;0.25</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  CLS quantifies how much content shifts around as the page loads. Those annoying moments when you're about to click a button and it jumps? That's layout shift, and Google penalizes it.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">How to Improve CLS:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Set explicit width/height on images and videos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Reserve space for ads and embeds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Avoid inserting content above existing content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use font-display: swap for web fonts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Image Optimization */}
            <section className="mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Image className="w-8 h-8 text-accent" />
                Image Optimization: The Biggest Quick Win
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Images typically account for <strong>50-70% of a page's total weight</strong>. If you only optimize one thing, optimize images for web—the impact is immediate and dramatic.
              </p>

              <h3 className="font-display text-xl font-bold text-foreground mb-4">The Modern Image Stack</h3>

              <p className="text-lg leading-relaxed mb-6">
                Here's the approach I use for every site. It sounds like a lot, but once you set it up, it's automatic:
              </p>

              <div className="bg-muted/50 rounded-xl p-6 mb-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground">Use WebP (or AVIF) format</strong>
                      <p className="text-muted-foreground text-sm mt-1">WebP delivers 25-35% smaller files than JPEG at equivalent quality. AVIF is even better but has less browser support. Always include a fallback.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground">Implement lazy loading</strong>
                      <p className="text-muted-foreground text-sm mt-1">Add <code className="bg-muted px-1 rounded">loading="lazy"</code> to images below the fold. This defers loading until users scroll near them, dramatically reducing initial page weight.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground">Use responsive srcset</strong>
                      <p className="text-muted-foreground text-sm mt-1">Serve different image sizes based on device width. A phone doesn't need a 2000px image meant for desktop.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground">Set explicit dimensions</strong>
                      <p className="text-muted-foreground text-sm mt-1">Always include width and height attributes. This prevents CLS by reserving space before the image loads.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong className="text-foreground">Preload critical images</strong>
                      <p className="text-muted-foreground text-sm mt-1">Hero images affect LCP directly. Use <code className="bg-muted px-1 rounded">&lt;link rel="preload"&gt;</code> to prioritize them.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Don't Over-Compress</h4>
                    <p className="text-muted-foreground">
                      Quality 80-85% is the sweet spot for most images. Going lower saves marginal bytes but creates visible artifacts that make your site look cheap. The goal is optimization, not destruction.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-4">Image Optimization Tools</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-4 font-bold border-b border-border">Tool</th>
                      <th className="text-left p-4 font-bold border-b border-border">Best For</th>
                      <th className="text-left p-4 font-bold border-b border-border">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Squoosh</td>
                      <td className="p-4">Manual optimization, quality comparison</td>
                      <td className="p-4">Free</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/30">
                      <td className="p-4 font-medium">ShortPixel</td>
                      <td className="p-4">WordPress automation</td>
                      <td className="p-4">Freemium</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Cloudinary</td>
                      <td className="p-4">Dynamic optimization at scale</td>
                      <td className="p-4">Freemium</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium">ImageOptim</td>
                      <td className="p-4">Mac local batch processing</td>
                      <td className="p-4">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <figure className="mb-8">
                <div className="rounded-xl overflow-hidden">
                  <OptimizedImage 
                    src={imageOptimizationWorkflow}
                    alt="Image optimization workflow showing before and after comparison - 2MB unoptimized image reduced to 500KB optimized for web use"
                    className="w-full"
                    objectFit="contain"
                  />
                </div>
                <figcaption className="text-center text-sm text-muted-foreground mt-3">
                  Before vs After: Image optimization reduces file size by 75% while maintaining quality
                </figcaption>
              </figure>
            </section>

            {/* Caching Strategies */}
            <section className="mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-accent" />
                Caching for Faster Websites: A Complete Breakdown
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Caching is the art of not doing work twice. When implemented correctly, caching for faster websites can reduce page load time by 60-80% for returning visitors and significantly reduce server load.
              </p>

              <h3 className="font-display text-xl font-bold text-foreground mb-4">Types of Caching (And When to Use Each)</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-accent" />
                    Browser Caching
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Stores static files (CSS, JS, images) in visitors' browsers. Subsequent page views load these locally instead of re-downloading.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 text-sm">
                    <strong>Implementation:</strong> Set Cache-Control headers with appropriate max-age values. Static assets can often be cached for 1 year (31536000 seconds).
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Server className="w-5 h-5 text-accent" />
                    Server-Side Caching
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Stores rendered pages or database queries on the server, avoiding repeated processing. Critical for dynamic sites like WordPress.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 text-sm">
                    <strong>Types:</strong> Page caching (stores full HTML), object caching (stores database queries), opcode caching (stores compiled PHP).
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-accent" />
                    CDN Caching
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Stores content on globally distributed edge servers. Users receive content from the nearest location, reducing latency dramatically.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 text-sm">
                    <strong>Best for:</strong> Static assets, media files, and full-page caching for global audiences.
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">WordPress Speed Optimization Tip</h4>
                    <p className="text-muted-foreground">
                      For WordPress sites, use a combination approach: WP Super Cache or W3 Total Cache for page caching, Redis or Memcached for object caching, and Cloudflare for CDN. This stack handles 90% of WordPress speed optimization needs.
                    </p>
                  </div>
                </div>
              </div>

              <figure className="mb-8">
                <div className="rounded-xl overflow-hidden">
                  <OptimizedImage 
                    src={cachingArchitecture}
                    alt="Multi-layer caching architecture diagram showing browser cache, CDN cache, and reverse proxy cache connecting to main server"
                    className="w-full"
                    objectFit="contain"
                  />
                </div>
                <figcaption className="text-center text-sm text-muted-foreground mt-3">
                  Multi-layer caching: Browser, CDN, and reverse proxy caches working together
                </figcaption>
              </figure>
            </section>

            {/* CDN Deep Dive */}
            <section className="mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-accent" />
                CDN for Faster Website: Why Location Matters
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Physics is the ultimate speed limit. Data can only travel so fast through cables, and the farther your server is from your user, the slower the response. A CDN (Content Delivery Network) solves this by putting copies of your content everywhere.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Using a CDN for faster website performance typically reduces latency by 50-70% for users far from your origin server. For global audiences, it's non-negotiable.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-4 font-bold border-b border-border">CDN Provider</th>
                      <th className="text-left p-4 font-bold border-b border-border">Best For</th>
                      <th className="text-left p-4 font-bold border-b border-border">Free Tier</th>
                      <th className="text-left p-4 font-bold border-b border-border">Notable Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Cloudflare</td>
                      <td className="p-4">Most websites</td>
                      <td className="p-4 text-green-600 font-medium">Generous</td>
                      <td className="p-4">DDoS protection, analytics, page rules</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/30">
                      <td className="p-4 font-medium">Bunny CDN</td>
                      <td className="p-4">Cost-conscious, video</td>
                      <td className="p-4">Trial only</td>
                      <td className="p-4">Pay-as-you-go, video optimization</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Fastly</td>
                      <td className="p-4">Enterprise, edge compute</td>
                      <td className="p-4">Limited</td>
                      <td className="p-4">Real-time analytics, instant purge</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium">AWS CloudFront</td>
                      <td className="p-4">AWS-heavy stacks</td>
                      <td className="p-4">1TB/month</td>
                      <td className="p-4">Deep AWS integration</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                <strong>My recommendation:</strong> Start with Cloudflare's free tier. It's genuinely excellent for most websites and includes security features that paid CDNs charge extra for. Graduate to Bunny CDN or Fastly if you need specific features or better video performance.
              </p>
            </section>

            {/* Code Optimization */}
            <section className="mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileCode className="w-8 h-8 text-accent" />
                Minify CSS, JavaScript, and HTML
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Every character in your code takes time to download and parse. Minification removes unnecessary characters—whitespace, comments, long variable names—without changing functionality. It's free performance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="font-bold text-foreground mb-3">CSS</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Remove unused styles (PurgeCSS)</li>
                    <li>• Combine media queries</li>
                    <li>• Minify with cssnano</li>
                    <li>• Critical CSS inline</li>
                  </ul>
                  <div className="mt-4 text-xs text-accent">Typical savings: 20-40%</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="font-bold text-foreground mb-3">JavaScript</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tree shaking (remove unused)</li>
                    <li>• Code splitting</li>
                    <li>• Minify with Terser</li>
                    <li>• Defer non-critical scripts</li>
                  </ul>
                  <div className="mt-4 text-xs text-accent">Typical savings: 30-60%</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="font-bold text-foreground mb-3">HTML</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Remove comments</li>
                    <li>• Collapse whitespace</li>
                    <li>• Remove optional tags</li>
                    <li>• Minify inline CSS/JS</li>
                  </ul>
                  <div className="mt-4 text-xs text-accent">Typical savings: 10-20%</div>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Third-Party Scripts Are the Silent Killer</h4>
                    <p className="text-muted-foreground">
                      Analytics, chat widgets, ad networks: each third-party script adds weight and blocking time you can't control. Audit these regularly. Remove what you don't actually use. Load the rest asynchronously.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Server Optimization */}
            <section className="mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Server className="w-8 h-8 text-accent" />
                Reduce Server Response Time (TTFB)
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Time to First Byte (TTFB) measures how quickly your server responds to a request. It's the foundation of all other speed metrics: if your server is slow, nothing else matters.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                <strong>Target TTFB: Under 200ms.</strong> Anything over 600ms is hurting your LCP scores significantly.
              </p>

              <div className="bg-muted/50 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">How to Reduce Server Response Time</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Upgrade your hosting</strong>
                      <p className="text-sm text-muted-foreground">Shared hosting is often the bottleneck. Fast web hosting for speed means VPS or managed hosting with SSD storage and optimized configurations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Enable server-side caching</strong>
                      <p className="text-sm text-muted-foreground">Page caching bypasses PHP/database processing entirely. A cached page can be served in 20ms vs 500ms+ for dynamic generation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Optimize database queries</strong>
                      <p className="text-sm text-muted-foreground">Slow queries compound quickly. Index properly, remove post revisions, clean transients. Consider Redis for query caching.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Use PHP 8.x</strong>
                      <p className="text-sm text-muted-foreground">PHP 8 is 15-25% faster than PHP 7.4. If your host offers it and your plugins support it, upgrade immediately.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Choose a server close to your audience</strong>
                      <p className="text-sm text-muted-foreground">A server in New York serving Australian users adds 200+ms of latency minimum. Use a CDN or choose strategic server locations.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                For hosting recommendations that prioritize speed, check our <Link to="/best-vps-hosting-2026" className="text-accent hover:underline font-medium">VPS hosting comparison</Link> or <Link to="/cloud-vs-shared-hosting" className="text-accent hover:underline font-medium">cloud vs shared hosting guide</Link>.
              </p>
            </section>

            {/* Speed Optimization Checklist */}
            <section className="mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Website Speed Optimization Checklist
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Use this speed optimization checklist to systematically improve your site. I've organized it by impact—start at the top and work down.
              </p>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 mb-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">🚀 High Impact (Do First)</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-accent rounded flex-shrink-0 mt-0.5"></div>
                    <span>Convert images to WebP format</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-accent rounded flex-shrink-0 mt-0.5"></div>
                    <span>Implement lazy loading for below-fold images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-accent rounded flex-shrink-0 mt-0.5"></div>
                    <span>Enable page caching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-accent rounded flex-shrink-0 mt-0.5"></div>
                    <span>Set up a CDN (Cloudflare free works great)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-accent rounded flex-shrink-0 mt-0.5"></div>
                    <span>Upgrade to better hosting if TTFB &gt; 400ms</span>
                  </li>
                </ul>

                <h3 className="font-display text-xl font-bold text-foreground mb-6">⚡ Medium Impact</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-border rounded flex-shrink-0 mt-0.5"></div>
                    <span>Minify CSS and JavaScript</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-border rounded flex-shrink-0 mt-0.5"></div>
                    <span>Defer non-critical JavaScript</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-border rounded flex-shrink-0 mt-0.5"></div>
                    <span>Preload critical assets (hero image, fonts)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-border rounded flex-shrink-0 mt-0.5"></div>
                    <span>Remove unused CSS (PurgeCSS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-border rounded flex-shrink-0 mt-0.5"></div>
                    <span>Set browser caching headers</span>
                  </li>
                </ul>

                <h3 className="font-display text-xl font-bold text-foreground mb-6">🔧 Fine-Tuning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-border rounded flex-shrink-0 mt-0.5"></div>
                    <span>Set explicit image dimensions (fixes CLS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-border rounded flex-shrink-0 mt-0.5"></div>
                    <span>Use font-display: swap for web fonts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-border rounded flex-shrink-0 mt-0.5"></div>
                    <span>Enable Gzip/Brotli compression</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-border rounded flex-shrink-0 mt-0.5"></div>
                    <span>Audit and remove unnecessary plugins/scripts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-border rounded flex-shrink-0 mt-0.5"></div>
                    <span>Optimize database (clean revisions, transients)</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Testing Tools */}
            <section className="mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Google PageSpeed Insights and Other Testing Tools
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                You can't improve what you don't measure. Use these tools to establish baselines, identify issues, and verify that your optimizations actually worked.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Gauge className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Google PageSpeed Insights</h4>
                      <p className="text-sm text-muted-foreground mb-2">The gold standard. Shows Core Web Vitals from real users (CrUX data) plus lab data with specific recommendations.</p>
                      <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">pagespeed.web.dev →</a>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">GTmetrix</h4>
                      <p className="text-sm text-muted-foreground mb-2">Detailed waterfall analysis showing exactly what's loading and when. Great for finding bottlenecks.</p>
                      <a href="https://gtmetrix.com/" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">gtmetrix.com →</a>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">WebPageTest</h4>
                      <p className="text-sm text-muted-foreground mb-2">Most detailed testing available. Test from different locations, connections, and devices. The filmstrip view is incredibly useful.</p>
                      <a href="https://www.webpagetest.org/" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">webpagetest.org →</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Pro Tip: Test Multiple Times</h4>
                    <p className="text-muted-foreground">
                      Single test results can be misleading due to server load, network variability, and caching states. Run each test 3-5 times and look at the median. Also test with cache cleared AND with cache warm.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-3">What is a good website loading speed?</h3>
                  <p className="text-muted-foreground">
                    Aim for under 2.5 seconds total load time, with LCP (Largest Contentful Paint) under 2.5 seconds. Sub-1-second LCP is excellent. Anything over 4 seconds is problematic—you're losing significant traffic and rankings.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-3">How does website speed affect SEO?</h3>
                  <p className="text-muted-foreground">
                    Speed is a direct ranking factor through Core Web Vitals. Beyond rankings, slow sites have higher bounce rates, lower engagement, and reduced crawl efficiency. Google has confirmed that page experience signals (including speed) influence search visibility.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-3">What's the fastest way to improve website speed?</h3>
                  <p className="text-muted-foreground">
                    The three highest-impact quick wins are: (1) optimize and lazy-load images, (2) enable caching, and (3) use a CDN. These three changes alone can reduce page load time by 40-60% without touching code.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-3">Does hosting affect website speed?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. Your host controls TTFB (server response time), which is the foundation of all other metrics. Premium hosts deliver TTFB under 200ms; cheap shared hosting can exceed 800ms. If your TTFB is high, no amount of frontend optimization will fully compensate.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-3">Should I use a CDN for a small website?</h3>
                  <p className="text-muted-foreground">
                    Yes. Cloudflare's free tier is excellent and includes DDoS protection, basic security, and global CDN coverage. Even for small sites, the latency reduction for visitors outside your server's region is worthwhile. There's no reason not to use one.
                  </p>
                </div>
              </div>
            </section>

            {/* Final Recommendations */}
            <section className="mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                The Bottom Line
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Website speed optimization isn't a one-time project—it's an ongoing practice. Technologies evolve, content changes, and new performance challenges emerge. But the fundamentals stay consistent.
              </p>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 mb-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">My Priority Order for Most Websites:</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
                    <span><strong>Get good hosting</strong>—this is your foundation. If TTFB is poor, everything else is a band-aid.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
                    <span><strong>Optimize images</strong>—biggest weight reduction for least effort.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
                    <span><strong>Enable caching + CDN</strong>—dramatic improvements for returning visitors and global users.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
                    <span><strong>Clean up code</strong>—minify, defer, remove unused scripts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
                    <span><strong>Fine-tune Core Web Vitals</strong>—address specific LCP, INP, and CLS issues.</span>
                  </li>
                </ol>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Follow this order, measure your progress with PageSpeed Insights, and you'll join the top 10% of websites in performance. Your users will thank you with their attention, engagement, and conversions.
              </p>

              <p className="text-lg leading-relaxed">
                Speed is a competitive advantage. The sites that load fastest win more traffic, more customers, and more growth. Start optimizing today.
              </p>
            </section>

            {/* Related Articles */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/best-web-hosting-2026" className="group bg-card border border-border rounded-xl p-5 hover:border-accent transition-colors">
                  <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2">Top 10 Web Hosting Providers for 2026</h3>
                  <p className="text-sm text-muted-foreground">Find hosting that won't slow you down.</p>
                </Link>
                <Link to="/best-vps-hosting-2026" className="group bg-card border border-border rounded-xl p-5 hover:border-accent transition-colors">
                  <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2">Best VPS Hosting Providers 2026</h3>
                  <p className="text-sm text-muted-foreground">VPS for serious performance needs.</p>
                </Link>
                <Link to="/cloud-vs-shared-hosting" className="group bg-card border border-border rounded-xl p-5 hover:border-accent transition-colors">
                  <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2">Cloud vs Shared Hosting Explained</h3>
                  <p className="text-sm text-muted-foreground">Which delivers better performance?</p>
                </Link>
                <Link to="/web-hosting-security-guide" className="group bg-card border border-border rounded-xl p-5 hover:border-accent transition-colors">
                  <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2">Essential Web Hosting Security Features</h3>
                  <p className="text-sm text-muted-foreground">Security that doesn't sacrifice speed.</p>
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-muted/50 py-16 mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready for Lightning-Fast Hosting?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your hosting is the foundation of website speed. Compare providers optimized for performance.
            </p>
            <Link 
              to="/best-web-hosting-2026" 
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Compare Fast Hosting Providers
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default WebsiteSpeedOptimization;
