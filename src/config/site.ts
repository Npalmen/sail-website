export const routes = {
  home: "/",
  product: "/product",
  solutions: "/solutions",
  pricing: "/pricing",
  security: "/security",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const siteConfig = {
  name: "SAIL",
  title: "SAIL — AI-driven administration",
  description:
    "SAIL hanterar administrationen kring din verksamhet — medan du behåller kontrollen.",
  url: "https://sail.example.com",
  links: {
    login: "#",
    bookDemo: routes.contact,
  },
  nav: [
    { title: "Produkt", href: routes.product },
    { title: "Lösningar", href: routes.solutions },
    { title: "Priser", href: routes.pricing },
    { title: "Säkerhet", href: routes.security },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export const pageMetadata = {
  product: {
    title: "SAIL — Produkt",
    description:
      "Utforska hur SAIL fungerar som digital medarbetare — tar emot, förstår och agerar på administrativt arbete inom ramen för din kontroll.",
  },
  solutions: {
    title: "SAIL — Lösningar",
    description:
      "Se vilka typer av arbete SAIL kan hjälpa till med — från mottagning och administration till leads och support.",
  },
  pricing: {
    title: "SAIL — Priser",
    description:
      "Börja med det arbete du vill att SAIL ska hantera. Kapaciteten kan utökas i takt med att verksamheten växer.",
  },
  security: {
    title: "SAIL — Säkerhet",
    description:
      "Hur SAIL förhåller sig till kontroll, behörigheter, godkännandegränser och spårbarhet.",
  },
  about: {
    title: "SAIL — Om oss",
    description:
      "Filosofin bakom SAIL — administrativt arbete i rörelse, under din auktoritet.",
  },
  contact: {
    title: "SAIL — Kontakt",
    description:
      "Hör av dig eller boka en demo för att utforska hur SAIL passar din verksamhet.",
  },
  privacy: {
    title: "SAIL — Integritet",
    description:
      "Integritetsinformation för SAIL-webbplatsen. Juridisk text väntar på slutgiltig granskning.",
  },
  terms: {
    title: "SAIL — Villkor",
    description:
      "Användarvillkor för SAIL-webbplatsen. Juridisk text väntar på slutgiltig granskning.",
  },
} as const;
