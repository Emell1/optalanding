
import React from 'react';
import { MessageSquare, Filter, Search, Clock, User, FileText } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-opta-purple" />,
    title: 'Interfaz Conversacional',
    description: 'Interactúa de forma natural a través de una interfaz de chat intuitiva que facilita la comunicación.'
  },
  {
    icon: <Filter className="h-8 w-8 text-opta-purple" />,
    title: 'Sistema de Filtros Dinámicos',
    description: 'Navega por categorías y opciones que se adaptan según tus selecciones previas.'
  },
  {
    icon: <Search className="h-8 w-8 text-opta-purple" />,
    title: 'Búsqueda por Palabras Clave',
    description: 'Encuentra rápidamente documentos y respuestas mediante búsquedas precisas por palabras clave.'
  },
  {
    icon: <FileText className="h-8 w-8 text-opta-purple" />,
    title: 'Respuestas Enriquecidas',
    description: 'Visualiza respuestas con formato enriquecido, incluyendo imágenes y texto con estilo.'
  },
  {
    icon: <Clock className="h-8 w-8 text-opta-purple" />,
    title: 'Historial de Consultas',
    description: 'Accede a tu historial completo de interacciones con fecha y hora para recapitular tu gestión.'
  },
  {
    icon: <User className="h-8 w-8 text-opta-purple" />,
    title: 'Perfiles Personalizados',
    description: 'Gestiona tu perfil con distintos niveles de acceso según tus necesidades.'
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Características Principales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OPTA ofrece una experiencia completa para optimizar la gestión de procesos, tareas y aprendizaje
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
