import Contact from "@/components/sections/Contact";
import ExperienceTimeline from "@/components/sections/Experience";
import FAQ from "@/components/sections/Faqs";
import Features from "@/components/sections/Features";
import HeroSection from "@/components/sections/HeroSection";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
export default function Home() {
   return (
      <>

         <HeroSection />
         <ExperienceTimeline/>
         <Features />
         <Services />
         <Projects/>
         <Testimonials />
         <FAQ />
         <Contact />
      </>
   );
}
