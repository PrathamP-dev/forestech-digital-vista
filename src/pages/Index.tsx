import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FloatingElements from '@/components/FloatingElements';
import NewsSection from '@/components/NewsSection';
import EventsSection from '@/components/EventsSection';
import OpportunitiesSection from '@/components/OpportunitiesSection';
import ForumSection from '@/components/ForumSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <NewsSection />
        <EventsSection />
        <OpportunitiesSection />
        <ForumSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
