import { createFileRoute } from "@tanstack/react-router";
import {
  CallToAction,
  CardGrid,
  Photo,
  PageHero,
  Pending,
  Section,
  buttonPrimary,
  mailto,
} from "@/components/sections";

export const Route = createFileRoute("/conferencias")({
  head: () => ({
    meta: [
      { title: "Conferencias y colaboraciones | Andrea Lema" },
      {
        name: "description",
        content:
          "Conferencias, talleres y colaboraciones de Andrea Lema para empresas, universidades, medios y organizadores de eventos.",
      },
    ],
  }),
  component: Conferencias,
});

const topics = [
  "Bienestar",
  "Liderazgo positivo",
  "Conversaciones",
  "Prevención del burnout",
  "Cambio",
  "Cultura",
  "Seguridad psicológica",
  "Equipos",
  "Propósito",
  "Adaptación",
  "Experiencia del empleado",
];

function Conferencias() {
  return (
    <main>
      <PageHero
        eyebrow="Conferencias y colaboraciones"
        title="Ideas para llevar a tu escenario, tu aula o tu medio"
        lead="Para empresas, universidades, medios y organizadores de eventos."
      >
        <a href={mailto("Solicitud de propuesta para conferencia")} className={buttonPrimary}>
          Solicitar una propuesta
        </a>
      </PageHero>

      <Section tinted eyebrow="Temas de conferencias" title="Sobre qué podemos conversar">
        <ul className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <li key={topic} className="rounded-sm border border-border bg-card px-4 py-2 text-sm">
              {topic}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Formatos" title="Talleres y experiencias">
        <CardGrid
          columns={2}
          items={[
            {
              title: "Conferencias",
              text: "Charlas que instalan un lenguaje común sobre los temas que importan a tu audiencia.",
            },
            {
              title: "Talleres y experiencias",
              text: "Espacios prácticos para equipos y grupos, con herramientas aplicables.",
            },
          ]}
        />
      </Section>

      <Section
        tinted
        eyebrow="Experiencia y trayectoria"
        title="20 años de experiencia en organizaciones"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Pending>Perfil profesional descargable y trayectoria en eventos.</Pending>
          <Photo
            src="/images/andrea-presentacion.webp"
            alt="Andrea Lema dando una presentación"
            className="h-72"
            position="center 30%"
          />
        </div>
      </Section>

      <CallToAction
        title="Solicita una propuesta"
        text="Cuéntanos sobre tu evento, tu audiencia y las fechas que estás considerando."
        action={
          <a href={mailto("Solicitud de propuesta para conferencia")} className={buttonPrimary}>
            Escríbenos
          </a>
        }
      />
    </main>
  );
}
