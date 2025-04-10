
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollAnimationRef = useRef<number | null>(null);

  // Cleanup function to remove event listeners and animation frames when component unmounts
  useEffect(() => {
    return () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
        document.removeEventListener('click', stopAutoScroll);
      }
    };
  }, []);

  const startAutoScroll = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent immediate cancellation
    
    // Stop any existing scroll animation
    stopAutoScroll();
    
    // Find the contact section
    const contactElement = document.getElementById('contact');
    if (!contactElement) {
      console.error("Contact element not found");
      return;
    }
    
    const targetPosition = contactElement.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 55688; // 10% más lento que 50625 (50625 * 1.1 = 55688 ms)
    
    // Add event listener to stop scrolling on click
    document.addEventListener('click', stopAutoScroll);
    
    // Initial immediate scroll to show action
    window.scrollTo({
      top: startPosition + 5, // Small jump for immediate feedback
      behavior: 'auto'
    });
    
    // Use linear animation for constant speed
    const linearScroll = () => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed < duration) {
        // Calculate progress with linear motion (constant speed)
        const progress = elapsed / duration;
        
        // Calculate new position
        const newPosition = startPosition + distance * progress;
        
        // Perform the scroll
        window.scrollTo({
          top: newPosition,
          behavior: 'auto'
        });
        
        // Continue animation
        scrollAnimationRef.current = requestAnimationFrame(linearScroll);
      } else {
        // Animation complete
        stopAutoScroll();
        
        // Ensure we're at the exact target position
        window.scrollTo({
          top: targetPosition,
          behavior: 'auto'
        });
      }
    };
    
    // Start the animation immediately
    const startTime = Date.now();
    scrollAnimationRef.current = requestAnimationFrame(linearScroll);
    
    console.log("Auto scroll started", { startPosition, targetPosition, distance, duration: "55.688 segundos (10% más lento, velocidad constante)" });
  };

  const stopAutoScroll = () => {
    // Cancel any ongoing animation
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
      
      // Remove the click event listener
      document.removeEventListener('click', stopAutoScroll);
      
      console.log("Auto scroll stopped");
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
