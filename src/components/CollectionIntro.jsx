import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { COLLECTION_INFO } from '../data/collectionData';

export default function CollectionIntro() {
  return (
    <section id="manifesto" className="py-20 md:py-28 bg-[#F7F5F0] border-b border-neutral-200 relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-neutral-300/80 pb-4 mb-14">
          <span className="text-[11px] tracking-[0.25em] uppercase text-neutral-500 font-sans">
            01 / PHILOSOPHY
          </span>
          <span className="text-[11px] tracking-[0.2em] uppercase text-neutral-800 font-medium">
            HOUSE OF KNOTS • HOUSE ORIGINALS
          </span>
        </div>

        {/* Dual Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Core Statement */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-neutral-600 font-medium flex items-center gap-2">
              <Sparkles size={13} className="text-amber-700" /> WOVEN WORKS OF ART
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#161616] font-medium tracking-tight leading-[1.15]">
              Redefining what modern design looks like on the floor.
            </h2>
            <div className="pt-3 border-l-2 border-neutral-900 pl-5">
              <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed">
                "Intentional, expressive, and unmistakably of their time. We treat each rug not as floor covering, but as spatial architecture."
              </p>
              <span className="block mt-3 text-xs tracking-wider uppercase text-neutral-500 font-light">
                — House of Knots Studio
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 font-light leading-relaxed text-base">
            <p className="text-lg text-neutral-900 font-normal">
              {COLLECTION_INFO.manifestoParagraph1}
            </p>
            <p>
              {COLLECTION_INFO.manifestoParagraph2}
            </p>
            <p className="text-neutral-600 text-sm">
              Each piece is executed with a knot density reaching up to 150,000 knots per square meter. Hand-knotted from natural Tibetan highland sheep fleece and combined with high-lustre Chinese silk, every fiber is washed using filtered Himalayan rainwater and slowly cured beneath the open sun, delivering an organic texture of unmatched durability and luminous tactile depth.
            </p>

            {/* Clean Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-200">
              {COLLECTION_INFO.craftStats.map((stat, i) => (
                <div key={i} className="p-4 bg-[#EFECE4]/60 border border-neutral-200">
                  <span className="block text-lg sm:text-xl font-medium text-black mb-1">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] tracking-wider uppercase text-neutral-500 font-sans leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Action Link */}
            <div className="pt-3">
              <a
                href="#craft"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-black hover:text-amber-800 transition-colors underline underline-offset-8"
              >
                EXPLORE ATELIER PROCESS <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
