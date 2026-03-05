'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CybersecurityCTA = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#1A1A1A] text-white overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(52,65,84,0.20),transparent_60%)]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-valentor-red rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-valentor-red/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C90505' fill-opacity='0.1'%3E%3Cpath d='M50 50l25-25v50l-25-25zm0 0l-25 25h50l-25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-[ui-serif] tracking-tight text-white mb-4 leading-tight"
            >
              Ready to Strengthen Your Cyber Posture?
            </motion.h2>
            <div className="mx-auto h-px w-16 bg-[#344154] mb-6" />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base md:text-lg mb-12 max-w-4xl mx-auto leading-relaxed text-white/80 font-[ui-sans-serif]"
            >
              We empower clients with a resilient cyber posture that aligns with global risk management principles, ensuring the confidentiality, integrity, and availability of critical digital assets while harmonising digital defence with physical and operational security. Contact us today for a confidential consultation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <a
              href="/contact"
              aria-label="Enlist Our Expertise at Valiant Risk Group"
              className="inline-flex items-center bg-[#C1272D] hover:bg-[#C1272D]/90 text-white px-10 py-4 text-base md:text-lg rounded-xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
            >
              Enlist Our Expertise
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CybersecurityCTA;
