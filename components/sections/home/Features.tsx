import RevealAnimation from "@/components/animations/RevealAnimation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FlaskConical, Lightbulb, Rocket } from "lucide-react"
 
const steps = [
  {
    no: "01.",
    title: "Research & Planning",
    desc: "Understand your goals and audience.",
    icon: Lightbulb,
    tint: "bg-[var(--accent-1)]/40",
  },
  {
    no: "02.",
    title: "Design & Concept",
    desc: "Create clear visuals and layouts.",
    icon: FlaskConical,
    tint: "bg-[var(--accent-2)]/30",
  },
  {
    no: "03.",
    title: "Build & Launch",
    desc: "Develop, test, and deliver smoothly.",
    icon: Rocket,
    tint: "bg-[var(--accent-1)]/35",
  },
];


export default function Features() {
  return (
    <section id="process" className="scroll-mt-16 bg-[var(--brand-surface)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <RevealAnimation direction="left" delay={0.2}>
          <div className="text-center">
            <span className="inline-flex items-center text-primary rounded-full border bg-background px-3 py-1 text-xs font-semibold">
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
