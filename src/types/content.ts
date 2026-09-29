export interface BrandContent {
  name: string;
  tagline: string;
  whatsappNumber: string;
  defaultMessage: string;
  supportHours: string;
  responseTimeBadge: string;
}

export interface SeoContent {
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationContent {
  links: NavLink[];
  ctaButton: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface SolutionTabItem {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface SolutionsSectionContent {
  title: string;
  subtitle: string;
  tabs: SolutionTabItem[];
}

export interface FeatureItem {
  icon: 'Cloud' | 'MessageCircle' | 'ShieldCheck';
  title: string;
  description: string;
}

export interface FeaturesSectionContent {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessSectionContent {
  title: string;
  subtitle: string;
  steps: ProcessStepItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionContent {
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export interface ProfileOption {
  value: string;
  label: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  contactLabel: string;
  contactPlaceholder: string;
  profileLabel: string;
  profileOptions: ProfileOption[];
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  submittingButton: string;
  successMessage: string;
  privacyNotice: string;
}

export interface ContactFormSectionContent {
  title: string;
  subtitle: string;
  fields: ContactFormFields;
}

export interface FooterContent {
  copyright: string;
  disclaimer: string;
  quickLinksTitle: string;
}

export interface SiteContent {
  brand: BrandContent;
  seo: SeoContent;
  navigation: NavigationContent;
  hero: HeroContent;
  solutionsSection: SolutionsSectionContent;
  featuresSection: FeaturesSectionContent;
  processSection: ProcessSectionContent;
  faqSection: FaqSectionContent;
  contactFormSection: ContactFormSectionContent;
  footer: FooterContent;
}
