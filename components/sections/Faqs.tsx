import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import RevealAnimation from "../animations/RevealAnimation"

const faqs = [
  {
    q: "What kind of projects do you usually take on?",
    a: "I mostly work with early-stage startups and small teams that need to turn an idea into a working product  fast. Whether it's an MVP, a marketing website, or a custom platform, I handle everything from backend setup to a polished frontend.",
  },
  
  {
    q: "What’s your typical project process?",
    a: "I start with a short call or chat to understand your goals and expectations. Once we’re aligned, I set clear milestones for design, development, testing, and delivery. You’ll always know what’s being worked on and when to expect updates.",
  },
  {
    q: "Do you work alone or with others?",
    a: "Mostly solo  I handle full-stack builds end-to-end. But I’m comfortable collaborating with in-house teams, designers, or other freelancers if your project requires it.",
  },
  {
    q: "What tools and tech do you use?",
    a: "I mainly work with the MERN stack  MongoDB, Express, React, and Node.js. I also use Tailwind CSS for styling, and tools like Railway, Render, or AWS for deployment. Everything is set up for performance and scalability.",
  },
  {
    q: "How long does a project usually take?",
    a: "Most MVPs or smaller web apps take around 4–6 weeks. Larger builds with dashboards, complex logic, or multiple integrations can go up to 8–10 weeks. I give a realistic timeline before we start.",
  },
  {
    q: "Do you provide maintenance or post-launch support?",
    a: "Yes, I do. After launch, I offer flexible support  you can reach out for bug fixes, updates, or feature additions on an hourly or monthly basis, depending on what works best for you.",
  },
  {
    q: "Can I see examples of your past work?",
    a: "Sure  I’ve worked with brands like Illumora and Commun.io on full-stack projects, from backend systems to high-quality frontends. You can check out more of my work on my GitHub or portfolio site.",
  },
  {
    q: "How do payments work?",
    a: "For new clients, I usually take a 30–40% upfront deposit, with the rest split across milestones. For ongoing work, I also offer hourly or retainer-based arrangements.",
  },
]


export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
       <RevealAnimation direction="left" delay={0.2}>
         <div className="text-center">
          <span className="inline-flex items-center rounded-full text-muted-foreground border bg-background px-3 py-2 text-xs font-semibold">
            ✺ PROCESS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Have questions?</h2>
         
        </div>
       </RevealAnimation>

        <RevealAnimation direction="up" type="scale" delay={0.4}>
          <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </RevealAnimation>
      </div>
    </section>
  )
}
