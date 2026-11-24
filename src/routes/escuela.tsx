import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CalendarDays,
  GraduationCap,
  HeartHandshake,
  Layers,
  MessageSquareQuote,
  Plus,
  School,
  TrendingUp,
  Users,
} from "lucide-react";
import { Cultiva } from "@/components/Cultiva";
import { Reveal } from "@/components/Reveal";
import { StudentLogin } from "@/components/StudentLogin";
import {
  CallToAction,
  CardGrid,
  type CardItem,
  Pending,
  Section,
  buttonPrimary,
  mailto,
} from "@/components/sections";

export const Route = createFileRoute("/escuela")({
  head: () => ({
    meta: [
      { title: "Escuela de Coaching Positivo | Soy Andy Lema" },
      {
        name: "description",
        content:
          "Certificación en Coaching Positivo, Programa Líder Coach Positivo, Level Up para coaches y cursos de formación de la Escuela de Andy Lema.",
      },
      { property: "og:title", content: "Escuela de Coaching Positivo" },
      {
        property: "og:description",
        content: "Formación con enfoque educativo y académico, basada en el Método CULTIVA.",
      },
    ],
  }),
  component: Escuela,
});

const about: CardItem[] = [
  {
    title: "Qué es la Escuela",
    text: "El espacio de formación del universo de Andy Lema, para profesionales y personas que quieren aprender a acompañar a otros.",
    icon: School,
  },
  {
    title: "Qué es el Coaching Positivo",
    text: "Un enfoque de acompañamiento que integra el coaching y los aportes de la psicología positiva.",
    icon: HeartHandshake,
  },
];

const programs: CardItem[] = [
  {
    title: "Programa Líder Coach Positivo",
    text: "Para quienes quieren incorporar el coaching positivo a su forma de liderar.",
    icon: Users,
  },
  {
    title: "Level Up para coaches",
    text: "Para coaches que quieren seguir desarrollando su práctica profesional.",
    icon: TrendingUp,
  },
  {
    title: "Cursos y formaciones",
    text: "Propuestas de desarrollo personal y profesional sobre temas específicos. No otorgan certificación.",
    icon: Layers,
  },
];

const certification = [
  { icon: BookOpenCheck, label: "Fundamentos" },
  { icon: Layers, label: "Método CULTIVA" },
  { icon: Users, label: "Práctica supervisada" },
];

const faqs = [
  {
    question: "¿Todos los cursos otorgan una certificación?",
    answer:
      "No. En la Escuela separamos las formaciones certificadas de los cursos de desarrollo personal, y cada programa indica claramente lo que ofrece.",
  },
  {
    question: "¿Cómo recibo información sobre una formación?",
    answer:
      "Escríbenos indicando el programa que te interesa y te enviaremos la información disponible.",
  },
];

function Escuela() {
  return (
    <main className="brand-ecp bg-background text-foreground">
      {/* Hero, navy like the ECP logo */}
      <section className="ecp-dark relative overflow-hidden">
        <Plus
          aria-hidden="true"
          className="absolute right-[6%] top-10 h-16 w-16 rotate-12 text-ecp-lime/30"
          strokeWidth={3}
        />
        <Plus
          aria-hidden="true"
          className="absolute bottom-8 left-[4%] h-10 w-10 text-ecp-lime/20"
          strokeWidth={3}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-24 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-ecp-lime/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-ecp-lime">
              <GraduationCap size={14} aria-hidden="true" /> Escuela de Coaching Positivo
            </p>
            <h1 className="mt-6 text-balance text-5xl leading-[1.02] sm:text-7xl">
              Formación rigurosa para acompañar a{" "}
              <span className="text-ecp-lime">otras personas</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Un espacio educativo para aprender coaching positivo con fundamentos, metodología y
              práctica.
            </p>
            <div className="mt-10">
              <a href="#programas" className={buttonPrimary}>
                Ver la oferta académica <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="mx-auto w-full max-w-xs md:max-w-sm">
            <img
              src="/images/logo-escuela-coaching-azul.webp"
              alt="Logo de la Escuela de Coaching Positivo (ECP+)"
              className="w-full"
            />
          </Reveal>
        </div>
      </section>

      <div className="h-2 bg-ecp-lime" aria-hidden="true" />

      <Section eyebrow="Conoce la Escuela">
        <CardGrid columns={2} items={about} />
      </Section>

      <div className="border-t border-border bg-muted">
        <Cultiva
          eyebrow="Nuestra metodología y fundamentos"
          title="El Método CULTIVA"
          description="Cada paso del método se estudia y se practica antes de avanzar al siguiente."
        />
      </div>

      {/* Certification, highlighted in navy */}
      <section id="programas" className="ecp-dark">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[auto_1fr]">
          <span className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-ecp-lime text-ecp-lime">
            <Award size={52} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <Reveal>
            <p className="eyebrow">Formación certificada</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Certificación en Coaching Positivo</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              La formación base de la Escuela, construida sobre el Método CULTIVA, con práctica
              supervisada.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {certification.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-ecp-lime px-4 py-2 text-sm font-semibold text-ecp-navy"
                >
                  <Icon size={16} aria-hidden="true" /> {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="Otros programas y cursos" title="Más formas de seguir aprendiendo">
        <CardGrid items={programs} />
      </Section>

      <Section tinted eyebrow="Calendario" title="Próximas ediciones">
        <div className="flex items-start gap-4">
          <CalendarDays size={28} className="mt-6 shrink-0 text-accent-ink" aria-hidden="true" />
          <div className="flex-1">
            <Pending>Las fechas de las próximas ediciones.</Pending>
          </div>
        </div>
      </Section>

      <Section eyebrow="Testimonios" title="Lo que cuentan nuestros alumnos">
        <div className="flex items-start gap-4">
          <MessageSquareQuote
            size={28}
            className="mt-6 shrink-0 text-accent-ink"
            aria-hidden="true"
          />
          <div className="flex-1">
            <Pending>Testimonios reales de alumnos de la Escuela.</Pending>
          </div>
        </div>
      </Section>

      <Section tinted eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos">
        <div className="max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-card p-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {faq.question}
                <Plus
                  size={18}
                  className="shrink-0 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section id="campus" className="ecp-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-md gap-5">
            <GraduationCap size={40} className="shrink-0 text-ecp-lime" aria-hidden="true" />
            <div>
              <p className="eyebrow">Campus</p>
              <h2 className="mt-3 text-3xl">Acceso para alumnos</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Ingresa con tus credenciales para continuar tu formación.
              </p>
            </div>
          </div>
          <StudentLogin />
        </div>
      </section>

      <CallToAction
        icon={GraduationCap}
        title="¿Quieres formarte con nosotros?"
        text="Escríbenos para recibir información sobre la formación que te interesa."
        action={
          <a href={mailto("Quiero información sobre una formación")} className={buttonPrimary}>
            Solicitar información <ArrowRight size={16} aria-hidden="true" />
          </a>
        }
      />
    </main>
  );
}
