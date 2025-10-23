import RevealAnimation from "@/components/animations/RevealAnimation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, Search, Palette, Globe } from "lucide-react"
 
const items = [
  {
    title: "Strategy & Planning",
    desc: "Streamline campaigns with tools that improve engagement, boost visibility, and connect with your audience.",
    icon: BadgeCheck,
    bg: "bg-[var(--accent-2)]/35",
  },
  {
    title: "User Research",
    desc: "Organized tools and strategies designed to keep your team aligned and your goals on track.",
    icon: Search,
    bg: "bg-[var(--accent-1)]/40",
  },
  {
    title: "Web Design",
    desc: "Insights into user behavior, performance, and key metrics to optimize your digital presence.",
    icon: Globe,
    bg: "bg-[var(--accent-2)]/25",
  },
  {
    title: "Brand Design",
    desc: "Precise data analysis and customer insights that guide design decisions.",
    icon: Palette,
    bg: "bg-[var(--accent-1)]/30",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-16 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-8">
        <RevealAnimation direction="left" delay={0.2}>
          <div className="text-center">
            <span className="inline-flex items-center text-primary rounded-full border bg-background px-3 py-1 text-xs font-semibold">
              ✺ MY SERVICES
            </span>
            <h2 className="text-pretty mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
              What I Offer          </h2>
          </div>

        </RevealAnimation>
        <RevealAnimation direction="up" type="scale" delay={0.4}>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {items.map(({ title, desc, icon: Icon, bg }) => (
              <Card key={title} className={`rounded-none border-2 hover:border-accent ${bg}`}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full border bg-background">
                    <Icon className="size-6" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-muted-foreground">{desc}</CardContent>
              </Card>
            ))}
          </div>
        </RevealAnimation>

        {/* <div className="mt-10 text-center">
          <Button variant="outline" className="rounded-full px-6 py-5 text-base bg-transparent">
            Check Portfolio
          </Button>
        </div> */}
      </div>
    </section>
  )
}
