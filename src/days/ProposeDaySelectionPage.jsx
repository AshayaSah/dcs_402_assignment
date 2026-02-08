"use client";

import Image from "next/image";

export function ProposeDaySelectionPage({ onYes, onNo }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-rose-200/40 p-6 border border-rose-200/50">
          {/* Top glow bar */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-1 bg-gradient-to-r from-pink-300 via-rose-400 to-purple-400 rounded-full" />
          </div>

          {/* Main heading */}
          <h1 className="text-2xl font-light text-center mb-3 text-gray-800 leading-snug">
            You clicked this link…
            <span className="block text-rose-500 font-medium mt-1">
              so maybe there’s something here 🥹
            </span>
          </h1>

          {/* Romantic message */}
          <p className="text-base text-center mb-4 text-gray-600 leading-relaxed">
            And if there *is* something… then I think I should take the chance
            I’ve been holding in my heart.
            <span className="block mt-2 text-rose-500 font-medium">
              So, ma’am… would you like to continue with me? 💗
            </span>
          </p>

          {/* Image */}
          <div className="relative w-full aspect-square max-w-[260px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/catsavage.png"
              alt="Romantic moment"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Emoji */}
          <div className="text-5xl text-center mb-6 animate-pulse">💞</div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={onNo}
              className="w-full py-4 rounded-xl font-medium text-base
                         bg-gray-100 text-gray-700 
                         hover:bg-gray-200 hover:shadow-md
                         active:scale-95 transition-all duration-200"
            >
              Maybe not… 🥺
            </button>

            <button
              onClick={onYes}
              className="w-full py-4 rounded-xl font-medium text-base
                         bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400
                         text-white shadow-lg shadow-rose-300/40
                         hover:shadow-xl hover:shadow-rose-400/50
                         active:scale-95 transition-all duration-200"
            >
              Yes, let’s continue 💖
            </button>
          </div>

          {/* Bottom dots */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-300" />
              <div className="w-2 h-2 rounded-full bg-pink-300" />
              <div className="w-2 h-2 rounded-full bg-purple-300" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-4 text-sm text-gray-500 px-4">
          I promise I’m being serious this time… just in a soft way 🤍
        </p>
      </div>
    </div>
  );
}
