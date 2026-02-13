"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const fadeIntervalRef = useRef(null);

  const startMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.play().then(() => {
      setPlaying(true);
      setHasInteracted(true);

      let volume = 0;
      fadeIntervalRef.current = setInterval(() => {
        if (volume < 0.6) {
          volume += 0.05;
          audio.volume = Math.min(volume, 0.6);
        } else {
          clearInterval(fadeIntervalRef.current);
        }
      }, 200);
    });
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!hasInteracted) {
      startMusic();
      return;
    }

    if (playing) {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0;
      audio.play();
      setPlaying(true);

      let volume = 0;
      fadeIntervalRef.current = setInterval(() => {
        if (volume < 0.6) {
          volume += 0.05;
          audio.volume = Math.min(volume, 0.6);
        } else {
          clearInterval(fadeIntervalRef.current);
        }
      }, 200);
    }
  };

  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} loop src="/music.mp3" />

      {/* Music Control Button with Pulse Animation */}
      <motion.button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-14 h-14 flex items-center justify-center hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={playing ? "Pause music" : "Play music"}
        animate={!hasInteracted ? { scale: [1, 1.1, 1] } : {}}
        transition={!hasInteracted ? { repeat: Infinity, duration: 1.5 } : {}}
      >
        <span className="text-white text-lg">{playing ? "❚❚" : "▶"}</span>
      </motion.button>

      {/* Tooltip for first-time users */}
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-20 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-gray-800 shadow-lg"
          >
            Click to play music 🎵
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
