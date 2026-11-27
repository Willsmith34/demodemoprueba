import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Building2,
  Headphones,
  Lightbulb,
  Mail,
  MessageCircleHeart,
  Mic,
  Sparkles,
  Sprout,
  UserRound,
} from "lucide-react";
import { NewsletterForm } from "@/components/NewsletterForm";
import { BOOK_URL, external } from "@/content/links";
import { Reveal } from "@/components/Reveal";
import {
  Card,
  CardGrid,
  type CardItem,
  IconBadge,
  Photo,
  Section,
  buttonPrimary,
  buttonSecondary,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soy Andy Lema" },
      {
        name: "description",
        content:
          "Psicología, desarrollo humano y transformación para vivir y trabajar mejor. Conoce a Andy Lema, la Escuela de Coaching Positivo, Felicidad en Serio y sus servicios.",
      },
      { property: "og:title", content: "Soy Andy Lema" },
      {
        property: "og:description",
        content: "Psicología, desarrollo humano y transformación para vivir y trabajar mejor.",
      },
    ],
  }),
  component: Index,
});

const territories: CardItem[] = [
  {
    title: "Psicología & Coaching",
    text: "Comprender nuestras emociones, pensamientos y comportamientos para desarrollar recursos que nos permitan vivir con mayor bienestar y salud emocional",
    icon: Brain,
    tone: "indigo",
  },
  {
    title: "Desarrollo humano",
    text: "Comprender nuestras emociones, pensamientos y comportamientos para desarrollar recursos que nos permitan vivir con mayor bienestar y salud emocional",
    icon: Sprout,
    tone: "violet",
  },
  {
    title: "Transformación Organizacional",
    text: "Acompañar procesos de cambio y evolución en las personas, los equipos y las organizaciones, convirtiendo las ideas y las intenciones en acciones concretas",
    icon: Sparkles,
    tone: "blue",
  },
];

const universe = [
  {
    to: "/escuela",
    image: {
      src: "/images/logo-escuela-coaching.webp",
      alt: "Logo de la Escuela de Coaching Positivo",
      contain: true,
      background: "#0b1521",
    },
    title: "Escuela de Coaching",
    text: "Formación con enfoque educativo y académico.",
  },
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
    to: "/servicios",
    hash: "personas",
    image: {
      src: "/images/andrea-retrato-calido.webp",
      alt: "Andy Lema en su espacio de trabajo",
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
      alt: "Andy Lema presentando ante un equipo",
      position: "center 30%",
    },
    title: "Empresas",
    text: "Consultoría, liderazgo y cultura.",
  },
] as const;

const media = [
  {
    href: BOOK_URL,
    title: "Libro",
    text: "Felicidad en serio. Cómo sanar, reinventarte y volver a brillar.",
    icon: BookOpen,
    tone: "violet",
  },
  {
    to: "/conferencias",
    title: "Conferencias",
    text: "Para empresas, universidades, medios y organizadores de eventos.",
    icon: Mic,
    tone: "indigo",
  },
  {
    to: "/contenidos",
    title: "Podcast",
    text: "Conversaciones sobre la vida real y aprender a vivirla mejor.",
    icon: Headphones,
    tone: "blue",
  },
] as const;

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-lavender/20 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:py-24 md:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-yellow px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
              <Sparkles size={14} aria-hidden="true" /> Psicóloga · Coach · Speaker
            </p>
            <h1 className="mt-7 text-balance text-5xl leading-[1.05] sm:text-6xl">
              ¿Y si empezamos a tomarnos en serio{" "}
              <span className="text-gradient font-semibold italic">
                la vida que queremos vivir?
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Psicología, desarrollo humano y transformación para vivir y trabajar mejor.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#universo" className={buttonPrimary}>
                Explora mi universo <ArrowRight size={16} aria-hidden="true" />
              </a>
              <Link to="/sobre-andrea" className={buttonSecondary}>
                Conoce a Andy
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] bg-indigo sm:-right-6 sm:-top-6"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-yellow"
            />
            <Photo
              src="/images/andrea-retrato-profesional.webp"
              alt="Retrato de Andy Lema sonriendo en su escritorio"
              className="relative aspect-[4/5] rounded-[2rem]"
              position="center 30%"
            />
            <p className="absolute -bottom-5 right-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-lg">
              <MessageCircleHeart size={18} className="text-violet" aria-hidden="true" />
              +18 años acompañando personas
            </p>
          </Reveal>
        </div>
      </section>

      <Section
        tinted
        eyebrow="Conoce a Andy"
        title="No tengo una sola respuesta. Tengo muchas preguntas que vale la pena hacernos."
        lead="Soy psicóloga, coach y creadora de Coaching Positivo, con más de 20 años de experiencia en recursos humanos, liderazgo y transformación personal y organizacional. Mi trabajo integra estas miradas en tres territorios de conocimiento."
      >
        <CardGrid items={territories} />
      </Section>

      <Section id="universo" eyebrow="Explora" title="Encuentra tu lugar en este universo">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {universe.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <Link
                to={item.to}
                {...("hash" in item ? { hash: item.hash } : {})}
                className="group block"
              >
                <Photo
                  {...item.image}
                  className="aspect-[4/3] transition-transform duration-300 group-hover:-translate-y-1"
                />
                <h3 className="mt-4 flex items-center gap-2 font-display text-xl">
                  {item.title}
                  <ArrowRight
                    size={18}
                    className="text-accent-ink transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </h3>
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
              icon={UserRound}
              tone="violet"
            />
          </Link>
          <Link to="/servicios" hash="organizaciones">
            <Card
              title="Para organizaciones"
              text="Consultoría, líderes, cultura, transformación y conferencias."
              icon={Building2}
              tone="blue"
            />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Últimos contenidos"
        title="Ideas para pensar. Herramientas para transformar."
        lead="Últimos artículos, episodios, videos y libros."
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex gap-3">
            <IconBadge icon={Lightbulb} tone="yellow" />
            <IconBadge icon={BookOpen} tone="violet" />
            <IconBadge icon={Headphones} tone="blue" />
          </div>
          <Link to="/contenidos" className={buttonSecondary}>
            Ver las ideas <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Section>

      <Section tinted eyebrow="Más allá de la consulta" title="Libros, conferencias y podcast">
        <div className="grid gap-4 md:grid-cols-3">
          {media.map((item) => {
            const card = (
              <Card title={item.title} text={item.text} icon={item.icon} tone={item.tone} />
            );
            return "href" in item ? (
              <a key={item.title} href={item.href} {...external}>
                {card}
              </a>
            ) : (
              <Link key={item.title} to={item.to}>
                {card}
              </Link>
            );
          })}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink text-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-blue/40 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[auto_1fr_auto]">
          <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow text-ink">
            <Mail size={34} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow">
              Newsletter · La gente feliz no jode
            </p>
            <h2 className="mt-3 text-4xl">Una conversación que no depende de los algoritmos</h2>
            <p className="mt-3 text-ivory/75">Ideas y recursos directamente en tu correo.</p>
          </Reveal>
          <a
            href="#newsletter"
            className="inline-flex items-center gap-2 justify-self-start rounded-full bg-yellow px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Quiero suscribirme <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <NewsletterForm />

      <Section tinted eyebrow="Contacto" title="Conversemos." lead="Cuéntame qué estás buscando.">
        <Link to="/contacto" className={buttonPrimary}>
          Ir a contacto <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </Section>
    </main>
  );
}
