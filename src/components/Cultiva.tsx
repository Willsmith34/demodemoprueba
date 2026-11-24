import { Compass, Map, Unlock, Sparkles, Target, Sun, SlidersHorizontal } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { n: "01", label: "Conócete", Icon: Compass },
  { n: "02", label: "Ubícate", Icon: Map },
  { n: "03", label: "Libérate", Icon: Unlock },
  { n: "04", label: "Transforma", Icon: Sparkles },
  { n: "05", label: "Intenciona", Icon: Target },
  { n: "06", label: "Vive", Icon: Sun },
  { n: "07", label: "Ajusta", Icon: SlidersHorizontal },
];

export function Cultiva({
  eyebrow = "Metodología transversal",
  title = "Método CULTIVA",
  description,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">{title}</h2>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{description}</p>
        )}
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-7">
        {steps.map((s, i) => (
          <Reveal key={s.label} delay={i * 60} className="bg-card p-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <s.Icon size={18} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <p className="mt-5 font-mono text-xs text-muted-foreground">{s.n}</p>
            <p className="mt-1 font-display text-lg">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
