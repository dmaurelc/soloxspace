
import React from 'react';

const MineralsSection = () => {
  const minerals = [
    {
      name: "LITHIUM",
      image: "https://images.pexels.com/photos/1542493/pexels-photo-1542493.jpeg",
      description: "Essential for batteries in electric vehicles and renewable energy storage systems, driving the transition to sustainable transportation and power generation."
    },
    {
      name: "COPPER",
      image: "https://images.pexels.com/photos/2219954/pexels-photo-2219954.jpeg",
      description: "Crucial for electrical systems, renewable energy infrastructure, and modern electronics, with growing demand in sustainable technology applications."
    },
    {
      name: "RARE EARTHS",
      image: "https://images.pexels.com/photos/1336998/pexels-photo-1336998.jpeg",
      description: "Vital for high-performance magnets in wind turbines, electric vehicles, and advanced electronics, with applications in defense and clean energy technologies."
    }
  ];

  return (
    <section id="minerals" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">CRITICAL MINERALS</h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Our advanced technology enables the identification and extraction of these critical resources essential for the clean energy transition and technological advancement.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {minerals.map((mineral, index) => (
            <div key={index} className="bg-solox-darkgray rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <img 
                src={mineral.image} 
                alt={mineral.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-solox-blue font-semibold text-xl mb-2">{mineral.name}</h3>
                <p className="text-gray-300">{mineral.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-solox-darkgray rounded-lg overflow-hidden p-6">
            <h3 className="text-solox-blue font-semibold text-xl mb-4">ENERGY TRANSITION</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <img 
                src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg" 
                alt="Renewable Energy" 
                className="rounded w-full md:w-1/2 h-48 object-cover"
              />
              <div className="md:w-1/2">
                <p className="text-gray-300">
                  Our mineral exploration supports the global transition to clean energy by locating resources essential for renewable technologies, energy storage, and efficient power transmission systems.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-solox-darkgray rounded-lg overflow-hidden p-6">
            <h3 className="text-solox-blue font-semibold text-xl mb-4">COBALT</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <p className="text-gray-300">
                  A key component in lithium-ion batteries, essential for electric vehicles and portable electronics. Our advanced detection technology helps identify new cobalt deposits to meet growing global demand.
                </p>
              </div>
              <img 
                src="https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg" 
                alt="Cobalt" 
                className="rounded w-full md:w-1/2 h-48 object-cover"
              />
            </div>
          </div>
          
          <div className="bg-solox-darkgray rounded-lg overflow-hidden p-6">
            <h3 className="text-solox-blue font-semibold text-xl mb-4">MOLYBDENUM</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <img 
                src="https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg" 
                alt="Molybdenum" 
                className="rounded w-full md:w-1/2 h-48 object-cover"
              />
              <div className="md:w-1/2">
                <p className="text-gray-300">
                  Critical for high-strength steel alloys used in construction, energy, and transportation industries. Our exploration capabilities help locate new deposits of this versatile industrial metal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MineralsSection;
