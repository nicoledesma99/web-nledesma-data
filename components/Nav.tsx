"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "proyectos", href: "#proyectos" },
  { label: "stack", href: "#stack" },
  { label: "experiencia", href: "#experiencia" },
  { label: "contacto", href: "#contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-sm tracking-tight">
          <span className="text-white">nico</span>
          <span className="text-white">ledesma</span>
        </a>
        <ul className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs text-white hover:text-white transition-colors duration-200 tracking-wider uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile: minimal */}
        <div className="sm:hidden">
          <a href="#contacto" className="font-mono text-xs text-white hover:text-white transition-colors">
            contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
