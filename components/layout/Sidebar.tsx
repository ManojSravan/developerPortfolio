 'use client'
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  sections: string[]
  activeSection: number
}

export default function Sidebar({ sections, activeSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index])
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border md:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-sm font-semibold tracking-widest uppercase">
            MINIMAU
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-muted rounded-lg transition-colors">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="border-t border-border bg-background">
            <div className="flex flex-col px-4 py-4 gap-2">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(index)}
                  className={`text-left px-3 py-2 rounded-lg transition-colors text-sm uppercase tracking-wide ${
                    activeSection === index
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-48 bg-background border-r border-border p-8 justify-between">
        <div>
          <Link href="/" className="text-sm font-semibold tracking-widest uppercase mb-12 block">
            MINIMAU
          </Link>

          <nav className="flex flex-col gap-6">
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(index)}
                className={`text-left text-sm uppercase tracking-wide transition-colors ${
                  activeSection === index ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>

        {/* Footer info */}
        <div className="text-xs text-muted-foreground space-y-2">
          <p>+012 345 6789</p>
          <p>info@example.com</p>
          <div className="flex gap-3 pt-4">
            <a href="#" className="hover:text-foreground transition-colors">
              f
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              t
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              in
            </a>
          </div>
          <p className="pt-4 text-xs">© 2025 MINIMAU. ALL RIGHTS RESERVED</p>
        </div>
      </aside>
    </>
  )
}
