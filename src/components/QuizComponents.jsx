import React, { useState } from 'react'
import QuizJSON from '../Api/quizJSON.json'

const QuizComponents = ({ setShowScreen, answers, setAnswers }) => {
  const [index, setIndex] = useState(0)

  const quiz = QuizJSON[index]
  const existAnswer = answers.find((cur) => cur.id == quiz.id)

  const addAnswer = (id, answer) => {
    const existAnswer = answers.find((cur) => cur.id == id)

    if (existAnswer) {
      const new_answers = answers.map((cur) => {
        if (cur.id == id) {
          return { ...cur, answer: answer }
        }
        return cur
      })

      setAnswers(new_answers)
      return
    }

    setAnswers([
      ...answers,
      { id, answer }
    ])
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b18] px-4 py-10 text-white">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />

      <main className="relative z-10 mx-auto w-full max-w-3xl">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-xl">
              ✦
            </div>
            <div>
              <h1 className="font-bold tracking-wide">QUIZVERSE</h1>
              <p className="text-xs text-slate-400">Knowledge challenge</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-right backdrop-blur-xl">
            <p className="text-xs text-slate-400">QUESTION</p>
            <p className="font-semibold">
              {index + 1}
              <span className="text-slate-500"> / {QuizJSON.length}</span>
            </p>
          </div>
        </header>

        {/* Quiz card */}
        <section className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8 md:p-10">
          {/* Progress */}
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-slate-300">Your progress</span>
              <span className="font-medium text-violet-200">
                {Math.round(((index + 1) / QuizJSON.length) * 100)}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-300 transition-all duration-500"
                style={{
                  width: `${((index + 1) / QuizJSON.length) * 100}%`
                }}
              />
            </div>
          </div>

          <div className="mb-6 flex items-center gap-2 text-sm font-medium text-violet-200">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-400/10">
              ✧
            </span>
            Question {index + 1}
          </div>

          <h2 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
            {quiz.id}. {quiz.title}
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Select the answer you think is correct.
          </p>

          {/* Answer options */}
          <div className="mt-8 flex flex-col gap-3">
            {quiz.options.map((cur, i) => {
              const isSelected = existAnswer && existAnswer.answer == i

              return (
                <label
                  key={i}
                  htmlFor={`option-${quiz.id}-${i}`}
                  className={`group flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition duration-200 sm:p-5 ${
                    isSelected
                      ? 'border-violet-400/70 bg-violet-500/15 shadow-lg shadow-violet-950/20'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.07]'
                  }`}
                >
                  <input
                    onChange={() => addAnswer(quiz.id, i)}
                    checked={isSelected ? true : false}
                    type="radio"
                    name={`answer-${quiz.id}`}
                    id={`option-${quiz.id}-${i}`}
                    value={cur}
                    className="sr-only"
                  />

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-sm font-semibold transition ${
                      isSelected
                        ? 'border-violet-300/50 bg-violet-500 text-white'
                        : 'border-white/10 bg-white/5 text-slate-300 group-hover:border-white/20'
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>

                  <span className={`flex-1 text-sm leading-6 sm:text-base ${
                    isSelected ? 'font-medium text-white' : 'text-slate-300'
                  }`}>
                    {cur}
                  </span>

                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    isSelected
                      ? 'border-violet-300 bg-violet-400 text-xs text-white'
                      : 'border-white/20'
                  }`}>
                    {isSelected ? '✓' : ''}
                  </span>
                </label>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="mt-9 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => setIndex(index - 1)}
              disabled={index == 0}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3 font-medium text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <span>←</span> Previous
            </button>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setIndex(index + 1)}
                disabled={index >= QuizJSON.length - 1}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/15 disabled:hidden"
              >
                Next question <span>→</span>
              </button>

              {QuizJSON.length - 1 === index && (
                <button
                  onClick={() => setShowScreen('result')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3 font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-violet-300"
                >
                  Submit quiz <span>✓</span>
                </button>
              )}
            </div>
          </div>
        </section>

        <p className="mt-5 text-center text-xs text-slate-500">
          Take your time · Choose your best answer
        </p>
      </main>
    </div>
  )
}

export default QuizComponents
