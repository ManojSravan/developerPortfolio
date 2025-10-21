"use client";
 
import { Instagram,   Youtube, Linkedin} from "lucide-react";
import Link from "next/link";
  
export function SiteNavbar() {
  
 
  
  return (
    <>
       <header className="flex items-center justify-between px-8 py-6 md:px-12 md:py-8">
        <h1 className="font-serif text-2xl md:text-3xl font-light tracking-wide">Manoj Sravan</h1>

        <nav className="flex items-center gap-8 md:gap-12">
          {navLinks.map((item,id)=>{
            return(
              <Link href={item.href} key={id} className="hover:text-primary">{item.title}</Link>
            )
          })}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity hover:text-primary"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity hover:text-primary"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity hover:text-primary"
          >
            <Linkedin size={20} />
          </a>
        </nav>
      </header>

    </>
  );
}

const navLinks=[{title:'Home',href:'/'},{title:'About',href:'/about'},{title:'Articles',href:'/articles'},{title:'Case Studies',href:'/casestudies'},{title:'Contact',href:'/contact'}]