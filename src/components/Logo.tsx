// "Soy Andy Lema" logo. Transparent PNG cut from public/images/LOGO SOYANDY.png.
const LOGO_SRC = "/images/logo-soyandylema.png";

/** Navbar logo. */
export function LogoInline({ className = "" }: { className?: string }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Soy Andy Lema"
      width={688}
      height={546}
      className={`block h-14 w-auto ${className}`}
    />
  );
}

/** Larger logo for the footer and big spots. */
export function LogoStacked({ className = "" }: { className?: string }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Soy Andy Lema"
      width={688}
      height={546}
      loading="lazy"
      className={`block h-24 w-auto ${className}`}
    />
  );
}
