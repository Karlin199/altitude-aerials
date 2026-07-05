type Props = {
  label: string;
  href: string;
  active?: boolean;
};

export default function NavItem({
  label,
  href,
  active = false,
}: Props) {
  return (
    <a
      href={href}
      className={`group relative uppercase tracking-[0.25em] text-sm transition-colors duration-300 ${
        active ? "text-yellow-400" : "text-white hover:text-yellow-400"
      }`}
    >
      {label}

      <span
        className={`absolute -bottom-2 left-0 h-[2px] bg-yellow-400 transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
}