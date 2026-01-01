import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, MessageSquare, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  { value: "general", label: "General Inquiry" },
  { value: "hosting", label: "Hosting Recommendations" },
  { value: "partnership", label: "Partnership Opportunities" },
  { value: "advertising", label: "Advertising & Sponsorship" },
  { value: "feedback", label: "Website Feedback" },
  { value: "other", label: "Other" },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [formLoadTime] = useState(() => Date.now());
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Bot detection: honeypot field should be empty
    if (honeypot) {
      // Silently reject - don't give bots feedback
      setIsSubmitted(true);
      return;
    }

    // Bot detection: form submitted too quickly (less than 3 seconds)
    const timeSpent = Date.now() - formLoadTime;
    if (timeSpent < 3000) {
      toast({
        title: "Please slow down",
        description: "Please take a moment to fill out the form properly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Get subject label for better readability
      const subjectLabel = subjects.find(s => s.value === data.subject)?.label || data.subject;
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "fa4da082-16ea-4558-b633-87262c53f99c",
          name: data.name,
          email: data.email,
          subject: `[GoodHosters] ${subjectLabel}`,
          message: data.message,
          from_name: "GoodHosters Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        reset();
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24-48 hours.",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email us directly at contact@goodhosters.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactSchema_ld = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact GoodHosters",
    "description": "Get in touch with our web hosting experts for recommendations, partnerships, or general inquiries.",
    "url": "https://goodhosters.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "GoodHosters",
      "email": "contact@goodhosters.com",
      "telephone": "+1-555-123-4567",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    }
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
        "name": "Contact",
        "item": "https://goodhosters.com/contact"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get Expert Hosting Advice | GoodHosters</title>
        <meta name="description" content="Have questions about web hosting? Contact our experts for personalized recommendations, partnership inquiries, or general support. We respond within 24 hours." />
        <meta name="keywords" content="contact hosting experts, web hosting help, hosting recommendations, hosting support" />
        <link rel="canonical" href="https://goodhosters.com/contact" />
        <meta property="og:title" content="Contact Us - GoodHosters" />
        <meta property="og:description" content="Get in touch with our web hosting experts for personalized recommendations and support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goodhosters.com/contact" />
        <meta property="og:image" content="https://goodhosters.com/og-image.png" />
        <meta name="twitter:image" content="https://goodhosters.com/og-image.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us - GoodHosters" />
        <meta name="twitter:description" content="Get in touch with our web hosting experts." />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema_ld)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Get In Touch
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Contact <span className="text-gradient">Us</span>
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
                Have questions about web hosting? Our experts are here to help you find the perfect solution for your needs.
              </p>
            </div>
          </div>
        </section>


        {/* Main Contact Section */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">Send a Message</h2>
                    <p className="text-muted-foreground text-sm">We'll respond within 24-48 hours</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">Thank you for reaching out. We'll get back to you soon.</p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          {...register("name")}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          {...register("email")}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Honeypot field - hidden from humans, bots will fill it */}
                    <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select onValueChange={(value) => setValue("subject", value)}>
                        <SelectTrigger className={errors.subject ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject.value} value={subject.value}>
                              {subject.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.subject && (
                        <p className="text-destructive text-sm">{errors.subject.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        {...register("message")}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {/* Contact Info under form */}
                    <div className="pt-6 border-t border-border mt-2">
                      <p className="text-sm text-muted-foreground text-center mb-4">Or reach us directly</p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                        <a 
                          href="mailto:contact@goodhosters.com" 
                          className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span>contact@goodhosters.com</span>
                        </a>
                      </div>
                    </div>
                  </form>
                )}
              </div>

              {/* FAQ / Additional Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-muted-foreground">
                    Find quick answers to common questions below, or send us a message for personalized help.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: "How quickly do you respond to inquiries?",
                      a: "We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please mention it in your message subject.",
                    },
                    {
                      q: "Do you provide personalized hosting recommendations?",
                      a: "Absolutely! Share your website requirements, traffic expectations, and budget, and we'll recommend the best hosting solutions for your needs.",
                    },
                    {
                      q: "Are your hosting reviews unbiased?",
                      a: "Absolutely. Our team includes experienced software engineers and DevOps professionals who work hands-on in the industry. We personally test each hosting provider with real projects to deliver honest, technically accurate reviews.",
                    },
                    {
                      q: "Can I request a specific hosting provider review?",
                      a: "Definitely! If there's a hosting provider you'd like us to review, let us know through the contact form and we'll consider adding it.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-muted/30 border border-border rounded-xl p-5 hover:bg-muted/50 transition-colors"
                    >
                      <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>

                {/* Trust Signals */}
                <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-foreground mb-3">Why Trust GoodHosters?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>5+ years of web hosting industry experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Hands-on testing of 50+ hosting providers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Transparent methodology and real performance data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Community of 100,000+ monthly readers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
