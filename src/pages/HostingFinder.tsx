import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  ArrowLeft, 
  Server, 
  Users, 
  Zap, 
  Globe, 
  ShoppingCart, 
  Code, 
  CheckCircle, 
  Mail, 
  Rocket, 
  HeadphonesIcon, 
  DollarSign, 
  Gauge,
  Shield,
  Database,
  HardDrive,
  Building2,
  Briefcase,
  Palette,
  FileText,
  Video,
  MessageSquare,
  Clock,
  TrendingUp,
  MapPin,
  Lock,
  RefreshCcw,
  Wrench,
  BarChart3,
  ExternalLink,
  Star,
  Award,
  Lightbulb,
  Target,
  CircleDollarSign,
  Cpu
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type Step = 'purpose' | 'type' | 'platform' | 'features' | 'traffic' | 'growth' | 'security' | 'support' | 'experience' | 'location' | 'budget' | 'timeline' | 'email' | 'result';

interface Answers {
  purpose: string;
  type: string;
  platform: string;
  features: string[];
  traffic: string;
  growth: string;
  security: string;
  support: string;
  experience: string;
  location: string;
  budget: string;
  timeline: string;
  email: string;
}

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });

const questions = {
  purpose: {
    question: "What's the main purpose of your website?",
    subtitle: "Help us understand your primary goal",
    multiSelect: false,
    tip: "Your website's purpose determines the type of hosting you need. E-commerce sites need more resources than simple blogs.",
    options: [
      { value: "personal", label: "Personal / Hobby", icon: Palette, description: "Blog, portfolio, or personal project" },
      { value: "business", label: "Business / Professional", icon: Briefcase, description: "Company website, services showcase" },
      { value: "ecommerce", label: "E-commerce / Sales", icon: ShoppingCart, description: "Sell products or services online" },
      { value: "community", label: "Community / Membership", icon: Users, description: "Forums, memberships, social platform" },
      { value: "media", label: "Media / Content", icon: Video, description: "Streaming, podcasts, large media files" },
      { value: "webapp", label: "Web Application / SaaS", icon: Code, description: "Custom application, software service" },
    ]
  },
  type: {
    question: "What type of content will dominate your site?",
    subtitle: "This helps us recommend the right storage and bandwidth",
    multiSelect: false,
    tip: "Video and image-heavy sites need more bandwidth and storage. Text-based sites can run efficiently on basic plans.",
    options: [
      { value: "text", label: "Mostly Text & Articles", icon: FileText, description: "Blogs, news, documentation" },
      { value: "images", label: "Image-Heavy", icon: Palette, description: "Photography, galleries, portfolios" },
      { value: "video", label: "Video & Streaming", icon: Video, description: "Videos, courses, live streams" },
      { value: "downloads", label: "Downloadable Files", icon: HardDrive, description: "Software, PDFs, digital products" },
      { value: "interactive", label: "Interactive / Dynamic", icon: Code, description: "Real-time apps, dashboards" },
      { value: "mixed", label: "Mixed Content", icon: Globe, description: "Variety of content types" },
    ]
  },
  platform: {
    question: "Which platform or technology will you use?",
    subtitle: "Choose the CMS or framework for your site",
    multiSelect: false,
    tip: "WordPress powers 40% of the web and has specialized hosting. Custom apps may need VPS or cloud hosting.",
    options: [
      { value: "wordpress", label: "WordPress", description: "Most popular CMS, easy to use" },
      { value: "woocommerce", label: "WooCommerce", description: "WordPress + E-commerce" },
      { value: "shopify", label: "Shopify", description: "Dedicated e-commerce platform" },
      { value: "magento", label: "Magento / Adobe Commerce", description: "Enterprise e-commerce" },
      { value: "drupal", label: "Drupal", description: "Advanced content management" },
      { value: "joomla", label: "Joomla", description: "Flexible CMS platform" },
      { value: "laravel", label: "Laravel / PHP", description: "Custom PHP development" },
      { value: "node", label: "Node.js / React / Vue", description: "Modern JavaScript stack" },
      { value: "python", label: "Python / Django", description: "Python web applications" },
      { value: "static", label: "Static Site Generator", description: "Hugo, Jekyll, Gatsby" },
      { value: "undecided", label: "Not Sure Yet", description: "Need recommendations" },
    ]
  },
  features: {
    question: "Which features are essential for you?",
    subtitle: "Select all that apply to your project",
    multiSelect: true,
    tip: "SSL is essential for security and SEO. Backups protect against data loss. CDN improves global loading speeds.",
    options: [
      { value: "ssl", label: "Free SSL Certificate", icon: Lock, description: "HTTPS security" },
      { value: "email", label: "Professional Email", icon: Mail, description: "Custom domain emails" },
      { value: "backup", label: "Automatic Backups", icon: RefreshCcw, description: "Daily/weekly backups" },
      { value: "cdn", label: "CDN / Global Speed", icon: Globe, description: "Faster loading worldwide" },
      { value: "staging", label: "Staging Environment", icon: Wrench, description: "Test before going live" },
      { value: "database", label: "Multiple Databases", icon: Database, description: "MySQL, PostgreSQL" },
      { value: "ssh", label: "SSH / SFTP Access", icon: Server, description: "Advanced file access" },
      { value: "cron", label: "Cron Jobs / Scheduling", icon: Clock, description: "Automated tasks" },
      { value: "analytics", label: "Built-in Analytics", icon: BarChart3, description: "Traffic monitoring" },
      { value: "multisite", label: "Multiple Websites", icon: Globe, description: "Host multiple domains" },
    ]
  },
  traffic: {
    question: "What's your expected monthly traffic?",
    subtitle: "Estimate your visitor numbers",
    multiSelect: false,
    tip: "Start with what you need now. Most hosts make it easy to upgrade as you grow.",
    options: [
      { value: "starter", label: "Just Starting Out", icon: Rocket, description: "Less than 5,000 visitors/month" },
      { value: "small", label: "Small but Growing", icon: TrendingUp, description: "5,000 - 25,000 visitors/month" },
      { value: "medium", label: "Medium Traffic", icon: Users, description: "25,000 - 100,000 visitors/month" },
      { value: "high", label: "High Traffic", icon: Gauge, description: "100,000 - 500,000 visitors/month" },
      { value: "enterprise", label: "Enterprise Level", icon: Building2, description: "500,000+ visitors/month" },
      { value: "spiky", label: "Unpredictable / Viral", icon: Zap, description: "Variable traffic spikes" },
    ]
  },
  growth: {
    question: "What's your growth expectation?",
    subtitle: "Plan for scalability",
    multiSelect: false,
    tip: "Cloud hosting offers the best scalability. Shared hosting is fine for stable, smaller sites.",
    options: [
      { value: "stable", label: "Steady & Stable", icon: BarChart3, description: "Consistent traffic, minimal growth" },
      { value: "moderate", label: "Moderate Growth", icon: TrendingUp, description: "10-30% growth per year" },
      { value: "rapid", label: "Rapid Expansion", icon: Rocket, description: "Aggressive growth planned" },
      { value: "uncertain", label: "Uncertain / Experimental", icon: MessageSquare, description: "Testing the waters" },
    ]
  },
  security: {
    question: "How important is security for your site?",
    subtitle: "Based on the sensitivity of your data",
    multiSelect: false,
    tip: "E-commerce sites handling payments need PCI compliance. All sites benefit from malware scanning and firewalls.",
    options: [
      { value: "basic", label: "Basic Protection", icon: Shield, description: "Standard SSL and firewall" },
      { value: "enhanced", label: "Enhanced Security", icon: Lock, description: "Malware scanning, DDoS protection" },
      { value: "critical", label: "Mission Critical", icon: Shield, description: "PCI compliance, advanced monitoring" },
      { value: "enterprise", label: "Enterprise Grade", icon: Building2, description: "Custom security requirements" },
    ]
  },
  support: {
    question: "What level of support do you need?",
    subtitle: "Choose based on your technical confidence",
    multiSelect: false,
    tip: "24/7 support is valuable for business-critical sites. Self-managed options are cheaper but require technical skills.",
    options: [
      { value: "self", label: "Self-Service is Fine", icon: Code, description: "Documentation and forums" },
      { value: "email", label: "Email / Ticket Support", icon: Mail, description: "Response within 24 hours" },
      { value: "live", label: "24/7 Live Chat & Phone", icon: MessageSquare, description: "Immediate assistance available" },
      { value: "managed", label: "Fully Managed", icon: HeadphonesIcon, description: "White-glove service, dedicated support" },
    ]
  },
  experience: {
    question: "What's your technical experience level?",
    subtitle: "Be honest - this helps us recommend the right solution",
    multiSelect: false,
    tip: "Beginners benefit from managed hosting with easy control panels. Developers may prefer VPS with full control.",
    options: [
      { value: "beginner", label: "Complete Beginner", icon: Users, description: "Never managed hosting before" },
      { value: "basic", label: "Basic Knowledge", icon: Globe, description: "Can follow tutorials, use cPanel" },
      { value: "intermediate", label: "Intermediate", icon: Server, description: "Comfortable with server settings" },
      { value: "advanced", label: "Developer / DevOps", icon: Code, description: "Full technical control preferred" },
    ]
  },
  location: {
    question: "Where is your target audience located?",
    subtitle: "Server location affects loading speed",
    multiSelect: false,
    tip: "Choose a server location closest to your audience. For global audiences, a CDN is essential.",
    options: [
      { value: "us", label: "United States", icon: MapPin, description: "North American audience" },
      { value: "europe", label: "Europe", icon: MapPin, description: "European audience" },
      { value: "asia", label: "Asia Pacific", icon: MapPin, description: "Asian audience" },
      { value: "global", label: "Worldwide", icon: Globe, description: "Global audience - CDN essential" },
      { value: "latam", label: "Latin America", icon: MapPin, description: "South American audience" },
      { value: "other", label: "Other / Multiple Regions", icon: Globe, description: "Specific regional needs" },
    ]
  },
  budget: {
    question: "What's your monthly hosting budget?",
    subtitle: "We'll find the best value in your range",
    multiSelect: false,
    tip: "Quality hosting starts around $3-5/month. Investing in good hosting saves money on fixes and lost customers.",
    options: [
      { value: "minimal", label: "Minimal Budget", icon: DollarSign, description: "$0 - $5/month" },
      { value: "economy", label: "Economy", icon: DollarSign, description: "$5 - $15/month" },
      { value: "standard", label: "Standard", icon: DollarSign, description: "$15 - $50/month" },
      { value: "premium", label: "Premium", icon: DollarSign, description: "$50 - $150/month" },
      { value: "enterprise", label: "Enterprise", icon: Building2, description: "$150+/month" },
      { value: "flexible", label: "Budget Flexible", icon: TrendingUp, description: "Best value matters more than price" },
    ]
  },
  timeline: {
    question: "When do you need to launch?",
    subtitle: "Some setups take longer than others",
    multiSelect: false,
    tip: "Most shared hosting is ready instantly. VPS and custom setups may need a few days for configuration.",
    options: [
      { value: "urgent", label: "ASAP", icon: Zap, description: "Within the next week" },
      { value: "soon", label: "Within a Month", icon: Clock, description: "1-4 weeks" },
      { value: "planning", label: "Still Planning", icon: FileText, description: "1-3 months" },
      { value: "future", label: "Future Project", icon: Rocket, description: "3+ months away" },
    ]
  },
};

