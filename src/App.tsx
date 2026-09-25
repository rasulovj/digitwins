import { useState, useEffect } from 'react';
import { Language, translations } from './locales/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreEngines } from './components/CoreEngines';
import { Dimensions } from './components/Dimensions';
import { GreenCarbon } from './components/GreenCarbon';
import { TechLayers } from './components/TechLayers';
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
  const [selectedPlatform, setSelectedPlatform] = useState('');
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
    setSelectedPlatform(platformName || '');
    setDemoModalOpen(true);
  };

  const currentTranslation = translations[lang];

  return (
    <div className="bg-[#030712] text-[#f3f4f6] min-h-screen bg-grid-pattern relative selection:bg-[#0ea5e9] selection:text-white flex flex-col justify-between">
      
      {/* Background Radial Blur Overlay */}
      <div className="fixed inset-0 radial-gradient-overlay pointer-events-none z-0" />

      {/* Sticky Glass Navbar */}
      <Navbar
        currentLang={lang}
        onLanguageChange={setLang}
        content={currentTranslation.nav}
        onOpenDemo={() => handleOpenDemo()}
      />

      {/* Main Content */}
      <main className="relative z-10 flex-grow">
        
        {/* 1. Hero Section with 3D Spatial Wireframe Visualizer */}
        <Hero
          heroContent={currentTranslation.hero}
          onOpenDemo={() => handleOpenDemo()}
        />

        {/* 2. Core Engines ("Neler Yapıyoruz? / Nimalar Qilamiz?") */}
        <CoreEngines content={currentTranslation.coreEngines} />

        {/* 3. Transformation Layers ("Dönüşüm Katmanları / Transformatsiya Qatlamlari") */}
        <Dimensions
          content={currentTranslation.dimensionsSection}
          onOpenDemo={(dimTitle) => handleOpenDemo(dimTitle)}
        />

        {/* 4. Green Carbon AI & ESG Section */}
        <GreenCarbon
          content={currentTranslation.greenCarbonSection}
          onOpenDemo={(subj) => handleOpenDemo(subj)}
        />

        {/* 5. 4-Step Technology Stack Architecture */}
        <TechLayers content={currentTranslation.techSection} />

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

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel border border-[#00f0ff]/40 text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0" />
          <span className="text-xs font-mono font-medium">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

export default App;
