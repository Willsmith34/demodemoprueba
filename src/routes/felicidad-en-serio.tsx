import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Flame,
  HeartHandshake,
  Megaphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { mailto } from "@/components/sections";
import { BOOK_URL, external } from "@/content/links";

export const Route = createFileRoute("/felicidad-en-serio")({
  head: () => ({
    meta: [
      { title: "Felicidad en Serio — Un movimiento de desarrollo humano | Soy Andy Lema" },
      {
        name: "description",
        content:
          "Felicidad en Serio es un movimiento de desarrollo humano: manifiesto, Club de la Felicidad en Serio, Comunidad de Felicistas, talleres, retos, libros y recursos.",
      },
    ],
  }),
  component: FelicidadEnSerio,
});

// The three neon colours of the logo, cycled across stickers and cards.
const neon = [
  { bg: "bg-fes-green", text: "text-fes-green", border: "border-fes-green" },
  { bg: "bg-fes-pink", text: "text-fes-pink", border: "border-fes-pink" },
  { bg: "bg-fes-yellow", text: "text-fes-yellow", border: "border-fes-yellow" },
] as const;

const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "rotate-1", "-rotate-2"];

const topics = [
  "Relaciones",
  "Trabajo",
  "Dinero",
  "Cuerpo",
  "Emociones",
  "Propósito",
  "Hábitos",
  "Autoestima",
  "Decisiones",
  "Cambios",
  "Crisis",
  "Maternidad/Paternidad",
  "Liderazgo",
  "Carrera",
  "Reinvención",
];

const movement: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "El Movimiento Felicidad en Serio",
    text: "Personas que deciden tomarse en serio la vida que quieren vivir.",
    icon: Megaphone,
  },
  {
    title: "El Club de la Felicidad en Serio",
    text: "Un espacio para seguir pensando, aprendiendo y practicando con otras personas.",
    icon: Users,
  },
  {
    title: "Comunidad de Felicistas",
    text: "La red de quienes construyen su bienestar con conocimiento, decisiones y acciones.",
    icon: HeartHandshake,
  },
  {
    title: "Talleres, retos y experiencias",
    text: "Propuestas para llevar las ideas a la práctica cotidiana.",
    icon: Flame,
  },
];

