import Image from "next/image";

import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]">
        <Image
          src="/images/hero.jpg"
          alt="Altitude Aerials"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full -translate-y-12 items-center justify-center px-6">
        <div className="mx-auto max-w-6xl text-center">

          <FadeIn delay={0.1}>
            <p className="mb-6 text-sm uppercase tracking-[0.7em] text-yellow-400 md:text-base">
              Central Alberta
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h1 className="mt-4 text-6xl font-bold tracking-[0.10em] text-white md:text-7xl xl:text-8xl">
              ALTITUDE AERIALS
            </h1>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="mx-auto mt-8 max-w-2xl text-2xl leading-snug text-white/90 md:text-3xl">
              Professional Drone Photography
              <br />
              & Cinematic Videography
            </p>
          </FadeIn>

          <FadeIn delay={0.65}>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Capturing farms, businesses, real estate, construction
              projects and events from breathtaking perspectives across
              Central Alberta.
            </p>
          </FadeIn>

          <FadeIn delay={0.85}>
            <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">

              <a href="#contact">
                <Button>
                  Request a Quote
                </Button>
              </a>

              <a href="#portfolio">
                <Button variant="secondary">
                  View Portfolio
                </Button>
              </a>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}