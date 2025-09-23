import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
