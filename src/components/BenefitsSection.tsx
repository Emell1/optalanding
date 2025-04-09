
import React from 'react';
import { TrendingUp, Check, Repeat, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="h-10 w-10 text-opta-purple" />,
    title: 'Procesos más simples y efectivos',
    description: 'Desarrollamos flujos conversacionales claros y optimizados para tu equipo.'
  },
  {
    icon: <Check className="h-10 w-10 text-opta-purple" />,
    title: 'Acceso inteligente al conocimiento',
    description: 'Tus recursos clave, organizados y listos para ser consultados cuando se necesitan.'
  },
  {
    icon: <Repeat className="h-10 w-10 text-opta-purple" />,
    title: 'Alineación entre áreas',
    description: 'Una única fuente de verdad para todos, con respuestas coherentes y actualizadas.'
  }
];

const useCases = [
  {
    icon: "🛒",
    title: "Equipos comerciales que necesitan acceder a respuestas rápidas y coherentes"
  },
  {
    icon: "👥",
    title: "Soporte interno de RRHH para onboarding y gestión de consultas"
  },
  {
    icon: "🎯",
    title: "Centros de atención con procesos repetitivos que requieren guía precisa"
  },
  {
    icon: "📚",
    title: "Equipos de formación con recursos dispersos o poco estructurados"
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnología + Estrategia: una combinación que transforma</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OPTA combina lo mejor de ambos mundos para ofrecer resultados tangibles desde el primer día.
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
        
        <div className="bg-opta-purple/10 rounded-xl p-8 max-w-4xl mx-auto border border-opta-purple/20 mb-12">
          <h3 className="text-2xl font-bold mb-3 text-center">Escalabilidad garantizada</h3>
          <p className="text-center text-gray-700 mb-0">Lo que hoy es una solución puntual, mañana puede ser tu sistema operativo del conocimiento.</p>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">¿Dónde puede aplicarse OPTA?</h3>
          <p className="text-center text-gray-600 mb-8">
            Cada organización tiene sus desafíos. Aquí algunos ejemplos de aplicación real:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl mr-3 flex-shrink-0">{useCase.icon}</div>
                <p className="text-lg text-gray-800">{useCase.title}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 rounded-lg bg-gray-50 border border-gray-200">
            <p className="text-center text-gray-700 font-medium">
              ¿Tienes otro caso? Hablemos y lo diseñamos juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
