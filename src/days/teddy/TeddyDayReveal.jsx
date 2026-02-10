"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function TeddyRevealPage({ onBack }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const bgMain = "bg-gradient-to-br from-pink-200 via-pink-100 to-white";
  const cardBg = "bg-white/90";
  const accent = "bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200";

  if (!mounted) {
    return (
      <div
        className={`min-h-screen ${bgMain} flex items-center justify-center p-4`}
      >
        <div
          className={`${cardBg} max-w-md w-full rounded-3xl shadow-2xl shadow-pink-300/40 p-6 border border-pink-200 text-center`}
        >
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-1 ${accent} rounded-full`} />
          </div>

          <h1 className="text-3xl font-bold text-pink-600 mb-3">
            Your Teddy Surprise 🧸🎀
          </h1>

          <p className="text-pink-500 mb-6 leading-relaxed">
            A little plush gift for the cutest person in my world…
          </p>

          <div className="mb-6 flex justify-center">
            <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-lg ring-2 ring-pink-200">
              <Image
                src="/hellokitty.png"
                alt="Hello Kitty Teddy Day"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <button
            onClick={onBack}
            className={`w-full py-4 rounded-xl font-medium text-base ${accent}
            text-white shadow-lg shadow-pink-300/40 active:scale-95 transition-all`}
          >
            Back to Cuteness 🐱🎀
          </button>

          <p className="mt-4 text-xs text-pink-500">
            Made with hugs & happiness 🧸💗
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${bgMain} flex items-center justify-center p-4 relative overflow-hidden`}
    >
      {Array.from({ length: 20 }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = Math.random() * 10 + 15;

        return (
          <motion.div
            key={i}
            className="absolute text-4xl pointer-events-none opacity-20"
            initial={{ x: `${randomX}vw`, y: "100vh", rotate: 0 }}
            animate={{ y: "-100vh", rotate: 360 }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "linear",
              delay: randomDelay,
            }}
          >
            {["🎀", "🐱", "🧸", "💗"][i % 4]}
          </motion.div>
        );
      })}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`${cardBg} max-w-md w-full rounded-3xl shadow-2xl shadow-pink-300/40 p-6 border border-pink-200 text-center relative z-10`}
      >
        <div className="flex justify-center mb-4">
          <div className={`w-16 h-1 ${accent} rounded-full`} />
        </div>

        <h1 className="text-3xl font-bold text-pink-600 mb-3">
          Your Kitty Surprise is here 🧸🎀
        </h1>

        <p className="text-pink-500 mb-4 text-lg">
          I couldn’t give you a real teddy today but no worreis, here’s a
          virtual one full of hugs for you. 😌
        </p>

        <p className="text-pink-400 mb-6 italic">
          Because you deserve something soft, cute, and slightly obsessed with
          you like Me and sometimes Hello Kitty 🐱💗
        </p>

        <div className="mb-6 flex justify-center">
          <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-lg ring-2 ring-pink-200">
            <Image
              src="/teddyreveal.png"
              alt="Hello Kitty Teddy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-pink-100 rounded-xl p-4 mb-6">
          <p className="text-sm text-pink-600">
            🧸 <span className="font-semibold">Fun fact:</span>
            This teddy gives unlimited hugs*
            <br />
            <span className="text-xs text-pink-500">
              *and may cause smiling, blushing & missing me, hahaa.. 😌
            </span>
          </p>
        </div>

        <button
          onClick={onBack}
          className={`w-full py-4 rounded-xl font-medium text-base ${accent}
          text-white shadow-lg shadow-pink-300/40 active:scale-95 transition-all`}
        >
          Back to Cuteness 🐱🎀
        </button>

        <p className="mt-4 text-xs text-pink-500">
          Made with hugs & hearts 💗
          <br />
          <span className="text-pink-600 font-semibold">
            Happy Teddy Day 🧸🎀
          </span>
        </p>
      </motion.div>
    </div>
  );
}
