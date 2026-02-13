"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MusicPlayer from "@/components/MusicPlayer";

export default function KissDayMain({ handleReveal }) {
  const [stage, setStage] = useState("intro");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0f0c1d] overflow-y-auto">
      {/* Soft radial romantic light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff9aa233_0%,_transparent_65%)]" />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6 text-white">
        <AnimatePresence mode="wait">
          {/* INTRO */}
          {stage === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1 }}
              className="text-center max-w-md"
            >
              <h1 className="text-3xl font-light mb-6 tracking-wide">
                Happy Kiss Day
              </h1>

              <p className="text-white/70 leading-relaxed mb-8">
                Not every moment needs noise.
                <br />
                Some moments ask for silence…
                <br />
                and closeness.
              </p>

              <button
                onClick={() => setStage("pause")}
                className="bg-gradient-to-r from-[#ff9aa2] via-[#ffb7b2] to-[#ffdac1]
                           text-[#2b0c15] px-8 py-3 rounded-full
                           text-lg font-medium shadow-lg active:scale-95"
              >
                Stay with me
              </button>
            </motion.div>
          )}

          {/* PAUSE */}
          {stage === "pause" && (
            <motion.div
              key="pause"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center max-w-md"
            >
              <motion.div
                className="w-52 h-52 mx-auto rounded-full border border-white/20 flex items-center justify-center mb-8"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <motion.div
                  className="w-32 h-32 rounded-full bg-white/5"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>

              <p className="text-white/70 leading-relaxed mb-8">
                Close your eyes for a moment.
                <br />
                Feel the quiet.
                <br />
                Feel how near we already are.
              </p>

              <button
                onClick={() => setStage("closer")}
                className="bg-white/10 px-6 py-3 rounded-full text-sm
                           hover:bg-white/20 active:scale-95 transition"
              >
                I can feel it
              </button>
            </motion.div>
          )}

          {/* CLOSER */}
          {stage === "closer" && (
            <motion.div
              key="closer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center max-w-md"
            >
              <p className="text-white/80 leading-relaxed mb-8">
                A kiss isn’t about lips.
                <br />
                It’s about the moment before.
                <br />
                When time slows down…
                <br />
                and the world disappears.
              </p>

              <button
                onClick={() => setStage("almost")}
                className="bg-gradient-to-r from-[#ff9aa2] via-[#ffb7b2] to-[#ffdac1]
                           text-[#2b0c15] px-8 py-3 rounded-full
                           text-lg font-medium shadow-lg active:scale-95"
              >
                Don’t move
              </button>
            </motion.div>
          )}

          {/* ALMOST */}
          {stage === "almost" && (
            <motion.div
              key="almost"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center max-w-md"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-white/90 mb-8 leading-relaxed"
              >
                Right here.
                <br />
                Right now.
                <br />
                Just us.
              </motion.div>

              <button
                onClick={() => setStage("reveal")}
                className="bg-white/10 px-6 py-3 rounded-full text-sm
                           hover:bg-white/20 active:scale-95 transition"
              >
                I’m not going anywhere
              </button>
            </motion.div>
          )}

          {/* REVEAL */}
          {stage === "reveal" && (
            <motion.div
              key="reveal"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center max-w-md"
            >
              <h2 className="text-2xl font-light mb-6">This is the moment.</h2>

              <p className="text-white/70 leading-relaxed mb-8">
                No countdown.
                <br />
                No rush.
                <br />
                Just closeness becoming real.
              </p>

              <button
                onClick={handleReveal}
                className="bg-gradient-to-r from-[#ff9aa2] via-[#ffb7b2] to-[#ffdac1]
                           text-[#2b0c15] px-10 py-4 rounded-full
                           text-lg font-medium shadow-lg active:scale-95"
              >
                Come here
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
