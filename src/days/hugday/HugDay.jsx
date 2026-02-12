"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HugDayMain({ handleReveal }) {
  const [stage, setStage] = useState("intro"); // intro → breathe → feel → reveal

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#1f1c2c] via-[#302b63] to-[#24243e] overflow-y-auto">
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 text-white">
        <AnimatePresence mode="wait">
          {/* INTRO */}
          {stage === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="text-center max-w-sm"
            >
              <div className="text-6xl mb-4">🫂🤍</div>
              <h1 className="text-3xl font-semibold mb-3">
                Happy Hug Day Miss SABUNAM
              </h1>
              <p className="text-white/70 mb-6 leading-relaxed">
                This one isn’t a game.
                <br />
                It’s a feeling you don’t explain…
                <br />
                You *step into* it.
              </p>
              <button
                onClick={() => setStage("breathe")}
                className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400
                           text-white px-7 py-3 rounded-full text-lg font-semibold
                           shadow-lg shadow-pink-400/30 active:scale-95"
              >
                Come closer 🤍
              </button>
            </motion.div>
          )}

          {/* BREATHE */}
          {stage === "breathe" && (
            <motion.div
              key="breathe"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center max-w-sm"
            >
              <motion.div
                className="w-48 h-48 mx-auto rounded-full border border-white/20 flex items-center justify-center mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="text-5xl"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🤍
                </motion.div>
              </motion.div>

              <p className="text-white/70 mb-6 leading-relaxed">
                Close your eyes for a second.
                <br />
                Imagine the space between us…
                <br />
                getting smaller.
              </p>

              <button
                onClick={() => setStage("feel")}
                className="bg-white/10 px-6 py-3 rounded-full text-sm font-medium
                           hover:bg-white/20 active:scale-95 transition"
              >
                I’m here…
              </button>
            </motion.div>
          )}

          {/* FEEL */}
          {stage === "feel" && (
            <motion.div
              key="feel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center max-w-sm"
            >
              <div className="text-5xl mb-4">🫂</div>
              <p className="text-white/80 mb-6 leading-relaxed">
                A hug isn’t arms.
                <br />
                It’s safety.
                <br />
                It’s saying *“you’re okay here”*
                <br />
                without making a sound.
              </p>

              <button
                onClick={() => setStage("reveal")}
                className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400
                           text-white px-7 py-3 rounded-full text-lg font-semibold
                           shadow-lg shadow-pink-400/30 active:scale-95"
              >
                Hold me 🤍
              </button>
            </motion.div>
          )}

          {/* REVEAL */}
          {stage === "reveal" && (
            <motion.div
              key="reveal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center max-w-sm"
            >
              <div className="text-6xl mb-4">🤍🫂✨</div>
              <h2 className="text-2xl font-semibold mb-3">
                This is where the screen stops
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                And the real moment begins.
                <br />
                No words. No distance.
                <br />
                Just you… and me.
              </p>

              <button
                onClick={handleReveal}
                className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400
                           text-white px-7 py-4 rounded-full text-lg font-semibold
                           shadow-lg shadow-pink-400/30 active:scale-95"
              >
                Come here 🤍
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
