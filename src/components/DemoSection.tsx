
import React from 'react';
import { Search, Settings, MessageSquare, Layers, RefreshCw } from 'lucide-react';
import { Card } from '@/components/ui/card';

const metodologySteps = [
  {
    icon: <Search className="h-10 w-10 text-opta-purple-light" />,
    title: "Diagnóstico inicial",
    description: "Analizamos tus procesos actuales, puntos críticos y oportunidades de mejora."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-opta-purple-light" />,
    title: "Diseño conversacional",
    description: "Definimos cómo debe responder OPTA según tu lógica de negocio."
  },
  {
    icon: <Settings className="h-10 w-10 text-opta-purple-light" />,
    title: "Configuración personalizada",
    description: "Creamos filtros, contenidos y niveles de respuesta adaptados a tu operación."
  },
  {
    icon: <Layers className="h-10 w-10 text-opta-purple-light" />,
    title: "Implementación ágil",
    description: "Integramos la solución en tus sistemas y capacitamos a tu equipo."
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-opta-purple-light" />,
    title: "Mejora continua",
    description: "Seguimos ajustando y evolucionando OPTA con base en datos reales."
  }
];

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">De la idea a la solución: te acompañamos en cada paso</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro enfoque metodológico asegura resultados efectivos y una experiencia centrada en tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {metodologySteps.map((step, index) => (
            <div 
              key={index} 
              className="group"
            >
              {/* Tarjeta con diseño único para la metodología */}
              <div className="relative overflow-hidden rounded-xl h-full bg-gradient-to-br from-white to-gray-50 border-b-4 border-opta-purple-light shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                
                {/* Número de fase como círculo decorativo */}
                <div className="absolute -right-4 -top-4 bg-gradient-to-br from-opta-purple-light/20 to-opta-purple-light/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-opta-purple text-lg font-bold relative top-2 right-2">{index + 1}</span>
                </div>
                
                <div className="p-6 flex flex-col h-full">
                  {/* Icono con efecto de gradiente */}
                  <div className="mb-4 p-3 inline-flex rounded-lg bg-gradient-to-br from-gray-100 to-white shadow-inner">
                    {step.icon}
                  </div>
                  
                  {/* Contenido */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-opta-purple transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                  
                  {/* Línea decorativa */}
                  <div className="mt-auto pt-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-opta-purple-light to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-opta-purple to-opta-purple-dark hover:from-opta-purple-dark hover:to-opta-purple text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Comienza tu proceso de diagnóstico
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
