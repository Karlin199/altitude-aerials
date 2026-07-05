"use client";

import Image from "next/image";

type Props = {
  open: boolean;
  image: string;
  title: string;
  category: string;
  location: string;
  description: string;
  onClose: () => void;
};

export default function PortfolioLightbox({
  open,
  image,
  title,
  category,
  location,
  description,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-20 h-12 w-12 rounded-full bg-black/50 text-2xl text-white transition hover:bg-white hover:text-black"
        >
          ✕
        </button>

        <div className="grid lg:grid-cols-[2fr_1fr]">

          <div className="relative aspect-video bg-black">

            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
            />

          </div>

          <div className="flex flex-col justify-center p-10">

            <span
              className="mb-6 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]"
              style={{
                background: "rgba(212,175,55,.15)",
                color: "var(--brand-gold)",
              }}
            >
              {category}
            </span>

            <h2 className="text-4xl font-bold text-white">
              {title}
            </h2>

            <p className="mt-6 text-zinc-400">
              📍 {location}
            </p>

            <p className="mt-8 leading-8 text-zinc-300">
              {description}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}