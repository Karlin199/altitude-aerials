import NavItem from "./NavItem";

const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-12">
      {links.map((link) => (
        <NavItem
          key={link.label}
          label={link.label}
          href={link.href}
        />
      ))}
    </nav>
  );
}