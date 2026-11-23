import { createFileRoute, Link } from "@tanstack/react-router";
import { CardGrid, PageHero, Pending, Section, buttonPrimary, mailto } from "@/components/sections";

export const Route = createFileRoute("/contenidos/")({
  head: () => ({
    meta: [
      { title: "Ideas para vivir mejor — Artículos, podcast y libros | Andrea Lema" },
      {
        name: "description",
        content:
          "Artículos de psicología y desarrollo humano, felicidad, trabajo y liderazgo, junto a videos, podcast, newsletter y libros de Andrea Lema.",
      },
    ],
  }),
  component: Contenidos,
});

const articleTopics = [
  { title: "Psicología y desarrollo humano" },
  { title: "Felicidad en Serio" },
  { title: "Trabajo y desarrollo profesional" },
  { title: "Liderazgo y organizaciones" },
];

function Contenidos() {
  return (
    <main>
      <PageHero
        eyebrow="Contenidos"
        title="Ideas para vivir mejor"
        lead="Ideas para pensar. Herramientas para transformar."
      />

      <Section tinted eyebrow="Artículos" title="Temas">
        <CardGrid items={articleTopics} columns={2} />
        <div className="mt-4">
          <Pending>Los primeros artículos, cada uno con su propia ficha.</Pending>
        </div>
      </Section>

      <Section eyebrow="Videos y podcast" title="Para ver y escuchar">
        <div className="grid gap-4 md:grid-cols-2">
          <Pending>Videos de YouTube.</Pending>
          <Pending>Episodios del podcast.</Pending>
        </div>
      </Section>

      <Section tinted eyebrow="Libros y publicaciones" title="Felicidad en serio">
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          Cómo sanar, reinventarte y volver a brillar.
        </p>
        <Link to="/contenidos/libro-felicidad-en-serio" className={`${buttonPrimary} mt-6`}>
          Conoce el libro
        </Link>
      </Section>

      <Section
        eyebrow="Newsletter · La gente feliz no jode"
        title="Recibe las ideas en tu correo"
        lead="Una conversación que no depende de los algoritmos."
      >
        <a href={mailto("Quiero suscribirme a la newsletter")} className={buttonPrimary}>
          Quiero suscribirme
        </a>
      </Section>
    </main>
  );
}
