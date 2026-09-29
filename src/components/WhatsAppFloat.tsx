'use client';

import { MessageCircle } from 'lucide-react';
import { siteContent } from '@/config/site-content';
import { getWhatsAppUrl } from '@/lib/utils';

export default function WhatsAppFloat() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteContent.navigation.ctaButton}
      className="fixed bottom-4 right-4 z-50 md:hidden bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:outline-none"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="sr-only">{siteContent.navigation.ctaButton}</span>
    </a>
  );
}
