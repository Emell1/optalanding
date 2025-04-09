
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
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="OPTA en acción" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Visualiza lo que OPTA puede hacer</h3>
                <p className="text-white/90">Interfaz intuitiva que combina filtros dinámicos con respuestas conversacionales enriquecidas.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.slice(0, 4).map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="mb-3 flex items-center gap-2">
                  {feature.icon}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {features.slice(4, 6).map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-start"
            >
              <div className="bg-purple-50 p-3 rounded-full mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-opta-purple to-opta-purple-dark rounded-xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-white text-2xl font-bold mb-4">¿Listo para dar el siguiente paso?</h3>
              <p className="text-white/90 mb-6">
                Descubre cómo OPTA puede adaptarse específicamente a los procesos de tu organización.
              </p>
              <button className="bg-white text-opta-purple hover:bg-gray-100 px-6 py-3 rounded-lg shadow-md font-medium transition-colors w-fit">
                Solicitar una demo
              </button>
            </div>
            <div className="md:w-1/2 bg-white/10 p-4">
              <div className="bg-white/5 border border-white/20 rounded-lg p-4 backdrop-blur-sm">
                <ul className="space-y-3">
                  <li className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">✓</div>
                    <span>Diagnóstico personalizado de tus procesos</span>
                  </li>
                  <li className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">✓</div>
                    <span>Implementación adaptada a tu negocio</span>
                  </li>
                  <li className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">✓</div>
                    <span>Acompañamiento continuo post-implementación</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
