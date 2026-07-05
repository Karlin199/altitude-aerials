import NavItem from "./NavItem";

type NavLinksProps = {
  activeSection: string;
};

const links = [
  {
    label: "Home",
    href: "#home",
    section: "home",
  },
  {
    label: "Services",
    href: "#services",
    section: "services",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
    section: "portfolio",
  },
  {
    label: "About",
    href: "#about",
    section: "about",
  },
  {
    label: "Contact",
    href: "#contact",
    section: "contact",
  },
];

export default function NavLinks({
  activeSection,
}: NavLinksProps) {
  return (
    <nav className="hidden items-center gap-12 md:flex">
      {links.map((link) => (
        <NavItem
          key={link.label}
          label={link.label}
          href={link.href}
          active={activeSection === link.section}
        />
      ))}
    </nav>
  );
}