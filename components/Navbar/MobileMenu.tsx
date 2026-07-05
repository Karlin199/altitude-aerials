"use client";

import { useState } from "react";
import Button from "../ui/Button";

type MobileMenuProps = {
  activeSection: string;
};

const links = [
  { label: "Home", href: "#home", section: "home" },
  { label: "Services", href: "#services", section: "services" },
  { label: "Portfolio", href: "#portfolio", section: "portfolio" },
  { label: "About", href: "#about", section: "about" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export default function MobileMenu({
  activeSection,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}

      <button
        onClick={() => setOpen(!open)}
        className="relative z-[60] flex h-12 w-12 flex-col items-center justify-center gap-1.5 md:hidden"
        aria-label="Toggle navigation"
      >
        <span
          className={`h-0.5 w-7 bg-white transition-all duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />

        <span
          className={`h-0.5 w-7 bg-white transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />

        <span
          className={`h-0.5 w-7 bg-white transition-all duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Fullscreen Menu */}

      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl transition-all duration-500 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center">

          <h2 className="text-3xl font-bold tracking-[0.25em] text-white">
            ALTITUDE AERIALS
          </h2>

          <p className="mt-4 text-center text-sm uppercase tracking-[0.35em] text-yellow-400">
            Drone Photography & Videography
          </p>

          <div className="mt-16 flex flex-col items-center gap-8">

            {links.map((link) => (
              <a
                key={link.section}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-2xl uppercase tracking-[0.3em] transition ${
                  activeSection === link.section
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.label}
              </a>
            ))}

          </div>

          <div className="mt-16">

            <a
              href="#contact"
              onClick={() => setOpen(false)}
            >
              <Button>
                Request a Quote
              </Button>
            </a>

          </div>

        </div>
      </div>
    </>
  );
}