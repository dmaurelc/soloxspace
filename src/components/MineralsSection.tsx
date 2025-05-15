
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';

const MineralsSection = () => {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: gridRef, inView: gridVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const minerals = [
    {
      name: "LITHIUM",
      image: "https://images.pexels.com/photos/1542493/pexels-photo-1542493.jpeg",
      description: "Essential for batteries in electric vehicles and renewable energy storage systems, driving the transition to sustainable transportation and power generation.",
      delay: 100
    },
    {
      name: "COPPER",
      image: "https://images.pexels.com/photos/2219954/pexels-photo-2219954.jpeg",
      description: "Crucial for electrical systems, renewable energy infrastructure, and modern electronics, with growing demand in sustainable technology applications.",
      delay: 300
    },
    {
      name: "RARE EARTHS",
      image: "https://images.pexels.com/photos/1336998/pexels-photo-1336998.jpeg",
      description: "Vital for high-performance magnets in wind turbines, electric vehicles, and advanced electronics, with applications in defense and clean energy technologies.",
      delay: 500
    }
  ];

  return (
    <section id="minerals" className="py-24 bg-earth-pattern bg-fixed bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className={`transition-all duration-1000 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">CRITICAL MINERALS</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
            Our advanced technology enables the identification and extraction of these critical resources essential for the clean energy transition and technological advancement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={gridRef}>
          {minerals.map((mineral, index) => (
            <div 
              key={index} 
              className={`glass-card overflow-hidden hover:bg-black/60 transition-all duration-500 delay-${mineral.delay} ${gridVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: `${mineral.delay}ms`, 
                transitionDuration: '1000ms',
                transitionProperty: 'all' 
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={mineral.image} 
                  alt={mineral.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                  <h3 className="text-solox-blue font-semibold text-2xl px-6 py-4">{mineral.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300">{mineral.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className={`bg-black/40 backdrop-blur-md border-gray-800/50 overflow-hidden transition-all duration-1000 delay-300 ${sectionVisible ? 'opacity-100' : 'opacity-0 translate-x-12'}`}>
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-solox-blue font-semibold text-xl mb-4">ENERGY TRANSITION</h3>
                  <p className="text-gray-300">
                    Our mineral exploration supports the global transition to clean energy by locating resources essential for renewable technologies, energy storage, and efficient power transmission systems.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg" 
                    alt="Renewable Energy" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className={`bg-black/40 backdrop-blur-md border-gray-800/50 overflow-hidden transition-all duration-1000 delay-500 ${sectionVisible ? 'opacity-100' : 'opacity-0 translate-x-12'}`}>
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-solox-blue font-semibold text-xl mb-4">COBALT</h3>
                  <p className="text-gray-300">
                    A key component in lithium-ion batteries, essential for electric vehicles and portable electronics. Our advanced detection technology helps identify new cobalt deposits to meet growing global demand.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg" 
                    alt="Cobalt" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className={`bg-black/40 backdrop-blur-md border-gray-800/50 col-span-1 lg:col-span-2 overflow-hidden transition-all duration-1000 delay-700 ${sectionVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-solox-blue font-semibold text-xl mb-4">MOLYBDENUM</h3>
                  <p className="text-gray-300">
                    Critical for high-strength steel alloys used in construction, energy, and transportation industries. Our exploration capabilities help locate new deposits of this versatile industrial metal.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg" 
                    alt="Molybdenum" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MineralsSection;
