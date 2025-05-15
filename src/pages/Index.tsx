
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import MineralsSection from '../components/MineralsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      <Hero />
      <AboutSection />
      <TeamSection />
      <MineralsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
