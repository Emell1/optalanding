
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    // Get all section elements
    const sectionElements = Array.from(document.querySelectorAll('section')) as HTMLElement[];
    setSections(sectionElements);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Show button when scrolled past the first section
      if (scrollPosition > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine current section
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionElements[i].offsetTop - 200) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToPreviousSection = () => {
    const targetIndex = Math.max(currentSectionIndex - 1, 0);
    if (sections[targetIndex]) {
      const targetPosition = sections[targetIndex].offsetTop;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToPreviousSection}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-opta-purple to-opta-purple-dark hover:from-opta-purple-dark hover:to-opta-purple text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 z-50"
      aria-label="Ir a la sección anterior"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BackToTopButton;
