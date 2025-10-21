"use client"

import { useState } from "react"
import Link from "next/link"
import RevealAnimation from "@/components/animations/RevealAnimation"
 
export default function ExperienceTimeline() {
  const [showAll, setShowAll] = useState(false)

  const items = [
    {
      period: "JUNE 2025 – PRESENT",
      title: "Software Developer at Communn.io",
      body: "Working on full-stack web applications using the MERN stack. Focused on building stable, scalable, and maintainable features for startup projects.",
      color: "ring-[var(--accent-1)]",
    },
    {
      period: "DEC 2023 – PRESENT",
      title: "Freelance Full-Stack Developer",
      body: "Collaborating with startups and small teams to design and develop MVPs. Delivering practical, production-ready solutions using React, Node.js, and PostgreSQL.",
      color: "ring-[var(--accent-2)]",
    },
    {
      period: "APR 2025 – SEP 2025",
      title: "Web Developer at Illumora",
      body: "Built a responsive portfolio platform with React.js and Tailwind CSS. Focused on performance, accessibility, and a clean design system.",
      color: "ring-[var(--accent-1)]",
    },
    {
      period: "MAY 2024 – JAN 2025",
      title: "Software Engineer at QubicGen Software Solutions",
      body: "Developed backend systems using Node.js and Express, along with PostgreSQL databases. Worked on API integrations and improving overall performance.",
      color: "ring-[var(--accent-2)]",
    },
    {
      period: "JUL 2024 – SEP 2024",
      title: "Backend Developer at Melody Mocktail",
      body: "Handled API testing, authentication, and integration tasks. Helped improve the reliability and efficiency of backend services.",
      color: "ring-[var(--accent-1)]",
    },
    {
      period: "MAY 2023 – SEP 2023",
      title: "Full-Stack Java Developer Trainee at JSpiders Hebbal",
      body: "Learned Java, SQL, and backend development fundamentals. Built small projects to strengthen understanding of web technologies.",
      color: "ring-[var(--accent-2)]",
    },
  ]

  const visibleItems = showAll ? items : items.slice(0, 2)

  return (
    <section id="experience" className="scroll-mt-16 bg-[var(--brand-surface)] py-20 md:py-24">
      <div className="mx-auto grid container grid-cols-1 gap-12 px-4 md:grid-cols-2">
        {/* Left Side */}
       <RevealAnimation direction="left" delay={0.2}>
         <div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">My Experience</h2>
          <p className="mt-4 max-w-prose text-muted-foreground">
            I’ve had the pleasure of working with companies across various industries. Always eager to take on new and
            challenging projects.
          </p>
          <Link
            href="https://www.linkedin.com/in/manojsravan/"
            className="mt-6 inline-flex rounded-full border-2 px-6 py-3 font-semibold hover:bg-accent transition-colors"
          >
            More About Me
          </Link>
        </div>
       </RevealAnimation>

        {/* Timeline */}
    <RevealAnimation direction="right" delay={0.4}>
          <ol className="relative grid gap-10">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-border md:left-3" aria-hidden />
          {visibleItems.map((it, idx) => (
            <li key={idx} className="relative pl-8">
              <span
                className={`absolute left-0 top-1.5 size-4 rounded-full ring-2 ${it.color} bg-background`}
                aria-hidden
              />
              <p className="text-xs font-semibold tracking-wide text-foreground/70">{it.period}</p>
              <h3 className="mt-1 text-lg font-semibold md:text-xl">{it.title}</h3>
              <p className="mt-2 text-muted-foreground">{it.body}</p>
            </li>
          ))}

          {/* Read More / Show Less Button */}
          <div className="pl-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-2 text-sm font-semibold   hover:underline"
            >
              {showAll ? "Show Less" : "Read More"}
            </button>
          </div>
        </ol>
    </RevealAnimation>
      </div>
    </section>
  )
}
