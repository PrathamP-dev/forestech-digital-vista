import { useState, useEffect } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    species: 0,
    hectares: 0,
  });

  const targetValues = {
    projects: 250,
    species: 1200,
    hectares: 50000,
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const interval = 50; // Update every 50ms
      const steps = duration / interval;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

        setCounters({
          projects: Math.floor(targetValues.projects * easeOutProgress),
          species: Math.floor(targetValues.species * easeOutProgress),
          hectares: Math.floor(targetValues.hectares * easeOutProgress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targetValues);
        }
      }, interval);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            <span className="gradient-forest bg-clip-text text-transparent">
              FORESTECH
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-foreground/90 max-w-3xl mx-auto">
            Technology Meets Nature
          </p>
          
          <p className="text-lg mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge solutions at the intersection of forestry, environmental conservation, 
            and wildlife protection. Join our community of innovators building a sustainable future.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="gradient-forest shadow-glow text-lg px-8 py-6 group"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/10 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl shadow-forest">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                {counters.projects.toLocaleString()}+
              </div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            
            <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl shadow-forest">
              <div className="flex justify-center mb-2">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                {counters.species.toLocaleString()}+
              </div>
              <div className="text-muted-foreground">Species Monitored</div>
            </div>
            
            <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl shadow-forest">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                {counters.hectares.toLocaleString()}+
              </div>
              <div className="text-muted-foreground">Hectares Protected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;