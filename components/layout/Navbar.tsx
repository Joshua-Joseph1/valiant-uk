'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const serviceItems = [
    {
      name: "Risk Management & Intelligence",
      href: "/services/risk-management-intelligence",
    },
    { name: "Executive Protection", href: "/services/executive-protection" },
    {
      name: "Secure Transfer & Asset Escort",
      href: "/services/secure-transfer-asset-escort",
    },
    {
      name: "Cybersecurity & Digital Risk Protection",
      href: "/services/cybersecurity-digital-risk-protection",
    },
    {
      name: "Hardware & Software Security",
      href: "/services/hardware-software-security",
    },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] border-b border-white/10 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="p-3 transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt="Valiant Risk Group Logo"
                width={160}
                height={160}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 font-[ui-sans-serif] transition-colors duration-300 text-white/90 hover:text-white underline decoration-[#344154]/60 hover:decoration-white underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                onClick={() => setServicesOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center px-4 py-2 font-[ui-sans-serif] transition-colors duration-300 text-white/90 hover:text-white underline decoration-[#344154]/60 hover:decoration-white underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                aria-label="Explore Services menu"
              >
                Services
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-[#0f0f0f] rounded-xl border border-white/10 overflow-hidden z-50"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-2">
                    {serviceItems.map((service, index) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-white/90 hover:text-white hover:bg-[#344154]/30 rounded-lg transition-colors duration-200 text-sm font-[ui-sans-serif] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* CTA Link */}
            <div className="ml-6">
              <Link
                href="/contact"
                className="px-4 py-2 font-[ui-sans-serif] transition-colors duration-300 text-white/90 hover:text-white underline decoration-[#344154]/60 hover:decoration-white underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                aria-label="Arrange a Private Consultation with Valiant Risk Group"
              >
                Arrange a Private Consultation
              </Link>
            </div>

            {/* Subscribe Link - match other nav links */}
            <div className="ml-2">
              <Link
                href="/subscribe"
                className="px-4 py-2 font-[ui-sans-serif] transition-colors duration-300 text-white/90 hover:text-white underline decoration-[#344154]/60 hover:decoration-white underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                aria-label="Subscribe to the Valiant Risk Group newsletter"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl transition-colors duration-300 text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={
            isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 bg-[#1a1a1a] rounded-xl mt-4 mb-4 border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-3 text-white/90 hover:text-white underline decoration-[#344154]/60 hover:decoration-white underline-offset-8 transition-colors duration-200 font-[ui-sans-serif] rounded-xl mx-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Services */}
            <div className="px-2">
              <div className="px-4 py-2 text-sm font-semibold text-white/60 uppercase tracking-wider">
                Services
              </div>
              {serviceItems.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block px-6 py-2 text-white/80 hover:text-white hover:bg-[#344154]/30 transition-colors duration-200 text-sm rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="px-4 pt-4">
              <Link
                href="/contact"
                className="block px-6 py-3 text-white/90 hover:text-white underline decoration-[#344154]/60 hover:decoration-white underline-offset-8 transition-colors duration-200 font-[ui-sans-serif] rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                onClick={() => setIsOpen(false)}
                aria-label="Arrange a Private Consultation with Valiant Risk Group"
              >
                Arrange a Private Consultation
              </Link>
            </div>

            {/* Mobile Subscribe */}
            <div className="px-4 pt-2">
              <Link
                href="/subscribe"
                className="block px-6 py-3 text-white/90 hover:text-white underline decoration-[#344154]/60 hover:decoration-white underline-offset-8 transition-colors duration-200 font-[ui-sans-serif] rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C1272D]"
                onClick={() => setIsOpen(false)}
                aria-label="Subscribe to the Valiant Risk Group newsletter"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;