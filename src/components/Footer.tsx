import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-andrea", label: "Sobre Andrea" },
  { to: "/felicidad-en-serio", label: "Felicidad en Serio" },
  { to: "/escuela", label: "Escuela" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contenidos", label: "Contenidos" },
  { to: "/conferencias", label: "Conferencias" },
  { to: "/contacto", label: "Conversemos" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">Andrea Lema</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Psicología, desarrollo humano y transformación para vivir y trabajar mejor.
          </p>
        </div>

        <div>
          <p className="eyebrow">Navegación</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contacto</p>
          <a
            href="mailto:hola@andrealema.com"
            className="mt-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Mail size={16} /> hola@andrealema.com
          </a>
          <div className="mt-5 flex gap-4 text-muted-foreground">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-foreground"
            >
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-foreground">
              <Linkedin size={18} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-foreground">
              <Youtube size={18} />
            </a>
          </div>
          <Link
            to="/escuela"
            hash="campus"
            className="mt-5 block text-sm text-muted-foreground underline hover:text-foreground"
          >
            Campus para alumnos
          </Link>
        </div>
      </div>
      <div className="rule-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Andrea Lema. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
