import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, mailto } from "@/components/sections";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Andrea Lema" },
      {
        name: "description",
        content:
          "Escribe a Andrea Lema para iniciar un proceso psicológico, conocer una formación, contratar una conferencia, trabajar con tu organización o colaborar.",
      },
    ],
  }),
  component: Contacto,
});

const reasons = [
  "Quiero iniciar un proceso psicológico",
  "Quiero información sobre una formación",
  "Quiero contratar una conferencia",
  "Quiero trabajar contigo en mi organización",
  "Quiero colaborar o entrevistarte",
];

function Contacto() {
  return (
    <main>
      <PageHero
        eyebrow="Contacto"
        title="Conversemos."
        lead="Elige lo que estás buscando y escríbeme."
      />

      <section className="mx-auto max-w-4xl px-5 pb-24">
        <ul className="space-y-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason} as="li" delay={i * 60}>
              <a
                href={mailto(reason)}
                className="flex items-center justify-between gap-4 rounded-sm border border-border bg-card p-6 transition-colors hover:border-foreground"
              >
                <span className="font-display text-xl">{reason}</span>
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </main>
  );
}
