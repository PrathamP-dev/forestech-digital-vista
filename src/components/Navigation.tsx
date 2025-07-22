import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import forestechLogo from '@/assets/forestech-logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Tech Tools', 
      href: '#tech-tools',
      dropdown: ['Forest Monitoring', 'Wildlife Tracking', 'Data Analytics', 'AI Solutions']
    },
    { name: 'News', href: '#news' },
    { name: 'Events', href: '#events' },
    { 
      name: 'Opportunities', 
      href: '#opportunities',
      dropdown: ['Jobs', 'RFPs', 'Internships', 'Partnerships']
    },
    { name: 'Forum', href: '#forum' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={forestechLogo} alt="Forestech" className="h-10 w-10" />
            <span className="text-xl font-bold gradient-forest bg-clip-text text-transparent">
              FORESTECH
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown size={16} />}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-forest p-2 fade-in-up">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-smooth"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Button variant="default" className="gradient-forest shadow-glow">
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border fade-in-up">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <a
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="pl-6 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-3">
              <Button variant="default" className="w-full gradient-forest">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;