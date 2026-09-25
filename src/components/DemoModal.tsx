import React, { useState, useEffect } from 'react';
import { TranslationContent } from '../locales/translations';
import { X, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlatform?: string;
  modalContent: TranslationContent['demoModal'];
  formContent: TranslationContent['contactSection']['form'];
  onSuccessToast: (msg: string) => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  preselectedPlatform = 'all',
  modalContent,
  formContent,
  onSuccessToast,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('all');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedPlatform) {
      if (preselectedPlatform.toLowerCase().includes('macro') || preselectedPlatform.toLowerCase().includes('makro') || preselectedPlatform.toLowerCase().includes('arazi') || preselectedPlatform.toLowerCase().includes('land')) {
        setDomain('macro');
      } else if (preselectedPlatform.toLowerCase().includes('micro') || preselectedPlatform.toLowerCase().includes('mikro') || preselectedPlatform.toLowerCase().includes('tesis') || preselectedPlatform.toLowerCase().includes('facility')) {
        setDomain('micro');
      } else if (preselectedPlatform.toLowerCase().includes('xr') || preselectedPlatform.toLowerCase().includes('simülasyon') || preselectedPlatform.toLowerCase().includes('simulyatsiya') || preselectedPlatform.toLowerCase().includes('ta\'sir')) {
        setDomain('xr');
      } else if (preselectedPlatform.toLowerCase().includes('green') || preselectedPlatform.toLowerCase().includes('carbon') || preselectedPlatform.toLowerCase().includes('karbon') || preselectedPlatform.toLowerCase().includes('yashil')) {
        setDomain('green');
      } else {
        setDomain('all');
      }
    }
  }, [preselectedPlatform, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onClose();
      onSuccessToast(formContent.successMsg);
      setName('');
      setCompany('');
      setEmail('');
      setNotes('');
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 hover:text-zinc-900 flex items-center justify-center transition-colors border border-zinc-200 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div>
          <div className="text-[10px] font-mono font-bold text-sky-700 uppercase tracking-widest mb-1">
            {modalContent.badge}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
            {modalContent.title}
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block font-semibold text-zinc-800 mb-1">
              {modalContent.nameLabel}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={formContent.namePlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:outline-hidden focus:border-sky-600 focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block font-semibold text-zinc-800 mb-1">
              {modalContent.orgLabel}
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder={formContent.orgPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:outline-hidden focus:border-sky-600 focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block font-semibold text-zinc-800 mb-1">
              {formContent.emailLabel}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={formContent.emailPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:outline-hidden focus:border-sky-600 focus:bg-white font-mono transition-colors"
            />
          </div>

          <div>
            <label className="block font-semibold text-zinc-800 mb-1">
              {modalContent.domainLabel}
            </label>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:outline-hidden focus:border-sky-600 focus:bg-white transition-colors"
            >
              <option value="all">{formContent.domainOptions.all}</option>
              <option value="macro">{formContent.domainOptions.macro}</option>
              <option value="micro">{formContent.domainOptions.micro}</option>
              <option value="xr">{formContent.domainOptions.xr}</option>
              <option value="green">{formContent.domainOptions.green}</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-zinc-800 mb-1">
              {modalContent.notesLabel}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={formContent.notesPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:outline-hidden focus:border-sky-600 focus:bg-white transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>
                {submitting
                  ? formContent.submittingBtn
                  : modalContent.submitBtn}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
