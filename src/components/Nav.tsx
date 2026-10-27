const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  return (
    <nav className="h-16 max-w-7xl mx-auto px-10 flex justify-between items-center">
      <a
        href="#"
        className="font-display text-xl tracking-tight font-black text-heading"
      >
        <span className="text-accent">Q</span>uido{" "}
        <span className="text-accent">H</span>uba
      </a>
      <ul className=" hidden md:flex gap-8 ">
        {navItems.map((navItem) => (
          <li key={navItem.label}>
            <a
              className="text-base font-medium text-muted hover:text-heading transition-all border-b-2 border-transparent hover:border-accent border-dotted inline-block hover:scale-125 duration-300 ease-out delay-100"
              href={navItem.href}
            >
              {navItem.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={`${import.meta.env.BASE_URL}Quido_Huba_CV.pdf`}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg bg-accent px-5 py-2 text-base font-semibold text-on-accent transition duration-300 ease-out hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        My Resume
      </a>
    </nav>
  );
}

export default Nav;
