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
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <p className="mb-4 uppercase tracking-[0.35em] text-yellow-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}