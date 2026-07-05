import Image from "next/image";

import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
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
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-28 pb-12 md:pt-20 md:pb-0">

        <div className="mx-auto w-full max-w-7xl text-center">

          <FadeIn delay={0.1}>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400 sm:text-sm sm:tracking-[0.5em] md:mb-6 md:text-base md:tracking-[0.7em]">
              Central Alberta
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h1 className="text-4xl font-bold tracking-[0.08em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              ALTITUDE AERIALS
            </h1>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="mx-auto mt-6 max-w-xl text-xl leading-snug text-white/90 sm:text-2xl md:mt-8 md:max-w-2xl md:text-3xl">
              Professional Drone Photography
              <br />
              & Cinematic Videography
            </p>
          </FadeIn>

          <FadeIn delay={0.65}>
            <p className="mx-auto mt-6 max-w-md text-base leading-8 text-gray-300 sm:max-w-xl sm:text-lg md:mt-8 md:max-w-3xl">
              Capturing farms, businesses, real estate,
              construction projects and events from
              breathtaking perspectives across Central Alberta.
            </p>
          </FadeIn>

          <FadeIn delay={0.85}>
            <div className="mt-10 flex flex-col items-center gap-5 sm:mt-12 sm:flex-row sm:justify-center md:mt-14">

              <div className="w-full max-w-xs sm:w-auto">
                <a href="#contact">
                  <Button>
                    Request a Quote
                  </Button>
                </a>
              </div>

              <div className="w-full max-w-xs sm:w-auto">
                <a href="#portfolio">
                  <Button variant="secondary">
                    View Portfolio
                  </Button>
                </a>
              </div>

            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}