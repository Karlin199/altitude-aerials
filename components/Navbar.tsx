"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <Image
            src="/logo/logo.png"
            alt="Altitude Aerials"
            width={68}
            height={68}
            priority
          />

          <div>

            <h1 className="text-xl font-bold tracking-[0.35em] text-white">
              ALTITUDE AERIALS
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
              Drone Photography & Videography
            </p>

          </div>

        </div>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-12">

          {[
            "Home",
            "Services",
            "Portfolio",
            "About",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="group relative uppercase tracking-[0.25em] text-sm text-white transition"
            >
              {item}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />

            </a>
          ))}

        </nav>

      </div>
    </header>
  );
}