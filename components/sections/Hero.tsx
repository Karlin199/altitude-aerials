import Button from "../ui/Button";
import Image from "next/image";

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

      {/* Dark Overlay */}
      <>
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
      </>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center -translate-y-12 fade-up">

        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-6 uppercase tracking-[0.7em] text-yellow-400 text-sm md:text-base">
            Central Alberta
          </p>

          <h1 className="mt-4 text-6xl font-bold tracking-[0.10em] text-white md:text-7xl xl:text-8xl">
           ALTITUDE AERIALS
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-2xl leading-snug text-white/90 md:text-3xl">
           Professional Drone Photography
          <br />
           & Cinematic Videography
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
           Capturing farms, businesses, real estate, construction projects
           and events from breathtaking perspectives across Central Alberta.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">

            <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">

              <Button>
              Request a Quote
              </Button>

              <Button variant="secondary">
              View Portfolio
              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}