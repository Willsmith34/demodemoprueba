import { ImageIcon, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export const buttonPrimary =
  "inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_8px_24px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5";
export const buttonSecondary =
  "inline-flex items-center gap-2 rounded-full border-2 border-foreground px-7 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background";

// Colour pairs for icon badges, so a row of cards reads as a family without being monotone.
export const tones = {
  indigo: "bg-indigo/10 text-indigo",
  violet: "bg-violet/10 text-violet",
  blue: "bg-blue/10 text-blue",
  yellow: "bg-yellow/30 text-ink",
  accent: "bg-accent/15 text-accent-ink",
} as const;
export type Tone = keyof typeof tones;

export function IconBadge({
  icon: Icon,
  tone = "accent",
  className = "",
}: {
  icon: LucideIcon;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tones[tone]} ${className}`}
    >
      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}

// Soft wave edge between two sections, in the spirit of the reference sites.
export function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-6 w-full sm:h-10 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        fill="currentColor"
        d="M0 24c120-24 240-24 360 0s240 24 360 0 240-24 360 0 240 24 360 0v24H0z"
      />
    </svg>
  );
}

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
  icon,
  tone,
  children,
}: {
  title: string;
  text?: string;
  icon?: LucideIcon;
  tone?: Tone;
  children?: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 text-card-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(29,20,70,0.45)]">
      {icon && <IconBadge icon={icon} tone={tone} className="mb-5" />}
      <h3 className="font-display text-xl">{title}</h3>
      {text && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>}
      {children}
    </div>
  );
}

export type CardItem = { title: string; text?: string; icon?: LucideIcon; tone?: Tone };

export function CardGrid({
  items,
  columns = 3,
}: {
  items: CardItem[];
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
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-muted p-6 text-center text-sm text-muted-foreground ${className}`}
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
    <div className={`overflow-hidden rounded-2xl bg-muted ${className}`} style={{ background }}>
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
    <p className="rounded-2xl border border-dashed border-border p-7 text-sm leading-relaxed text-muted-foreground">
      <span className="eyebrow mr-2">Próximamente</span>
      {children}
    </p>
  );
}

export function CallToAction({
  title,
  text,
  action,
  icon: Icon,
}: {
  title: string;
  text: string;
  action: ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <section className="border-t border-border bg-muted">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <Reveal>
          {Icon && (
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
            </span>
          )}
          <h2 className="text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted-foreground">{text}</p>
          <div className="mt-8">{action}</div>
        </Reveal>
      </div>
    </section>
  );
}
