type Props = {
  label: string;
  href: string;
};

export default function NavItem({
  label,
  href,
}: Props) {
  return (
    <a
      href={href}
      className="group relative uppercase tracking-[0.25em] text-sm text-white transition"
    >
      {label}

      <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
    </a>
  );
}