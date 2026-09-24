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
  const [phone, setPhone] = useState('');
  const [platform, setPlatform] = useState('all');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedPlatform) {
      if (preselectedPlatform.includes('Industry')) setPlatform('industry');
      else if (preselectedPlatform.includes('Factory')) setPlatform('factory');
      else if (preselectedPlatform.includes('R&D') || preselectedPlatform.includes('TechTransfer')) setPlatform('rd');
      else if (preselectedPlatform.includes('Education')) setPlatform('education');
      else setPlatform('all');
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
      setPhone('');
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
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
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
            {modalContent.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            {modalContent.subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label className="block text-xs font-mono text-zinc-600 mb-1 font-medium">
              {formContent.nameLabel}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={formContent.namePlaceholder}
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-600 mb-1 font-medium">
              {formContent.companyLabel}
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder={formContent.companyPlaceholder}
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-600 mb-1 font-medium">
              {modalContent.phoneLabel}
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 90 123 45 67"
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-sky-600 focus:bg-white font-mono transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-600 mb-1 font-medium">
              {formContent.platformLabel}
            </label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
            >
              <option value="all">{formContent.platformOptions.all}</option>
              <option value="industry">{formContent.platformOptions.industry}</option>
              <option value="factory">{formContent.platformOptions.factory}</option>
              <option value="rd">{formContent.platformOptions.rd}</option>
              <option value="education">{formContent.platformOptions.education}</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>
                {submitting
                  ? formContent.submittingBtn
                  : modalContent.submit}
              </span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
