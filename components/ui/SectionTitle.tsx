type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-14 max-w-4xl px-2 text-center sm:mb-16 lg:mb-20">

      <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-yellow-400 sm:text-sm sm:tracking-[0.4em]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}

    </div>
  );
}