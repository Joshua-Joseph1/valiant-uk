import Link from "next/link";

const Footer = () => {
  const serviceLinks = [
    { name: "Risk Management & Intelligence", href: "/services/risk-management-intelligence" },
    { name: "Executive Protection", href: "/services/executive-protection" },
    { name: "Secure Transfer & Asset Escort", href: "/services/secure-transfer-asset-escort" },
    { name: "Cybersecurity & Digital Risk Protection", href: "/services/cybersecurity-digital-risk-protection" },
    { name: "Hardware & Software Security", href: "/services/hardware-software-security" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/logo.png"
                alt="Valiant Risk Group Logo"
                className="h-20 w-30"
              />
            </div>
            <p className="text-white/80 mb-4 font-[ui-sans-serif]">
              Global risk management and protection consultancy providing discreet, professional security services worldwide.
            </p>
            <p className="text-sm text-white/80 font-[ui-serif] tracking-tight">
              Discretion. Strength. Adaptability.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-[ui-serif] tracking-tight mb-2">Our Services</h3>
            <div className="h-px w-12 bg-[#344154] mb-4" />
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white underline decoration-[#344154]/60 hover:decoration-white underline-offset-4 transition-colors duration-200 font-[ui-sans-serif]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-[ui-serif] tracking-tight mb-2">Contact</h3>
            <div className="h-px w-12 bg-[#344154] mb-4" />
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <a href="tel:+27798994102" className="text-white/80 font-[ui-sans-serif]">
                  Phone: +27 79 899-4102
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a href="mailto:info@valiantriskgroup.com" className="text-white/80 font-[ui-sans-serif]">info@valiantriskgroup.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white/80 font-[ui-sans-serif]">Global Operations</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-[ui-serif] tracking-tight mb-2">Quick Links</h3>
            <div className="h-px w-12 bg-[#344154] mb-4" />
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white underline decoration-[#344154]/60 hover:decoration-white underline-offset-4 transition-colors duration-200 font-[ui-sans-serif]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70 font-[ui-sans-serif]">
            © 2026 Valiant Risk Group. All rights reserved. Professional security services worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
