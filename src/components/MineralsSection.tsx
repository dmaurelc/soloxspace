
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { Copper, Cobalt } from 'lucide-react';

const MineralsSection = () => {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: gridRef, inView: gridVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="minerals" className="py-24 bg-earth-pattern bg-fixed bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className={`transition-all duration-1000 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">CRITICAL MINERALS</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
            Critical Minerals and their roles in the Energy Transition and Technologies
          </p>
        </div>
        
        <div className="text-center mb-10">
          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            Copper, Molybdenum, Cobalt, and Nickel: Critical Minerals for the energy transition and new technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={gridRef}>
          <div 
            className={`glass-card overflow-hidden hover:bg-black/60 transition-all duration-500 delay-100 ${gridVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}
            style={{ 
              transitionDelay: '100ms', 
              transitionDuration: '1000ms',
              transitionProperty: 'all' 
            }}
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src="https://www.soloxspace.com/imagenes/p1.png" 
                alt="Copper" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                <div className="px-6 py-4 flex items-center gap-3">
                  <Copper className="text-solox-blue" />
                  <h3 className="text-solox-blue font-semibold text-2xl">COPPER</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300">Essential for batteries in electric vehicles and renewable energy storage systems, driving the transition to sustainable transportation and power generation.</p>
            </div>
          </div>
          
          <div 
            className={`glass-card overflow-hidden hover:bg-black/60 transition-all duration-500 delay-300 ${gridVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}
            style={{ 
              transitionDelay: '300ms', 
              transitionDuration: '1000ms',
              transitionProperty: 'all' 
            }}
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src="https://www.soloxspace.com/imagenes/p2.jpg" 
                alt="Cobalt" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                <div className="px-6 py-4 flex items-center gap-3">
                  <Cobalt className="text-solox-blue" />
                  <h3 className="text-solox-blue font-semibold text-2xl">COBALT</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300">A key component in lithium-ion batteries, essential for electric vehicles and portable electronics. Critical for the clean energy transition.</p>
            </div>
          </div>
          
          <div 
            className={`glass-card overflow-hidden hover:bg-black/60 transition-all duration-500 delay-500 ${gridVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}
            style={{ 
              transitionDelay: '500ms', 
              transitionDuration: '1000ms',
              transitionProperty: 'all' 
            }}
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src="https://www.soloxspace.com/imagenes/molibdeno2.png" 
                alt="Molybdenum" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                <div className="px-6 py-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-solox-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="text-solox-blue font-semibold text-2xl">MOLYBDENUM</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300">Critical for high-strength steel alloys used in construction, energy, and transportation industries. Important for resilient renewable energy infrastructure.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className={`transition-all duration-1000 delay-700 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
            <a href="#contact" className="solox-button">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MineralsSection;
