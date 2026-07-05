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
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition duration-500 hover:-translate-y-2 hover:border-yellow-400">

      <div className="relative aspect-[4/3]">

        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-800 to-black">
            <div className="text-center">
              <p className="text-xl font-semibold text-white">
                {title}
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-yellow-400">
                {category}
              </p>

              <p className="mt-8 text-sm text-zinc-500">
                Coming Soon
              </p>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}