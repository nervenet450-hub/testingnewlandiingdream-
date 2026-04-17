import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

const navItems = [
  { label: "Product", href: "/#ecosystem" },
  { label: "Platform", href: "/#about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/blog" },
]

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--surface-border)] bg-[var(--background)]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--background)]/80">
      <div className="container flex h-14 sm:h-16 max-w-[1440px] items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[var(--surface-muted)] hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://app.dreamscale.co.za/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 px-2 py-2"
          >
            Log in
          </a>
          <a
            href="https://app.dreamscale.co.za/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm transition-opacity hover:opacity-90"
          >
            Get Started
          </a>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  )
}
