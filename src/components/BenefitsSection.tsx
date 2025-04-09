
import React from 'react';
import { TrendingUp, Check, Repeat, Scale, Users, Briefcase, Headphones, BookOpen, ExternalLink } from 'lucide-react';

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
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Equipos comerciales que necesitan acceder a respuestas rápidas y coherentes",
    bgColor: "bg-opta-purple"
  },
  {
    icon: <Briefcase className="h-6 w-6 text-white" />,
    title: "Soporte interno de RRHH para onboarding y gestión de consultas",
    bgColor: "bg-opta-purple-light"
  },
  {
    icon: <Headphones className="h-6 w-6 text-white" />,
    title: "Centros de atención con procesos repetitivos que requieren guía precisa",
    bgColor: "bg-opta-purple"
  },
  {
    icon: <BookOpen className="h-6 w-6 text-white" />,
    title: "Equipos de formación con recursos dispersos o poco estructurados",
    bgColor: "bg-opta-purple-light"
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
          
          <div className="space-y-4">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className={`${useCase.bgColor} rounded-lg p-4 transition-all hover:scale-[1.01] shadow-md hover:shadow-lg cursor-pointer`}
              >
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <p className="text-lg text-white flex-grow">{useCase.title}</p>
                  <ExternalLink className="h-5 w-5 text-white/70" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 rounded-lg bg-gray-50 border border-gray-200 text-center">
            <p className="text-lg text-gray-700 font-medium mb-2">
              ¿Tienes otro caso?
            </p>
            <p className="text-opta-purple">
              Hablemos y lo diseñamos juntos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
