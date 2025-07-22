import { MessageCircle, Users, TrendingUp, Plus, Search, Filter, Pin, Heart, Reply } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ForumSection = () => {
  const forumStats = {
    totalUsers: 2847,
    activeToday: 156,
    totalDiscussions: 892,
    monthlyGrowth: 15
  };

  const discussions = [
    {
      id: 1,
      title: "Best practices for drone-based forest monitoring?",
      author: {
        name: "Sarah Chen",
        avatar: "/api/placeholder/40/40",
        role: "Forest Researcher"
      },
      category: "Technology",
      replies: 24,
      likes: 18,
      views: 234,
      lastActivity: "2 hours ago",
      isPinned: true,
      excerpt: "I'm working on a project that requires regular monitoring of 500+ hectares of forest. What are the current best practices for drone deployment and data collection?"
    },
    {
      id: 2,
      title: "Carbon credit marketplace - experiences and recommendations",
      author: {
        name: "Marcus Rodriguez",
        avatar: "/api/placeholder/40/40",
        role: "Conservation Director"
      },
      category: "Carbon Markets",
      replies: 31,
      likes: 42,
      views: 567,
      lastActivity: "4 hours ago",
      isPinned: false,
      excerpt: "Looking for insights on different carbon credit platforms. Which ones have you found most reliable for forest-based projects?"
    },
    {
      id: 3,
      title: "AI species identification - accuracy improvements",
      author: {
        name: "Dr. Emily Watson",
        avatar: "/api/placeholder/40/40",
        role: "Wildlife Biologist"
      },
      category: "AI & Machine Learning",
      replies: 17,
      likes: 25,
      views: 189,
      lastActivity: "6 hours ago",
      isPinned: false,
      excerpt: "Our team has been working on improving AI accuracy for species identification. Happy to share our findings and looking for collaboration opportunities."
    },
    {
      id: 4,
      title: "Sustainable forestry certifications - worth the investment?",
      author: {
        name: "James Thompson",
        avatar: "/api/placeholder/40/40",
        role: "Forest Manager"
      },
      category: "Sustainability",
      replies: 19,
      likes: 14,
      views: 156,
      lastActivity: "8 hours ago",
      isPinned: false,
      excerpt: "Considering FSC certification for our managed forests. What has been your experience with the ROI and operational impacts?"
    }
  ];

  const categories = [
    { name: "Technology", count: 156, color: "text-primary" },
    { name: "Conservation", count: 89, color: "text-accent-foreground" },
    { name: "AI & Machine Learning", count: 134, color: "text-primary-glow" },
    { name: "Carbon Markets", count: 67, color: "text-secondary-foreground" },
    { name: "Wildlife", count: 203, color: "text-primary" },
    { name: "Sustainability", count: 78, color: "text-accent-foreground" }
  ];

  return (
    <section id="forum" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Community <span className="gradient-forest bg-clip-text text-transparent">Forum</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow researchers, conservationists, and technologists. 
            Share knowledge, ask questions, and collaborate on forest technology projects.
          </p>
        </div>

        {/* Forum Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-card rounded-xl shadow-forest">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">
              {forumStats.totalUsers.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Total Members</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-forest">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">
              {forumStats.activeToday}
            </div>
            <div className="text-sm text-muted-foreground">Active Today</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-forest">
            <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">
              {forumStats.totalDiscussions}
            </div>
            <div className="text-sm text-muted-foreground">Discussions</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-forest">
            <Plus className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">
              +{forumStats.monthlyGrowth}%
            </div>
            <div className="text-sm text-muted-foreground">Growth</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold">Categories</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex justify-between items-center p-2 hover:bg-muted rounded-lg cursor-pointer transition-smooth">
                    <span className={`font-medium ${category.color}`}>
                      {category.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {category.count}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Forum Content */}
          <div className="lg:col-span-3">
            {/* Search and Actions */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search discussions..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="border-primary/30 hover:border-primary">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button className="gradient-forest shadow-glow">
                <Plus className="mr-2 h-4 w-4" />
                New Discussion
              </Button>
            </div>

            {/* Discussion List */}
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="group hover:shadow-forest transition-smooth cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={discussion.author.avatar} />
                        <AvatarFallback>
                          {discussion.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {discussion.isPinned && (
                              <Pin className="h-4 w-4 text-primary" />
                            )}
                            <h3 className="text-lg font-bold group-hover:text-primary transition-smooth">
                              {discussion.title}
                            </h3>
                          </div>
                          <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {discussion.category}
                          </span>
                        </div>
                        
                        <div className="text-sm text-muted-foreground mb-2">
                          by <span className="font-medium">{discussion.author.name}</span> • {discussion.author.role}
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {discussion.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Reply size={16} />
                              <span>{discussion.replies} replies</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart size={16} />
                              <span>{discussion.likes} likes</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle size={16} />
                              <span>{discussion.views} views</span>
                            </div>
                          </div>
                          
                          <span className="text-sm text-muted-foreground">
                            {discussion.lastActivity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;