
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
            Descubre la simplicidad y potencia de nuestra plataforma inteligente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://aa063bb9-60ce-49cb-86a6-6a888e37d7f2.lovableproject.com/opta-screenshot-2.png" 
                alt="Dashboard de OPTA" 
                className="w-full h-auto" 
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-opta-purple">Gestión de documentos</h3>
                <p className="text-gray-600">Organiza y accede a toda tu información desde un solo lugar</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://aa063bb9-60ce-49cb-86a6-6a888e37d7f2.lovableproject.com/opta-screenshot-3.png" 
                alt="Interfaz de chat de OPTA" 
                className="w-full h-auto" 
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-opta-purple">Asistente conversacional</h3>
                <p className="text-gray-600">Resuelve dudas y obtén respuestas precisas al instante</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://aa063bb9-60ce-49cb-86a6-6a888e37d7f2.lovableproject.com/opta-screenshot-4.png" 
                alt="Búsqueda avanzada en OPTA" 
                className="w-full h-auto" 
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-opta-purple">Búsqueda inteligente</h3>
                <p className="text-gray-600">Encuentra cualquier información en segundos con nuestra tecnología AI</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://aa063bb9-60ce-49cb-86a6-6a888e37d7f2.lovableproject.com/opta-screenshot-5.png" 
                alt="Análisis de datos en OPTA" 
                className="w-full h-auto" 
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-opta-purple">Análisis de datos</h3>
                <p className="text-gray-600">Visualiza y comprende la información para tomar mejores decisiones</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-opta-purple hover:bg-opta-purple-dark px-8 py-6 text-lg">
            Solicitar una demostración personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
