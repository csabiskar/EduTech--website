import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Heart, BookOpen, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to helping you achieve financial freedom through digital marketing skills.",
      color: "bg-blue-500"
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make prioritizes your learning experience and career success.",
      color: "bg-red-500"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in course content and teaching methodologies.",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a thriving community of successful digital marketing professionals.",
      color: "bg-purple-500"
    }
  ];

  const achievements = [
    { number: "5000+", label: "Students Trained", icon: Users },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "₹2L+", label: "Avg Monthly Earnings", icon: TrendingUp },
    { number: "50+", label: "Course Modules", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-subtle-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="bg-secondary-gradient text-white mb-6 animate-fade-in">
              ABOUT US
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              Empowering Your 
              <span className="text-transparent bg-clip-text bg-hero-gradient"> Digital Future</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Marketing Mentor is more than just an education platform - we're your partners in building a 
              successful digital marketing career. Our comprehensive approach combines cutting-edge training 
              with real-world application to ensure your success.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a vision to democratize digital marketing education, Marketing Mentor was born 
                  from the understanding that traditional education often falls short in preparing students 
                  for the rapidly evolving digital landscape.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our founders, seasoned digital marketing professionals, recognized the gap between academic 
                  theory and industry practice. They created a curriculum that bridges this gap, ensuring 
                  every student graduates with job-ready skills and the confidence to succeed.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to have helped thousands of students transform their careers and achieve 
                  financial independence through digital marketing freelancing.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-hero-gradient opacity-20 blur-3xl rounded-full animate-pulse-glow"></div>
                <Card className="relative z-10 p-8 shadow-2xl border-none bg-card/80 backdrop-blur">
                  <CardContent className="space-y-6 p-0">
                    <div className="grid grid-cols-2 gap-6">
                      {achievements.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                          <div key={index} className="text-center space-y-2">
                            <IconComponent size={32} className="mx-auto text-primary" />
                            <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape the learning experience we provide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-8 space-y-4">
                      <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our instructors are industry veterans with years of hands-on experience in digital marketing 
              and freelancing. They bring real-world insights that you won't find in textbooks.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  role: "Founder & Lead Instructor",
                  expertise: "Meta Ads & Google Ads Expert",
                  experience: "8+ Years Experience"
                },
                {
                  name: "Priya Sharma", 
                  role: "SEO Specialist",
                  expertise: "Technical SEO & Content Strategy",
                  experience: "6+ Years Experience"
                },
                {
                  name: "Arjun Patel",
                  role: "Freelancing Mentor",
                  expertise: "Client Acquisition & Business Development",
                  experience: "10+ Years Experience"
                }
              ].map((member, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-24 h-24 bg-hero-gradient rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-muted-foreground text-sm mt-2">{member.expertise}</p>
                      <Badge variant="outline" className="mt-2">{member.experience}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;