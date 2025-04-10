
import React from 'react';
import { 
  MdTrendingUp, 
  MdCheck, 
  MdLoop, 
  MdArrowForward, 
  MdBusinessCenter, 
  MdPeople, 
  MdHeadsetMic, 
  MdMenuBook 
} from 'react-icons/md';

const benefits = [
  {
    icon: <MdTrendingUp className="h-10 w-10 text-opta-purple" />,
    title: 'Procesos más simples y efectivos',
    description: 'Desarrollamos flujos conversacionales claros y optimizados para tu equipo.'
  },
  {
    icon: <MdCheck className="h-10 w-10 text-opta-purple" />,
    title: 'Acceso inteligente al conocimiento',
    description: 'Tus recursos clave, organizados y listos para ser consultados cuando se necesitan.'
  },
  {
    icon: <MdLoop className="h-10 w-10 text-opta-purple" />,
    title: 'Alineación entre áreas',
    description: 'Una única fuente de verdad para todos, con respuestas coherentes y actualizadas.'
  }
];

const useCases = [
  {
    icon: <MdBusinessCenter className="h-10 w-10 text-opta-purple" />,
    title: "Equipos comerciales que necesitan acceder a respuestas rápidas y coherentes",
    description: "Información de productos, precios y procesos siempre actualizada y accesible"
  },
  {
    icon: <MdPeople className="h-10 w-10 text-opta-purple" />,
    title: "Soporte interno de RRHH para onboarding y gestión de consultas",
    description: "Políticas, procedimientos y respuestas a preguntas frecuentes en un solo lugar"
  },
  {
    icon: <MdHeadsetMic className="h-10 w-10 text-opta-purple" />,
    title: "Centros de atención con procesos repetitivos que requieren guía precisa",
    description: "Flujos de trabajo guiados y respuestas estandarizadas para mayor consistencia"
  },
  {
    icon: <MdMenuBook className="h-10 w-10 text-opta-purple" />,
    title: "Equipos de formación con recursos dispersos o poco estructurados",
    description: "Centralización de materiales formativos y acceso con filtrado inteligente"
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
              className="rounded-xl p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-opta-purple/10 group-hover:bg-opta-purple/20 flex items-center justify-center transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-opta-purple/10 to-opta-purple-light/10 rounded-xl p-8 max-w-4xl mx-auto border border-opta-purple/10 mb-16">
          <h3 className="text-2xl font-bold mb-3 text-center">Escalabilidad garantizada</h3>
          <p className="text-center text-gray-700 mb-0">Lo que hoy es una solución puntual, mañana puede ser tu sistema operativo del conocimiento.</p>
        </div>
        
        {/* Moved button to this position */}
        <div className="text-center mt-12 mb-16">
          <button 
            className="bg-gradient-to-r from-opta-purple to-opta-purple-dark hover:from-opta-purple-dark hover:to-opta-purple text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Comienza tu proceso de diagnóstico
          </button>
        </div>
        
        <div id="use-cases" className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">¿Dónde puede aplicarse OPTA?</h3>
          <p className="text-center text-gray-600 mb-10">
            Cada organización tiene sus desafíos. Aquí algunos ejemplos de aplicación real:
          </p>
          
          <div className="space-y-5">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden group"
              >
                <div className="flex items-start p-5 border border-gray-100 rounded-xl">
                  <div className="mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {useCase.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-medium mb-1">{useCase.title}</h4>
                    <p className="text-gray-500 text-sm">{useCase.description}</p>
                  </div>
                  <div className="text-opta-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200 text-center hover:bg-gray-100 transition-colors duration-300 cursor-pointer group">
            <p className="text-lg text-gray-700 font-medium mb-2 group-hover:text-opta-purple transition-colors duration-300">
              ¿Tienes otro caso? 
            </p>
            <p className="text-opta-purple font-medium">
              Hablemos y lo diseñamos juntos 🤝
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
