 import { Github, Twitter, Dribbble } from "lucide-react"

 

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex container flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-full border text-sm font-bold">M</div>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Meelo. All rights reserved.
          </span>
        </div>

        {/* Nav */}
        {/* <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav> */}

        {/* Social */}
        <div className="flex items-center gap-3">
          <a aria-label="Twitter" href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="size-4" />
          </a>
          <a aria-label="GitHub" href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="size-4" />
          </a>
          <a aria-label="Dribbble" href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Dribbble className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
