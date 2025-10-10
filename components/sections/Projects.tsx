import Image from "next/image"
import Link from "next/link"

type Project = {
  title: string
  desc: string
  href: string
  img: { src: string; alt: string; width: number; height: number }
}

const projects: Project[] = [
  {
    title: "Snowlake Social Media Website",
    desc: "A sleek, product‑driven site for a social media platform, built with clean UI and scalable CMS.",
    href: "#",
    img: {
      // Using high-quality placeholder; can be swapped to your Source URL on request.
      src: "https://images.unsplash.com/photo-1755327897338-5e78428b0d13?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Snowlake case study screenshot",
      width: 920,
      height: 620,
    },
  },
  {
    title: "Meeko Company Networking Website",
    desc: "A modern networking site connecting professionals, designed for seamless collaboration.",
    href: "#",
    img: {
      src: "https://images.unsplash.com/photo-1755564801871-2a7faaada14a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Meeko company website screenshot",
      width: 920,
      height: 620,
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-semibold">
            ✺ MY WORKS
          </span>
          <h2 className="text-pretty mx-auto mt-5 max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">
Featured Projects          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group">
              <figure className="rounded-none border-2 bg-card  transition-shadow group-hover:shadow-sm">
                <Image
                  src={p.img.src || "/placeholder.svg"}
                  alt={p.img.alt}
                  width={p.img.width}
                  height={p.img.height}
                  className="h-auto w-full rounded-none object-cover"
                  priority={false}
                />
              </figure>
              <div className="mt-6">
                <h3 className="text-xl font-semibold md:text-2xl">{p.title}</h3>
                <p className="mt-2 max-w-prose text-muted-foreground">{p.desc}</p>
                <Link
                  href={p.href}
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-foreground/90 hover:underline"
                  aria-label={`View case study for ${p.title}`}
                >
                  View Case Study
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
