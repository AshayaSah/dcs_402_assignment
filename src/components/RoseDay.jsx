"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RoseDayGame({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  });

  const next = () => setStep((s) => s + 1);

  const selectAnswer = (question, value) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
    setTimeout(next, 300);
  };

  const buttonClass =
    "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 " +
    "text-white font-semibold px-8 py-5 rounded-full shadow-lg hover:shadow-xl " +
    "transition-all transform hover:scale-105 active:scale-98 text-lg " +
    "flex items-center justify-center gap-3 min-w-[240px] md:min-w-[280px]";

  const optionButtonClass =
    "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 " +
    "text-white font-semibold px-6 py-6 rounded-full shadow-lg hover:shadow-xl " +
    "transition-all transform hover:scale-105 active:scale-98 text-base md:text-lg " +
    "flex flex-col items-center justify-center gap-3 min-h-[140px] w-full";

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-red-100 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-6 md:p-12 max-w-3xl w-full text-center relative overflow-hidden border border-rose-100"
      >
        {step === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-rose-700 mb-6">
              Welcome to the "Win Your Rose" Game 🌹
            </h1>
            <p className="text-gray-800 text-lg mb-10 leading-relaxed">
              Okay listen… this ain't easy. You gotta be careful to{" "}
              <em>earn</em> the rose.
              <br />
              Answer a few questions honestly, and maybe.. just maybe.. you'll
              get your surprise 😌
            </p>

            <button onClick={next} className={buttonClass}>
              I'm Ready! Let's Go 🎯
            </button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <span className="inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">
                Question 1 of 4
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              Would you let me play futsal with my friends if you want to get
              the surprise at the end?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <button
                onClick={() => selectAnswer("q1", "Yes")}
                className={optionButtonClass}
              >
                <span className="text-4xl">⚽</span>
                <span>Yes, go play!</span>
              </button>
              <button
                onClick={() => selectAnswer("q1", "No")}
                className={optionButtonClass}
              >
                <span className="text-4xl">🚫</span>
                <span>No way</span>
              </button>
              <button
                onClick={() => selectAnswer("q1", "Of course")}
                className={optionButtonClass}
              >
                <span className="text-4xl">💚</span>
                <span>Of course! Have fun</span>
              </button>
              <button
                onClick={() =>
                  selectAnswer("q1", "Rather not take the surprise")
                }
                className={optionButtonClass}
              >
                <span className="text-4xl">😏</span>
                <span>Rather not take the surprise</span>
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <span className="inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">
                Question 2 of 4
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              Friday night vibes — which would you choose?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <button
                onClick={() => selectAnswer("q2", "Splitsvilla")}
                className={optionButtonClass}
              >
                <span className="text-4xl">📺</span>
                <span>Splitsvilla</span>
              </button>
              <button
                onClick={() => selectAnswer("q2", "Netflix with you")}
                className={optionButtonClass}
              >
                <span className="text-4xl">🍿</span>
                <span>Netflix with you</span>
              </button>
              <button
                onClick={() => selectAnswer("q2", "Sleep")}
                className={optionButtonClass}
              >
                <span className="text-4xl">😴</span>
                <span>Sleep (I'm exhausted)</span>
              </button>
              <button
                onClick={() => selectAnswer("q2", "Stargazing together")}
                className={optionButtonClass}
              >
                <span className="text-4xl">✨</span>
                <span>Stargazing together</span>
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <span className="inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">
                Question 3 of 4
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              Who am I to you? (Choose wisely 👀)
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
              <button
                onClick={() => selectAnswer("q3", "Boy")}
                className={optionButtonClass}
              >
                <span className="text-4xl">👦</span>
                <span>Boy</span>
              </button>
              <button
                onClick={() => selectAnswer("q3", "Man")}
                className={optionButtonClass}
              >
                <span className="text-4xl">💪</span>
                <span>Man</span>
              </button>
              <button
                onClick={() => selectAnswer("q3", "Sir")}
                className={optionButtonClass}
              >
                <span className="text-4xl">🎩</span>
                <span>Sir</span>
              </button>
              <button
                onClick={() => selectAnswer("q3", "Dude")}
                className={optionButtonClass}
              >
                <span className="text-4xl">🤙</span>
                <span>Dude</span>
              </button>
              <button
                onClick={() => selectAnswer("q3", "Mr. Respected Sir")}
                className={`${optionButtonClass} md:col-span-2`}
              >
                <span className="text-4xl">🙇‍♀️</span>
                <span>Mr. Respected Sir</span>
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <span className="inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">
                Final Question
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              If I could give you anything right now, what would make you
              happiest?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <button
                onClick={() => selectAnswer("q4", "Your time")}
                className={optionButtonClass}
              >
                <span className="text-4xl">⏰</span>
                <span>Your time</span>
              </button>
              <button
                onClick={() => selectAnswer("q4", "A long hug")}
                className={optionButtonClass}
              >
                <span className="text-4xl">🤗</span>
                <span>A long hug</span>
              </button>
              <button
                onClick={() => selectAnswer("q4", "Your smile")}
                className={optionButtonClass}
              >
                <span className="text-4xl">😊</span>
                <span>Your smile</span>
              </button>
              <button
                onClick={() => selectAnswer("q4", "All of the above")}
                className={optionButtonClass}
              >
                <span className="text-4xl">❤️</span>
                <span>All of the above</span>
              </button>
            </div>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <Image
                src="/rose2.png"
                alt="Rose"
                width={280}
                height={280}
                className="drop-shadow-2xl"
              />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-700 mb-6">
              Congrats… You Won My Heart Again 😌🌹
            </h2>

            <div className="text-gray-800 text-lg leading-relaxed mb-8 space-y-4">
              <p>
                Finally! You really thought I'd just give a rose without any
                drama? Please. I had to make it a whole mission, obviously.
              </p>

              <p>
                Lets start with a formality. yeah, they say roses stand for
                love, and this one stands for *us*. For every small moment,
                every laugh, every memory, and even for the miles between us
                right now.
              </p>

              <p>
                I hate that you’re far from me. Not in a dramatic way — just in
                that quiet, everyday way where I miss you when I should be
                seeing you instead. But even with the distance, you still feel
                close to my heart. Always.
              </p>

              <p>
                I’m not always good at saying things right. Sometimes I joke too
                much or act normal when inside I’m feeling a lot. But the truth
                is… you’re always on my mind, even when I’m pretending I’m not
                thinking.
              </p>

              <p>
                But truth is… you kinda ruined me. In the best way possible. You
                made me want one person only. You made my chaotic brain quiet.
                You made me believe in "us" when I barely believed in "me."
              </p>

              <p className="font-medium text-rose-600">
                So yeah, here's your rose. Virtual now, real one coming soon
                (maybe huhu 😤).
                <br />
                And yeah… you're stuck with me. Sorry not sorry.
              </p>
            </div>

            <p className="text-rose-600 font-semibold text-xl mb-2">
              Yours, annoyingly and sincerely ❤️
            </p>
            <p className="text-gray-700 font-medium text-lg mb-6">
              — Mr. Ashaya Sir
            </p>

            <p className="text-sm italic text-gray-600 border-t border-rose-200 pt-4">
              P.S. You still owe me a hug. Don't forget. A long one. 🫂
            </p>
          </motion.div>
        )}

        {/* Floating hearts and roses */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-rose-300/60 text-2xl"
              initial={{ y: 200, opacity: 0 }}
              animate={{
                y: -200,
                opacity: [0, 1, 0],
                x: Math.random() * 200 - 100,
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: "-10%",
              }}
            >
              {i % 8 === 0 ? "🌹" : "♥"}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
