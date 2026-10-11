import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, Check, Copy, ExternalLink, Sparkles, BookOpen, Layers,
  Maximize2, ShieldCheck, AlertCircle, Heart, MessageCircle, Instagram,
  Palette, Eye, Download, Compass, RefreshCw, Volume2, VolumeX, X
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

export default function BrandGuidelinesPage({ onNavigateHome }) {
  const [copiedHex, setCopiedHex] = useState(null);
  const [selectedColor, setSelectedColor] = useState(COLOR_PALETTE[0]);
  const [substrateMode, setSubstrateMode] = useState('wool');
  const [logoTreatment, setLogoTreatment] = useState('auto');
  const [activeMoodboardTab, setActiveMoodboardTab] = useState('all');
  const [activeInstaPost, setActiveInstaPost] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const copyToClipboard = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

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

  // The 9-Post Instagram Grid definition with POST #5 (middle) featuring our exact single-line logo
  const INSTAGRAM_POSTS_9 = [
    {
      id: 1,
      image: '/assets/guidelines/instagram-hq/post-1.jpg',
      headline: 'SPACES THAT FEEL LIKE YOU',
      caption: 'Architecture is not merely where we dwell, but the ground upon which our daily thoughts unfold. Introducing the ANOTHER ONE circular edition in mineral sage and nocturnal charcoal.',
      likes: '1,420',
      comments: '48',
      date: '2 DAYS AGO',
      tags: '#HouseOfKnots #AnotherOneCollection #ArchitecturalRugs #QuietLuxury #HandKnotted',
    },
    {
      id: 2,
      image: '/assets/guidelines/instagram-hq/post-2.jpg',
      headline: 'ART UNDER YOUR FEET',
      caption: 'Bridging gallery artwork and daily functional comfort. The Carryover Rug in rich ochre and deep indigo mineral dyes, photographed in a Milanese residence.',
      likes: '2,650',
      comments: '94',
      date: '3 DAYS AGO',
      tags: '#LivingWithArt #ContemporaryInteriors #HouseOfKnots #AnotherOne',
    },
    {
      id: 3,
      image: '/assets/guidelines/instagram-hq/post-3.jpg',
      headline: 'TEXTURES THAT LIVE PLAY BELONG',
      caption: '155,000 Tibetan knots per square meter. Hand-sheared relief lines carved by generational craftsmen using raw unbleached Himalayan mountain wool and pure hand-spun mulberry silk.',
      likes: '1,840',
      comments: '63',
      date: '4 DAYS AGO',
      tags: '#TibetanWeave #Craftsmanship #HimalayanWool #TextileArt #ArtisanalDetails',
    },
    {
      id: 4,
      image: '/assets/guidelines/instagram-hq/post-4.jpg',
      headline: 'RUGS FOR ANOTHER KIND OF HOME',
      caption: 'Warm terracotta arches, Mediterranean morning light, and sculpted Himalayan wool underfoot. Designed for spaces that breathe with intention.',
      likes: '2,150',
      comments: '79',
      date: '5 DAYS AGO',
      tags: '#InteriorArchitecture #WarmMinimalism #TactileLiving #SlowDesign',
    },
    {
      id: 5,
      // MIDDLE POST: Dedicated pristine logo centerpiece with zero ghosting
      image: '/assets/guidelines/instagram-hq/post-5.jpg',
      headline: 'ANOTHER ONE • A NEW RUG COLLECTION',
      caption: 'ANOTHER ONE. Curated by House of Knots | House Originals. A collection of woven works of art hand-knotted in Nepal by master Tibetan artisans. Coming soon to private architectural patrons.',
      likes: '3,890',
      comments: '184',
      date: '6 DAYS AGO',
      tags: '#HouseOriginals #AnotherOne #HouseOfKnots #MilanDesignWeek #BespokeRugs',
    },
    {
      id: 6,
      image: '/assets/guidelines/instagram-hq/post-6.jpg',
      headline: 'THOUGHTFULLY DESIGNED UNIQUELY YOURS',
      caption: 'Every curve drawn by hand in our Surat studio, every thread dyed in Kathmandu. Bespoke co-creation with leading architects and interior studios worldwide.',
      likes: '1,960',
      comments: '56',
      date: '1 WEEK AGO',
      tags: '#DesignProcess #BespokeCommission #ArchitecturalStudio #HouseOfKnots',
    },
    {
      id: 7,
      image: '/assets/guidelines/instagram-hq/post-7.jpg',
      headline: 'TIMELESS RUGS FOR EVERYDAY LIVING',
      caption: 'Pure high-altitude Tibetan wool rolled in organic vegetable pigments: ochre gold, brick terracotta, and indigo midnight. Tactile materiality that endures across generations.',
      likes: '2,480',
      comments: '88',
      date: '1 WEEK AGO',
      tags: '#NaturalDyes #WoolTextiles #MaterialPurity #SustainableLuxury',
    },
    {
      id: 8,
      image: '/assets/guidelines/instagram-hq/post-8.jpg',
      headline: 'ANOTHER KIND OF PERSPECTIVE',
      caption: 'Slow mornings surrounded by sculptural geometries and unhurried textures. Curated by House of Knots. Photographed from above on natural bouclé seating.',
      likes: '2,730',
      comments: '95',
      date: '2 WEEKS AGO',
      tags: '#QuietLuxuryPerspective #ModernLiving #RugDesign #CalmLuxury',
    },
    {
      id: 9,
      image: '/assets/guidelines/instagram-hq/post-9.jpg',
      headline: 'WHERE DESIGN FEELS LIKE HOME',
      caption: 'Sun-drenched limestone, terracotta portals, and timeless hand-knotted textiles for contemporary living. House of Knots • Surat • Kathmandu.',
      likes: '2,290',
      comments: '71',
      date: '2 WEEKS AGO',
      tags: '#TimelessSpaces #MediterraneanVibe #ArchitecturalHome #HouseOfKnots',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#161616]">
      {/* Top Floating Navigation Bar */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-neutral-200/80 py-4 transition-all">
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Back to Collection Button */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 text-[11px] tracking-[0.25em] uppercase font-light text-neutral-800 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            <span>BACK TO COLLECTION</span>
          </button>

          {/* Center Single-Line Brand Logo */}
          <div className="flex flex-col items-center">
            <button onClick={onNavigateHome} className="flex flex-col items-center">
              <img
                src="/assets/brand-logo-singleline-black.png"
                alt="ANOTHER ONE"
                className="h-3.5 sm:h-4 w-auto object-contain"
              />
            </button>
          </div>

          {/* Document Version Tag */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
              BRAND MANUAL V1.2
            </span>
            <button
              onClick={onNavigateHome}
              className="text-[10px] tracking-mega-wide uppercase px-3 py-1.5 bg-black text-white hover:bg-neutral-800 transition-colors"
            >
              EXPLORE RUGS
            </button>
          </div>
        </div>
      </header>

      {/* 1. CINEMATIC VIDEO HERO SECTION (Matching the Home Hero Aesthetic) */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-20">
        {/* Cinematic Video Background with Zoom Crop */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover scale-[1.24] -translate-x-[2%] -translate-y-[2%] filter brightness-90 contrast-[1.05]"
          >
            <source src="/assets/videos/hero-manifesto.mp4" type="video/mp4" />
          </video>
          {/* Dark Luxury Vignette & Grain Overlay */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/40 to-transparent" />
        </div>

        {/* Centerpiece Hero Text */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center select-none space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-4"
          >
            <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-amber-300/90 font-mono">
              HOUSE OF KNOTS • BRAND IDENTITY MANUAL
            </span>

            {/* Master Single-Line Wordmark in White */}
            <div className="pt-2">
              <img
                src="/assets/brand-logo-singleline-white.png"
                alt="ANOTHER ONE"
                className="w-[320px] sm:w-[540px] md:w-[720px] lg:w-[860px] h-auto object-contain drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
              />
            </div>

            <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-neutral-200/90 font-light">
              HOUSE OF KNOTS | HOUSE ORIGINALS
            </p>

            <p className="max-w-2xl text-xs sm:text-sm text-neutral-300 font-light leading-relaxed pt-2">
              The architectural typography, material substrates, tactile unboxing packaging, and social curation standards of ANOTHER ONE.
            </p>

            {/* Quick Navigation Anchor Bar */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-3 text-[10px] tracking-widest uppercase font-mono">
              <a href="#construction" className="px-3.5 py-1.5 bg-white/10 hover:bg-white text-neutral-200 hover:text-black backdrop-blur-md border border-white/20 transition-all">
                01. Logo Anatomy
              </a>
              <a href="#color-studio" className="px-3.5 py-1.5 bg-white/10 hover:bg-white text-neutral-200 hover:text-black backdrop-blur-md border border-white/20 transition-all">
                02. Color Studio
              </a>
              <a href="#instagram" className="px-3.5 py-1.5 bg-white/10 hover:bg-white text-neutral-200 hover:text-black backdrop-blur-md border border-white/20 transition-all">
                03. Instagram Grid
              </a>
              <a href="#packaging" className="px-3.5 py-1.5 bg-white/10 hover:bg-white text-neutral-200 hover:text-black backdrop-blur-md border border-white/20 transition-all">
                04. Packaging Mockups
              </a>
              <a href="#typography" className="px-3.5 py-1.5 bg-white/10 hover:bg-white text-neutral-200 hover:text-black backdrop-blur-md border border-white/20 transition-all">
                05. Typography
              </a>
            </div>
          </motion.div>
        </div>

        {/* Ambient Video Mute Toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md border border-white/20 transition-all"
          title={isMuted ? 'Unmute video audio' : 'Mute audio'}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
      </section>

      {/* MAIN GUIDELINE CONTENT CONTAINER */}
      <main className="max-w-[1540px] mx-auto px-6 md:px-12 py-20 space-y-32">
        {/* SECTION 01: MASTER LOGO & SINGLE LINE ANATOMY */}
        <section id="construction" className="space-y-8 scroll-mt-28">
          <div className="border-b border-neutral-300 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-[10px] tracking-mega-wide uppercase text-neutral-500 font-mono block">
                SECTION 01 • LOGO GEOMETRY
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#161616]">
                Master Wordmark & Construction
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-700 bg-neutral-200/70 px-3 py-1 border border-neutral-300">
              STRICT MANDATE: HORIZONTAL SINGLE-LINE ONLY
            </span>
          </div>

          {/* Master Logo Showcase Canvas */}
          <div className="p-10 sm:p-20 bg-white border border-neutral-300 shadow-sm flex flex-col items-center justify-center space-y-6 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
              CLEAR SPACE REQUIREMENT: 1X CAP HEIGHT AROUND ALL BORDERS
            </div>
            <div className="border border-dashed border-neutral-300 p-8 sm:p-16 w-full max-w-4xl flex items-center justify-center bg-[#FAF8F5]/60">
              <img
                src="/assets/brand-logo-singleline-black.png"
                alt="ANOTHER ONE Master Wordmark"
                className="w-full max-w-2xl h-auto object-contain"
              />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 font-light">
              HOUSE OF KNOTS | HOUSE ORIGINALS
            </p>
          </div>

          {/* Architectural Rules Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 bg-[#FAF8F5] border border-neutral-300 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-medium text-xs tracking-wider uppercase">
                <ShieldCheck size={18} />
                <span>Approved: Continuous Single-Line Axis</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-light">
                The wordmark is typographically set in <strong className="font-semibold text-black">Cormorant Garamond</strong> (Regular Roman capitals for "ANOTHER", paired harmoniously with Cormorant Garamond Italic for "ONE"). It must strictly appear on a single, continuous horizontal axis, providing an expansive horizon line that echoes modern architectural floor plans.
              </p>
            </div>

            <div className="p-7 bg-red-50/70 border border-red-200 space-y-3">
              <div className="flex items-center gap-2 text-red-800 font-medium text-xs tracking-wider uppercase">
                <AlertCircle size={18} />
                <span>Prohibited: Stacking / Double-Line Layout</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-light">
                Never break "ANOTHER" and "ONE" into a stacked, two-line layout. Never skew, artificially slant, add drop shadows or glows, or reduce letter-tracking below the specified +0.18em.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 02: INTERACTIVE COLOR & LOGO SUBSTRATE TESTING STUDIO */}
        <section id="color-studio" className="space-y-8 scroll-mt-28">
          <div className="border-b border-neutral-300 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-[10px] tracking-mega-wide uppercase text-neutral-500 font-mono block">
                SECTION 02 • LIVE TESTING STUDIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#161616]">
                Logo & Substrate Color Testing Studio
              </h2>
            </div>
            <span className="text-xs font-mono text-amber-900 bg-amber-100/80 px-3 py-1 border border-amber-300">
              SELECT ANY SWATCH BELOW TO TEST LIVE CONTRAST
            </span>
          </div>

          {/* LIVE TESTING CANVAS CONTAINER */}
          <div className="border border-neutral-300 bg-white p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
              <div>
                <span className="text-[10px] uppercase tracking-mega-wide text-neutral-400 block font-mono">
                  ACTIVE SUBSTRATE MATERIAL:
                </span>
                <h3 className="text-2xl font-medium tracking-tight text-neutral-900 flex items-center gap-3">
                  <span>{selectedColor.name}</span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-neutral-100 border text-neutral-700">
                    {selectedColor.hex}
                  </span>
                </h3>
              </div>

              {/* Texture & Finish Controls */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Texture Selector */}
                <div className="flex items-center gap-1 bg-neutral-100 p-1 border border-neutral-200 text-xs">
                  <span className="text-[10px] text-neutral-400 px-2 uppercase font-mono">Substrate:</span>
                  <button
                    onClick={() => setSubstrateMode('wool')}
                    className={`px-3 py-1 text-xs font-medium transition-colors ${
                      substrateMode === 'wool' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    Woven Wool
                  </button>
                  <button
                    onClick={() => setSubstrateMode('linen')}
                    className={`px-3 py-1 text-xs font-medium transition-colors ${
                      substrateMode === 'linen' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    Raw Paper
                  </button>
                  <button
                    onClick={() => setSubstrateMode('solid')}
                    className={`px-3 py-1 text-xs font-medium transition-colors ${
                      substrateMode === 'solid' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    Flat Solid
                  </button>
                </div>

                {/* Finish Selector */}
                <div className="flex items-center gap-1 bg-neutral-100 p-1 border border-neutral-200 text-xs">
                  <span className="text-[10px] text-neutral-400 px-2 uppercase font-mono">Imprint:</span>
                  <button
                    onClick={() => setLogoTreatment('auto')}
                    className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                      logoTreatment === 'auto' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    Auto Contrast
                  </button>
                  <button
                    onClick={() => setLogoTreatment('deboss')}
                    className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                      logoTreatment === 'deboss' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    Deboss
                  </button>
                  <button
                    onClick={() => setLogoTreatment('gold')}
                    className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                      logoTreatment === 'gold' ? 'bg-black text-white' : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    Gold Foil
                  </button>
                </div>
              </div>
            </div>

            {/* DYNAMIC CANVAS AREA */}
            <div
              className="relative w-full h-80 sm:h-96 flex flex-col items-center justify-center p-8 transition-colors duration-500 overflow-hidden border border-neutral-300 shadow-inner"
              style={{ backgroundColor: selectedColor.hex }}
            >
              {substrateMode === 'wool' && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-multiply pointer-events-none"
                  style={{ backgroundImage: "url('/assets/guidelines/instagram/insta-3.jpg')" }}
                />
              )}
              {substrateMode === 'linen' && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"
                  style={{ backgroundImage: "url('/assets/guidelines/instagram/insta-7.jpg')" }}
                />
              )}

              {/* Rendered Logo */}
              <div className="relative z-10 flex flex-col items-center max-w-2xl w-full px-4 text-center">
                <img
                  src={currentLogo.src}
                  alt="ANOTHER ONE on Substrate"
                  className={`w-full max-w-lg h-auto object-contain transition-all duration-300 ${currentLogo.className}`}
                />
                <p
                  className={`mt-4 text-[11px] tracking-[0.32em] uppercase font-light transition-colors ${
                    selectedColor.isDark ? 'text-neutral-200/90' : 'text-neutral-700'
                  }`}
                >
                  HOUSE OF KNOTS | HOUSE ORIGINALS
                </p>
              </div>

              <div className="absolute bottom-4 right-4 z-10 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/60 text-white backdrop-blur-sm">
                {currentLogo.label}
              </div>
            </div>

            {/* Specifications Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono pt-2">
              <div className="p-3.5 bg-neutral-100 border border-neutral-200">
                <span className="text-neutral-400 block text-[9px] uppercase">CONTRAST COMPLIANCE:</span>
                <span className="font-semibold text-black">{selectedColor.contrastRatio}</span>
              </div>
              <div className="p-3.5 bg-neutral-100 border border-neutral-200">
                <span className="text-neutral-400 block text-[9px] uppercase">CMYK OFFSET PRESS:</span>
                <span className="font-semibold text-black">{selectedColor.cmyk}</span>
              </div>
              <div className="p-3.5 bg-neutral-100 border border-neutral-200">
                <span className="text-neutral-400 block text-[9px] uppercase">PANTONE SOLID COATED:</span>
                <span className="font-semibold text-black">{selectedColor.pantone}</span>
              </div>
              <div className="p-3.5 bg-neutral-100 border border-neutral-200">
                <span className="text-neutral-400 block text-[9px] uppercase">PRIMARY APPLICATION:</span>
                <span className="font-semibold text-black truncate block">{selectedColor.role}</span>
              </div>
            </div>
          </div>

          {/* Color Palette Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {COLOR_PALETTE.map((color, idx) => {
              const isSelected = selectedColor.hex === color.hex;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`text-left p-3.5 border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-black ring-2 ring-black bg-white shadow-md -translate-y-1'
                      : 'border-neutral-300 bg-white/70 hover:border-neutral-500 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className={`w-full h-14 ${color.bg} ${color.border ? 'border border-neutral-300' : ''} mb-2.5 shadow-inner`} />
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
                      {copiedHex === color.hex ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    </button>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* SECTION 03: OFFICIAL INSTAGRAM GRID (9 POSTS WITH CENTER LOGO) */}
        <section id="instagram" className="space-y-8 scroll-mt-28">
          <div className="border-b border-neutral-300 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-[10px] tracking-mega-wide uppercase text-neutral-500 font-mono block">
                SECTION 03 • SOCIAL IDENTITY & FEED HARMONY
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#161616]">
                Official Instagram Grid Layout (9 Posts)
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-700 bg-neutral-200/70 px-3 py-1 border border-neutral-300">
              <Instagram size={14} className="text-pink-600" />
              <span>@houseofknots • OFFICIAL FEED</span>
            </div>
          </div>

          {/* Instagram Feed Showcase Card */}
          <div className="border border-neutral-300 bg-white p-6 sm:p-12 shadow-sm space-y-10 max-w-5xl mx-auto">
            {/* Profile Bar */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-neutral-200 text-center sm:text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-neutral-300 bg-[#FAF8F5] p-2 flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="font-cormorant text-2xl sm:text-3xl font-semibold tracking-widest text-[#161616]">
                  AO
                </span>
              </div>
              <div className="space-y-2.5 flex-grow">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <h3 className="font-medium text-lg text-neutral-900">houseofknots</h3>
                  <span className="text-[10px] tracking-wider uppercase bg-neutral-100 text-neutral-700 px-2.5 py-0.5 border">
                    OFFICIAL ATELIER
                  </span>
                </div>
                <div className="flex justify-center sm:justify-start gap-6 text-xs text-neutral-600">
                  <span><strong>186</strong> posts</span>
                  <span><strong>42.8k</strong> followers</span>
                  <span><strong>320</strong> following</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed max-w-lg">
                  <strong>HOUSE OF KNOTS | House Originals</strong><br />
                  Woven works of art hand-knotted by Tibetan artisans. Curated in Surat & Kathmandu.<br />
                  <span className="text-neutral-500">✦ New Collection: ANOTHER ONE</span>
                </p>
              </div>
            </div>

            {/* 3x3 Grid Display */}
            <div>
              <span className="text-[10px] uppercase tracking-mega-wide text-neutral-400 font-mono block mb-4 text-center">
                3×3 HARMONIC FEED GRID (MIDDLE POST FEATURING OFFICIAL MASTER LOGO)
              </span>

              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {INSTAGRAM_POSTS_9.map((post) => {
                  return (
                    <div
                      key={post.id}
                      onClick={() => setActiveInstaPost(post)}
                      className="group relative aspect-square overflow-hidden bg-[#FAF8F5] cursor-pointer border border-neutral-200 transition-all hover:shadow-lg"
                    >
                      {/* All 9 Posts render high-res image directly */}
                      <img
                        src={post.image}
                        alt={post.headline}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Hover Overlay with Likes & Comments */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white p-3 text-center">
                        <span className="text-[9px] uppercase tracking-wider font-mono text-amber-300">
                          {post.id === 5 ? 'CENTERPIECE' : `POST #${post.id}`}
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
                  );
                })}
              </div>
            </div>

            <p className="text-center text-xs text-neutral-500 font-light leading-relaxed max-w-xl mx-auto">
              Click any of the 9 tiles to inspect the editorial post copy, tags, and architectural composition notes.
            </p>
          </div>
        </section>

        {/* SECTION 04: PHYSICAL PACKAGING & COLLATERAL SUITE */}
        <section id="packaging" className="space-y-8 scroll-mt-28">
          <div className="border-b border-neutral-300 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-[10px] tracking-mega-wide uppercase text-neutral-500 font-mono block">
                SECTION 04 • PHYSICAL PACKAGING
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#161616]">
                Packaging & Collateral Applications
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest bg-black/75 text-white px-2.5 py-0.5 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 space-y-2 flex-grow bg-[#FAF8F5]">
                  <h4 className="text-base font-medium tracking-tight text-neutral-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-500 font-light">
                    {item.subtitle}
                  </p>
                  {item.description && (
                    <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1 line-clamp-3">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05: TYPOGRAPHY HIERARCHY */}
        <section id="typography" className="space-y-8 scroll-mt-28">
          <div className="border-b border-neutral-300 pb-4">
            <span className="text-[10px] tracking-mega-wide uppercase text-neutral-500 font-mono block">
              SECTION 05 • TYPOGRAPHIC SYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#161616]">
              Typography Hierarchy & Font Weights
            </h2>
          </div>

          <div className="space-y-6">
            {/* 1. Cormorant Garamond */}
            <div className="p-8 bg-white border border-neutral-300 space-y-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-400 font-mono border-b pb-3 gap-1">
                <span className="text-black font-semibold text-sm">PRIMARY LOGOTYPE & BRAND WORDMARK</span>
                <span className="text-amber-800 font-medium">CORMORANT GARAMOND • WEIGHT: REGULAR (400) & ITALIC (400)</span>
              </div>
              <div className="pt-2 flex flex-col lg:flex-row lg:items-baseline justify-between gap-6">
                <div>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest font-mono block mb-2">
                    LIVE FONT SPECIMEN (TRACKING +0.18EM):
                  </span>
                  <p className="font-cormorant text-4xl sm:text-5xl tracking-[0.18em] text-[#161616]">
                    ANOTHER <span className="italic">ONE</span>
                  </p>
                </div>
                <div className="text-left lg:text-right space-y-1">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono block">
                    ALPHABET SPECIMEN
                  </span>
                  <p className="font-cormorant text-base tracking-[0.15em] text-neutral-700">
                    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                  </p>
                  <p className="font-cormorant italic text-base tracking-[0.15em] text-neutral-700">
                    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Plus Jakarta Sans Headings */}
            <div className="p-8 bg-white border border-neutral-300 space-y-3 shadow-sm">
              <div className="flex justify-between text-xs text-neutral-400 font-mono border-b pb-3">
                <span className="text-black font-semibold text-sm">EDITORIAL HEADINGS</span>
                <span>PLUS JAKARTA SANS • REGULAR (400) / MEDIUM (500) • -0.02EM TRACKING</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight pt-1">
                Redefining Modern Design On The Floor
              </h3>
            </div>

            {/* 3. Body Copy */}
            <div className="p-8 bg-white border border-neutral-300 space-y-3 shadow-sm">
              <div className="flex justify-between text-xs text-neutral-400 font-mono border-b pb-3">
                <span className="text-black font-semibold text-sm">BODY & NARRATIVE COPY</span>
                <span>PLUS JAKARTA SANS • LIGHT 300 • LEADING-RELAXED (1.7)</span>
              </div>
              <p className="text-base font-light text-neutral-700 leading-relaxed pt-1 max-w-3xl">
                Every rug is hand-knotted over 180 days by master Tibetan artisans in Kathmandu, using raw unbleached Himalayan mountain wool and pure hand-spun mulberry silk.
              </p>
            </div>

            {/* 4. Technical Specs */}
            <div className="p-8 bg-white border border-neutral-300 space-y-3 shadow-sm">
              <div className="flex justify-between text-xs text-neutral-400 font-mono border-b pb-3">
                <span className="text-black font-semibold text-sm">TECHNICAL DATA & KNOT DENSITY</span>
                <span>JETBRAINS MONO • REGULAR 400 • TRACKING +0.05EM</span>
              </div>
              <p className="text-xs font-mono text-neutral-800 pt-1">
                155,000 KNOTS/M² • 240 × 300 CM • 70% HIMALAYAN WOOL / 30% SILK • 8MM PILE RELIEF
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#141414] text-[#FAF8F5] py-16 border-t border-neutral-800 mt-24">
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <img
              src="/assets/brand-logo-singleline-white.png"
              alt="ANOTHER ONE"
              className="h-5 w-auto object-contain mx-auto md:mx-0 opacity-90"
            />
            <p className="text-xs text-neutral-400 font-light">
              House of Knots • 932, Avadh Kontina, VIP Road, Surat – 395007, Gujarat, India
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="px-6 py-3 bg-white text-black text-[11px] tracking-mega-wide uppercase font-medium hover:bg-neutral-200 transition-colors"
            >
              RETURN TO COLLECTION
            </button>
          </div>
        </div>
      </footer>

      {/* INSTAGRAM POST LIGHTBOX MODAL */}
      {activeInstaPost && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white text-black max-w-3xl w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-2xl border border-neutral-400"
          >
            {/* Left: High-Res Image */}
            <div className="md:col-span-7 bg-[#FAF8F5] aspect-square flex items-center justify-center relative overflow-hidden">
              <img
                src={activeInstaPost.image}
                alt={activeInstaPost.headline}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Caption Details */}
            <div className="md:col-span-5 p-6 flex flex-col justify-between bg-[#FAF8F5]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-neutral-200 border flex items-center justify-center font-cormorant font-bold text-xs">
                      AO
                    </div>
                    <div>
                      <span className="font-semibold text-xs block">houseofknots</span>
                      <span className="text-[10px] text-neutral-400 font-mono">Surat • Kathmandu</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveInstaPost(null)}
                    className="p-1 hover:bg-neutral-200 text-neutral-600"
                  >
                    <X size={18} />
                  </button>
                </div>

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
    </div>
  );
}
