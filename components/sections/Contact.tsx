import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-[var(--brand-surface)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-none border-2 bg-background p-6 md:p-10 lg:p-14">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-semibold">
              ✺ CONTACT
            </span>
            <h2 className="text-pretty mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
              Got a project in mind? Let’s get in touch.
            </h2>
          </div>

          <form className="mx-auto mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground/70">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your name *"
                className="mt-1 w-full border-b bg-transparent py-3 outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground/70">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address *"
                className="mt-1 w-full border-b bg-transparent py-3 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground/70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project *"
                className="mt-1 h-28 w-full resize-y border-b bg-transparent py-3 outline-none"
              />
            </div>
            <div className="md:col-span-2 text-center">
              <Button type="submit" className="rounded-[1.25rem] px-6 py-5 text-base font-semibold">
                Let’s Talk!
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
