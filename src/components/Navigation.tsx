import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { useScrollToAnchor } from '../hooks/useScrollToAnchor';
import { useTheme } from '../context/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToElement } = useScrollToAnchor();
  const { colorTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    scrollToElement(e, targetId);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-2xl font-audiowide"
              onClick={(e) => handleNavLinkClick(e, 'root')}
            >
              <span className="text-solox-blue">Solox</span> <span className="text-white">Space</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a 
              href="#about" 
              className="text-white opacity-80 hover:opacity-100 hover:text-solox-blue transition-colors font-inter"
              onClick={(e) => handleNavLinkClick(e, 'about')}
            >
              About Us
            </a>
            <a 
              href="#team" 
              className="text-white opacity-80 hover:opacity-100 hover:text-solox-blue transition-colors font-inter"
              onClick={(e) => handleNavLinkClick(e, 'team')}
            >
              Team
            </a>
            <a 
              href="#solution" 
              className="text-white opacity-80 hover:opacity-100 hover:text-solox-blue transition-colors font-inter"
              onClick={(e) => handleNavLinkClick(e, 'solution')}
            >
              Our Solution
            </a>
            <a 
              href="#minerals" 
              className="text-white opacity-80 hover:opacity-100 hover:text-solox-blue transition-colors font-inter"
              onClick={(e) => handleNavLinkClick(e, 'minerals')}
            >
              Minerals
            </a>
            <a 
              href="#contact" 
              className="text-white opacity-80 hover:opacity-100 hover:text-solox-blue transition-colors font-inter"
              onClick={(e) => handleNavLinkClick(e, 'contact')}
            >
              Contact
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-solox-blue transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg h-screen w-full fixed top-0 left-0 flex flex-col items-center justify-center space-y-10 animate-fade-in">
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-white hover:text-solox-blue transition-colors absolute top-6 right-6"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <a 
            href="#about" 
            className="text-white hover:text-solox-blue transition-colors py-2 text-2xl font-inter" 
            onClick={(e) => handleNavLinkClick(e, 'about')}
          >
            About Us
          </a>
          <a 
            href="#team" 
            className="text-white hover:text-solox-blue transition-colors py-2 text-2xl font-inter" 
            onClick={(e) => handleNavLinkClick(e, 'team')}
          >
            Team
          </a>
          <a 
            href="#solution" 
            className="text-white hover:text-solox-blue transition-colors py-2 text-2xl font-inter" 
            onClick={(e) => handleNavLinkClick(e, 'solution')}
          >
            Our Solution
          </a>
          <a 
            href="#minerals" 
            className="text-white hover:text-solox-blue transition-colors py-2 text-2xl font-inter" 
            onClick={(e) => handleNavLinkClick(e, 'minerals')}
          >
            Minerals
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-solox-blue transition-colors py-2 text-2xl font-inter" 
            onClick={(e) => handleNavLinkClick(e, 'contact')}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
