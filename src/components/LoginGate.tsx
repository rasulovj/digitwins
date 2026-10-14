import { useState, type FormEvent, type ReactNode } from 'react';
import { Lock, User, LogIn } from 'lucide-react';

// Frontend-only access gate. Credentials can be overridden at build time via
// VITE_AUTH_LOGIN / VITE_AUTH_PASSWORD, otherwise the defaults below are used.
const AUTH_LOGIN = import.meta.env.VITE_AUTH_LOGIN ?? 'admin';
const AUTH_PASSWORD = import.meta.env.VITE_AUTH_PASSWORD ?? 'digitwins2026';
const STORAGE_KEY = 'digitwins_auth';

type Lang = 'UZ' | 'TR' | 'EN';

const texts: Record<Lang, { title: string; subtitle: string; login: string; password: string; submit: string; error: string }> = {
  UZ: {
    title: 'Kirish',
    subtitle: 'Saytga kirish uchun login va parolni kiriting',
    login: 'Login',
    password: 'Parol',
    submit: 'Kirish',
    error: 'Login yoki parol noto‘g‘ri',
  },
  TR: {
    title: 'Giriş',
    subtitle: 'Siteye erişmek için kullanıcı adı ve şifrenizi girin',
    login: 'Kullanıcı adı',
    password: 'Şifre',
    submit: 'Giriş yap',
    error: 'Kullanıcı adı veya şifre hatalı',
  },
  EN: {
    title: 'Sign in',
    subtitle: 'Enter your login and password to access the site',
    login: 'Login',
    password: 'Password',
    submit: 'Sign in',
    error: 'Incorrect login or password',
  },
};

function readLang(): Lang {
  try {
    const saved = localStorage.getItem('digitwins_lang');
    if (saved === 'UZ' || saved === 'TR' || saved === 'EN') return saved;
  } catch {
    /* ignore */
  }
  return 'UZ';
}

function isAuthed(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

export function LoginGate({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(isAuthed);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const t = texts[readLang()];

  if (authed) return <>{children}</>;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (login.trim() === AUTH_LOGIN && password === AUTH_PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, '1');
      } catch {
        /* ignore */
      }
      setAuthed(true);
    } else {
      setError(true);
    }
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-3 py-3 text-slate-100 placeholder-slate-500 outline-none focus:border-[#06B6D4] transition-colors';

  return (
    <div className="min-h-screen bg-[#070B12] text-slate-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-[#0C1220] border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-[#06B6D4]/15 flex items-center justify-center">
            <Lock className="w-6 h-6 text-[#06B6D4]" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-center">{t.title}</h1>
        <p className="text-sm text-slate-400 text-center mt-1 mb-6">{t.subtitle}</p>

        <label className="block relative mb-3">
          <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            autoFocus
            autoComplete="username"
            placeholder={t.login}
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
              setError(false);
            }}
            className={inputClass}
          />
        </label>

        <label className="block relative mb-3">
          <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="password"
            autoComplete="current-password"
            placeholder={t.password}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            className={inputClass}
          />
        </label>

        {error && <p className="text-sm text-red-400 mb-3">{t.error}</p>}

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#06B6D4] hover:bg-[#22D3EE] text-black font-semibold rounded-lg py-3 transition-colors"
        >
          <LogIn className="w-4 h-4" />
          {t.submit}
        </button>
      </form>
    </div>
  );
}
