import { MessageCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { siteContent } from '@/config/site-content';
import { getWhatsAppUrl } from '@/lib/utils';
import { GradientWave } from '@/components/ui/gradient-wave';

export default function Hero() {
  const { hero, brand } = siteContent;
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-50 via-slate-50 to-white overflow-hidden"
    >
      {/* Animated WebGL Gradient Wave Background */}
      <GradientWave
        className="opacity-75 pointer-events-none"
        colors={["#38bdf8", "#0284c7", "#ffffff", "#38bdf8", "#60a5fa", "#ffffff"]}
        noiseSpeed={0.000015}
        shadowPower={6}
      />

      {/* Subtle backdrop overlay for crisp typography */}
      <div className="absolute inset-0 bg-slate-50/40 backdrop-blur-[0.5px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide mb-6 sm:mb-8 shadow-2xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>{hero.badge}</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            {hero.title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
            {hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-14 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base sm:text-lg px-7 py-4 rounded-xl shadow-sm hover:shadow-md transition-all focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>{hero.primaryCta}</span>
            </a>

            <a
              href="#contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-slate-700 font-semibold text-base sm:text-lg px-6 py-4 rounded-xl border border-slate-200 shadow-2xs transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none backdrop-blur-md"
            >
              <span>{hero.secondaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-600 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-medium">{brand.tagline}</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-medium">{brand.responseTimeBadge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
