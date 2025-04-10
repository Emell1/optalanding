
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
    const duration = 101250; // Reducido un 25% de 135000 (101250 ms = 101.25 segundos)
    let startTime: number | null = null;
    
    // Add event listener to stop scrolling on click
    document.addEventListener('click', stopAutoScroll);
    
    // Animation function with immediate start
    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      if (elapsed < duration) {
        // Calculate progress with easing
        const progress = elapsed / duration;
        const easeInOutCubic = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        // Calculate new position
        const newPosition = startPosition + distance * easeInOutCubic;
        
        // Perform the scroll
        window.scrollTo({
          top: newPosition,
          behavior: 'auto' // Use auto instead of smooth for consistent animation
        });
        
        // Continue animation
        scrollAnimationRef.current = requestAnimationFrame(animateScroll);
      } else {
        // Animation complete
        stopAutoScroll();
      }
    };
    
    // Start the animation immediately
    scrollAnimationRef.current = requestAnimationFrame(animateScroll);
    
    // First scroll to start the experience immediately
    window.scrollTo({
      top: startPosition + 1, // Just a small jump to show immediate action
      behavior: 'auto'
    });
    
    // Add a console log to confirm the function was called
    console.log("Auto scroll started", { startPosition, targetPosition, distance, duration: "101.25 segundos (25% más rápido que antes)" });
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
