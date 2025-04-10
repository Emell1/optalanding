
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollIntervalRef = useRef<number | null>(null);

  const startAutoScroll = () => {
    // Detener cualquier scroll previo
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }

    // Obtener la posición del elemento de contacto
    const contactElement = document.getElementById('contact');
    if (!contactElement) return;
    
    const targetPosition = contactElement.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 15000; // 15 segundos para el scroll
    const scrollStep = 10; // Intervalo en ms para cada paso
    
    let startTime: number | null = null;

    // Función para manejar cada paso del scroll
    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calcular la nueva posición con una función de easing
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutCubic = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      const newPosition = startPosition + distance * easeInOutCubic;
      
      window.scrollTo(0, newPosition);
      
      // Continuar la animación si no ha terminado
      if (elapsed < duration) {
        scrollIntervalRef.current = window.requestAnimationFrame(animateScroll);
      }
    };
    
    // Iniciar la animación
    scrollIntervalRef.current = window.requestAnimationFrame(animateScroll);
    
    // Agregar un event listener para detener el scroll al hacer clic
    document.addEventListener('click', stopAutoScroll);
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      if (typeof scrollIntervalRef.current === 'number') {
        window.cancelAnimationFrame(scrollIntervalRef.current);
      }
      scrollIntervalRef.current = null;
      
      // Eliminar el event listener
      document.removeEventListener('click', stopAutoScroll);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6">
              Optimiza tus <span className="gradient-text">procesos</span>, <span className="gradient-text">tareas</span> <span>y </span><span className="gradient-text">aprendizaje</span>
            </h1>
            <p className="text-xl text-gray-600 md:pr-8">
              OPTA es una herramienta inteligente que se personaliza según tus necesidades. Combina tecnología conversacional con análisis estratégico para mejorar cómo trabajas, aprendes y decides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                className="bg-gradient-to-r from-opta-purple to-opta-purple-dark hover:from-opta-purple-dark hover:to-opta-purple text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                onClick={startAutoScroll}
              >
                Descubre cómo funciona
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <img 
              src="https://aa063bb9-60ce-49cb-86a6-6a888e37d7f2.lovableproject.com/opta-screenshot-1.png" 
              alt="Interfaz de OPTA con procesos personalizados, filtros configurables y diagnóstico" 
              className="w-full h-auto rounded-xl shadow-xl animate-fade-in" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
