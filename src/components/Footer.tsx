
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container px-4 mx-auto">
        <div className="text-center text-black">
          <p>
            © {new Date().getFullYear()} 
            <img 
              src="/lovable-uploads/3433abd4-6ae4-470c-9446-8773c2cda89e.png" 
              alt="OPTA Logo" 
              className="inline-block h-6 mx-2 align-middle"
            />
            es de
            <a 
              href="https://www.praxia.site/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="/lovable-uploads/9dff30a6-79fc-4c48-8912-e98fb9062ebf.png"
                alt="Praxia Logo"
                className="inline-block h-6 mx-2 align-middle hover:opacity-80 transition-opacity"
              />
            </a>
            . Transformamos procesos en conocimiento.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
