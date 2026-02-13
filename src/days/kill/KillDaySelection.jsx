"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function KissDaySelectionPage({ onYes, onNo }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-5 
                    bg-[#0f0c1d] overflow-hidden"
    >
      {/* Soft Radial Light Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff9aa233_0%,_transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full max-w-md 
                   bg-white/5 backdrop-blur-2xl 
                   rounded-3xl p-8
                   border border-white/10
                   shadow-[0_0_60px_rgba(255,150,170,0.15)]
                   text-white"
      >
        {/* Gentle breathing border */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255,170,190,0.05)",
              "0 0 60px rgba(255,170,190,0.25)",
              "0 0 20px rgba(255,170,190,0.05)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-light text-center mb-6 tracking-wide">
          Kiss Day
        </h1>

        {/* Main Romantic Copy */}
        <p className="text-center text-sm sm:text-base leading-relaxed text-white/80 mb-8">
          There are moments when words fall short.
          <span className="block mt-3">
            When silence feels warmer than sound.
          </span>
          <span className="block mt-3">
            And when being close… feels like home.
          </span>
        </p>

        <p className="text-center text-sm text-white/60 mb-10">
          Tonight is not about a gesture.
          <br />
          It’s about a feeling.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={onNo}
            className="w-full py-3 rounded-2xl text-sm font-medium
                       bg-white/10 text-white/70
                       hover:bg-white/20
                       active:scale-95 transition-all"
          >
            Let’s stay here a little longer
          </button>

          <motion.button
            onClick={onYes}
            whileTap={{ scale: 0.96 }}
            className="w-full py-3 rounded-2xl text-sm font-medium
                       bg-gradient-to-r from-[#ff9aa2] via-[#ffb7b2] to-[#ffdac1]
                       text-[#2b0c15]
                       shadow-lg"
          >
            Step closer
          </motion.button>
        </div>

        {/* Subtle Footer Line */}
        <p className="text-center mt-8 text-xs text-white/40">
          Some closeness doesn’t need permission.
        </p>
      </motion.div>
    </div>
  );
}
