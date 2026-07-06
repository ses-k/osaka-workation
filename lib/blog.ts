export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "callout"; text: string }
  | { type: "cafe"; n: number; name: string; area: string; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string; // ISO
  dateLabel: string;
  readingTime: string;
  tags: string[];
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "best-laptop-cafes-osaka",
    title: "The Best Laptop-Friendly Cafés in Osaka for Remote Work",
    excerpt:
      "Where to actually get work done in Osaka — the specialty-coffee spots and neighborhoods our community reaches for, plus the local café etiquette that keeps you welcome.",
    cover: "/blog/cafes-cover.jpg",
    date: "2026-07-06",
    dateLabel: "July 6, 2026",
    readingTime: "6 min read",
    tags: ["Osaka", "Remote work", "Cafés"],
    body: [
      {
        type: "p",
        text: "Osaka is one of the easiest cities in Japan to work from — fast public Wi-Fi, walkable neighborhoods, and a serious specialty-coffee scene. But not every great café is a great office. Some are tiny, some get slammed at lunch, and a few politely discourage laptops at peak times. This is the shortlist our community keeps coming back to, grouped by the vibe you're after.",
      },
      {
        type: "callout",
        text: "Café policies change often. Some spots welcome laptops all day; others limit them at busy hours or on weekends. Always check the signage or ask staff before you settle in — and when in doubt, order more than one drink.",
      },
      {
        type: "h2",
        text: "For long, focused sessions",
      },
      {
        type: "cafe",
        n: 1,
        name: "Brooklyn Roasting Company",
        area: "Kitahama",
        text: "A spacious, industrial roastery right on the Tosabori river. Big communal tables, plenty of natural light, and a calm midweek crowd make it a reliable half-day spot. The riverside terrace is a bonus in autumn.",
      },
      {
        type: "cafe",
        n: 2,
        name: "Takamura Wine & Coffee Roasters",
        area: "Utsubo / Honmachi",
        text: "A converted warehouse with high ceilings and long wooden tables. It's roomy enough that a laptop never feels out of place, and the coffee program is one of the best in the city. Come early on weekends.",
      },
      {
        type: "img",
        src: "/blog/cafes-inline.jpg",
        alt: "Working on a laptop by a window overlooking Osaka",
        caption: "Window seats + a fresh pour-over = the Osaka work morning.",
      },
      {
        type: "h2",
        text: "For a quick, buzzy work break",
      },
      {
        type: "cafe",
        n: 3,
        name: "LiLo Coffee Roasters",
        area: "Amerikamura",
        text: "In the middle of Osaka's youth-culture district. Energetic, excellent single-origins, and great for a sharp 60–90 minute sprint between meetings rather than a full day of deep work.",
      },
      {
        type: "cafe",
        n: 4,
        name: "Streamer Coffee Company",
        area: "Shinsaibashi",
        text: "Roomy, central, and famous for its latte art. Easy to grab a table for a focused block, and a short walk from most Namba/Shinsaibashi stays.",
      },
      {
        type: "cafe",
        n: 5,
        name: "Mel Coffee Roasters",
        area: "Shinsaibashi",
        text: "Small but beloved by the coffee crowd. Better for a short session and a great flat white than for camping out — a perfect reset between coworking stints.",
      },
      {
        type: "cafe",
        n: 6,
        name: "Blue Bottle Coffee",
        area: "Umeda & Namba",
        text: "Not local, but reliably comfortable, with consistent seating and Wi-Fi. A safe default when you just need a clean table and a good cup near the station.",
      },
      {
        type: "h2",
        text: "Café etiquette in Osaka",
      },
      {
        type: "p",
        text: "A little courtesy goes a long way and keeps these places laptop-friendly for everyone after you:",
      },
      {
        type: "list",
        items: [
          "Order something every 60–90 minutes if you're staying a while.",
          "Avoid the lunch rush (roughly 12:00–13:30) if you plan to linger.",
          "Bring earbuds and keep calls outside — Japanese cafés are quiet by default.",
          "Watch for 'no laptop' or time-limit signs, especially on weekends.",
          "Pack a power bank — outlets are common but never guaranteed.",
        ],
      },
      {
        type: "h2",
        text: "Wi-Fi, power, and staying connected",
      },
      {
        type: "p",
        text: "Most Osaka cafés offer free Wi-Fi, and citywide speeds are excellent (100+ Mbps is normal). Still, for video calls we recommend carrying your own connection — a travel eSIM or pocket Wi-Fi means you're never hostage to a flaky café network. If you need guaranteed uptime and a real desk, that's exactly what a coworking day pass is for.",
      },
      {
        type: "h2",
        text: "Which neighborhood should you base in?",
      },
      {
        type: "list",
        items: [
          "Kitahama & Honmachi — calm, riverside, business-district cafés for deep work.",
          "Shinsaibashi & Amerikamura — central and buzzy, great between meetings.",
          "Tennoji & Nakazakicho — quieter, indie cafés with a local, creative feel.",
        ],
      },
      {
        type: "callout",
        text: "Want the café crawl done for you? Our community runs a weekly coffee meetup that rotates through Osaka's best work spots — and the November Workation includes a dedicated coworking pass so you're never hunting for an outlet.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
