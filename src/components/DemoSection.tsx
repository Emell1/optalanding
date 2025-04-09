
import React from 'react';
import { Search, ChevronRight, Filter } from 'lucide-react';

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Funciona OPTA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre la simplicidad y potencia de nuestra interfaz conversacional
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-4 md:p-8 border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <div className="flex items-center text-primary-600 font-medium">
              <button className="px-4 py-2 bg-primary-50 rounded-lg text-primary-600 hover:bg-primary-100 transition-colors">
                Nueva conversación
              </button>
            </div>
            <div className="flex space-x-3">
              <button className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 flex items-center">
                <Filter size={18} className="mr-1" />
                <span>Filtros</span>
              </button>
              <button className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
                Historial
              </button>
              <button className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
                Perfil
              </button>
            </div>
          </div>

          {/* Toggle Filter */}
          <div className="mb-6">
            <div className="flex border rounded-lg p-1 max-w-sm">
              <button className="flex-1 py-2 rounded-md gradient-bg text-white font-medium">
                Procesos
              </button>
              <button className="flex-1 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Documentos
              </button>
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex space-x-3 mb-6 overflow-x-auto pb-2">
            <button className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full whitespace-nowrap font-medium">
              Todos
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full whitespace-nowrap">
              Ventas
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full whitespace-nowrap">
              Atención al cliente
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full whitespace-nowrap">
              Recursos humanos
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full whitespace-nowrap">
              Finanzas
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Items */}
            <div className="md:w-1/4">
              <div className="bg-gray-50 rounded-lg p-3">
                <h3 className="font-medium text-gray-700 mb-3">Items</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors">
                    Atención de reclamos
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    Procesos de venta
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    Capacitación
                  </button>
                </div>
              </div>
            </div>
            
            {/* Chat Display */}
            <div className="md:w-3/4 bg-gray-50 rounded-lg p-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Atención de reclamos</h4>
                <p className="text-gray-600 mb-4">
                  Proceso optimizado para gestionar reclamos de clientes de manera eficiente y efectiva.
                </p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1 bg-primary-50 text-primary-700 rounded-md text-sm hover:bg-primary-100">
                    Procedimiento
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200">
                    Ejemplos
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200">
                    Tiempos de respuesta
                  </button>
                </div>
              </div>
              
              <div className="bg-primary-50 border border-primary-100 rounded-lg p-4">
                <h5 className="font-medium text-primary-800 mb-2">Procedimiento de atención</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Recibir y registrar el reclamo en el sistema.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Categorizar según prioridad y departamento responsable.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Asignar a un ejecutivo especializado.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-6 flex items-center border rounded-lg p-2 bg-gray-50">
            <Search size={20} className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Buscar por palabra clave..." 
              className="bg-transparent flex-1 outline-none text-gray-700" 
            />
            <button className="px-3 py-1 bg-primary-600 text-white rounded-md text-sm">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
