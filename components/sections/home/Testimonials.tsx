import RevealAnimation from "@/components/animations/RevealAnimation"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react" // optional icon for style
 

const testimonials = [
  {
    quote:
      "I highly recommend Manoj Sravan. He’s passionate, hard-working, and patient. He designed our websites to a very high standard and was a pleasure to work with. His industry knowledge in web design and SEO made a clear difference to our results.",
    name: "Sameeksha PN",
    role: "Founder, Illumora",
  },
  {
    quote:
      "Manoj was an integral part of our team at QubicGen Software Solutions, contributing significantly to multiple projects. He demonstrated excellent technical skills, problem-solving ability, and professionalism. His dedication and collaborative approach were highly commendable.",
    name: "Tharun Kumar Chavvala",
    role: "HR Manager, QubicGen Software Solutions Pvt Ltd",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 bg-[var(--brand-surface)] py-16 md:py-20">
      {/* Header */}
      <RevealAnimation direction="left" delay={0.2}>
        <div className="text-center py-8">
        <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-semibold text-primary">
          ✺ TESTIMONIALS
        </span>
        <h2 className="text-pretty mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
          What Clients Say
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-muted-foreground text-sm md:text-base">
          {/* Honest feedback from the people I’ve worked with. It’s always rewarding to see projects succeed. */}
        </p>
      </div>
      </RevealAnimation>

      {/* Testimonials Grid */}
      <RevealAnimation direction="up" type="scale" delay={0.4}>
        <div className="mx-auto max-w-7xl px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {testimonials.map((t, index) => (
          <Card
            key={index}
            className="border-2 border-transparent hover:border-accent hover:shadow-lg transition-all duration-300 rounded-none"
          >
            <CardContent className="px-1 py-6 text-center md:px-8">
              <Quote className="mx-auto mb-4 h-6 w-6 text-accent" />
              <blockquote className="text-sm md:text-sm leading-relaxed text-foreground/90 italic">
                “{t.quote}”
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold text-lg text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      </RevealAnimation>
    </section>
  )
}
