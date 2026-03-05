'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CybersecurityOfferings = () => {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  const offerings = [
    {
      title: 'Cyber Risk Assessment & Strategic Planning',
      description: 'Comprehensive evaluation of your digital infrastructure, identifying vulnerabilities and developing tailored mitigation strategies aligned with global risk management principles.',
      details: [
        'Infrastructure vulnerability scanning and penetration testing',
        'Risk prioritisation and remediation roadmaps',
        'Regulatory compliance auditing (GDPR, ISO 27001, NIST)',
        'Board-level cyber risk reporting and advisory'
      ]
    },
    {
      title: 'Continuous Threat Monitoring & Incident Response',
      description: 'Round-the-clock surveillance of your digital environment with rapid response capabilities to neutralise threats before they escalate.',
      details: [
        'Real-time network and endpoint monitoring',
        'Security Operations Centre (SOC) as a service',
        'Incident containment, eradication, and recovery',
        'Post-incident forensic analysis and lessons learned'
      ]
    },
    {
      title: 'Data Breach & Ransomware Defence',
      description: 'Proactive safeguards and response protocols to protect against data exfiltration, ransomware attacks, and extortion threats.',
      details: [
        'Advanced email and endpoint threat protection',
        'Data loss prevention and encryption strategies',
        'Ransomware readiness assessments and tabletop exercises',
        'Negotiation support and recovery planning'
      ]
    },
    {
      title: 'Insider Threat & Digital Asset Protection',
      description: 'Integrated monitoring and governance frameworks to detect insider vulnerabilities and ensure the confidentiality, integrity, and availability of critical digital assets.',
      details: [
        'User behaviour analytics and anomaly detection',
        'Privileged access management and zero-trust architecture',
        'Digital asset inventory and classification',
        'Harmonised digital, physical, and operational security integration'
      ]
    }
  ];

  return (
    <section
      ref={servicesRef}
      className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">
            Explore Our Offerings
          </h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            Our approach integrates robust cyber risk assessment, strategic mitigation planning, and continuous monitoring to defend your organisation against evolving digital threats.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Accordion
            type="multiple"
            defaultValue={offerings.map((_, i) => `item-${i}`)}
            className="w-full space-y-0"
          >
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="mb-0 py-8 border-t border-white/10 group"
                >
                  <AccordionTrigger className="px-0 py-0 hover:no-underline focus:outline-none">
                    <div className="flex items-start text-left w-full gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-[ui-serif] tracking-tight text-white mb-1">
                          {offering.title}
                        </h3>
                        <p className="text-white/80 text-base leading-relaxed font-[ui-sans-serif]">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-4 pb-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pl-10">
                      {offering.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + detailIndex * 0.05 + 0.2,
                          }}
                          className="flex items-start"
                        >
                          <span className="w-2 h-2 bg-[#344154] rounded-full mr-3 mt-2"></span>
                          <span className="text-white/80 leading-relaxed font-[ui-sans-serif]">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityOfferings;
