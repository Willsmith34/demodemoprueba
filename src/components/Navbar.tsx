import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-andrea", label: "Sobre Andrea" },
  { to: "/felicidad-en-serio", label: "Felicidad en Serio" },
  { to: "/escuela", label: "Escuela" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contenidos", label: "Contenidos" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between">
        <Link to="/" className="min-w-0 font-display text-lg tracking-tight">
          Andrea Lema
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="rounded-sm bg-accent px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Conversemos
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="shrink-0 justify-self-end lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-sm bg-accent px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.14em] text-accent-foreground"
          >
            Conversemos
          </Link>
        </div>
      )}
    </header>
  );
}
