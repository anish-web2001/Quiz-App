import React from 'react'

const WelcomeComponents = ({ setShowScreen }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b18] px-4 py-12 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[110px]" />

      <main className="relative z-10 mx-auto w-full max-w-4xl">
        <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-10 md:p-14">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-300/30 bg-violet-400/15 text-xl">
                ✦
              </div>
              <div>
                <p className="font-semibold tracking-wide">QUIZVERSE</p>
                <p className="text-xs text-slate-400">Knowledge starts here</p>
              </div>
            </div>

            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              ● Ready to play
            </span>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
            <section>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
                <span>✧</span> Challenge your mind
              </p>

              <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Welcome to
                <span className="mt-2 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  QuizVerse.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
                Test your knowledge, trust your instincts, and discover how
                much you really know. Your next challenge starts here.
              </p>

              <button
                onClick={() => setShowScreen('quiz')}
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-900/40 transition duration-300 hover:-translate-y-1 hover:from-violet-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-violet-300 sm:w-auto"
              >
                Start the Quiz
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
                <span>✦ Interactive questions</span>
                <span>✓ Instant results</span>
              </div>
            </section>

            <div className="relative mx-auto w-full max-w-xs">
              <div className="absolute inset-5 rounded-full bg-violet-500/20 blur-3xl" />

              <div className="relative rotate-[-4deg] rounded-[2rem] border border-white/20 bg-white/[0.08] p-5 shadow-xl backdrop-blur-xl transition duration-500 hover:rotate-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Your next challenge</span>
                  <span className="text-xl text-amber-300">✦</span>
                </div>

                <div className="my-8 flex h-40 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-cyan-500/10">
                  <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 text-5xl shadow-lg backdrop-blur-xl">
                    🧠
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-3 w-3/4 rounded-full bg-white/20" />
                  <div className="h-3 w-1/2 rounded-full bg-white/10" />

                  <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] p-3">
                    <span className="text-sm text-slate-300">Ready to begin?</span>
                    <span className="text-lg text-cyan-300">↗</span>
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 top-12 rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 shadow-lg backdrop-blur-xl">
                <span className="text-sm font-medium text-cyan-200">Think smart ✨</span>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-5 text-center text-xs text-slate-500">
            Made for curious minds · One question at a time
          </div>
        </div>
      </main>
    </div>
  )
}

export default WelcomeComponents
