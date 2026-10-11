import React, { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onExploreClick }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#121212] text-[#FAF8F5]">
      {/* Background Cinematic Video with Watermark-Cropping Scale */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/assets/videos/hero-manifesto.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover scale-[1.24] -translate-x-[2%] -translate-y-[2%] filter brightness-[0.82] contrast-[1.06]"
        />
        {/* Soft luxury film tone overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Seamless bottom fade into collection background */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/30 to-transparent" />
      </div>

      {/* Pure, Minimal Hero Centerpiece */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center select-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Exact Single-Line Wordmark Logo */}
          <img
            src="/assets/brand-logo-singleline-white.png"
            alt="ANOTHER ONE"
            className="w-[340px] sm:w-[520px] md:w-[700px] lg:w-[860px] h-auto object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          />

          {/* Understated Subtitle */}
          <p className="mt-4 sm:mt-6 text-[10px] sm:text-xs md:text-[13px] tracking-[0.38em] uppercase text-neutral-200/90 font-light drop-shadow">
            HOUSE OF KNOTS | HOUSE ORIGINALS
          </p>
        </motion.div>
      </div>

      {/* Bottom Subtle Audio Toggle (Minimal corner pill) */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 text-white/70 hover:text-white text-[10px] tracking-[0.25em] uppercase font-light bg-black/30 hover:bg-black/50 backdrop-blur-md px-3.5 py-2 border border-white/15 transition-all"
          title={isMuted ? 'Unmute film' : 'Mute film'}
        >
          {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          <span>{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
        </button>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] tracking-[0.3em] uppercase text-neutral-800 font-light mb-1">
          SCROLL
        </span>
        <div className="w-px h-6 bg-neutral-800 animate-pulse" />
      </div>
    </section>
  );
}
