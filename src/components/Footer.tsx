import { siteContent } from '@/config/site-content';
import { getWhatsAppUrl } from '@/lib/utils';
import { MessageCircle, Clock } from 'lucide-react';

export default function Footer() {
  const { brand, navigation, footer } = siteContent;
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <span className="w-3.5 h-3.5 bg-white rounded-sm transform rotate-45" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {brand.name.split(' ')[0]}{' '}
                <span className="text-blue-500">{brand.name.split(' ')[1]}</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navigation.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-none rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-none rounded"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Support Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Horario de Atención
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{brand.supportHours}</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp Direct */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {navigation.ctaButton}
            </h4>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{navigation.ctaButton}</span>
            </a>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{footer.copyright}</p>
          <p className="text-center sm:text-right max-w-md">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
