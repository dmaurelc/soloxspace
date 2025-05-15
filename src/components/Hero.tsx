
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-space-pattern bg-cover bg-fixed bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>
      
      {/* Optional: Video background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="video-bg"
        poster="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg"
      >
        <source src="https://player.vimeo.com/external/574149340.hd.mp4?s=3ab0cc0f92ab09e5e9c938b13c844f196a65f4d4&profile_id=174" type="video/mp4" />
      </video>
      
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className={`transition-all duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-2 tracking-tight">
              <span className="text-solox-blue">SOLOX</span> <span className="text-white">SPACE</span>
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="text-white">MINING</span>
            </h2>
          </div>
          
          <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-500 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl mb-10 text-center leading-relaxed">
              <span className="text-solox-blue font-semibold">Remote Precise Exploration Technology</span> to 
              discover critical resources on the Moon and Mars 
              for ISRU and sustainable infrastructure, and 
              critical minerals on Earth to support future 
              energies, new technologies, and industrial 
              advancements
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <a href="#about" className="solox-button group">
              DISCOVER MORE
              <ChevronDown className="transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <ChevronDown size={24} strokeWidth={2} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;
