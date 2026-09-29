'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, Loader2, ShieldCheck, Mail, User, Briefcase } from 'lucide-react';
import { siteContent } from '@/config/site-content';

interface FormDataState {
  fullName: string;
  contactInfo: string;
  profileType: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success';

export default function ContactForm() {
  const { contactFormSection } = siteContent;
  const { fields } = contactFormSection;

  const [formData, setFormData] = useState<FormDataState>({
    fullName: '',
    contactInfo: '',
    profileType: fields.profileOptions[0]?.value || 'freelancer',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.fullName || !formData.contactInfo || !formData.message) return;

    setStatus('loading');

    // Simulate 1 second submit delay
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      contactInfo: '',
      profileType: fields.profileOptions[0]?.value || 'freelancer',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/90 rounded-3xl border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {contactFormSection.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              {contactFormSection.subtitle}
            </p>
          </div>

          {status === 'success' ? (
            <div
              role="alert"
              aria-live="polite"
              className="bg-white p-8 rounded-2xl border border-green-200 text-center space-y-4 animate-in zoom-in-95 duration-200"
            >
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{fields.successMessage}</h3>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 inline-flex items-center justify-center text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-xl border border-blue-200/60 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none cursor-pointer"
              >
                {fields.submitButton}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    {fields.nameLabel} <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={fields.namePlaceholder}
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/20 focus-visible:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <label htmlFor="contactInfo" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    {fields.contactLabel} <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="contactInfo"
                      name="contactInfo"
                      required
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      placeholder={fields.contactPlaceholder}
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/20 focus-visible:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Profile Selector */}
              <div>
                <label htmlFor="profileType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {fields.profileLabel} <span className="text-blue-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <select
                    id="profileType"
                    name="profileType"
                    value={formData.profileType}
                    onChange={(e) => setFormData({ ...formData, profileType: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/20 focus-visible:outline-none transition-colors cursor-pointer"
                  >
                    {fields.profileOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {fields.messageLabel} <span className="text-blue-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={fields.messagePlaceholder}
                  className="w-full p-4 bg-white rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/20 focus-visible:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-xs transition-colors disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{fields.submittingButton}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{fields.submitButton}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Note */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{fields.privacyNotice}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
