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

      {/* Cinematic Overlays */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />

      {/* Soft radial light */}

      <div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,.18) 0%, rgba(212,175,55,.05) 40%, transparent 75%)",
        }}
      />

      {/* Hero Content */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-28 pb-16 md:pt-20 md:pb-0">

        <div className="mx-auto w-full max-w-7xl text-center">

          <FadeIn delay={0.1}>
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.35em] sm:text-sm sm:tracking-[0.5em] md:mb-6 md:text-base md:tracking-[0.7em]"
              style={{ color: "var(--brand-gold)" }}
            >
              Central Alberta
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h1 className="text-4xl font-bold leading-none tracking-[0.08em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
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

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 md:block">

        <div className="flex h-14 w-8 justify-center rounded-full border border-white/30">

          <div
            className="mt-2 h-2 w-2 rounded-full"
            style={{
              background: "var(--brand-gold)",
              animation: "scrollDot 2s ease-in-out infinite",
            }}
          />

        </div>

      </div>

    </section>
  );
}