import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest hosting insights in your inbox.",
      });
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-accent/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-accent/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent/40 rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/30 rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Newsletter
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Stay Ahead of the Curve
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get exclusive hosting insights, expert tips, and the latest industry news delivered straight to your inbox.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Weekly updates</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>No spam</span>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 pl-11 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                      required
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="lg"
                    disabled={isSubmitted}
                    className="w-full"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe Now
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
                <p className="text-muted-foreground text-xs mt-4 text-center">
                  Join 15,000+ subscribers. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
