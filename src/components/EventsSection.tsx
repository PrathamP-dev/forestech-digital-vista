import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Global Forest Tech Summit 2024",
      date: "2024-03-15",
      time: "09:00 - 17:00",
      location: "San Francisco, CA",
      type: "Conference",
      attendees: 500,
      description: "Join leading experts in forest technology for a day of innovation, networking, and sustainable solutions.",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Wildlife AI Workshop",
      date: "2024-02-28",
      time: "14:00 - 16:00",
      location: "Virtual Event",
      type: "Workshop",
      attendees: 150,
      description: "Hands-on training with the latest AI tools for wildlife monitoring and conservation.",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Sustainable Forestry Webinar Series",
      date: "2024-02-20",
      time: "11:00 - 12:00",
      location: "Online",
      type: "Webinar",
      attendees: 300,
      description: "Monthly series covering best practices in sustainable forest management and technology integration.",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Forest Carbon Marketplace Forum",
      date: "2024-04-10",
      time: "10:00 - 16:00",
      location: "London, UK",
      type: "Forum",
      attendees: 200,
      description: "Explore new opportunities in forest carbon trading and environmental impact measurement.",
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-primary text-primary-foreground';
      case 'ongoing': return 'bg-accent text-accent-foreground';
      case 'completed': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Conference': return 'text-primary';
      case 'Workshop': return 'text-accent-foreground';
      case 'Webinar': return 'text-secondary-foreground';
      case 'Forum': return 'text-primary-glow';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="events" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="gradient-forest bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community at conferences, workshops, and webinars designed to advance 
            forest technology and environmental conservation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <Card 
              key={event.id}
              className="group hover:shadow-forest transition-smooth cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                  <span className={`text-sm font-medium ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold group-hover:text-primary transition-smooth mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{event.attendees} Expected Attendees</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {event.description}
                </p>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="gradient-forest shadow-glow flex-1"
                  >
                    Register Now
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            View Event Calendar
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;