
import React from 'react';
import { TrendingUp, Check, Repeat, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="h-10 w-10 text-opta-purple" />,
    title: '+ Productividad',
    description: 'Reduce tareas repetitivas y accede a la información de forma instantánea.'
  },
  {
    icon: <Check className="h-10 w-10 text-opta-purple" />,
    title: '+ Precisión',
    description: 'Minimiza errores operativos con contenidos validados y respuestas priorizadas.'
  },
  {
    icon: <Repeat className="h-10 w-10 text-opta-purple" />,
    title: '+ Consistencia',
    description: 'Mantén el estándar en tus procesos internos y la calidad en la entrega.'
  }
];

const results = [
  {
    icon: "🕒",
    title: "-40% de tiempo en búsquedas de información"
  },
  {
    icon: "😊",
    title: "+35% en satisfacción de colaboradores"
  },
  {
    icon: "✅",
    title: "-25% en errores de procedimiento"
  },
  {
    icon: "📈",
    title: "ROI < 6 meses con una implementación ágil"
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados visibles, mejoras reales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OPTA te ayuda a automatizar, sistematizar y evolucionar tus procesos de conocimiento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="rounded-lg p-6 bg-gray-50 border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-opta-purple/20 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-center">¿Qué han logrado nuestros usuarios?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <div key={index} className="flex items-start">
                <div className="text-3xl mr-3 flex-shrink-0">{result.icon}</div>
                <p className="text-lg font-medium text-gray-800">{result.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
