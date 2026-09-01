// ── Event details ───────────────────────────────────────────────
export const EVENT = {
  theme: "Emergence",
  name: "Seltra Offsite 2026",
  date: "Saturday, September 5, 2026",
  time: "8:30 AM – 2:30 PM",
  venue: "4th Floor, One Airport Square, Accra",
  startsAtISO: "2026-09-05T08:30:00+00:00",
  endsAtISO: "2026-09-05T14:30:00+00:00",
  team: [
    "William Ofosu Parwar (Head of Product)",
    "Jerry John Richman (Head of Merchant Experience)",
    "Japheth Tetteh (GTM & Operations Partner)",
    "Daniel K. Obeng (Product Designer)",
    "Divine S. Agbanu (Social Media and Content Manager)",
  ],
};

export const FOUNDING_TEAM = [
  {
    name: "William Ofosu Parwar",
    role: "Co-founder, Head of Product",
    image: "/seltra_cf1.png",
  },
  {
    name: "Jerry John Richman",
    role: "Co-founder, CTO",
    image: "/cf2.jpeg",
  },
  {
    name: "Japheth Tetteh",
    role: "GTM & Operations",
    image: "/gtm.jpeg",
  },
  {
    name: "Daniel K. Obeng",
    role: "Product Designer",
    image: "/pm.jpeg",
  },
  {
    name: "Divine S. Agbanu",
    role: "Social Media and Content",
    image: "/SM.jpeg",
  },
];

export type EventStatus = "Scheduled" | "Live" | "Ended";

export function getEventStatus(): EventStatus {
  const now = Date.now();
  const start = new Date(EVENT.startsAtISO).getTime();
  const end = new Date(EVENT.endsAtISO).getTime();

  if (now < start) return "Scheduled";
  if (now >= start && now <= end) return "Live";
  return "Ended";
}

// ── Brochure ─────────────────────────────────────────────────────
// Paste the Cloudinary PDF link here once it's uploaded. While empty,
// the /brochure page automatically renders the "coming soon" empty state.
export const BROCHURE_URL = "";

// ── Agenda: session-level detail ───────────────────────────────────
export type AgendaSession = {
  id: string;
  number: string;
  title: string;
  presenter: string;
  time: string;
  format: "Presentation" | "Workshop" | "Discussion";
  objective: string;
};

export const AGENDA: AgendaSession[] = [
  {
    id: "s1",
    number: "01",
    title: "Where We Really Are",
    presenter: "William",
    time: "9:15 – 9:35 AM",
    format: "Presentation",
    objective:
      "Set the tone for the whole day — brutally honest, no marketing language. Walk the room through exactly where Seltra stands, unfiltered.",
  },
  {
    id: "s2",
    number: "02",
    title: "Product, Engineering & the V5 Architecture",
    presenter: "Jerry",
    time: "9:35 – 9:55 AM",
    format: "Presentation",
    objective:
      "Translate the honest snapshot into what's technically true — what v4 proved, what's fragile underneath it, and what v5's architecture needs to become.",
  },
  {
    id: "s3",
    number: "03",
    title: "Merchant Truth & the GTM Engine",
    presenter: "Japheth",
    time: "9:55 – 10:15 AM",
    format: "Presentation",
    objective:
      "Start with what merchants have actually done, not what we assume they want — likely the most important session of the day.",
  },
  {
    id: "s4",
    number: "04",
    title: "The V5 Wow Moment",
    presenter: "Daniel",
    time: "10:30 – 10:50 AM",
    format: "Presentation",
    objective:
      "Identify and demo the one experience that makes someone understand Seltra immediately — the moment v5 is designed around.",
  },
  {
    id: "s5",
    number: "05",
    title: "Marketing, Content & Demand Generation",
    presenter: "Divine",
    time: "10:50 – 11:10 AM",
    format: "Presentation",
    objective:
      "Reframe content from social posting to demand generation — a measurable part of the funnel.",
  },
  {
    id: "s6",
    number: "06",
    title: "ICP, Business Model, January Targets & Accelerator Strategy",
    presenter: "William",
    time: "11:10 AM – 12:30 PM",
    format: "Workshop",
    objective:
      "The longest and most consequential block of the day. Four decisions get made here, in order, with the whole team in the room.",
  },
  {
    id: "s7",
    number: "07",
    title: "Ownership, 120-Day Plan & the Seltra Commitment",
    presenter: "William + all",
    time: "1:15 – 2:00 PM",
    format: "Workshop",
    objective:
      "Convert everything decided this morning into individual accountability — role ownership, then personal commitments.",
  },
  {
    id: "s8",
    number: "08",
    title: "Closing — Recap of the 10 Decisions & Next Steps",
    presenter: "William",
    time: "2:00 – 2:20 PM",
    format: "Presentation",
    objective:
      "Leave no ambiguity about what was actually decided. Read back each decision and confirm the room agrees.",
  },
];

// ── Schedule: full run of show ─────────────────────────────────────
export type ScheduleItem = {
  time: string;
  title: string;
  lead: string;
  format: string;
};

export const SCHEDULE: ScheduleItem[] = [
  { time: "8:30 – 9:00 AM", title: "Arrival & Setup", lead: "—", format: "Informal" },
  { time: "9:00 – 9:15 AM", title: "Opening Prayer & Introduction", lead: "William", format: "Opening" },
  { time: "9:15 – 9:35 AM", title: "Session 1 — Where We Really Are", lead: "William", format: "Presentation" },
  { time: "9:35 – 9:55 AM", title: "Session 2 — Product, Engineering & the V5 Architecture", lead: "Jerry", format: "Presentation" },
  { time: "9:55 – 10:15 AM", title: "Session 3 — Merchant Truth & the GTM Engine", lead: "Japheth", format: "Presentation" },
  { time: "10:15 – 10:30 AM", title: "Break", lead: "—", format: "Break" },
  { time: "10:30 – 10:50 AM", title: "Session 4 — The V5 Wow Moment", lead: "Daniel", format: "Presentation" },
  { time: "10:50 – 11:10 AM", title: "Session 5 — Marketing, Content & Demand Generation", lead: "Divine", format: "Presentation" },
  { time: "11:10 AM – 12:30 PM", title: "Session 6 — ICP, Business Model, January Targets & Accelerator Strategy", lead: "William", format: "Workshop" },
  { time: "12:30 – 1:15 PM", title: "Lunch", lead: "—", format: "Informal" },
  { time: "1:15 – 2:00 PM", title: "Session 7 — Ownership, 120-Day Plan & the Seltra Commitment", lead: "William + all", format: "Workshop" },
  { time: "2:00 – 2:20 PM", title: "Closing — Recap of the 10 Decisions & Next Steps", lead: "William", format: "Presentation" },
  { time: "2:20 – 2:30 PM", title: "Team Photo & Close", lead: "—", format: "Close" },
];

// ── Home nav cards ──────────────────────────────────────────────
export const NAV_CARDS = [
  {
    href: "/agenda",
    title: "Agenda",
    description: "What each session covers, session by session.",
  },
  {
    href: "/schedule",
    title: "Schedule",
    description: "The full run of show, start to finish.",
  },
  {
    href: "/brochure",
    title: "Brochure",
    description: "The offsite brochure, in one place.",
  },
  {
    href: "/gallery",
    title: "Gallery",
    description: "Photos from the day.",
  },
];
