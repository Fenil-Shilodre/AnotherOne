import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CollectionIntro from './components/CollectionIntro';
import RugShowcase from './components/RugShowcase';
import VideoStorySection from './components/VideoStorySection';
import MaterialCraftSection from './components/MaterialCraftSection';
import StoriesSection from './components/StoriesSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { RUGS } from './data/collectionData';

const RugDetailModal = lazy(() => import('./components/RugDetailModal'));
const QuoteDrawer = lazy(() => import('./components/QuoteDrawer'));
const BrandGuidelinesPage = lazy(() => import('./pages/BrandGuidelinesPage'));

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    return window.location.pathname === '/guidelines' ? 'guidelines' : 'home';
  });
  const [selectedRug, setSelectedRug] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteRug, setQuoteRug] = useState(null);
  const [quoteCount, setQuoteCount] = useState(0);
  const [cursorText, setCursorText] = useState('');

  // Synchronize browser URL and back/forward history
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/guidelines') {
        setCurrentView('guidelines');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    if (view === 'guidelines') {
      window.history.pushState(null, '', '/guidelines');
    } else {
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (rug = null) => {
    setQuoteRug(rug || RUGS[0]);
    setIsQuoteOpen(true);
    setQuoteCount((prev) => prev + 1);
  };

  const handleSelectRugById = (rugId) => {
    const found = RUGS.find((r) => r.id === rugId);
    if (found) {
      setSelectedRug(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#161616] relative selection:bg-black selection:text-white">
      {/* Luxury magnetic custom cursor */}
      <CustomCursor cursorText={cursorText} />

      {/* VIEW 1: DEDICATED BRAND GUIDELINES FULL PAGE */}
      {currentView === 'guidelines' ? (
        <Suspense fallback={<div className="min-h-screen bg-[#F7F5F0] flex items-center justify-center font-cormorant text-2xl tracking-widest">LOADING GUIDELINES...</div>}>
          <BrandGuidelinesPage onNavigateHome={() => navigateTo('home')} />
        </Suspense>
      ) : (
        /* VIEW 2: MAIN COLLECTION LANDING PAGE */
        <>
          {/* Luxury Navigation Header */}
          <Header
            onOpenQuote={() => handleOpenQuote(null)}
            quoteCount={quoteCount}
            onSelectRug={handleSelectRugById}
            onOpenGuidelines={() => navigateTo('guidelines')}
          />

          {/* Main Content Experience */}
          <main>
            {/* Full Cinematic Video Hero */}
            <Hero
              onExploreClick={() => {
                const el = document.getElementById('showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Collection Architectural Manifesto */}
            <CollectionIntro />

            {/* The 6 Rug Editions: Interactive Showcase with Hover Mockups */}
            <RugShowcase
              onSelectRug={(rug) => setSelectedRug(rug)}
              onOpenQuote={(rug) => handleOpenQuote(rug)}
            />

            {/* Cinematic Craft Documentary (2nd Video) */}
            <VideoStorySection />

            {/* 4 Pillars of Himalayan Craftsmanship */}
            <MaterialCraftSection />

            {/* Journal & Related Stories */}
            <StoriesSection />
          </main>

          {/* Luxury Milanese Footer */}
          <Footer onOpenGuidelines={() => navigateTo('guidelines')} />
        </>
      )}

      {/* Rug Inspection Modal */}
      {selectedRug && (
        <Suspense fallback={null}>
          <RugDetailModal
            rug={selectedRug}
            rugs={RUGS}
            onClose={(nextRug) => {
              if (nextRug) {
                setSelectedRug(nextRug);
              } else {
                setSelectedRug(null);
              }
            }}
            onOpenQuote={(rug) => {
              setSelectedRug(null);
              handleOpenQuote(rug);
            }}
          />
        </Suspense>
      )}

      {/* Quote & Bespoke Specification Drawer */}
      <Suspense fallback={null}>
        <QuoteDrawer
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          preselectedRug={quoteRug}
        />
      </Suspense>
    </div>
  );
}
