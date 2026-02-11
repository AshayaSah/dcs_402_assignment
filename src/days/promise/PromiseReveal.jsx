"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function PromiseRevealPage({ onBack }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const bgMain = "bg-gradient-to-br from-rose-100 via-pink-50 to-white";
  const cardBg = "bg-white/90";
  const accent = "bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300";

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`min-h-screen ${bgMain} flex items-center justify-center p-4 relative overflow-hidden`}
    >
      {/* Floating soft elements */}
      {Array.from({ length: 18 }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = Math.random() * 12 + 14;

        return (
          <motion.div
            key={i}
            className="absolute text-3xl pointer-events-none opacity-20"
            initial={{ x: `${randomX}vw`, y: "100vh", rotate: 0 }}
            animate={{ y: "-100vh", rotate: 360 }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "linear",
              delay: randomDelay,
            }}
          >
            {["🤍", "🌸", "✨"][i % 3]}
          </motion.div>
        );
      })}

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`${cardBg} max-w-md w-full rounded-3xl shadow-2xl shadow-rose-300/30 p-6 border border-rose-200 text-center relative z-10`}
      >
        {/* Top line */}
        <div className="flex justify-center mb-4">
          <div className={`w-20 h-[2px] ${accent} rounded-full`} />
        </div>

        <h1 className="text-3xl font-semibold text-rose-600 mb-3">
          This One’s Real 🤍
        </h1>

        <p className="text-rose-500 mb-5 leading-relaxed">
          Not typed. Not filtered.
          <br />
          Just something I wanted you to see… from me.
        </p>

        {/* VIDEO CONTAINER */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-full max-w-[260px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg ring-1 ring-rose-200">
            <video
              src="/promisevideo.MP4" // <-- put your video in /public
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-rose-400 italic mb-6">
          Some promises don’t belong in messages…
          <br />
          they belong in moments.
        </p>

        <button
          onClick={onBack}
          className={`w-full py-4 rounded-xl font-medium text-base ${accent}
          text-white shadow-lg shadow-rose-300/40 active:scale-95 transition-all`}
        >
          Back 🤍
        </button>

        <p className="mt-4 text-xs text-rose-500">
          Made quietly. Felt deeply.
          <br />
          <span className="text-rose-600 font-semibold">
            Happy Promise Day 🤍
          </span>
        </p>
      </motion.div>
    </div>
  );
}
