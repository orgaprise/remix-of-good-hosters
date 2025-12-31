import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, Server, Users, Zap, Globe, ShoppingCart, Code, CheckCircle, Mail, Rocket, HeadphonesIcon, DollarSign, Gauge } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type Step = 'type' | 'platform' | 'priority' | 'experience' | 'traffic' | 'budget' | 'email' | 'result';

interface Answers {
  type: string;
  platform: string;
  priority: string;
  experience: string;
  traffic: string;
  budget: string;
  email: string;
}

interface HostingSurveyProps {
  onComplete?: () => void;
}

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });

const questions = {
  type: {
    question: "What type of website are you building?",
    options: [
      { value: "blog", label: "Blog / Portfolio", icon: Globe, description: "Personal site, blog, or portfolio" },
      { value: "business", label: "Business Website", icon: Users, description: "Company site, landing pages" },
      { value: "ecommerce", label: "Online Store", icon: ShoppingCart, description: "E-commerce, selling products" },
      { value: "webapp", label: "Web Application", icon: Code, description: "SaaS, custom web apps" },
    ]
  },
  platform: {
    question: "Which platform will you use?",
    options: [
      { value: "wordpress", label: "WordPress" },
      { value: "woocommerce", label: "WooCommerce" },
      { value: "shopify", label: "Shopify" },
      { value: "custom", label: "Custom / Other" },
    ]
  },
  priority: {
    question: "What's most important to you?",
    options: [
      { value: "speed", label: "Speed & Performance", icon: Gauge, description: "Fastest loading times" },
      { value: "support", label: "Customer Support", icon: HeadphonesIcon, description: "24/7 expert help" },
      { value: "price", label: "Best Price", icon: DollarSign, description: "Most affordable option" },
      { value: "features", label: "Features & Scalability", icon: Rocket, description: "Room to grow" },
    ]
  },
  experience: {
    question: "What's your technical experience level?",
    options: [
      { value: "beginner", label: "Beginner", description: "I need everything managed for me" },
      { value: "intermediate", label: "Intermediate", description: "I know basic hosting concepts" },
      { value: "advanced", label: "Advanced", description: "I can manage servers myself" },
      { value: "developer", label: "Developer", description: "Full technical control preferred" },
    ]
  },
  traffic: {
    question: "What's your expected monthly traffic?",
    options: [
      { value: "starter", label: "Just Starting", description: "< 1,000 visitors" },
      { value: "growing", label: "Growing", description: "1,000 - 25,000 visitors" },
      { value: "established", label: "Established", description: "25,000 - 100,000 visitors" },
      { value: "high", label: "High Traffic", description: "100,000+ visitors" },
    ]
  },
  budget: {
    question: "What's your monthly budget for hosting?",
    options: [
      { value: "economy", label: "Economy", description: "$0 - $10/month" },
      { value: "standard", label: "Standard", description: "$10 - $30/month" },
      { value: "premium", label: "Premium", description: "$30 - $100/month" },
      { value: "enterprise", label: "Enterprise", description: "$100+/month" },
    ]
  }
};

const getRecommendation = (answers: Answers) => {
  // Logic based on answers
  if (answers.type === 'ecommerce' || answers.platform === 'woocommerce') {
    if (answers.budget === 'premium' || answers.budget === 'enterprise') {
      return { name: "Cloudways", description: "Managed cloud hosting perfect for high-performance e-commerce stores.", price: "From $14/mo", provider: "cloudways" };
    }
    return { name: "SiteGround", description: "Excellent WooCommerce hosting with top-tier support and security.", price: "From $3.99/mo", provider: "siteground" };
  }
  
  if (answers.type === 'webapp' || answers.experience === 'developer') {
    if (answers.traffic === 'high') {
      return { name: "DigitalOcean", description: "Scalable cloud infrastructure for developers and web applications.", price: "From $4/mo", provider: "digitalocean" };
    }
    return { name: "Cloudways", description: "Managed cloud platform with full developer flexibility.", price: "From $14/mo", provider: "cloudways" };
  }
  
  if (answers.priority === 'speed') {
    return { name: "A2 Hosting", description: "Turbo servers deliver up to 20x faster page loads.", price: "From $2.99/mo", provider: "a2hosting" };
  }
  
  if (answers.priority === 'support') {
    return { name: "SiteGround", description: "Industry-leading customer support available 24/7.", price: "From $3.99/mo", provider: "siteground" };
  }
  
  if (answers.priority === 'price' || answers.budget === 'economy') {
    return { name: "Hostinger", description: "Best value hosting with excellent features at the lowest price.", price: "From $2.99/mo", provider: "hostinger" };
  }
  
  if (answers.platform === 'wordpress') {
    return { name: "Bluehost", description: "Official WordPress recommended host with easy 1-click install.", price: "From $2.95/mo", provider: "bluehost" };
  }
  
  // Default recommendation
  return { name: "Hostinger", description: "Great all-around hosting with excellent value and performance.", price: "From $2.99/mo", provider: "hostinger" };
};

