import { useEffect, useState, type FormEvent } from "react";

type Student = { name: string; email: string };

const errorMessages: Record<string, string> = {
  invalid_credentials: "Email o contraseña incorrectos.",
  too_many_attempts: "Demasiados intentos. Prueba de nuevo en 15 minutos.",
};
const defaultError = "No pudimos iniciar sesión. Prueba de nuevo más tarde.";

export function StudentLogin() {
  const [student, setStudent] = useState<Student | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setStudent(data?.student ?? null))
      .catch(() => {});
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
      });
      const data = await res.json();
      if (res.ok) {
        setStudent(data.student);
      } else {
        setError(errorMessages[data.error] ?? defaultError);
      }
    } catch {
      setError(defaultError);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLogout() {
    const res = await fetch("/api/logout", { method: "POST" });
    if (res.ok) setStudent(null);
  }

  if (student) {
    return (
      <div className="w-full max-w-sm space-y-3 rounded-sm border border-border bg-card p-6">
        <p className="text-sm">Hola, {student.name}</p>
        <p className="text-xs text-accent">El campus estará disponible próximamente.</p>
        <button
          type="button"
          onClick={handleLogout}
          className="w-full rounded-sm bg-foreground px-4 py-2.5 text-sm text-background transition-opacity hover:opacity-90"
        >
          Salir
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm space-y-3 rounded-sm border border-border bg-card p-6"
    >
      <label className="block text-xs text-muted-foreground" htmlFor="email">
        Usuario o email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
      />
      <label className="block text-xs text-muted-foreground" htmlFor="pass">
        Contraseña
      </label>
      <input
        id="pass"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-sm bg-foreground px-4 py-2.5 text-sm text-background transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        Ingresar
      </button>
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
      <a href="#" className="block text-center text-xs text-muted-foreground underline">
        ¿Olvidaste tu contraseña?
      </a>
    </form>
  );
}
