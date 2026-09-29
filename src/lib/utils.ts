import { siteContent } from '@/config/site-content';

export const getWhatsAppUrl = (message?: string): string => {
  const finalMessage = message || siteContent.brand.defaultMessage;
  const encodedText = encodeURIComponent(finalMessage);
  return `https://wa.me/${siteContent.brand.whatsappNumber}?text=${encodedText}`;
};
