import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold">DigiTorial</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Empowering individuals to build successful digital marketing careers through comprehensive training and mentorship.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-background/80 hover:text-primary transition-colors">Home</a>
              <a href="#courses" className="block text-background/80 hover:text-primary transition-colors">Courses</a>
              <a href="#about" className="block text-background/80 hover:text-primary transition-colors">About</a>
              <a href="#testimonials" className="block text-background/80 hover:text-primary transition-colors">Testimonials</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Courses</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Meta Ads</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Google Ads</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">SEO</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Web Development</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Phone size={16} />
                <span>+91 93421 92487</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Mail size={16} />
                <span>hello@marketingmentor.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </div>
            </div>
            
            <Button className="bg-hero-gradient hover:opacity-90 transition-all w-full">
              <MessageCircle size={16} className="mr-2" />
              WhatsApp Now
            </Button>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © 2024 DigiTorial. All rights reserved. Built with passion for your success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;