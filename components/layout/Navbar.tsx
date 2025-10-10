"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils" // use utility for conditional classes

const links = [
    { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const sectionIds = links.map((l) => l.href.replace("#", ""))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/70 backdrop-blur transition-shadow",
        scrolled ? "border-b shadow-sm" : "border-b",
      )}
    >
      <div className="mx-auto flex container items-center justify-between px-4 py-3 md:py-4">
        <Link href="#" className="font-semibold italic tracking-tight text-xl">
          Manoj Sravan
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "page" : undefined}
              className={cn(
                "relative text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground",
                // underline animation
                "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-foreground after:transition-all",
                active === l.href && "text-foreground after:w-full",
              )}
            >
              {l.label}
            </a>
          ))}
          {/* <Button
            className="rounded-full px-5 shadow-[0_2px_0_var(--border)]"
            onClick={() => {
              const el = document.querySelector("#contact")
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            Get in touch
          </Button> */}
        </nav>

        <Button
          variant="ghost"
          className="size-9 p-0 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav className="fixed left-4 right-4 top-16 z-50 rounded-xl border bg-background p-3 shadow-lg">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                  active === l.href
                    ? "bg-muted text-foreground"
                    : "text-foreground/80 hover:bg-muted/60 hover:text-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex justify-end">
              <Button
                className="w-full rounded-full"
                onClick={() => {
                  setOpen(false)
                  const el = document.querySelector("#contact")
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
              >
                Get in touch
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
