
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
              <Button className="gradient-bg px-8 py-6 text-lg">Comenzar Ahora</Button>
              <Button variant="outline" className="px-8 py-6 text-lg">Ver Demostración</Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 border border-gray-200 animate-fade-in">
              <div className="flex justify-between items-center mb-4 border-b pb-4">
                <div className="flex items-center text-primary-600">
                  <MessageSquare className="mr-2" size={20} />
                  <span className="font-medium">Nueva conversación</span>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-700">
                    <FileText size={18} />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-700">
                    <Filter size={18} />
                  </button>
                </div>
              </div>
              <div className="h-64 bg-gray-50 rounded-lg p-4 overflow-y-auto mb-4">
                <div className="bg-primary-100 rounded-lg p-3 max-w-md ml-auto mb-4">
                  <p className="text-gray-800">¿Cómo puedo optimizar mi proceso de atención al cliente?</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 max-w-md mr-auto">
                  <p className="text-gray-800">Aquí tienes algunas recomendaciones para optimizar tu proceso de atención al cliente:</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm">
                    <li>Implementar un sistema de tickets</li>
                    <li>Establecer SLAs claros</li>
                    <li>Automatizar respuestas a preguntas frecuentes</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center space-x-2 border-t pt-4">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  <Button variant="outline" size="sm">Más detalles</Button>
                  <Button variant="outline" size="sm">Ejemplos</Button>
                  <Button variant="outline" size="sm">Métricas</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
