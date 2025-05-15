
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Droplet, CircleDot } from 'lucide-react';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-solox-blue/10 -top-[250px] -left-[250px] blur-3xl"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-solox-darkblue/10 bottom-[0px] right-[0px] blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="section-title">
          ABOUT <span className="text-gradient">SOLOX SPACE MINING</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed font-inter">
              The future of Space exploration, energy transition, and sustainable development depends on the availability of essential resources, both on Earth and in Space. SOLOX SPACE MINING focuses on remote exploration technologies to identify critical minerals and resources necessary for enabling these advancements.
            </p>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
          <div className={`md:w-1/2 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <img 
                src="https://www.soloxspace.com/imagenes/p2.1.1.jpg" 
                alt="Solox Space Mining" 
                className="rounded-lg w-full h-auto object-cover shadow-xl shadow-solox-blue/10 hover-scale"
              />
              <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-solox-blue rounded-full flex items-center justify-center text-black font-audiowide text-xl opacity-90">2023</div>
            </div>
          </div>
          
          <div className={`md:w-1/2 space-y-6 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-x-12'}`}>
            
            
            <h3 className="text-solox-blue font-audiowide text-2xl mt-8">In Space, we prioritize the detection of:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Droplet className="text-solox-blue mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg leading-relaxed font-inter">
                  <span className="font-semibold">Water Ice:</span> Vital for life support, fuel production, and enabling long-term exploration missions on the Moon and Mars.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot className="text-solox-blue mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg leading-relaxed font-inter">
                  <span className="font-semibold">Iron and Aluminum:</span> Key materials for building infrastructure and supporting In-Situ Resource Utilization (ISRU).
                </p>
              </li>
            </ul>
            
            <h3 className="text-solox-blue font-audiowide text-2xl mt-8">On Earth, we target:</h3>
            <p className="text-gray-300 text-lg leading-relaxed font-inter">
              <span className="font-semibold">Copper, Cobalt, Molybdenum, and Nickel:</span> Crucial minerals for renewable energy technologies and industrial applications, addressing growing global demand.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed font-inter mt-6">
              Our Remote Exploration Technology reduce the environmental and financial costs of resource identification, accelerating discovery timelines and enabling efficient access to essential materials. By bridging the gap between terrestrial mining and Space exploration, SOLOX SPACE MINING contributes to building a sustainable future on Earth and beyond.
            </p>
            
            <div className="pt-4">
              <a href="#solution" className="solox-button">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
