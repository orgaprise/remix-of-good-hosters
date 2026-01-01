import { Twitter, Linkedin, Youtube, Github } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.webp";

const footerLinks = {
  services: [
    { label: "Hosting Reviews", href: "/blog" },
    { label: "Comparison Tools", href: "/cloud-vs-shared-hosting" },
    { label: "Migration Help", href: "/contact" },
    { label: "Consultation", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/website-speed-optimization-guide" },
    { label: "Tutorials", href: "/ssl-certificates-guide" },
    { label: "FAQ", href: "/#faq" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Hosting", href: "/hosting" },
    { label: "Help Center", href: "/help" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Disclosure", href: "/disclosure" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/goodhosters", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/goodhosters", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@goodhosters", label: "YouTube" },
  { icon: Github, href: "https://github.com/goodhosters", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="bg-gradient-to-b from-secondary/50 to-background py-14 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 mb-12">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-5 group">
                <div className="relative">
                  <img src={logoIcon} alt="GoodHosters Logo" className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold text-foreground leading-tight">
                    GOOD<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-brand-coral">HOSTERS</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
                    Expert Hosting Advice
                  </span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm mb-5 max-w-xs leading-relaxed">
                Your trusted partner in navigating the world of web hosting. Expert advice, unbiased reviews.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-200"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-muted-foreground hover:text-accent text-sm transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2.5">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-muted-foreground hover:text-accent text-sm transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-muted-foreground hover:text-accent text-sm transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-muted-foreground hover:text-accent text-sm transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-muted-foreground text-sm">
              © 2026 Good Hosters. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Made with expertise for your hosting success.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
