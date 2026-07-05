type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-yellow-500 text-black hover:bg-yellow-400"
      : "border border-white/60 bg-white/5 text-white backdrop-blur-md hover:bg-white hover:text-black";

  return (
    <button
      className={`
        w-full
        sm:w-auto
        rounded-full
        px-8
        py-4
        text-base
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:scale-[1.02]
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-yellow-400/40
        ${styles}
      `}
    >
      {children}
    </button>
  );
}