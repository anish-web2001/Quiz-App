import React from 'react'
import quizJSON from '../Api/quizJSON.json'

const ResultComponents = ({ answers }) => {
  const totalQuestions = quizJSON.length

  const total_correct = answers.length > 0 ? answers.filter((cur) => {
    const quiz = quizJSON.find((c => c.id == cur.id))
    return quiz && quiz.correct_option === cur.answer
  }) : []

  const total_wrong = answers.length > 0 ? answers.filter((cur) => {
    const quiz = quizJSON.find((c => c.id == cur.id))
    return quiz && quiz.correct_option !== cur.answer
  }) : []

  const percent = totalQuestions > 0
    ? (total_correct.length / totalQuestions) * 100
    : 0

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b18] px-4 py-10 text-white">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />

      <main className="relative z-10 mx-auto w-full max-w-4xl">
        <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8 md:p-10">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-xl">
                ✦
              </div>
              <div>
                <p className="font-bold tracking-wide">QUIZVERSE</p>
                <p className="text-xs text-slate-400">Quiz summary</p>
              </div>
            </div>

            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-slate-300">
              Challenge completed
            </span>
          </div>

          {/* Score */}
          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-cyan-500/10 px-5 py-9 text-center sm:px-8">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-3xl">
              🏆
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-200">
              Your results are in
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              {percent >= 70
                ? 'Excellent work!'
                : percent >= 40
                  ? 'Good effort!'
                  : 'Keep learning!'}
            </h1>

            <p className="mt-3 text-slate-400">
              Every attempt is a chance to learn something new.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
              <div>
                <p className="text-sm text-slate-400">Your score</p>
                <p className="mt-1 text-4xl font-bold">
                  {total_correct.length}
                  <span className="text-xl text-slate-500">/{totalQuestions}</span>
                </p>
              </div>

              <div className="hidden h-12 w-px bg-white/10 sm:block" />

              <div>
                <p className="text-sm text-slate-400">Accuracy</p>
                <p className="mt-1 text-4xl font-bold text-cyan-300">
                  {percent.toFixed(2)}%
                </p>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-md text-left">
              <div className="mb-2 flex justify-between text-xs text-slate-400">
                <span>Overall performance</span>
                <span>{percent.toFixed(0)}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-300 transition-all duration-700"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </section>

          {/* Statistics */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-300/15 bg-emerald-400/[0.07] p-6 transition hover:bg-emerald-400/10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">Correct answers</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-xl text-emerald-300">
                  ✓
                </span>
              </div>
              <p className="mt-4 text-4xl font-bold text-emerald-300">
                {total_correct.length}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Questions answered correctly
              </p>
            </div>

            <div className="rounded-2xl border border-rose-300/15 bg-rose-400/[0.07] p-6 transition hover:bg-rose-400/10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">Wrong answers</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-400/10 text-xl text-rose-300">
                  ✕
                </span>
              </div>
              <p className="mt-4 text-4xl font-bold text-rose-300">
                {total_wrong.length}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Questions answered incorrectly
              </p>
            </div>
          </div>

          {/* Restart */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-violet-300 sm:w-auto"
            >
              <span>↻</span> Restart Quiz
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Keep challenging yourself. Progress comes with practice.
          </p>
        </div>
      </main>
    </div>
  )
}

export default ResultComponents
