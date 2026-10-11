import React, { useState } from 'react';
import {
  X, Check, Copy, ExternalLink, Sparkles, BookOpen, Layers, Maximize2,
  ShieldCheck, AlertCircle, Heart, MessageCircle, Instagram, Sliders,
  Palette, Eye, Download, Compass, RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const COLOR_PALETTE = [
  {
    name: 'Espresso Noir',
    hex: '#161616',
    rgb: '22, 22, 22',
    cmyk: '65, 60, 60, 90',
    pantone: 'Black 6 C',
    role: 'Primary Logotype, Deep Text, Matte Foil Stamping',
    bg: 'bg-[#161616]',
    isDark: true,
    contrastRatio: '16.8:1 (AAA High Contrast)',
    recommendedLogo: 'white',
  },
  {
    name: 'Pure Bone Ecru',
    hex: '#FAF8F5',
    rgb: '250, 248, 245',
    cmyk: '1, 2, 3, 0',
    pantone: 'Warm Gray 1 C',
    role: 'Primary Paper Stock, Natural Canvas, Web Background',
    bg: 'bg-[#FAF8F5]',
    isDark: false,
    contrastRatio: '15.9:1 (AAA High Contrast)',
    recommendedLogo: 'black',
    border: true,
  },
  {
    name: 'Travertine Sand',
    hex: '#F3F0E9',
    rgb: '243, 240, 233',
    cmyk: '4, 4, 7, 0',
    pantone: '7527 C',
    role: 'Card Surfaces, Rigid Presentation Boxes, Sample Folders',
    bg: 'bg-[#F3F0E9]',
    isDark: false,
    contrastRatio: '14.2:1 (AAA High Contrast)',
    recommendedLogo: 'black',
    border: true,
  },
  {
    name: 'Warm Stone',
    hex: '#E1DCD0',
    rgb: '225, 220, 208',
    cmyk: '10, 10, 18, 0',
    pantone: '7528 C',
    role: 'Architectural Dividers, Packaging Tissue, Embossed Borders',
    bg: 'bg-[#E1DCD0]',
    isDark: false,
    contrastRatio: '11.8:1 (AAA High Contrast)',
    recommendedLogo: 'black',
  },
  {
    name: 'Terracotta Earth',
    hex: '#A65637',
    rgb: '166, 86, 55',
    cmyk: '20, 70, 80, 15',
    pantone: '7593 C',
    role: 'Wax Seal Pigment, Botanical Wool Accent, Architectural Terracotta',
    bg: 'bg-[#A65637]',
    isDark: true,
    contrastRatio: '5.8:1 (AA Architectural)',
    recommendedLogo: 'white',
  },
  {
    name: 'Sage Lichen',
    hex: '#5E6B58',
    rgb: '94, 107, 88',
    cmyk: '55, 35, 60, 20',
    pantone: '5625 C',
    role: 'Herringbone Ribbon, Mineral Wool Pigment, Olive Accent',
    bg: 'bg-[#5E6B58]',
    isDark: true,
    contrastRatio: '5.2:1 (AA Architectural)',
    recommendedLogo: 'white',
  },
  {
    name: 'Ochre Gold',
    hex: '#C88A2E',
    rgb: '200, 138, 46',
    cmyk: '15, 45, 95, 10',
    pantone: '1245 C',
    role: 'Brass Hardware Eyelets, Mulberry Silk Highlights, Warm Amber',
    bg: 'bg-[#C88A2E]',
    isDark: false,
    contrastRatio: '7.1:1 (AAA Clean Read)',
    recommendedLogo: 'black',
  },
  {
    name: 'Nocturne Slate',
    hex: '#202B38',
    rgb: '32, 43, 56',
    cmyk: '80, 70, 50, 50',
    pantone: '533 C',
    role: 'Architectural Shadow Wool, Deep Midnight Accent',
    bg: 'bg-[#202B38]',
    isDark: true,
    contrastRatio: '13.4:1 (AAA High Contrast)',
    recommendedLogo: 'white',
  },
];

const PACKAGING_MOCKUPS = [
  {
    title: 'Luxury Shopping Bags & Tote',
    subtitle: 'Heavyweight Matte Ecru Paper & 14oz Organic Canvas',
    image: '/assets/guidelines/bag-mockup.jpg',
    category: 'Packaging',
    description: 'Centered blind-debossed single-line wordmark in Cormorant Garamond with herringbone cotton ribbon handles, photographed on travertine stone in an architectural studio.',
  },
  {
    title: 'Artisan Hangtags & Woven Label',
    subtitle: '600gsm Raw Cotton Card & Antique Brass Eyelet',
    image: '/assets/guidelines/tag-mockup.jpg',
    category: 'Packaging',
    description: 'Deep letterpress debossing featuring "ANOTHER ONE" and "HOUSE OF KNOTS | HOUSE ORIGINALS", antique brass eyelet with hand-twisted charcoal wool cord, paired with a micro-woven damask corner hem label on hand-knotted Himalayan wool.',
  },
  {
    title: 'Bespoke Unboxing Presentation Box',
    subtitle: 'Rigid Linen Clamshell with Grosgrain Pull & Dust Bag',
    image: '/assets/guidelines/box-mockup.jpg',
    category: 'Packaging',
    description: 'Matte black hot foil stamped single-line wordmark on coarse natural linen paper box, accompanied by a soft brushed cotton dust bag and wax-sealed envelope.',
  },
  {
    title: 'Architectural Stationery Suite',
    subtitle: '120gsm Letterhead, 700gsm Edge-Painted Cards & Spec Sheets',
    image: '/assets/guidelines/stationery-mockup.jpg',
    category: 'Stationery',
    description: 'Complete collateral suite with blind-embossed headers, brass screw-post sample ring with dyed Tibetan yarn pom-poms, and wax-sealed envelopes.',
  },
];

const MOODBOARD_RUGS = [
  {
    title: 'Elsewise Rug in Milanese Penthouse',
    subtitle: 'Architectural Monolith & Travertine Horizon',
    image: '/assets/mockups/elsewise-mockup.jpg',
    category: 'Interiors',
  },
  {
    title: 'Manyfold Rug in Sunlit Courtyard Lounge',
    subtitle: 'Highland Botanical Contours & Organic Curves',
    image: '/assets/mockups/manyfold-mockup.jpg',
    category: 'Interiors',
  },
  {
    title: 'Carryover Rug in Brutalist Gallery',
    subtitle: 'Ochre Silk & Mineral Terracotta Weave',
    image: '/assets/mockups/carryover-mockup.jpg',
    category: 'Interiors',
  },
  {
    title: 'Odd Company Rug in Concrete Sanctuary',
    subtitle: 'Asymmetric Modernist Grid & Low Pile Relief',
    image: '/assets/mockups/odd-company-mockup.jpg',
    category: 'Interiors',
  },
  {
    title: 'Sidelong Rug in Japanese Minimalist Villa',
    subtitle: 'Dynamic Horizontal Geometries & Sage Wool',
    image: '/assets/mockups/sidelong-mockup.jpg',
    category: 'Interiors',
  },
  {
    title: 'Side Effect Rug in Architectural Pavilion',
    subtitle: 'Interlocking Oval Geometries & Deep Charcoal',
    image: '/assets/mockups/side-effect-mockup.jpg',
    category: 'Interiors',
  },
];

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: '/assets/guidelines/instagram/insta-1.jpg',
    headline: 'SPACES THAT FEEL LIKE YOU',
    caption: 'Architecture is not merely where we dwell, but the ground upon which our daily thoughts unfold. Introducing the ANOTHER ONE circular edition in mineral sage and nocturnal charcoal.',
    likes: '1,420',
    comments: '48',
    date: '2 DAYS AGO',
    tags: '#HouseOfKnots #AnotherOneCollection #ArchitecturalRugs #QuietLuxury #HandKnotted',
  },
  {
    id: 2,
    image: '/assets/guidelines/instagram/insta-2.jpg',
    headline: 'ART UNDER YOUR FEET',
    caption: 'Bridging gallery artwork and daily functional comfort. The Carryover Rug in rich ochre and deep indigo mineral dyes, photographed in a Milanese residence.',
    likes: '2,650',
    comments: '94',
    date: '3 DAYS AGO',
    tags: '#LivingWithArt #ContemporaryInteriors #HouseOfKnots #AnotherOne',
  },
  {
    id: 3,
    image: '/assets/guidelines/instagram/insta-3.jpg',
    headline: 'TEXTURES THAT LIVE PLAY BELONG',
    caption: '155,000 Tibetan knots per square meter. Hand-sheared relief lines carved by generational craftsmen using raw unbleached Himalayan mountain wool and pure hand-spun mulberry silk.',
    likes: '1,840',
    comments: '63',
    date: '4 DAYS AGO',
    tags: '#TibetanWeave #Craftsmanship #HimalayanWool #TextileArt #ArtisanalDetails',
  },
  {
    id: 4,
    image: '/assets/guidelines/instagram/insta-4.jpg',
    headline: 'RUGS FOR ANOTHER KIND OF HOME',
    caption: 'Warm terracotta arches, Mediterranean morning light, and sculpted Himalayan wool underfoot. Designed for spaces that breathe with intention.',
    likes: '2,150',
    comments: '79',
    date: '5 DAYS AGO',
    tags: '#InteriorArchitecture #WarmMinimalism #TactileLiving #SlowDesign',
  },
  {
    id: 5,
    image: '/assets/guidelines/instagram/insta-5.jpg',
    headline: 'ANOTHER ONE • A NEW RUG COLLECTION',
    caption: 'ANOTHER ONE. Curated by House of Knots | House Originals. A collection of woven works of art hand-knotted in Nepal by master Tibetan artisans. Coming soon to private architectural patrons.',
    likes: '3,890',
    comments: '184',
    date: '6 DAYS AGO',
    tags: '#HouseOriginals #AnotherOne #HouseOfKnots #MilanDesignWeek #BespokeRugs',
  },
  {
    id: 6,
    image: '/assets/guidelines/instagram/insta-6.jpg',
    headline: 'THOUGHTFULLY DESIGNED UNIQUELY YOURS',
    caption: 'Every curve drawn by hand in our Surat studio, every thread dyed in our Himalayan ateliers. Bespoke co-creation with leading architects and interior studios worldwide.',
    likes: '1,960',
    comments: '56',
    date: '1 WEEK AGO',
    tags: '#DesignProcess #BespokeCommission #ArchitecturalStudio #HouseOfKnots',
  },
  {
    id: 7,
    image: '/assets/guidelines/instagram/insta-7.jpg',
    headline: 'TIMELESS RUGS FOR EVERYDAY LIVING',
    caption: 'Pure high-altitude Tibetan wool rolled in organic vegetable pigments: ochre gold, brick terracotta, and indigo midnight. Tactile materiality that endures across generations.',
    likes: '2,480',
    comments: '88',
    date: '1 WEEK AGO',
    tags: '#NaturalDyes #WoolTextiles #MaterialPurity #SustainableLuxury',
  },
  {
    id: 8,
    image: '/assets/guidelines/instagram/insta-8.jpg',
    headline: 'ANOTHER KIND OF PERSPECTIVE',
    caption: 'Slow mornings surrounded by sculptural geometries and unhurried textures. Curated by House of Knots. Photographed from above on natural bouclé seating.',
    likes: '2,730',
    comments: '95',
    date: '2 WEEKS AGO',
    tags: '#QuietLuxuryPerspective #ModernLiving #RugDesign #CalmLuxury',
  },
  {
    id: 9,
    image: '/assets/guidelines/instagram/insta-9.jpg',
    headline: 'WHERE DESIGN FEELS LIKE HOME',
    caption: 'Sun-drenched limestone, terracotta portals, and timeless hand-knotted textiles for contemporary living. House of Knots • Surat.',
    likes: '2,290',
    comments: '71',
    date: '2 WEEKS AGO',
    tags: '#TimelessSpaces #MediterraneanVibe #ArchitecturalHome #HouseOfKnots',
  },
];

