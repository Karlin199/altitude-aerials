import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

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
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center fade-up">

        <div className="max-w-5xl">

          <p className="mb-6 uppercase tracking-[0.7em] text-yellow-400 text-sm md:text-base">
            Central Alberta
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.18em] text-white">
            ALTITUDE AERIALS
          </h1>

          <p className="mt-8 text-xl md:text-3xl text-white/90">
            Professional Drone Photography
            <br />
            & Cinematic Videography
          </p>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-300 leading-8">
            Capturing farms, businesses, real estate,
            construction projects and events from
            breathtaking perspectives across Central Alberta.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">

            <button className="rounded-full bg-yellow-500 px-10 py-4 text-black font-semibold hover:bg-yellow-400 transition duration-300">
              Request a Quote
            </button>

            <button className="rounded-full border border-white px-10 py-4 text-white hover:bg-white hover:text-black transition duration-300">
              View Portfolio
            </button>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓
      </div>

    </section>
  );
}