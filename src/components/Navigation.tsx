
import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold">
              <span className="text-solox-blue">SOLOX</span> <span className="text-white">SPACE</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-solox-blue transition-colors">About Us</a>
            <a href="#minerals" className="text-white hover:text-solox-blue transition-colors">Critical Minerals</a>
            <a href="#team" className="text-white hover:text-solox-blue transition-colors">Team</a>
            <a href="#contact" className="text-white hover:text-solox-blue transition-colors">Contact Us</a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-solox-blue transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black h-screen w-full absolute top-16 left-0 flex flex-col items-start p-4">
          <a href="#about" className="text-white hover:text-solox-blue transition-colors py-4 text-xl" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#minerals" className="text-white hover:text-solox-blue transition-colors py-4 text-xl" onClick={() => setIsOpen(false)}>Critical Minerals</a>
          <a href="#team" className="text-white hover:text-solox-blue transition-colors py-4 text-xl" onClick={() => setIsOpen(false)}>Team</a>
          <a href="#contact" className="text-white hover:text-solox-blue transition-colors py-4 text-xl" onClick={() => setIsOpen(false)}>Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
