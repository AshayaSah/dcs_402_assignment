"use client";

import { useState } from "react";

export default function ProposalPage({ handleReveal }) {
  const [stage, setStage] = useState("intro");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Glass Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-rose-200/40 p-6 border border-rose-200/50 transition-all">
          {/* Top glow bar */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-1 bg-gradient-to-r from-pink-300 via-rose-400 to-purple-400 rounded-full" />
          </div>

          {stage === "intro" && (
            <>
              <h1 className="text-2xl font-light text-center mb-3 text-gray-800 leading-snug">
                Since you chose to continue…
                <span className="block text-rose-500 font-medium mt-1">
                  I want to be honest with you 💌
                </span>
              </h1>

              <p className="text-base text-center mb-6 text-gray-600 leading-relaxed">
                I didn’t send this just for fun. I sent it because my heart
                keeps choosing you — even when I try to stay quiet.
              </p>

              <div className="text-5xl text-center mb-6">🥹💗</div>

              <button
                onClick={() => setStage("confess")}
                className="w-full py-4 rounded-xl font-medium text-base
                           bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400
                           text-white shadow-lg shadow-rose-300/40
                           hover:shadow-xl hover:shadow-rose-400/50
                           active:scale-95 transition-all duration-200"
              >
                Let me say it properly…
              </button>
            </>
          )}

          {stage === "confess" && (
            <>
              <h1 className="text-2xl font-light text-center mb-3 text-gray-800 leading-snug">
                I don’t just like you…
                <span className="block text-rose-500 font-medium mt-1">
                  I choose you 🌷
                </span>
              </h1>

              <p className="text-base text-center mb-6 text-gray-600 leading-relaxed">
                I choose you in your silence. I choose you in your bad days. I
                choose you in the little moments you don’t even notice.
                <br />
                <br />
                And I don’t want to imagine my days without you.
              </p>

              <div className="text-5xl text-center mb-6">💞</div>

              <button
                onClick={() => setStage("question")}
                className="w-full py-4 rounded-xl font-medium text-base
                           bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400
                           text-white shadow-lg shadow-rose-300/40
                           hover:shadow-xl hover:shadow-rose-400/50
                           active:scale-95 transition-all duration-200"
              >
                So… can I ask you something?
              </button>
            </>
          )}

          {stage === "question" && (
            <>
              <h1 className="text-2xl font-light text-center mb-4 text-gray-800 leading-snug">
                Will you be my Valentine?
                <span className="block text-rose-500 font-medium mt-1">
                  Not just today — but from now on 💖
                </span>
              </h1>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setStage("yes")}
                  className="w-full py-4 rounded-xl font-medium text-base
                             bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400
                             text-white shadow-lg shadow-rose-300/40
                             hover:shadow-xl hover:shadow-rose-400/50
                             active:scale-95 transition-all duration-200"
                >
                  Yes… I’m yours 💗
                </button>

                <button
                  onClick={(e) => {
                    const button = e.currentTarget;

                    const btnWidth = button.offsetWidth;
                    const btnHeight = button.offsetHeight;

                    const padding = 16; // safe margin from edges

                    const maxX = window.innerWidth - btnWidth - padding;
                    const maxY = window.innerHeight - btnHeight - padding;

                    const x = Math.random() * maxX;
                    const y = Math.random() * maxY;

                    button.style.position = "fixed";
                    button.style.left = `${x}px`;
                    button.style.top = `${y}px`;
                    button.style.transition = "all 0.25s ease-out";
                  }}
                  className="w-full py-4 rounded-xl font-medium text-base
             bg-gray-100 text-gray-500 border border-gray-200
             hover:bg-gray-200 transition-all"
                >
                  No 😐
                </button>
              </div>
            </>
          )}

          {stage === "yes" && (
            <>
              <h1 className="text-3xl font-light text-center mb-4 text-gray-800 leading-snug">
                You said yes…
                <span className="block text-rose-500 font-medium mt-1">
                  and you just made me the happiest person alive 🥹💖
                </span>
              </h1>

              <p className="text-base text-center mb-6 text-gray-600 leading-relaxed">
                I promise to choose you every day — in the calm, the bad days,
                the distance, and the closeness. This is just the beginning of
                *us*.
              </p>

              <div className="text-6xl text-center mb-4">💑</div>
              <button
                onClick={handleReveal}
                className="w-full py-4 rounded-xl font-medium text-base
                     bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 
                     text-white shadow-lg shadow-rose-200/50
                     hover:shadow-xl hover:shadow-rose-300/50
                     active:scale-95
                     transition-all duration-200 ease-out"
              >
                Reveal The Surprise
              </button>
            </>
          )}

          {/* Bottom dots */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-300" />
              <div className="w-2 h-2 rounded-full bg-pink-300" />
              <div className="w-2 h-2 rounded-full bg-purple-300" />
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-sm text-gray-500 px-4">
          Made with nervous hands and a hopeful heart 🤍
        </p>
      </div>
    </div>
  );
}
