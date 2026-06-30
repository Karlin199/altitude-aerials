import Image from "next/image";
export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <div className="flex items-center gap-4">
          <Image
           src="/logo/logo.png"
           alt="Altitude Aerials Logo"
           width={60}
           height={60}
           priority
        />

        <div>
          <h1 className="text-lg font-bold tracking-[0.3em] text-white">
            ALTITUDE AERIALS
          </h1>

          <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
            Drone Photography & Videography
          </p>
        </div>
    </div>

        <nav className="hidden gap-10 text-sm uppercase tracking-widest md:flex">
          <a href="#" className="transition hover:text-yellow-400">
            Home
          </a>

          <a href="#" className="transition hover:text-yellow-400">
            Services
          </a>

          <a href="#" className="transition hover:text-yellow-400">
            Portfolio
          </a>

          <a href="#" className="transition hover:text-yellow-400">
            About
          </a>

          <a href="#" className="transition hover:text-yellow-400">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}