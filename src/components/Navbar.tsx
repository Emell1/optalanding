
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-gray-100">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://aa063bb9-60ce-49cb-86a6-6a888e37d7f2.lovableproject.com/opta-logo.png" 
            alt="Logo de OPTA" 
            className="h-14" 
          />
        </div>

        {/* Menu Button */}
        <div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <div className="px-4 py-3 absolute top-16 inset-x-0 bg-white shadow-md z-20">
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
            <a
              href="#contact"
              className="text-gray-600 hover:text-opta-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
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
