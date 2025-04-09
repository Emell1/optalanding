
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Mayor Productividad',
    description: 'Reduce el tiempo dedicado a buscar información y a realizar tareas repetitivas.',
    image: '/placeholder.svg'
  },
  {
    title: 'Toma de Decisiones Informada',
    description: 'Accede rápidamente a datos e información relevante para tomar mejores decisiones.',
    image: '/placeholder.svg'
  },
  {
    title: 'Consistencia en Procesos',
    description: 'Mantén la estandarización en todos los procesos de tu organización.',
    image: '/placeholder.svg'
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios de OPTA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo OPTA puede transformar la manera en que trabajas y aprendes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="rounded-lg p-6 bg-gray-50 border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <div className="h-48 w-48 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title} 
                    className="object-cover h-full w-full" 
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-center">Resultados Comprobados</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Ahorro de tiempo</h4>
                <p className="text-gray-600">Reducción del 40% en tiempo dedicado a búsqueda de información</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Mejora en satisfacción</h4>
                <p className="text-gray-600">Aumento del 35% en índices de satisfacción de usuarios</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Optimización de procesos</h4>
                <p className="text-gray-600">Reducción del 25% en errores de procedimiento</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-lg mb-1">ROI positivo</h4>
                <p className="text-gray-600">Retorno de inversión promedio en menos de 6 meses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
