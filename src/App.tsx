/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header, ActiveNavPage } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CoreServicesSection } from './components/CoreServicesSection';
import { AboutSection } from './components/AboutSection';
import { AboutPageScreen } from './components/AboutPageScreen';
import { ServicesPageScreen } from './components/ServicesPageScreen';
import { TrainingPageScreen } from './components/TrainingPageScreen';
import { EquipmentRentalPageScreen } from './components/EquipmentRentalPageScreen';
import { ContactPageScreen } from './components/ContactPageScreen';
import { TermsPageScreen } from './components/TermsPageScreen';
import { PrivacyPageScreen } from './components/PrivacyPageScreen';
import { MaterialsSection } from './components/MaterialsSection';
import { PricingSection } from './components/PricingSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { RentalInquiryModal } from './components/RentalInquiryModal';
import { TrainingRegistrationModal } from './components/TrainingRegistrationModal';
import { COMPANY_DETAILS } from './data/companyData';

export default function App() {
  const [currentView, setCurrentView] = useState<ActiveNavPage>('home');
  const [rentalModalOpen, setRentalModalOpen] = useState(false);
  const [selectedRentalEquipmentId, setSelectedRentalEquipmentId] = useState<string | undefined>(undefined);
  const [trainingModalOpen, setTrainingModalOpen] = useState(false);
  const [selectedTrainingEquipment, setSelectedTrainingEquipment] = useState<string | undefined>(undefined);

  // Synchronize hash with view
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about-page' || hash === '#about' || hash === '#about-us') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#rental' ||
        hash === '#equipment' ||
        hash === '#equipment-rental' ||
        hash === '#materials' ||
        hash === '#materials-page' ||
        hash === '#catalog'
      ) {
        setCurrentView('rental');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#services' || hash === '#services-page' || hash === '#construction-services') {
        setCurrentView('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#training' ||
        hash === '#training-page' ||
        hash === '#operator-training' ||
        hash === '#prices' ||
        hash === '#prices-page'
      ) {
        setCurrentView('training');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact' || hash === '#contact-page' || hash === '#contact-us') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#terms' || hash === '#terms-and-conditions' || hash === '#legal') {
        setCurrentView('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#privacy' || hash === '#privacy-policy') {
        setCurrentView('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '') {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openRentalInquiry = (equipmentId?: string) => {
    setSelectedRentalEquipmentId(equipmentId);
    setRentalModalOpen(true);
  };

  const openTrainingRegistration = (equipment?: string) => {
    setSelectedTrainingEquipment(equipment);
    setTrainingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#303030] font-sans selection:bg-[#FF662C] selection:text-white">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <Header
        currentView={currentView}
        onNavigateHome={() => {
          setCurrentView('home');
          window.location.hash = '#home';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateAbout={() => {
          setCurrentView('about');
          window.location.hash = '#about';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateRental={() => {
          setCurrentView('rental');
          window.location.hash = '#rental';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateServices={() => {
          setCurrentView('services');
          window.location.hash = '#services';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateTraining={() => {
          setCurrentView('training');
          window.location.hash = '#training';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateContact={() => {
          setCurrentView('contact');
          window.location.hash = '#contact';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onRequestRentalCTA={() => openRentalInquiry()}
        onRegisterTrainingCTA={() => openTrainingRegistration()}
      />

      {/* 3. Screen Switcher */}
      <main className="flex-grow">
        {currentView === 'about' ? (
          <AboutPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateRental={() => {
              setCurrentView('rental');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setCurrentView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateTraining={() => {
              setCurrentView('training');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRequestRentalCTA={() => openRentalInquiry()}
            onRegisterTrainingCTA={() => openTrainingRegistration()}
          />
        ) : currentView === 'rental' ? (
          <EquipmentRentalPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setCurrentView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateTraining={() => {
              setCurrentView('training');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRequestRental={(equipmentId) => openRentalInquiry(equipmentId)}
          />
        ) : currentView === 'services' ? (
          <ServicesPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateRental={() => {
              setCurrentView('rental');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateTraining={() => {
              setCurrentView('training');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRequestRentalCTA={() => openRentalInquiry()}
          />
        ) : currentView === 'training' ? (
          <TrainingPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateRental={() => {
              setCurrentView('rental');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setCurrentView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'contact' ? (
          <ContactPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateRental={() => {
              setCurrentView('rental');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setCurrentView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateTraining={() => {
              setCurrentView('training');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRequestRentalCTA={() => openRentalInquiry()}
            onRegisterTrainingCTA={() => openTrainingRegistration()}
          />
        ) : currentView === 'terms' ? (
          <TermsPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'privacy' ? (
          <PrivacyPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          /* Homepage Layout */
          <>
            {/* A. Hero Section */}
            <HeroSection
              onRequestRental={() => openRentalInquiry()}
              onRegisterTraining={() => openTrainingRegistration()}
              onNavigateServices={() => {
                setCurrentView('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Core Services Section */}
            <CoreServicesSection
              onNavigateRental={() => {
                setCurrentView('rental');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateServices={() => {
                setCurrentView('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateTraining={() => {
                setCurrentView('training');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Featured Equipment Section */}
            <MaterialsSection
              onRequestRental={(id) => openRentalInquiry(id)}
              onNavigateRental={() => {
                setCurrentView('rental');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Why Choose Us & Company Intro Section */}
            <AboutSection
              onNavigateAbout={() => {
                setCurrentView('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateTraining={() => {
                setCurrentView('training');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Training Promotion Section */}
            <PricingSection
              onRegisterTraining={() => openTrainingRegistration()}
              onNavigateTraining={() => {
                setCurrentView('training');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Gallery Section */}
            <GallerySection
              onRequestRental={(id) => openRentalInquiry(id)}
            />

            {/* Contact CTA Section */}
            <ContactSection
              onRequestRental={() => openRentalInquiry()}
              onRegisterTraining={() => openTrainingRegistration()}
              onNavigateServices={() => {
                setCurrentView('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}
      </main>

      {/* 4. Footer */}
      <Footer
        onNavigateHome={() => {
          setCurrentView('home');
          window.location.hash = '#home';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateAbout={() => {
          setCurrentView('about');
          window.location.hash = '#about';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateRental={() => {
          setCurrentView('rental');
          window.location.hash = '#rental';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateServices={() => {
          setCurrentView('services');
          window.location.hash = '#services';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateTraining={() => {
          setCurrentView('training');
          window.location.hash = '#training';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateContact={() => {
          setCurrentView('contact');
          window.location.hash = '#contact';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateTerms={() => {
          setCurrentView('terms');
          window.location.hash = '#terms';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigatePrivacy={() => {
          setCurrentView('privacy');
          window.location.hash = '#privacy';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 5. Sticky Floating WhatsApp Hotline */}
      <FloatingWhatsApp />

      {/* 6. Rental Inquiry Modal */}
      <RentalInquiryModal
        isOpen={rentalModalOpen}
        initialEquipmentId={selectedRentalEquipmentId}
        onClose={() => setRentalModalOpen(false)}
      />

      {/* 7. Training Registration Modal */}
      <TrainingRegistrationModal
        isOpen={trainingModalOpen}
        initialEquipment={selectedTrainingEquipment}
        onClose={() => setTrainingModalOpen(false)}
      />
    </div>
  );
}