const stepOrder: Step[] = ['type', 'platform', 'priority', 'experience', 'traffic', 'budget', 'email', 'result'];

const HostingSurvey = ({ onComplete }: HostingSurveyProps) => {
  const [step, setStep] = useState<Step>('type');
  const [answers, setAnswers] = useState<Answers>({ 
    type: '', 
    platform: '', 
    priority: '', 
    experience: '', 
    traffic: '', 
    budget: '', 
    email: '' 
  });
  const [emailError, setEmailError] = useState('');
  const { toast } = useToast();

  const currentStepIndex = stepOrder.indexOf(step);
  const totalSteps = stepOrder.length - 1; // Exclude result

  const handleSelect = (field: keyof Answers, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
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

  const resetSurvey = () => {
    setAnswers({ type: '', platform: '', priority: '', experience: '', traffic: '', budget: '', email: '' });
    setStep('type');
  };

  if (step === 'result') {
    const rec = getRecommendation(answers);
    return (
      <div className="py-4">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          <p className="text-sm text-muted-foreground mb-2">Based on your answers, we recommend:</p>
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">
            {rec.name}
          </h3>
          <p className="text-muted-foreground mb-2">{rec.description}</p>
          <p className="text-accent font-bold text-xl mb-6">{rec.price}</p>
          <div className="flex flex-col gap-3">
            <Button variant="accent" size="lg" className="w-full">
              Get This Deal
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={resetSurvey} className="w-full">
              Start Over
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            We've sent detailed recommendations to {answers.email}
          </p>
        </div>
      </div>
    );
  }

  if (step === 'email') {
    return (
      <div className="py-2">
        {/* Progress */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={goToPrevStep} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <span className="text-sm text-muted-foreground">Step {currentStepIndex + 1} of {totalSteps}</span>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-muted rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
          />
        </div>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-7 h-7 text-accent" />
          </div>
          <h3 className="font-display text-lg font-bold text-foreground mb-2">
            Where should we send your results?
          </h3>
          <p className="text-sm text-muted-foreground">
            Get your personalized hosting recommendation and exclusive deals delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={answers.email}
              onChange={(e) => {
                setAnswers(prev => ({ ...prev, email: e.target.value }));
                setEmailError('');
              }}
              className={`h-12 ${emailError ? 'border-destructive' : ''}`}
            />
            {emailError && (
              <p className="text-sm text-destructive mt-1">{emailError}</p>
            )}
          </div>
          <Button type="submit" variant="accent" size="lg" className="w-full">
            Get My Recommendation
            <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </form>
      </div>
    );
  }

  const currentQuestion = questions[step as keyof typeof questions];

  return (
    <div className="py-2">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        {currentStepIndex > 0 ? (
          <button onClick={goToPrevStep} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <div />
        )}
        <span className="text-sm text-muted-foreground">Step {currentStepIndex + 1} of {totalSteps}</span>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 bg-muted rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Question */}
      <h3 className="font-display text-lg font-bold text-foreground mb-5">
        {currentQuestion.question}
      </h3>

      {/* Options */}
      <div className="space-y-3">
        {currentQuestion.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(step as keyof Answers, option.value)}
            className="flex items-center gap-4 w-full p-4 rounded-xl border-2 border-border bg-background hover:border-accent hover:bg-accent/5 transition-all duration-200 text-left group"
          >
            {'icon' in option && option.icon && (
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                <option.icon className="w-5 h-5 text-accent" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <span className="font-medium text-foreground block">{option.label}</span>
              {'description' in option && option.description && (
                <span className="text-sm text-muted-foreground">{option.description}</span>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HostingSurvey;
