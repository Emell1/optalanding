
import React from 'react';
import { MessageSquare, Filter, Search, Clock, User, FileText, Settings } from 'lucide-react';

const features = [
  {
    icon: <Filter className="h-8 w-8 text-opta-purple" />,
    title: 'Filtros dinámicos',
    description: 'Activan categorías, ítems y subitems según el contexto de tu consulta.'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-opta-purple" />,
    title: 'Chat conversacional',
    description: 'Interacción natural con respuestas enriquecidas y adaptadas a tus necesidades.'
  },
  {
    icon: <FileText className="h-8 w-8 text-opta-purple" />,
    title: 'Panel inteligente',
    description: 'Acceso organizado a todos tus documentos y recursos desde un solo lugar.'
  },
  {
    icon: <Search className="h-8 w-8 text-opta-purple" />,
    title: 'Búsqueda priorizada',
    description: 'Encuentra información por palabras clave con lógica de prioridades integrada.'
  },
  {
    icon: <Clock className="h-8 w-8 text-opta-purple" />,
    title: 'Registro de historial',
    description: 'Métricas detalladas y seguimiento de todas las interacciones por usuario.'
  },
  {
    icon: <Settings className="h-8 w-8 text-opta-purple" />,
    title: 'Panel administrador',
    description: 'Gestión avanzada de contenidos, perfiles y permisos totalmente personalizable.'
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Una herramienta poderosa, diseñada a tu medida</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estas son algunas de las funciones que forman la base de OPTA. El resto lo desarrollamos juntos:
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
