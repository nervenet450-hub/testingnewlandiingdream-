"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/sections/about-section"
import { VisionSection } from "@/components/sections/vision-section"
import { EcosystemSection } from "@/components/sections/ecosystem-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { DreamsSection } from "@/components/sections/dreams-section"
import { FooterSection } from "@/components/sections/footer-section"
import { WebglWaveShell } from "@/components/gl/wave-shell"

/** WebGL must not run during SSR — it can hang the Node render and leave the tab loading forever. */
const GLBackground = dynamic(
  () => import("@/components/gl").then((mod) => ({ default: mod.GL })),
  { ssr: false, loading: () => <WebglWaveShell /> },
)

export default function Home() {
  const [glHover, setGlHover] = useState(false)

  return (
    <>
      <GLBackground hovering={glHover} />
      <div className="relative z-10 w-full max-w-[100vw] overflow-x-hidden">
        <Hero onGlHoverChange={setGlHover} />

        <AboutSection />

        <VisionSection />

        <EcosystemSection />

        <SocialProofSection />

        <DreamsSection />

        <FooterSection />
      </div>
    </>
  )
}
