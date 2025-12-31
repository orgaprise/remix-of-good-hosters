import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
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
    question: "Do I need SSL certification for my website?",
    answer: "Yes, SSL (Secure Sockets Layer) certification is essential. It encrypts data between your visitors and your server, protecting sensitive information. Google also ranks SSL-secured sites higher in search results, and browsers display 'Not Secure' warnings for sites without SSL. Many hosting providers now include free SSL certificates with their plans."
  },
  {
    question: "Can I switch hosting providers later?",
    answer: "Absolutely. Website migration is common and many hosting providers offer free migration services to help you transfer your site. Before switching, ensure you have backups of all files and databases. The process typically involves transferring files, updating DNS settings, and testing everything works correctly on the new server."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked
            <span className="text-gradient block">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about web hosting. Can't find the answer you're looking for? Feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow duration-200"
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
      </div>
    </section>
  );
};

export default FAQ;
