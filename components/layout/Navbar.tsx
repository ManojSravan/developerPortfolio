"use client";

import { useState } from "react";
import { Instagram, Youtube, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-5 md:px-12 md:py-8 relative">
      {/* Logo / Name */}
      <h1 className="font-serif text-2xl md:text-3xl font-light tracking-wide">
        Manoj Sravan
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((item, id) => (
          <Link
            href={item.href}
            key={id}
            className="hover:text-primary transition-colors"
          >
            {item.title}
          </Link>
        ))}
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-background  border-t border-gray-200 dark:border-gray-800 shadow-md md:hidden z-50">
          <nav className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((item, id) => (
              <Link
                href={item.href}
                key={id}
                className="hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/sravan_codes/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@devstruggles19"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/manojsravan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Articles", href: "/articles" },
  { title: "Case Studies", href: "/casestudies" },
  { title: "Contact", href: "/contact" },
];
