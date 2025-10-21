'use client'
import Projects from "@/components/sections/home/Projects";
import Services from "@/components/sections/home/Services";
import Testimonials from "@/components/sections/home/Testimonials";
import Hero from "@/components/sections/home/HeroSection";
export default function Home() {

   return (
      <>
         <div className="relative h-full w-full overflow-hidden">
             <Hero/>
           
             <Services/>
             <Projects/>
             <Testimonials/>
        
         </div>
      </>
   );
}
