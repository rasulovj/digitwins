import { useState, useEffect } from 'react';
import { Language, translations } from './locales/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreEngines } from './components/CoreEngines';
import { Dimensions } from './components/Dimensions';
import { GreenCarbon } from './components/GreenCarbon';
import { TechLayers } from './components/TechLayers';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('digitwins_lang');
    if (saved === 'uz' || saved === 'tr' || saved === 'en') {
      return saved;
    }
    return 'uz';
  });

  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('digitwins_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenDemo = (platformName?: string) => {
    setSelectedPlatform(platformName || 'all');
    setDemoModalOpen(true);
  };

  const currentTranslation = translations[lang];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#18181B] selection:bg-sky-600 selection:text-white flex flex-col justify-between relative">
      
      {/* Background Architectural Grid Pattern */}
      <div className="fixed inset-0 bg-architectural-grid pointer-events-none z-0 opacity-60" />

      {/* Navbar */}
      <Navbar
        currentLang={lang}
        onLanguageChange={setLang}
        content={currentTranslation.nav}
        onOpenDemo={() => handleOpenDemo()}
      />

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        
        {/* 1. Hero Section with 3D Spatial Canvas */}
        <Hero
          heroContent={currentTranslation.hero}
          currentLang={lang}
          onOpenDemo={() => handleOpenDemo()}
        />

        {/* 2. Core Engines ("Nimalar Qilamiz? / Ne Yapıyoruz?") */}
        <CoreEngines
          content={currentTranslation.coreEngines}
          onOpenDemo={(modName) => handleOpenDemo(modName)}
        />

        {/* 3. Transformation Layers ("Transformatsiya Qatlamlari / Dönüşüm Katmanları") */}
        <Dimensions
          content={currentTranslation.dimensionsSection}
          onOpenDemo={(dimName) => handleOpenDemo(dimName)}
        />

        {/* 4. Green Carbon AI & ESG Section */}
        <GreenCarbon
          content={currentTranslation.greenCarbonSection}
          onOpenDemo={(subj) => handleOpenDemo(subj)}
        />

        {/* 5. 4-Layer Technology Stack Architecture */}
        <TechLayers content={currentTranslation.techSection} />

        {/* 6. Contact & Global HQ */}
        <ContactSection content={currentTranslation.contactSection} />
      </main>

      {/* Footer */}
      <Footer
        content={currentTranslation.footer}
        navContent={currentTranslation.nav}
      />

      {/* Demo Request Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        preselectedPlatform={selectedPlatform}
        modalContent={currentTranslation.demoModal}
        formContent={currentTranslation.contactSection.form}
        onSuccessToast={showToast}
      />

      {/* Clean Light Mode Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white border border-zinc-200 text-zinc-900 px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

export default App;
