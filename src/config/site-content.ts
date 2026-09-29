import { SiteContent } from '@/types/content';

export const siteContent: SiteContent = {
  brand: {
    name: "Punto Contable",
    tagline: "Estudio contable e impositivo digital",
    whatsappNumber: "5493855019874",
    defaultMessage: "Hola Punto Contable, quisiera coordinar una consulta sobre sus servicios.",
    supportHours: "Lunes a Viernes de 9:00 a 18:00 hs",
    responseTimeBadge: "Respuesta promedio en menos de 2 hs hábiles",
  },
  seo: {
    title: "Punto Contable | Estudio Contable e Impositivo Digital",
    description: "Asesoramiento contable, impositivo y laboral para freelancers, PyMEs y comercios. 100% digital y sin burocracia.",
  },
  navigation: {
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Cómo trabajamos", href: "#proceso" },
      { label: "Preguntas frecuentes", href: "#faq" },
    ],
    ctaButton: "Contactar por WhatsApp",
  },
  hero: {
    badge: "Asesoramiento impositivo y contable 100% digital",
    title: "Tu tranquilidad fiscal y contable, sin burocracia ni sorpresas.",
    description: "Gestionamos tus impuestos, monotributo, balances y sueldos con atención ágil y personalizada. Enfocate en hacer crecer tu actividad, nosotros nos ocupamos del resto.",
    primaryCta: "Consultar por WhatsApp",
    secondaryCta: "Dejar una consulta",
  },
  solutionsSection: {
    title: "Soluciones a la medida de tu actividad",
    subtitle: "Seleccioná tu perfil para conocer cómo podemos ayudarte:",
    tabs: [
      {
        id: "freelancers",
        label: "Freelancers y Profesionales",
        title: "Tranquilidad impositiva para profesionales independientes",
        description: "Optimizá tu facturación y evitá multas o recategorizaciones sorpresivas.",
        features: [
          "Gestión integral de Monotributo y recategorizaciones semestrales",
          "Facturación electrónica en moneda local y extranjera",
          "Asesoramiento para cobros del exterior y encuadre impositivo",
          "Presentación de Ingresos Brutos (Convenio Multilateral o local)"
        ],
        ctaText: "Consultar por plan Freelancer",
      },
      {
        id: "pymes",
        label: "Comercios y PyMEs",
        title: "Administración contable y laboral para negocios en marcha",
        description: "Delegá la carga burocrática mensual y concentrate en vender y crecer.",
        features: [
          "Liquidación mensual de IVA, Ganancias e Ingresos Brutos",
          "Liquidación de sueldos, cargas sociales y Libro de Sueldos Digital",
          "Conciliaciones bancarias y seguimiento de cuentas",
          "Planificación fiscal para reducir costos de forma legal"
        ],
        ctaText: "Consultar por plan PyME",
      },
      {
        id: "empresas",
        label: "Sociedades y Empresas",
        title: "Soporte corporativo integral y balances auditados",
        description: "Información financiera fidedigna para la toma de decisiones estratégicas.",
        features: [
          "Constitución y mantenimiento societario (SRL, SA, SAS)",
          "Balances generales certificados y auditoría externa",
          "Reportes de gestión económica y financiera periódicos",
          "Atención directa a inspecciones y requerimientos de organismos"
        ],
        ctaText: "Consultar por plan Empresas",
      }
    ]
  },
  featuresSection: {
    title: "¿Por qué trabajar con Punto Contable?",
    subtitle: "Diseñamos un servicio pensado para resolver problemas, no para crearlos.",
    items: [
      {
        icon: "Cloud",
        title: "100% Digital y en la Nube",
        description: "Toda tu documentación compartida de forma segura. Olvidate de llevar papeles físicos y carpetas a un estudio."
      },
      {
        icon: "MessageCircle",
        title: "Comunicación Directa",
        description: "Tu asesor contable a un mensaje de distancia por WhatsApp. Sin intermediarios ni demoras de semanas."
      },
      {
        icon: "ShieldCheck",
        title: "Anticipación y Transparencia",
        description: "Te avisamos los vencimientos con suficiente anticipación y explicamos tus números con claridad, sin tecnicismos confusos."
      }
    ]
  },
  processSection: {
    title: "Empezar es simple y sin complicaciones",
    subtitle: "En 3 simples pasos ordenamos tu situación impositiva:",
    steps: [
      {
        number: "01",
        title: "Contacto inicial sin costo",
        description: "Nos enviás un WhatsApp contándonos sobre tu actividad y tus dudas principales."
      },
      {
        number: "02",
        title: "Diagnóstico y propuesta",
        description: "Analizamos tu situación fiscal actual, detectamos mejoras y te presentamos un plan a medida."
      },
      {
        number: "03",
        title: "Gestión delegada",
        description: "Nos transferís la carga operativa y nosotros nos aseguramos de que todo esté en regla y a tiempo."
      }
    ]
  },
  faqSection: {
    title: "Preguntas Frecuentes",
    subtitle: "Respuestas claras a las dudas más habituales sobre nuestro servicio.",
    items: [
      {
        question: "¿Cómo es el traspaso si ya tengo otro contador?",
        answer: "El proceso es simple: solo necesitás solicitarle a tu contador anterior los últimos comprobantes presentados y tu clave fiscal. Nosotros nos encargamos de coordinar la transición sin interrupciones en tus declaraciones."
      },
      {
        question: "¿Qué documentación necesito para empezar si nunca facturé?",
        answer: "Solo tu DNI y tu CUIT/CUIL. Nosotros te guiamos paso a paso para el alta en AFIP/ARCA, Ingresos Brutos y la emisión de tu primera factura electrónica."
      },
      {
        question: "¿Cómo se establecen y abonan los honorarios?",
        answer: "Trabajamos con un abono mensual fijo según la complejidad de tu estructura, acordado de antemano y sin costos ocultos. Podés abonar mediante transferencia bancaria o débito automático."
      },
      {
        question: "¿El servicio incluye asesoramiento o solo liquidación de impuestos?",
        answer: "Incluye ambos. No solo liquidamos tus obligaciones mensuales, sino que estamos disponibles permanentemente para resolver dudas operativas o analizar nuevas decisiones de negocio."
      }
    ]
  },
  contactFormSection: {
    title: "¿Prefieres que te contactemos nosotros?",
    subtitle: "Completá el formulario y un asesor se comunicará con vos en el día.",
    fields: {
      nameLabel: "Nombre completo",
      namePlaceholder: "Ej: Juan Pérez",
      contactLabel: "WhatsApp o Email de contacto",
      contactPlaceholder: "tu@email.com o +54 9 385...",
      profileLabel: "¿Cuál es tu perfil o tipo de negocio?",
      profileOptions: [
        { value: "freelancer", label: "Freelancer / Profesional independiente" },
        { value: "pyme", label: "Comercio / PyME" },
        { value: "empresa", label: "Empresa / Sociedad" },
        { value: "otro", label: "Otro tipo de consulta" },
      ],
      messageLabel: "¿En qué podemos ayudarte?",
      messagePlaceholder: "Contanos brevemente qué necesitás resolver...",
      submitButton: "Enviar consulta",
      submittingButton: "Enviando...",
      successMessage: "¡Mensaje recibido! Nos comunicaremos con vos a la brevedad.",
      privacyNotice: "Tus datos solo se utilizarán para responder tu consulta. No enviamos spam.",
    }
  },
  footer: {
    copyright: "© Punto Contable. Todos los derechos reservados.",
    disclaimer: "Servicios profesionales contables e impositivos. La información suministrada se procesa bajo estricto secreto profesional.",
    quickLinksTitle: "Navegación",
  }
};
