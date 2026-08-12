export const homepageContent = {
  trustStrip: {
    headline: "Built to work around the tools your business already uses.",
    categories: [
      "Communication",
      "Accounting",
      "CRM",
      "Productivity",
    ] as const,
  },
  problem: {
    eyebrow: "The operational gap",
    headline: "The work between the systems is still work.",
    body: "Businesses receive work through email, requests, documents, customers, and systems — but someone still has to interpret it, sort it, follow up, transfer it, prepare it, and remember it.",
    channels: [
      "Email & messages",
      "Documents & forms",
      "Customer requests",
      "Internal systems",
    ] as const,
    adminTasks: [
      "Interpret incoming work",
      "Sort and route",
      "Follow up",
      "Prepare next steps",
      "Remember context",
    ] as const,
  },
  workflow: {
    id: "workflow",
    eyebrow: "How SAIL works",
    headline: "A digital coworker — not a chatbot.",
    steps: [
      { title: "Observe", description: "SAIL receives incoming work from the channels your business already uses." },
      { title: "Understand", description: "Context, intent, and relevant details are extracted and matched." },
      { title: "Decide", description: "Business rules determine the appropriate next step." },
      { title: "Act", description: "Administrative actions are prepared or executed within defined authority." },
      { title: "Report", description: "Activity is visible — what happened, what needs attention, what waits for you." },
    ] as const,
  },
  capabilities: {
    id: "capabilities",
    eyebrow: "What SAIL handles",
    headline: "Capabilities that expand with your business.",
    items: [
      {
        title: "Reception",
        description: "Incoming communication and information handling — parsed, understood, and routed.",
      },
      {
        title: "Administration",
        description: "Preparation, sorting, and routine administrative work around your operations.",
      },
      {
        title: "Leads",
        description: "Recognizing incoming sales opportunities and preparing the next action.",
      },
      {
        title: "Support",
        description: "Understanding service requests and preparing responses within your guidelines.",
      },
    ] as const,
  },
  autonomy: {
    id: "autonomy",
    eyebrow: "Your control",
    headline: "You decide how far SAIL can go.",
    levels: [
      { level: "1", title: "Inform", description: "SAIL surfaces what arrived and what it understood — you handle the rest." },
      { level: "2", title: "Suggest", description: "SAIL recommends the next step and prepares context for your decision." },
      { level: "3", title: "Execute after approval", description: "SAIL prepares actions and waits for your explicit approval before proceeding." },
      { level: "4", title: "Execute automatically", description: "Within scopes you define, SAIL acts on routine work without interrupting you." },
    ] as const,
  },
  productExperience: {
    id: "product",
    eyebrow: "Product experience",
    headline: "See what your morning looks like with SAIL.",
    panels: [
      { label: "Overview", value: "12 items handled overnight", status: "complete" as const },
      { label: "Needs approval", value: "3 actions prepared", status: "active" as const },
      { label: "Needs attention", value: "1 item flagged", status: "pending" as const },
      { label: "Activity", value: "Request parsed · Customer matched · Action prepared", status: "complete" as const },
    ] as const,
  },
  security: {
    id: "security",
    eyebrow: "Security & trust",
    headline: "Built for businesses that need control, not surprises.",
    principles: [
      { title: "Controlled permissions", description: "Access and authority are scoped to what your business defines." },
      { title: "Approval boundaries", description: "Actions respect the level of autonomy you set for each type of work." },
      { title: "Traceability", description: "Activity history shows what SAIL understood, decided, and prepared." },
      { title: "Human control", description: "You remain the authority — SAIL operates within boundaries you set." },
    ] as const,
  },
  integrations: {
    id: "integrations",
    eyebrow: "Integrations",
    headline: "SAIL works around your business — not the other way around.",
    categories: [
      { name: "Communication", examples: "Email, messaging" },
      { name: "Accounting", examples: "Financial systems" },
      { name: "CRM", examples: "Customer records" },
      { name: "Productivity", examples: "Documents, tasks" },
    ] as const,
  },
  pricing: {
    id: "pricing",
    eyebrow: "Commercial",
    headline: "Start with the work you want SAIL to handle.",
    body: "SAIL can expand as your business grows — activating capabilities when you are ready. We will work with you to scope what makes sense to start with.",
  },
  finalCta: {
    id: "final-cta",
    headline: "Put administrative work in motion.",
    body: "See how SAIL handles the work between your systems — while you stay in control.",
  },
  footer: {
    description: "SAIL handles the administrative work around your business — while you stay in control.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Product", href: "#product" },
          { label: "Solutions", href: "#capabilities" },
          { label: "Pricing", href: "#pricing" },
          { label: "Security", href: "#security" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Contact", href: "#final-cta" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
        ],
      },
      {
        title: "Account",
        links: [{ label: "Log in", href: "#" }],
      },
    ] as const,
  },
} as const;