const stepOrder: Step[] = ['purpose', 'type', 'platform', 'features', 'traffic', 'growth', 'security', 'support', 'experience', 'location', 'budget', 'timeline', 'email', 'result'];

// Expert tips for the left panel
const expertTips = [
  {
    icon: Shield,
    title: "Security First",
    description: "Always choose a host with free SSL, automated backups, and malware protection."
  },
  {
    icon: Gauge,
    title: "Speed Matters",
    description: "A 1-second delay in page load can reduce conversions by 7%. Choose fast servers."
  },
  {
    icon: TrendingUp,
    title: "Plan for Growth",
    description: "Pick a host that makes it easy to upgrade as your traffic increases."
  },
  {
    icon: HeadphonesIcon,
    title: "Support Quality",
    description: "24/7 expert support can save you hours of frustration when issues arise."
  },
  {
    icon: CircleDollarSign,
    title: "True Cost",
    description: "Watch for renewal prices - introductory rates often increase significantly."
  },
  {
    icon: Cpu,
    title: "Resource Allocation",
    description: "VPS hosting guarantees resources. Shared hosting can slow during peak times."
  }
];

interface Recommendation {
  name: string;
  description: string;
  price: string;
  features: string[];
  pros: string[];
  cons: string[];
  link: string;
  rating: number;
  badge?: string;
}

