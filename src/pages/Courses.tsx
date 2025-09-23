import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, Search, Globe, Users, TrendingUp, Share2, PenTool, Palette, Video, MessageSquare,
  Clock, Award, CheckCircle, ArrowRight, Play, BookOpen, Star
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Meta Ads Mastery",
      icon: Target,
      color: "bg-blue-500",
      duration: "6 weeks",
      modules: 12,
      level: "Beginner to Advanced",
      price: "₹15,999",
      originalPrice: "₹25,999",
      description: "Master Facebook & Instagram advertising with hands-on campaign creation",
      highlights: [
        "Campaign setup & optimization",
        "Audience targeting strategies", 
        "Ad creative best practices",
        "Performance tracking & scaling"
      ],
      popular: true
    },
    {
      title: "SEO Excellence",
      icon: Search,
      color: "bg-green-500",
      duration: "8 weeks",
      modules: 15,
      level: "Intermediate",
      price: "₹12,999",
      originalPrice: "₹19,999",
      description: "Rank websites on Google's first page with proven SEO strategies",
      highlights: [
        "Keyword research & analysis",
        "On-page & technical SEO",
        "Link building strategies",
        "SEO tools & analytics"
      ]
    },
    {
      title: "Google Ads Pro",
      icon: TrendingUp,
      color: "bg-red-500",
      duration: "5 weeks",
      modules: 10,
      level: "Beginner to Advanced",
      price: "₹14,999",
      originalPrice: "₹22,999",
      description: "Drive targeted traffic and maximize ROI with Google advertising",
      highlights: [
        "Search & Display campaigns",
        "Shopping & YouTube ads",
        "Bid strategies & budgeting",
        "Conversion tracking & optimization"
      ]
    },
    {
      title: "Website Development",
      icon: Globe,
      color: "bg-purple-500",
      duration: "10 weeks",
      modules: 20,
      level: "Beginner",
      price: "₹18,999",
      originalPrice: "₹29,999",
      description: "Build stunning, conversion-focused websites without coding",
      highlights: [
        "WordPress development",
        "Responsive design principles",
        "E-commerce integration",
        "Site speed optimization"
      ]
    },
    {
      title: "Freelancing Mastery",
      icon: Users,
      color: "bg-orange-500",
      duration: "4 weeks",
      modules: 8,
      level: "All Levels",
      price: "₹9,999",
      originalPrice: "₹15,999",
      description: "Find and retain high-paying freelance clients consistently",
      highlights: [
        "Profile optimization",
        "Proposal writing secrets",
        "Client communication",
        "Pricing & negotiation"
      ]
    },
    {
      title: "Social Media Marketing",
      icon: Share2,
      color: "bg-pink-500",
      duration: "6 weeks",
      modules: 12,
      level: "Beginner to Intermediate",
      price: "₹11,999",
      originalPrice: "₹17,999",
      description: "Build engaging social media campaigns across all platforms",
      highlights: [
        "Content strategy & planning",
        "Platform-specific tactics",
        "Community management",
        "Social media analytics"
      ]
    }
  ];

  const bundles = [
    {
      name: "Complete Digital Marketing Bundle",
      courses: ["Meta Ads", "Google Ads", "SEO", "Social Media"],
      originalPrice: "₹65,996",
      price: "₹39,999",
      savings: "₹25,997",
      duration: "6 months",
      mostPopular: true
    },
    {
      name: "Freelancer Success Bundle",
      courses: ["Freelancing Mastery", "Content Writing", "Web Development"],
      originalPrice: "₹50,997",
      price: "₹29,999",
      savings: "₹20,998",
      duration: "4 months"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-subtle-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="bg-secondary-gradient text-white mb-6 animate-fade-in">
              OUR COURSES
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              Master
              <span className="text-transparent bg-clip-text bg-hero-gradient"> Digital Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Choose from our comprehensive range of courses designed to make you a successful 
              digital marketing professional. Each course includes hands-on projects, expert mentorship, 
              and lifetime support.
            </p>
          </div>
        </section>

        {/* Course Bundles */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Course Bundles</h2>
              <p className="text-xl text-muted-foreground">Save big with our comprehensive course bundles</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {bundles.map((bundle, index) => (
                <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${bundle.mostPopular ? 'ring-2 ring-primary' : ''}`}>
                  {bundle.mostPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-hero-gradient text-white px-4 py-1">
                        🔥 MOST POPULAR
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">{bundle.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold text-primary">{bundle.price}</span>
                        <span className="text-lg text-muted-foreground line-through">{bundle.originalPrice}</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Save {bundle.savings}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {bundle.courses.map((course, i) => (
                          <Badge key={i} variant="outline">{course}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {bundle.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award size={16} />
                        Certificate included
                      </span>
                    </div>
                    <Button className="w-full bg-hero-gradient hover:opacity-90 transition-all group">
                      Enroll Now
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Courses */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Individual Courses</h2>
              <p className="text-xl text-muted-foreground">
                Specialize in specific skills with our focused training modules
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {courses.map((course, index) => {
                const IconComponent = course.icon;
                return (
                  <Card key={index} className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative ${course.popular ? 'ring-2 ring-primary' : ''}`}>
                    {course.popular && (
                      <div className="absolute -top-3 -right-3">
                        <Badge className="bg-hero-gradient text-white">
                          <Star size={14} className="mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <IconComponent size={28} className="text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {course.title}
                            </CardTitle>
                            <Badge variant="outline" className="mt-1">{course.level}</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-primary">{course.price}</span>
                            <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">{course.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="space-y-1">
                          <Clock size={20} className="mx-auto text-primary" />
                          <div className="text-sm font-medium text-foreground">{course.duration}</div>
                          <div className="text-xs text-muted-foreground">Duration</div>
                        </div>
                        <div className="space-y-1">
                          <BookOpen size={20} className="mx-auto text-primary" />
                          <div className="text-sm font-medium text-foreground">{course.modules}</div>
                          <div className="text-xs text-muted-foreground">Modules</div>
                        </div>
                        <div className="space-y-1">
                          <Award size={20} className="mx-auto text-primary" />
                          <div className="text-sm font-medium text-foreground">Certificate</div>
                          <div className="text-xs text-muted-foreground">Included</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">What you'll learn:</h4>
                        <div className="space-y-2">
                          {course.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-hero-gradient hover:opacity-90 transition-all group">
                          <Play size={16} className="mr-2" />
                          Enroll Now
                        </Button>
                        <Button variant="outline" size="icon" className="hover:bg-secondary hover:text-white transition-colors">
                          <ArrowRight size={18} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Our Courses?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Expert Instructors",
                  description: "Learn from industry professionals with years of hands-on experience"
                },
                {
                  icon: BookOpen,
                  title: "Practical Projects",
                  description: "Work on real campaigns and build a portfolio that impresses clients"
                },
                {
                  icon: Award,
                  title: "Lifetime Support",
                  description: "Get continued mentorship and course updates for life"
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 space-y-4">
                      <IconComponent size={48} className="mx-auto text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;