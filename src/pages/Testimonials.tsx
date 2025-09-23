import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, TrendingUp } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Freelance Digital Marketer",
      location: "Delhi",
      image: "RM",
      rating: 5,
      income: "₹85,000/month",
      quote: "Marketing Mentor completely transformed my career. From zero knowledge to earning ₹85,000 per month in just 6 months. The practical approach and real client projects made all the difference.",
      achievement: "Increased income by 400%"
    },
    {
      name: "Priya Singh",
      role: "SEO Specialist",
      location: "Mumbai",
      image: "PS",
      rating: 5,
      income: "₹65,000/month",
      quote: "The SEO course was incredibly detailed and up-to-date. I landed my first client within 3 weeks of completing the course. The mentorship program helped me navigate challenges confidently.",
      achievement: "First client in 3 weeks"
    },
    {
      name: "Amit Kumar",
      role: "Meta Ads Expert",
      location: "Bangalore",
      image: "AK",
      rating: 5,
      income: "₹1,20,000/month",
      quote: "The hands-on training with real ad campaigns was invaluable. I now manage ad budgets worth lakhs and have built a successful agency. The ROI on this course is incredible!",
      achievement: "Built successful agency"
    },
    {
      name: "Sneha Patel",
      role: "Content Marketing Freelancer",
      location: "Pune",
      image: "SP",
      rating: 5,
      income: "₹55,000/month",
      quote: "As a housewife looking to restart my career, this course gave me the flexibility and skills I needed. The content writing module helped me build a solid client base from home.",
      achievement: "Career restart success"
    },
    {
      name: "Vikash Gupta",
      role: "Google Ads Specialist",
      location: "Kolkata",
      image: "VG",
      rating: 5,
      income: "₹75,000/month",
      quote: "The Google Ads training was comprehensive and practical. I'm now certified and managing campaigns for multiple clients. The course methodology is simply outstanding!",
      achievement: "Google Ads certified"
    },
    {
      name: "Kavya Sharma",
      role: "Social Media Manager",
      location: "Chennai",
      image: "KS",
      rating: 5,
      income: "₹45,000/month",
      quote: "Fresh out of college, I was worried about job prospects. This course not only gave me skills but also the confidence to start freelancing. Best investment I ever made!",
      achievement: "Started right after college"
    }
  ];

  const stats = [
    { number: "5000+", label: "Success Stories" },
    { number: "₹65,000", label: "Average Monthly Income" },
    { number: "98%", label: "Student Satisfaction" },
    { number: "6 Months", label: "Average Success Time" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-subtle-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="bg-secondary-gradient text-white mb-6 animate-fade-in">
              SUCCESS STORIES
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              Real Students,
              <span className="text-transparent bg-clip-text bg-hero-gradient"> Real Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Don't just take our word for it. Hear from our successful students who have transformed 
              their careers and achieved financial freedom through our comprehensive training programs.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{stat.number}</div>
                  <div className="text-background/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">What Our Students Say</h2>
              <p className="text-xl text-muted-foreground">
                These testimonials represent real transformations and genuine success stories
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                  <CardContent className="p-8 space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {testimonial.image}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{testimonial.name}</h3>
                          <p className="text-primary font-medium">{testimonial.role}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                        <TrendingUp size={14} className="mr-1" />
                        {testimonial.income}
                      </Badge>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <Quote size={24} className="text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground leading-relaxed italic pl-6">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Achievement Badge */}
                    <div className="pt-4 border-t border-border/50">
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        🏆 {testimonial.achievement}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Video Success Stories</h2>
              <p className="text-xl text-muted-foreground">
                Watch our students share their transformation journeys
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Rajesh's Journey", duration: "3:45", views: "15K views" },
                { name: "Priya's Success", duration: "4:12", views: "12K views" },
                { name: "Amit's Agency Story", duration: "5:30", views: "20K views" }
              ].map((video, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-l-[16px] border-l-primary border-y-[10px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">{video.name}</h3>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{video.duration}</span>
                        <span>{video.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-hero-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of successful students who have transformed their careers. 
              Your journey to financial freedom starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                Start Your Journey
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Watch More Stories
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;