
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-opta-purple text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Lleva tus procesos al siguiente nivel
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Prueba OPTA y descubre cómo una mejor gestión del conocimiento puede transformar tu operación.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-opta-purple hover:bg-gray-100 px-8">
            Solicita tu Demo
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 px-8">
            Habla con Ventas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
