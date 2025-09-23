import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Search, 
  Globe, 
  Users, 
  TrendingUp, 
  Share2, 
  PenTool, 
  Palette,
  Video,
  MessageSquare
} from "lucide-react";

const courses = [
  {
    title: "Meta Ads Mastery",
    icon: Target,
    color: "bg-blue-500",
    description: "Master Facebook & Instagram advertising strategies"
  },
  {
    title: "SEO Excellence",
    icon: Search,
    color: "bg-green-500",
    description: "Rank websites on Google's first page"
  },
  {
    title: "Website Development", 
    icon: Globe,
    color: "bg-purple-500",
    description: "Build stunning, conversion-focused websites"
  },
  {
    title: "Client Acquisition",
    icon: Users,
    color: "bg-orange-500",
    description: "Find and retain high-paying freelance clients"
  },
  {
    title: "Google Ads Pro",
    icon: TrendingUp,
    color: "bg-red-500",
    description: "Drive targeted traffic with Google advertising"
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    color: "bg-pink-500",
    description: "Build engaging social media campaigns"
  },
  {
    title: "Content & Copywriting",
    icon: PenTool,
    color: "bg-indigo-500",
    description: "Write compelling content that converts"
  },
  {
    title: "Canva Design",
    icon: Palette,
    color: "bg-teal-500",
    description: "Create professional graphics and designs"
  },
  {
    title: "Video Editing",
    icon: Video,
    color: "bg-yellow-500",
    description: "Edit engaging videos for social media"
  },
  {
    title: "AI Marketing Tools",
    icon: MessageSquare,
    color: "bg-cyan-500",
    description: "Leverage ChatGPT and AI for marketing success"
  }
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="bg-secondary-gradient text-white">
            DIGITAL MARKETING
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What you will learn
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive training modules designed to make you a successful digital marketing freelancer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;