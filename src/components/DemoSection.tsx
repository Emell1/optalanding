
import React from 'react';
import { Search, Settings, MessageSquare, Layers, RefreshCw, ArrowRight } from 'lucide-react';

const metodologySteps = [
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Diagnóstico inicial",
    description: "Analizamos tus procesos actuales, puntos críticos y oportunidades de mejora."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    title: "Diseño conversacional",
    description: "Definimos cómo debe responder OPTA según tu lógica de negocio."
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Configuración personalizada",
    description: "Creamos filtros, contenidos y niveles de respuesta adaptados a tu operación."
  },
  {
    icon: <Layers className="h-8 w-8 text-white" />,
    title: "Implementación ágil",
    description: "Integramos la solución en tus sistemas y capacitamos a tu equipo."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-white" />,
    title: "Mejora continua",
    description: "Seguimos ajustando y evolucionando OPTA con base en datos reales de uso y feedback."
  }
];

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">De la idea a la solución: te acompañamos en cada paso</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro enfoque metodológico asegura resultados efectivos y una experiencia centrada en tus necesidades.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Línea conectora */}
          <div className="absolute top-14 left-0 right-0 h-1 bg-gradient-to-r from-opta-purple to-opta-purple-dark z-0 hidden md:block"></div>
          
          {/* Pasos del proceso */}
          <div className="flex flex-col md:flex-row gap-4 relative z-10">
            {metodologySteps.map((step, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="bg-gradient-to-r from-opta-purple to-opta-purple-dark rounded-full w-28 h-28 flex items-center justify-center mb-4 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm">{step.description}</p>
                
                {/* Flechas conectoras (excepto último elemento) */}
                {index < metodologySteps.length - 1 && (
                  <div className="hidden md:flex absolute top-14 left-[calc(20%*1.5+10%*1.25)] transform -translate-x-1/2">
                    <ArrowRight className="h-8 w-8 text-opta-purple-light" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-opta-purple hover:bg-opta-purple-dark text-white px-8 py-6 rounded-lg text-lg font-medium transition-colors">
            Comienza tu proceso de diagnóstico
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
