"use client"

import { motion } from "framer-motion"

export function SocialProofSection() {
  return (
    <section
      id="social-proof"
      className="scroll-mt-20 border-b border-[var(--surface-border)] bg-[var(--background)]/28 py-16 backdrop-blur-sm sm:py-20"
      aria-labelledby="social-proof-heading"
    >
      <div className="container max-w-[900px]">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Loved by early teams</p>
          <h2 id="social-proof-heading" className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What early users are saying
          </h2>
        </motion.div>

        <motion.figure
          className="rounded-2xl border border-[var(--surface-border)] bg-white/82 p-8 shadow-sm backdrop-blur-md sm:p-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <blockquote>
            <p className="text-center text-lg font-medium leading-relaxed text-slate-900 sm:text-xl">
              &ldquo;DreamScale gave me a clear roadmap when I had no idea where to start.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-6 text-center text-sm font-medium text-slate-600">Early user</figcaption>
        </motion.figure>

        <p className="mt-6 text-center text-sm text-slate-500">More stories coming soon</p>
      </div>
    </section>
  )
}
