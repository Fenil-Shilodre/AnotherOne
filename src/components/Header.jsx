import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ onOpenQuote, onSelectRug, onOpenGuidelines }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Clean, Quiet-Luxury Header */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F5F0]/90 backdrop-blur-md py-4 border-b border-neutral-200/60 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Minimal Menu Trigger */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex items-center gap-2.5 text-[11px] tracking-[0.25em] uppercase font-light transition-all ${
                isScrolled || menuOpen
                  ? 'text-[#161616] hover:opacity-60'
                  : 'text-[#FAF8F5] hover:text-white drop-shadow-sm'
              }`}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={15} /> : <Menu size={15} />}
              <span className="hidden sm:inline font-sans">{menuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>

            <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase font-light">
              <a
                href="#showcase"
                className={`transition-colors ${
                  isScrolled ? 'text-neutral-700 hover:text-black' : 'text-neutral-300 hover:text-white'
                }`}
              >
                Collection
              </a>
              <a
                href="#manifesto"
                className={`transition-colors ${
                  isScrolled ? 'text-neutral-700 hover:text-black' : 'text-neutral-300 hover:text-white'
                }`}
              >
                About
              </a>
              <a
                href="#craft"
                className={`transition-colors ${
                  isScrolled ? 'text-neutral-700 hover:text-black' : 'text-neutral-300 hover:text-white'
                }`}
              >
                Craft
              </a>
              <button
                onClick={onOpenGuidelines}
                className={`transition-colors uppercase ${
                  isScrolled ? 'text-neutral-700 hover:text-black' : 'text-neutral-300 hover:text-white'
                }`}
              >
                Guidelines
              </button>
            </nav>
          </div>

          {/* Center: Clean Logo (Appears when scrolled or subtle at top) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <a href="#" className="flex flex-col items-center">
              <img
                src="/assets/brand-logo-singleline-black.png"
                alt="ANOTHER ONE"
                className={`h-3.5 sm:h-4 w-auto object-contain transition-all duration-500 ${
                  isScrolled
                    ? 'opacity-100'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              />
            </a>
          </div>

          {/* Right: Inquire / Quote Button */}
          <div className="flex items-center gap-6 text-xs tracking-mega-wide uppercase font-light">
            <button
              onClick={onOpenQuote}
              className={`text-[11px] tracking-[0.25em] uppercase font-light py-2 px-4 transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#161616] text-[#FAF8F5] hover:bg-black'
                  : 'border border-white/40 text-white hover:bg-white hover:text-black backdrop-blur-sm'
              }`}
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Luxury Index Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#FAF8F5]/98 backdrop-blur-2xl pt-28 px-6 md:px-14 pb-12 overflow-y-auto"
          >
            <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pt-8">
              {/* Left Column: Direct Navigation */}
              <div className="md:col-span-7 space-y-6">
                <span className="text-[10px] tracking-mega-wide uppercase text-neutral-400 block mb-6">
                  INDEX
                </span>
                <div className="space-y-4">
                  {[
                    { label: 'The 6 Rugs', href: '#showcase', count: '06 Editions' },
                    { label: 'Collection Manifesto', href: '#manifesto', count: 'About' },
                    { label: 'Kathmandu Craftsmanship', href: '#craft', count: 'Artisanal' },
                    { label: 'The Film', href: '#film', count: 'Documentary' },
                    { label: 'Related Stories', href: '#stories', count: 'Journal' },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline justify-between border-b border-neutral-200/80 pb-4 hover:border-black transition-colors"
                    >
                      <span className="text-3xl sm:text-4xl text-[#161616] font-normal tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                        {item.label}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                        {item.count}
                      </span>
                    </a>
                  ))}

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenGuidelines?.();
                    }}
                    className="group flex items-baseline justify-between border-b border-neutral-200/80 pb-4 hover:border-black transition-colors text-left w-full"
                  >
                    <span className="text-3xl sm:text-4xl text-[#161616] font-normal tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                      Brand Guidelines
                    </span>
                    <span className="text-xs uppercase tracking-widest text-amber-700 font-medium group-hover:text-black transition-colors">
                      Identity v1.0
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column: Collection Pieces Jump */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-8 pl-0 md:pl-10 md:border-l border-neutral-200">
                <div>
                  <span className="text-[10px] tracking-mega-wide uppercase text-neutral-400 block mb-4">
                    THE WORKS
                  </span>
                  <div className="space-y-2 text-xs tracking-wider uppercase font-medium">
                    {[
                      { name: '01. ELSEWISE', id: 'elsewise' },
                      { name: '02. MANYFOLD', id: 'manyfold' },
                      { name: '03. CARRYOVER', id: 'carryover' },
                      { name: '04. ODD COMPANY', id: 'odd-company' },
                      { name: '05. SIDELONG', id: 'sidelong' },
                      { name: '06. SIDE EFFECT', id: 'side-effect' },
                    ].map((rug) => (
                      <button
                        key={rug.id}
                        onClick={() => {
                          setMenuOpen(false);
                          if (onSelectRug) onSelectRug(rug.id);
                        }}
                        className="w-full text-left py-2.5 px-3 rounded hover:bg-neutral-200/60 transition-colors flex items-center justify-between text-neutral-800 hover:text-black"
                      >
                        <span>{rug.name}</span>
                        <ArrowUpRight size={13} className="text-neutral-400" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200 space-y-2 text-xs text-neutral-500 font-light">
                  <p className="font-medium uppercase tracking-widest text-neutral-800">
                    HOUSE OF KNOTS
                  </p>
                  <p>932, Avadh Kontina, VIP Road, Surat, Gujarat</p>
                  <p>Inquiries: contact@houseofknots.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
