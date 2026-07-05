type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const primary =
    "bg-[var(--brand-gold)] text-black shadow-[0_10px_35px_rgba(212,175,55,.28)] hover:bg-[var(--brand-gold-light)]";

  const secondary =
    "border border-white/15 bg-white/5 text-white backdrop-blur-xl hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)]";

  return (
    <button
      className={`
        group
        relative
        w-full
        sm:w-auto
        overflow-hidden
        rounded-full
        px-8
        py-4
        text-base
        font-semibold
        tracking-wide
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(0,0,0,.45)]
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--brand-gold)]
        ${
          variant === "primary"
            ? primary
            : secondary
        }
      `}
    >
      <span className="relative z-10">
        {children}
      </span>

      <span
        className="
          absolute
          inset-0
          bg-white/10
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </button>
  );
}