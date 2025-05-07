
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type DeploymentOptionProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
};

const DeploymentOption = ({ title, description, icon, benefits }: DeploymentOptionProps) => {
  return (
    <Card className="bg-hawk-medium-blue border-none hover:shadow-xl transition-all duration-300 h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="mb-4 text-hawk-accent-blue">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <ul className="text-gray-300 list-disc pl-5 mt-auto">
          {benefits.map((benefit, index) => (
            <li key={index} className="mb-2">{benefit}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const DeploymentOptions = () => {
  return (
    <section id="deployment" className="py-20 bg-gradient-to-b from-hawk-dark-blue to-hawk-medium-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Deployment Options
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the best deployment option for your mission requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DeploymentOption
            title="Cloud Deployment"
            description="Leverage global cloud infrastructure for maximum scale and accessibility."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            }
            benefits={[
              "Rapid deployment and instant updates",
              "Globally distributed for low latency",
              "Automatic scaling based on demand",
              "High availability and redundancy"
            ]}
          />

          <DeploymentOption
            title="Hybrid Deployment"
            description="Balance security and accessibility with a hybrid cloud-local solution."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            }
            benefits={[
              "Sensitive data stored on-premises",
              "Cloud accessibility for remote teams",
              "Flexible connectivity options",
              "Customizable security boundaries"
            ]}
          />

          <DeploymentOption
            title="Dark Deployment"
            description="Maximum security with fully air-gapped, on-premises operation."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            benefits={[
              "Complete network isolation",
              "Full physical security control",
              "Zero dependency on external services",
              "Suitable for classified environments"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default DeploymentOptions;
