import React, { useState } from 'react';
import { TranslationContent } from '../locales/translations';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  content: TranslationContent['contactSection'];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    platform: 'all',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        platform: 'all',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="aloqa" className="py-20 sm:py-24 relative border-t border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block text-xs font-mono font-bold tracking-widest text-sky-700 uppercase">
              {content.tag}
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              {content.title}
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {content.description}
            </p>

            <div className="space-y-3 pt-3 text-sm text-zinc-700">
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-sky-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500">
                    {content.officeLabel}
                  </div>
                  <div className="font-semibold text-zinc-900 mt-0.5">
                    {content.officeValue}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-sky-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500">
                    {content.emailLabel}
                  </div>
                  <div className="font-semibold text-zinc-900 mt-0.5 font-mono">
                    info@digitwins.uz
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-7 sm:p-9 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    {content.form.successMsg}
                  </h3>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-sky-600 hover:underline pt-2 inline-block cursor-pointer"
                  >
                    Yangi xabar yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-600 mb-1.5 font-medium">
                        {content.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={content.form.namePlaceholder}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-sky-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-600 mb-1.5 font-medium">
                        {content.form.companyLabel}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={content.form.companyPlaceholder}
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-sky-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-600 mb-1.5 font-medium">
                        {content.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={content.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-sky-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-600 mb-1.5 font-medium">
                        {content.form.platformLabel}
                      </label>
                      <select
                        value={formData.platform}
                        onChange={(e) =>
                          setFormData({ ...formData, platform: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-sky-600 transition-colors"
                      >
                        <option value="all">
                          {content.form.platformOptions.all}
                        </option>
                        <option value="industry">
                          {content.form.platformOptions.industry}
                        </option>
                        <option value="factory">
                          {content.form.platformOptions.factory}
                        </option>
                        <option value="education">
                          {content.form.platformOptions.education}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-600 mb-1.5 font-medium">
                      {content.form.messageLabel}
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder={content.form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-sky-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>
                      {submitting
                        ? content.form.submittingBtn
                        : content.form.submitBtn}
                    </span>
                    <Send className="w-4 h-4 text-sky-400" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
