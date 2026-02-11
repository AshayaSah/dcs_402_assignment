"use client";

import Image from "next/image";

export function PromiseDaySelectionPage({ onYes, onNo }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-rose-300/30 p-6 border border-rose-200">
          {/* Soft top line */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-[2px] bg-gradient-to-r from-rose-300 via-pink-300 to-rose-200 rounded-full" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-center mb-3 text-rose-600">
            It’s Promise Day 🤍
            <span className="block text-pink-500 font-medium mt-1">
              And this one… isn’t for the screen.
            </span>
          </h1>

          {/* Message */}
          <p className="text-base text-center mb-5 text-rose-500 leading-relaxed">
            Some things deserve eye contact, not typing.
            <span className="block mt-2">This is just a small pause…</span>
            <span className="block mt-2 font-medium text-rose-600">
              so I can ask you something properly, face to face.
            </span>
          </p>

          {/* Image */}
          <div className="relative w-full aspect-square max-w-[240px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg ring-1 ring-rose-200">
            <Image
              src="/proposephoto.jpeg" // swap with a soft romantic image
              alt="Promise Day"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Subtle emoji line */}
          <div className="text-4xl text-center mb-6">🤍✨🌸</div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={onNo}
              className="w-full py-4 rounded-xl font-medium text-base
                         bg-rose-50 text-rose-500
                         hover:bg-rose-100 hover:shadow-md
                         active:scale-95 transition-all duration-200"
            >
              I’m listening…
            </button>

            <button
              onClick={onYes}
              className="w-full py-4 rounded-xl font-medium text-base
                         bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300
                         text-white shadow-lg shadow-rose-300/40
                         hover:shadow-xl hover:shadow-rose-300/50
                         active:scale-95 transition-all duration-200"
            >
              Let’s do this properly 🤍
            </button>
          </div>

          {/* Bottom dots */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-400" />
              <div className="w-2 h-2 rounded-full bg-pink-300" />
              <div className="w-2 h-2 rounded-full bg-rose-200" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-4 text-sm text-rose-500 px-4">
          Not everything beautiful should be sent… some things should be said 🤍
        </p>
      </div>
    </div>
  );
}
