
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Función para asegurar que el video se reproduce correctamente
    const handleVideoPlay = () => {
      if (videoRef.current) {
        // En algunos dispositivos móviles, se necesita recargar el video
        // para que comience la reproducción correctamente
        videoRef.current.load();
        
        // Pequeño retraso para asegurar que el video se cargue completamente
        setTimeout(() => {
          if (videoRef.current) {
            const playPromise = videoRef.current.play();
            
            // Manejar la promesa para evitar errores en consola
            if (playPromise !== undefined) {
              playPromise.catch(error => {
                console.log('Error al reproducir el video:', error);
              });
            }
          }
        }, 300);
      }
    };
    
    // Iniciar reproducción cuando el componente se monta
    handleVideoPlay();
    
    // Evento para dispositivos móviles para reiniciar el video cuando
    // se recupera la visibilidad de la página
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        handleVideoPlay();
      }
    });
    
    return () => {
      document.removeEventListener('visibilitychange', handleVideoPlay);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <video 
              ref={videoRef}
              autoPlay 
              muted 
              loop 
              playsInline
              className={`rounded-xl shadow-xl`}
              preload="auto"
            >
              <source src="/hero.mp4" type="video/mp4" />
              Tu navegador no puede cargar el video
            </video>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter mb-6">
              Más que una herramienta, una solución diseñada para ti
            </h2>
            
            <p className="text-lg text-gray-700">
              OPTA es un sistema base de optimización de procesos, tareas y aprendizaje que se adapta completamente a las necesidades de tu organización. Lo desarrollamos contigo, partiendo de un diagnóstico profundo de tu operación.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Nuestra propuesta combina:</h3>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-opta-purple" />
                </div>
                <p className="text-gray-700">Tecnología conversacional intuitiva</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-opta-purple" />
                </div>
                <p className="text-gray-700">Personalización total del flujo de contenidos y filtros</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-opta-purple" />
                </div>
                <p className="text-gray-700">Acompañamiento estratégico desde la consultoría hasta la implementación</p>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="p-5 bg-opta-purple/10 rounded-lg border border-opta-purple/20">
                <p className="text-gray-800 font-medium">
                  ¿Tienes procesos repetitivos, desorganizados o difíciles de escalar? Con OPTA, los transformamos en flujos eficientes y medibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
