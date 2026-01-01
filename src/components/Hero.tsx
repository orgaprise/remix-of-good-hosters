import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Award, Sparkles, CheckCircle, Users, Star } from "lucide-react";
import HeroBlogCards from "./HeroBlogCards";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-violet-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 lg:pt-16 pb-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
          {/* Left Column - Blog Cards */}
          <div className="xl:col-span-2 animate-fade-up">
            <HeroBlogCards />
          </div>

          {/* Right Column - CTA Card */}
          <div className="xl:col-span-1 animate-fade-up-delay-1">
            <div className="bg-card rounded-2xl p-10 border border-border shadow-xl flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display text-xl lg:text-2xl font-bold text-foreground">
                  Find Your Perfect
                  <span className="text-gradient block">Hosting Solution</span>
                </h2>
              </div>
              
              <p className="text-muted-foreground text-base mb-8">
                Answer 7 quick questions and get personalized hosting recommendations.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-foreground">
                  <Shield className="w-5 h-5 text-accent" />
                  Unbiased recommendations
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Zap className="w-5 h-5 text-accent" />
                  Takes less than 30 seconds
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Award className="w-5 h-5 text-accent" />
                  500+ hosts analyzed
                </li>
              </ul>

              <Button 
                variant="accent" 
                size="xl" 
                className="w-full group"
                asChild
              >
                <Link to="/hosting-finder">
                  Pick Your Hosting Plan
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
                <CheckCircle className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-medium text-muted-foreground">Verified Reviews</span>
              </div>
              <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
                <Users className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-medium text-muted-foreground">50K+ Users</span>
              </div>
              <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-medium text-muted-foreground">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
