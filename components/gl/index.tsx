"use client"

import { Canvas } from "@react-three/fiber"
import { Particles } from "./particles"
import { Component, type ErrorInfo, type ReactNode, useEffect, useState } from "react"

/** Defaults previously tuned via Leva — kept static so the page loads fast and never waits on the controls panel. */
/** ~15% softer than previous tuning (user request: slightly calmer waves). */
const PARTICLE_PRESETS = {
  speed: 1.05,
  noiseScale: 0.55,
  noiseIntensity: 0.527,
  timeScale: 1,
  focus: 3.45,
  aperture: 1.785,
  pointSize: 13.6,
  opacity: 0.85,
  planeScale: 10.0,
  size: 512 as const,
  useManualTime: false,
  manualTime: 0,
}

function WaveFallback() {
  return <div className="wave-fallback absolute inset-0" aria-hidden />
}

function canCreateWebGLContext(): boolean {
  if (typeof document === "undefined") return false
  try {
    const canvas = document.createElement("canvas")
    const gl =
      canvas.getContext("webgl2", {
        failIfMajorPerformanceCaveat: false,
        powerPreference: "default",
      }) ??
      canvas.getContext("webgl", {
        failIfMajorPerformanceCaveat: false,
        powerPreference: "default",
      })
    return Boolean(gl)
  } catch {
    return false
  }
}

type BoundaryProps = { children: ReactNode; onError: () => void }

class WebGLCanvasErrorBoundary extends Component<BoundaryProps, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true }
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    this.props.onError()
  }

  render() {
    if (this.state.failed) return null
    return this.props.children
  }
}

export const GL = ({ hovering }: { hovering: boolean }) => {
  /** false until client check passes — never mount R3F Canvas when WebGL is disabled (sandbox / GPU off). */
  const [mountCanvas, setMountCanvas] = useState(false)

  useEffect(() => {
    setMountCanvas(canCreateWebGLContext())
  }, [])

  const {
    speed,
    focus,
    aperture,
    size,
    noiseScale,
    noiseIntensity,
    timeScale,
    pointSize,
    opacity,
    planeScale,
    useManualTime,
    manualTime,
  } = PARTICLE_PRESETS

  return (
    <div id="webgl" aria-hidden>
      <WaveFallback />
      {mountCanvas && (
        <div className="absolute inset-0 z-[1]">
          <WebGLCanvasErrorBoundary onError={() => setMountCanvas(false)}>
            <Canvas
              key="webgl-canvas"
              camera={{
                position: [1.2629783123314589, 2.664606471394044, -1.8178993743288914],
                fov: 50,
                near: 0.01,
                far: 300,
              }}
              gl={{
                antialias: true,
                alpha: false,
                powerPreference: "default",
                preserveDrawingBuffer: false,
              }}
              style={{ display: "block", width: "100%", height: "100%" }}
              onCreated={(state) => {
                const glCtx = state.gl.getContext()
                if (glCtx) {
                  const canvas = glCtx.canvas as HTMLCanvasElement
                  canvas.addEventListener("webglcontextlost", (e) => {
                    e.preventDefault()
                    setMountCanvas(false)
                  })
                }
              }}
            >
              <color attach="background" args={["#edf6ff"]} />
              <Particles
                speed={speed}
                aperture={aperture}
                focus={focus}
                size={size}
                noiseScale={noiseScale}
                noiseIntensity={noiseIntensity}
                timeScale={timeScale}
                pointSize={pointSize}
                opacity={opacity}
                planeScale={planeScale}
                useManualTime={useManualTime}
                manualTime={manualTime}
                introspect={hovering}
              />
            </Canvas>
          </WebGLCanvasErrorBoundary>
        </div>
      )}
    </div>
  )
}
