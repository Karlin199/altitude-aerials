import Image from "next/image";

type PortfolioCardProps = {
  title: string;
  category: string;
  image?: string;
};

export default function PortfolioCard({
  title,
  category,
  image,
}: PortfolioCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-zinc-900
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[var(--brand-gold)]
        hover:shadow-[0_25px_60px_rgba(0,0,0,.45)]
      "
    >
      <div className="relative aspect-[4/3] overflow-hidden">

        {image ? (
          <>
            <Image
             src={image}
             alt={title}
             fill
             unoptimized
             className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">

              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]"
                style={{
                  background: "rgba(212,175,55,.15)",
                  color: "var(--brand-gold)",
                }}
              >
                {category}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {title}
              </h3>

              <p className="mt-2 translate-y-3 text-sm text-white/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View Project →
              </p>

            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 text-center">

            <div
              className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border"
              style={{
                borderColor: "rgba(212,175,55,.25)",
                background: "rgba(212,175,55,.08)",
              }}
            >
              📷
            </div>

            <span
              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]"
              style={{
                background: "rgba(212,175,55,.15)",
                color: "var(--brand-gold)",
              }}
            >
              {category}
            </span>

            <h3 className="mt-6 text-2xl font-bold text-white">
              {title}
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-400">
              This showcase will feature one of our completed projects.
            </p>

            <div
              className="mt-8 text-sm font-medium"
              style={{
                color: "var(--brand-gold)",
              }}
            >
              Coming Soon
            </div>

          </div>
        )}

      </div>
    </div>
  );
}