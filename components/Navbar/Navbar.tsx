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
          scrollPosition <
            element.offsetTop + element.offsetHeight
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
      <div
        className={`
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          transition-all
          duration-500
          ${
            scrolled
              ? "h-20 border-white/10 bg-black/65 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-2xl"
              : "h-24 border-transparent bg-black/20 backdrop-blur-md"
          }
        `}
      >
        <div
          className={`pl-5 transition-all duration-500 ${
            scrolled ? "scale-95" : "scale-100"
          }`}
        >
          <Logo />
        </div>

        <NavLinks activeSection={activeSection} />

        <div className="pr-5">
          <MobileMenu activeSection={activeSection} />
        </div>
      </div>
    </header>
  );
}