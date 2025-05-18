
import React, { useEffect, useState } from 'react';
import { Mouse } from 'lucide-react';
import { useScrollToAnchor } from '../hooks/useScrollToAnchor';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const { scrollToElement } = useScrollToAnchor();
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToElement(e, 'about');
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('https://www.soloxspace.com/imagenes/planets2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className={`transition-all duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="flex flex-col text-6xl md:text-8xl font-audiowide mb-2 tracking-tight">
              <span className="text-solox-blue">Solox Space</span> <span className="text-white">Mining</span>
            </h1>
          </div>
          
          <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-500 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl mb-10 text-center leading-relaxed font-inter">
              <span className="text-solox-blue font-semibold">Exploration Technology</span> to 
              discover critical resources on the Moon and Mars 
              for ISRU and sustainable infrastructure, and 
              critical minerals on Earth to support future 
              energies, new technologies, and industrial 
              advancements
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <a href="#about" className="solox-button group" onClick={handleScrollToAbout}>
              DISCOVER MORE
              <Mouse className="transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <Mouse size={24} strokeWidth={2} className="text-white animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
