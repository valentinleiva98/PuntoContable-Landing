import { Cloud, MessageCircle, ShieldCheck } from 'lucide-react';
import { siteContent } from '@/config/site-content';

const ICON_MAP = {
  Cloud,
  MessageCircle,
  ShieldCheck,
};

export default function Features() {
  const { featuresSection } = siteContent;

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {featuresSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            {featuresSection.subtitle}
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuresSection.items.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || Cloud;
            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