export default function BrandGuidelinesModal({ isOpen, onClose }) {
  const [copiedHex, setCopiedHex] = useState(null);
  const [selectedColor, setSelectedColor] = useState(COLOR_PALETTE[0]);
  const [substrateMode, setSubstrateMode] = useState('wool'); // 'solid' | 'wool' | 'linen'
  const [logoTreatment, setLogoTreatment] = useState('auto'); // 'auto' | 'gold' | 'deboss' | 'black' | 'white'
  const [activeMoodboardTab, setActiveMoodboardTab] = useState('all'); // 'all' | 'packaging' | 'interiors'
  const [activeInstaPost, setActiveInstaPost] = useState(null);

  if (!isOpen) return null;

  const copyToClipboard = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  // Determine logo appearance based on selected substrate color and treatment
  const resolveLogoVisual = () => {
    if (logoTreatment === 'white') {
      return {
        src: '/assets/brand-logo-singleline-white.png',
        className: 'filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]',
        label: 'Pure Bone White Invert',
      };
    }
    if (logoTreatment === 'black') {
      return {
        src: '/assets/brand-logo-singleline-black.png',
        className: '',
        label: 'Espresso Noir Imprint',
      };
    }
    if (logoTreatment === 'gold') {
      return {
        src: '/assets/brand-logo-singleline-white.png',
        className: 'filter brightness-90 sepia-[1] hue-rotate-[10deg] saturate-[300%] drop-shadow-[0_2px_12px_rgba(200,138,46,0.5)]',
        label: 'Satin Brass / Gold Hot Foil',
      };
    }
    if (logoTreatment === 'deboss') {
      return {
        src: selectedColor.isDark
          ? '/assets/brand-logo-singleline-white.png'
          : '/assets/brand-logo-singleline-black.png',
        className: 'opacity-40 filter drop-shadow-[-1px_-1px_1px_rgba(255,255,255,0.7)] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.6)]',
        label: 'Blind Letterpress Deboss',
      };
    }
    // Auto mode
    return selectedColor.isDark
      ? {
          src: '/assets/brand-logo-singleline-white.png',
          className: 'filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]',
          label: 'Auto: Bone White (Optimal Contrast)',
        }
      : {
          src: '/assets/brand-logo-singleline-black.png',
          className: '',
          label: 'Auto: Espresso Noir (Optimal Contrast)',
        };
  };

  const currentLogo = resolveLogoVisual();

  // Combine moodboard items
  const allMoodboardItems = [
    ...PACKAGING_MOCKUPS.map((m) => ({ ...m, type: 'packaging' })),
    ...MOODBOARD_RUGS.map((r) => ({ ...r, type: 'interiors', description: r.subtitle })),
  ];

  const filteredMoodboard = allMoodboardItems.filter((item) => {
    if (activeMoodboardTab === 'all') return true;
    if (activeMoodboardTab === 'packaging') return item.type === 'packaging';
    if (activeMoodboardTab === 'interiors') return item.type === 'interiors';
    return true;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="bg-[#FAF8F5] text-[#161616] w-full max-w-7xl max-h-[94vh] overflow-y-auto shadow-2xl border border-neutral-300 relative flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-5 border-b border-neutral-300 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-[10px] tracking-mega-wide uppercase text-neutral-400 font-medium">
                HOUSE OF KNOTS • BRAND IDENTITY STANDARDS
              </span>
              <span className="hidden sm:inline text-xs font-medium text-black">
                ANOTHER ONE Visual Guidelines & Interactive Studio v1.2
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-200 transition-colors text-black"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-10 space-y-20">
            {/* HERO BANNER: Tactile Carpet Texture Background */}
            <div className="relative overflow-hidden border border-neutral-300 bg-[#161616] text-[#FAF8F5] p-8 sm:p-16 flex flex-col items-center justify-center text-center shadow-lg">
              {/* Rich Wool Carpet Background Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay filter blur-[1px]"
                style={{ backgroundImage: "url('/assets/guidelines/instagram/insta-3.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

              <div className="relative z-10 max-w-3xl space-y-4">
                <span className="text-[11px] tracking-mega-wide uppercase text-amber-300 font-mono">
                  ARCHITECTURAL IDENTITY & CRAFT MANUAL
                </span>
                <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
                  The Anatomy of Quiet Luxury
                </h1>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
                  A comprehensive guide to the typographical geometry, material substrates, tactile packaging, and social aesthetic of the ANOTHER ONE collection by House of Knots.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                  <span>Font: Cormorant Garamond</span>
                  <span>•</span>
                  <span>Rule: Strict Single Line</span>
                  <span>•</span>
                  <span>Origin: Surat</span>
                </div>
              </div>
            </div>

            {/* SECTION 01: MASTER LOGO & SINGLE LINE ARCHITECTURE */}
            <section className="space-y-6">
              <div className="border-b border-neutral-300 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[10px] tracking-mega-wide uppercase text-neutral-500 font-medium block">
                    SECTION 01
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
                    Master Wordmark & Construction
                  </h2>
                </div>
                <span className="text-xs font-mono text-neutral-500">
                  CRITICAL: STRICT SINGLE-LINE ONLY
                </span>
              </div>

              {/* Master Logo Preview Box with Subtle Grid */}
              <div className="p-8 sm:p-14 bg-white border border-neutral-300 flex flex-col items-center justify-center space-y-4 shadow-sm relative overflow-hidden">
                <div className="absolute top-4 left-4 text-[9px] uppercase tracking-wider text-neutral-400 font-mono">
                  CLEAR SPACE BOUNDARY (1X CAP HEIGHT)
                </div>
                <div className="border border-dashed border-neutral-300 p-8 sm:p-12 w-full max-w-3xl flex items-center justify-center bg-[#FAF8F5]/50">
                  <img
                    src="/assets/brand-logo-singleline-black.png"
                    alt="ANOTHER ONE Master Wordmark"
                    className="w-full max-w-xl h-auto object-contain"
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-light">
                  HOUSE OF KNOTS | HOUSE ORIGINALS
                </p>
              </div>

              {/* Strict Rules: Single Line vs Prohibited Stacking */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-neutral-100 border border-neutral-300 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-medium text-xs tracking-wider uppercase">
                    <ShieldCheck size={16} />
                    <span>Approved: Single-Line Horizontal Layout</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    The wordmark is typographically constructed in <strong className="font-semibold text-black">Cormorant Garamond</strong> (Regular Roman capitals for "ANOTHER", paired with Cormorant Garamond Italic for "ONE"). It must strictly appear as a single horizontal line, creating an expansive horizon line echoing architectural floor plans.
                  </p>
                </div>
                <div className="p-5 bg-red-50/70 border border-red-200 space-y-2">
                  <div className="flex items-center gap-2 text-red-700 font-medium text-xs tracking-wider uppercase">
                    <AlertCircle size={16} />
                    <span>Prohibited: Stacking / Double-Line Configuration</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    Never stack "ANOTHER" above "ONE" across two lines. Never stretch, slant artificially, add drop shadows, or place over low-contrast cluttered graphics.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 02: INTERACTIVE COLOR & LOGO SUBSTRATE TESTING STUDIO */}
            <section className="space-y-6">
              <div className="border-b border-neutral-300 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[10px] tracking-mega-wide uppercase text-neutral-500 font-medium block">
                    SECTION 02 • INTERACTIVE STUDIO
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
                    Logo & Substrate Color Testing Studio
                  </h2>
                </div>
                <span className="text-xs font-mono text-amber-800 bg-amber-50 px-2 py-1 border border-amber-200">
                  CLICK ANY COLOR TO TEST LIVE SUBSTRATE
                </span>
              </div>

              {/* LIVE INTERACTIVE PREVIEW CANVAS */}
              <div className="border border-neutral-300 bg-white p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-mega-wide text-neutral-400 block font-mono">
                      ACTIVE TEST SUBSTRATE:
                    </span>
                    <h3 className="text-xl font-medium tracking-tight text-neutral-900 flex items-center gap-2">
                      <span>{selectedColor.name}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-100 border text-neutral-600">
                        {selectedColor.hex}
                      </span>
                    </h3>
                  </div>

                  {/* Interactive Controls Bar */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Substrate Texture Mode */}
                    <div className="flex items-center gap-1 bg-neutral-100 p-1 border border-neutral-200 text-xs">
                      <span className="text-[10px] text-neutral-400 px-2 uppercase font-mono">Texture:</span>
                      <button
                        onClick={() => setSubstrateMode('wool')}
                        className={`px-2.5 py-1 text-[11px] font-medium transition-colors ${
                          substrateMode === 'wool' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                        }`}
                      >
                        Woven Wool
                      </button>
                      <button
                        onClick={() => setSubstrateMode('linen')}
                        className={`px-2.5 py-1 text-[11px] font-medium transition-colors ${
                          substrateMode === 'linen' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                        }`}
                      >
                        Raw Paper
                      </button>
                      <button
                        onClick={() => setSubstrateMode('solid')}
                        className={`px-2.5 py-1 text-[11px] font-medium transition-colors ${
                          substrateMode === 'solid' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                        }`}
                      >
                        Flat Solid
                      </button>
                    </div>

                    {/* Logo Treatment Mode */}
                    <div className="flex items-center gap-1 bg-neutral-100 p-1 border border-neutral-200 text-xs">
                      <span className="text-[10px] text-neutral-400 px-2 uppercase font-mono">Finish:</span>
                      <button
                        onClick={() => setLogoTreatment('auto')}
                        className={`px-2 py-1 text-[11px] font-medium transition-colors ${
                          logoTreatment === 'auto' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                        }`}
                        title="Automatic high contrast"
                      >
                        Auto
                      </button>
                      <button
                        onClick={() => setLogoTreatment('deboss')}
                        className={`px-2 py-1 text-[11px] font-medium transition-colors ${
                          logoTreatment === 'deboss' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                        }`}
                        title="Blind Letterpress Deboss"
                      >
                        Deboss
                      </button>
                      <button
                        onClick={() => setLogoTreatment('gold')}
                        className={`px-2 py-1 text-[11px] font-medium transition-colors ${
                          logoTreatment === 'gold' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                        }`}
                        title="Satin Brass Hot Foil"
                      >
                        Gold Foil
                      </button>
                    </div>
                  </div>
                </div>

                {/* DYNAMIC CANVAS AREA */}
                <div
                  className="relative w-full h-64 sm:h-80 flex flex-col items-center justify-center p-8 transition-colors duration-500 overflow-hidden border border-neutral-300 shadow-inner"
                  style={{ backgroundColor: selectedColor.hex }}
                >
                  {/* Optional Woven Wool Carpet Texture Overlay */}
                  {substrateMode === 'wool' && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-multiply pointer-events-none"
                      style={{ backgroundImage: "url('/assets/guidelines/instagram/insta-3.jpg')" }}
                    />
                  )}
                  {/* Optional Raw Paper / Linen Texture Overlay */}
                  {substrateMode === 'linen' && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"
                      style={{ backgroundImage: "url('/assets/guidelines/instagram/insta-7.jpg')" }}
                    />
                  )}

                  {/* Active Logo Artwork on Selected Substrate */}
                  <div className="relative z-10 flex flex-col items-center max-w-xl w-full px-4 text-center">
                    <img
                      src={currentLogo.src}
                      alt="ANOTHER ONE on Substrate"
                      className={`w-full max-w-md h-auto object-contain transition-all duration-300 ${currentLogo.className}`}
                    />
                    <p
                      className={`mt-4 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-light transition-colors ${
                        selectedColor.isDark ? 'text-neutral-200/90' : 'text-neutral-700'
                      }`}
                    >
                      HOUSE OF KNOTS | HOUSE ORIGINALS
                    </p>
                  </div>

                  {/* Watermark badge on bottom right of canvas */}
                  <div className="absolute bottom-3 right-3 z-10 text-[9px] font-mono uppercase px-2 py-1 rounded bg-black/60 text-white backdrop-blur-sm">
                    {currentLogo.label}
                  </div>
                </div>

                {/* Substrate Spec Data Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono pt-2">
                  <div className="p-3 bg-neutral-100 border border-neutral-200">
                    <span className="text-neutral-400 block text-[9px] uppercase">CONTRAST COMPLIANCE:</span>
                    <span className="font-semibold text-black">{selectedColor.contrastRatio}</span>
                  </div>
                  <div className="p-3 bg-neutral-100 border border-neutral-200">
                    <span className="text-neutral-400 block text-[9px] uppercase">CMYK OFFSET PRESS:</span>
                    <span className="font-semibold text-black">{selectedColor.cmyk}</span>
                  </div>
                  <div className="p-3 bg-neutral-100 border border-neutral-200">
                    <span className="text-neutral-400 block text-[9px] uppercase">PANTONE SOLID COATED:</span>
                    <span className="font-semibold text-black">{selectedColor.pantone}</span>
                  </div>
                  <div className="p-3 bg-neutral-100 border border-neutral-200">
                    <span className="text-neutral-400 block text-[9px] uppercase">PRIMARY APPLICATION:</span>
                    <span className="font-semibold text-black truncate block">{selectedColor.role}</span>
                  </div>
                </div>
              </div>

              {/* PALETTE SELECTOR GRID: Clickable Cards */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                  SELECT COLOR TO TEST ON SUBSTRATE:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                  {COLOR_PALETTE.map((color, idx) => {
                    const isSelected = selectedColor.hex === color.hex;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(color)}
                        className={`text-left p-3 border transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-black ring-2 ring-black bg-white shadow-md -translate-y-1'
                            : 'border-neutral-300 bg-white/70 hover:border-neutral-500 hover:bg-white'
                        }`}
                      >
                        <div>
                          <div className={`w-full h-12 ${color.bg} ${color.border ? 'border border-neutral-300' : ''} mb-2 shadow-inner`} />
                          <h4 className="font-medium text-xs text-neutral-900 leading-tight">{color.name}</h4>
                        </div>
                        <div className="pt-2 mt-2 border-t border-neutral-200 flex justify-between items-center text-[10px] font-mono text-neutral-600">
                          <span>{color.hex}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(color.hex);
                            }}
                            className="p-1 hover:text-black"
                            title="Copy HEX"
                          >
                            {copiedHex === color.hex ? <Check size={10} className="text-emerald-600" /> : <Copy size={10} />}
                          </button>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* SECTION 03: INSTAGRAM GRID FEED SPECIFICATION (9 POSTS) */}
            <section className="space-y-6">
              <div className="border-b border-neutral-300 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[10px] tracking-mega-wide uppercase text-neutral-500 font-medium block">
                    SECTION 03 • SOCIAL IDENTITY & CURATION
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
                    Official Instagram Grid Layout (9 Posts)
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
                  <Instagram size={14} className="text-pink-600" />
                  <span>@houseofknots</span>
                </div>
              </div>

              {/* Instagram Feed Container */}
              <div className="border border-neutral-300 bg-white p-6 sm:p-10 shadow-sm space-y-8 max-w-4xl mx-auto">
                {/* Profile Header Bar */}
                <div className="flex items-center gap-6 pb-6 border-b border-neutral-200">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-neutral-300 bg-[#FAF8F5] p-2 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="font-cormorant text-2xl font-semibold tracking-widest text-[#161616]">
                      AO
                    </span>
                  </div>
                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-medium text-base text-neutral-900">houseofknots</h3>
                      <span className="text-[10px] tracking-wider uppercase bg-neutral-100 text-neutral-600 px-2 py-0.5 border">
                        OFFICIAL ATELIER
                      </span>
                    </div>
                    <div className="flex gap-6 text-xs text-neutral-600">
                      <span><strong>186</strong> posts</span>
                      <span><strong>42.8k</strong> followers</span>
                      <span><strong>320</strong> following</span>
                    </div>
                    <p className="text-xs text-neutral-700 font-light leading-relaxed max-w-md">
                      <strong>HOUSE OF KNOTS | House Originals</strong><br />
                      Woven works of art hand-knotted by Tibetan artisans. Architectural rug collections curated in Surat, Gujarat & Milan.<br />
                      <span className="text-neutral-500">✦ New Collection: ANOTHER ONE</span>
                    </p>
                  </div>
                </div>

                {/* 3x3 Grid Display */}
                <div>
                  <span className="text-[10px] uppercase tracking-mega-wide text-neutral-400 font-mono block mb-3 text-center">
                    CURATED 9-POST GRID HARMONY (CLICK ANY POST TO INSPECT)
                  </span>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {INSTAGRAM_POSTS.map((post) => (
                      <div
                        key={post.id}
                        onClick={() => setActiveInstaPost(post)}
                        className="group relative aspect-square overflow-hidden bg-neutral-100 cursor-pointer border border-neutral-200"
                      >
                        <img
                          src={post.image}
                          alt={post.headline}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Hover Overlay with Likes & Comments */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white p-3 text-center">
                          <span className="text-[9px] uppercase tracking-wider font-mono text-amber-300">
                            POST #{post.id}
                          </span>
                          <p className="text-xs font-medium line-clamp-2 leading-tight">
                            {post.headline}
                          </p>
                          <div className="flex items-center gap-4 text-xs font-mono pt-1">
                            <span className="flex items-center gap-1"><Heart size={12} className="fill-white" /> {post.likes}</span>
                            <span className="flex items-center gap-1"><MessageCircle size={12} className="fill-white" /> {post.comments}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-center text-xs text-neutral-500 font-light">
                  Grid design balances architectural space photography, micro wool knot macro details, and typographical announcement tiles.
                </div>
              </div>
            </section>

            {/* SECTION 04: MOODBOARD & RUG ARCHITECTURAL SHOWCASE */}
            <section className="space-y-6">
              <div className="border-b border-neutral-300 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[10px] tracking-mega-wide uppercase text-neutral-500 font-medium block">
                    SECTION 04 • MATERIALITY & MOODBOARD
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
                    Architectural Moodboard & In Situ Gallery
                  </h2>
                </div>
                {/* Filter Tabs */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveMoodboardTab('all')}
                    className={`px-3 py-1 text-xs uppercase tracking-wider transition-colors ${
                      activeMoodboardTab === 'all' ? 'bg-black text-white font-medium' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    All Assets (10)
                  </button>
                  <button
                    onClick={() => setActiveMoodboardTab('packaging')}
                    className={`px-3 py-1 text-xs uppercase tracking-wider transition-colors ${
                      activeMoodboardTab === 'packaging' ? 'bg-black text-white font-medium' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    Packaging & Collateral
                  </button>
                  <button
                    onClick={() => setActiveMoodboardTab('interiors')}
                    className={`px-3 py-1 text-xs uppercase tracking-wider transition-colors ${
                      activeMoodboardTab === 'interiors' ? 'bg-black text-white font-medium' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    Interior In Situ
                  </button>
                </div>
              </div>

              {/* Moodboard Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMoodboard.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-neutral-300 bg-white flex flex-col shadow-sm group hover:border-black transition-all"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest bg-black/75 text-white px-2 py-0.5 backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-5 space-y-2 flex-grow bg-[#FAF8F5]">
                      <h4 className="text-base font-medium tracking-tight text-neutral-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-500 font-light">
                        {item.subtitle}
                      </p>
                      {item.description && (
                        <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 05: TYPOGRAPHY HIERARCHY & SPECIMEN */}
            <section className="space-y-6">
              <div className="border-b border-neutral-300 pb-3">
                <span className="text-[10px] tracking-mega-wide uppercase text-neutral-500 font-medium block">
                  SECTION 05
                </span>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
                  Typography Hierarchy & Font Weights
                </h2>
              </div>

              <div className="space-y-4">
                {/* 1. Cormorant Garamond */}
                <div className="p-6 bg-white border border-neutral-300 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-400 font-mono border-b pb-2 gap-1">
                    <span className="text-black font-semibold">PRIMARY LOGOTYPE & BRAND WORDMARK</span>
                    <span className="text-amber-800 font-medium">CORMORANT GARAMOND • WEIGHT: REGULAR (400) & ITALIC (400)</span>
                  </div>
                  <div className="pt-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                    <div>
                      <span className="text-xs text-neutral-400 uppercase tracking-widest font-mono block mb-1">
                        LIVE FONT SPECIMEN (TRACKING +0.18EM):
                      </span>
                      <p className="font-cormorant text-3xl sm:text-4xl tracking-[0.18em] text-[#161616]">
                        ANOTHER <span className="italic">ONE</span>
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono block">
                        ALPHABET SPECIMEN
                      </span>
                      <p className="font-cormorant text-sm tracking-[0.15em] text-neutral-600 mt-1">
                        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                      </p>
                      <p className="font-cormorant italic text-sm tracking-[0.15em] text-neutral-600">
                        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Plus Jakarta Sans Headings */}
                <div className="p-6 bg-white border border-neutral-300 space-y-2">
                  <div className="flex justify-between text-xs text-neutral-400 font-mono border-b pb-2">
                    <span className="text-black font-semibold">EDITORIAL HEADINGS</span>
                    <span>PLUS JAKARTA SANS • REGULAR (400) / MEDIUM (500) • -0.02EM TRACKING</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight pt-1">
                    Redefining Modern Design On The Floor
                  </h3>
                </div>

                {/* 3. Body copy */}
                <div className="p-6 bg-white border border-neutral-300 space-y-2">
                  <div className="flex justify-between text-xs text-neutral-400 font-mono border-b pb-2">
                    <span className="text-black font-semibold">BODY & NARRATIVE COPY</span>
                    <span>PLUS JAKARTA SANS • LIGHT 300 • LEADING-RELAXED (1.7)</span>
                  </div>
                  <p className="text-sm font-light text-neutral-700 leading-relaxed pt-1 max-w-2xl">
                    Every rug is hand-knotted over 180 days by master Tibetan artisans, using raw unbleached Himalayan mountain wool and pure hand-spun mulberry silk.
                  </p>
                </div>

                {/* 4. Technical Specs */}
                <div className="p-6 bg-white border border-neutral-300 space-y-2">
                  <div className="flex justify-between text-xs text-neutral-400 font-mono border-b pb-2">
                    <span className="text-black font-semibold">TECHNICAL DATA & KNOT DENSITY</span>
                    <span>JETBRAINS MONO • REGULAR 400 • TRACKING +0.05EM</span>
                  </div>
                  <p className="text-xs font-mono text-neutral-800 pt-1">
                    155,000 KNOTS/M² • 240 × 300 CM • 70% HIMALAYAN WOOL / 30% SILK • 8MM PILE RELIEF
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Bar */}
          <div className="sticky bottom-0 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-4 border-t border-neutral-300 flex items-center justify-between text-xs">
            <span className="text-neutral-500 font-light">
              House of Knots • 932, Avadh Kontina, VIP Road, Surat – 395007
            </span>
            <button
              onClick={onClose}
              className="bg-black text-white px-5 py-2 text-[10px] tracking-mega-wide uppercase font-medium hover:bg-neutral-800 transition-colors"
            >
              CLOSE GUIDELINES
            </button>
          </div>

          {/* INSTAGRAM POST LIGHTBOX MODAL */}
          {activeInstaPost && (
            <div className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white text-black max-w-3xl w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-2xl border border-neutral-400"
              >
                {/* Left: Image */}
                <div className="md:col-span-7 bg-neutral-900 aspect-square flex items-center justify-center">
                  <img
                    src={activeInstaPost.image}
                    alt={activeInstaPost.headline}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right: Caption Details */}
                <div className="md:col-span-5 p-6 flex flex-col justify-between bg-[#FAF8F5]">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-neutral-200 border flex items-center justify-center font-cormorant font-bold text-xs">
                          AO
                        </div>
                        <div>
                          <span className="font-semibold text-xs block">houseofknots</span>
                          <span className="text-[10px] text-neutral-400 font-mono">Surat • Atelier</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveInstaPost(null)}
                        className="p-1 hover:bg-neutral-200 text-neutral-600"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    {/* Headline & Caption */}
                    <div className="py-4 space-y-3 text-xs leading-relaxed">
                      <h4 className="font-medium text-sm text-neutral-900">
                        {activeInstaPost.headline}
                      </h4>
                      <p className="text-neutral-700 font-light">
                        {activeInstaPost.caption}
                      </p>
                      <p className="text-amber-800 text-[11px] font-mono">
                        {activeInstaPost.tags}
                      </p>
                    </div>
                  </div>

                  {/* Likes & Date Footer */}
                  <div className="pt-4 border-t border-neutral-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold">{activeInstaPost.likes} likes</span>
                      <span className="text-neutral-400">{activeInstaPost.comments} comments</span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-mono block">
                      {activeInstaPost.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
