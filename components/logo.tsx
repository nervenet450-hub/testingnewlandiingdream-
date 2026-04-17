import type React from "react"
import Image from "next/image"

export const Logo = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5" {...props}>
      <Image
        src="/Logo.png"
        alt="DreamScale Logo"
        width={80}
        height={80}
        className="size-8 sm:size-9 object-contain"
        priority
      />
      <span className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
        DreamScale
      </span>
    </div>
  )
}
