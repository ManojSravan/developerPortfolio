import { Github, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex container flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-full border text-sm font-bold">M</div>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ManojSravan. All rights reserved.
          </span>
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a aria-label="LinkedIn" href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="size-4" />
          </a>
          <a aria-label="Instagram" href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="size-4" />
          </a>
          <a aria-label="GitHub" href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
