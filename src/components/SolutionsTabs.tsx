'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { User, Store, Building2, CheckCircle2, MessageCircle } from 'lucide-react';
import { siteContent } from '@/config/site-content';
import { getWhatsAppUrl } from '@/lib/utils';
import { SolutionTabItem } from '@/types/content';

const TAB_ICONS = [User, Store, Building2];

export default function SolutionsTabs() {
  const { solutionsSection } = siteContent;
  const tabs = solutionsSection.tabs;

  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id || 'freelancers');
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const activeTab: SolutionTabItem = tabs.find((t) => t.id === activeTabId) || tabs[0];

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = currentIndex;

    if (e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTab = tabs[nextIndex];
    setActiveTabId(nextTab.id);
    tabRefs.current[nextTab.id]?.focus();
  };

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {solutionsSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            {solutionsSection.subtitle}
          </p>
        </div>

        {/* Tab Navigation List */}
        <div className="max-w-4xl mx-auto">
          <div
            role="tablist"
            aria-label={solutionsSection.title}
            className="flex flex-col sm:flex-row p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80 gap-1.5"
          >
            {tabs.map((tab, idx) => {
              const Icon = TAB_ICONS[idx % TAB_ICONS.length];
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTabId(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`flex items-center justify-center gap-2.5 px-4 py-3 sm:py-3.5 rounded-xl font-semibold text-sm transition-all flex-1 text-center cursor-pointer ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-sm border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  } focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div
            id={`panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.id}`}
            className="mt-8 bg-slate-50/70 p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-2xs transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-200/80">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100/70 text-blue-800 text-xs font-semibold rounded-md mb-2">
                  {activeTab.label}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {activeTab.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
                  {activeTab.description}
                </p>
              </div>

              {/* Contextual WhatsApp CTA */}
              <a
                href={getWhatsAppUrl(`Hola Punto Contable, quisiera ${activeTab.ctaText.toLowerCase()}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-2xs transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{activeTab.ctaText}</span>
              </a>
            </div>

            {/* Key Features List */}
            <div className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeTab.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
