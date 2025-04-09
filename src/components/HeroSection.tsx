
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Filter, FileText } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Optimiza tus <span className="gradient-text">procesos</span>, <span className="gradient-text">tareas</span> y <span className="gradient-text">aprendizaje</span>
            </h1>
            <p className="text-xl text-gray-600 md:pr-8">
              OPTA es una plataforma de conversación inteligente que simplifica el acceso a la información y optimiza tus procesos de trabajo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-opta-purple hover:bg-opta-purple-dark px-8 py-6 text-lg">Comenzar Ahora</Button>
              <Button variant="outline" className="border-opta-purple text-opta-purple hover:bg-opta-purple/10 px-8 py-6 text-lg">Ver Demostración</Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 border border-gray-200 animate-fade-in">
              <div className="flex justify-between items-center mb-4 border-b pb-4">
                <div className="flex items-center">
                  <Button className="bg-opta-purple text-white rounded-md hover:bg-opta-purple-dark">
                    Nueva Conversación
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100 text-opta-purple">
                    <Clock size={18} />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 text-opta-purple">
                    <User size={18} />
                  </button>
                </div>
              </div>
              
              <div className="italic text-gray-700 mb-2">Consulta: Test</div>
              
              <div className="bg-white rounded-lg p-3 mb-4">
                <h3 className="text-opta-purple font-medium">Documentos encontrados</h3>
                <p className="text-gray-700">Estos son los documentos encontrados con tu búsqueda</p>
                
                <div className="flex flex-wrap gap-6 mt-4">
                  <div className="flex flex-col items-center">
                    <div className="text-opta-purple mb-1">.PDF</div>
                    <div className="w-16 h-16 border-2 border-opta-purple rounded-md flex items-center justify-center">
                      <FileText className="w-10 h-10 text-opta-purple" />
                    </div>
                    <span className="mt-1 text-sm">test 1</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-opta-purple mb-1">.PDF</div>
                    <div className="w-16 h-16 border-2 border-opta-purple rounded-md flex items-center justify-center">
                      <FileText className="w-10 h-10 text-opta-purple" />
                    </div>
                    <span className="mt-1 text-sm">libro</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-opta-purple mb-1">.PDF</div>
                    <div className="w-16 h-16 border-2 border-opta-purple rounded-md flex items-center justify-center">
                      <FileText className="w-10 h-10 text-opta-purple" />
                    </div>
                    <span className="mt-1 text-sm">test 99</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="text-sm border border-opta-purple text-opta-purple rounded-full px-4 py-1">
                  Innovación como motor de cambio
                </button>
                <button className="text-sm border border-opta-purple text-opta-purple rounded-full px-4 py-1">
                  Compromiso con la eficiencia
                </button>
                <button className="text-sm border border-opta-purple text-opta-purple rounded-full px-4 py-1">
                  Resultados medibles y sostenibles
                </button>
              </div>
              
              <div className="flex items-center space-x-2 border-t pt-4">
                <input 
                  type="text" 
                  placeholder="Escribe palabras clave para buscar archivos" 
                  className="opta-search-input flex-grow"
                />
                <Button className="bg-opta-purple hover:bg-opta-purple-dark">
                  Consultar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
