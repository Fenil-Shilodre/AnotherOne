import React, { useState } from 'react';
import { ArrowUpRight, Check, Send } from 'lucide-react';

export default function Footer({ onOpenGuidelines }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#141414] text-[#FAF8F5] pt-24 pb-12 border-t border-neutral-800">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Brand Statement & Newsletter Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-neutral-800">
          <div className="lg:col-span-6 space-y-6">
            <img
              src="/assets/brand-logo-singleline-white.png"
              alt="ANOTHER ONE"
              className="h-5 sm:h-6 w-auto object-contain opacity-95"
            />
            <p className="font-subeditorial italic text-xl sm:text-2xl text-neutral-300 max-w-lg font-light leading-relaxed">
              "We make rugs that breathe with the architecture of your life. Hand-knotted by Tibetan artisans, curated by House of Knots."
            </p>
            <div className="pt-2 text-xs text-neutral-400 font-mono">
              HOUSE OF KNOTS • SURAT
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end space-y-4">
            <span className="text-[11px] tracking-mega-wide uppercase text-amber-300 font-medium">
              STAY INFORMED WITH OUR PRIVATE JOURNAL
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-md font-light">
              Receive private previews of new collection drops, invitations to Milan Design Week salon dinners, and architectural tear sheets.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-grow bg-neutral-900 border border-neutral-700 px-4 py-3 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="bg-[#FAF8F5] text-black px-6 py-3 text-xs tracking-mega-wide uppercase font-medium hover:bg-amber-300 transition-colors"
              >
                {subscribed ? <Check size={14} /> : 'SUBSCRIBE'}
              </button>
            </form>
            {subscribed && (
              <span className="text-xs text-emerald-400">
                You have been added to our private mailing registry.
              </span>
            )}
          </div>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16 text-xs text-neutral-400 font-light border-b border-neutral-800">
          {/* Col 1: Sitemap */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-mega-wide uppercase text-neutral-200 font-medium block mb-2">
              SITEMAP
            </span>
            <ul className="space-y-2">
              <li><a href="#showcase" className="hover:text-white transition-colors">The 6 Rugs</a></li>
              <li><a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a></li>
              <li><a href="#craft" className="hover:text-white transition-colors">Craftsmanship</a></li>
              <li><a href="#film" className="hover:text-white transition-colors">Documentary</a></li>
              <li><a href="#stories" className="hover:text-white transition-colors">Stories & Journal</a></li>
              <li>
                <button
                  onClick={onOpenGuidelines}
                  className="hover:text-white transition-colors text-amber-300 font-normal flex items-center gap-1 text-left"
                >
                  Brand Guidelines <ArrowUpRight size={10} />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: B2B & Contract */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-mega-wide uppercase text-neutral-200 font-medium block mb-2">
              B2B & ARCHITECTURE
            </span>
            <ul className="space-y-2">
              <li><a href="#showcase" className="hover:text-white transition-colors">Bespoke Commissions</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Custom Dimensions</a></li>
              <li><a href="#craft" className="hover:text-white transition-colors">Material Specifications</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Stocklist Availability</a></li>
              <li><a href="#stories" className="hover:text-white transition-colors">Studio Journal</a></li>
            </ul>
          </div>

          {/* Col 3: Get in touch */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-mega-wide uppercase text-neutral-200 font-medium block mb-2">
              GET IN TOUCH
            </span>
            <ul className="space-y-2">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Instagram <ArrowUpRight size={10} /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight size={10} /></a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Pinterest <ArrowUpRight size={10} /></a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Office</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Milan Desk</a></li>
            </ul>
          </div>

          {/* Col 4: Care & Legal */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-mega-wide uppercase text-neutral-200 font-medium block mb-2">
              CARE & LEGAL
            </span>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Rug Maintenance Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Freight & Duties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Commission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Authenticity Guarantee</a></li>
            </ul>
          </div>

          {/* Col 5: Location */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-3">
            <span className="text-[10px] tracking-mega-wide uppercase text-neutral-200 font-medium block mb-2">
              HOUSE OF KNOTS
            </span>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              932, Avadh Kontina,<br />
              VIP Road, Surat,<br />
              Gujarat, India
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed pt-2 font-light">
              Himalayan Weaving Atelier<br />
              Nepal
            </p>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <div>
            © 2026 HOUSE OF KNOTS — ANOTHER ONE COLLECTION. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 uppercase tracking-wider text-[10px]">
            <span>HOUSE OF KNOTS</span>
            <span>•</span>
            <span>HAND-KNOTTED IN NEPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
