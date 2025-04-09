
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container px-4 mx-auto">
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} OPTA. Transformamos procesos en conocimiento.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
