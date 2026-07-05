import FadeIn from "../ui/FadeIn";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-20">
      <Container>

        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-3">

            {/* Brand */}

            <div>

              <h2 className="text-2xl font-bold tracking-[0.25em] text-white">
                ALTITUDE AERIALS
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">
                Professional drone photography and cinematic videography
                serving Central Alberta with stunning aerial imagery.
              </p>

            </div>

            {/* Navigation */}

            <div>

              <h3 className="mb-6 text-lg font-semibold text-white">
                Navigation
              </h3>

              <div className="flex flex-col gap-4">

                <a
                  href="#home"
                  className="text-zinc-400 transition hover:text-yellow-400"
                >
                  Home
                </a>

                <a
                  href="#services"
                  className="text-zinc-400 transition hover:text-yellow-400"
                >
                  Services
                </a>

                <a
                  href="#portfolio"
                  className="text-zinc-400 transition hover:text-yellow-400"
                >
                  Portfolio
                </a>

                <a
                  href="#about"
                  className="text-zinc-400 transition hover:text-yellow-400"
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="text-zinc-400 transition hover:text-yellow-400"
                >
                  Contact
                </a>

              </div>

            </div>

            {/* Contact */}

            <div>

              <h3 className="mb-6 text-lg font-semibold text-white">
                Contact
              </h3>

              <div className="space-y-4 text-zinc-400">

                <p>Serving Central Alberta</p>

                <p>karlin@altitudeaerials.ca</p>

                <p>403-741-8424</p>

              </div>

            </div>

          </div>
        </FadeIn>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">

          © {new Date().getFullYear()} Altitude Aerials. All rights reserved.

        </div>

      </Container>
    </footer>
  );
}