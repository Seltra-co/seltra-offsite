**1. Add an event status field to `lib/data.ts`**

Add an `endsAtISO` next to the existing `startsAtISO`, and a small status helper:

```ts
export const EVENT = {
  theme: "Emergence",
  name: "Seltra Offsite 2026",
  date: "Saturday, September 5, 2026",
  time: "8:30 AM – 2:30 PM",
  venue: "4th Floor, One Airport Square, Accra",
  startsAtISO: "2026-09-05T08:30:00+00:00",
  endsAtISO: "2026-09-05T14:30:00+00:00",
  team: ["William Ofosu Parwar (Head of Product)", "Jerry John Richman (Head of Merchant Experience)", "Japheth Tetteh (GTM & Operations Partner)", "Daniel K. Obeng (Product Designer)", "Divine S. Agbanu (Social Media and Content Manager)"],
};

export type EventStatus = "Scheduled" | "Live" | "Ended";

export function getEventStatus(): EventStatus {
  const now = Date.now();
  const start = new Date(EVENT.startsAtISO).getTime();
  const end = new Date(EVENT.endsAtISO).getTime();
  if (now < start) return "Scheduled";
  if (now >= start && now <= end) return "Live";
  return "Ended";
}
```

**2. Hero status card (replaces the static "Ended" badge in the reference screenshot)**

Rebuild the card below the headline as a client component (needs `getEventStatus()` evaluated client-side so it doesn't get frozen at build time — recompute on an interval, e.g. every 60s, the same way `Countdown.tsx` already re-renders every second).

Badge styling by status:
- `Scheduled` — muted glass pill, cultured/70 text, small pulsing dot in seagreen
- `Live` — solid seagreen background, charleston text, pulsing dot animation (this is the one moment the badge should feel alive — steal the pulse animation already defined in `tailwind.config.ts` as `animate-pulseGlow`)
- `Ended` — muted glass pill, cultured/40 text, no pulse

Card content, matching the reference layout (badge + date top row, title below):
```
[Badge: Scheduled / Live / Ended]        Sept 5, 2026 · 8:30 AM – 2:30 PM
Offsite 2026
```
Reuse `EVENT.date`, `EVENT.time`, and hardcode "Offsite 2026" as the card's title line (distinct from the hero's big "Emergence" headline above it — same relationship as the reference: theme is the huge word, "Offsite 2026" is the card title underneath).

**3. About Offsite copy**

Replace the current `AboutOffsite.tsx` paragraph with this (edit the actual JSX text, keep the existing team-chips and "photos coming soon" line as-is):

> **Build commerce that runs itself.**
>
> Seltra Offsite is a day-long, in-person gathering where the Seltra team comes together to connect, build, and think clearly about what's next. This is our maiden edition, blending structured sessions with hands-on workshops.
>
> The theme is **Emergence**. We'll look back at what we shipped this year, be honest about what worked and what didn't, and line up the year ahead with the kind of clarity that only happens in one room, together.

Notes on the edit from your draft:
- Cut "from around the world" — the team is five people in Accra right now, and the line reads more credible without overreaching (matches the "no exaggeration" tone from the retreat guide itself).
- Fixed "This our maiden edition" → "This is our maiden edition"; "structured sessions and workshop" → "workshops."
- Made the tagline its own opening line rather than folding it into the first sentence, so it reads as a statement rather than a fragment.
- Kept your closing line close to verbatim — "the kind of clarity that only happens in the same room" was already the strongest sentence in the draft, so I only tightened it to "one room, together" for rhythm.

**4. File touchpoints for Copilot**
- `lib/data.ts` — add `endsAtISO`, `getEventStatus()`
- `components/Hero.tsx` — replace the current date/venue row with the new status card (badge + date/time + "Offsite 2026")
- `components/AboutOffsite.tsx` — swap in the copy above, keep everything else (animated logo block, team chips, "photos coming soon") unchanged