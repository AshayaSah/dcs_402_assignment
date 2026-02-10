"use client";

import Image from "next/image";

export function TeddyDaySelectionPage({ onYes, onNo }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-pink-300/40 p-6 border border-pink-200">
          {/* Top bow bar */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 rounded-full" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-center mb-3 text-pink-600">
            Its already a Teddy Day 🧸🎀
            <span className="block text-pink-500 font-medium mt-1">
              And, Hi Ms. Sabunam, Some Virtual Hello Kittis For You😌
            </span>
          </h1>

          {/* Message */}
          <p className="text-base text-center mb-4 text-pink-500 leading-relaxed">
            They say teddy Kittis are great at giving hugs…
            <span className="block mt-1">
              but honestly? I think I could beat them in the competition 😤🧸
            </span>
            <span className="block mt-2 font-medium text-pink-600">
              Sooo… will you accept this Kitti? 😌💖
            </span>
          </p>

          {/* Image */}
          <div className="relative w-full aspect-square max-w-[260px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg ring-2 ring-pink-200">
            <Image
              src="/hellokitty.png"
              alt="Hello Kitty Teddy Day"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Emojis */}
          <div className="text-5xl text-center mb-6 animate-pulse">
            🎀🐱🧸💗
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={onNo}
              className="w-full py-4 rounded-xl font-medium text-base
                         bg-pink-100 text-pink-600
                         hover:bg-pink-200 hover:shadow-md
                         active:scale-95 transition-all duration-200"
            >
              I’m shy but curious 😳
            </button>

            <button
              onClick={onYes}
              className="w-full py-4 rounded-xl font-medium text-base
                         bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200
                         text-white shadow-lg shadow-pink-300/40
                         hover:shadow-xl hover:shadow-pink-300/50
                         active:scale-95 transition-all duration-200"
            >
              Yes, bring the teddy 🧸💖
            </button>
          </div>

          {/* Bottom dots */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-pink-400" />
              <div className="w-2 h-2 rounded-full bg-pink-300" />
              <div className="w-2 h-2 rounded-full bg-pink-200" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-4 text-sm text-pink-500 px-4">
          Warning: Accepting this teddy may cause excessive smiling 😌🎀
        </p>
      </div>
    </div>
  );
}
