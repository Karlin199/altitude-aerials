import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/logo/logo.png"
        alt="Altitude Aerials"
        width={70}
        height={70}
        priority
      />

      <div>
        <h1 className="text-xl font-bold tracking-[0.35em] text-white">
          ALTITUDE AERIALS
        </h1>

        <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
          Drone Photography & Videography
        </p>
      </div>
    </div>
  );
}