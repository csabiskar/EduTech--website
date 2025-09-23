import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, CheckCircle, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="bg-subtle-gradient py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-center gap-2 text-primary">
              <Rocket size={20} />
              <span className="font-semibold">Your Future 🚀</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Digital Marketing &
                <br />
                <span className="text-transparent bg-clip-text bg-hero-gradient">
                  Freelancing Mastery
                </span>
                <br />
                <span className="text-primary underline decoration-wavy decoration-primary/30">
                  All in One Place
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <strong>Our mission</strong> is simple: We teach you how to generate{" "}
                <Badge variant="secondary" className="bg-hero-gradient text-white px-3 py-1">
                  ₹50,000/month
                </Badge>{" "}
                through <span className="text-secondary font-semibold">Digital marketing freelancing</span>, 
                guiding you every step of the way to ensure your success.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-all group">
                <Phone size={20} className="mr-2 group-hover:animate-pulse" />
                Call us Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
                <MessageCircle size={20} className="mr-2" />
                WhatsApp
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                "Digital Marketing Foundations",
                "Freelancing Mastery", 
                "Real-World Projects"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle size={16} className="text-secondary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-hero-gradient opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Digital Marketing Professionals Working"
              className="relative z-10 w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;