
import React from 'react';
import { Search, ChevronRight, Filter, Clock, User, MessageSquare, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Funciona OPTA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre la simplicidad y potencia de nuestra interfaz conversacional
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-4 md:p-8 border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <div className="flex items-center">
              <Button className="bg-opta-purple text-white rounded-md hover:bg-opta-purple-dark">
                Nueva Conversación
              </Button>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-opta-purple text-opta-purple hover:bg-opta-purple/10 flex items-center gap-2">
                <Clock size={18} />
                <span className="hidden md:inline">Historial</span>
              </Button>
              <Button variant="outline" className="border-opta-purple text-opta-purple hover:bg-opta-purple/10 flex items-center gap-2">
                <User size={18} />
                <span className="hidden md:inline">Perfil</span>
              </Button>
            </div>
          </div>

          {/* Toggle Filter */}
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-opta-purple w-12 h-6 rounded-full relative">
              <div className="bg-white w-5 h-5 rounded-full absolute top-0.5 left-0.5"></div>
            </div>
            <span className="text-opta-purple font-medium">Configuración</span>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Sidebar - Questions */}
            <div className="md:w-1/4">
              <div className="bg-gray-50 rounded-lg p-3">
                <h3 className="font-medium text-gray-700 mb-3">¿Qué es OPTA?</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-opta-purple text-white hover:bg-opta-purple-dark transition-colors">
                    Introducción a OPTA
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-opta-purple/20 text-opta-purple hover:bg-opta-purple/30 transition-colors">
                    Fundamentos
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 transition-colors">
                    Diferenciadores clave
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 transition-colors">
                    Impacto esperado
                  </button>
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="md:w-3/4 bg-white rounded-lg p-4 border border-gray-100">
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
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-6 flex items-center gap-2">
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
    </section>
  );
};

export default DemoSection;
