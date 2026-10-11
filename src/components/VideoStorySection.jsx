import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles, Clock, Compass, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoStorySection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (videoRef.current) {
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  return (
    <section id="film" className="py-24 md:py-32 bg-[#121212] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] tracking-mega-wide uppercase text-neutral-400 mb-2">
              <Sparkles size={12} className="text-amber-400" />
              <span>03 / THE ATELIER DOCUMENTARY</span>
              <span>•</span>
              <span className="text-neutral-300">SHORT FILM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#FAF8F5] tracking-tight">
              Knot by Knot: The Atelier Documentary
            </h2>
          </div>
          <p className="text-neutral-400 font-light text-base sm:text-lg max-w-md leading-relaxed">
            "A rug is not manufactured; it is conjured across twelve weeks of human breath, memory, and tension."
          </p>
        </div>

        {/* Video Player and Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Custom Luxury Cinema Player */}
          <div className="lg:col-span-8 relative group">
            <div className="relative aspect-video w-full overflow-hidden bg-black shadow-2xl border border-neutral-800">
              <video
                ref={videoRef}
                src="/assets/videos/craft-atmosphere.mp4"
                playsInline
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className="w-full h-full object-cover scale-[1.18] -translate-x-[2%] -translate-y-[2%] filter contrast-[1.05]"
              />

              {/* Big Center Play Trigger (if paused) */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-colors hover:bg-black/25"
                >
                  <div className="w-20 h-20 rounded-full bg-white/90 text-black flex items-center justify-center pl-1 shadow-2xl backdrop-blur-md transition-transform hover:scale-110">
                    <Play size={28} />
                  </div>
                </div>
              )}

              {/* Luxury Bottom Video Controls Bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Scrubber Bar */}
                <div
                  onClick={handleSeek}
                  className="w-full h-1 bg-white/20 hover:h-2 transition-all cursor-pointer rounded-full mb-4 relative"
                >
                  <div
                    className="h-full bg-amber-400 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs tracking-wider font-light">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      <span className="text-[10px] uppercase">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                    </button>

                    <button
                      onClick={toggleMute}
                      className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      <span className="text-[10px] uppercase">{isMuted ? 'UNMUTE' : 'MUTE'}</span>
                    </button>

                    <span className="font-mono text-neutral-400 text-[11px]">
                      {currentTime} / {duration}
                    </span>
                  </div>

                  <button
                    onClick={toggleFullscreen}
                    className="hover:text-amber-400 transition-colors"
                    title="Fullscreen"
                  >
                    <Maximize size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Atelier Craft Highlights */}
          <div className="lg:col-span-4 space-y-8 lg:pl-4">
            <div className="space-y-4">
              <span className="text-xs tracking-mega-wide uppercase text-amber-400 font-medium">
                THE SLOW ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#FAF8F5] tracking-tight">
                Woven in the Shadows of the Himalayas
              </h3>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">
                In our workshop nestled outside Kathmandu, master Tibetan craftspeople bring European architectural blueprints into physical existence. No electrical machines or synthetic looms are permitted.
              </p>
            </div>

            <div className="space-y-4 border-t border-neutral-800 pt-6">
              {[
                {
                  icon: <Clock size={16} className="text-amber-400" />,
                  title: '14 to 16 Weeks Per Piece',
                  desc: 'Every single square centimeter demands between 120 and 150 individual hand knots tied onto a vertical cotton warp.',
                },
                {
                  icon: <Compass size={16} className="text-amber-400" />,
                  title: 'Highland Lanolin Rich Wool',
                  desc: 'Fleece harvested from sheep grazing at 4,000 meters altitude possesses unparalleled natural oils, resisting wear for decades.',
                },
                {
                  icon: <Shield size={16} className="text-amber-400" />,
                  title: 'Glacial Rainwater Washing',
                  desc: 'Completed rugs are soaked and paddle-washed exclusively with pure mountain runoff, yielding an unmistakable luminous sheen.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
