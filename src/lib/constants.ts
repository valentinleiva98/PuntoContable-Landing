export const WHATSAPP_NUMBER = "5491100000000";

export const DEFAULT_WA_MESSAGE = "Hola Punto Contable, quisiera recibir asesoramiento.";

export const buildWhatsAppUrl = (message: string = DEFAULT_WA_MESSAGE): string => {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
};

export const SITE_CONFIG = {
  name: "Punto Contable",
  description:
    "Asesoramiento contable, impositivo y laboral para freelancers, comercios y empresas. Gestión 100% digital y sin burocracia.",
  url: "https://puntocontable.com.ar", // Placeholder standard domain
  businessHours: "Lunes a Viernes de 9:00 a 18:00 hs",
  email: "contacto@puntocontable.com.ar",
  location: "Buenos Aires, Argentina",
};
