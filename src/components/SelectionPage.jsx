"use client";

import Image from "next/image";

export function SelectionPage({ onYes, onNo }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Main card with gentle shadow */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-rose-100/50 p-6 border border-rose-100/50">
          {/* Decorative top element */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 rounded-full"></div>
          </div>

          {/* Header text - mobile optimized */}
          <h1 className="text-2xl font-light text-center mb-2 text-gray-800 tracking-tight leading-tight">
            Do you want to see something? Not the same as yesterday but a
            different one
          </h1>

          {/* Subheading */}
          <p className="text-base text-center mb-2 text-rose-600/90 font-medium">
            How can I forget the day... Haha not in real but VIRTUALLY
          </p>

          {/* Image container - mobile optimized */}
          <div className="relative w-full aspect-square max-w-[280px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/catwithrose.png"
              alt="A heartfelt moment"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Emoji with subtle animation */}
          <div className="text-5xl text-center mb-6 animate-pulse">😶‍🌫️</div>

          {/* Buttons - stacked for mobile */}
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={onNo}
              className="group relative w-full py-4 rounded-xl font-medium text-base
                       bg-gray-100 text-gray-700 
                       hover:bg-gray-200 hover:shadow-md
                       active:scale-95
                       transition-all duration-200 ease-out"
            >
              <span className="flex items-center justify-center gap-2">
                No 😔
              </span>
            </button>

            <button
              onClick={onYes}
              className="group relative w-full py-4 rounded-xl font-medium text-base
                       bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 
                       text-white shadow-lg shadow-rose-200/50
                       hover:shadow-xl hover:shadow-rose-300/50
                       active:scale-95
                       transition-all duration-200 ease-out"
            >
              <span className="flex items-center justify-center gap-2">
                Yes 😌
              </span>
            </button>
          </div>

          {/* Bottom decorative element */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-300"></div>
              <div className="w-2 h-2 rounded-full bg-pink-300"></div>
              <div className="w-2 h-2 rounded-full bg-purple-300"></div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center mt-4 text-sm text-gray-500/80 px-4">
          I really hope you'll bear with my bad jokes... 💕
        </p>
      </div>
    </div>
  );
}
