export const homepageContent = {
  trustStrip: {
    headline: "Byggt för att fungera med verktygen din verksamhet redan använder.",
    categories: [
      "Kommunikation",
      "Ekonomi",
      "CRM",
      "Produktivitet",
    ] as const,
  },
  problem: {
    eyebrow: "Det operativa gapet",
    headline: "Arbetet mellan systemen är fortfarande arbete.",
    body: "Verksamheter tar emot arbete via e-post, förfrågningar, dokument, kunder och system — men någon måste fortfarande tolka det, sortera det, följa upp, vidarebefordra det, förbereda det och komma ihåg det.",
    channels: [
      "E-post och meddelanden",
      "Dokument och formulär",
      "Kundförfrågningar",
      "Interna system",
    ] as const,
    adminTasks: [
      "Tolka inkommande arbete",
      "Sortera och dirigera",
      "Följa upp",
      "Förbereda nästa steg",
      "Komma ihåg kontext",
    ] as const,
  },
  workflow: {
    id: "workflow",
    eyebrow: "Så fungerar SAIL",
    headline: "En digital medarbetare — inte en chatbot.",
    steps: [
      { title: "Ta emot", description: "SAIL tar emot inkommande arbete från kanaler din verksamhet redan använder." },
      { title: "Förstå", description: "Kontext, avsikt och relevanta detaljer extraheras och matchas." },
      { title: "Bedöm", description: "Affärsregler avgör vilket nästa steg som är lämpligt." },
      { title: "Agera", description: "Administrativa åtgärder förbereds eller utförs inom definierad auktoritet." },
      { title: "Rapportera", description: "Aktiviteten är synlig — vad som hände, vad som kräver uppmärksamhet, vad som väntar på dig." },
    ] as const,
  },
  capabilities: {
    id: "capabilities",
    eyebrow: "Det SAIL hanterar",
    headline: "Kapacitet som växer med din verksamhet.",
    items: [
      {
        title: "Mottagning",
        description: "Hantering av inkommande kommunikation och information — analyserad, förstådd och dirigerad.",
      },
      {
        title: "Administration",
        description: "Förberedelse, sortering och rutinmässigt administrativt arbete kring verksamheten.",
      },
      {
        title: "Leads",
        description: "Identifierar inkommande säljmöjligheter och förbereder nästa åtgärd.",
      },
      {
        title: "Support",
        description: "Förstår serviceärenden och förbereder svar inom dina riktlinjer.",
      },
    ] as const,
  },
  autonomy: {
    id: "autonomy",
    eyebrow: "Din kontroll",
    headline: "Du bestämmer hur långt SAIL får gå.",
    levels: [
      { level: "1", title: "Informera", description: "SAIL visar vad som kom in och vad som förståddes — du hanterar resten." },
      { level: "2", title: "Föreslå", description: "SAIL rekommenderar nästa steg och förbereder kontext för ditt beslut." },
      { level: "3", title: "Utför efter godkännande", description: "SAIL förbereder åtgärder och väntar på ditt uttryckliga godkännande innan den fortsätter." },
      { level: "4", title: "Utför automatiskt", description: "Inom scope du definierar agerar SAIL på rutinärenden utan att avbryta dig." },
    ] as const,
  },
  productExperience: {
    id: "product",
    eyebrow: "Produktupplevelse",
    headline: "Så kan din morgon se ut med SAIL.",
    panels: [
      { label: "Översikt", value: "12 ärenden hanterade över natten", status: "complete" as const },
      { label: "Behöver godkännande", value: "3 åtgärder förberedda", status: "active" as const },
      { label: "Kräver uppmärksamhet", value: "1 ärende flaggat", status: "pending" as const },
      { label: "Aktivitet", value: "Begäran analyserad · Kund matchad · Åtgärd förberedd", status: "complete" as const },
    ] as const,
  },
  security: {
    id: "security",
    eyebrow: "Säkerhet och förtroende",
    headline: "Byggt för verksamheter som behöver kontroll, inte överraskningar.",
    principles: [
      { title: "Kontrollerade behörigheter", description: "Åtkomst och auktoritet begränsas till det din verksamhet definierar." },
      { title: "Godkännandegränser", description: "Åtgärder respekterar den autonominivå du satt för varje typ av arbete." },
      { title: "Spårbarhet", description: "Aktivitetshistorik visar vad SAIL förstod, bedömde och förberedde." },
      { title: "Mänsklig kontroll", description: "Du behåller auktoriteten — SAIL arbetar inom gränser du sätter." },
    ] as const,
  },
  integrations: {
    id: "integrations",
    eyebrow: "Integrationer",
    headline: "SAIL arbetar kring din verksamhet — inte tvärtom.",
    categories: [
      { name: "Kommunikation", examples: "E-post, meddelanden" },
      { name: "Ekonomi", examples: "Ekonomisystem" },
      { name: "CRM", examples: "Kundregister" },
      { name: "Produktivitet", examples: "Dokument, uppgifter" },
    ] as const,
  },
  pricing: {
    id: "pricing",
    eyebrow: "Kommersiellt",
    headline: "Börja med det arbete du vill att SAIL ska hantera.",
    body: "SAIL kan utökas i takt med att verksamheten växer — kapacitet aktiveras när du är redo. Vi hjälper dig att avgränsa vad som är rimligt att börja med.",
  },
  finalCta: {
    id: "final-cta",
    headline: "Sätt administrativt arbete i rörelse.",
    body: "Se hur SAIL hanterar arbetet mellan dina system — medan du behåller kontrollen.",
  },
  footer: {
    description: "SAIL hanterar administrationen kring din verksamhet — medan du behåller kontrollen.",
    columns: [
      {
        title: "Produkt",
        links: [
          { label: "Produkt", href: "#product" },
          { label: "Lösningar", href: "#capabilities" },
          { label: "Priser", href: "#pricing" },
          { label: "Säkerhet", href: "#security" },
        ],
      },
      {
        title: "Företag",
        links: [
          { label: "Om oss", href: "#" },
          { label: "Kontakt", href: "#final-cta" },
        ],
      },
      {
        title: "Juridik",
        links: [
          { label: "Integritet", href: "#" },
          { label: "Villkor", href: "#" },
        ],
      },
      {
        title: "Konto",
        links: [{ label: "Logga in", href: "#" }],
      },
    ] as const,
  },
} as const;
