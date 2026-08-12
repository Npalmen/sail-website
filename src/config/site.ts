export const siteConfig = {
  name: "SAIL",
  title: "SAIL — AI-powered operations",
  description:
    "SAIL handles the administrative work around your business — while you stay in control.",
  url: "https://sail.example.com",
  links: {
    login: "#",
    bookDemo: "#final-cta",
  },
  nav: [
    { title: "Product", href: "#product" },
    { title: "Solutions", href: "#capabilities" },
    { title: "Pricing", href: "#pricing" },
    { title: "Security", href: "#security" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
