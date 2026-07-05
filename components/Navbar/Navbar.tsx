"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const sections = [
  "home",
  "services",
  "portfolio",
  "about",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          scrolled ? "h-20" : "h-24"
        }`}
      >
        <div
         className={`transition-transform duration-500 ${
           scrolled ? "scale-90" : "scale-100"
          }`}
        >
         <Logo />
        </div>

        <NavLinks activeSection={activeSection} />

        <MobileMenu activeSection={activeSection} />
      </div>
    </header>
  );
}