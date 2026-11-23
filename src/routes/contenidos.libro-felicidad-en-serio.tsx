import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ImagePlaceholder, Pending, buttonSecondary } from "@/components/sections";

export const Route = createFileRoute("/contenidos/libro-felicidad-en-serio")({
  head: () => ({
    meta: [
      { title: "Felicidad en serio: el libro | Andrea Lema" },
      {
        name: "description",
        content:
          "Felicidad en serio. Cómo sanar, reinventarte y volver a brillar, el libro de Andrea Lema.",
      },
    ],
  }),
  component: Libro,
});

function Libro() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <ImagePlaceholder label="Portada del libro" className="aspect-[3/4]" />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Libro</p>
          <h1 className="mt-5 text-5xl leading-[1.08] sm:text-6xl">Felicidad en serio</h1>
          <p className="mt-5 font-display text-2xl italic text-accent-ink">
            Cómo sanar, reinventarte y volver a brillar
          </p>
          <div className="mt-8">
            <Pending>La sinopsis del libro y dónde comprarlo.</Pending>
          </div>
          <Link to="/contenidos" className={`${buttonSecondary} mt-8`}>
            Ver más contenidos
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
