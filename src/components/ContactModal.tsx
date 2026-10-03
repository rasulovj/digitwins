import React, { useState, useEffect } from 'react';
import { SiteDictionary } from '../locales/siteContent';

interface ContactModalProps {
  isOpen: boolean;
  initialTopic?: string;
  content: SiteDictionary['modal'];
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  initialTopic = '',
  content,
  onClose,
}) => {
  const [selectedTopic, setSelectedTopic] = useState(initialTopic || content.topics.summit);
  const [companyName, setCompanyName] = useState('');
  const [personName, setPersonName] = useState('');
  const [phone, setPhone] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setSelectedTopic(initialTopic);
    } else {
      setSelectedTopic(content.topics.summit);
    }
  }, [initialTopic, content]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      onClose();
      setCompanyName('');
      setPersonName('');
      setPhone('');
    }, 2500);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-panel border border-[#06B6D4]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg cursor-pointer"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] text-xl mx-auto mb-3">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
          <h3 className="text-xl font-bold text-white">{content.title}</h3>
          <p className="text-xs text-slate-400 mt-1">{content.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">
              {content.companyLabel}
            </label>
            <input
              type="text"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder={content.companyPlaceholder}
              className="w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#06B6D4]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                {content.nameLabel}
              </label>
              <input
                type="text"
                required
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                placeholder={content.namePlaceholder}
                className="w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#06B6D4]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                {content.phoneLabel}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={content.phonePlaceholder}
                className="w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#06B6D4]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">
              {content.topicLabel}
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#06B6D4]"
            >
              <option value={content.topics.summit}>{content.topics.summit}</option>
              <option value={content.topics.workshop}>{content.topics.workshop}</option>
              <option value={content.topics.osb}>{content.topics.osb}</option>
              <option value={content.topics.factory}>{content.topics.factory}</option>
              <option value={content.topics.greenCarbon}>{content.topics.greenCarbon}</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#06B6D4] to-blue-600 text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-[#06B6D4]/20 cursor-pointer"
          >
            {content.submitButton}
          </button>

          {showFeedback && (
            <div className="text-xs font-mono text-center text-emerald-400 pt-2 animate-pulse">
              {content.feedbackSuccess}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
