import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, CheckCircle, Rocket, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";
import floatingElements from "@/assets/floating-elements.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-subtle-gradient py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-hero-gradient rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary-gradient rounded-full blur-lg animate-bounce-subtle"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-radial-gradient rounded-full animate-pulse-glow"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={floatingElements} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-5 animate-rotate-slow"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-center gap-2 text-primary animate-bounce-subtle">
              <Rocket size={20} />
              <span className="font-semibold">Your Future 🚀</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-foreground leading-tight">
                <span className="inline-block animate-fade-in">Digital Marketing &</span>
                <br />
                <span className="text-transparent bg-clip-text bg-hero-gradient animate-gradient-shift bg-[length:200%_200%] inline-block">
                  Freelancing Mastery
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="text-primary underline decoration-wavy decoration-primary/30 animate-pulse-glow">
                    All in One Place
                  </span>
                  <div className="absolute -top-2 -right-6">
                    <Star className="text-primary animate-bounce-subtle" size={24} fill="currentColor" />
                  </div>
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in">
                <strong className="text-foreground">Our mission</strong> is simple: We teach you how to generate{" "}
                <Badge variant="secondary" className="bg-hero-gradient text-white px-4 py-2 text-lg font-bold animate-pulse-glow shadow-lg">
                  ₹50,000/month
                </Badge>{" "}
                through <span className="text-secondary font-bold bg-secondary/10 px-2 py-1 rounded">Digital marketing freelancing</span>, 
                guiding you every step of the way to ensure your success.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-all group shadow-xl hover:shadow-2xl hover:scale-105">
                <Phone size={20} className="mr-3 group-hover:animate-bounce-subtle" />
                Call us Now
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:scale-105 transition-all shadow-lg">
                <MessageCircle size={20} className="mr-3" />
                WhatsApp
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-6">
              {[
                "Digital Marketing Foundations",
                "Freelancing Mastery", 
                "Real-World Projects"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                  <div className="w-6 h-6 bg-secondary-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-hero-gradient opacity-30 blur-3xl rounded-full animate-pulse-glow"></div>
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary-gradient rounded-full opacity-60 animate-bounce-subtle"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-hero-gradient rounded-full opacity-40 animate-float"></div>
            <img 
              src={heroImage} 
              alt="Digital Marketing Professionals Working"
              className="relative z-10 w-full rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;