import { routes } from "@/config/site";

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Product", href: routes.product },
      { label: "Solutions", href: routes.solutions },
      { label: "Pricing", href: routes.pricing },
      { label: "Security", href: routes.security },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: routes.about },
      { label: "Contact", href: routes.contact },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: routes.privacy },
      { label: "Terms", href: routes.terms },
    ],
  },
  {
    title: "Account",
    links: [{ label: "Log in", href: "#" }],
  },
] as const;
