
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Approximate height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Close mobile menu if open
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  return (
    <nav className="py-4 border-b border-gray-100 fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/d2543d93-96ee-41ff-87cf-d10aa26fafbc.png" 
            alt="Logo de OPTA" 
            className="h-14 cursor-pointer" 
            onClick={() => handleSmoothScroll('home')}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="text-gray-600 hover:text-opta-purple hover:bg-opta-purple/10 transition-colors border-transparent"
            onClick={() => handleSmoothScroll('features')}
          >
            Características
          </Button>
          <Button 
            variant="outline" 
            className="text-gray-600 hover:text-opta-purple hover:bg-opta-purple/10 transition-colors border-transparent"
            onClick={() => handleSmoothScroll('benefits')}
          >
            Beneficios
          </Button>
          <Button 
            variant="outline" 
            className="text-gray-600 hover:text-opta-purple hover:bg-opta-purple/10 transition-colors border-transparent"
            onClick={() => handleSmoothScroll('demo')}
          >
            Demo
          </Button>
          <Button 
            variant="outline" 
            className="text-gray-600 hover:text-opta-purple hover:bg-opta-purple/10 transition-colors border-transparent"
            onClick={() => handleSmoothScroll('contact')}
          >
            Contacto
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 absolute top-16 inset-x-0 bg-white shadow-md z-20">
          <div className="flex flex-col space-y-3">
            <a
              href="#features"
              className="text-gray-600 hover:text-opta-purple transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('features');
              }}
            >
              Características
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-opta-purple transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('benefits');
              }}
            >
              Beneficios
            </a>
            <a
              href="#demo"
              className="text-gray-600 hover:text-opta-purple transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('demo');
              }}
            >
              Demo
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-opta-purple transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('contact');
              }}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
