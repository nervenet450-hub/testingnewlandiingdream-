"use client"

import { useState } from "react"
import { CheckCircle2, LayoutGrid, ListTodo, Sparkles } from "lucide-react"

export type HeroProps = {
  onGlHoverChange?: (hovering: boolean) => void
}

function HeroProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--primary)]/15 via-transparent to-slate-200/40 blur-2xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white/90 shadow-[0_24px_80px_-12px_rgba(15,23,42,0.18)] backdrop-blur-md">
        <div className="flex items-center gap-2 border-b border-[var(--surface-border)] bg-[var(--surface-muted)] px-4 py-3">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 truncate text-xs font-medium text-slate-500">DreamScale Workspace</span>
        </div>
        <div className="flex min-h-[280px] sm:min-h-[320px]">
          <aside className="hidden w-14 shrink-0 flex-col items-center gap-3 border-r border-[var(--surface-border)] bg-[var(--surface-muted)] py-4 sm:flex">
            <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--primary)]/15 text-[var(--primary)]">
              <LayoutGrid className="size-4" aria-hidden />
            </div>
            <div className="flex size-9 items-center justify-center rounded-lg text-slate-500 hover:bg-white">
              <ListTodo className="size-4" aria-hidden />
            </div>
            <div className="mt-auto flex size-9 items-center justify-center rounded-lg text-slate-400">
              <Sparkles className="size-4" aria-hidden />
            </div>
          </aside>
          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Today</p>
                <p className="text-sm font-semibold text-slate-900">Venture roadmap</p>
              </div>
              <span className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                In progress
              </span>
            </div>
            <ul className="space-y-2">
              {[
                { label: "Validate positioning & offer", done: true },
                { label: "Set up competitor tracking", done: true },
                { label: "Ship first growth experiment", done: false },
              ].map((row) => (
                <li
                  key={row.label}
                  className="flex items-start gap-3 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-muted)]/50 px-3 py-2.5"
                >
                  <CheckCircle2
                    className={`mt-0.5 size-5 shrink-0 ${row.done ? "text-[var(--primary)]" : "text-slate-300"}`}
                    aria-hidden
                  />
                  <span className={`text-sm ${row.done ? "text-slate-600 line-through" : "font-medium text-slate-900"}`}>
                    {row.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              <div className="rounded-xl border border-dashed border-slate-200 bg-white p-3">
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">Signals</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">24</p>
              </div>
              <div className="rounded-xl border border-[var(--surface-border)] bg-white p-3 sm:col-span-2">
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">Next best step</p>
                <p className="mt-1 text-sm font-medium text-slate-800">Review AI suggestions for Q3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero({ onGlHoverChange }: HeroProps) {
  const [email, setEmail] = useState("")

  const setHover = (v: boolean) => {
    onGlHoverChange?.(v)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = email.trim() ? `?email=${encodeURIComponent(email.trim())}` : ""
    window.open(`https://app.dreamscale.co.za/login${q}`, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="relative border-b border-[var(--surface-border)] bg-[var(--background)]/30 pt-20 backdrop-blur-sm supports-[backdrop-filter]:bg-[var(--background)]/25 sm:pt-24">
      <div className="relative z-[1] container max-w-[1440px] pb-14 sm:pb-20 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
              All in one for founders
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              One workspace to plan, track, and grow your business.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              DreamScale brings AI guidance, competitor intelligence, and actionable workflows together, so you spend
              less time switching tools and more time executing.
            </p>

            <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <label htmlFor="hero-email" className="sr-only">
                Work email
              </label>
              <input
                id="hero-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onFocus={() => setHover(true)}
                onBlur={() => setHover(false)}
                className="h-12 w-full min-w-0 flex-1 rounded-lg border border-[var(--surface-border)] bg-white/90 px-4 text-sm text-slate-900 shadow-sm outline-none ring-[var(--primary)]/30 backdrop-blur-sm placeholder:text-slate-400 focus:ring-4"
              />
              <button
                type="submit"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onFocus={() => setHover(true)}
                onBlur={() => setHover(false)}
                className="h-12 shrink-0 rounded-lg bg-[var(--primary)] px-6 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm transition-opacity hover:opacity-90"
              >
                Get Started
              </button>
            </form>
            <p className="mt-3 text-sm text-slate-500">
              Free to start. No credit card required
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--surface-border)] pt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Trusted by teams who ship</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "venturequests", label: "VentureQuests" },
                  { id: "competitor-intelligence", label: "Competitor intelligence" },
                  { id: "bizora", label: "Bizora AI" },
                ].map((chip) => (
                  <span
                    key={chip.id}
                    className="rounded-md border border-[var(--surface-border)] bg-[var(--surface-muted)]/90 px-2.5 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm"
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <HeroProductMockup />
        </div>
      </div>
    </section>
  )
}
