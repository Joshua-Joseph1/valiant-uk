'use client';

import CybersecurityHero from '@/components/cyber/Hero';
import CybersecurityOfferings from '@/components/cyber/Offerings';
import CybersecurityTechnology from '@/components/cyber/Technology';
import CybersecurityCTA from '@/components/cyber/CTA';

const CybersecurityPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#1A1A1A] text-white antialiased">
      <CybersecurityHero />
      <CybersecurityOfferings />
      <CybersecurityTechnology />
      <CybersecurityCTA />
    </div>
  );
};

export default CybersecurityPage;
