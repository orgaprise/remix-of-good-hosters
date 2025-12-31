import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Jessica Martinez",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    date: "2 weeks ago",
    rating: 5,
    text: "Absolutely fantastic service! They helped me find the perfect hosting solution for my e-commerce business. The recommendations were spot-on and saved me hours of research.",
  },
  {
    id: 2,
    name: "Robert Kim",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "1 month ago",
    rating: 5,
    text: "Great comparison tools and honest reviews. I was able to migrate my sites to a better host and cut my costs by 40%. Highly recommend their expert guidance!",
  },
  {
    id: 3,
    name: "Amanda Collins",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face",
    date: "3 weeks ago",
    rating: 5,
    text: "The team really knows their stuff. They answered all my questions about VPS vs shared hosting and helped me make an informed decision for my startup.",
  },
  {
    id: 4,
    name: "Marcus Taylor",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    date: "1 week ago",
    rating: 5,
    text: "Best hosting review site I've found. Unbiased, detailed comparisons that actually help you understand what you're paying for. Saved me from a bad decision!",
  },
  {
    id: 5,
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
    date: "2 months ago",
    rating: 4,
    text: "Very helpful resources for beginners. The guides are easy to follow and the recommendations are trustworthy. Would definitely use again for future projects.",
  },
  {
    id: 6,
    name: "Daniel O'Brien",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "5 days ago",
    rating: 5,
    text: "Outstanding customer support and accurate hosting reviews. They went above and beyond to help me find a host that met all my specific requirements.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  const cardsPerView = 3;
  const maxIndex = Math.max(0, reviews.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of businesses worldwide to find their perfect hosting solution
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Side - Business Info */}
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
              <h3 className="font-display text-xl font-bold mb-4">
                <span className="text-foreground">GOOD</span>{" "}
                <span className="text-accent">HOSTERS</span>
              </h3>
              
              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground">{averageRating}</span>
              </div>

              {/* Google Logo */}
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm text-muted-foreground">Google Reviews</span>
              </div>

              {/* Total Reviews */}
              <p className="text-sm text-muted-foreground mb-6">
                Based on <span className="font-medium text-foreground">{reviews.length * 50}+</span> reviews
              </p>

              {/* Write a Review Button */}
              <Button 
                variant="outline" 
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Write a Review
              </Button>
            </div>
          </div>

          {/* Right Side - Reviews Carousel */}
          <div 
            className="lg:w-3/4 relative flex items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute -left-5 z-10 w-10 h-10 rounded-full border border-border bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden w-full px-2">
              <div
                className="flex gap-4 transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsPerView + 1.33)}%)`,
                }}
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] bg-card rounded-xl p-5 shadow-sm border border-border/50"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={review.avatar}
                        alt={`${review.name} profile photo`}
                        className="w-10 h-10 rounded-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width={40}
                        height={40}
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground text-sm truncate">
                          {review.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className={`text-sm text-muted-foreground mb-2 transition-all duration-300 ${
                      expandedReviews.has(review.id) ? '' : 'line-clamp-3'
                    }`}>
                      {review.text}
                    </p>

                    {/* Read More / Show Less */}
                    <button 
                      onClick={() => toggleExpand(review.id)}
                      className="text-sm text-accent hover:text-accent/80 font-medium transition-colors"
                    >
                      {expandedReviews.has(review.id) ? 'Show less' : 'Read more'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="absolute -right-2 z-10 w-10 h-10 rounded-full border border-border bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
