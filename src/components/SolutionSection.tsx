
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';

const SolutionSection = () => {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: gridRef, inView: gridVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      name: "FOR EARTH",
      image: "https://soloxspace.com/wp-content/uploads/2022/09/earth-exploration.jpg",
      description: "SOLOX applies targeted remote sensing science to discover and monitor critical mineral sources that are needed for the energy transition, such as lithium, copper, cobalt, nickel, and REEs.",
      delay: 100
    },
    {
      name: "FOR SPACE",
      image: "https://soloxspace.com/wp-content/uploads/2022/09/Banner-photo-high-res.jpg",
      description: "SOLOX leverages high-sensitivity remote sensing science to detect critical minerals at the parts-per-million level for ISRU applications from regolith remote sensing data acquired from satellites.",
      delay: 300
    },
    {
      name: "HYBRID SOLUTION",
      image: "https://soloxspace.com/wp-content/uploads/2022/09/investment-portfolio.jpg",
      description: "We provide mineral characterization, using both our space exploration expertise and in situ validation; this approach significantly reduces exploration risks and costs.",
      delay: 500
    }
  ];

  return (
    <section id="solution" className="py-24 bg-earth-pattern bg-fixed bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className={`transition-all duration-1000 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">OUR SOLUTION</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg font-inter">
            Our advanced technology enables the identification and extraction of critical resources essential for the clean energy transition and space exploration advancement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={gridRef}>
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`glass-card overflow-hidden hover:bg-black/60 transition-all duration-500 delay-${solution.delay} ${gridVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: `${solution.delay}ms`, 
                transitionDuration: '1000ms',
                transitionProperty: 'all' 
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                  <h3 className="text-solox-blue font-audiowide text-2xl px-6 py-4">{solution.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 font-inter">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <Card className={`bg-black/40 backdrop-blur-md border-gray-800/50 overflow-hidden transition-all duration-1000 delay-700 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-solox-blue font-audiowide text-xl mb-4">OUR APPROACH</h3>
                  <p className="text-gray-300 font-inter">
                    Our hybrid approach combines AI, advanced spectroscopy methods, and machine learning models, which are all validated and optimized through field data collection. The resulting method creates a unique signature that tells us with a high degree of confidence where specific minerals are likely to be found.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://soloxspace.com/wp-content/uploads/2022/09/About-photo-high-res-1.jpg" 
                    alt="SOLOX Technology" 
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

export default SolutionSection;
