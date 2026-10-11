import React, { useState } from 'react';
import { Building, Compass, FileCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CONTRACT_CLIENTS } from '../data/collectionData';

export default function ContractSection({ onOpenQuote }) {
  const [dwgEmail, setDwgEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDwgRequest = (e) => {
    e.preventDefault();
    if (dwgEmail) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
      setDwgEmail('');
    }
  };

  return (
    <section id="contract" className="py-24 md:py-32 bg-[#F7F5F0] border-b border-neutral-300 relative">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">

        {/* Contract Division Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#EFECE4] border border-neutral-300 p-8 sm:p-14 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-mega-wide text-amber-800 font-semibold flex items-center gap-2">
              <Building size={14} /> HOUSE OF KNOTS PROJECT
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#161616] leading-tight">
              Curated Flooring Solutions For Global Contract & Hospitality Projects
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed font-light">
              Are you developing a luxury hotel, flagship boutique, corporate headquarters, or private superyacht? Our contract division collaborates with architects and interior design practices worldwide to adapt the ANOTHER ONE designs into custom shapes, certified fire-retardant specs, and monumental wall-to-wall installations.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="bg-[#161616] hover:bg-black text-[#FAF8F5] text-xs tracking-mega-wide uppercase px-7 py-4 font-medium transition-all shadow-md"
              >
                START A CONTRACT SPECIFICATION
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF8F5] p-8 border border-neutral-300 space-y-6">
            <div>
              <span className="text-[10px] tracking-mega-wide uppercase text-neutral-500 block mb-1">
                INSTANT ARCHITECT RESOURCE
              </span>
              <h3 className="font-editorial text-2xl text-black">
                Download Full 2D/3D DWG Library
              </h3>
              <p className="text-xs text-neutral-600 mt-2 font-light">
                Receive vector CAD blueprints, high-resolution rendering textures, and BIM objects for all 6 ANOTHER ONE rug editions.
              </p>
            </div>

            <form onSubmit={handleDwgRequest} className="space-y-3">
              <input
                type="email"
                required
                placeholder="architect@firm.com"
                value={dwgEmail}
                onChange={(e) => setDwgEmail(e.target.value)}
                className="w-full p-3 border border-neutral-300 text-xs bg-white focus:outline-black"
              />
              <button
                type="submit"
                className="w-full bg-neutral-800 hover:bg-black text-white text-[11px] tracking-mega-wide uppercase py-3 font-medium transition-all"
              >
                ACCESS CAD ASSET PACKAGE
              </button>
            </form>

            {downloadSuccess && (
              <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 p-3 border border-emerald-200">
                <CheckCircle2 size={16} />
                <span>DWG package transmitted to your email.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
