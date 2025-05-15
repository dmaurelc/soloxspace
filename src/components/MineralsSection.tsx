
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { CircleDot, Diamond } from 'lucide-react';

const MineralsSection = () => {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: gridRef, inView: gridVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: detailsRef, inView: detailsVisible } = useInView({
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
                  <Diamond className="text-solox-blue" />
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
                  <CircleDot className="text-solox-blue" />
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
      
      {/* New Minerals Details Section */}
      <div className="container mx-auto px-4 mt-32 relative z-10" ref={detailsRef}>
        <div className="space-y-32">
          {/* Copper */}
          <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-1000 delay-100 ${detailsVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
            <div className="w-full md:w-1/2">
              <img 
                src="https://www.soloxspace.com/imagenes/remo.png" 
                alt="Copper applications in renewable energy" 
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-solox-blue font-audiowide text-3xl mb-6">Copper</h3>
              <p className="text-gray-300 text-lg">
                Copper's unparalleled electrical conductivity and recyclability make it indispensable in the global shift to sustainable energy solutions. It is essential for the deployment of renewable energy, electric vehicles, and energy-efficient infrastructure. As global efforts to decarbonize intensify, the demand for Copper will only continue to rise, solidifying its role in the future of clean energy and electrification.
              </p>
            </div>
          </div>
          
          {/* Cobalt */}
          <div className={`flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 transition-all duration-1000 delay-300 ${detailsVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
            <div className="w-full md:w-1/2">
              <img 
                src="https://www.soloxspace.com/imagenes/carro.jpg" 
                alt="Cobalt applications in electric vehicles" 
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-solox-blue font-audiowide text-3xl mb-6">Cobalt</h3>
              <p className="text-gray-300 text-lg">
                Cobalt's role in batteries, especially for electric vehicles and renewable energy storage, makes it indispensable for the shift to greener energy solutions. The demand for Cobalt is growing rapidly as industries and governments around the world move towards reducing carbon emissions. Additionally, cobalt's use in technologies that improve energy efficiency and sustainability aligns with global efforts to combat climate change.
              </p>
            </div>
          </div>
          
          {/* Molybdenum */}
          <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-1000 delay-500 ${detailsVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
            <div className="w-full md:w-1/2">
              <img 
                src="https://www.soloxspace.com/imagenes/molibdeno.png" 
                alt="Molybdenum applications in energy infrastructure" 
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-solox-blue font-audiowide text-3xl mb-6">Molybdenum</h3>
              <p className="text-gray-300 text-lg">
                Molybdenum plays a crucial role in the Energy Transition due to its properties as a heat-resistant metal and its use in green technologies. It enhances the durability and efficiency of renewable energy infrastructure, such as wind turbines, solar panels, and hydrogen production systems. Molybdenum alloys are essential in nuclear power and advanced energy storage systems, improving the lifespan of batteries and fuel cells. Its role in producing high-strength steel for electric vehicles and other sustainable applications also makes it vital for transitioning to a low-carbon future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MineralsSection;
