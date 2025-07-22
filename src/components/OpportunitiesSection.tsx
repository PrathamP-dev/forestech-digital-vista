import { useState } from 'react';
import { Briefcase, FileText, GraduationCap, Handshake, Search, Filter, MapPin, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const OpportunitiesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const opportunities = {
    jobs: [
      {
        id: 1,
        title: "Senior Forest Data Scientist",
        company: "EcoTech Solutions",
        location: "Remote / Portland, OR",
        type: "Full-time",
        salary: "$85,000 - $120,000",
        posted: "2 days ago",
        description: "Lead AI-driven forest monitoring projects using satellite imagery and machine learning.",
        tags: ["AI/ML", "Remote Sensing", "Python", "Conservation"]
      },
      {
        id: 2,
        title: "Wildlife Technology Engineer",
        company: "Conservation Dynamics",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$70,000 - $95,000",
        posted: "5 days ago",
        description: "Design and deploy IoT solutions for wildlife tracking and habitat monitoring.",
        tags: ["IoT", "Hardware", "Wildlife", "Field Work"]
      },
      {
        id: 3,
        title: "Environmental Data Analyst",
        company: "Forest Future Labs",
        location: "Vancouver, BC",
        type: "Contract",
        salary: "$45/hour",
        posted: "1 week ago",
        description: "Analyze carbon sequestration data and develop predictive models for forest growth.",
        tags: ["Data Analysis", "Carbon Markets", "R", "Statistics"]
      }
    ],
    rfps: [
      {
        id: 1,
        title: "Forest Fire Prediction System Development",
        organization: "National Forest Service",
        location: "Multiple States",
        budget: "$2.5M - $5M",
        deadline: "March 30, 2024",
        description: "Develop an AI-powered early warning system for forest fire detection and prevention.",
        tags: ["AI/ML", "Satellite Data", "Emergency Response", "Government"]
      },
      {
        id: 2,
        title: "Biodiversity Monitoring Platform",
        organization: "WWF International",
        location: "Global",
        budget: "$1M - $3M",
        deadline: "April 15, 2024",
        description: "Create a comprehensive platform for tracking species populations across protected areas.",
        tags: ["Conservation", "Mobile Apps", "Data Visualization", "NGO"]
      }
    ],
    internships: [
      {
        id: 1,
        title: "Forest Tech Research Intern",
        company: "TreeTech Institute",
        location: "Berkeley, CA",
        duration: "Summer 2024 (12 weeks)",
        stipend: "$2,500/month",
        posted: "3 days ago",
        description: "Support cutting-edge research in forest technology and conservation methods.",
        tags: ["Research", "Students", "Conservation", "Academic"]
      },
      {
        id: 2,
        title: "Wildlife Data Science Intern",
        company: "Ecosystem Analytics",
        location: "Remote",
        duration: "Fall 2024 (16 weeks)",
        stipend: "$2,000/month",
        posted: "1 week ago",
        description: "Analyze wildlife tracking data and contribute to machine learning model development.",
        tags: ["Data Science", "Remote", "Wildlife", "Machine Learning"]
      }
    ]
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'jobs': return <Briefcase className="h-5 w-5" />;
      case 'rfps': return <FileText className="h-5 w-5" />;
      case 'internships': return <GraduationCap className="h-5 w-5" />;
      default: return <Handshake className="h-5 w-5" />;
    }
  };

  const renderOpportunityCard = (item: any, type: string) => (
    <Card key={item.id} className="group hover:shadow-forest transition-smooth cursor-pointer">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold group-hover:text-primary transition-smooth">
            {item.title}
          </h3>
          <span className="text-sm text-muted-foreground">
            {item.posted || item.deadline}
          </span>
        </div>
        
        <div className="text-sm text-primary font-medium mb-2">
          {item.company || item.organization}
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{item.location}</span>
          </div>
          
          {item.type && (
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{item.type}</span>
            </div>
          )}
          
          {item.duration && (
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{item.duration}</span>
            </div>
          )}
          
          {(item.salary || item.budget || item.stipend) && (
            <div className="flex items-center gap-1">
              <DollarSign size={14} />
              <span>{item.salary || item.budget || item.stipend}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag: string) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground leading-relaxed mb-4">
          {item.description}
        </p>
        
        <Button 
          size="sm" 
          className="gradient-forest shadow-glow w-full"
        >
          {type === 'jobs' ? 'Apply Now' : type === 'rfps' ? 'View RFP' : 'Apply for Internship'}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="opportunities" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-forest bg-clip-text text-transparent">Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover career opportunities, research projects, and partnerships in the 
            forest technology and conservation sector.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="border-primary/30 hover:border-primary">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              {getIcon('jobs')}
              Jobs ({opportunities.jobs.length})
            </TabsTrigger>
            <TabsTrigger value="rfps" className="flex items-center gap-2">
              {getIcon('rfps')}
              RFPs ({opportunities.rfps.length})
            </TabsTrigger>
            <TabsTrigger value="internships" className="flex items-center gap-2">
              {getIcon('internships')}
              Internships ({opportunities.internships.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="jobs">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {opportunities.jobs.map((job) => renderOpportunityCard(job, 'jobs'))}
            </div>
          </TabsContent>

          <TabsContent value="rfps">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {opportunities.rfps.map((rfp) => renderOpportunityCard(rfp, 'rfps'))}
            </div>
          </TabsContent>

          <TabsContent value="internships">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {opportunities.internships.map((internship) => renderOpportunityCard(internship, 'internships'))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            Post an Opportunity
            <Handshake className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;