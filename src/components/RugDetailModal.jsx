import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, FileCode, Check, Sparkles, ZoomIn, Download, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RugDetailModal({ rug, rugs, onClose, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('mockup'); // 'mockup' | 'studio' | 'texture'
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [dwgDownloaded, setDwgDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!rug) return null;

  const currentIndex = rugs.findIndex((r) => r.id === rug.id);
  const prevRug = rugs[(currentIndex - 1 + rugs.length) % rugs.length];
  const nextRug = rugs[(currentIndex + 1) % rugs.length];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleDownloadDwg = () => {
    setDwgDownloaded(true);
    const link = document.createElement('a');
    link.href = rug.image;
    link.download = `ANOTHER_ONE_${rug.name}_CAD_DWG_SPEC.jpg`;
    link.click();
    setTimeout(() => setDwgDownloaded(false), 3000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-2 sm:p-6 md:p-10 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#FAF8F5] w-full max-w-7xl max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-300 relative flex flex-col"
        >
          {/* Top Bar */}
          <div className="sticky top-0 z-20 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-4 border-b border-neutral-300 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-[10px] tracking-mega-wide uppercase text-neutral-400">
                PIECE {rug.number} / 06
              </span>
              <span className="text-sm font-medium tracking-tight text-black">
                {rug.name}
              </span>
            </div>

            {/* Nav Arrows & Close */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => onClose(prevRug)}
                className="p-1.5 hover:bg-neutral-200 transition-colors text-neutral-700"
                title="Previous rug"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => onClose(nextRug)}
                className="p-1.5 hover:bg-neutral-200 transition-colors text-neutral-700"
                title="Next rug"
              >
                <ChevronRight size={18} />
              </button>
              <div className="w-px h-5 bg-neutral-300" />
              <button
                onClick={() => onClose()}
                className="p-1.5 hover:bg-neutral-200 transition-colors text-black"
                title="Close modal"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Main Modal Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
            {/* Visual Viewer (Left 7 Cols) */}
            <div className="lg:col-span-7 bg-[#EFECE4] p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-300">
              {/* Tab Selector */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => { setActiveTab('mockup'); setIsZoomed(false); }}
                  className={`px-3.5 py-1.5 text-[11px] tracking-wider uppercase transition-all ${
                    activeTab === 'mockup'
                      ? 'bg-black text-white font-medium'
                      : 'bg-white/80 text-black hover:bg-white'
                  }`}
                >
                  ROOM IN SITU MOCKUP
                </button>
                <button
                  onClick={() => { setActiveTab('studio'); setIsZoomed(false); }}
                  className={`px-3.5 py-1.5 text-[11px] tracking-wider uppercase transition-all ${
                    activeTab === 'studio'
                      ? 'bg-black text-white font-medium'
                      : 'bg-white/80 text-black hover:bg-white'
                  }`}
                >
                  STUDIO SILHOUETTE
                </button>
                <button
                  onClick={() => { setActiveTab('texture'); setIsZoomed(true); }}
                  className={`px-3.5 py-1.5 text-[11px] tracking-wider uppercase transition-all ${
                    activeTab === 'texture'
                      ? 'bg-black text-white font-medium'
                      : 'bg-white/80 text-black hover:bg-white'
                  }`}
                >
                  TEXTURE MACRO ZOOM
                </button>
              </div>

              {/* Main Image View Area */}
              <div
                className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-white/60 border border-neutral-300 flex items-center justify-center cursor-crosshair group"
                onMouseMove={handleMouseMove}
              >
                {activeTab === 'mockup' && (
                  <img
                    src={rug.mockup}
                    alt={rug.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                )}

                {activeTab === 'studio' && (
                  <img
                    src={rug.image}
                    alt={rug.name}
                    className="w-full h-full object-contain p-8 transition-transform duration-500"
                  />
                )}

                {activeTab === 'texture' && (
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={rug.image}
                      alt={rug.name}
                      className="w-full h-full object-cover"
                      style={{
                        transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                        transform: 'scale(2.4)',
                        transition: 'transform 0.1s ease-out',
                      }}
                    />
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[9px] tracking-widest uppercase px-2 py-1 backdrop-blur-sm pointer-events-none">
                      MOVE CURSOR TO INSPECT PILE KNOTS
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
                <span>Natural daylight rendering • Hand-sheared relief</span>
                <span className="font-mono">{rug.knotCount}</span>
              </div>
            </div>

            {/* Spec & Quote Form (Right 5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-[#FAF8F5]">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] tracking-mega-wide uppercase text-amber-800 font-semibold block mb-1">
                    ANOTHER ONE — 2026 EDITION
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#161616]">
                    {rug.name}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">
                    {rug.series}
                  </p>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed font-light">
                  {rug.story}
                </p>

                {/* Technical Spec List */}
                <div className="border-t border-b border-neutral-300 py-4 space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase tracking-wider">Dimensions</span>
                    <span className="font-medium text-black">{rug.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase tracking-wider">Materiality</span>
                    <span className="text-neutral-800">{rug.materials}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase tracking-wider">Knot Count</span>
                    <span className="font-mono text-neutral-800">{rug.knotCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase tracking-wider">Craft Technique</span>
                    <span className="text-neutral-800 text-right">{rug.technique}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase tracking-wider">Estimated Value</span>
                    <span className="font-mono text-sm font-semibold text-neutral-900">{rug.priceRange}</span>
                  </div>
                </div>

                {/* Color Swatch Dots with Names */}
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-2 font-medium">
                    HAND-DYED PIGMENT CODES
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {rug.palette.map((p, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-1.5 bg-neutral-100 border border-neutral-200">
                        <span
                          className="w-4 h-4 rounded-full border border-black/20"
                          style={{ backgroundColor: p.hex }}
                        />
                        <span className="font-mono text-[11px] text-neutral-700">{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features Bullet List */}
                <div className="space-y-1.5 text-xs text-neutral-600 font-light">
                  {rug.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-amber-700 font-bold">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6 border-t border-neutral-300">
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuote(rug);
                  }}
                  className="w-full bg-[#161616] hover:bg-black text-[#FAF8F5] text-xs tracking-mega-wide uppercase py-4 px-6 font-medium transition-all text-center shadow-lg"
                >
                  REQUEST OFFICIAL ARCHITECTURAL QUOTE
                </button>

                <button
                  onClick={handleDownloadDwg}
                  className="w-full border border-neutral-400 hover:border-black text-black text-xs tracking-mega-wide uppercase py-3.5 px-6 transition-all flex items-center justify-center gap-2"
                >
                  {dwgDownloaded ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-700 font-medium">SPEC SHEET DOWNLOADED</span>
                    </>
                  ) : (
                    <>
                      <FileCode size={14} />
                      <span>DOWNLOAD 2D/3D DWG & SPEC (CAD)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
