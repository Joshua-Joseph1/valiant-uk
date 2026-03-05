'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactForm = () => {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/4MUTVCAFzb7OJyfS81GR/webhook-trigger/15a35017-dc74-4f04-8e89-9264248c4c54', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormSubmitted(true);
        console.log('Form successfully submitted:', formData);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section
      ref={formRef}
      className="py-24 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-valentor-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center">
          <div className="max-w-7xl">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4 leading-tight">
                  Arrange a Private Consultation
                </h2>
                <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
                <p className="text-base md:text-lg text-white/80 leading-relaxed font-[ui-sans-serif]">
                  For non-emergency inquiries, consultations, or detailed security
                  assessments, please fill out the form below. Our team will
                  respond within 2 hours.
                </p>
              </div>

              <Card className="bg-transparent border-0 shadow-none">
                <CardContent className="p-0">
                  {formSubmitted ? (
                    <div className="text-center text-green-600 font-semibold">
                      Thank you! Your message has been successfully submitted.
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-6"
                    >
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white/80 font-[ui-sans-serif]">
                            First Name *
                          </label>
                          <div className="relative group">
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-transparent text-white placeholder-gray-500"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white/80 font-[ui-sans-serif]">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-transparent text-white placeholder-gray-500"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-white/80 font-[ui-sans-serif]">
                          Email Address *
                        </label>
                        <div className="relative group">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-transparent text-white placeholder-gray-500"
                            placeholder=""
                          />
                        </div>
                      </div>

                      {/* Phone and Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white/80 font-[ui-sans-serif]">
                            Phone Number
                          </label>
                          <div className="relative group">
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-transparent text-white placeholder-gray-500"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-white/80 font-[ui-sans-serif]">
                            Company
                          </label>
                          <div className="relative group">
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-transparent text-white placeholder-gray-500"
                              
                            />
                          </div>
                        </div>
                      </div>

                      {/* Service Interest */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-white/80 font-[ui-sans-serif]">
                          Service Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-transparent text-white"
                        >
                          <option value="">Select a service...</option>
                          <option value="risk-management">
                            Risk Management & Intelligence
                          </option>
                          <option value="executive-protection">
                            Executive Protection
                          </option>
                          <option value="secure-transfer">
                            Secure Transfer & Asset Escort
                          </option>
                          <option value="cybersecurity">
                            Cybersecurity & Digital Risk Protection
                          </option>
                          <option value="hardware-software">
                            Hardware & Software Security
                          </option>
                          <option value="consultation">
                            General Consultation
                          </option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-white/80 font-[ui-sans-serif]">
                          Message *
                        </label>
                        <div className="relative group">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            className="w-full px-3 py-3 border border-white/10 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D] transition-colors duration-300 bg-transparent resize-none text-white placeholder-gray-500"
                      
                            required
                          ></textarea>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#C1272D] hover:bg-[#C1272D]/90 text-white py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                        aria-label="Arrange a Private Consultation with Valiant Risk Group"
                      >
                        Arrange a Private Consultation
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;