import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'

function C() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Sign-in is not connected yet. Configure an authentication provider to continue.')
  }

  return (
    <>
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
        <section className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left shadow-2xl sm:p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-xl font-bold text-slate-950">
              C
            </div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">Welcome back</h1>
            <p className="text-sm text-slate-400">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                name="remember"
                className="checkbox checkbox-sm rounded border-slate-600 [--chkbg:#fbbf24] [--chkfg:#0f172a]"
              />
              Remember me
            </label>

            <button
              type="submit"
              className="btn w-full border-0 bg-amber-400 text-slate-950 hover:bg-amber-300"
            >
              Sign in
            </button>

            {message && (
              <p role="status" className="text-center text-sm text-amber-200">
                {message}
              </p>
            )}
          </form>

          <p className="mt-7 text-center text-sm text-slate-400">
            Don&apos;t have an account?{' '}
            <a href="/" className="font-semibold text-amber-300 transition hover:text-amber-200">
              Create one
            </a>
          </p>
        </section>
      </main>
    </>
  )
}

export default C
