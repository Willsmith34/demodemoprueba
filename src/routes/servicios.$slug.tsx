import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  CallToAction,
  Card,
  PageHero,
  Pending,
  Section,
  buttonPrimary,
  mailto,
} from "@/components/sections";
import { services } from "@/content/services";

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Soy Andy Lema` },
          { name: "description", content: loaderData.summary },
        ]
      : [],
  }),
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();
  const isForPeople = service.audience === "personas";

  return (
    <main>
      <PageHero
        eyebrow={isForPeople ? "Para personas" : "Para organizaciones"}
        title={service.title}
        lead={service.problem}
      >
        <a href={mailto(`Quiero información sobre: ${service.title}`)} className={buttonPrimary}>
          Solicitar información
        </a>
      </PageHero>

      <Section tinted>
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <Card title="Para quién es" text={service.forWhom} />
          </Reveal>
          <Reveal delay={80}>
            <Card title="Cómo funciona" text={service.howItWorks} />
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Resultados esperados" title="Qué puedes esperar">
        <ul className="grid gap-4 md:grid-cols-3">
          {service.outcomes.map((outcome) => (
            <li
              key={outcome}
              className="rounded-sm border border-border bg-card p-7 text-sm leading-relaxed"
            >
              {outcome}
            </li>
          ))}
        </ul>
      </Section>

      <Section tinted eyebrow="Condiciones">
        <Pending>Modalidad, duración y valor de este servicio.</Pending>
      </Section>

      <CallToAction
        title="Conversemos."
        text="Cuéntame tu situación y vemos si este es el camino adecuado."
        action={
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={mailto(`Quiero información sobre: ${service.title}`)}
              className={buttonPrimary}
            >
              Escríbeme
            </a>
            <Link to="/servicios" className="self-center text-sm underline">
              Ver todos los servicios
            </Link>
          </div>
        }
      />
    </main>
  );
}
