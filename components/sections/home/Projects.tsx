import RevealAnimation from "@/components/animations/RevealAnimation"
import { projects } from "@/data/Projects"
import Image from "next/image"
import Link from "next/link"
 
 
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-20 md:py-24">
      <div className="mx-auto  max-w-7xl px-4">
        <RevealAnimation direction="left" delay={0.2}>
          <div className="text-center">
            <span className="inline-flex items-center text-primary rounded-full border bg-background px-3 py-1 text-xs font-semibold">
              ✺ MY WORKS
            </span>
            <h2 className="text-pretty mx-auto mt-5 max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">
              Featured Case Studies          </h2>
          </div>
        </RevealAnimation>


        <RevealAnimation direction="up" type="scale" delay={0.4}>
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
                  {/* <p className="mt-2 max-w-prose text-muted-foreground">{p.desc}</p> */}
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
        </RevealAnimation>
      </div>
    </section>
  )
}
