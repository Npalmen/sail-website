import { routes } from "@/config/site";

export const footerColumns = [
  {
    title: "Produkt",
    links: [
      { label: "Produkt", href: routes.product },
      { label: "Lösningar", href: routes.solutions },
      { label: "Priser", href: routes.pricing },
      { label: "Säkerhet", href: routes.security },
    ],
  },
  {
    title: "Företag",
    links: [
      { label: "Om oss", href: routes.about },
      { label: "Kontakt", href: routes.contact },
    ],
  },
  {
    title: "Juridik",
    links: [
      { label: "Integritet", href: routes.privacy },
      { label: "Villkor", href: routes.terms },
    ],
  },
  {
    title: "Konto",
    links: [{ label: "Logga in", href: "#" }],
  },
] as const;
