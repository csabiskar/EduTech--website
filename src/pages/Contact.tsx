import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 93421 92487",
      description: "Call us for immediate assistance",
      color: "bg-green-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "Chat with us instantly",
      description: "Get quick responses to your queries",
      color: "bg-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@marketingmentor.com",
      description: "Send us detailed inquiries",
      color: "bg-blue-500"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Mumbai, India",
      description: "Visit our training center",
      color: "bg-red-500"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
    { day: "Saturday", time: "10:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 4:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-subtle-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="bg-secondary-gradient text-white mb-6 animate-fade-in">
              CONTACT US
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              Get in 
              <span className="text-transparent bg-clip-text bg-hero-gradient"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Ready to start your digital marketing journey? We're here to help you every step of the way. 
              Reach out to us for course information, career guidance, or any questions you might have.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-8 space-y-4">
                      <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{info.title}</h3>
                      <p className="font-medium text-primary">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-2xl border-none bg-card/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input placeholder="Enter your first name" className="transition-all focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input placeholder="Enter your last name" className="transition-all focus:ring-2 focus:ring-primary/20" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="Enter your email address" className="transition-all focus:ring-2 focus:ring-primary/20" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input placeholder="Enter your phone number" className="transition-all focus:ring-2 focus:ring-primary/20" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input placeholder="What is this about?" className="transition-all focus:ring-2 focus:ring-primary/20" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell us about your goals and how we can help you achieve them..." 
                      rows={4}
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <Button className="w-full bg-hero-gradient hover:opacity-90 transition-all group shadow-xl hover:shadow-2xl">
                    <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours & Quick Actions */}
              <div className="space-y-8">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock size={20} className="text-primary" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                        <span className="font-medium text-foreground">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.time}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="shadow-xl bg-hero-gradient text-white">
                  <CardContent className="p-8 text-center space-y-6">
                    <h3 className="text-2xl font-bold">Need Immediate Help?</h3>
                    <p className="opacity-90">
                      Our admission counselors are available to answer your questions and guide you 
                      through the enrollment process.
                    </p>
                    <div className="space-y-4">
                      <Button variant="secondary" size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                        <Phone size={18} className="mr-2" />
                        Call Now: +91 93421 92487
                      </Button>
                      <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-primary">
                        <MessageCircle size={18} className="mr-2" />
                        WhatsApp Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Free Career Consultation</h3>
                    <p className="text-muted-foreground">
                      Not sure which course is right for you? Book a free 30-minute consultation 
                      with our career experts.
                    </p>
                    <Button variant="outline" className="w-full">
                      Schedule Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How long does it take to complete the course?", 
                  answer: "Our comprehensive program typically takes 3-6 months to complete, depending on your pace and dedication."
                },
                {
                  question: "Do you provide job placement assistance?",
                  answer: "Yes, we offer comprehensive job placement support including resume building, interview preparation, and direct connections with hiring partners."
                },
                {
                  question: "Can I learn while working full-time?",
                  answer: "Absolutely! Our flexible schedule and online modules are designed for working professionals. You can learn at your own pace."
                },
                {
                  question: "What if I need additional support during the course?",
                  answer: "We provide 24/7 student support, weekly live Q&A sessions, and dedicated mentorship throughout your learning journey."
                }
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
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

export default Contact;