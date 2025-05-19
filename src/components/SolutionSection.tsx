import React from "react";
import { useInView } from "react-intersection-observer";
import { Droplet, CircleDot } from "lucide-react";
import { useScrollToAnchor } from "../hooks/useScrollToAnchor";

const SolutionSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollToElement } = useScrollToAnchor();

  const handleScrollToMinerals = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToElement(e, "minerals");
  };

  return (
    <section id="solution" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90 z-0"></div>

      {/* Background starfield */}
      <div className="absolute inset-0  opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2 className="section-title">
          KEY <span className="text-gradient">APPLICATIONS</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
          <div
            className={`md:w-1/2 space-y-6 transition-all duration-1000 delay-300 ${
              inView ? "opacity-100" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-solox-blue font-audiowide text-3xl mb-6">
              IN SPACE
            </h3>

            <div className="space-y-8">
              <div className="glass-card p-6 hover:border-solox-blue transition-colors">
                <div className="flex items-start gap-4">
                  <Droplet size={24} className="text-solox-blue mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Water Ice
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Essential for life support, fuel production, and
                      sustainable exploration on the Moon and Mars.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-solox-blue transition-colors">
                <div className="flex items-start gap-4">
                  <CircleDot size={24} className="text-solox-blue mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Iron and Aluminum
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Crucial for constructing infrastructure and enabling
                      In-Situ Resource Utilization (ISRU).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-solox-blue font-audiowide text-3xl mb-6">
              ON EARTH
            </h3>

            <div className="space-y-8">
              <div className="glass-card p-6 hover:border-solox-blue transition-colors">
                <div className="flex items-start gap-4">
                  <CircleDot size={24} className="text-solox-blue mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Critical Minerals
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Copper, Molybdenum, Cobalt, and Nickel: Critical Minerals
                      for the energy transition and new technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="pt-8">
              <a
                href="#minerals"
                className="solox-button hover:text-solox-white"
                onClick={handleScrollToMinerals}
              >
                LEARN ABOUT EARTH MINERALS
              </a>
            </div> */}
          </div>

          <div
            className={`md:w-1/2 transition-all duration-1000 ${
              inView ? "opacity-100" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-solox-blue to-solox-darkblue rounded-lg blur opacity-25"></div>
              <img
                src="/images/water_ice_solox.jpg"
                alt="Water Ice on the Moon"
                className="rounded-lg w-full h-auto object-cover relative shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
