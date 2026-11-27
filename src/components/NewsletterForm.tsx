import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { buttonPrimary } from "./sections";

// Formulario embebido de MailerLite «La gente feliz no jode» (cuenta 2829965).
// Es una URL pública, no una clave secreta. La doble confirmación (double opt-in),
// el grupo de suscriptores y el correo de bienvenida se configuran en ese
// formulario dentro de MailerLite, sin tocar el código.
const MAILERLITE_ACTION =
  "https://assets.mailerlite.com/jsonp/2829965/forms/205327162427836271/subscribe";

const input =
  "w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

const genericError = "No pudimos completar la suscripción. Inténtalo de nuevo en unos minutos.";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState(genericError);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    // Campo trampa: las personas no lo ven, los bots lo rellenan. Si viene lleno,
    // se finge el éxito sin enviar nada a MailerLite (reemplaza al reCAPTCHA).
    if (String(form.get("website") ?? "") !== "") {
      setStatus("done");
      return;
    }

    const body = new FormData();
    body.append("fields[name]", String(form.get("name") ?? "").trim());
    body.append("fields[email]", String(form.get("email") ?? "").trim());
    body.append("ml-submit", "1");
    body.append("anticsrf", "true");

    setStatus("sending");
    try {
      const res = await fetch(MAILERLITE_ACTION, { method: "POST", body });
      const data = (await res.json()) as {
        success?: boolean;
        errors?: { fields?: Record<string, string[]> };
      };
      if (data.success) {
        setStatus("done");
        return;
      }
      setError(
        data.errors?.fields?.["email"]
          ? "Revisa tu correo electrónico: parece que no es válido."
          : genericError,
      );
      setStatus("error");
    } catch {
      setError(genericError);
      setStatus("error");
    }
  }

  return (
    <section id="newsletter" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-2xl px-5 py-20">
        <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl">La gente feliz no jode 🧡</h2>
          <p className="mt-3 font-semibold">Una carta para pensar, cuestionarnos y vivir mejor.</p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Reflexiones, psicología, historias y herramientas prácticas de Andrea Lema, directamente
            en tu correo.
          </p>

          {status === "done" ? (
            <p className="mt-8 flex items-start gap-3 rounded-2xl bg-muted p-5 text-sm leading-relaxed">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-accent-ink"
                aria-hidden="true"
              />
              ¡Gracias por sumarte! Revisa tu correo y confirma tu suscripción para empezar a
              recibir la carta.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <input
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px opacity-0"
              />
              <label className="block text-sm font-medium">
                Tu nombre
                <input
                  name="name"
                  required
                  autoComplete="given-name"
                  placeholder="¿Cómo te llamas?"
                  className={`${input} mt-2`}
                />
              </label>
              <label className="block text-sm font-medium">
                Tu correo electrónico
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tunombre@email.com"
                  className={`${input} mt-2`}
                />
              </label>
              <label className="flex items-start gap-3 text-sm">
                <input
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 accent-[var(--accent)]"
                />
                Acepto recibir el newsletter y otras comunicaciones de Andrea Lema.
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`${buttonPrimary} w-full justify-center disabled:opacity-60`}
              >
                {status === "sending" ? "Enviando…" : "Quiero recibir la carta"}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              {status === "error" && (
                <p role="alert" className="text-sm text-red-600">
                  {error}
                </p>
              )}
              <p className="text-xs leading-relaxed text-muted-foreground">
                Tus datos serán utilizados conforme a nuestra{" "}
                <Link to="/politica-de-privacidad" className="underline hover:text-foreground">
                  política de privacidad
                </Link>
                . Podrás cancelar tu suscripción cuando quieras.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
