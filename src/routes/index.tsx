import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  Card,
  CardGrid,
  Photo,
  Section,
  buttonPrimary,
  buttonSecondary,
  mailto,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andrea Lema — Psicología, desarrollo humano y transformación" },
      {
        name: "description",
        content:
          "Psicología, desarrollo humano y transformación para vivir y trabajar mejor. Conoce a Andrea Lema, Felicidad en Serio, la Escuela de Coaching Positivo y sus servicios.",
      },
      { property: "og:title", content: "Andrea Lema" },
      {
        property: "og:description",
        content: "Psicología, desarrollo humano y transformación para vivir y trabajar mejor.",
      },
    ],
  }),
  component: Index,
});

const territories = [
  {
    title: "Psicología",
    text: "Comprender lo que sentimos, pensamos y hacemos, con el conocimiento como punto de partida.",
  },
  {
    title: "Desarrollo humano",
    text: "Las decisiones, los hábitos y las relaciones con los que construimos una vida más consciente.",
  },
  {
    title: "Transformación",
    text: "Los cambios en la vida y en las organizaciones, llevados de la intención a la acción.",
  },
];

const universe = [
  {
    to: "/felicidad-en-serio",
    image: {
      src: "/images/logo-felicidad-en-serio.webp",
      alt: "Logo de Felicidad en Serio",
      contain: true,
      background: "#140522",
    },
    title: "Felicidad en Serio",
    text: "Un movimiento de desarrollo humano.",
  },
  {
    to: "/escuela",
    image: {
      src: "/images/logo-escuela-coaching-azul.webp",
      alt: "Logo de la Escuela de Coaching Positivo",
      contain: true,
      background: "#0b1521",
    },
    title: "Escuela de Coaching",
    text: "Formación con enfoque educativo y académico.",
  },
  {
    to: "/servicios",
    hash: "personas",
    image: {
      src: "/images/andrea-retrato-calido.webp",
      alt: "Andrea Lema en su espacio de trabajo",
      position: "center 20%",
    },
    title: "Psicología",
    text: "Psicoterapia y procesos para personas.",
  },
  {
    to: "/servicios",
    hash: "organizaciones",
    image: {
      src: "/images/andrea-presentacion.webp",
      alt: "Andrea Lema presentando ante un equipo",
      position: "center 30%",
    },
    title: "Empresas",
    text: "Consultoría, liderazgo y cultura.",
  },
] as const;

const media = [
  {
    to: "/contenidos/libro-felicidad-en-serio",
    title: "Libro",
    text: "Felicidad en serio. Cómo sanar, reinventarte y volver a brillar.",
  },
  {
    to: "/conferencias",
    title: "Conferencias",
    text: "Para empresas, universidades, medios y organizadores de eventos.",
  },
  {
    to: "/contenidos",
    title: "Podcast",
    text: "Conversaciones para pensar la vida y el trabajo.",
  },
] as const;

function Index() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <h1 className="text-balance text-5xl leading-[1.05] sm:text-6xl">
            ¿Y si empezamos a tomarnos en serio{" "}
            <span className="italic text-accent-ink">la vida que queremos vivir?</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Psicología, desarrollo humano y transformación para vivir y trabajar mejor.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#universo" className={buttonPrimary}>
              Explora mi universo
            </a>
            <Link to="/sobre-andrea" className={buttonSecondary}>
              Conoce a Andrea
            </Link>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <Photo
            src="/images/andrea-retrato-profesional.webp"
            alt="Retrato de Andrea Lema sonriendo en su escritorio"
            className="aspect-[4/5]"
            position="center 30%"
          />
        </Reveal>
      </section>

      <Section
        tinted
        eyebrow="Conoce a Andrea"
        title="No tengo una sola respuesta. Tengo muchas preguntas que vale la pena hacernos."
        lead="Soy psicóloga, coach y tengo 20 años de experiencia en recursos humanos y transformación organizacional. Mi trabajo integra estas miradas en tres territorios de conocimiento."
      >
        <CardGrid items={territories} />
      </Section>

      <Section id="universo" eyebrow="Explora" title="Encuentra tu lugar en este universo">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {universe.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <Link
                to={item.to}
                {...("hash" in item ? { hash: item.hash } : {})}
                className="group block"
              >
                <Photo {...item.image} className="aspect-[4/3]" />
                <h3 className="mt-4 font-display text-xl group-hover:underline">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tinted eyebrow="Servicios" title="¿Cómo podemos trabajar juntos?">
        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/servicios" hash="personas">
            <Card
              title="Para personas"
              text="Psicoterapia, claridad profesional, reinvención y acompañamiento."
            />
          </Link>
          <Link to="/servicios" hash="organizaciones">
            <Card
              title="Para organizaciones"
              text="Consultoría, líderes, cultura, transformación y conferencias."
            />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Últimos contenidos"
        title="Ideas para pensar. Herramientas para transformar."
        lead="Últimos artículos, episodios, videos y libros."
      >
        <Link to="/contenidos" className={buttonSecondary}>
          Ver las ideas
        </Link>
      </Section>

      <Section tinted eyebrow="Más allá de la consulta" title="Libros, conferencias y podcast">
        <div className="grid gap-4 md:grid-cols-3">
          {media.map((item) => (
            <Link key={item.title} to={item.to}>
              <Card title={item.title} text={item.text} />
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Newsletter · La gente feliz no jode"
        title="Una conversación que no depende de los algoritmos"
        lead="Ideas y recursos directamente en tu correo."
      >
        <a href={mailto("Quiero suscribirme a la newsletter")} className={buttonPrimary}>
          Quiero suscribirme
        </a>
      </Section>

      <Section tinted eyebrow="Contacto" title="Conversemos." lead="Cuéntame qué estás buscando.">
        <Link to="/contacto" className={buttonPrimary}>
          Ir a contacto
        </Link>
      </Section>
    </main>
  );
}
