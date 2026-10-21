import { useCallback, useEffect, useRef, useState } from 'react';
import type { Lang } from './i18n';
import { T } from './i18n';
import { getProducts } from './data';
import { sendLead } from './sendLead';
import type { Lead } from './sendLead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Platforms } from './components/Platforms';
import { Consulting } from './components/Consulting';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { Toast } from './components/Toast';

const LANG_KEY = 'digitwins_lang';
const LANGS: Lang[] = ['uz', 'ru', 'en', 'tr'];

const ERR_TITLE: Record<Lang, string> = { uz: 'Yuborilmadi', ru: 'Не отправлено', en: 'Not sent', tr: 'Gönderilemedi' };
const ERR_DESC: Record<Lang, string> = {
  uz: "Iltimos, qayta urinib ko'ring yoki qo'ng'iroq qiling.",
  ru: 'Попробуйте ещё раз или позвоните нам.',
  en: 'Please try again or call us.',
  tr: 'Lütfen tekrar deneyin veya bizi arayın.',
};

function readLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY) as Lang | null;
    if (saved && LANGS.includes(saved)) return saved;
  } catch {
    /* storage unavailable */
  }
  return 'uz';
}

function useWindowWidth() {
  const [w, setW] = useState(() => window.innerWidth);
  useEffect(() => {
    const onR = () => setW(window.innerWidth);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
  return w;
}

export default function App() {
  const [lang, setLang] = useState<Lang>(readLang);
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState<false | 'ok' | 'err'>(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const w = useWindowWidth();

  const t = T[lang];
  const products = getProducts(lang, t);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const submitLead = async (source: string, lead: Lead) => {
    const ok = await sendLead(source, lang, lead);
    setToast(ok ? 'ok' : 'err');
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(false), ok ? 3500 : 4000);
    return ok;
  };

  const openModal = useCallback(() => setModal(true), []);
  const closeModal = useCallback(() => setModal(false), []);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f6f4', position: 'relative', overflowX: 'hidden' }}>
      <div style={{ position: 'absolute', top: -260, left: -200, width: 820, height: 820, borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.92 0.045 222 / 0.75), transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 80, right: -260, width: 760, height: 760, borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.94 0.035 280 / 0.6), transparent 65%)', pointerEvents: 'none' }} />

      <Header t={t} lang={lang} wide={w >= 900} compact={w < 600} onLang={setLang} onDemo={openModal} />
      <Hero t={t} products={products} floatCard={w >= 1120} onDemo={openModal} />
      <Platforms t={t} products={products} />
      <Consulting t={t} lang={lang} />
      <Events t={t} />
      <Contact t={t} onSubmit={submitLead} />
      <Footer t={t} lang={lang} products={products} />

      {modal && <DemoModal t={t} onClose={closeModal} onSubmit={submitLead} />}
      {toast && (
        <Toast
          error={toast === 'err'}
          title={toast === 'err' ? ERR_TITLE[lang] : t.notif_title}
          desc={toast === 'err' ? ERR_DESC[lang] : t.notif_desc}
        />
      )}
    </div>
  );
}
