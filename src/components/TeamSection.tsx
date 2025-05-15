
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const TeamSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="team" className="py-24 bg-black relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-solox-blue/10 to-transparent opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="section-title">OUR TEAM</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
          <div className={`md:w-1/2 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 -translate-y-12'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-solox-blue to-solox-darkblue rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://www.soloxspace.com/imagenes/camioneta.jpg" 
                alt="Constanza Vallejo Grove" 
                className="rounded-lg w-full h-auto object-cover relative"
              />
              
              <div className="absolute bottom-4 left-4 flex space-x-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-black/70 hover:bg-solox-blue text-white p-2 rounded-full transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className={`md:w-1/2 space-y-5 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
            <h3 className="section-subtitle text-3xl">CONSTANZA VALLEJO GROVE</h3>
            <p className="text-solox-blue text-xl font-semibold mb-6 font-inter">
              Founder & Chief Executive Officer
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-inter">
              Constanza is a Business Engineer from Universidad Adolfo Ibáñez in Chile, with an MBA from EAE Business School in Barcelona, a Master's in Business Management from EADA Business School in Barcelona, and a Master in Digital Innovation & Entrepreneurial Leadership in ESCP Business School in Berlin, Shanghai, London and Sillicon Valley.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-inter">
              Constanza began her career in Mining and Energy in 2018, joining a Mining contractor in Chile. She later moved to Spain and became the Sales Director at an Energy Company. Upon her return to Chile, she founded ISOLMIN – Engineering Solutions for Industrial and Mining sectors, delivering Innovative, Technological, and Energy-Efficient solutions for the Mining Industry.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-inter">
              In parallel to ISOLMIN, she began developing Greenfield and Brownfield Mining Projects, where she decided to focus her career, developing technologies that enable the detection of new Mineral Deposits.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-inter">
              This deep industry expertise led to the creation of SOLOX SPACE MINING, leveraging cutting-edge detection technologies to bridge terrestrial mining excellence with space exploration needs. SOLOX SPACE MINING combines advanced engineering, sustainability, and innovation to address the critical challenges of resource exploration on Earth and in Space. This dual-purpose approach enables efficient exploration and drives technological innovation in resource identification and utilization. Constanza is a Christian, and the greatest value she sees in Mining and Mineral Deposits, is being able to witness firsthand the foundations of God's creation of the Earth and Universe.
            </p>
            
            <div className="glass-card inline-flex px-6 py-3 mt-4 items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-slow"></div>
              <span className="text-sm text-gray-300 font-inter">Founder and CEO of Solox Space Mining</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
