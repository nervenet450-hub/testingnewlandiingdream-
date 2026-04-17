/** Minimal markup for `next/dynamic` loading — avoids importing Three.js. */
export function WebglWaveShell() {
  return (
    <div id="webgl" aria-hidden>
      <div className="wave-fallback absolute inset-0" aria-hidden />
    </div>
  )
}
