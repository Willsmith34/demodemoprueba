import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, GraduationCap, HeartPulse, Mic, Newspaper } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { IconBadge, PageHero, mailto, type Tone } from "@/components/sections";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Soy Andy Lema" },
      {
        name: "description",
        content:
          "Escribe a Andy Lema para iniciar un proceso psicológico, conocer una formación, contratar una conferencia, trabajar con tu organización o colaborar.",
      },
    ],
  }),
  component: Contacto,
});

const reasons: { text: string; icon: typeof Mic; tone: Tone }[] = [
  { text: "Quiero iniciar un proceso psicológico", icon: HeartPulse, tone: "violet" },
  { text: "Quiero información sobre una formación", icon: GraduationCap, tone: "indigo" },
  { text: "Quiero contratar una conferencia", icon: Mic, tone: "blue" },
  { text: "Quiero trabajar contigo en mi organización", icon: Building2, tone: "violet" },
  { text: "Quiero colaborar o entrevistarte", icon: Newspaper, tone: "yellow" },
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
            <Reveal key={reason.text} as="li" delay={i * 60}>
              <a
                href={mailto(reason.text)}
                className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent"
              >
                <IconBadge icon={reason.icon} tone={reason.tone} />
                <span className="flex-1 font-display text-xl">{reason.text}</span>
                <ArrowRight
                  size={20}
                  className="text-accent-ink transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </main>
  );
}
