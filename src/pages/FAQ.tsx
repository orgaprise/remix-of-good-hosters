import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Server, Shield, Zap, Globe, Mail, ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';

const faqCategories = [
  {
    title: "Web Hosting Basics",
    icon: Server,
    faqs: [
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
        answer: "Consider your website's purpose, expected traffic, technical requirements, and budget. For a personal blog or small business site, shared hosting works well. Growing businesses with moderate traffic should consider VPS hosting. Large enterprises or high-traffic sites benefit from dedicated or cloud hosting. Our recommendation tool can help you find the perfect match."
      },
      {
        question: "What is uptime and why does it matter?",
        answer: "Uptime refers to the percentage of time your website is accessible online. A 99.9% uptime guarantee means your site may be down for about 8.76 hours per year. High uptime is crucial because downtime means lost visitors, revenue, and can damage your reputation. We recommend hosts offering at least 99.9% uptime guarantees."
      },
      {
        question: "Can I switch hosting providers later?",
        answer: "Absolutely. Website migration is common and many hosting providers offer free migration services to help you transfer your site. Before switching, ensure you have backups of all files and databases. The process typically involves transferring files, updating DNS settings, and testing everything works correctly on the new server."
      }
    ]
  },
  {
    title: "Security & SSL",
    icon: Shield,
    faqs: [
      {
        question: "Do I need SSL certification for my website?",
        answer: "Yes, SSL (Secure Sockets Layer) certification is essential. It encrypts data between your visitors and your server, protecting sensitive information. Google also ranks SSL-secured sites higher in search results, and browsers display 'Not Secure' warnings for sites without SSL. Many hosting providers now include free SSL certificates with their plans."
      },
      {
        question: "How do I protect my website from hackers?",
        answer: "Use strong passwords and two-factor authentication, keep all software updated, install security plugins or use a web application firewall (WAF), regularly back up your site, use SSL encryption, and choose a host with built-in security features like malware scanning and DDoS protection."
      },
      {
        question: "What is DDoS protection and do I need it?",
        answer: "DDoS (Distributed Denial of Service) protection defends your website against attacks that flood your server with traffic to take it offline. If your site handles transactions, has significant traffic, or is business-critical, DDoS protection is essential. Many quality hosts include basic DDoS protection in their plans."
      },
      {
        question: "What's the difference between free and paid SSL certificates?",
        answer: "Free SSL certificates (like Let's Encrypt) provide basic encryption and are suitable for most websites. Paid SSL certificates offer additional features like extended validation (EV), which displays your company name in the browser bar, warranty coverage, and better customer support. E-commerce sites often benefit from paid SSL for added trust."
      }
    ]
  },
  {
    title: "Performance & Speed",
    icon: Zap,
    faqs: [
      {
        question: "How can I make my website load faster?",
        answer: "Optimize images and use modern formats like WebP, enable caching, use a CDN (Content Delivery Network), minimize CSS/JavaScript files, choose a host with SSD storage and good server response times, and consider using a caching plugin if you're on WordPress."
      },
      {
        question: "What is a CDN and should I use one?",
        answer: "A CDN (Content Delivery Network) is a network of servers distributed globally that cache your website's static content. When visitors access your site, content is served from the nearest server, reducing load times. CDNs are beneficial for sites with global audiences or heavy traffic. Many hosts include CDN access in their plans."
      },
      {
        question: "What server specifications should I look for?",
        answer: "Key specifications include SSD storage (faster than HDD), adequate RAM (at least 1GB for small sites, more for larger ones), modern processors, and sufficient bandwidth for your expected traffic. Also consider the server location relative to your target audience for optimal performance."
      },
      {
        question: "Why is my website slow even with good hosting?",
        answer: "Slow websites can result from unoptimized images, too many plugins, poorly coded themes, no caching, large page sizes, external scripts, or database issues. Use tools like Google PageSpeed Insights to identify specific problems. Sometimes upgrading your hosting plan or optimizing your website code is necessary."
      }
    ]
  },
  {
    title: "Domains & DNS",
    icon: Globe,
    faqs: [
      {
        question: "What's the difference between a domain and hosting?",
        answer: "A domain is your website's address (e.g., example.com), while hosting is the server space where your website files are stored. You need both to have a functional website. Some providers offer both services together, while others specialize in one or the other."
      },
      {
        question: "How do I transfer my domain to a new registrar?",
        answer: "Unlock your domain at your current registrar, obtain the authorization/EPP code, initiate the transfer at your new registrar using that code, confirm the transfer via email, and wait for the process to complete (usually 5-7 days). Ensure your domain isn't within 60 days of registration or a previous transfer."
      },
      {
        question: "What are nameservers and how do I update them?",
        answer: "Nameservers are servers that translate domain names into IP addresses, directing traffic to your website. When changing hosts, you'll need to update nameservers at your domain registrar to point to your new host's nameservers. This process typically takes 24-48 hours to propagate globally."
      },
      {
        question: "Should I buy domain privacy protection?",
        answer: "Domain privacy protection hides your personal contact information from the public WHOIS database, reducing spam and protecting your privacy. It's recommended for personal websites and small businesses. Some registrars include it free, while others charge an annual fee."
      }
    ]
  },
  {
    title: "Email Hosting",
    icon: Mail,
    faqs: [
      {
        question: "What is professional email hosting?",
        answer: "Professional email hosting lets you use custom email addresses with your domain (e.g., you@yourbusiness.com) instead of free email providers. It provides better deliverability, more storage, advanced features, and a more professional image for your business."
      },
      {
        question: "Can I use my hosting provider for email?",
        answer: "Most web hosts offer email hosting as part of their plans. However, for businesses requiring advanced features, higher deliverability, or large storage, dedicated email services like Google Workspace or Microsoft 365 are often better choices, even if they cost extra."
      },
      {
        question: "How do I set up email with my domain?",
        answer: "First, ensure your hosting plan includes email or sign up for a dedicated email service. Then create mailboxes through your control panel, configure DNS records (MX, SPF, DKIM), and set up email clients on your devices. Most hosts provide setup guides or assistance."
      },
      {
        question: "Why are my emails going to spam?",
        answer: "Common causes include missing or incorrect SPF, DKIM, and DMARC records, sending from a new domain without building reputation, content that triggers spam filters, being on blacklists, or using shared IP addresses with poor reputation. Proper authentication and gradually building sending reputation helps."
      }
    ]
  }
];

const FAQPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
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
        "name": "FAQ",
        "item": "https://goodhosters.com/faq"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Web Hosting FAQ | Good Hosters</title>
        <meta name="description" content="Find answers to common web hosting questions. Learn about shared vs VPS hosting, SSL certificates, website security, domain management, email hosting, and more." />
        <meta name="keywords" content="web hosting FAQ, hosting questions, SSL FAQ, domain FAQ, VPS questions, website security FAQ" />
        <link rel="canonical" href="https://goodhosters.com/faq" />
        <meta property="og:title" content="Web Hosting FAQ | Good Hosters" />
        <meta property="og:description" content="Find answers to common web hosting questions about hosting types, security, domains, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goodhosters.com/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Hosting FAQ | Good Hosters" />
        <meta name="twitter:description" content="Find answers to common web hosting questions." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
                <li className="text-foreground font-medium">FAQ</li>
              </ol>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <HelpCircle className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Help Center
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Frequently Asked
                <span className="text-gradient block">Questions</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need to know about web hosting, domains, security, and more. 
                Can't find your answer? Our team is here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map((category) => (
                <a
                  key={category.title}
                  href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                >
                  <category.icon className="w-4 h-4" />
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              {faqCategories.map((category) => (
                <div key={category.title} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {category.title}
                    </h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.title}-${index}`}
                        className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg data-[state=open]:border-accent/30 transition-all duration-200"
                      >
                        <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-accent transition-colors py-5 [&[data-state=open]>svg]:text-accent">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our hosting experts are ready to help you find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="rounded-full" asChild>
                  <Link to="/contact">
                    Contact Support
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link to="/hosting-finder">
                    Find Your Perfect Host
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default FAQPage;
