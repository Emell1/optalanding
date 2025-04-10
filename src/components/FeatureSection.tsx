
import React from 'react';
import { Filter, MessageSquare, Search, BarChart3, Lock, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Filter className="h-8 w-8 text-opta-purple" />,
    title: 'Filtros dinámicos',
    description: 'Activan categorías, ítems y subitems según el contexto de tu consulta.'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-opta-purple" />,
    title: 'Chat conversacional',
    description: 'Interacción natural con respuestas enriquecidas y adaptadas a tus necesidades.'
  },
  {
    icon: <Search className="h-8 w-8 text-opta-purple" />,
    title: 'Búsqueda priorizada',
    description: 'Encuentra información por palabras clave con lógica de prioridades integrada.'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-opta-purple" />,
    title: 'Registro de historial',
    description: 'Seguimiento de métricas por usuario para analizar el uso y optimizar la herramienta.'
  },
  {
    icon: <Lock className="h-8 w-8 text-opta-purple" />,
    title: 'Perfiles y permisos',
    description: 'Gestión avanzada de contenidos y accesos según el rol de cada usuario.'
  },
  {
    icon: <Settings className="h-8 w-8 text-opta-purple" />,
    title: 'Panel administrador',
    description: 'Interfaz personalizable para gestionar todos los aspectos de la plataforma.'
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Una herramienta poderosa, diseñada a tu medida</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estas son algunas de las funciones que forman la base de OPTA. El resto lo desarrollamos juntos:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 rounded-xl overflow-hidden shadow-xl h-[400px] relative">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&q=80&blur=5" 
              alt="Profesionales en una oficina moderna utilizando la plataforma OPTA con su interfaz de filtros dinámicos y chat conversacional" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/70 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold mb-2">Visualiza lo que OPTA puede hacer</h3>
              <p className="text-gray-700">Interfaz intuitiva que combina filtros dinámicos con respuestas conversacionales enriquecidas.</p>
            </div>
          </div>
          
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100/60 group h-full"
            >
              <CardContent className="p-5 flex flex-col h-full">
                <div className="mb-3 flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-opta-purple/10 group-hover:bg-opta-purple/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div id="demo" className="mt-16 bg-gradient-to-r from-opta-purple-dark via-opta-purple to-opta-purple-light rounded-xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-white text-2xl font-bold mb-4">¿Listo para dar el siguiente paso?</h3>
              <p className="text-white/90 mb-6">
                Descubre cómo OPTA puede adaptarse específicamente a los procesos de tu organización.
              </p>
              <button 
                className="bg-gradient-to-r from-white to-gray-50 text-opta-purple hover:from-gray-50 hover:to-white px-6 py-3 rounded-lg shadow-md font-medium transition-all duration-300 w-fit"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar una demo
              </button>
            </div>
            <div className="md:w-1/2 bg-white/10 p-6">
              <div className="bg-white/5 border border-white/20 rounded-lg p-6 backdrop-blur-sm h-full">
                <ul className="space-y-4">
                  <li className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3 shrink-0">✓</div>
                    <span>Diagnóstico personalizado de tus procesos</span>
                  </li>
                  <li className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3 shrink-0">✓</div>
                    <span>Implementación adaptada a tu negocio</span>
                  </li>
                  <li className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3 shrink-0">✓</div>
                    <span>Acompañamiento continuo post-implementación</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
