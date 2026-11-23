import { ImageIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export const buttonPrimary =
  "inline-block rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90";
export const buttonSecondary =
  "inline-block rounded-sm border border-foreground px-6 py-3 text-sm transition-colors hover:bg-foreground hover:text-background";

export function mailto(subject: string) {
  return `mailto:hola@andrealema.com?subject=${encodeURIComponent(subject)}`;
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-20 pt-24 sm:pt-32">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-balance text-5xl leading-[1.08] sm:text-6xl">{title}</h1>
        {lead && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
        )}
        {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
      </Reveal>
    </section>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  tinted = false,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  tinted?: boolean;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={`border-t border-border ${tinted ? "bg-muted" : ""}`}>
      <div className="mx-auto max-w-6xl px-5 py-20">
        {(eyebrow || title || lead) && (
          <Reveal className="max-w-2xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="mt-4 text-4xl">{title}</h2>}
            {lead && <p className="mt-5 leading-relaxed text-muted-foreground">{lead}</p>}
          </Reveal>
        )}
        {children && <div className={eyebrow || title || lead ? "mt-12" : ""}>{children}</div>}
      </div>
    </section>
  );
}

export function Card({
  title,
  text,
  children,
}: {
  title: string;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-sm border border-border bg-card p-7 text-card-foreground">
      <h3 className="font-display text-xl">{title}</h3>
      {text && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>}
      {children}
    </div>
  );
}

export function CardGrid({
  items,
  columns = 3,
}: {
  items: { title: string; text?: string }[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-4 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}
    >
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 60}>
          <Card {...item} />
        </Reveal>
      ))}
    </div>
  );
}

// Marks where a real photograph goes; the site should only show real photos of Andrea and her work.
export function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-border bg-muted p-6 text-center text-sm text-muted-foreground ${className}`}
    >
      <ImageIcon size={22} strokeWidth={1.5} />
      {label}
    </div>
  );
}

// A real photograph or logo filling the same box an ImagePlaceholder would.
// `contain` shows the whole image (logos) on a background colour instead of cropping it.
export function Photo({
  src,
  alt,
  className = "",
  position = "center",
  contain = false,
  background,
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  contain?: boolean;
  background?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-sm bg-muted ${className}`} style={{ background }}>
      <img
        src={src}
        alt={alt}
        decoding="async"
        className={`h-full w-full ${contain ? "object-contain" : "object-cover"}`}
        style={{ objectPosition: position }}
      />
    </div>
  );
}

// Marks content that needs real information before it can be published.
export function Pending({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-sm border border-dashed border-border p-7 text-sm leading-relaxed text-muted-foreground">
      <span className="eyebrow mr-2">Próximamente</span>
      {children}
    </p>
  );
}

export function CallToAction({
  title,
  text,
  action,
}: {
  title: string;
  text: string;
  action: ReactNode;
}) {
  return (
    <section className="border-t border-border bg-muted">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <Reveal>
          <h2 className="text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted-foreground">{text}</p>
          <div className="mt-8">{action}</div>
        </Reveal>
      </div>
    </section>
  );
}
