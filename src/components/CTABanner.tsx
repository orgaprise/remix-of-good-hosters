import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTABannerProps {
  onFindHostClick?: () => void;
}

const CTABanner = ({ onFindHostClick }: CTABannerProps) => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-brand-coral to-accent" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Expert Hosting Recommendations
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Find Your 
            <span className="block mt-2">Perfect Hosting Solution?</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take our quick survey and get personalized hosting recommendations tailored to your specific needs and budget.
          </p>

          {/* CTA Button */}
          <Button 
            variant="secondary"
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
            onClick={onFindHostClick}
          >
            Pick Your Hosting Plan
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              100% Free
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              No Commitment
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Instant Results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
