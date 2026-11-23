export type Service = {
  slug: string;
  audience: "personas" | "organizaciones";
  title: string;
  summary: string;
  problem: string;
  forWhom: string;
  howItWorks: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "psicoterapia",
    audience: "personas",
    title: "Psicoterapia",
    summary: "Un espacio profesional para atender lo que te está pasando.",
    problem:
      "Hay momentos en los que lo que sentimos o vivimos pesa más de lo que podemos sostener con nuestros propios recursos.",
    forWhom:
      "Para quienes quieren iniciar un proceso psicológico, ya sea por una situación concreta o por algo que se repite en su vida.",
    howItWorks:
      "Comenzamos con una primera conversación para entender tu situación y definir si este es el espacio adecuado para ti.",
    outcomes: [
      "Mayor comprensión de lo que te ocurre.",
      "Recursos para afrontar lo que estás viviendo.",
      "Un proceso con objetivos conversados y revisados.",
    ],
  },
  {
    slug: "claridad-profesional",
    audience: "personas",
    title: "Coaching de claridad profesional",
    summary: "Para decidir hacia dónde quieres llevar tu vida profesional.",
    problem:
      "Sientes que tu trabajo ya no encaja, o que tienes varias opciones y ninguna termina de convencerte.",
    forWhom:
      "Para profesionales en un punto de inflexión que necesitan ordenar sus ideas antes de tomar una decisión.",
    howItWorks:
      "Un proceso de coaching individual para explorar qué quieres, qué te frena y cuál es tu siguiente paso.",
    outcomes: [
      "Más claridad sobre tus prioridades profesionales.",
      "Criterios propios para decidir.",
      "Un plan de acción concreto.",
    ],
  },
  {
    slug: "reinvencion-desarrollo-personal",
    audience: "personas",
    title: "Reinvención y desarrollo personal",
    summary: "Para construir una nueva etapa después de un cambio.",
    problem:
      "Una crisis, una pérdida o un cambio importante te dejaron con la sensación de tener que empezar de nuevo.",
    forWhom: "Para quienes atraviesan un cambio de etapa y quieren vivirlo de forma consciente.",
    howItWorks:
      "Un acompañamiento para revisar tu historia, identificar lo que quieres conservar y dar forma a lo que sigue.",
    outcomes: [
      "Una mirada más clara de tu momento actual.",
      "Decisiones alineadas con lo que hoy te importa.",
      "Nuevos hábitos y acciones para sostener el cambio.",
    ],
  },
  {
    slug: "procesos-de-acompanamiento",
    audience: "personas",
    title: "Procesos de acompañamiento",
    summary: "Compañía profesional y continuidad para un objetivo personal.",
    problem:
      "Sabes lo que quieres cambiar, pero sostenerlo por tu cuenta en el día a día se vuelve difícil.",
    forWhom:
      "Para quienes buscan continuidad y un espacio de seguimiento durante un proceso de cambio.",
    howItWorks:
      "Encuentros periódicos para revisar avances, ajustar lo necesario y seguir avanzando.",
    outcomes: [
      "Seguimiento continuo de tus objetivos.",
      "Un espacio para revisar y ajustar el rumbo.",
      "Más constancia en lo que decidiste cambiar.",
    ],
  },
  {
    slug: "consultoria-organizacional",
    audience: "organizaciones",
    title: "Consultoría organizacional",
    summary: "Diagnóstico y acompañamiento para retos de personas y organización.",
    problem:
      "La organización enfrenta un reto de personas o estructura que no se resuelve con acciones aisladas.",
    forWhom: "Para áreas de dirección y de recursos humanos que necesitan una mirada experta.",
    howItWorks:
      "Partimos de un diagnóstico compartido y definimos juntos una intervención a la medida de la organización.",
    outcomes: [
      "Una lectura clara del reto.",
      "Un plan de intervención a la medida.",
      "Acompañamiento durante la implementación.",
    ],
  },
  {
    slug: "desarrollo-de-lideres",
    audience: "organizaciones",
    title: "Desarrollo de líderes",
    summary: "Líderes capaces de acompañar a sus equipos y de cuidar los resultados.",
    problem:
      "Las personas llegan a posiciones de liderazgo por su desempeño técnico, sin suficientes herramientas para liderar a otras.",
    forWhom: "Para organizaciones que quieren fortalecer a sus líderes actuales o futuros.",
    howItWorks:
      "Un programa diseñado según los retos de la organización, que combina formación, práctica y acompañamiento.",
    outcomes: [
      "Mejores conversaciones entre líderes y equipos.",
      "Un lenguaje común de liderazgo.",
      "Herramientas aplicables al trabajo cotidiano.",
    ],
  },
  {
    slug: "cultura-y-bienestar-laboral",
    audience: "organizaciones",
    title: "Cultura y bienestar laboral",
    summary: "Bienestar integrado en la forma de trabajar, no como una acción aislada.",
    problem:
      "Las iniciativas de bienestar no se sostienen cuando la cultura y la forma de trabajar siguen iguales.",
    forWhom: "Para organizaciones que quieren abordar el bienestar laboral de manera estructural.",
    howItWorks:
      "Revisamos cómo se vive hoy el trabajo en la organización y diseñamos acciones sostenibles en el tiempo.",
    outcomes: [
      "Una visión compartida de bienestar laboral.",
      "Prioridades de acción claras.",
      "Prácticas integradas a la cultura.",
    ],
  },
  {
    slug: "transformacion-y-agilidad",
    audience: "organizaciones",
    title: "Transformación y agilidad",
    summary: "Acompañar a las personas para que el cambio ocurra de verdad.",
    problem:
      "Los procesos de cambio se quedan en el papel cuando no incorporan a las personas que deben vivirlos.",
    forWhom: "Para organizaciones que atraviesan o preparan un proceso de transformación.",
    howItWorks: "Acompañamos el proceso de cambio trabajando con líderes y equipos en cada etapa.",
    outcomes: [
      "Mayor comprensión del cambio en los equipos.",
      "Líderes preparados para acompañarlo.",
      "Nuevas formas de trabajo puestas en práctica.",
    ],
  },
];

export const servicesFor = (audience: Service["audience"]) =>
  services.filter((service) => service.audience === audience);
