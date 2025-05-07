
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll be in touch with you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-hawk-medium-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300">
              Interested in learning more about HAWKWRX Virtual Bird Table? Get in touch with our team.
            </p>
          </div>

          <div className="bg-hawk-dark-blue p-8 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-hawk-medium-blue border-hawk-medium-blue text-white placeholder:text-gray-400"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-hawk-medium-blue border-hawk-medium-blue text-white placeholder:text-gray-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="organization" className="block text-gray-300 mb-2">Organization</label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="bg-hawk-medium-blue border-hawk-medium-blue text-white placeholder:text-gray-400"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone (optional)</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-hawk-medium-blue border-hawk-medium-blue text-white placeholder:text-gray-400"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-hawk-medium-blue border-hawk-medium-blue text-white placeholder:text-gray-400"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-hawk-accent-blue hover:bg-blue-600 text-white font-bold py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-300">
                Prefer direct contact? Email us at:{" "}
                <a href="mailto:contact@hawkwrx.com" className="text-hawk-accent-blue hover:underline">
                  contact@hawkwrx.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
