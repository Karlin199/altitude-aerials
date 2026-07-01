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
      className={`rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 ${styles}`}
    >
      {children}
    </button>
  );
}