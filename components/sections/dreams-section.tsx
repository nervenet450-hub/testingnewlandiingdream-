"use client"

import { useEffect, useRef, useState } from "react"

export function DreamsSection() {
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

  const pillars = [
    {
      title: "Inspiration",
      description:
        "DreamScale begins with a spark. A vision that challenges limits, awakens possibility, and dares to ask \"what if?\" We exist to ignite that spark in dreamers and innovators, reminding them that the future isn't just something we wait for, it's something we create.",
    },
    {
      title: "Creation",
      description:
        "Ideas only live when they are built. DreamScale provides the tools, clarity, and foundation to bring visions to life. From the bold sketch on paper to the systems that power industries, creation is where imagination turns into impact.",
    },
    {
      title: "Elevation",
      description:
        "DreamScale is not about small wins, it's about lifting visions higher than expected. True success isn't just growth, it's transformation. To elevate is to rise together, to reach new heights where ambition meets possibility.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="dreams"
      className="scroll-mt-20 border-b border-[var(--surface-border)] bg-[var(--surface-muted)]/38 py-16 backdrop-blur-sm sm:py-20"
    >
      <div className="container max-w-[1440px]">
        <div
          className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Where dreams find their wings
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            The ideas that keep us building—and the outcomes we chase with you.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`rounded-xl border border-[var(--surface-border)] bg-white/85 p-8 shadow-sm backdrop-blur-md transition-all duration-700 hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120 + 120}ms` }}
            >
              <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
