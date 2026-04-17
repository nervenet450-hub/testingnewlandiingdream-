"use client"

import { motion } from "framer-motion"
import { Award, Lightbulb, Target } from "lucide-react"

const visions = [
  {
    title: "Innovation",
    description:
      "At DreamScale, innovation isn't just about technology, it's about imagination. We believe in pushing boundaries and turning bold ideas into scalable realities. Our mission is to transform the way businesses operate through creative solutions.",
    icon: Lightbulb,
  },
  {
    title: "Excellence",
    description:
      "Delivering quality, reliability, and innovation in everything we do. Our work is driven by creativity, precision, and a deep commitment to bringing our clients' visions to life with uncompromising standards.",
    icon: Award,
  },
  {
    title: "Impact",
    description:
      "DreamScale isn't about short term wins, it's about creating lasting change. From empowering businesses to reshaping industries, we're here to leave a mark that endures, helping people and organizations scale their dreams into a future that matters.",
    icon: Target,
  },
]

export function VisionSection() {
  return (
    <section id="vision" className="scroll-mt-20 border-b border-[var(--surface-border)] bg-[var(--background)]/32 py-16 backdrop-blur-sm sm:py-20">
      <div className="container max-w-[1440px]">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our vision</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
            Principles that guide how we build—and how we show up for founders every day.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {visions.map((vision, index) => {
            const Icon = vision.icon
            return (
              <motion.article
                key={vision.title}
                className="flex flex-col rounded-xl border border-[var(--surface-border)] bg-white/82 p-8 shadow-sm backdrop-blur-md transition-shadow hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Icon className="size-6" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{vision.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{vision.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
