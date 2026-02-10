"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TeddyDayHelloKitty({ handleReveal }) {
  const [stage, setStage] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [mounted, setMounted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "If I were a Hello Kitty… what would I be? 🎀",
      options: [
        { text: "Soft & Cute", subtitle: "obviously not😌" },
        { text: "Tiny & Angry", subtitle: "no chance" },
        { text: "Tall, Dark & Handsome", subtitle: "why not" },
        { text: "Big & Fluffy", subtitle: "that’s more like it" },
        { text: "Lost in a shop", subtitle: "never 😤" },
      ],
    },
    {
      id: 2,
      question: "Why am I giving you a teddy today? 🧸",
      options: [
        { text: "Because it's Teddy Day", subtitle: "basic answer" },
        { text: "Because you’re cute", subtitle: "true 😌" },
        { text: "Because I like you", subtitle: "very true" },
        { text: "Because Hello Kitty told me to", subtitle: "she did 🎀" },
      ],
    },
    {
      id: 3,
      question: "Now… who’s your favorite teddy? 🐱🧸",
      options: [
        { text: "Pink Hello Kitty", subtitle: "cute choice" },
        { text: "White Hello Kitty", subtitle: "classic" },
        { text: "Big Hello Kitty", subtitle: "hug size 😌" },
        { text: "Sir Ashaya Kitty", subtitle: "correct answer 😏" },
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
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setStage("teddy");
      }
    }, 700);
  };

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-white overflow-y-auto">
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <AnimatePresence mode="wait">
          {/* INTRO */}
          {stage === "intro" && (
            <motion.div
              key="intro"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="text-8xl mb-4">🎀🐱🧸</div>
              <h1 className="text-4xl font-bold text-pink-600 mb-3">
                Happy Teddy Day!
              </h1>
              <p className="text-pink-500 mb-6 text-lg">
                Before I give you a real kitty…
                <br />
                Let’s play a cute game 😌
              </p>
              <button
                onClick={() => setStage("quiz")}
                className="bg-pink-400 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg active:scale-95"
              >
                Let’s Go 🎮
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
              <div className="bg-white/90 rounded-3xl p-6 shadow-xl border-2 border-pink-200">
                <div className="mb-4 text-pink-500 font-semibold text-sm">
                  Question {currentQuestion + 1} of {questions.length}
                </div>

                <h2 className="text-xl font-bold text-pink-600 mb-5">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, idx) => {
                    const isSelected = selected === option.text;
                    return (
                      <motion.button
                        key={idx}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          handleAnswer(
                            questions[currentQuestion].id,
                            option.text,
                          )
                        }
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all
                          ${
                            isSelected
                              ? "bg-pink-300 border-pink-400 text-white"
                              : "bg-pink-50 border-pink-200 text-pink-700"
                          }`}
                      >
                        <div className="font-semibold">{option.text}</div>
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

          {/* TEDDY REVEAL */}
          {stage === "teddy" && (
            <motion.div
              key="teddy"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <div className="text-8xl mb-4">🧸💗</div>
              <h2 className="text-3xl font-bold text-pink-600 mb-3">
                You did great 😌
              </h2>
              <p className="text-pink-500 mb-6">
                Now here’s your Hello Kitty Teddy surprise 🎀
              </p>
              <button
                onClick={handleReveal}
                className="bg-gradient-to-r from-pink-400 to-pink-300 text-white px-6 py-4 rounded-full text-lg font-semibold shadow-lg active:scale-95"
              >
                Open My Teddy 🎁
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
