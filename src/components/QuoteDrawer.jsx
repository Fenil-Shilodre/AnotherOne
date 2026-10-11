import React, { useState } from 'react';
import { X, Check, FileDown, Send, Sparkles, Building2, User, Mail, Globe, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RUGS } from '../data/collectionData';

export default function QuoteDrawer({ isOpen, onClose, preselectedRug }) {
  const [selectedRugId, setSelectedRugId] = useState(preselectedRug?.id || RUGS[0].id);
  const [dimensions, setDimensions] = useState('Standard Size');
  const [customWidth, setCustomWidth] = useState('240');
  const [customLength, setCustomLength] = useState('300');
  const [materialOption, setMaterialOption] = useState('Standard Himalayan Wool & Silk');
  const [clientType, setClientType] = useState('Interior Architect / Studio');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    city: '',
    country: '',
    projectNotes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');

  // Sync preselected rug if it changes
  React.useEffect(() => {
    if (preselectedRug) {
      setSelectedRugId(preselectedRug.id);
    }
  }, [preselectedRug]);

  const currentRug = RUGS.find((r) => r.id === selectedRugId) || RUGS[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = `HOK-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteRef(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex justify-end">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="bg-[#FAF8F5] w-full max-w-2xl h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-neutral-300"
        >
          {/* Top Header */}
          <div className="sticky top-0 z-10 bg-[#FAF8F5]/95 backdrop-blur-md p-6 sm:p-8 border-b border-neutral-300 flex items-center justify-between">
            <div>
              <span className="text-[10px] tracking-mega-wide uppercase text-neutral-400 block mb-1">
                B2B & BESPOKE INQUIRY DESK
              </span>
              <h3 className="text-2xl sm:text-3xl text-[#161616] font-normal tracking-tight">
                Request Architectural Quote
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-200 transition-colors text-black"
            >
              <X size={22} />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 flex-grow">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Rug Selection Dropdown */}
                <div>
                  <label className="text-[11px] uppercase tracking-mega-wide text-neutral-500 block mb-2 font-medium">
                    Select Collection Piece
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {RUGS.map((rug) => (
                      <button
                        type="button"
                        key={rug.id}
                        onClick={() => setSelectedRugId(rug.id)}
                        className={`p-2.5 text-left border flex items-center gap-2.5 transition-all ${
                          selectedRugId === rug.id
                            ? 'border-black bg-white ring-2 ring-black/10'
                            : 'border-neutral-200 hover:border-neutral-400 bg-neutral-100/50'
                        }`}
                      >
                        <img
                          src={rug.image}
                          alt={rug.name}
                          className="w-8 h-8 object-contain"
                        />
                        <div className="overflow-hidden">
                          <span className="block text-xs font-semibold text-black truncate">
                            {rug.name}
                          </span>
                          <span className="block text-[9px] text-neutral-400">
                            {rug.number} / 06
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizing & Dimensions */}
                <div className="border-t border-neutral-200 pt-5">
                  <label className="text-[11px] uppercase tracking-mega-wide text-neutral-500 block mb-2 font-medium">
                    Dimensions Specification
                  </label>
                  <div className="flex gap-4 mb-3">
                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input
                        type="radio"
                        name="dimensionType"
                        checked={dimensions === 'Standard Size'}
                        onChange={() => setDimensions('Standard Size')}
                        className="accent-black"
                      />
                      <span>Standard ({currentRug.dimensions})</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input
                        type="radio"
                        name="dimensionType"
                        checked={dimensions === 'Custom Bespoke'}
                        onChange={() => setDimensions('Custom Bespoke')}
                        className="accent-black"
                      />
                      <span>Custom Bespoke Sizing</span>
                    </label>
                  </div>

                  {dimensions === 'Custom Bespoke' && (
                    <div className="grid grid-cols-2 gap-4 p-4 bg-neutral-100 border border-neutral-300">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                          Width (cm)
                        </span>
                        <input
                          type="number"
                          value={customWidth}
                          onChange={(e) => setCustomWidth(e.target.value)}
                          className="w-full p-2 border border-neutral-300 text-sm bg-white"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                          Length (cm)
                        </span>
                        <input
                          type="number"
                          value={customLength}
                          onChange={(e) => setCustomLength(e.target.value)}
                          className="w-full p-2 border border-neutral-300 text-sm bg-white"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Material Blend Preference */}
                <div className="border-t border-neutral-200 pt-5">
                  <label className="text-[11px] uppercase tracking-mega-wide text-neutral-500 block mb-2 font-medium">
                    Material Specification
                  </label>
                  <select
                    value={materialOption}
                    onChange={(e) => setMaterialOption(e.target.value)}
                    className="w-full p-3 border border-neutral-300 text-xs bg-white tracking-wide"
                  >
                    <option value="Standard Himalayan Wool & Silk">
                      Standard Atelier Blend ({currentRug.materials})
                    </option>
                    <option value="100% Pure Tibetan Highland Wool">
                      100% Pure Tibetan Highland Wool (Ultra-matte, high foot-traffic)
                    </option>
                    <option value="60% Pure Silk & 40% Wool">
                      Elevated Silk Ratio (High shimmer, formal salons)
                    </option>
                  </select>
                </div>

                {/* Specifier Contact Information */}
                <div className="border-t border-neutral-200 pt-5 space-y-4">
                  <label className="text-[11px] uppercase tracking-mega-wide text-neutral-500 block font-medium">
                    Specifier Information
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                        Full Name *
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Rossi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2.5 border border-neutral-300 text-xs bg-white"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                        Professional Email *
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="e.g. studio@architecture.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 border border-neutral-300 text-xs bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                        Design Practice / Studio
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. Studio Lissoni"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full p-2.5 border border-neutral-300 text-xs bg-white"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                        Destination City & Country *
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Milan, Italy or New York, USA"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full p-2.5 border border-neutral-300 text-xs bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                      Project Notes / Timeline
                    </span>
                    <textarea
                      rows={2}
                      placeholder="Include floor finish, project move-in date, or special color adjustments..."
                      value={formData.projectNotes}
                      onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                      className="w-full p-2.5 border border-neutral-300 text-xs bg-white resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#161616] hover:bg-black text-[#FAF8F5] py-4 text-xs tracking-mega-wide uppercase font-medium transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>TRANSMIT ARCHITECTURAL QUOTE INQUIRY</span>
                  </button>
                  <p className="text-[10px] text-neutral-400 text-center mt-2 tracking-wider">
                    Our Milan contract team replies within 24 business hours with formal CAD specs & freight calculations.
                  </p>
                </div>
              </form>
            ) : (
              /* Success / Transmitted Confirmation Screen */
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
                  <Check size={32} />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-mega-wide text-neutral-400">
                    INQUIRY TRANSMITTED SUCCESSFULLY
                  </span>
                  <h3 className="text-2xl sm:text-3xl text-[#161616] font-normal tracking-tight">
                    Thank You, {formData.name || 'Valued Architect'}
                  </h3>
                  <p className="font-mono text-sm font-semibold text-neutral-800">
                    REFERENCE DOSSIER: #{quoteRef}
                  </p>
                </div>

                <div className="p-6 bg-white border border-neutral-300 text-left space-y-3 max-w-md mx-auto text-xs">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-neutral-500">Selected Piece:</span>
                    <span className="font-semibold text-black">{currentRug.name}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-neutral-500">Dimensions:</span>
                    <span className="text-black">{dimensions === 'Standard Size' ? currentRug.dimensions : `${customWidth} × ${customLength} cm`}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-neutral-500">Delivery Destination:</span>
                    <span className="text-black">{formData.city || 'Standard European Freight'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Assigned Atelier Desk:</span>
                    <span className="text-amber-800 font-medium">Milan Project Division</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                  A dedicated contract specialist has been assigned to your dossier. You will receive official pricing, CAD drawings, and yarn sample swatches via email at{' '}
                  <span className="font-semibold text-black">{formData.email || 'your address'}</span>.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleReset}
                    className="bg-[#161616] text-[#FAF8F5] text-xs uppercase tracking-mega-wide py-3 px-6 hover:bg-black transition-colors"
                  >
                    RETURN TO COLLECTION
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
