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
  title: "SAIL — AI-powered operations",
  description:
    "SAIL handles the administrative work around your business — while you stay in control.",
  url: "https://sail.example.com",
  links: {
    login: "#",
    bookDemo: routes.contact,
  },
  nav: [
    { title: "Product", href: routes.product },
    { title: "Solutions", href: routes.solutions },
    { title: "Pricing", href: routes.pricing },
    { title: "Security", href: routes.security },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export const pageMetadata = {
  product: {
    title: "SAIL — Product",
    description:
      "Explore how SAIL works as a digital coworker — receiving, understanding, and acting on administrative work within your control.",
  },
  solutions: {
    title: "SAIL — Solutions",
    description:
      "See the kinds of work SAIL can help with — from reception and administration to leads and support.",
  },
  pricing: {
    title: "SAIL — Pricing",
    description:
      "Start with the work you want SAIL to handle. Capabilities expand as your business grows.",
  },
  security: {
    title: "SAIL — Security",
    description:
      "How SAIL approaches control, permissions, approval boundaries, and traceability.",
  },
  about: {
    title: "SAIL — About",
    description:
      "The philosophy behind SAIL — administrative work in motion, under your authority.",
  },
  contact: {
    title: "SAIL — Contact",
    description: "Get in touch or book a demo to explore how SAIL fits your business.",
  },
  privacy: {
    title: "SAIL — Privacy",
    description: "Privacy information for the SAIL website. Legal copy pending final review.",
  },
  terms: {
    title: "SAIL — Terms",
    description: "Terms of use for the SAIL website. Legal copy pending final review.",
  },
} as const;
