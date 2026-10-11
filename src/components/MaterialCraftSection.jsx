import React from 'react';
import { Sparkles, Sun, Droplets, Feather, ShieldCheck } from 'lucide-react';

export default function MaterialCraftSection() {
  const steps = [
    {
      num: '01',
      title: 'Tibetan Highland Fleece',
      subtitle: 'Harvested at 4,000m Elevation',
      desc: 'The sheep of the high Tibetan plateau withstand extreme climate variations, producing wool rich in natural lanolin. This provides an extraordinary natural stain resistance and a warm, resilient matte body underfoot.',
      tag: 'Raw Material'
    },
    {
      num: '02',
      title: 'Hand-Carding & Hand-Spinning',
      subtitle: 'Preserving Fiber Irregularity',
      desc: 'Fibers are gently combed using wooden cards and spun onto drop spindles by master artisans. This intentional slight variation in yarn thickness creates the subtle abrash effect that distinguishes hand-craft from machine uniformity.',
      tag: 'Prep'
    },
    {
      num: '03',
      title: 'Tibetan Loop Knotting',
      subtitle: '125,000 to 150,000 Knots / m²',
      desc: 'Tied around a horizontal iron gauge rod on vertical upright looms. Each line of knots is beaten with iron combs, forming a structural matrix of dense woolen loops before being sliced open by hand.',
      tag: 'Structure'
    },
    {
      num: '04',
      title: 'Glacial Rainwater Wash',
      subtitle: 'Cured Beneath the Open Sun',
      desc: 'Finished carpets are submerged in filtered Himalayan rainwater, rhythmically massaged with wooden paddles, and laid flat on Kathmandu rooftops to dry under the Himalayan sun.',
      tag: 'Finishing'
    }
  ];

  return (
    <section id="craft" className="py-24 md:py-32 bg-[#EFECE4] border-b border-neutral-300 relative">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 pb-8 mb-16 gap-6">
          <div>
            <span className="text-[11px] tracking-mega-wide uppercase text-neutral-500 block mb-2 font-sans">
              04 / CRAFT INTEGRITY & MATERIALITY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#161616]">
              The Four Pillars of Craft
            </h2>
          </div>
          <p className="text-base sm:text-lg text-neutral-600 font-light max-w-md leading-relaxed">
            "No chemical wash. No synthetic fibers. Only raw mountain elements shaped by artisanal mastery."
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] p-8 border border-neutral-300/80 flex flex-col justify-between hover:border-black transition-all duration-300 hover:shadow-soft-lift group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-neutral-400 group-hover:text-black transition-colors">
                    {step.num}
                  </span>
                  <span className="text-[9px] tracking-mega-wide uppercase px-2 py-0.5 bg-neutral-200/60 text-neutral-700">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#161616] mb-1">
                  {step.title}
                </h3>
                <span className="text-xs uppercase tracking-wider text-amber-800 font-medium block mb-4">
                  {step.subtitle}
                </span>

                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-neutral-200 text-[10px] tracking-widest uppercase text-neutral-400 group-hover:text-neutral-900 transition-colors">
                KATHMANDU ATELIER STANDARD
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
