'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteContent } from '@/config/site-content';
import { getWhatsAppUrl } from '@/lib/utils';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);
  const whatsappUrl = getWhatsAppUrl();
  const { brand, navigation } = siteContent;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-slate-50/80 backdrop-blur-xs border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none rounded-lg p-1"
            aria-label={`${brand.name} - Inicio`}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 transition-colors">
              <span className="w-3.5 h-3.5 bg-white rounded-sm transform rotate-45 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-900 leading-tight tracking-tight">
                {brand.name.split(' ')[0]}{' '}
                <span className="text-blue-600 font-semibold">{brand.name.split(' ')[1]}</span>
              </span>
              <span className="text-[10px] text-slate-500 tracking-wider uppercase font-medium">
                {brand.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {navigation.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none rounded-md px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{navigation.ctaButton}</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-b border-slate-200 shadow-lg px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col gap-2" aria-label="Navegación móvil">
            {navigation.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm w-full py-3 rounded-xl shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{navigation.ctaButton}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
