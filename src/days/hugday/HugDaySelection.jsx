"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HugDaySelectionPage({ onYes, onNo }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1c2c] via-[#302b63] to-[#24243e] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-sm bg-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10 text-white"
      >
        {/* Breathing glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none" // 👈 THIS FIX
          animate={{
            boxShadow: ["0 0 0px #fff2", "0 0 25px #ffb6c155", "0 0 0px #fff2"],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center mb-2">
          It’s Hug Day 🫂
        </h1>
        <p className="text-center text-sm text-white/70 mb-4">
          Not a gift. Not a message. Just… a moment where nothing else exists.
        </p>

        {/* Center Presence Circle */}
        <div className="flex justify-center mb-6">
          <motion.div
            className="w-40 h-40 rounded-full border border-white/20 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-4xl"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              🤍
            </motion.div>
          </motion.div>
        </div>

        {/* Message */}
        <p className="text-center text-sm leading-relaxed text-white/80 mb-6">
          A hug isn’t something you open. It’s something you *fall into*.
          <span className="block mt-2 text-white font-medium">
            No screen. No props. Just warmth.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onNo}
            className="w-full py-3 rounded-xl text-sm font-medium
                       bg-white/10 text-white/80
                       hover:bg-white/20
                       active:scale-95 transition-all"
          >
            Stay here a second…
          </button>

          <button
            onClick={onYes}
            className="w-full py-3 rounded-xl text-sm font-medium
                       bg-gradient-to-r from-pink-400 via-rose-400 to-red-400
                       text-white shadow-lg shadow-pink-400/30
                       hover:shadow-xl hover:shadow-pink-400/50
                       active:scale-95 transition-all"
          >
            Come here 🤍
          </button>
        </div>

        {/* Footer line */}
        <p className="text-center mt-5 text-xs text-white/50">
          Some feelings don’t need words. They need arms.
        </p>
      </motion.div>
    </div>
  );
}
