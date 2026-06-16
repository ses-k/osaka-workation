"use client";

import { useState } from "react";
import { Instagram, Users, CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";

const TABS = [
  {
    key: "social",
    label: "Social media",
    icon: Instagram,
    headline: "We document the real Osaka",
    body: "Short-form video and photo storytelling that shows remote workers what daily life in Osaka actually looks like — the cafes, the neighborhoods, the food, the people.",
    points: ["Instagram & TikTok", "Local creator network", "100K+ views and climbing"],
    cta: { label: "Follow @osaka_workation", href: "https://www.instagram.com/osaka_workation", external: true },
  },
  {
    key: "meetups",
    label: "Monthly meetups",
    icon: Users,
    headline: "Strangers in, community out",
    body: "Coffee mornings, cooking classes, and photo walks that run all year. Low-key, welcoming, and the easiest way to land a ready-made crew in a new city.",
    points: ["Weekly Thursday coffee", "Cooking & culture nights", "Monthly photo walks"],
    cta: { label: "See the meetups", href: "/events#meetups", external: false },
  },
  {
    key: "workation",
    label: "Annual Workation",
    icon: CalendarDays,
    headline: "Two weeks, the full Osaka life",
    body: "Our November flagship bundles a stay, coworking, cultural experiences, and Kansai day trips into one package — work your mornings, live the city your evenings.",
    points: ["14 days · 50–100 people", "Stay + coworking + culture", "Kyoto & Nara day trips"],
    cta: { label: "Explore the Workation", href: "/events#workation", external: false },
  },
];

export function AboutTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];
  const Icon = tab.icon;

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {TABS.map((t, i) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(i)}
            className={`flex shrink-0 items-center gap-3 rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition-all lg:shrink ${
              i === active
                ? "border-brand-orange bg-brand-orange/10 text-brand-ink"
                : "border-paper-line bg-white text-muted hover:border-brand-orange/40 hover:text-brand-ink"
            }`}
          >
            <t.icon
              className={`h-5 w-5 ${i === active ? "text-brand-orange" : "text-muted-soft"}`}
              strokeWidth={1.75}
            />
            {t.label}
          </button>
        ))}
      </div>

      <div
        key={tab.key}
        className="animate-fade-up rounded-3xl border border-paper-line bg-white p-8 sm:p-10"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-brand-ink">
          {tab.headline}
        </h3>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">{tab.body}</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-ink/80">
          {tab.points.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          {tab.cta.external ? (
            <a
              href={tab.cta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-orangeHover"
            >
              {tab.cta.label} <ArrowRight className="h-4 w-4" />
            </a>
          ) : (
            <Link
              href={tab.cta.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-orangeHover"
            >
              {tab.cta.label} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
