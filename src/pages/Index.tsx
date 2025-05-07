
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DeploymentOptions from "@/components/DeploymentOptions";
import TechCapabilities from "@/components/TechCapabilities";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-hawk-dark-blue text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DeploymentOptions />
      <TechCapabilities />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
