
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import MineralsSection from '../components/MineralsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga para la animación inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <div
        className={`fixed inset-0 bg-black z-[100] flex items-center justify-center transition-opacity duration-1000 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-4xl font-bold animate-pulse">
          <span className="text-solox-blue">SOLOX</span> <span className="text-white">SPACE</span>
        </div>
      </div>

      {/* Main content */}
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <Navigation />
        <Hero />
        <AboutSection />
        <TeamSection />
        <MineralsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
