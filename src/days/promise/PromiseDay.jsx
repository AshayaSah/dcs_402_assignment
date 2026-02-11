"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromiseDayMain({ handleReveal }) {
  const [stage, setStage] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);

  const questions = [
    {
      id: 1,
      question: "When I look at you… what do you think I feel? 🤍",
      options: [
        { text: "Comfort", subtitle: "the calm kind" },
        { text: "Safety", subtitle: "where I belong" },
        { text: "Warmth", subtitle: "without trying" },
        { text: "All of it", subtitle: "the right answer 😌" },
      ],
    },
    {
      id: 2,
      question: "What makes a promise special? ✨",
      options: [
        { text: "Words", subtitle: "they matter" },
        { text: "Intent", subtitle: "even more" },
        { text: "Consistency", subtitle: "that’s love" },
        { text: "Looking you in the eyes", subtitle: "exactly 🤍" },
      ],
    },
    {
      id: 3,
      question: "Where should a real promise be made? 🌸",
      options: [
        { text: "Over text", subtitle: "never" },
        { text: "On a screen", subtitle: "not enough" },
        { text: "Face to face", subtitle: "perfect" },
        { text: "With my hand in yours", subtitle: "always 😌" },
      ],
      isSpecial: true,
    },
  ];

  const handleAnswer = (questionId, answer) => {
    setSelected(answer);
    setAnswers({ ...answers, [questionId]: answer });

    setTimeout(() => {
      setSelected(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((q) => q + 1);
      } else {
        setStage("reveal");
      }
    }, 700);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-white overflow-y-auto">
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <AnimatePresence mode="wait">
          {/* INTRO */}
          {stage === "intro" && (
            <motion.div
              key="intro"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="text-7xl mb-4">🤍🌸✨</div>
              <h1 className="text-4xl font-bold text-rose-600 mb-3">
                Happy Promise Day
              </h1>
              <p className="text-rose-500 mb-6 text-lg leading-relaxed">
                This one isn’t loud.
                <br />
                It’s meant to be felt… not sent.
              </p>
              <button
                onClick={() => setStage("quiz")}
                className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300
                           text-white px-7 py-3 rounded-full text-lg font-semibold
                           shadow-lg shadow-rose-300/40 active:scale-95"
              >
                Let’s Begin 🤍
              </button>
            </motion.div>
          )}

          {/* QUIZ */}
          {stage === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="w-full max-w-md"
            >
              <div className="bg-white/90 rounded-3xl p-6 shadow-xl border border-rose-200">
                <div className="mb-4 text-rose-500 font-semibold text-sm">
                  Question {currentQuestion + 1} of {questions.length}
                </div>

                <h2 className="text-xl font-semibold text-rose-600 mb-5">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, idx) => {
                    const isSelected = selected === option.text;
                    return (
                      <motion.button
                        key={idx}
                        whileTap={{ scale: 0.96 }}
                        onClick={() =>
                          handleAnswer(
                            questions[currentQuestion].id,
                            option.text,
                          )
                        }
                        className={`w-full text-left p-4 rounded-xl border transition-all
                          ${
                            isSelected
                              ? "bg-rose-300 border-rose-400 text-white"
                              : "bg-rose-50 border-rose-200 text-rose-700"
                          }`}
                      >
                        <div className="font-medium">{option.text}</div>
                        <div className="text-sm opacity-80">
                          {option.subtitle}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* REVEAL */}
          {stage === "reveal" && (
            <motion.div
              key="reveal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="text-7xl mb-4">🤍✨</div>
              <h2 className="text-3xl font-bold text-rose-600 mb-3">
                You’re ready for this
              </h2>
              <p className="text-rose-500 mb-6 leading-relaxed">
                Not everything meaningful belongs on a screen.
                <br />
                This is just the beginning…
              </p>
              <button
                onClick={handleReveal}
                className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300
                           text-white px-7 py-4 rounded-full text-lg font-semibold
                           shadow-lg shadow-rose-300/40 active:scale-95"
              >
                Continue 🤍
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
