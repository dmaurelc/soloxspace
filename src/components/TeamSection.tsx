
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
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                alt="Christina Vallejo Drake" 
                className="rounded-lg w-full h-auto object-cover relative"
              />
              
              <div className="absolute bottom-4 left-4 flex space-x-3">
                <a href="#" className="bg-black/70 hover:bg-solox-blue text-white p-2 rounded-full transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="bg-black/70 hover:bg-solox-blue text-white p-2 rounded-full transition-colors" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="#" className="bg-black/70 hover:bg-solox-blue text-white p-2 rounded-full transition-colors" aria-label="Website">
                  <Globe size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className={`md:w-1/2 space-y-5 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
            <h3 className="section-subtitle text-3xl">CHRISTINA VALLEJO DRAKE</h3>
            <p className="text-solox-blue text-xl font-semibold mb-6">
              Co-founder & Chief Executive Officer
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Christina brings over 15 years of experience in aerospace engineering and mineral resource management. After earning her Ph.D. in Aerospace Engineering from MIT, she worked with leading space agencies and mining corporations to develop innovative remote sensing technologies for resource identification.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Her vision for sustainable resource utilization both on Earth and in space has been the driving force behind Solox Space Mining's mission. Christina has published numerous papers on extra-terrestrial resource extraction and is a frequent speaker at international space symposiums.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Under her leadership, Solox has developed proprietary remote sensing technology that is revolutionizing how we identify critical mineral deposits both on our planet and beyond.
            </p>
            
            <div className="glass-card inline-flex px-6 py-3 mt-4 items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-slow"></div>
              <span className="text-sm text-gray-300">Currently leading the Mars Reconnaissance Mission</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
