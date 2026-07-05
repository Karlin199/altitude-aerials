import Image from "next/image";

export default function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
    >
      <Image
        src="/logo/logo.png"
        alt="Altitude Aerials"
        width={64}
        height={64}
        priority
        className="h-14 w-14 transition-all duration-300 md:h-16 md:w-16 lg:h-[70px] lg:w-[70px]"
      />

      {/* Hide the text on mobile */}
      <div className="hidden md:block">

        <h1 className="text-lg font-bold tracking-[0.25em] text-white lg:text-xl">
          ALTITUDE AERIALS
        </h1>

        <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-yellow-400 lg:text-xs">
          Drone Photography & Videography
        </p>

      </div>
    </a>
  );
}