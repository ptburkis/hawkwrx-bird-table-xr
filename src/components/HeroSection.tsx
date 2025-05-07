
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-hawk-dark-blue overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-hawk-dark-blue via-transparent to-transparent opacity-90"></div>
          <iframe
            src="https://player.vimeo.com/video/59ae3567-4b24-419a-be7a-3093842e545e?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="HAWKWRX VBT Demo Video"
          ></iframe>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-screen container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Virtual Bird Table
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-hawk-accent-blue mb-6">
            Next-Gen Tactical Collaboration
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Developed in partnership with the British Army, the VBT offers best-in-class 
            real-time collaboration for dispersed teams. Increase shared understanding, 
            tempo and lethality with our cutting-edge XR technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-hawk-accent-blue hover:bg-blue-600 text-white font-semibold px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-hawk-dark-blue font-semibold px-8"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
