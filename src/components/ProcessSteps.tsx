import { siteContent } from '@/config/site-content';

export default function ProcessSteps() {
  const { processSection } = siteContent;

  return (
    <section id="proceso" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {processSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            {processSection.subtitle}
          </p>
        </div>

        {/* 3-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {processSection.steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-2xs relative flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <span className="text-3xl font-black text-blue-600/30 tracking-tight">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
