
import React from 'react';
import PraxiaGif from './PraxiaGif';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container px-4 mx-auto">
        <div className="text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} 
            <img 
              src="/lovable-uploads/3433abd4-6ae4-470c-9446-8773c2cda89e.png" 
              alt="OPTA Logo" 
              className="inline-block h-6 mx-2 align-middle"
            />
            es de
            <PraxiaGif />
            . Transformamos procesos en conocimiento.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
