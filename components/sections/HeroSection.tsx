import Image from "next/image"
import { Button } from "@/components/ui/button"
import RevealAnimation from "../animations/RevealAnimation"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--brand-surface)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24 lg:py-28">
       <RevealAnimation >
         <div className="max-w-xl">
          <RevealAnimation direction="left">
            <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-semibold">
            ✺ HELLO!
          </span>
          </RevealAnimation>
         <RevealAnimation direction="left" delay={0.2}>
           <h1 className="mt-6 text-pretty text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-5xl">
             I&apos;m Manoj Sravan
            <br />
            <span className="relative inline-block py-2">
              a Software Engineer
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 right-0 h-2 rounded-full bg-[var(--accent-2)]/50"
              ></span>
            </span>
            .
          </h1>
         </RevealAnimation>
         <RevealAnimation direction="left" delay={0.3}>
           <p className="mt-6 max-w-prose text-lg text-muted-foreground">
           I&apos;m a Software Engineer based in India. I build and scale MVP&apos;s for early stage startups and SMB&apos;s.
          </p>
         </RevealAnimation>
         <RevealAnimation direction="up" delay={0.5}> 
           <div className="mt-8">
            <Button className="rounded-[1.25rem] px-6 py-5 text-base font-semibold">See My Works</Button>
          </div>
         </RevealAnimation>
        </div>
       </RevealAnimation>

        <RevealAnimation type="scale" delay={0.3}>
          <div className="relative mx-auto pt-2 w-full max-w-md">
          <div className="rounded-none border   shadow-sm">
            <Image
              src={
                "https://images.unsplash.com/photo-1587902673915-631e5ba4488f?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Portrait of designer"
              width={420}
              height={560}
              className="h-auto w-full rounded-none object-cover"
              priority
            />
          </div>
        </div>
        </RevealAnimation>
      </div>
    </section>
  )
}
