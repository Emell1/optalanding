
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/opta-logo.png" 
                alt="Logo de OPTA" 
                className="h-12" 
              />
            </div>
            <p className="text-gray-400 mb-4">
              El optimizador de procesos, tareas y aprendizaje que transformará tu organización.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Producto</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Características</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Precios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentación</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutoriales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Soporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} OPTA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
