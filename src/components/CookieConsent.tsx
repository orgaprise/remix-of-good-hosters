import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          {/* Icon & Text */}
          <div className="flex items-start gap-4 flex-1">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Cookie className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                We value your privacy
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies.{" "}
                <a href="#" className="text-accent hover:underline">
                  Learn more
                </a>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={handleReject}
              className="flex-1 md:flex-none"
            >
              Reject All
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 md:flex-none bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Accept All
            </Button>
          </div>

          {/* Close button */}
          <button
            onClick={handleReject}
            className="absolute top-4 right-4 md:static p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
