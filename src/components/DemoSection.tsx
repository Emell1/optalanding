
import React from 'react';
import { Search, Settings, MessageSquare, Layers, RefreshCw } from 'lucide-react';

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

        <div className="max-w-5xl mx-auto relative">
          {/* Metodología moderna con efecto de gradiente y movimiento fluido */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 relative mb-10">
            {/* Línea conectora en desktop */}
            <div className="hidden md:block absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-opta-purple-light via-opta-purple to-opta-purple-dark opacity-60"></div>
            
            {metodologySteps.map((step, index) => (
              <div 
                key={index} 
                className="relative flex flex-col items-center max-w-[200px] group transition-all duration-300 hover:-translate-y-2"
              >
                {/* Fase número */}
                <span className="text-xs font-semibold text-opta-purple-light opacity-80 mb-2">
                  FASE {index + 1}
                </span>
                
                {/* Círculo con icono */}
                <div className="w-16 h-16 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-md mb-4 z-10
                  bg-gradient-to-br from-opta-purple to-opta-purple-dark group-hover:shadow-lg transition-all duration-300">
                  {step.icon}
                </div>
                
                {/* Contenido */}
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                
                {/* Conector vertical sólo en móvil */}
                {index < metodologySteps.length - 1 && (
                  <div className="h-8 w-0.5 bg-gradient-to-b from-opta-purple to-opta-purple-light my-2 md:hidden"></div>
                )}
              </div>
            ))}
          </div>

          {/* Elementos decorativos */}
          <div className="absolute -z-10 top-1/2 left-1/4 w-32 h-32 bg-opta-purple-light/5 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 top-1/3 right-1/4 w-40 h-40 bg-opta-purple/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-opta-purple to-opta-purple-dark hover:from-opta-purple-dark hover:to-opta-purple text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Comienza tu proceso de diagnóstico
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
