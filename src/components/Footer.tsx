
import React from 'react';
import { ChevronUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black py-12 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <button 
            onClick={scrollToTop} 
            className="bg-solox-blue/10 hover:bg-solox-blue/20 text-solox-blue p-3 rounded-full mb-8 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
          
          <div className="text-3xl font-bold mb-4">
            <span className="text-solox-blue">SOLOX</span> <span className="text-white">SPACE</span>
          </div>
          
          <p className="text-gray-400 max-w-xl text-center mb-8">
            Pioneering the future of space resource utilization with cutting-edge remote sensing technology for critical mineral discovery.
          </p>
          
          <div className="flex space-x-6 mb-12">
            <a href="#" className="text-gray-400 hover:text-solox-blue transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-solox-blue transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-solox-blue transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="mb-4 md:mb-0">
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
              <a href="#about" className="text-gray-400 hover:text-solox-blue transition-colors text-sm">About</a>
              <a href="#minerals" className="text-gray-400 hover:text-solox-blue transition-colors text-sm">Minerals</a>
              <a href="#team" className="text-gray-400 hover:text-solox-blue transition-colors text-sm">Team</a>
              <a href="#contact" className="text-gray-400 hover:text-solox-blue transition-colors text-sm">Contact</a>
            </nav>
          </div>
          
          <div>
            <p className="text-gray-500 text-sm">&copy; {currentYear} Solox Space Mining. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
