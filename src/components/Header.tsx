import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-xl font-bold text-foreground">Marketing Mentor</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
          <a href="/courses" className="text-foreground hover:text-primary transition-colors font-medium">Courses</a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
          <a href="/testimonials" className="text-foreground hover:text-primary transition-colors font-medium">Testimonials</a>
          <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
            <Phone size={16} />
            Call Now
          </Button>
          <Button size="sm" className="bg-hero-gradient hover:opacity-90 transition-all">
            <MessageCircle size={16} className="mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;