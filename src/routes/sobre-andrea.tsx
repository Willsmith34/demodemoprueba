import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, MessagesSquare, Smile } from "lucide-react";
import { Cultiva } from "@/components/Cultiva";
import { Reveal } from "@/components/Reveal";
import { CallToAction, IconBadge, Photo, Section, buttonPrimary } from "@/components/sections";

const story = [
  "Soy Andrea Lema mamá, esposa, Psicóloga, Coach y Promotora de Bienestar. Me encanta aprender, hacer preguntas y descubrir nuevas maneras de entender la vida y a las personas.",
  "Hace más de 20 años comencé un camino profesional que me llevó por la psicología, los Recursos Humanos, el coaching ontológico, la psicología positiva y la transformación de personas y organizaciones.",
  "Pero mi historia no está hecha solamente de títulos y experiencias laborales. También está hecha de cambios, decisiones, desafíos, sueños y muchas reinvenciones. Porque sí, también me ha tocado empezar de nuevo y descubrir que nunca dejamos de transformarnos, he vivido en 5 países y cada migración fue por diferentes motivos y diferentes condiciones. Además me he reinventado profesionalmente.",
  "De todo ese recorrido nació mi manera de entender y acompañar el desarrollo humano a través de mi propuesta de Coaching Positivo y Felicidad en Serio.",
  "Hoy quiero compartir lo que he aprendido, acompañar a otras personas en sus propios procesos y recordarnos algo importante: No necesitamos tener la vida resuelta para empezar a construir una vida que nos haga sentir bien.",
  "No tengo fórmulas mágicas. Tengo formación, experiencia, empatía, preguntas y muchas ganas de seguir aprendiendo.",
];

const experience = [
  { figure: "+18 años", text: "de trayectoria profesional en Psicología y Recursos Humanos." },
  { figure: "+1.200 pacientes", text: "acompañadas en procesos terapéuticos" },
  { figure: "+500 personas", text: "acompañadas en procesos de Coaching." },
  { figure: "+80 líderes", text: "formados en liderazgo, autoliderazgo y desarrollo de equipos." },
  {
    figure: "+2300 profesionales",
    text: "capacitados en Coaching Positivo, habilidades laborales, agilidad, transformación y mentalidad emprendedora.",
  },
];

export const Route = createFileRoute("/sobre-andrea")({
  head: () => ({
    meta: [
      { title: "Historia, formación y filosofía | Soy Andy Lema" },
      {
        name: "description",
        content:
          "La historia, la formación, la experiencia y la filosofía de Andy Lema: psicología, coaching y 20 años en recursos humanos y transformación organizacional.",
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
          <p className="eyebrow">Soy Andy</p>
          <blockquote className="mt-6 font-display text-3xl leading-[1.3] sm:text-4xl">
            No creo en las fórmulas mágicas para vivir mejor. Creo en el conocimiento, las
            decisiones y las acciones que nos permiten construir una vida más consciente y
            satisfactoria.
          </blockquote>
        </Reveal>
        <Reveal delay={150}>
          <Photo
            src="/images/andrea-retrato-calido.webp"
            alt="Andy Lema trabajando en su escritorio"
            className="aspect-[4/5]"
            position="center 25%"
          />
        </Reveal>
      </section>

      <Section tinted eyebrow="Mi historia" title="Quién soy más allá de mis títulos">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          {story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className="font-semibold text-foreground">
            Y una convicción: Nuestra felicidad merece que nos la tomemos en serio.
          </p>
        </div>
      </Section>

      <Section eyebrow="Mi formación" title="Tres disciplinas, una misma pregunta">
        <ul className="grid gap-4 md:grid-cols-3">
          {(
            [
              { label: "Psicología", icon: Brain, tone: "indigo" },
              { label: "Coaching ontológico", icon: MessagesSquare, tone: "violet" },
              { label: "Psicología positiva", icon: Smile, tone: "blue" },
            ] as const
          ).map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-7 font-display text-xl"
            >
              <IconBadge icon={item.icon} tone={item.tone} />
              {item.label}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tinted
        eyebrow="Mi experiencia"
        title="Una trayectoria que integra personas, desarrollo y transformación."
        lead="Una trayectoria construida acompañando personas, impulsando líderes y transformando organizaciones, desde la psicología y el coaching positivo."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((item) => (
            <li key={item.figure} className="h-full rounded-2xl border border-border bg-card p-7">
              <p className="font-display text-3xl text-accent-ink">{item.figure}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

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
