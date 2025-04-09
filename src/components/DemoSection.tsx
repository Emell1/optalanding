
import React from 'react';
import { Search, Settings, MessageSquare, Layers, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const demoItems = [
  {
    icon: <FileText className="h-8 w-8 text-opta-purple" />,
    image: "https://aa063bb9-60ce-49cb-86a6-6a888e37d7f2.lovableproject.com/opta-screenshot-2.png",
    title: "Panel Inteligente de Documentos",
    description: "Accede, clasifica y administra tu conocimiento institucional desde un único lugar."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-opta-purple" />,
    image: "https://aa063bb9-60ce-49cb-86a6-6a888e37d7f2.lovableproject.com/opta-screenshot-3.png",
    title: "Conversación Contextual",
    description: "OPTA guía tus interacciones con respuestas que evolucionan según tus elecciones."
  },
  {
    icon: <Layers className="h-8 w-8 text-opta-purple" />,
    image: "https://aa063bb9-60ce-49cb-86a6-6a888e37d7f2.lovableproject.com/opta-screenshot-4.png",
    title: "Exploración Multinivel",
    description: "Desde un ítem hasta 10 subrespuestas en cascada. Todo prioritizado para ti."
  },
  {
    icon: <Settings className="h-8 w-8 text-opta-purple" />,
    image: "https://aa063bb9-60ce-49cb-86a6-6a888e37d7f2.lovableproject.com/opta-screenshot-5.png",
    title: "Backoffice Potente",
    description: "El panel de administrador permite configurar filtros, contenidos, usuarios y más, sin fricciones."
  }
];

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explora cómo OPTA transforma la experiencia de uso</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una sola plataforma. Múltiples formas de optimizar tu operación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {demoItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto" 
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-opta-purple">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-opta-purple hover:bg-opta-purple-dark px-8 py-6 text-lg">
            Solicita tu Demo Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
