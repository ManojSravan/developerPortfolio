import RevealAnimation from "@/components/animations/RevealAnimation"
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
    title: "Refactoring & Scaling a Company Portfolio Website",
    desc: "This project was one of my earliest experiences as a backend developer, where I worked on an already-built company portfolio website. While the site was functional, it lacked scalability, modularity, and secure admin-level control.",
    href: "https://medium.com/@workwithmanojsravan/case-study-refactoring-scaling-a-company-portfolio-website-bf0ced199913",
    img: {
      // Using high-quality placeholder; can be swapped to your Source URL on request.
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Refactoring & Scaling a Company Portfolio Website",
      width: 920,
      height: 620,
    },
  },
  {
    title: "Creating a Scalable and Interactive LMS System",
    desc: "Our team built a scalable Learning Management System (LMS) from the ground up, designed to support students, trainers, and admins with interactive learning, efficient content management, and a robust backend built for performance and growth.",
    href: "https://medium.com/@workwithmanojsravan/case-study-building-a-scalable-learning-management-system-lms-from-scratch-6e60ca8222a9",
    img: {
      src: "https://images.unsplash.com/photo-1616593772450-6220bc809944?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1191",
      alt: "Creating a Scalable and Interactive LMS System",
      width: 920,
      height: 620,
    },
  },
]

export default function page() {
  return (
    <section id="projects" className="scroll-mt-16 py-20 md:py-24">
      <div className="mx-auto container px-6">
        <RevealAnimation direction="left" delay={0.2}>
          <div className="text-center">
            
            <h2 className="text-pretty mx-auto mt-0 max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">
             Case Studies & Projects </h2>
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
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-foreground/90 hover:underline hover:text-primary"
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
