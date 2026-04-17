"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CornerDownLeft } from "lucide-react"
import { cn } from "@/lib/utils"

/** Radar + signal motif: track the market, central “you”, competitor nodes, live bars */
function CompetitorIntelligenceVisual() {
  return (
    <svg viewBox="0 0 320 168" className="w-full h-36 sm:h-40 max-h-[200px]" role="img" aria-hidden>
      <defs>
        <linearGradient id="ec-ci-grad-hub" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="ec-ci-grad-scan" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="55%" stopColor="#60a5fa" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="ec-ci-grad-bar" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="ec-ci-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* subtle grid */}
      <g opacity="0.35" stroke="#94a3b8" strokeWidth="0.5">
        {[32, 64, 96, 128, 160, 192, 224, 256, 288].map((x) => (
          <line key={`v${x}`} x1={x} y1="12" x2={x} y2="156" />
        ))}
        {[28, 56, 84, 112, 140].map((y) => (
          <line key={`h${y}`} x1="16" y1={y} x2="304" y2={y} />
        ))}
      </g>

      {/* radar sweep */}
      <g transform="translate(158 78)">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite" />
          <path d="M 0 0 L 0 -72 A 72 72 0 0 1 50.9 -50.9 Z" fill="url(#ec-ci-grad-scan)" opacity="0.9" />
        </g>
        <circle r="72" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 6" />
        <circle r="48" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 8" />
        <circle r="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
      </g>

      {/* center hub (you) */}
      <circle cx="158" cy="78" r="14" fill="url(#ec-ci-grad-hub)" filter="url(#ec-ci-glow)">
        <animate attributeName="r" values="13;15;13" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="158" cy="78" r="22" fill="none" stroke="#3b82f6" strokeOpacity="0.35" strokeWidth="1.5">
        <animate attributeName="r" values="20;28;20" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.5;0.15;0.5" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* competitor nodes + data lines */}
      {[
        { cx: 52, cy: 36, delay: "0s" },
        { cx: 268, cy: 42, delay: "0.4s" },
        { cx: 44, cy: 118, delay: "0.8s" },
        { cx: 276, cy: 112, delay: "1.2s" },
      ].map((n, i) => (
        <g key={i}>
          <line x1="158" y1="78" x2={n.cx} y2={n.cy} stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="6 4" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" values="0;-40" dur="2.5s" begin={n.delay} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0.85;0.35" dur="2.5s" begin={n.delay} repeatCount="indefinite" />
          </line>
          <rect x={n.cx - 14} y={n.cy - 10} width="28" height="20" rx="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="1">
            <animate attributeName="stroke" values="#64748b;#3b82f6;#64748b" dur="3s" begin={n.delay} repeatCount="indefinite" />
          </rect>
          <circle cx={n.cx} cy={n.cy} r="3" fill="#475569">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" begin={n.delay} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* mini comparative bars */}
      <g transform="translate(200 118)">
        {[0, 1, 2, 3].map((i) => {
          const h = 18 + i * 7
          const x = i * 14
          return (
            <rect key={i} x={x} y={28 - h} width="9" height={h} rx="2" fill="url(#ec-ci-grad-bar)" opacity={0.45 + i * 0.12}>
              <animate attributeName="height" values={`${h * 0.6};${h};${h * 0.6}`} dur="2.4s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
              <animate attributeName="y" values={`${28 - h * 0.6};${28 - h};${28 - h * 0.6}`} dur="2.4s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            </rect>
          )
        })}
        <text x="28" y="42" textAnchor="middle" className="fill-slate-500" style={{ fontSize: "7px", fontFamily: "ui-monospace, monospace" }}>
          signal
        </text>
      </g>
    </svg>
  )
}

/** Quest path: stepped roadmap, progress dot, checkpoints toward goal */
function VentureQuestVisual() {
  return (
    <svg viewBox="0 0 320 168" className="w-full h-36 sm:h-40 max-h-[200px]" role="img" aria-hidden>
      <defs>
        <linearGradient id="ec-vq-grad-path" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="ec-vq-grad-node" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <path id="ec-vq-motion-path" d="M 36 112 C 72 48 112 48 148 88 S 220 120 268 40" fill="none" />
      </defs>

      {/* soft trail under path */}
      <use href="#ec-vq-motion-path" stroke="#e2e8f0" strokeWidth="10" strokeLinecap="round" />

      {/* animated dash on journey line */}
      <path
        d="M 36 112 C 72 48 112 48 148 88 S 220 120 268 40"
        fill="none"
        stroke="url(#ec-vq-grad-path)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="32 240"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-272" dur="4s" repeatCount="indefinite" />
      </path>

      {/* quest stops */}
      {[
        { cx: 36, cy: 112, label: "1" },
        { cx: 120, cy: 64, label: "2" },
        { cx: 188, cy: 100, label: "3" },
        { cx: 268, cy: 40, label: "4" },
      ].map((s, i) => (
        <g key={s.label}>
          <circle cx={s.cx} cy={s.cy} r="16" fill="#fff" stroke="#cbd5e1" strokeWidth="2">
            <animate attributeName="stroke" values="#cbd5e1;#22c55e;#cbd5e1" dur="4s" begin={`${i * 0.9}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={s.cx} cy={s.cy} r="11" fill={i === 3 ? "url(#ec-vq-grad-node)" : "#f8fafc"} stroke={i === 3 ? "#16a34a" : "#94a3b8"} strokeWidth="1.5">
            {i < 3 && (
              <animate attributeName="fill" values="#f8fafc;#dcfce7;#f8fafc" dur="4s" begin={`${i * 0.9}s`} repeatCount="indefinite" />
            )}
          </circle>
          <text
            x={s.cx}
            y={s.cy + 4}
            textAnchor="middle"
            className="fill-slate-600"
            style={{ fontSize: "11px", fontWeight: 700, fontFamily: "ui-sans-serif, system-ui" }}
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* runner dot along path (above milestones so it stays visible) */}
      <circle r="6" fill="#0ea5e9" stroke="#fff" strokeWidth="2">
        <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
          <mpath href="#ec-vq-motion-path" xlinkHref="#ec-vq-motion-path" />
        </animateMotion>
      </circle>

      {/* goal flag */}
      <g transform="translate(272 24)">
        <path d="M 0 0 L 0 28" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
        <path d="M 0 4 L 22 12 L 0 20 Z" fill="#f97316">
          <animate attributeName="opacity" values="0.85;1;0.85" dur="2s" repeatCount="indefinite" />
        </path>
      </g>

      <text x="160" y="156" textAnchor="middle" className="fill-slate-500" style={{ fontSize: "8px", fontFamily: "ui-monospace, monospace" }}>
        idea → milestones → launch
      </text>
    </svg>
  )
}

const BIZORA_TURNS = [
  {
    prompt: "What should I prioritize this quarter?",
    reply: "Stack-rank by impact, effort, and cash risk—then cut one thing.",
  },
  {
    prompt: "How do I read my cash runway?",
    reply: "Burn × weeks of buffer. Flag fixed costs you can delay first.",
  },
  {
    prompt: "Draft a simple GTM plan for a new offer.",
    reply: "Audience → promise → channel → proof → first 7-day experiment.",
  },
  {
    prompt: "Why did churn spike last month?",
    reply: "Segment by cohort + onboarding step; look for support ticket spikes.",
  },
  {
    prompt: "Turn this meeting into action items.",
    reply: "Owner, due date, success metric—max five bullets, no vague verbs.",
  },
  {
    prompt: "Help me price a new tier without racing to the bottom.",
    reply: "Anchor on outcomes, add a middle option, keep a premium cap.",
  },
  {
    prompt: "What metrics matter before I scale ads?",
    reply: "CAC payback, gross margin, and repeat purchase—not vanity clicks.",
  },
  {
    prompt: "Write a one-paragraph investor update.",
    reply: "Wins, numbers, risks, asks—honest, short, and specific.",
  },
  {
    prompt: "How do I hire my first salesperson?",
    reply: "Define ICP + script first; hire someone who can run your playbook.",
  },
  {
    prompt: "Summarize what changed in our KPIs this week.",
    reply: "Revenue, pipeline, activation—what moved, what didn’t, and why.",
  },
]

function pickNextTurnIndex(prev: number, len: number) {
  if (len <= 1) return 0
  let next = prev
  for (let i = 0; i < 8 && next === prev; i++) {
    next = Math.floor(Math.random() * len)
  }
  return next
}

/** Gemini-style: short user prompt + Enter, then crossfade into Bizora reply; loops. */
function shortenPrompt(text: string, maxChars = 76) {
  const t = text.trim()
  if (t.length <= maxChars) return t
  const cut = t.slice(0, maxChars)
  const lastSpace = cut.lastIndexOf(" ")
  const base = lastSpace > 40 ? cut.slice(0, lastSpace) : cut
  return `${base}…`
}

function BizoraTypingDots() {
  return (
    <div className="flex min-h-[2.25rem] items-center gap-1.5 px-0.5" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-1.5 rounded-full bg-sky-500/75"
          animate={{ opacity: [0.28, 1, 0.28], y: [0, -3, 0] }}
          transition={{ duration: 0.85, repeat: Number.POSITIVE_INFINITY, delay: i * 0.14, ease: "easeInOut" }}
        />
      ))}
    </div>
  )
}

const BIZORA_CHAR_MS = 28
/** Pause after the last character before Enter highlights (don’t rush). */
const BIZORA_AFTER_TYPING_MS = 900
const BIZORA_ENTER_PRESS_MS = 400
const BIZORA_ANSWER_READ_MS = 3000

function BizoraAIVisual() {
  const [turnIndex, setTurnIndex] = useState(0)
  const [phase, setPhase] = useState<"user" | "reply">("user")
  const [enterPressed, setEnterPressed] = useState(false)
  const [replyRevealed, setReplyRevealed] = useState(false)
  const [userCharCount, setUserCharCount] = useState(0)

  const turn = BIZORA_TURNS[turnIndex]
  const promptShort = shortenPrompt(turn.prompt)
  const userTyped = promptShort.slice(0, userCharCount)
  const userTypingDone = phase === "user" && userCharCount >= promptShort.length && promptShort.length > 0

  /** Typewriter for user prompt — paired with the same `turn` as the Bizora reply. */
  useEffect(() => {
    if (phase !== "user") return
    setUserCharCount(0)
    const full = shortenPrompt(BIZORA_TURNS[turnIndex].prompt)
    if (!full.length) return
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      if (i >= full.length) {
        setUserCharCount(full.length)
        window.clearInterval(id)
        return
      }
      setUserCharCount(i)
    }, BIZORA_CHAR_MS)
    return () => window.clearInterval(id)
  }, [phase, turnIndex])

  /** Only after the full prompt is typed: brief pause → Enter press → switch to reply. */
  useEffect(() => {
    if (phase !== "user" || !userTypingDone) return
    const t1 = window.setTimeout(() => setEnterPressed(true), BIZORA_AFTER_TYPING_MS)
    const t2 = window.setTimeout(() => {
      setEnterPressed(false)
      setPhase("reply")
    }, BIZORA_AFTER_TYPING_MS + BIZORA_ENTER_PRESS_MS)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [phase, userTypingDone, turnIndex])

  useEffect(() => {
    if (phase !== "reply") {
      setReplyRevealed(false)
      return
    }
    setReplyRevealed(false)
    const id = window.setTimeout(() => setReplyRevealed(true), 900)
    return () => window.clearTimeout(id)
  }, [phase, turnIndex])

  /** After the answer is visible, hold read time then next paired prompt. */
  useEffect(() => {
    if (phase !== "reply" || !replyRevealed) return
    const id = window.setTimeout(() => {
      setTurnIndex((i) => pickNextTurnIndex(i, BIZORA_TURNS.length))
      setPhase("user")
    }, BIZORA_ANSWER_READ_MS)
    return () => window.clearTimeout(id)
  }, [phase, replyRevealed, turnIndex])

  return (
    <div
      className="h-36 w-full max-h-[200px] overflow-hidden rounded-xl border border-slate-200/90 shadow-sm sm:h-40"
      role="img"
      aria-hidden
    >
      <AnimatePresence mode="wait" initial={false}>
        {phase === "user" ? (
          <motion.div
            key={`user-${turnIndex}`}
            className="flex h-36 flex-col bg-white p-2 sm:h-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="flex min-h-0 flex-1 flex-col rounded-lg border border-slate-200 bg-white px-2 py-1.5">
              <div className="min-h-0 flex-1 overflow-hidden">
                <p className="text-[11px] font-medium leading-snug text-slate-900 sm:text-xs">
                  {userTyped}
                  {!userTypingDone && (
                    <motion.span
                      className="inline-block w-px translate-y-px bg-slate-900"
                      style={{ height: "0.85em" }}
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.85, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      aria-hidden
                    />
                  )}
                </p>
              </div>
              <span className="mt-1 shrink-0 self-end text-[9px] font-semibold tracking-tight text-slate-600/50 sm:text-[10px]">
                Bizora AI
              </span>
            </div>
            <div className="flex shrink-0 justify-end pt-1.5">
              <motion.span
                className={cn(
                  "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-semibold shadow-sm transition-[opacity,colors,transform]",
                  !userTypingDone && "opacity-40",
                  enterPressed
                    ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)] opacity-100"
                    : "border-slate-200 bg-white text-slate-600",
                )}
                animate={enterPressed ? { scale: 0.94 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 520, damping: 28 }}
              >
                <CornerDownLeft className="size-3 opacity-80" aria-hidden />
                Enter
              </motion.span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`reply-${turnIndex}`}
            className="flex h-36 flex-col bg-sky-100/85 p-2 sm:h-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="flex min-h-0 flex-1 flex-col rounded-lg border border-sky-200/70 bg-sky-50/90 px-2 py-1.5">
              <div className="min-h-0 flex-1 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  {!replyRevealed ? (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BizoraTypingDots />
                    </motion.div>
                  ) : (
                    <motion.p
                      key="answer"
                      className="text-[11px] leading-snug text-slate-800 sm:text-xs"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      {turn.reply}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <span className="mt-1 shrink-0 self-end text-[9px] font-semibold tracking-tight text-sky-900/45 sm:text-[10px]">
                Bizora AI
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const products = [
    {
      title: "Competitor Intelligence",
      description:
        "Know exactly what your competitors are doing before they do it to you. Track their moves, spot gaps in the market, and make smarter decisions with real-time data.",
      icon: <CompetitorIntelligenceVisual />,
    },
    {
      title: "VentureQuests",
      description:
        "Your AI powered business guide. VentureQuests breaks down your goals into clear, actionable steps, so you always know what to do next to grow your business.",
      icon: <VentureQuestVisual />,
    },
    {
      title: "Bizora AI",
      description:
        "Your business copilot for strategy, planning, and numbers. Ask in plain language, get clear next steps, drafts you can ship, and explanations tied to how you actually run things.",
      icon: <BizoraAIVisual />,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="scroll-mt-20 border-b border-[var(--surface-border)] bg-[var(--surface-muted)]/38 py-16 backdrop-blur-sm sm:py-20"
    >
      <div className="container max-w-[1440px]">
        <div
          className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to move faster</h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Competitor intelligence, Bizora AI, and guided steps in one workspace.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`flex flex-col rounded-2xl border border-[var(--surface-border)] bg-white/85 p-6 shadow-sm backdrop-blur-md transition-all duration-700 hover:shadow-md sm:p-8 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120 + 120}ms` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-xl border border-[var(--surface-border)] bg-white/75 p-4 backdrop-blur-sm">
                {product.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
