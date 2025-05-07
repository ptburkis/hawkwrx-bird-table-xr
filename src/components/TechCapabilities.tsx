
import React from "react";

type CapabilityProps = {
  title: string;
  description: string;
};

const Capability = ({ title, description }: CapabilityProps) => {
  return (
    <div className="border-l-4 border-hawk-accent-blue pl-4 mb-8">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const TechCapabilities = () => {
  return (
    <section className="py-20 bg-hawk-dark-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Advanced Technical Capabilities
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The Virtual Bird Table is built on a foundation of robust, military-grade technology, 
              designed to perform in the most demanding environments.
            </p>

            <div className="space-y-6">
              <Capability
                title="Optimized for Austere Networks"
                description="Our stacked architecture ensures high performance even with limited bandwidth, making it ideal for deployment in challenging operational environments."
              />
              <Capability
                title="Cross-Platform Support"
                description="Designed for XR devices with support for desktop, ensuring flexible access across different hardware configurations."
              />
              <Capability
                title="Full ArcGIS Support"
                description="Seamlessly integrate with ESRI ArcGIS for live dynamic mapping, layers and overlay support, providing comprehensive situational awareness."
              />
              <Capability
                title="C2 System Agnostic"
                description="Out of the box support for planning and rehearsal, easily integrating with your existing command and control systems."
              />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-hawk-dark-blue bg-opacity-50 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-hawk-accent-blue/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-hawk-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white text-lg">Demo video unavailable in preview</p>
                  <p className="text-gray-400">The full demo video will be available on the live site</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-hawk-accent-blue/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-hawk-accent-blue/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCapabilities;
