import { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { DimensionsSection } from './components/DimensionsSection';
import { EventsSection } from './components/EventsSection';
import { FooterSection } from './components/FooterSection';
import { LightboxModal } from './components/LightboxModal';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [lang, setLang] = useState<'UZ' | 'TR' | 'EN'>(() => {
    const saved = localStorage.getItem('digitwins_lang');
    if (saved === 'UZ' || saved === 'TR' || saved === 'EN') {
      return saved;
    }
    return 'TR';
  });

  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    caption: string;
  }>({
    isOpen: false,
    src: '',
    caption: '',
  });

  const [contactModalState, setContactModalState] = useState<{
    isOpen: boolean;
    topic: string;
  }>({
    isOpen: false,
    topic: 'Özbekistan Akıllı Sanayi Zirvesi',
  });

  useEffect(() => {
    localStorage.setItem('digitwins_lang', lang);
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const handleOpenLightbox = (src: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      src,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenContactModal = (topic = 'Özbekistan Akıllı Sanayi Zirvesi') => {
    setContactModalState({
      isOpen: true,
      topic,
    });
  };

  const handleCloseContactModal = () => {
    setContactModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="bg-[#070B12] text-slate-100 min-h-screen antialiased selection:bg-[#06B6D4] selection:text-black flex flex-col justify-between">
      {/* Fixed Header */}
      <HeaderNav
        currentLang={lang}
        onLanguageChange={setLang}
        onOpenModal={() => handleOpenContactModal()}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero with 3D Canvas */}
        <HeroSection />

        {/* 2 Pillars & Green Carbon AI */}
        <DimensionsSection onOpenLightbox={handleOpenLightbox} />

        {/* Summits & Field Workshops */}
        <EventsSection
          onOpenModalWithSubject={(subject) => handleOpenContactModal(subject)}
          onOpenLightbox={handleOpenLightbox}
        />
      </main>

      {/* Footer */}
      <FooterSection onOpenModal={() => handleOpenContactModal()} />

      {/* Lightbox for Full-screen image inspection */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        src={lightboxState.src}
        caption={lightboxState.caption}
        onClose={handleCloseLightbox}
      />

      {/* Contact & Registration Modal */}
      <ContactModal
        isOpen={contactModalState.isOpen}
        initialTopic={contactModalState.topic}
        onClose={handleCloseContactModal}
      />
    </div>
  );
}

export default App;
