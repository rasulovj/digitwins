import React, { useState, useEffect } from 'react';
import { TranslationContent } from '../locales/translations';
import { X } from 'lucide-react';

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
  preselectedPlatform = '',
  modalContent,
  formContent,
  onSuccessToast,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [domain, setDomain] = useState('macro');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedPlatform) {
      const p = preselectedPlatform.toLowerCase();
      if (p.includes('macro') || p.includes('makro') || p.includes('arazi') || p.includes('mekansal')) {
        setDomain('macro');
      } else if (p.includes('micro') || p.includes('mikro') || p.includes('tesis') || p.includes('yapı') || p.includes('bina')) {
        setDomain('micro');
      } else if (p.includes('xr') || p.includes('simülasyon') || p.includes('simulyatsiya') || p.includes('etkileşim') || p.includes('ta\'sir')) {
        setDomain('xr');
      } else if (p.includes('green') || p.includes('carbon') || p.includes('karbon') || p.includes('yashil')) {
        setDomain('green');
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
      setNotes('');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div
        className="glass-panel w-full max-w-lg rounded-2xl border border-[#00f0ff]/40 p-6 space-y-6 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg p-1 cursor-pointer transition-colors"
          aria-label={modalContent.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div>
          <div className="text-xs font-mono text-[#00f0ff] font-bold">
            {modalContent.badge}
          </div>
          <h3 className="text-2xl font-bold text-white mt-1">
            {modalContent.title}
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-slate-300 mb-1 font-semibold">
              {modalContent.nameLabel}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jasur Rahimov"
              className="w-full bg-[#0f172a] border border-[#1e293b] rounded-lg p-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1 font-semibold">
              {modalContent.orgLabel}
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Tashkent Spatial Development"
              className="w-full bg-[#0f172a] border border-[#1e293b] rounded-lg p-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1 font-semibold">
              {modalContent.domainLabel}
            </label>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full bg-[#0f172a] border border-[#1e293b] rounded-lg p-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
            >
              <option value="macro">{formContent.domainOptions.macro}</option>
              <option value="micro">{formContent.domainOptions.micro}</option>
              <option value="xr">{formContent.domainOptions.xr}</option>
              <option value="green">{formContent.domainOptions.green}</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 mb-1 font-semibold">
              {modalContent.notesLabel}
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={formContent.notesPlaceholder}
              className="w-full bg-[#0f172a] border border-[#1e293b] rounded-lg p-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#00f0ff] text-white font-bold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
          >
            <span>
              {submitting ? formContent.submittingBtn : modalContent.submitBtn}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};
