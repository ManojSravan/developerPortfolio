'use client'
import Projects from "@/components/sections/home/Projects";
import Services from "@/components/sections/home/Services";
import Testimonials from "@/components/sections/home/Testimonials";
import Hero from "@/components/sections/home/HeroSection";
export default function Home() {

   return (
      <>
         <div className="max-w-7xl mx-auto  overflow-hidden">
             <Hero/>
           
             <Services/>
             <Projects/>
             <Testimonials/>
        
         </div>
      </>
   );
}
