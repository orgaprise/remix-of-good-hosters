import { Mail, Phone, HelpCircle, MapPin } from "lucide-react";

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
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+1 (234) 567-890</span>
            </a>
          </div>

          {/* Right side - Quick links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Help Center</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Find Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
