import { createFileRoute, Link } from "@tanstack/react-router";
import { Cultiva } from "@/components/Cultiva";
import { Reveal } from "@/components/Reveal";
import {
  CallToAction,
  Photo,
  Pending,
  Section,
  buttonPrimary,
} from "@/components/sections";

export const Route = createFileRoute("/sobre-andrea")({
  head: () => ({
    meta: [
      { title: "Sobre Andrea Lema — Historia, formación y filosofía" },
      {
        name: "description",
        content:
          "La historia, la formación, la experiencia y la filosofía de Andrea Lema: psicología, coaching y 20 años en recursos humanos y transformación organizacional.",
      },
    ],
  }),
  component: SobreAndrea,
});

function SobreAndrea() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="eyebrow">Sobre Andrea</p>
          <blockquote className="mt-6 font-display text-3xl leading-[1.3] sm:text-4xl">
            No creo en las fórmulas mágicas para vivir mejor. Creo en el conocimiento, las
            decisiones y las acciones que nos permiten construir una vida más consciente y
            satisfactoria.
          </blockquote>
        </Reveal>
        <Reveal delay={150}>
          <Photo
            src="/images/andrea-retrato-calido.webp"
            alt="Andrea Lema trabajando en su escritorio"
            className="aspect-[4/5]"
            position="center 25%"
          />
        </Reveal>
      </section>

      <Section tinted eyebrow="Mi historia" title="Quién soy más allá de mis títulos">
        <Pending>La historia de Andrea, contada en primera persona.</Pending>
      </Section>

      <Section eyebrow="Mi formación" title="Tres disciplinas, una misma pregunta">
        <ul className="grid gap-4 md:grid-cols-3">
          {["Psicología", "Coaching ontológico", "Psicología positiva"].map((item) => (
            <li
              key={item}
              className="rounded-sm border border-border bg-card p-7 font-display text-xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tinted
        eyebrow="Mi experiencia"
        title="20 años en recursos humanos y transformación organizacional"
        lead="Una trayectoria dentro de las organizaciones que hoy alimenta tanto el trabajo con personas como el trabajo con equipos."
      />

      <Section
        eyebrow="Mi filosofía"
        title="Qué entiendo por felicidad y desarrollo humano"
        lead="La felicidad no es una emoción permanente, sino una construcción que involucra pensamientos, hábitos, relaciones, decisiones y circunstancias."
      >
        <Link to="/felicidad-en-serio" className={buttonPrimary}>
          Conoce Felicidad en Serio
        </Link>
      </Section>

      <Cultiva
        eyebrow="Mi metodología"
        title="Método CULTIVA"
        description="Cómo integro psicología, coaching y experiencia: siete pasos, en orden, sin atajos."
      />

      <Section
        tinted
        eyebrow="Mi trayectoria"
        title="Proyectos, organizaciones, conferencias y colaboraciones"
      >
        <Pending>Los proyectos, organizaciones y colaboraciones más representativos.</Pending>
      </Section>

      <CallToAction
        title="Conversemos."
        text="Cuéntame qué estás buscando y te orientaré hacia el espacio adecuado."
        action={
          <Link to="/contacto" className={buttonPrimary}>
            Ir a contacto
          </Link>
        }
      />
    </main>
  );
}
