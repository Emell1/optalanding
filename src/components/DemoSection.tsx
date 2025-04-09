
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

        <div className="relative max-w-6xl mx-auto">
          {/* Contenedor de proceso con línea de tiempo */}
          <div className="relative pb-12">
            {/* Línea de tiempo */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-opta-purple-light via-opta-purple to-opta-purple-dark transform -translate-y-1/2 hidden md:block"></div>
            
            {/* Pasos del proceso */}
            <div className="flex flex-col md:flex-row justify-between relative">
              {metodologySteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center mb-12 md:mb-0 relative z-10">
                  {/* Número de paso */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-opta-purple-light font-bold text-5xl opacity-20">
                    {index + 1}
                  </div>
                  
                  {/* Círculo con icono */}
                  <div className={`w-28 h-28 rounded-full flex items-center justify-center shadow-lg mb-4 
                    ${index % 2 === 0 ? 'bg-gradient-to-br from-opta-purple to-opta-purple-dark' : 'bg-gradient-to-br from-opta-purple-dark to-opta-purple'}`}>
                    {step.icon}
                  </div>
                  
                  {/* Contenido del paso */}
                  <div className="max-w-[180px] text-center mt-4">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  
                  {/* Líneas conectoras entre pasos (solo en móvil) */}
                  {index < metodologySteps.length - 1 && (
                    <div className="h-10 w-0.5 bg-gradient-to-b from-opta-purple to-opta-purple-light my-2 md:hidden"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
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