const getRecommendation = (answers: Answers): Recommendation => {
  if (answers.traffic === 'enterprise' || answers.budget === 'enterprise' || answers.security === 'enterprise') {
    return {
      name: "Cloudways",
      description: "Enterprise-grade managed cloud hosting with unlimited scalability, advanced security, and dedicated support.",
      price: "From $14/mo",
      features: ["Managed Cloud (AWS, GCP, DigitalOcean)", "Auto-scaling", "Advanced Caching", "24/7 Expert Support", "Free SSL & CDN"],
      pros: ["Unlimited scalability", "Choice of cloud providers", "Performance optimization"],
      cons: ["Higher starting price", "No email hosting included"],
      link: "#",
      rating: 4.8,
      badge: "Enterprise Choice"
    };
  }

  if (answers.purpose === 'ecommerce' || answers.platform === 'woocommerce' || answers.platform === 'magento') {
    if (answers.budget === 'premium' || answers.traffic === 'high') {
      return {
        name: "Cloudways",
        description: "High-performance managed cloud hosting perfect for demanding e-commerce stores.",
        price: "From $14/mo",
        features: ["Optimized for WooCommerce/Magento", "Free SSL & CDN", "Auto-scaling", "Advanced Caching", "24/7 Support"],
        pros: ["Excellent performance", "Scalable infrastructure", "Great for high-traffic stores"],
        cons: ["No email hosting", "Steeper learning curve"],
        link: "#",
        rating: 4.8,
        badge: "E-commerce Best"
      };
    }
    return {
      name: "SiteGround",
      description: "Excellent WooCommerce hosting with top-tier support and e-commerce optimizations.",
      price: "From $3.99/mo",
      features: ["WooCommerce Pre-installed", "Free SSL & CDN", "Daily Backups", "Free Site Migration", "24/7 Priority Support"],
      pros: ["Outstanding support", "E-commerce optimized", "Easy to use"],
      cons: ["Storage limits", "Renewal prices higher"],
      link: "#",
      rating: 4.7,
      badge: "Best for WooCommerce"
    };
  }

  if (answers.purpose === 'webapp' || answers.experience === 'advanced' || answers.platform === 'node' || answers.platform === 'python') {
    if (answers.traffic === 'high' || answers.traffic === 'enterprise') {
      return {
        name: "DigitalOcean",
        description: "Developer-friendly cloud infrastructure with complete control and predictable pricing.",
        price: "From $4/mo",
        features: ["Full Root Access", "SSD Storage", "Global Data Centers", "Kubernetes Support", "Developer API"],
        pros: ["Full control", "Predictable pricing", "Great documentation"],
        cons: ["Unmanaged - requires expertise", "No included support"],
        link: "#",
        rating: 4.6,
        badge: "Developer Favorite"
      };
    }
    return {
      name: "Cloudways",
      description: "Managed cloud platform combining developer flexibility with hassle-free server management.",
      price: "From $14/mo",
      features: ["Managed Cloud Servers", "Git Integration", "Staging Environments", "SSH & SFTP Access", "Performance Monitoring"],
      pros: ["Developer-friendly", "Managed infrastructure", "Great performance"],
      cons: ["Higher starting cost", "Limited to their stack"],
      link: "#",
      rating: 4.8,
      badge: "Best Managed Cloud"
    };
  }

  if (answers.features.includes('cdn') || answers.location === 'global') {
    return {
      name: "A2 Hosting",
      description: "Turbo servers deliver up to 20x faster page loads with global data centers and free CDN.",
      price: "From $2.99/mo",
      features: ["Turbo Servers (20x Faster)", "Free SSL & CDN", "Unlimited Storage", "Free Site Migration", "Money-back Guarantee"],
      pros: ["Exceptional speed", "Great value", "Excellent uptime"],
      cons: ["Support can be slow", "Renewal prices increase"],
      link: "#",
      rating: 4.5,
      badge: "Speed Champion"
    };
  }

  if (answers.support === 'live' || answers.support === 'managed') {
    return {
      name: "SiteGround",
      description: "Industry-leading customer support with 24/7 live chat, phone, and ticket assistance.",
      price: "From $3.99/mo",
      features: ["24/7 Priority Support", "Free SSL & CDN", "Daily Backups", "Staging Environment", "Free Site Migration"],
      pros: ["Best-in-class support", "Fast response times", "Knowledgeable team"],
      cons: ["Limited storage", "Higher renewal rates"],
      link: "#",
      rating: 4.7,
      badge: "Best Support"
    };
  }

  if (answers.platform === 'wordpress') {
    if (answers.support === 'managed' || answers.experience === 'beginner') {
      return {
        name: "Bluehost",
        description: "Official WordPress recommended host with easy 1-click installation and beginner-friendly tools.",
        price: "From $2.95/mo",
        features: ["WordPress Recommended", "Free Domain (1 Year)", "Free SSL", "1-Click WordPress Install", "24/7 Support"],
        pros: ["Perfect for beginners", "WordPress optimized", "Free domain included"],
        cons: ["Basic performance", "Upselling during signup"],
        link: "#",
        rating: 4.4,
        badge: "WordPress Recommended"
      };
    }
  }

  if (answers.budget === 'minimal' || answers.budget === 'economy') {
    return {
      name: "Hostinger",
      description: "Best value hosting with excellent features, performance, and the industry's lowest prices.",
      price: "From $2.99/mo",
      features: ["Free SSL", "Free Domain", "Weekly Backups", "100GB SSD Storage", "24/7 Support"],
      pros: ["Unbeatable prices", "Good performance", "User-friendly"],
      cons: ["Support can be slow", "Some features limited"],
      link: "#",
      rating: 4.5,
      badge: "Best Value"
    };
  }

  return {
    name: "Hostinger",
    description: "Great all-around hosting with excellent value, solid performance, and user-friendly management.",
    price: "From $2.99/mo",
    features: ["Free SSL", "Free Domain", "Weekly Backups", "100GB SSD Storage", "24/7 Support"],
    pros: ["Best price-to-performance", "Easy to use", "Good for most sites"],
    cons: ["Premium features cost extra", "Support varies"],
    link: "#",
    rating: 4.5,
    badge: "Top Pick"
  };
};