/* Hand-drawn doodles in the spirit of the logo. */
function Smiley({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M24 4a20 20 0 1 0 17 9.5"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M18 18v5M29 18v5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path
        d="M15 29c5 6 13 6 18 0"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3 12c10-10 18 8 28 0s18-10 28 0 18 8 28 0 18-10 28 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path
        d="M16 3v8M16 21v8M3 16h8M21 16h8"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const stickerButton =
  "inline-flex items-center gap-2 rounded-full border-2 border-fes-night bg-fes-yellow px-7 py-3.5 font-marker text-base text-fes-night shadow-[5px_5px_0_0_var(--fes-pink)] transition-transform hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--fes-pink)]";
const outlineButton =
  "inline-flex items-center gap-2 rounded-full border-2 border-fes-green px-7 py-3 font-marker text-base text-fes-green transition-colors hover:bg-fes-green hover:text-fes-night";

function Eyebrow({ children, color = "text-fes-green" }: { children: string; color?: string }) {
  return <p className={`font-marker text-sm uppercase tracking-[0.18em] ${color}`}>{children}</p>;
}

function FelicidadEnSerio() {
  return (
    <main className="brand-fes overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <Smiley className="absolute left-[6%] top-10 hidden h-12 w-12 -rotate-12 text-fes-pink sm:block" />
        <Spark className="absolute right-[8%] top-16 h-8 w-8 text-fes-yellow" />
        <Spark className="absolute bottom-16 left-[45%] hidden h-6 w-6 text-fes-green md:block" />
        <Squiggle className="absolute -right-6 bottom-10 hidden h-6 w-40 text-fes-pink lg:block" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:py-24 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <Eyebrow>Un movimiento de desarrollo humano</Eyebrow>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-7xl">
              <span className="text-fes-yellow">Felicidad</span>{" "}
              <span className="text-fes-pink">en serio</span>
            </h1>
            <Squiggle className="mt-4 h-5 w-36 text-fes-green" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              La felicidad no es una emoción permanente. Es una construcción que involucra{" "}
              <span className="font-semibold text-fes-green">pensamientos</span>,{" "}
              <span className="font-semibold text-fes-yellow">hábitos</span>,{" "}
              <span className="font-semibold text-fes-pink">relaciones</span>, decisiones y
              circunstancias.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#comunidad" className={stickerButton}>
                Súmate al movimiento <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href={BOOK_URL} {...external} className={outlineButton}>
                El libro
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute inset-6 rounded-full bg-fes-green/25 blur-3xl"
            />
            <img
              src="/images/logo-felicidad-en-serio.webp"
              alt="Logo de Felicidad en Serio"
              className="relative w-full rotate-3"
            />
          </Reveal>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative border-y-2 border-dashed border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <Eyebrow color="text-fes-pink">Filosofía y manifiesto</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-5xl">Qué significa Felicidad en Serio</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                "No creo en la felicidad permanente.",
                "No creo en el positivismo que te pide sonreír mientras todo se cae.",
                "No creo en una espiritualidad desconectada de la realidad.",
              ].map((line, i) => (
                <p
                  key={line}
                  className={`rounded-2xl border-2 ${neon[i].border} p-6 font-marker text-xl leading-snug ${tilts[i]}`}
                >
                  <span className={neon[i].text}>✕</span> {line}
                </p>
              ))}
            </div>
            <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              La vida real duele. Hay crisis, hay pérdidas, hay planes que se rompen justo cuando
              estaban funcionando.{" "}
              <span className="bg-fes-yellow px-1.5 font-semibold text-fes-night">
                Ahí no termina nada: ahí empieza el trabajo real.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Topics as stickers */}
      <section className="relative">
        <Smiley className="absolute right-[6%] top-12 hidden h-14 w-14 rotate-12 text-fes-green md:block" />
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal className="max-w-2xl">
            <Eyebrow color="text-fes-yellow">Los temas</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              De qué hablamos cuando hablamos de felicidad
            </h2>
          </Reveal>
          <ul className="mt-12 flex flex-wrap gap-4">
            {topics.map((topic, i) => (
              <li
                key={topic}
                className={`rounded-full ${neon[i % 3].bg} px-5 py-2.5 font-marker text-base text-fes-night ${tilts[i % tilts.length]} transition-transform hover:rotate-0 hover:scale-105`}
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Movement */}
      <section id="comunidad" className="border-t-2 border-dashed border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal className="max-w-2xl">
            <Eyebrow>El movimiento</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-5xl">Mucho más que talleres</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {movement.map((item, i) => {
              const c = neon[i % 3];
              return (
                <Reveal key={item.title} delay={i * 60}>
                  <div
                    className={`flex h-full gap-5 rounded-2xl border-2 ${c.border} bg-background p-7 ${c.text} shadow-sticker transition-transform hover:-translate-y-1`}
                  >
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${c.bg} text-fes-night`}
                    >
                      <item.icon size={26} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-20 md:grid-cols-[auto_1fr]">
        <span className="flex h-24 w-24 -rotate-6 items-center justify-center rounded-3xl bg-fes-pink text-fes-night">
          <BookOpen size={44} strokeWidth={2} aria-hidden="true" />
        </span>
        <Reveal>
          <Eyebrow color="text-fes-pink">Libros y recursos</Eyebrow>
          <h2 className="mt-4 text-4xl">Para seguir explorando</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={BOOK_URL} {...external} className={stickerButton}>
              Conoce el libro
            </a>
            <Link to="/contenidos" className={outlineButton}>
              Ver recursos
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative bg-fes-pink text-fes-night">
        <Smiley className="absolute left-[8%] top-1/2 hidden h-20 w-20 -translate-y-1/2 -rotate-12 text-fes-night/80 md:block" />
        <Spark className="absolute right-[10%] top-10 h-10 w-10 text-fes-yellow" />
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl">Acceso a la comunidad</h2>
            <p className="mx-auto mt-5 max-w-md text-lg font-medium leading-relaxed">
              Escríbenos y te contaremos cómo formar parte de la comunidad.
            </p>
            <a
              href={mailto("Quiero sumarme a la comunidad Felicidad en Serio")}
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-fes-night bg-fes-yellow px-7 py-3.5 font-marker text-base text-fes-night shadow-[5px_5px_0_0_var(--fes-night)] transition-transform hover:-translate-y-0.5"
            >
              Quiero sumarme <ArrowRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
