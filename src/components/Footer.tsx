import { ArrowRight, Mail, MapPin, Phone, Linkedin, Twitter, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import forestechLogo from '@/assets/forestech-logo.png';

const Footer = () => {
  const footerLinks = {
    "Platform": [
      { name: "Tech Solutions", href: "#tech-tools" },
      { name: "Forest Monitoring", href: "#monitoring" },
      { name: "Wildlife Tracking", href: "#wildlife" },
      { name: "Data Analytics", href: "#analytics" }
    ],
    "Community": [
      { name: "Discussion Forum", href: "#forum" },
      { name: "Events & Webinars", href: "#events" },
      { name: "News & Updates", href: "#news" },
      { name: "Success Stories", href: "#stories" }
    ],
    "Opportunities": [
      { name: "Job Board", href: "#jobs" },
      { name: "RFPs", href: "#rfps" },
      { name: "Internships", href: "#internships" },
      { name: "Partnerships", href: "#partnerships" }
    ],
    "Resources": [
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Best Practices", href: "#practices" }
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-600" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay Connected with <span className="gradient-forest bg-clip-text text-transparent">Forestech</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on forest technology innovations, conservation breakthroughs, 
              and community events delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                type="email"
                className="flex-1"
              />
              <Button className="gradient-forest shadow-glow">
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={forestechLogo} alt="Forestech" className="h-12 w-12" />
                <div>
                  <h3 className="text-xl font-bold gradient-forest bg-clip-text text-transparent">
                    FORESTECH
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    An Initiative of Myristika
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bridging the gap between cutting-edge technology and environmental conservation. 
                We empower researchers, conservationists, and technologists to create sustainable 
                solutions for our planet's forests and wildlife.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>contact@myristika.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>New Delhi, IN</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-foreground mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Forestech, an initiative of Myristika. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-muted-foreground ${social.color} transition-smooth`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button 
                onClick={() => window.open('/privacy-policy', '_blank')}
                className="hover:text-primary transition-smooth"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => window.open('/editorial-policy', '_blank')}
                className="hover:text-primary transition-smooth"
              >
                Editorial Policy
              </button>
              <button 
                onClick={() => window.open('/cookie-policy', '_blank')}
                className="hover:text-primary transition-smooth"
              >
                Cookie Policy
              </button>
              <button 
                onClick={() => window.open('/rss-terms', '_blank')}
                className="hover:text-primary transition-smooth"
              >
                RSS Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;