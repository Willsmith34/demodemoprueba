import { createFileRoute } from "@tanstack/react-router";
import { Cultiva } from "@/components/Cultiva";
import { StudentLogin } from "@/components/StudentLogin";
import {
  CallToAction,
  Card,
  CardGrid,
  PageHero,
  Pending,
  Section,
  buttonPrimary,
  mailto,
} from "@/components/sections";

export const Route = createFileRoute("/escuela")({
  head: () => ({
    meta: [
      { title: "Escuela de Coaching Positivo | Andrea Lema" },
      {
        name: "description",
        content:
          "Certificación en Coaching Positivo, Programa Líder Coach Positivo, Level Up para coaches y cursos de formación de la Escuela de Andrea Lema.",
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

const programs = [
  {
    title: "Programa Líder Coach Positivo",
    text: "Para quienes quieren incorporar el coaching positivo a su forma de liderar.",
  },
  {
    title: "Level Up para coaches",
    text: "Para coaches que quieren seguir desarrollando su práctica profesional.",
  },
  {
    title: "Cursos y formaciones",
    text: "Propuestas de desarrollo personal y profesional sobre temas específicos. No otorgan certificación.",
  },
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
      <PageHero
        eyebrow="Escuela de Coaching Positivo"
        title="Formación rigurosa para acompañar a otras personas"
        lead="Un espacio educativo para aprender coaching positivo con fundamentos, metodología y práctica."
      >
        <a href="#programas" className={buttonPrimary}>
          Ver la oferta académica
        </a>
      </PageHero>

      <Section tinted eyebrow="Conoce la Escuela">
        <CardGrid
          columns={2}
          items={[
            {
              title: "Qué es la Escuela",
              text: "El espacio de formación del universo de Andrea Lema, para profesionales y personas que quieren aprender a acompañar a otros.",
            },
            {
              title: "Qué es el Coaching Positivo",
              text: "Un enfoque de acompañamiento que integra el coaching y los aportes de la psicología positiva.",
            },
          ]}
        />
      </Section>

      <Cultiva
        eyebrow="Nuestra metodología y fundamentos"
        title="El Método CULTIVA"
        description="Cada paso del método se estudia y se practica antes de avanzar al siguiente."
      />

      <Section
        id="programas"
        tinted
        eyebrow="Formación certificada"
        title="Certificación en Coaching Positivo"
      >
        <Card
          title="Certificación en Coaching Positivo"
          text="La formación base de la Escuela, construida sobre el Método CULTIVA, con práctica supervisada."
        />
      </Section>

      <Section eyebrow="Otros programas y cursos" title="Más formas de seguir aprendiendo">
        <CardGrid items={programs} />
      </Section>

      <Section tinted eyebrow="Calendario" title="Próximas ediciones">
        <Pending>Las fechas de las próximas ediciones.</Pending>
      </Section>

      <Section eyebrow="Testimonios" title="Lo que cuentan nuestros alumnos">
        <Pending>Testimonios reales de alumnos de la Escuela.</Pending>
      </Section>

      <Section tinted eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos">
        <div className="max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-sm border border-border bg-card p-5">
              <summary className="cursor-pointer font-medium">{faq.question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section id="campus" className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <p className="eyebrow">Campus</p>
            <h2 className="mt-3 text-2xl">Acceso para alumnos</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Ingresa con tus credenciales para continuar tu formación.
            </p>
          </div>
          <StudentLogin />
        </div>
      </section>

      <CallToAction
        title="¿Quieres formarte con nosotros?"
        text="Escríbenos para recibir información sobre la formación que te interesa."
        action={
          <a href={mailto("Quiero información sobre una formación")} className={buttonPrimary}>
            Solicitar información
          </a>
        }
      />
    </main>
  );
}
