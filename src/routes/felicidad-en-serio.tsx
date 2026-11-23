import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  CallToAction,
  CardGrid,
  Section,
  buttonPrimary,
  buttonSecondary,
  mailto,
} from "@/components/sections";

export const Route = createFileRoute("/felicidad-en-serio")({
  head: () => ({
    meta: [
      { title: "Felicidad en Serio — Un movimiento de desarrollo humano | Andrea Lema" },
      {
        name: "description",
        content:
          "Felicidad en Serio es un movimiento de desarrollo humano: manifiesto, Club de la Felicidad en Serio, Comunidad de Felicistas, talleres, retos, libros y recursos.",
      },
    ],
  }),
  component: FelicidadEnSerio,
});

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

const movement = [
  {
    title: "El Movimiento Felicidad en Serio",
    text: "Personas que deciden tomarse en serio la vida que quieren vivir.",
  },
  {
    title: "El Club de la Felicidad en Serio",
    text: "Un espacio para seguir pensando, aprendiendo y practicando con otras personas.",
  },
  {
    title: "Comunidad de Felicistas",
    text: "La red de quienes construyen su bienestar con conocimiento, decisiones y acciones.",
  },
  {
    title: "Talleres, retos y experiencias",
    text: "Propuestas para llevar las ideas a la práctica cotidiana.",
  },
];

function FelicidadEnSerio() {
  return (
    <main className="brand-fes bg-background text-foreground">
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em]">
              Un movimiento de desarrollo humano
            </p>
            <h1 className="mt-6 text-6xl leading-[0.98] sm:text-8xl">Felicidad en Serio</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed">
              La felicidad no es una emoción permanente. Es una construcción que involucra
              pensamientos, hábitos, relaciones, decisiones y circunstancias.
            </p>
            <a
              href="#comunidad"
              className="mt-10 inline-block rounded-sm bg-purple px-6 py-3 text-sm font-medium text-yellow transition-opacity hover:opacity-90"
            >
              Súmate al movimiento
            </a>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="Filosofía y manifiesto" title="Qué significa Felicidad en Serio">
        <Reveal>
          <p className="max-w-4xl font-display text-3xl leading-[1.35] sm:text-4xl">
            No creo en la felicidad permanente. No creo en el positivismo que te pide sonreír
            mientras todo se cae. No creo en una espiritualidad desconectada de la realidad.
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            La vida real duele. Hay crisis, hay pérdidas, hay planes que se rompen justo cuando
            estaban funcionando. Ahí no termina nada: ahí empieza el trabajo real.
          </p>
        </Reveal>
      </Section>

      <Section eyebrow="Los temas" title="De qué hablamos cuando hablamos de felicidad">
        <ul className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <li key={topic} className="rounded-full border border-accent px-4 py-2 text-sm">
              {topic}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="comunidad" eyebrow="El movimiento" title="Mucho más que talleres">
        <CardGrid items={movement} columns={2} />
      </Section>

      <Section eyebrow="Libros y recursos" title="Para seguir explorando">
        <div className="flex flex-wrap gap-3">
          <Link to="/contenidos/libro-felicidad-en-serio" className={buttonPrimary}>
            Conoce el libro
          </Link>
          <Link to="/contenidos" className={buttonSecondary}>
            Ver recursos
          </Link>
        </div>
      </Section>

      <CallToAction
        title="Acceso a la comunidad"
        text="Escríbenos y te contaremos cómo formar parte de la comunidad."
        action={
          <a
            href={mailto("Quiero sumarme a la comunidad Felicidad en Serio")}
            className={buttonPrimary}
          >
            Quiero sumarme
          </a>
        }
      />
    </main>
  );
}
