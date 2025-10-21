 'use client'
interface PageIndicatorProps {
  sections: string[]
  activeSection: number
}

export default function PageIndicator({ sections, activeSection }: PageIndicatorProps) {
  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index])
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4">
      {sections.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === index ? "bg-primary w-3 h-3" : "bg-muted-foreground hover:bg-foreground"
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  )
}
