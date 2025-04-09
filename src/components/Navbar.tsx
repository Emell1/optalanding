
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-gray-100">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-2xl gradient-text">OPTA</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
            Características
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-primary-600 transition-colors">
            Beneficios
          </a>
          <a href="#demo" className="text-gray-600 hover:text-primary-600 transition-colors">
            Demo
          </a>
          <Button className="gradient-bg">Solicitar Demo</Button>
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 absolute top-16 inset-x-0 bg-white shadow-md z-20">
          <div className="flex flex-col space-y-3">
            <a
              href="#features"
              className="text-gray-600 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="#demo"
              className="text-gray-600 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <Button className="gradient-bg w-full">Solicitar Demo</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
