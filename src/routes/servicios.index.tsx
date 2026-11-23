import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Card, PageHero, Photo, Section } from "@/components/sections";
import { servicesFor, type Service } from "@/content/services";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios profesionales para personas y organizaciones | Andrea Lema" },
      {
        name: "description",
        content:
          "Psicoterapia, claridad profesional, reinvención, consultoría organizacional, desarrollo de líderes, cultura y bienestar laboral con Andrea Lema.",
      },
    ],
  }),
  component: Servicios,
});

function ServiceCards({ audience }: { audience: Service["audience"] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {servicesFor(audience).map((service, i) => (
        <Reveal key={service.slug} delay={i * 60}>
          <Link to="/servicios/$slug" params={{ slug: service.slug }} className="block h-full">
            <Card title={service.title} text={service.summary}>
              <span className="mt-4 text-sm font-medium text-accent-ink">Ver más →</span>
            </Card>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

function Servicios() {
  return (
    <main>
      <PageHero
        eyebrow="Servicios profesionales"
        title="Dos grandes caminos para trabajar juntos"
        lead="Ya sea que busques un cambio en tu vida o en tu organización, aquí encontrarás por dónde empezar."
      />

      <Section id="personas" tinted eyebrow="Para personas" title="Tu vida y tu desarrollo">
        <Photo
          src="/images/andrea-retrato-profesional.webp"
          alt="Andrea Lema en su espacio de consulta"
          className="mb-6 h-56"
          position="center 28%"
        />
        <ServiceCards audience="personas" />
      </Section>

      <Section id="organizaciones" eyebrow="Para organizaciones" title="Tus equipos y tu cultura">
        <Photo
          src="/images/andrea-presentacion.webp"
          alt="Andrea Lema trabajando con una organización"
          className="mb-6 h-56"
          position="center 30%"
        />
        <ServiceCards audience="organizaciones" />
        <Link to="/conferencias" className="mt-4 block">
          <Card
            title="Conferencias y talleres"
            text="Temas, formatos y solicitud de propuestas para tu evento u organización."
          >
            <span className="mt-4 text-sm font-medium text-accent-ink">Ver más →</span>
          </Card>
        </Link>
      </Section>
    </main>
  );
}
