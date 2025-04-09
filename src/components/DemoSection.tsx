
import React from 'react';
import { Search, Settings, MessageSquare, Layers, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const metodologySteps = [
  {
    icon: <Search className="h-8 w-8 text-opta-purple" />,
    title: "Diagnóstico inicial",
    description: "Analizamos tus procesos actuales, puntos críticos y oportunidades de mejora."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-opta-purple" />,
    title: "Diseño conversacional",
    description: "Definimos cómo debe responder OPTA según tu lógica de negocio."
  },
  {
    icon: <Settings className="h-8 w-8 text-opta-purple" />,
    title: "Configuración personalizada",
    description: "Creamos filtros, contenidos y niveles de respuesta adaptados a tu operación."
  },
  {
    icon: <Layers className="h-8 w-8 text-opta-purple" />,
    title: "Implementación ágil",
    description: "Integramos la solución en tus sistemas y capacitamos a tu equipo."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-opta-purple" />,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {metodologySteps.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="mr-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-opta-purple">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-opta-purple hover:bg-opta-purple-dark px-8 py-6 text-lg">
            Comienza tu proceso de diagnóstico
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
