import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { STORIES } from '../data/collectionData';

export default function StoriesSection() {
  return (
    <section id="stories" className="py-24 md:py-32 bg-[#FAF8F5] border-b border-neutral-300 relative">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] tracking-mega-wide uppercase text-neutral-400 mb-2">
              <BookOpen size={13} />
              <span>05 / JOURNAL & CHRONICLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#161616]">
              Stories & Chronicles
            </h2>
          </div>
          <a
            href="#"
            className="text-xs uppercase tracking-[0.2em] font-medium text-black flex items-center gap-1 hover:gap-2 transition-all"
          >
            <span>EXPLORE FULL ARCHIVE</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story, idx) => (
            <article
              key={idx}
              className="group flex flex-col justify-between p-8 bg-[#F5F2EB] border border-neutral-300/80 hover:border-black transition-all duration-300 hover:shadow-soft-lift"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-6">
                  <span>{story.date}</span>
                  <span className="text-[10px] tracking-widest uppercase text-amber-800 font-sans font-medium">
                    {story.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#161616] group-hover:text-black transition-colors mb-3 leading-snug">
                  {story.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-light mb-8">
                  {story.snippet}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-300/80 flex items-center justify-between">
                <span className="text-[11px] tracking-mega-wide uppercase text-black font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  READ EDITORIAL <ArrowUpRight size={12} />
                </span>
                <span className="text-neutral-400 text-xs">4 min read</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
