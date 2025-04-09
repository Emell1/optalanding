
import React, { useState } from 'react';
import { Menu, X, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-gray-100">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/opta-logo.png" 
            alt="Logo de OPTA" 
            className="h-14" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3">
          <Button className="bg-opta-purple text-white rounded-md hover:bg-opta-purple-dark">
            Nueva Conversación
          </Button>
          <Button variant="outline" className="text-opta-purple border-opta-purple hover:bg-opta-purple/10 flex items-center gap-2">
            <Clock size={18} />
            Historial
          </Button>
          <Button variant="outline" className="text-opta-purple border-opta-purple hover:bg-opta-purple/10 flex items-center gap-2">
            <User size={18} />
            Perfil
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex gap-2">
          <Button size="sm" className="bg-opta-purple text-white rounded-md hover:bg-opta-purple-dark">
            Nueva
          </Button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 absolute top-16 inset-x-0 bg-white shadow-md z-20">
          <div className="flex flex-col space-y-3">
            <a
              href="#features"
              className="text-gray-600 hover:text-opta-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-opta-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="#demo"
              className="text-gray-600 hover:text-opta-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <Button className="w-full bg-opta-purple hover:bg-opta-purple-dark">Solicitar Demo</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
