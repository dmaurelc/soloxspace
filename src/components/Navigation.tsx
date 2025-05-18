
import React, { useState, useEffect } from 'react';
import { X, Menu, Palette } from 'lucide-react';
import { useScrollToAnchor } from '../hooks/useScrollToAnchor';
import { useTheme } from '../context/ThemeContext';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { HexColorPicker } from 'react-colorful';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToElement } = useScrollToAnchor();
  const { colorTheme, setColorTheme } = useTheme();

  // Colores azules predefinidos
  const blueColors = [
    { name: 'Default', value: '#00BFFF' },
    { name: 'Light Blue', value: '#60a5fa' },
    { name: 'Royal Blue', value: '#2563eb' },
    { name: 'Navy Blue', value: '#1e3a8a' },
    { name: 'Teal Blue', value: '#14b8a6' }
  ];

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

  // Función para manejar cambios de color personalizado
  const handleColorChange = (color: string) => {
    setColorTheme(color);
  };

  const currentColor = colorTheme === 'default' ? '#00BFFF' : 
    colorTheme === 'lightblue' ? '#60a5fa' : 
    colorTheme === 'royalblue' ? '#2563eb' :
    colorTheme === 'navyblue' ? '#1e3a8a' :
    colorTheme === 'tealblue' ? '#14b8a6' : 
    colorTheme;

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
          
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <button 
                  className="flex items-center bg-black/40 backdrop-blur-md py-1 px-3 rounded-full border border-gray-800/50"
                  title="Select theme color"
                >
                  <Palette size={20} style={{ color: currentColor }}/>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4 bg-black/90 backdrop-blur-md border-gray-800/50">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-white">Select Blue Theme</h4>
                  <div className="grid grid-cols-5 gap-2">
                    {blueColors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => handleColorChange(color.name === 'Default' ? 'default' : color.value)}
                        className={`w-full h-8 rounded-md border ${colorTheme === (color.name === 'Default' ? 'default' : color.value) ? 'border-white' : 'border-gray-700'} flex items-center justify-center transition-all hover:scale-105`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="custom-color" className="text-xs text-gray-400">
                      Custom Color
                    </label>
                    <HexColorPicker 
                      color={currentColor} 
                      onChange={handleColorChange}
                      className="w-full"
                    />
                  </div>
                </div>
              </PopoverContent>
            </Popover>

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
          
          <div className="flex flex-col items-center space-y-2 mt-6">
            <span className="text-white">Color Theme</span>
            <div className="bg-black/40 backdrop-blur-md p-4 rounded-lg border border-gray-800/50 w-64">
              <HexColorPicker 
                color={currentColor} 
                onChange={handleColorChange}
                className="w-full"
              />
              <div className="grid grid-cols-5 gap-2 mt-4">
                {blueColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorChange(color.name === 'Default' ? 'default' : color.value)}
                    className={`w-full h-8 rounded-md border ${colorTheme === (color.name === 'Default' ? 'default' : color.value) ? 'border-white' : 'border-gray-700'}`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
