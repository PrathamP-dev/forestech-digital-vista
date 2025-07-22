import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import forestWildlife from '@/assets/forest-wildlife.jpg';
import forestTech from '@/assets/forest-tech.jpg';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "AI-Powered Wildlife Conservation Breakthrough",
      excerpt: "Revolutionary machine learning algorithms are now detecting and tracking endangered species with 95% accuracy across 50,000 hectares of protected forests.",
      image: forestWildlife,
      date: "2024-01-15",
      category: "Wildlife Tech",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Forest Carbon Monitoring Goes Digital",
      excerpt: "New IoT sensor networks are providing real-time carbon sequestration data, helping researchers optimize forest management strategies for climate impact.",
      image: forestTech,
      date: "2024-01-12",
      category: "Climate Tech",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Sustainable Forestry Partnership Announced",
      excerpt: "Major tech companies join forces with conservation groups to deploy next-generation forest monitoring systems across three continents.",
      image: forestWildlife,
      date: "2024-01-10",
      category: "Partnerships",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Drone Technology Revolutionizes Tree Health Assessment",
      excerpt: "Advanced aerial imaging combined with AI analysis enables early detection of forest diseases and pest infestations before they spread.",
      image: forestTech,
      date: "2024-01-08",
      category: "Innovation",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-forest bg-clip-text text-transparent">News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest breakthroughs in forest technology, conservation efforts, 
            and environmental innovation from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-forest transition-smooth cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag size={16} />
                    <span>{item.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {item.title}
                </h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary-glow group-hover:translate-x-1 transition-smooth"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;