import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/sections";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Soy Andy Lema" },
      {
        name: "description",
        content:
          "Cómo se recogen, usan y protegen los datos personales en el sitio de Andrea Lema, incluida la suscripción al newsletter «La gente feliz no jode».",
      },
    ],
  }),
  component: PoliticaDePrivacidad,
});

const UPDATED = "27 de noviembre de 2026";
const EMAIL = "hola@andrealema.com";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl">{title}</h2>
      {children}
    </section>
  );
}

function PoliticaDePrivacidad() {
  const mail = (
    <a href={`mailto:${EMAIL}`} className="font-medium text-accent-ink underline">
      {EMAIL}
    </a>
  );

  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Política de privacidad"
        lead={`Última actualización: ${UPDATED}.`}
      />

      <div className="mx-auto max-w-3xl space-y-12 px-5 pb-24 leading-relaxed text-muted-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground">
        <Block title="1. Quién es responsable de tus datos">
          <p>
            La responsable del tratamiento de los datos personales recogidos en este sitio es{" "}
            <strong>Andrea Lema</strong> («Andy Lema»). Para cualquier consulta sobre privacidad
            puedes escribir a {mail}.
          </p>
        </Block>

        <Block title="2. Qué datos recogemos">
          <ul className="space-y-2">
            <li>
              <strong>Newsletter «La gente feliz no jode»:</strong> tu nombre, tu correo electrónico
              y tu consentimiento para recibir comunicaciones.
            </li>
            <li>
              <strong>Contacto:</strong> los datos que incluyas en los correos que nos envíes
              (nombre, correo y el contenido del mensaje).
            </li>
            <li>
              <strong>Campus de alumnos:</strong> los datos de acceso de las personas inscritas en
              la Escuela de Coaching Positivo.
            </li>
          </ul>
          <p>No pedimos ni tratamos datos de salud a través de este sitio web.</p>
        </Block>

        <Block title="3. Para qué los usamos">
          <ul className="space-y-2">
            <li>Enviarte el newsletter y otras comunicaciones que aceptaste recibir.</li>
            <li>Responder a tus consultas y solicitudes.</li>
            <li>Dar acceso al campus a los alumnos de la Escuela.</li>
          </ul>
          <p>
            La base para tratar tus datos es tu <strong>consentimiento</strong>, que das al marcar
            la casilla del formulario o al escribirnos. Puedes retirarlo en cualquier momento.
          </p>
        </Block>

        <Block title="4. Con quién los compartimos">
          <p>
            No vendemos ni cedemos tus datos a terceros. Para enviar el newsletter usamos{" "}
            <strong>MailerLite</strong>, una plataforma de email marketing que guarda la lista de
            suscriptores y procesa los datos solo para prestarnos ese servicio. El sitio web está
            alojado en un proveedor de servicios en la nube.
          </p>
        </Block>

        <Block title="5. Cuánto tiempo los conservamos">
          <p>
            Conservamos tus datos mientras sigas suscrita o suscrito al newsletter, o mientras sean
            necesarios para atender tu consulta o tu formación. Si te das de baja, dejamos de
            enviarte comunicaciones y eliminamos tus datos cuando ya no sean necesarios.
          </p>
        </Block>

        <Block title="6. Cómo darte de baja">
          <p>
            Cada correo del newsletter incluye un enlace para cancelar la suscripción con un solo
            clic. También puedes pedirlo escribiendo a {mail}.
          </p>
        </Block>

        <Block title="7. Tus derechos">
          <p>
            Puedes pedir acceder a tus datos, corregirlos, eliminarlos, oponerte a su uso o retirar
            tu consentimiento. Para hacerlo, escribe a {mail} indicando qué necesitas y te
            responderemos lo antes posible.
          </p>
        </Block>

        <Block title="8. Cookies">
          <p>
            Este sitio no usa cookies publicitarias ni de seguimiento. Solo el campus de alumnos usa
            una cookie técnica para mantener la sesión iniciada, y únicamente después de que un
            alumno entra con sus credenciales.
          </p>
        </Block>

        <Block title="9. Cambios en esta política">
          <p>
            Si actualizamos esta política, publicaremos la nueva versión en esta página con su fecha
            de actualización.
          </p>
        </Block>
      </div>
    </main>
  );
}
