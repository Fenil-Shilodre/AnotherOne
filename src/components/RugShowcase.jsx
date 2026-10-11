import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, FileCode, SlidersHorizontal, Grid2X2, LayoutTemplate, Layers, Sparkles, ArrowRight, Check } from 'lucide-react';
import { RUGS } from '../data/collectionData';

export default function RugShowcase({ onSelectRug, onOpenQuote }) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'lookbook' | 'interiors'
  const [hoveredRugId, setHoveredRugId] = useState(null);
  const [globalShowMockups, setGlobalShowMockups] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeLookbookIndex, setActiveLookbookIndex] = useState(0);
  const [lookbookViewMockup, setLookbookViewMockup] = useState(false);

  // Filter rugs
  const filteredRugs = RUGS.filter((rug) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'freeform') return rug.id === 'elsewise' || rug.id === 'manyfold' || rug.id === 'carryover';
    if (selectedFilter === 'geometric') return rug.id === 'odd-company' || rug.id === 'sidelong' || rug.id === 'side-effect';
    if (selectedFilter === 'high-silk') return rug.materials.includes('30%') || rug.materials.includes('35%');
    return true;
  });

  const activeLookbookRug = RUGS[activeLookbookIndex] || RUGS[0];

  return (
    <section id="showcase" className="py-24 md:py-32 bg-[#F7F5F0] border-b border-neutral-300 relative">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] tracking-mega-wide uppercase text-neutral-500 mb-2">
              <span>02 / THE COLLECTION</span>
              <span>•</span>
              <span className="text-black font-medium">6 ORIGINAL WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#161616]">
              Curated Editions
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-light mt-2 max-w-xl">
              Hover over any piece to view its scale and presence in contemporary interiors.
            </p>
          </div>

          {/* View Toolbar Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Global Mockup / Studio Rug Toggle */}
            <button
              onClick={() => setGlobalShowMockups(!globalShowMockups)}
              className={`flex items-center gap-2 px-4 py-2.5 text-[11px] tracking-mega-wide uppercase transition-all border ${
                globalShowMockups
                  ? 'bg-[#141414] text-[#FAF8F5] border-[#141414]'
                  : 'bg-white/80 hover:bg-white text-neutral-800 border-neutral-300'
              }`}
            >
              <Layers size={13} />
              <span>{globalShowMockups ? 'VIEW STUDIO CUTS' : 'VIEW ROOM MOCKUPS'}</span>
            </button>

            {/* Layout Mode Switcher */}
            <div className="flex items-center bg-[#EAE6DD] p-1 border border-neutral-300">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-wider uppercase font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-neutral-600 hover:text-black'
                }`}
                title="Dual Grid View"
              >
                <Grid2X2 size={13} />
                <span className="hidden sm:inline">DUAL GRID</span>
              </button>

              <button
                onClick={() => setViewMode('lookbook')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-wider uppercase font-medium transition-all ${
                  viewMode === 'lookbook'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-neutral-600 hover:text-black'
                }`}
                title="Editorial Lookbook View"
              >
                <LayoutTemplate size={13} />
                <span className="hidden sm:inline">LOOKBOOK</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Categories Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {[
            { id: 'all', label: 'ALL 6 EDITIONS' },
            { id: 'freeform', label: 'FREEFORM & SCULPTURAL' },
            { id: 'geometric', label: 'ARCHITECTURAL RADII & GRIDS' },
            { id: 'high-silk', label: 'HIGH-SILK EMPHASIS' },
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => setSelectedFilter(chip.id)}
              className={`px-4 py-2 text-[11px] tracking-mega-wide uppercase transition-all ${
                selectedFilter === chip.id
                  ? 'bg-neutral-900 text-white font-medium shadow-sm'
                  : 'bg-neutral-200/60 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              {chip.label}
            </button>
          ))}
          <span className="text-xs text-neutral-400 ml-auto hidden md:inline">
            Showing {filteredRugs.length} of {RUGS.length} pieces
          </span>
        </div>

        {/* MODE 1: DUAL GRID VIEW (Standard cc-tapis style showcase) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredRugs.map((rug) => {
              const isHovered = hoveredRugId === rug.id;
              const displayMockup = globalShowMockups || isHovered;

              return (
                <div
                  key={rug.id}
                  onMouseEnter={() => setHoveredRugId(rug.id)}
                  onMouseLeave={() => setHoveredRugId(null)}
                  className="group flex flex-col bg-[#F3F0E9] border border-neutral-300/80 transition-all duration-500 hover:border-black hover:shadow-soft-lift"
                >
                  {/* Visual Frame */}
                  <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden bg-[#FAF8F5] flex items-center justify-center p-6 cursor-pointer"
                    onClick={() => onSelectRug(rug)}
                  >
                    {/* Flat Cut-out Rug Image */}
                    <img
                      src={rug.image}
                      alt={rug.name}
                      className={`absolute inset-0 w-full h-full object-contain p-6 transition-all duration-700 ease-out ${
                        displayMockup
                          ? 'opacity-0 scale-95 blur-[2px]'
                          : 'opacity-100 scale-100'
                      }`}
                      loading="lazy"
                    />

                    {/* Architectural Interior Room Mockup Image */}
                    <img
                      src={rug.mockup}
                      alt={`${rug.name} placed in luxury interior`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                        displayMockup
                          ? 'opacity-100 scale-105'
                          : 'opacity-0 scale-100'
                      }`}
                      loading="lazy"
                    />
                  </div>

                  {/* Card Editorial Metadata */}
                  <div className="p-6 md:p-7 flex flex-col justify-between flex-grow border-t border-neutral-300/80 bg-[#F7F5F0]">
                    <div>
                      {/* Name & Series */}
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#161616] group-hover:translate-x-1 transition-transform duration-300">
                          {rug.name}
                        </h3>
                        <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
                          {rug.dimensions}
                        </span>
                      </div>

                      <p className="text-xs text-neutral-600 font-light line-clamp-2 mb-4 leading-relaxed">
                        {rug.subtitle || rug.story}
                      </p>

                      {/* Technical specifications pills */}
                      <div className="space-y-1.5 text-[11px] text-neutral-600 font-light border-t border-neutral-200/80 pt-3">
                        <div className="flex justify-between">
                          <span className="text-neutral-400 uppercase tracking-wider">Materials:</span>
                          <span className="font-normal text-neutral-800">{rug.materials}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400 uppercase tracking-wider">Knot Density:</span>
                          <span className="font-mono text-neutral-800">{rug.knotCount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400 uppercase tracking-wider">Interior Setting:</span>
                          <span className="text-neutral-700 italic truncate max-w-[190px]">{rug.roomType}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Palette Swatches & CTA */}
                    <div className="pt-5 mt-4 border-t border-neutral-300/80 flex items-center justify-between">
                      {/* Palette Dots */}
                      <div className="flex items-center gap-1.5" title="Artisanal Color Palette">
                        {rug.palette.map((color, idx) => (
                          <span
                            key={idx}
                            className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-sm cursor-help transition-transform hover:scale-125"
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => onSelectRug(rug)}
                        className="text-[11px] tracking-mega-wide uppercase text-black font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        <span>VIEW PRODUCT</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* MODE 2: EDITORIAL LOOKBOOK SHOWCASE (Full cc-tapis feature layout) */}
        {viewMode === 'lookbook' && (
          <div className="bg-[#FAF8F5] border border-neutral-300 shadow-sm p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Huge Interactive Visual with Studio/Mockup Switcher */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFECE4] border border-neutral-300">
                  <img
                    src={lookbookViewMockup ? activeLookbookRug.mockup : activeLookbookRug.image}
                    alt={activeLookbookRug.name}
                    className={`w-full h-full ${
                      lookbookViewMockup ? 'object-cover' : 'object-contain p-8'
                    } transition-all duration-700`}
                  />

                  {/* Toggle button on the image */}
                  <div className="absolute bottom-6 left-6 z-10 flex gap-2">
                    <button
                      onClick={() => setLookbookViewMockup(false)}
                      className={`px-3 py-1.5 text-[10px] tracking-wider uppercase backdrop-blur-md transition-all ${
                        !lookbookViewMockup
                          ? 'bg-black text-white font-medium'
                          : 'bg-white/80 text-black hover:bg-white'
                      }`}
                    >
                      FLAT DESIGN CUT
                    </button>
                    <button
                      onClick={() => setLookbookViewMockup(true)}
                      className={`px-3 py-1.5 text-[10px] tracking-wider uppercase backdrop-blur-md transition-all ${
                        lookbookViewMockup
                          ? 'bg-black text-white font-medium'
                          : 'bg-white/80 text-black hover:bg-white'
                      }`}
                    >
                      ARCHITECTURAL ROOM MOCKUP
                    </button>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="grid grid-cols-6 gap-3 pt-2">
                  {RUGS.map((rug, idx) => (
                    <button
                      key={rug.id}
                      onClick={() => setActiveLookbookIndex(idx)}
                      className={`relative aspect-square border p-1 transition-all overflow-hidden ${
                        activeLookbookIndex === idx
                          ? 'border-black ring-2 ring-black/20 bg-white'
                          : 'border-neutral-300 bg-neutral-100 hover:border-neutral-500'
                      }`}
                    >
                      <img
                        src={rug.image}
                        alt={rug.name}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: In-depth Curatorial Description */}
              <div className="lg:col-span-5 space-y-6 lg:pl-6">
                <div>
                  <span className="text-[11px] tracking-mega-wide uppercase text-neutral-500 block mb-1">
                    ANOTHER ONE • {activeLookbookRug.series}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#161616] mb-3">
                    {activeLookbookRug.name}
                  </h3>
                  <p className="text-base text-neutral-600 font-light leading-relaxed">
                    "{activeLookbookRug.story}"
                  </p>
                </div>

                {/* Key Technical Matrix */}
                <div className="border-t border-b border-neutral-300 py-4 space-y-3 text-xs">
                  <div className="flex justify-between py-1 border-b border-neutral-200">
                    <span className="text-neutral-500 uppercase tracking-wider">Standard Dimensions</span>
                    <span className="font-medium text-black">{activeLookbookRug.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-200">
                    <span className="text-neutral-500 uppercase tracking-wider">Knot Density</span>
                    <span className="font-mono text-black">{activeLookbookRug.knotCount}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-200">
                    <span className="text-neutral-500 uppercase tracking-wider">Materials</span>
                    <span className="text-black font-medium">{activeLookbookRug.materials}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-200">
                    <span className="text-neutral-500 uppercase tracking-wider">Weave Technique</span>
                    <span className="text-black">{activeLookbookRug.technique}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-500 uppercase tracking-wider">Ideal Setting</span>
                    <span className="text-neutral-700 italic">{activeLookbookRug.roomType}</span>
                  </div>
                </div>

                {/* Color Palette Display */}
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-2">
                    NATURAL PIGMENT PALETTE
                  </span>
                  <div className="flex items-center gap-3">
                    {activeLookbookRug.palette.map((color, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span
                          className="w-5 h-5 rounded-full border border-black/20"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-[11px] text-neutral-700">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => onOpenQuote(activeLookbookRug)}
                    className="flex-1 bg-[#161616] hover:bg-black text-[#FAF8F5] text-xs tracking-mega-wide uppercase py-3.5 px-6 font-medium transition-all text-center"
                  >
                    REQUEST A QUOTE
                  </button>
                  <button
                    onClick={() => onSelectRug(activeLookbookRug)}
                    className="border border-neutral-400 hover:border-black text-black text-xs tracking-mega-wide uppercase py-3.5 px-6 transition-all"
                  >
                    FULL SPECIFICATIONS
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
