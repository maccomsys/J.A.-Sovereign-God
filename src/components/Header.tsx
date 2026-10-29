import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, HardHat, Truck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { BrandLogo } from './BrandLogo';

export type ActiveNavPage =
  | 'home'
  | 'about'
  | 'rental'
  | 'services'
  | 'training'
  | 'contact'
  | 'terms'
  | 'privacy';

interface HeaderProps {
  currentView: ActiveNavPage;
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateRental: () => void;
  onNavigateServices: () => void;
  onNavigateTraining: () => void;
  onNavigateContact: () => void;
  onRequestRentalCTA: () => void;
  onRegisterTrainingCTA: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigateHome,
  onNavigateAbout,
  onNavigateRental,
  onNavigateServices,
  onNavigateTraining,
  onNavigateContact,
  onRequestRentalCTA,
  onRegisterTrainingCTA,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', view: 'home', action: onNavigateHome },
    { label: 'About Us', view: 'about', action: onNavigateAbout },
    { label: 'Equipment Rental', view: 'rental', action: onNavigateRental },
    { label: 'Construction Services', view: 'services', action: onNavigateServices },
    { label: 'Operator Training', view: 'training', action: onNavigateTraining },
    { label: 'Contact Us', view: 'contact', action: onNavigateContact },
  ];

  return (
    <header
      className={`bg-white sticky top-0 z-40 transition-shadow duration-200 border-b border-neutral-200 ${
        scrolled ? 'shadow-md' : 'shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={onNavigateHome}
          className="cursor-pointer focus:outline-none"
          aria-label={COMPANY_DETAILS.name}
        >
          <BrandLogo />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold tracking-wide">
          {navLinks.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.label}
                onClick={item.action}
                className={`py-2 border-b-2 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#FF662C] font-bold border-[#FF662C]'
                    : 'text-[#303030] hover:text-[#FF662C] border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Buttons */}
        <div className="flex items-center space-x-3">
          <div className="hidden xl:flex items-center space-x-2">
            <button
              onClick={onRegisterTrainingCTA}
              className="px-3.5 py-2 text-xs font-bold text-[#303030] hover:text-[#FF662C] border border-neutral-300 hover:border-[#FF662C] rounded-md transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <HardHat className="w-3.5 h-3.5 text-[#FF662C]" />
              <span>Training Inquiries</span>
            </button>
          </div>

          <button
            onClick={onRequestRentalCTA}
            className="bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-md shadow-sm hover:shadow-md active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <Truck className="w-4 h-4" />
            <span>Request Rental</span>
          </button>

          {/* Quick Call Button on sm+ */}
          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="hidden sm:inline-flex lg:hidden p-2.5 bg-neutral-100 text-[#303030] hover:text-[#FF662C] rounded-md transition-colors"
            title="Call Company Dispatch"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2 rounded-md text-[#303030] hover:bg-neutral-100 focus:outline-none transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Collapsible Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-5 space-y-3 shadow-xl">
          {navLinks.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.label}
                className={`block w-full text-left font-bold py-2 text-base cursor-pointer ${
                  isActive ? 'text-[#FF662C]' : 'text-[#303030] hover:text-[#FF662C]'
                }`}
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestRentalCTA();
              }}
              className="w-full inline-flex justify-center items-center gap-2 bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold py-3 px-4 rounded-md text-sm cursor-pointer shadow-sm"
            >
              <Truck className="w-4 h-4" />
              <span>Request Equipment Rental</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterTrainingCTA();
              }}
              className="w-full inline-flex justify-center items-center gap-2 bg-[#303030] hover:bg-[#202020] text-white font-bold py-3 px-4 rounded-md text-sm cursor-pointer"
            >
              <HardHat className="w-4 h-4 text-[#FF662C]" />
              <span>Register for Training</span>
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                className="inline-flex justify-center items-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-[#303030] font-bold py-2 px-2 rounded-md text-xs font-mono border border-neutral-300"
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#FF662C]" />
                <span>{COMPANY_DETAILS.phone}</span>
              </a>
              <a
                className="inline-flex justify-center items-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-[#303030] font-bold py-2 px-2 rounded-md text-xs font-mono border border-neutral-300"
                href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#FF662C]" />
                <span>{COMPANY_DETAILS.secondaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
