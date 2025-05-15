
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-space-pattern bg-cover bg-center bg-no-repeat flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-solox-blue">SOLOX SPACE</span>
            <br />
            <span className="text-white">MINING</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-center">
            <span className="text-solox-blue font-semibold">Remote Precise Exploration Technology</span> to 
            discover critical resources on the Moon and Mars 
            for ISRU and sustainable infrastructure, and 
            critical minerals on Earth to support future 
            energies, new technologies, and industrial 
            advancements
          </p>
          <a href="#about" className="solox-button">
            DISCOVER MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
