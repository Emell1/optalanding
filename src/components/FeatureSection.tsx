
import React from 'react';
import { MessageSquare, Filter, Search, Clock, User, FileText } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-opta-purple" />,
    title: 'Interacción Natural',
    description: 'Chat intuitivo que entiende tu flujo de trabajo y se adapta a tus necesidades.'
  },
  {
    icon: <Filter className="h-8 w-8 text-opta-purple" />,
    title: 'Filtros Inteligentes',
    description: 'Elige opciones que activan dinámicamente categorías, ítems y subitems, en función de tu contexto.'
  },
  {
    icon: <Search className="h-8 w-8 text-opta-purple" />,
    title: 'Búsqueda por Palabras Clave',
    description: 'Encuentra documentos y respuestas exactas en segundos, directamente desde la barra conversacional.'
  },
  {
    icon: <FileText className="h-8 w-8 text-opta-purple" />,
    title: 'Respuestas Enriquecidas',
    description: 'Recibe respuestas visuales, con estilo, imágenes, links y subrespuestas prioritarias.'
  },
  {
    icon: <Clock className="h-8 w-8 text-opta-purple" />,
    title: 'Historial con Contexto',
    description: 'Consulta tu recorrido completo: cada interacción queda registrada con fecha y hora.'
  },
  {
    icon: <User className="h-8 w-8 text-opta-purple" />,
    title: 'Perfiles y Permisos',
    description: 'Gestiona accesos y roles de usuario, incluyendo vistas para administradores y grupos personalizados.'
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo esencial, al alcance de una conversación</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con tecnología conversacional y filtros inteligentes, OPTA convierte la complejidad en claridad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
