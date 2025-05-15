
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
                src="https://soloxspace.com/wp-content/uploads/2022/10/Kevin-Cannon-SOLOX-Space_2028002494.jpg" 
                alt="Kevin Cannon" 
                className="rounded-lg w-full h-auto object-cover relative"
              />
              
              <div className="absolute bottom-4 left-4 flex space-x-3">
                <a href="https://www.linkedin.com/in/kannon/" target="_blank" rel="noopener noreferrer" className="bg-black/70 hover:bg-solox-blue text-white p-2 rounded-full transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://twitter.com/cannonkg" target="_blank" rel="noopener noreferrer" className="bg-black/70 hover:bg-solox-blue text-white p-2 rounded-full transition-colors" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="https://cannontology.com/" target="_blank" rel="noopener noreferrer" className="bg-black/70 hover:bg-solox-blue text-white p-2 rounded-full transition-colors" aria-label="Website">
                  <Globe size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className={`md:w-1/2 space-y-5 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
            <h3 className="section-subtitle text-3xl">DR. KEVIN CANNON</h3>
            <p className="text-solox-blue text-xl font-semibold mb-6 font-inter">
              Co-founder & Chief Executive Officer
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-inter">
              Dr. Cannon is a planetary scientist with expertise in the characterization of planetary surfaces and the structure and composition of materials, particularly those related to potential space resources.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-inter">
              He has published over 40 peer-reviewed papers on topics ranging from lunar resources and the geologic history of Mars, to machine learning applications for remote sensing.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-inter">
              Dr. Cannon was formerly an Assistant Professor at the Colorado School of Mines, where he worked on projects for NASA, the European Space Agency, and commercial space companies, and was the director of the Space Resources Graduate Program.
            </p>
            
            <div className="glass-card inline-flex px-6 py-3 mt-4 items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-slow"></div>
              <span className="text-sm text-gray-300 font-inter">PhD in Planetary Science from Brown University</span>
            </div>
          </div>
        </div>

        {/* Second team member */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mt-24">
          <div className={`md:w-1/2 space-y-5 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
            <h3 className="section-subtitle text-3xl">AXEL EMMERMANN</h3>
            <p className="text-solox-blue text-xl font-semibold mb-6 font-inter">
              Director of Earth Applications
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-inter">
              Axel is an entrepreneur, investor, and engineer with a deep understanding of software architecture and development, and particular expertise in software instrument control.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-inter">
              With over 20 years of experience as CEO & CTO in innovative companies spanning high-tech instrumentation, networking, and software for small and large enterprises, Axel brings technical depth and business knowledge to the team.
            </p>
            
            <div className="glass-card inline-flex px-6 py-3 mt-4 items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-slow"></div>
              <span className="text-sm text-gray-300 font-inter">Former CEO, Chief Software Architect and CTO</span>
            </div>
          </div>

          <div className={`md:w-1/2 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 -translate-y-12'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-solox-blue to-solox-darkblue rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://soloxspace.com/wp-content/uploads/2022/10/Axel-Emmermann-SOLOX-Space-2.jpg" 
                alt="Axel Emmermann" 
                className="rounded-lg w-full h-auto object-cover relative"
              />
              
              <div className="absolute bottom-4 left-4 flex space-x-3">
                <a href="https://www.linkedin.com/in/axelemmermann/" target="_blank" rel="noopener noreferrer" className="bg-black/70 hover:bg-solox-blue text-white p-2 rounded-full transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
