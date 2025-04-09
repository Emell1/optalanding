
import React from 'react';
import { Button } from '@/components/ui/button';

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
            <img 
              src="https://aa063bb9-60ce-49cb-86a6-6a888e37d7f2.lovableproject.com/opta-screenshot-1.png" 
              alt="Interfaz de OPTA mostrando la búsqueda de documentos" 
              className="w-full h-auto rounded-xl shadow-xl animate-fade-in" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