// Left Panel Component
const AdvicePanel = ({ currentStep, currentTip }: { currentStep: Step; currentTip: string }) => {
  return (
    <div className="hidden lg:flex flex-col h-full">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Target className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Hosting Finder</h2>
            <p className="text-sm text-muted-foreground">Expert-guided recommendations</p>
          </div>
        </div>
      </div>

      {/* Current Tip */}
      <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Pro Tip</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{currentTip}</p>
          </div>
        </div>
      </div>

      {/* Expert Tips Grid */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Expert Insights</h3>
        <div className="space-y-3">
          {expertTips.slice(0, 4).map((tip, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <tip.icon className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm">{tip.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-auto pt-6 border-t border-border">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-accent" />
            <span>Unbiased</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-accent" />
            <span>50+ Hosts Analyzed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-accent" />
            <span>50K+ Users</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HostingFinder = () => {
  const [step, setStep] = useState<Step>('purpose');
  const [answers, setAnswers] = useState<Answers>({
    purpose: '',
    type: '',
    platform: '',
    features: [],
    traffic: '',
    growth: '',
    security: '',
    support: '',
    experience: '',
    location: '',
    budget: '',
    timeline: '',
    email: '',
  });
  const [emailError, setEmailError] = useState('');
  const { toast } = useToast();

  const currentStepIndex = stepOrder.indexOf(step);
  const totalSteps = stepOrder.length - 1;

  const handleSelect = (field: keyof Answers, value: string) => {
    const currentQuestion = questions[field as keyof typeof questions];
    
    if (currentQuestion?.multiSelect) {
      setAnswers(prev => {
        const currentValues = prev[field] as string[];
        const newValues = currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value];
        return { ...prev, [field]: newValues };
      });
    } else {
      setAnswers(prev => ({ ...prev, [field]: value }));
      goToNextStep();
    }
  };

  const handleMultiSelectContinue = () => {
    goToNextStep();
  };

  const goToNextStep = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < stepOrder.length) {
      setStep(stepOrder[nextIndex]);
    }
  };

  const goToPrevStep = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setStep(stepOrder[prevIndex]);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    try {
      emailSchema.parse(answers.email);
      toast({
        title: "Thank you!",
        description: "Your personalized recommendation is ready.",
      });
      setStep('result');
    } catch (error) {
      if (error instanceof z.ZodError) {
        setEmailError(error.errors[0].message);
      }
    }
  };

  const skipEmail = () => {
    setStep('result');
  };

  const resetSurvey = () => {
    setAnswers({
      purpose: '',
      type: '',
      platform: '',
      features: [],
      traffic: '',
      growth: '',
      security: '',
      support: '',
      experience: '',
      location: '',
      budget: '',
      timeline: '',
      email: '',
    });
    setStep('purpose');
  };

  // Result screen - full width
  if (step === 'result') {
    const rec = getRecommendation(answers);
    return (
      <>
        <SEO 
          title="Your Hosting Recommendation | Good Hosters"
          description="Based on your requirements, here's our personalized hosting recommendation."
        />
        <TopBar />
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-secondary via-background to-accent/5 pt-8 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 animate-fade-up">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Perfect Match Found!
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Based on your answers, we've analyzed 50+ hosting providers to find the best fit.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden animate-fade-up-delay-1">
              {rec.badge && (
                <div className="bg-gradient-to-r from-accent to-brand-coral px-6 py-3">
                  <div className="flex items-center justify-center gap-2 text-accent-foreground">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">{rec.badge}</span>
                  </div>
                </div>
              )}
              
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {rec.name}
                    </h2>
                    <p className="text-muted-foreground text-lg">{rec.description}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(rec.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} 
                        />
                      ))}
                      <span className="ml-2 font-semibold text-foreground">{rec.rating}/5</span>
                    </div>
                    <span className="text-2xl font-bold text-accent">{rec.price}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {rec.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-secondary/50 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {rec.pros.map((pro, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-green-500 mt-1">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-yellow-500" />
                      Considerations
                    </h3>
                    <ul className="space-y-2">
                      {rec.cons.map((con, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-yellow-500 mt-1">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="accent" size="xl" className="flex-1 group">
                    Get This Deal
                    <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="xl" onClick={resetSurvey} className="flex-1">
                    Start Over
                  </Button>
                </div>

                {answers.email && (
                  <p className="text-sm text-muted-foreground text-center mt-6">
                    We've sent detailed recommendations to <span className="font-medium">{answers.email}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="text-center mt-8 animate-fade-up-delay-2">
              <Link to="/blog" className="text-accent hover:underline inline-flex items-center gap-2">
                Compare all hosting providers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const currentQuestion = questions[step as keyof typeof questions];
  const isMultiSelect = currentQuestion?.multiSelect;
  const selectedFeatures = answers.features || [];
  const currentTip = currentQuestion?.tip || "Take your time to answer each question accurately for the best recommendation.";

  // Email step - split layout
  if (step === 'email') {
    return (
      <>
        <SEO 
          title="Almost There! | Hosting Finder"
          description="Enter your email to receive your personalized hosting recommendation."
        />
        <TopBar />
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-secondary via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 min-h-[calc(100vh-200px)]">
              {/* Left Panel */}
              <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start">
                <AdvicePanel currentStep={step} currentTip="We'll send you exclusive deals and detailed comparisons. No spam, ever." />
              </div>

              {/* Right Panel - Email Form */}
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <button onClick={goToPrevStep} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                    <span className="text-sm text-muted-foreground font-medium">
                      Step {currentStepIndex + 1} of {totalSteps}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-accent to-brand-coral rounded-full transition-all duration-500"
                      style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="bg-card rounded-2xl border border-border shadow-xl p-8 md:p-10 animate-fade-up">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8 text-accent" />
                    </div>
                    <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      Where should we send your results?
                    </h1>
                    <p className="text-muted-foreground">
                      Get your personalized recommendation and exclusive deals.
                    </p>
                  </div>

                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={answers.email}
                        onChange={(e) => {
                          setAnswers(prev => ({ ...prev, email: e.target.value }));
                          setEmailError('');
                        }}
                        className={`h-14 text-lg ${emailError ? 'border-destructive' : ''}`}
                      />
                      {emailError && (
                        <p className="text-sm text-destructive mt-2">{emailError}</p>
                      )}
                    </div>
                    <Button type="submit" variant="accent" size="xl" className="w-full group">
                      Get My Recommendation
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <button 
                      onClick={skipEmail}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Skip for now, show me results
                    </button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground mt-6">
                    No spam. Unsubscribe anytime. We respect your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Question steps - split layout
  return (
    <>
      <SEO 
        title="Find Your Perfect Hosting | Good Hosters"
        description="Answer a few questions and we'll recommend the best web hosting provider for your specific needs."
      />
      <TopBar />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-secondary via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 min-h-[calc(100vh-200px)]">
            {/* Left Panel - Advice */}
            <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start">
              <AdvicePanel currentStep={step} currentTip={currentTip} />
            </div>

            {/* Right Panel - Quiz */}
            <div className="lg:col-span-3">
              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  {currentStepIndex > 0 ? (
                    <button onClick={goToPrevStep} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                  ) : (
                    <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                      <ArrowLeft className="w-5 h-5" />
                      Home
                    </Link>
                  )}
                  <span className="text-sm text-muted-foreground font-medium">
                    Step {currentStepIndex + 1} of {totalSteps}
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-brand-coral rounded-full transition-all duration-500"
                    style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-card rounded-2xl border border-border shadow-xl p-6 md:p-8 animate-fade-up">
                <div className="mb-6">
                  <h1 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                    {currentQuestion.question}
                  </h1>
                  {currentQuestion.subtitle && (
                    <p className="text-muted-foreground text-sm">{currentQuestion.subtitle}</p>
                  )}
                  {isMultiSelect && (
                    <p className="text-sm text-accent mt-2 font-medium">Select all that apply</p>
                  )}
                </div>

                {/* Mobile Tip */}
                <div className="lg:hidden bg-accent/5 border border-accent/20 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">{currentTip}</p>
                  </div>
                </div>

                {/* Options Grid */}
                <div className={`grid gap-2.5 ${currentQuestion.options.length > 6 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                  {currentQuestion.options.map((option) => {
                    const isSelected = isMultiSelect 
                      ? selectedFeatures.includes(option.value)
                      : answers[step as keyof Answers] === option.value;
                    
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(step as keyof Answers, option.value)}
                        className={`flex items-center gap-3 w-full p-3.5 rounded-xl border-2 transition-all duration-200 text-left group ${
                          isSelected 
                            ? 'border-accent bg-accent/10' 
                            : 'border-border bg-background hover:border-accent/50 hover:bg-accent/5'
                        }`}
                      >
                        {'icon' in option && option.icon && (
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isSelected ? 'bg-accent/20' : 'bg-accent/10 group-hover:bg-accent/15'
                          }`}>
                            <option.icon className="w-5 h-5 text-accent" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <span className={`font-medium block text-sm ${isSelected ? 'text-accent' : 'text-foreground'}`}>
                            {option.label}
                          </span>
                          {'description' in option && option.description && (
                            <span className="text-xs text-muted-foreground">{option.description}</span>
                          )}
                        </div>
                        {isMultiSelect ? (
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                            isSelected ? 'border-accent bg-accent' : 'border-muted-foreground/30'
                          }`}>
                            {isSelected && <CheckCircle className="w-3 h-3 text-accent-foreground" />}
                          </div>
                        ) : (
                          <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-all ${
                            isSelected ? 'text-accent' : 'text-muted-foreground group-hover:text-accent group-hover:translate-x-1'
                          }`} />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Continue button for multi-select */}
                {isMultiSelect && (
                  <Button 
                    variant="accent" 
                    size="lg" 
                    className="w-full mt-6 group"
                    onClick={handleMultiSelectContinue}
                    disabled={selectedFeatures.length === 0}
                  >
                    Continue
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
              </div>

              {/* Mobile Trust indicators */}
              <div className="lg:hidden flex flex-wrap justify-center gap-4 mt-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-accent" />
                  <span>Unbiased</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  <span>2 min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-accent" />
                  <span>50+ Providers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HostingFinder;
