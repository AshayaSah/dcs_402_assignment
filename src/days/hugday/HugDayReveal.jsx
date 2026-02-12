"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function HugRevealPage({ onBack }) {
  const [mounted, setMounted] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const bgMain = "bg-gradient-to-br from-[#1f1c2c] via-[#302b63] to-[#24243e]";
  const cardBg = "bg-white/5 backdrop-blur-xl";
  const accent = "bg-gradient-to-r from-pink-400 via-rose-400 to-red-400";

  return (
    <div
      className={`min-h-screen ${bgMain} flex items-center justify-center p-4 relative overflow-hidden`}
    >
      {/* Floating hug elements */}
      {Array.from({ length: 18 }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = Math.random() * 14 + 14;

        return (
          <motion.div
            key={i}
            className="absolute text-3xl pointer-events-none opacity-20"
            initial={{ x: `${randomX}vw`, y: "100vh", rotate: 0 }}
            animate={{ y: "-120vh", rotate: 360 }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "linear",
              delay: randomDelay,
            }}
          >
            {["🫂", "🤍", "✨"][i % 3]}
          </motion.div>
        );
      })}

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`${cardBg} max-w-md w-full rounded-3xl shadow-2xl shadow-black/40 p-6 border border-white/10 text-center relative z-10 text-white`}
      >
        {/* Top line */}
        <div className="flex justify-center mb-4">
          <div className={`w-20 h-[2px] ${accent} rounded-full`} />
        </div>

        <h1 className="text-3xl font-semibold mb-3">
          Sending you the Virtual ARMS 🫂
        </h1>

        <p className="text-white/70 mb-5 leading-relaxed">
          Not able to show up there but
          <br />
          Always in my Heart..
          <br />
          Just something I wanted you to *feel*.
        </p>

        {/* VIDEO / SURPRISE */}
        <div className="mb-6 flex justify-center">
          <AnimatePresence mode="wait">
            {!showSurprise ? (
              <motion.div
                key="cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-[260px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/20
                           flex items-center justify-center bg-white/5 cursor-pointer"
                onClick={() => setShowSurprise(true)}
              >
                <motion.div
                  className="text-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-4xl mb-2">🎁</div>
                  <p className="text-sm text-white/80">
                    Tap to unwrap your hug
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-[260px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/20"
              >
                <Image
                  src="/hugreveal.jpeg" // <-- place your image in /public
                  alt="Hug Day"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-white/60 italic mb-6">
          Some hugs travel through time…
          <br />
          until they reach the right heart.
        </p>

        <button
          onClick={onBack}
          className={`w-full py-4 rounded-xl font-medium text-base ${accent}
          text-white shadow-lg shadow-pink-400/30 active:scale-95 transition-all`}
        >
          Back 🤍
        </button>

        <p className="mt-4 text-xs text-white/50">
          Not loud. Not public.
          <br />
          <span className="text-white/70 font-semibold">
            Happy Hug Day 🫂🤍
          </span>
        </p>
      </motion.div>
    </div>
  );
}
