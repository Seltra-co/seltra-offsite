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
export const BROCHURE_URL = "/seltra_offsite_2026.pdf";

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
    title: "Welcome & Opening",
    presenter: "Seltra team",
    time: "9:15 – 9:35 AM",
    format: "Presentation",
    objective:
      "A warm welcome, opening reflections, and a shared look at the purpose of the day.",
  },
  {
    id: "s2",
    number: "02",
    title: "What We’re Building",
    presenter: "Seltra team",
    time: "9:35 – 9:55 AM",
    format: "Presentation",
    objective:
      "A high-level view of our mission, focus areas, and the opportunities ahead.",
  },
  {
    id: "s3",
    number: "03",
    title: "Merchant Experience",
    presenter: "Seltra team",
    time: "9:55 – 10:15 AM",
    format: "Presentation",
    objective:
      "Exploring how we create better experiences for the people and businesses we serve.",
  },
  {
    id: "s4",
    number: "04",
    title: "Product & Design",
    presenter: "Seltra team",
    time: "10:30 – 10:50 AM",
    format: "Presentation",
    objective:
      "A look at the product direction, user experience thinking, and what we want to improve next.",
  },
  {
    id: "s5",
    number: "05",
    title: "Growth & Communication",
    presenter: "Seltra team",
    time: "10:50 – 11:10 AM",
    format: "Presentation",
    objective:
      "How we share our story, reach the right audiences, and support sustainable growth.",
  },
  {
    id: "s6",
    number: "06",
    title: "Team Alignment Session",
    presenter: "Seltra team",
    time: "11:10 AM – 12:30 PM",
    format: "Workshop",
    objective:
      "A collaborative discussion on priorities, focus, and how we move forward together.",
  },
  {
    id: "s7",
    number: "07",
    title: "Next Steps",
    presenter: "Seltra team",
    time: "1:15 – 2:00 PM",
    format: "Workshop",
    objective:
      "Identifying the key actions, ownership areas, and commitments for the months ahead.",
  },
  {
    id: "s8",
    number: "08",
    title: "Closing Reflections",
    presenter: "Seltra team",
    time: "2:00 – 2:20 PM",
    format: "Presentation",
    objective:
      "A final wrap-up of the day’s ideas, decisions, and the path forward.",
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
  { time: "8:30 – 9:00 AM", title: "Arrival & Welcome", lead: "Seltra team", format: "Informal" },
  { time: "9:00 – 9:15 AM", title: "Opening Remarks", lead: "Seltra team", format: "Opening" },
  { time: "9:15 – 9:35 AM", title: "Session 1 — Welcome & Setting the Tone", lead: "Seltra team", format: "Presentation" },
  { time: "9:35 – 9:55 AM", title: "Session 2 — What We’re Building", lead: "Seltra team", format: "Presentation" },
  { time: "9:55 – 10:15 AM", title: "Session 3 — Merchant Experience", lead: "Seltra team", format: "Presentation" },
  { time: "10:15 – 10:30 AM", title: "Break", lead: "—", format: "Break" },
  { time: "10:30 – 10:50 AM", title: "Session 4 — Product & Design", lead: "Seltra team", format: "Presentation" },
  { time: "10:50 – 11:10 AM", title: "Session 5 — Growth & Communication", lead: "Seltra team", format: "Presentation" },
  { time: "11:10 AM – 12:30 PM", title: "Session 6 — Team Alignment", lead: "Seltra team", format: "Workshop" },
  { time: "12:30 – 1:15 PM", title: "Lunch", lead: "—", format: "Informal" },
  { time: "1:15 – 2:00 PM", title: "Session 7 — Next Steps", lead: "Seltra team", format: "Workshop" },
  { time: "2:00 – 2:20 PM", title: "Closing Reflections", lead: "Seltra team", format: "Presentation" },
  { time: "2:20 – 2:30 PM", title: "Group Photo & Close", lead: "—", format: "Close" },
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
