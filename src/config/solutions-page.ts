export const solutionsPageContent = {
  hero: {
    eyebrow: "Lösningar",
    headline: "En digital medarbetare. Fler arbetsuppgifter när du behöver dem.",
    body: "SAIL börjar med tydligt avgränsade administrativa arbetsflöden och kan ta ansvar för fler delar i takt med att verksamheten är redo.",
  },
  overview: {
    eyebrow: "Kapacitetsområden",
    headline: "Samma medarbetare — fler ansvarsområden över tid.",
  },
  expansion: {
    eyebrow: "Utökad kapacitet",
    headline: "Börja smalt. Utöka när det känns rätt.",
    body: "Mottagning, administration, leads och support är inte separata produkter — de är ansvarsområden som samma digitala medarbetare kan ta när verksamheten är redo.",
    stages: ["Mottagning", "Administration", "Leads / Support", "Mer ansvar över tid"] as const,
  },
  control: {
    eyebrow: "Kontroll",
    headline: "Mer kapacitet betyder inte mer autonomi.",
    body: "Varje ansvarsområde kan ha egna gränser. SAIL kan till exempel sortera inkommande arbete automatiskt, förbereda administrativa åtgärder och kräva godkännande innan extern kommunikation.",
    examples: [
      "Automatiskt klassificera inkommande arbete",
      "Förbereda administrativa åtgärder",
      "Kräva godkännande innan extern kommunikation",
    ] as const,
  },
  productLink: {
    headline: "Vill du se hur arbetet rör sig genom SAIL?",
    body: "Produktsidan visar ett konkret ärende — från mottagning till spårbar aktivitet.",
  },
  finalCta: {
    headline: "Diskutera vilka arbetsuppgifter SAIL ska börja med.",
    body: "Vi går igenom ert nuvarande administrativa arbete och avgränsar ett rimligt första steg.",
  },
} as const;

export const solutionAreas = [
  {
    id: "mottagning",
    title: "Mottagning",
    summary: "Tar emot och sorterar inkommande arbete.",
    headline: "Inkommande arbete sorterat innan det tappas bort.",
    explanation:
      "SAIL tar emot där arbetet redan kommer in och gör det hanterbart — utan att bli ännu ett system att hålla reda på.",
    incoming: [
      "E-post",
      "Formulär",
      "Kundfrågor",
      "Dokument",
      "Interna meddelanden",
    ],
    sailDoes: [
      "Identifierar vad ärendet gäller",
      "Kopplar relevant kund och kontext",
      "Kategoriserar och prioriterar",
      "Dirigerar till rätt flöde",
      "Flaggar osäkerhet",
    ],
    userGets: [
      "Sorterad inkorg / arbetskö",
      "Tydlig kontext",
      "Rätt nästa steg",
      "Färre saker som tappas bort",
    ],
    material: "soft" as const,
    align: "left" as const,
  },
  {
    id: "administration",
    title: "Administration",
    summary: "Förbereder och driver rutinmässiga administrativa steg.",
    headline: "Rutinärenden förberedda — inte bara registrerade.",
    explanation:
      "Administrativt arbete som kräver tolkning, sortering och uppföljning hanteras systematiskt inom gränserna ni sätter.",
    incoming: [
      "Leverantörsfakturor",
      "Dokument",
      "Uppföljningar",
      "Interna administrativa ärenden",
      "Återkommande rutiner",
    ],
    sailDoes: [
      "Tolkar information",
      "Identifierar vad som behöver göras",
      "Förbereder underlag",
      "Placerar information i rätt flöde",
      "Följer upp väntande arbete",
    ],
    userGets: [
      "Färdiga nästa steg",
      "Underlag för godkännande",
      "Uppdaterade arbetsflöden",
      "Färre manuella mellanled",
    ],
    material: "paper" as const,
    align: "right" as const,
  },
  {
    id: "leads",
    title: "Leads",
    summary: "Identifierar möjligheter och förbereder uppföljning.",
    headline: "Säljsignaler förstådda — inte bara vidarebefordrade.",
    explanation:
      "Inkommande möjligheter identifieras, kontext samlas och nästa steg förbereds så att ert team kan agera snabbt och informerat.",
    incoming: [
      "Offertförfrågningar",
      "Kontaktformulär",
      "Svar på kampanjer",
      "Inkommande säljsignaler",
    ],
    sailDoes: [
      "Identifierar lead",
      "Extraherar behov",
      "Matchar kund och kontext",
      "Bedömer relevans",
      "Förbereder svar eller uppföljning",
      "Håller koll på nästa steg",
    ],
    userGets: [
      "Kvalificerad möjlighet",
      "Samlad kontext",
      "Förberedd uppföljning",
      "Tydligt nästa steg",
    ],
    material: "product" as const,
    align: "left" as const,
  },
  {
    id: "support",
    title: "Support",
    summary: "Förstår serviceärenden och förbereder rätt nästa steg.",
    headline: "Serviceärenden hanterade med rätt kontext.",
    explanation:
      "SAIL förstår ärendet, hittar relevant historik och förbereder svar eller eskalering inom era riktlinjer — utan obegränsad autonom kundkommunikation.",
    incoming: [
      "Kundfrågor",
      "Serviceärenden",
      "Statusfrågor",
      "Återkommande supportfrågor",
    ],
    sailDoes: [
      "Förstår ärendet",
      "Hittar relevant kontext",
      "Bedömer om svar kan förberedas",
      "Eskalerar när information saknas",
      "Förbereder svar inom riktlinjer",
    ],
    userGets: [
      "Snabbare hantering",
      "Förberedda svar",
      "Tydligt eskalerade ärenden",
      "Sammanhängande kundhistorik",
    ],
    material: "frosted" as const,
    align: "right" as const,
  },
] as const;
