import { Link } from "react-router-dom";
import { Mail, HelpCircle, Info } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-foreground text-background py-2 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side - Contact info */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:support@goodhosters.com" 
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">support@goodhosters.com</span>
            </a>
          </div>

          {/* Right side - Quick links */}
          <div className="flex items-center gap-6">
            <Link 
              to="/help" 
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Help Center</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Info className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">About Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
