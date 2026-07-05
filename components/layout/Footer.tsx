import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-16">

      <Container>

        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

          <div>

            <h2 className="text-2xl font-bold tracking-[0.25em] text-white">
              ALTITUDE AERIALS
            </h2>

            <p className="mt-3 text-zinc-500">
              Professional Drone Photography & Videography
            </p>

          </div>

          <div className="flex gap-10 text-sm uppercase tracking-[0.2em]">

            <a href="#home" className="text-zinc-400 hover:text-yellow-400">
              Home
            </a>

            <a href="#services" className="text-zinc-400 hover:text-yellow-400">
              Services
            </a>

            <a href="#portfolio" className="text-zinc-400 hover:text-yellow-400">
              Portfolio
            </a>

            <a href="#about" className="text-zinc-400 hover:text-yellow-400">
              About
            </a>

            <a href="#contact" className="text-zinc-400 hover:text-yellow-400">
              Contact
            </a>

          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-zinc-600">

          © {new Date().getFullYear()} Altitude Aerials. All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
}