export const productPageContent = {
  hero: {
    eyebrow: "SAIL Produkt",
    headline: "Den digitala medarbetaren byggd kring din verksamhet.",
    body: "SAIL tar emot inkommande arbete, förstår vad det gäller, bedömer nästa steg och förbereder åtgärder — inom gränserna du sätter.",
  },
  journey: {
    eyebrow: "Ett ärende genom SAIL",
    headline: "Så rör sig ett inkommande ärende genom systemet.",
    description:
      "Illustration: en avtalsförnyelse från Acme Corp — från mottagning till spårbar aktivitet.",
  },
  differentiation: {
    eyebrow: "Skillnaden",
    headline: "Inte ännu ett system att hålla reda på.",
    body: "De flesta verktyg visar information eller väntar på att någon ska tolka den. SAIL tar emot arbetet där det redan kommer in, förstår kontexten, tillämpar era regler och förbereder nästa steg — synligt och kontrollerbart.",
  },
  morningOverview: {
    eyebrow: "Din arbetsdag",
    headline: "När många ärenden rör sig — ser du helheten.",
    description:
      "Ett ärende visar hur SAIL arbetar. Morgonöversikten visar vad som hänt över natten och vad som väntar på dig.",
  },
  capabilities: {
    eyebrow: "Tillämpningsområden",
    headline: "Samma arbetssätt — olika typer av administrativt arbete.",
    categories: ["Mottagning", "Administration", "Leads", "Support"] as const,
  },
  finalCta: {
    headline: "Se hur SAIL passar er verksamhet.",
    body: "Vi går igenom ett konkret arbetsflöde och visar var autonomin börjar — och var den slutar.",
  },
} as const;

export const productJourneyScenario = {
  incoming: {
    title: "Avtalsförnyelse",
    customer: "Acme Corp",
    received: "08:37",
    sources: ["E-post", "Formulär", "System"] as const,
    status: "Mottagen" as const,
  },
  understand: {
    status: "Förstådd" as const,
    fields: [
      { label: "Kund", value: "Acme Corp" },
      { label: "Ärende", value: "Avtalsförnyelse" },
      { label: "Avsikt", value: "Förnya befintligt avtal" },
      { label: "Relevant kontext", value: "Nuvarande villkor identifierade" },
    ] as const,
  },
  decide: {
    status: "Bedömd" as const,
    layers: [
      { label: "Förståelse", value: "Avtalsförnyelse med prisjustering identifierad" },
      { label: "Affärsregel", value: "Prisändringar över definierad nivå kräver godkännande" },
      { label: "Auktorisation", value: "Förbered åtgärd · begär godkännande" },
    ] as const,
    outcome: ["Förbered åtgärd", "Begär godkännande"] as const,
  },
  act: {
    status: "Förberedd" as const,
    title: "Förnyelseförslag klart",
    items: ["Prisnivå uppdaterad", "Svar förberett"] as const,
    readiness: "Redo för godkännande" as const,
  },
  control: {
    workflow: "Avtalsförnyelser",
    level: "Utför efter godkännande",
    allowed: ["läsa", "förstå", "förbereda"] as const,
    requiresApproval: "skicka till kund",
  },
  result: {
    status: "Väntar på godkännande" as const,
    summary: [
      "Förfrågan analyserad",
      "Kund matchad",
      "Förslag förberett",
      "Godkännande begärt",
    ] as const,
    activity: [
      { time: "08:37", event: "Förfrågan mottagen via e-post" },
      { time: "08:38", event: "Kund och avsikt identifierad" },
      { time: "08:39", event: "Affärsregel tillämpad · godkännande krävs" },
      { time: "08:40", event: "Förnyelseförslag förberett" },
      { time: "08:40", event: "Väntar på ditt godkännande" },
    ] as const,
  },
} as const;
