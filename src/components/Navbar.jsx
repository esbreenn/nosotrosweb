import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "inicio", label: "Inicio" },
  { id: "portfolio", label: "Trabajos" },
  { id: "contacto", label: "Contacto" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  // Detectar la sección visible con IntersectionObserver
  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY;
      let current = "inicio";
      for (let section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop - 120 <= scrollPos) {
          current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <span className="text-white text-2xl md:text-3xl font-extrabold tracking-tight select-none">
          NosotrosWeb
        </span>
        {/* Links Desktop */}
        <ul className="hidden md:flex gap-10 text-white text-lg font-semibold">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`px-2 py-1 rounded transition-all duration-200
                  ${
                    active === id
                      ? "text-blue-400 underline underline-offset-8"
                      : "hover:text-blue-400 hover:underline underline-offset-8"
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburguesa Mobile */}
        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex items-center justify-center p-2 rounded focus-visible:outline-2 focus-visible:outline-blue-500"
        >
          {/* Icono hamburguesa simple */}
          <div className="flex flex-col justify-center items-center w-8 h-8">
            <span className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-8 h-1 bg-white rounded mt-1 mb-1 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Menú hamburguesa desplegable SOLO en mobile */}
      <div
        className={`md:hidden w-full px-6 transition-all duration-300 overflow-hidden bg-black/95 shadow-lg ${
          open ? "max-h-40 py-4 opacity-100 pointer-events-auto" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
        style={{
          borderBottomLeftRadius: open ? "1rem" : "0",
          borderBottomRightRadius: open ? "1rem" : "0",
        }}
      >
        <ul className="flex flex-col gap-5 text-white text-xl font-semibold">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`px-2 py-1 rounded transition-all duration-200
                  ${
                    active === id
                      ? "text-blue-400 underline underline-offset-8"
                      : "hover:text-blue-400 hover:underline underline-offset-8"
                  }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
