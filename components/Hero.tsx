export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

      <div className="relative z-10 text-center">

        <p className="mb-6 uppercase tracking-[0.5em] text-yellow-400">
          Central Alberta
        </p>

        <h1 className="text-7xl font-bold tracking-[0.2em] text-white">
          ALTITUDE AERIALS
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-300">
          Professional Drone Photography and Videography
        </p>

        <button className="mt-12 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105">
          Request a Quote
        </button>

      </div>

    </section>
  );
}