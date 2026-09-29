import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SolutionsTabs from '@/components/SolutionsTabs';
import Features from '@/components/Features';
import ProcessSteps from '@/components/ProcessSteps';
import FaqAccordion from '@/components/FaqAccordion';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <SolutionsTabs />
        <Features />
        <ProcessSteps />
        <FaqAccordion />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Button */}
      <WhatsAppFloat />
    </>
  );
}
