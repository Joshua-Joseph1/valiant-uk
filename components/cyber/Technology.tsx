'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CybersecurityTechnology = () => {
  const technologyRef = useRef(null);
  const isTechnologyInView = useInView(technologyRef, { once: true });

  const technologies = [
    {
      title: 'Network Intrusion Detection',
      description: 'Advanced intrusion detection and prevention systems safeguarding your network perimeter around the clock',
    },
    {
      title: 'Endpoint Detection & Response',
      description: 'Real-time monitoring and automated response across all endpoints to contain threats at the source',
    },
    {
      title: 'Security Information & Event Management',
      description: 'Centralised log aggregation and intelligent correlation for rapid threat identification and forensic analysis',
    },
    {
      title: 'Zero-Trust Architecture',
      description: 'Identity-centric security framework ensuring every access request is verified, regardless of origin',
    }
  ];

  return (
    <section
      ref={technologyRef}
      className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-900 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-valentor-red/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4">
            Advanced Technology
          </h2>
          <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed font-[ui-sans-serif]">
            State-of-the-art cybersecurity technology that provides continuous protection for your digital infrastructure and critical assets.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto divide-y divide-white/10">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-[ui-serif] tracking-tight text-white mb-1">
                    {tech.title}
                  </h3>
                  <p className="text-white/80 font-[ui-sans-serif]">
                    {tech.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8" />
      </div>
    </section>
  );
};

export default CybersecurityTechnology;
