import React, { useState } from 'react';
import { TranslationContent } from '../locales/translations';
import { Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  content: TranslationContent['contactSection'];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    domain: 'all',
    notes: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        domain: 'all',
        notes: '',
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="iletisim" className="py-16 sm:py-20 relative border-t border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-block text-xs font-mono font-bold tracking-widest text-sky-700 uppercase">
            {content.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            {content.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-zinc-50 rounded-2xl border border-zinc-200/80 p-5 shadow-2xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    {content.officeLabel}
                  </div>
                  <div className="text-xs font-semibold text-zinc-900 mt-0.5 leading-snug">
                    {content.officeValue}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-zinc-200/60">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    {content.phoneLabel}
                  </div>
                  <a
                    href="tel:+998902777366"
                    className="text-xs font-semibold text-zinc-900 hover:text-emerald-700 hover:underline mt-0.5 block font-mono"
                  >
                    {content.phoneValue}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Note Badge */}
            <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200/80 text-xs text-sky-950 leading-relaxed font-mono">
              <strong className="block text-sky-900 mb-1">Digitizing Physical Space:</strong>
              LiDAR 3D scanning, IoT sensor grid, and real-time twin simulation across Tashkent & Istanbul operations.
            </div>

          </div>

          {/* Right: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-zinc-50/70 rounded-2xl border border-zinc-200/80 p-6 sm:p-7 shadow-2xs space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1">
                    {content.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={content.form.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-900 focus:outline-hidden focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors shadow-2xs"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1">
                    {content.form.orgLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={content.form.orgPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-900 focus:outline-hidden focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors shadow-2xs"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1">
                    {content.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={content.form.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-900 focus:outline-hidden focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors shadow-2xs font-mono"
                  />
                </div>

                {/* Domain Selector */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1">
                    {content.form.domainLabel}
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-900 focus:outline-hidden focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors shadow-2xs"
                  >
                    <option value="all">{content.form.domainOptions.all}</option>
                    <option value="macro">{content.form.domainOptions.macro}</option>
                    <option value="micro">{content.form.domainOptions.micro}</option>
                    <option value="xr">{content.form.domainOptions.xr}</option>
                    <option value="green">{content.form.domainOptions.green}</option>
                  </select>
                </div>

              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1">
                  {content.form.notesLabel}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={content.form.notesPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-900 focus:outline-hidden focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors shadow-2xs resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
              >
                {submitting ? (
                  <span>{content.form.submittingBtn}</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-sky-400" />
                    <span>{content.form.submitBtn}</span>
                  </>
                )}
              </button>

              {/* Success Notification */}
              {submitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{content.form.successMsg}</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
