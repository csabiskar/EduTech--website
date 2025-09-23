import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, BookOpen, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5000+",
    label: "Happy Students",
    color: "text-blue-500"
  },
  {
    icon: Award,
    number: "98%",
    label: "Success Rate",
    color: "text-green-500"
  },
  {
    icon: BookOpen,
    number: "50+",
    label: "Course Modules",
    color: "text-purple-500"
  },
  {
    icon: TrendingUp,
    number: "₹2L+",
    label: "Avg Monthly Earnings",
    color: "text-orange-500"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <IconComponent size={40} className={`mx-auto ${stat.color}`} />
                  <div>
                    <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;