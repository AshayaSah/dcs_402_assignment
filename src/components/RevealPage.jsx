"use client";

import Image from "next/image";

export function RevealPage({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-rose-100/50 p-6 border border-rose-100/50 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-full"></div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Finally!!!! 🥹💖
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Happy Propose Day My Love... You deserve everything.
        </p>

        <div className="mb-6 flex justify-center">
          <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-lg ring-2 ring-rose-200/50">
            <Image
              src="/propose.png"
              alt="Thank you illustration"
              fill
              className="object-cover"
              sizes="224px"
            />
          </div>
        </div>

        <button
          onClick={onBack}
          className="w-full py-4 rounded-xl font-medium text-base
                   bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 
                   text-white shadow-lg shadow-rose-200/50
                   hover:shadow-xl hover:shadow-rose-300/50
                   active:scale-95
                   transition-all duration-200 ease-out"
        >
          Back to You 😌💗
        </button>

        <p className="mt-4 text-xs text-gray-500">
          Thank you for EVERYTHING 🙏
        </p>
      </div>
    </div>
  );
}
