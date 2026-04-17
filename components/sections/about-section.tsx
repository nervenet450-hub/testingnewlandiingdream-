"use client"

import { motion } from "framer-motion"
import { Heart, Link2, Sparkles, TrendingUp } from "lucide-react"

const values = [
  {
    title: "We stand for dreamers",
    description:
      "Those who refuse to settle, who see possibilities where others see limits. For us, every project is an opportunity to push boundaries, scale visions, and turn bold ideas into reality.",
    icon: Sparkles,
  },
  {
    title: "We stand for excellence",
    description:
      "Delivering quality, reliability, and innovation in everything we do. Our work is driven by creativity, precision, and a deep commitment to bringing our clients' visions to life.",
    icon: Heart,
  },
  {
    title: "We stand for connection",
    description:
      "Building meaningful relationships with the people we serve. Our approach isn't just about products or services; it's about listening, understanding, and creating solutions that truly fit people's needs.",
    icon: Link2,
  },
  {
    title: "We stand for growth",
    description:
      "Not only for ourselves, but for every client, partner, and individual we work with. Growth is at the heart of our mission: scaling dreams, scaling businesses, and scaling futures.",
    icon: TrendingUp,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-[var(--surface-border)] bg-[var(--surface-muted)]/38 py-16 backdrop-blur-sm sm:py-20">
      <div className="container max-w-[1440px]">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What we do</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              Running a business is hard. Most entrepreneurs waste time figuring out what to do next, flying blind on
              competitors, and piecing together tools that don&apos;t talk to each other.
            </p>
            <p>
              DreamScale fixes that. We give you a clear path, real intelligence, and the tools to actually move, all in
              one place.
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.article
                key={value.title}
                className="flex flex-col rounded-xl border border-[var(--surface-border)] bg-white/85 p-6 shadow-sm backdrop-blur-md transition-shadow hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
