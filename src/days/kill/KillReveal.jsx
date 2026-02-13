"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function KissRevealPage({ onBack }) {
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-[#0f0c1d] overflow-hidden">
      {/* Soft glowing aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff9aa244_0%,_transparent_70%)]" />

      {/* Subtle floating light particles */}
      {Array.from({ length: 14 }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = Math.random() * 20 + 15;

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{ x: `${randomX}vw`, y: "100vh" }}
            animate={{ y: "-120vh" }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "linear",
              delay: randomDelay,
            }}
          />
        );
      })}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md 
                   bg-white/5 backdrop-blur-2xl
                   rounded-3xl p-8
                   border border-white/10
                   shadow-[0_0_80px_rgba(255,150,170,0.15)]
                   text-center text-white"
      >
        {/* Accent line */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#ff9aa2] via-[#ffb7b2] to-[#ffdac1] rounded-full" />
        </div>

        <h1 className="text-2xl font-light mb-4">When Words Fall Away</h1>

        <p className="text-white/70 leading-relaxed mb-8">
          Some feelings are too quiet for noise.
          <br />
          Too deep for explanation.
          <br />
          They’re meant to be felt…
        </p>

        {/* REVEAL SECTION */}
        <div className="mb-8 flex justify-center">
          <AnimatePresence mode="wait">
            {!revealed ? (
              <motion.div
                key="cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setRevealed(true)}
                className="relative w-full max-w-[260px] aspect-[9/16]
                           rounded-2xl overflow-hidden
                           ring-1 ring-white/20
                           bg-white/5
                           flex items-center justify-center
                           cursor-pointer"
              >
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-sm text-white/70"
                >
                  Tap gently…
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="image"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full max-w-[260px] aspect-[9/16]
                           rounded-2xl overflow-hidden
                           shadow-2xl ring-1 ring-white/20"
              >
                <Image
                  src="/kill.jpeg" // place in /public
                  alt="Kiss Day"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-white/60 italic mb-8">
          Not rushed.
          <br />
          Not loud.
          <br />
          Just closeness becoming real.
        </p>

        <button
          onClick={onBack}
          className="w-full py-4 rounded-xl text-base font-medium
                     bg-gradient-to-r from-[#ff9aa2] via-[#ffb7b2] to-[#ffdac1]
                     text-[#2b0c15]
                     shadow-lg active:scale-95 transition-all"
        >
          Stay a little longer
        </button>

        <p className="mt-6 text-xs text-white/40">Happy Kiss Day</p>
      </motion.div>
    </div>
  );
}
