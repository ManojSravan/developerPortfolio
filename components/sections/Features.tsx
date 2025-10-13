import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FlaskConical, Lightbulb, Rocket } from "lucide-react"
import RevealAnimation from "../animations/RevealAnimation"

const steps = [
  {
    no: "01.",
    title: "Research & Ideation",
    desc: "Understanding your brand, audience, and goals to spark ideas that shape the foundation.",
    icon: Lightbulb,
    tint: "bg-[var(--accent-1)]/40",
  },
  {
    no: "02.",
    title: "Concept Development",
    desc: "Transforming insights into clear concepts with rationale and direction.",
    icon: FlaskConical,
    tint: "bg-[var(--accent-2)]/30",
  },
  {
    no: "03.",
    title: "Prototyping & Testing",
    desc: "Iterating quickly with feedback to validate solutions and polish details.",
    icon: Rocket,
    tint: "bg-[var(--accent-1)]/35",
  },
]

export default function Features() {
  return (
    <section id="process" className="scroll-mt-16 bg-[var(--brand-surface)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <RevealAnimation direction="left" delay={0.2}>
          <div className="text-center">
            <span className="inline-flex items-center text-muted-foreground rounded-full border bg-background px-3 py-1 text-xs font-semibold">
              ✺ PROCESS
            </span>
            <h2 className="text-pretty mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
              My Approach          </h2>
          </div>
        </RevealAnimation>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <RevealAnimation direction="up" type="scale" delay={0.4} key={s.no}>
              <Card key={s.no} className={`rounded-none border-2 hover:border-accent ${s.tint}`}>
                <CardHeader className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-full border bg-background">
                      <s.icon className="size-7 text=[#]" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl">{s.title}</CardTitle>
                  </div>
                  <span className="text-lg font-semibold text-foreground/70">{s.no}</span>
                </CardHeader>
                <CardContent className="pt-0 text-muted-foreground">{s.desc}</CardContent>
              </Card>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
