"use client"

import { cn } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export type MobileNavItem = { label: string; href: string }

interface MobileMenuProps {
  className?: string
  items: MobileNavItem[]
}

export const MobileMenu = ({ className, items }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex lg:hidden items-center justify-center rounded-md p-2 text-slate-900 hover:bg-[var(--surface-muted)] transition-colors",
            className,
          )}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div
          data-overlay="true"
          className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-[2px] lg:hidden"
          aria-hidden
        />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (e.target instanceof HTMLElement && e.target.dataset.overlay !== "true") {
              e.preventDefault()
            }
          }}
          className="fixed left-0 right-0 top-14 z-50 border-b border-[var(--surface-border)] bg-[var(--background)] shadow-lg lg:hidden"
        >
          <Dialog.Title className="sr-only">Navigation</Dialog.Title>

          <nav className="container max-w-[1440px] flex flex-col py-4" aria-label="Mobile">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-[var(--surface-muted)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-[var(--surface-border)] pt-4">
              <a
                href="https://app.dreamscale.co.za/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-600 hover:bg-[var(--surface-muted)]"
              >
                Log in
              </a>
              <a
                href="https://app.dreamscale.co.za/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-4 py-3 text-base font-semibold text-[var(--primary-foreground)]"
              >
                Get Started
              </a>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
